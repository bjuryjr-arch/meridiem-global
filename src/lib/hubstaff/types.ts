// ─── Hubstaff API response types ──────────────────────────────────────────────

export interface HubstaffMember {
  id: number;
  name: string;
  email: string;
  status: string;
  role: string;
}

export interface HubstaffActivity {
  date: string;           // "YYYY-MM-DD"
  user_id: number;
  tracked: number;        // seconds tracked
  input_tracked: number;
  manual: number;
  idle: number;
  resumed: number;
  billable: number;
  paid: number;
  activity: number;       // 0–100 percentage
  project_id?: number;
  project_name?: string;
  task_id?: number;
  task_name?: string;
}

export interface HubstaffScreenshot {
  id: number;
  user_id: number;
  time_slot: string;   // ISO datetime
  recorded_at: string; // ISO datetime
  width: number;
  height: number;
  url?: string;
  thumbUrl?: string;
  activity_percent?: number;
  project_id?: number;
  task_id?: number;
}

export interface HubstaffProject {
  id: number;
  name: string;
  status: string;
}

// ─── Normalised shapes returned by our API routes ────────────────────────────

export interface HubstaffWorkerSummary {
  hubstaffUserId: number;
  name: string;
  email: string;
  hoursYesterday: number;
  hoursThisWeek: number;
  activityPct: number;      // 0-100
  projectName?: string;
  taskName?: string;
}

export interface HubstaffScreenshotItem {
  id: number;
  hubstaffUserId: number;
  workerName: string;
  capturedAt: string;       // ISO
  activityPct: number;
  thumbUrl: string | null;
  url: string | null;
  projectName?: string;
  taskName?: string;
}

// ─── Client → Hubstaff mapping ───────────────────────────────────────────────
// Stored in /src/lib/hubstaff/mapping.json (admin-editable)
// Each entry maps a portal clientId to an array of Hubstaff user IDs.
// If hubstaffUserIds is empty/absent, ALL org members are shown (useful for admins).

export interface ClientHubstaffMapping {
  clientId: string;
  label: string;                   // human-readable client name for admin UI
  hubstaffUserIds: number[];       // Hubstaff member IDs assigned to this client
  hubstaffProjectIds?: number[];   // optional: limit to specific Hubstaff projects
}
