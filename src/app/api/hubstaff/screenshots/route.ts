/**
 * GET /api/hubstaff/screenshots?clientId=<id>&date=YYYY-MM-DD
 *
 * Returns recent screenshots for the given client, defaulting to yesterday.
 * Screenshot image URLs are proxied from Hubstaff (time-limited signed URLs).
 */

import { NextRequest, NextResponse } from "next/server";
import {
  fetchMembers,
  fetchScreenshots,
  getUserIdsForClient,
  yesterdayRange,
  ConfigError,
  HubstaffApiError,
} from "@/lib/hubstaff/client";
import type { HubstaffScreenshotItem } from "@/lib/hubstaff/types";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const clientId = searchParams.get("clientId");
  const date = searchParams.get("date"); // optional YYYY-MM-DD override

  if (!clientId) {
    return NextResponse.json({ error: "clientId is required" }, { status: 400 });
  }

  try {
    const { start } = date ? { start: date } : yesterdayRange();
    const stop = start; // screenshots are fetched per-day

    // ── Resolve allowed user IDs ──────────────────────────────────────────────
    const allowedIds = getUserIdsForClient(clientId);
    if (allowedIds === null) {
      return NextResponse.json({ screenshots: [], meta: { date: start, clientMappingMissing: true } });
    }

    const [members, screenshots] = await Promise.all([
      fetchMembers(),
      fetchScreenshots(start, stop, allowedIds.length > 0 ? allowedIds : undefined),
    ]);

    const memberMap = new Map(members.map(m => [m.id, m]));
    const visibleIds = new Set(
      allowedIds.length === 0 ? members.map(m => m.id) : allowedIds
    );

    // ── Normalise screenshots ─────────────────────────────────────────────────
    const items: HubstaffScreenshotItem[] = screenshots
      .filter(s => visibleIds.has(s.user_id))
      .map(s => ({
        id: s.id,
        hubstaffUserId: s.user_id,
        workerName: memberMap.get(s.user_id)?.name ?? `User ${s.user_id}`,
        capturedAt: s.recorded_at ?? s.time_slot,
        activityPct: s.activity_percent ?? 0,
        // Hubstaff returns urls as {url, thumb} in the `screenshots` response
        url: (s as unknown as { url?: string }).url ?? null,
        thumbUrl: (s as unknown as { thumbUrl?: string }).thumbUrl ?? (s as unknown as { url?: string }).url ?? null,
      }))
      .sort((a, b) => new Date(b.capturedAt).getTime() - new Date(a.capturedAt).getTime());

    return NextResponse.json({ screenshots: items, meta: { date: start } });
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
  console.error("[hubstaff/screenshots]", err);
  return NextResponse.json({ error: "Unexpected server error." }, { status: 500 });
}
