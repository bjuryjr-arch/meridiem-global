/**
 * GET /api/hubstaff/activity?clientId=<id>&range=yesterday|week|custom&start=YYYY-MM-DD&stop=YYYY-MM-DD
 *
 * Returns normalised worker activity summaries for the given client.
 * Aggregates daily activity records per user and attaches member names.
 */

import { NextRequest, NextResponse } from "next/server";
import {
  fetchMembers,
  fetchActivities,
  getUserIdsForClient,
  yesterdayRange,
  thisWeekRange,
  ConfigError,
  HubstaffApiError,
} from "@/lib/hubstaff/client";
import type { HubstaffWorkerSummary } from "@/lib/hubstaff/types";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const clientId = searchParams.get("clientId");
  const range = searchParams.get("range") ?? "yesterday";

  if (!clientId) {
    return NextResponse.json({ error: "clientId is required" }, { status: 400 });
  }

  try {
    // ── Resolve date range ────────────────────────────────────────────────────
    let start: string, stop: string;
    if (range === "week") {
      ({ start, stop } = thisWeekRange());
    } else if (range === "custom") {
      start = searchParams.get("start") ?? "";
      stop = searchParams.get("stop") ?? "";
      if (!start || !stop) {
        return NextResponse.json({ error: "start and stop required for custom range" }, { status: 400 });
      }
    } else {
      ({ start, stop } = yesterdayRange());
    }

    // ── Resolve which Hubstaff users belong to this client ───────────────────
    const allowedIds = getUserIdsForClient(clientId);
    if (allowedIds === null) {
      return NextResponse.json({ workers: [], meta: { start, stop, clientMappingMissing: true } });
    }

    const [members, activities] = await Promise.all([
      fetchMembers(),
      fetchActivities(start, stop, allowedIds.length > 0 ? allowedIds : undefined),
    ]);

    // Build member name/email lookup
    const memberMap = new Map(members.map(m => [m.id, m]));

    // Filter members to allowed list
    const visibleMembers =
      allowedIds.length === 0 ? members : members.filter(m => allowedIds.includes(m.id));
    const visibleIds = new Set(visibleMembers.map(m => m.id));

    // ── Aggregate activity per user ───────────────────────────────────────────
    type Agg = {
      totalTracked: number;   // seconds
      totalActivity: number;  // sum of per-row activity%
      rowCount: number;
      projectName?: string;
      taskName?: string;
    };
    const agg = new Map<number, Agg>();

    for (const a of activities) {
      if (!visibleIds.has(a.user_id)) continue;
      const prev = agg.get(a.user_id) ?? { totalTracked: 0, totalActivity: 0, rowCount: 0 };
      agg.set(a.user_id, {
        totalTracked: prev.totalTracked + (a.tracked ?? 0),
        totalActivity: prev.totalActivity + (a.activity ?? 0),
        rowCount: prev.rowCount + 1,
        projectName: a.project_name ?? prev.projectName,
        taskName: a.task_name ?? prev.taskName,
      });
    }

    // ── Build worker summaries ────────────────────────────────────────────────
    const workers: HubstaffWorkerSummary[] = visibleMembers.map(m => {
      const a = agg.get(m.id);
      const trackedSeconds = a?.totalTracked ?? 0;
      const avgActivity = a && a.rowCount > 0 ? Math.round(a.totalActivity / a.rowCount) : 0;

      return {
        hubstaffUserId: m.id,
        name: m.name,
        email: m.email,
        // For "yesterday" range, hoursYesterday = total tracked; for "week", 0 (use hoursThisWeek)
        hoursYesterday: range === "yesterday" ? Math.round((trackedSeconds / 3600) * 100) / 100 : 0,
        hoursThisWeek: range === "week" ? Math.round((trackedSeconds / 3600) * 100) / 100 : 0,
        activityPct: avgActivity,
        projectName: a?.projectName,
        taskName: a?.taskName,
      };
    });

    return NextResponse.json({ workers, meta: { start, stop, range } });
  } catch (err) {
    return handleError(err);
  }
}

function handleError(err: unknown) {
  if (err instanceof ConfigError) {
    return NextResponse.json(
      { error: "Hubstaff is not configured. Set HUBSTAFF_PERSONAL_ACCESS_TOKEN and HUBSTAFF_ORG_ID." },
      { status: 503 }
    );
  }
  if (err instanceof HubstaffApiError) {
    const safe = err.status === 401
      ? "Invalid Hubstaff credentials. Check HUBSTAFF_PERSONAL_ACCESS_TOKEN."
      : "Hubstaff API error. Please try again shortly.";
    return NextResponse.json({ error: safe }, { status: err.status });
  }
  console.error("[hubstaff/activity]", err);
  return NextResponse.json({ error: "Unexpected server error." }, { status: 500 });
}
