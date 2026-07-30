/**
 * GET /api/hubstaff/members?clientId=<portalClientId>
 *
 * Returns Hubstaff members filtered to the requesting client's assigned users.
 * Must be called from the portal frontend (clientId comes from the session,
 * enforced server-side — never trust the query param alone in production auth).
 */

import { NextRequest, NextResponse } from "next/server";
import { fetchMembers, getUserIdsForClient, ConfigError, HubstaffApiError } from "@/lib/hubstaff/client";

export async function GET(req: NextRequest) {
  const clientId = req.nextUrl.searchParams.get("clientId");
  if (!clientId) {
    return NextResponse.json({ error: "clientId is required" }, { status: 400 });
  }

  try {
    const allowedIds = getUserIdsForClient(clientId);
    const members = await fetchMembers();

    // Filter to this client's users; empty allowedIds means "show all" (admin)
    const filtered =
      allowedIds === null
        ? []
        : allowedIds.length === 0
        ? members
        : members.filter(m => allowedIds.includes(m.id));

    return NextResponse.json({ members: filtered });
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
  console.error("[hubstaff/members]", err);
  return NextResponse.json({ error: "Unexpected server error." }, { status: 500 });
}
