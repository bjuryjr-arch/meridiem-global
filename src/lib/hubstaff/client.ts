/**
 * Server-only Hubstaff API client.
 * Never import this file from client components — only from API routes.
 *
 * Hubstaff API v2 docs: https://developer.hubstaff.com/docs/hubstaff_v2
 */

import type {
  HubstaffMember,
  HubstaffActivity,
  HubstaffScreenshot,
  HubstaffProject,
  ClientHubstaffMapping,
} from "./types";

const BASE = "https://api.hubstaff.com/v2";

// ─── Config ───────────────────────────────────────────────────────────────────

function getToken(): string {
  const t = process.env.HUBSTAFF_PERSONAL_ACCESS_TOKEN;
  if (!t) throw new ConfigError("HUBSTAFF_PERSONAL_ACCESS_TOKEN is not set");
  return t;
}

function getOrgId(): string {
  const o = process.env.HUBSTAFF_ORG_ID;
  if (!o) throw new ConfigError("HUBSTAFF_ORG_ID is not set");
  return o;
}

export class ConfigError extends Error {
  constructor(msg: string) { super(msg); this.name = "ConfigError"; }
}

export class HubstaffApiError extends Error {
  constructor(public status: number, msg: string) {
    super(msg); this.name = "HubstaffApiError";
  }
}

// ─── Simple in-memory cache (per-process, resets on cold start) ───────────────

const cache = new Map<string, { data: unknown; expires: number }>();
const TTL = Number(process.env.HUBSTAFF_CACHE_TTL ?? 300) * 1000;

async function cachedFetch<T>(url: string, params: Record<string, string> = {}): Promise<T> {
  const qs = new URLSearchParams(params).toString();
  const key = qs ? `${url}?${qs}` : url;

  const hit = cache.get(key);
  if (hit && hit.expires > Date.now()) return hit.data as T;

  const fullUrl = qs ? `${url}?${qs}` : url;
  const res = await fetch(fullUrl, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
      "Content-Type": "application/json",
    },
    // Next.js cache — bypass ISR, always use our own in-memory cache
    cache: "no-store",
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new HubstaffApiError(res.status, `Hubstaff ${res.status}: ${body}`);
  }

  const data = await res.json() as T;
  cache.set(key, { data, expires: Date.now() + TTL });
  return data;
}

// ─── Date helpers ─────────────────────────────────────────────────────────────

function isoDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

export function yesterdayRange(): { start: string; stop: string } {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  const start = isoDate(d);
  return { start, stop: start };
}

export function thisWeekRange(): { start: string; stop: string } {
  const now = new Date();
  const day = now.getDay(); // 0=Sun
  const monday = new Date(now);
  monday.setDate(now.getDate() - ((day + 6) % 7));
  return { start: isoDate(monday), stop: isoDate(now) };
}

// ─── API methods ──────────────────────────────────────────────────────────────

/** Fetch all members in the org. */
export async function fetchMembers(): Promise<HubstaffMember[]> {
  const orgId = getOrgId();
  // Hubstaff paginates at 500; fetch first page (enough for typical orgs)
  const data = await cachedFetch<{ members: HubstaffMember[] }>(
    `${BASE}/organizations/${orgId}/members`,
    { page_limit: "500" }
  );
  return data.members ?? [];
}

/** Fetch daily activity for a date range, optionally filtering by user IDs. */
export async function fetchActivities(
  start: string,
  stop: string,
  userIds?: number[]
): Promise<HubstaffActivity[]> {
  const orgId = getOrgId();
  const params: Record<string, string> = {
    "time_slot[start]": `${start}T00:00:00`,
    "time_slot[stop]": `${stop}T23:59:59`,
    include: "projects,tasks",
    page_limit: "500",
  };
  if (userIds && userIds.length > 0) {
    params["user_ids"] = userIds.join(",");
  }
  const data = await cachedFetch<{ daily_activities: HubstaffActivity[] }>(
    `${BASE}/organizations/${orgId}/activities/daily`,
    params
  );
  return data.daily_activities ?? [];
}

/** Fetch screenshots for a date range, optionally filtering by user IDs. */
export async function fetchScreenshots(
  start: string,
  stop: string,
  userIds?: number[]
): Promise<HubstaffScreenshot[]> {
  const orgId = getOrgId();
  const params: Record<string, string> = {
    "time_slot[start]": `${start}T00:00:00`,
    "time_slot[stop]": `${stop}T23:59:59`,
    include: "projects,tasks,urls",
    page_limit: "100",
  };
  if (userIds && userIds.length > 0) {
    params["user_ids"] = userIds.join(",");
  }
  const data = await cachedFetch<{ screenshots: HubstaffScreenshot[] }>(
    `${BASE}/organizations/${orgId}/screenshots`,
    params
  );
  return data.screenshots ?? [];
}

/** Fetch all projects in the org. */
export async function fetchProjects(): Promise<HubstaffProject[]> {
  const orgId = getOrgId();
  const data = await cachedFetch<{ projects: HubstaffProject[] }>(
    `${BASE}/organizations/${orgId}/projects`,
    { status: "active", page_limit: "500" }
  );
  return data.projects ?? [];
}

// ─── Mapping helpers ──────────────────────────────────────────────────────────

/** Load client→Hubstaff mapping from the JSON file. */
export function loadMapping(): ClientHubstaffMapping[] {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  return require("./mapping.json") as ClientHubstaffMapping[];
}

/**
 * Return the Hubstaff user IDs for a given portal client.
 * Returns null if no mapping entry exists.
 * Returns [] (empty) if the entry exists but has no user IDs → show all.
 */
export function getUserIdsForClient(clientId: string): number[] | null {
  const mapping = loadMapping();
  const entry = mapping.find(m => m.clientId === clientId);
  if (!entry) return null;
  return entry.hubstaffUserIds ?? [];
}
