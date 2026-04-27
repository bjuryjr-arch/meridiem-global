import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const BASE = "https://api.hubstaff.com/v2";

async function hubGet(path: string, token: string) {
  const url = `${BASE}${path}`;
  try {
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });
    const text = await res.text();
    let data: unknown;
    try { data = JSON.parse(text); } catch { data = text; }
    return { endpoint: url, status: res.status, ok: res.ok, data };
  } catch (err) {
    return { endpoint: url, status: null, ok: false, data: null, error: String(err) };
  }
}

export async function GET() {
  const token = process.env.HUBSTAFF_TOKEN;
  const orgId = process.env.HUBSTAFF_ORG_ID;

  if (!token) {
    return NextResponse.json({ error: "HUBSTAFF_TOKEN is not set" }, { status: 500 });
  }
  if (!orgId) {
    return NextResponse.json({ error: "HUBSTAFF_ORG_ID is not set" }, { status: 500 });
  }

  const today = new Date().toISOString().split("T")[0];
  const weekAgo = new Date(Date.now() - 7 * 864e5).toISOString().split("T")[0];

  const [orgResult, projectsResult, membersResult, timeResult] = await Promise.all([
    hubGet(`/organizations/${orgId}`, token),
    hubGet(`/organizations/${orgId}/projects?status=active&per_page=50`, token),
    hubGet(`/organizations/${orgId}/members?per_page=50`, token),
    hubGet(`/organizations/${orgId}/activities/daily?date_start=${weekAgo}&date_stop=${today}&per_page=10`, token),
  ]);

  const summary: Record<string, unknown> = {};

  if (orgResult.ok) {
    const d = orgResult.data as Record<string, unknown>;
    const org = (d.organization ?? d) as Record<string, unknown>;
    summary.organization = { id: org.id, name: org.name, status: org.status };
  }

  if (projectsResult.ok) {
    const d = projectsResult.data as Record<string, unknown>;
    const projects = (d.projects ?? []) as Record<string, unknown>[];
    summary.projects = projects.map((p) => ({ id: p.id, name: p.name, status: p.status }));
    summary.projectCount = projects.length;
  }

  if (membersResult.ok) {
    const d = membersResult.data as Record<string, unknown>;
    const members = (d.members ?? []) as Record<string, unknown>[];
    summary.members = members.map((m) => ({ id: m.id, name: m.name, email: m.email, status: m.status, role: m.role }));
    summary.memberCount = members.length;
  }

  if (timeResult.ok) {
    const d = timeResult.data as Record<string, unknown>;
    const activities = (d.daily_activities ?? d.activities ?? []) as unknown[];
    summary.timeActivityAccessible = true;
    summary.recentActivityEntries = activities.length;
  }

  return NextResponse.json({
    config: {
      orgId,
      tokenPresent: true,
      tokenPreview: `${token.slice(0, 20)}...${token.slice(-8)}`,
    },
    summary,
    raw: {
      organization: { endpoint: orgResult.endpoint, status: orgResult.status, ok: orgResult.ok, ...(orgResult.ok ? {} : { error: orgResult.data }) },
      projects: { endpoint: projectsResult.endpoint, status: projectsResult.status, ok: projectsResult.ok, ...(projectsResult.ok ? {} : { error: projectsResult.data }) },
      members: { endpoint: membersResult.endpoint, status: membersResult.status, ok: membersResult.ok, ...(membersResult.ok ? {} : { error: membersResult.data }) },
      timeActivity: { endpoint: timeResult.endpoint, status: timeResult.status, ok: timeResult.ok, ...(timeResult.ok ? {} : { error: timeResult.data }) },
    },
  });
}
