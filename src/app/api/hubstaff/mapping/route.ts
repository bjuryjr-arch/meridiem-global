/**
 * GET /api/hubstaff/mapping  — read current mapping (admin only)
 * POST /api/hubstaff/mapping — update a single client entry
 *
 * Note: in production, protect these routes with session-based auth middleware.
 * For now they are used only from the admin panel which is behind portal auth.
 */

import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import type { ClientHubstaffMapping } from "@/lib/hubstaff/types";

const MAPPING_PATH = path.join(process.cwd(), "src/lib/hubstaff/mapping.json");

async function readMapping(): Promise<ClientHubstaffMapping[]> {
  const raw = await fs.readFile(MAPPING_PATH, "utf-8");
  return JSON.parse(raw);
}

export async function GET() {
  try {
    const mapping = await readMapping();
    return NextResponse.json({ mapping });
  } catch {
    return NextResponse.json({ error: "Failed to read mapping." }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as Partial<ClientHubstaffMapping>;
    if (!body.clientId) {
      return NextResponse.json({ error: "clientId required" }, { status: 400 });
    }

    const mapping = await readMapping();
    const idx = mapping.findIndex(m => m.clientId === body.clientId);
    const updated: ClientHubstaffMapping = {
      clientId: body.clientId,
      label: body.label ?? body.clientId,
      hubstaffUserIds: body.hubstaffUserIds ?? [],
      hubstaffProjectIds: body.hubstaffProjectIds ?? [],
    };

    if (idx >= 0) {
      mapping[idx] = updated;
    } else {
      mapping.push(updated);
    }

    await fs.writeFile(MAPPING_PATH, JSON.stringify(mapping, null, 2));
    return NextResponse.json({ ok: true, mapping });
  } catch {
    return NextResponse.json({ error: "Failed to update mapping." }, { status: 500 });
  }
}
