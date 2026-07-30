"use client";
import { useState, useEffect, useCallback } from "react";
import { useAuth } from "@/lib/portal/data";
import {
  Card, StatCard, Badge, PageShell, SectionHeader, EmptyState, ActivityBar,
} from "@/components/portal/ui";
import { Icon, ICONS } from "@/components/portal/icons";
import type { HubstaffWorkerSummary, HubstaffScreenshotItem } from "@/lib/hubstaff/types";

// ─── Types ────────────────────────────────────────────────────────────────────

type RangeTab = "yesterday" | "week";

interface ActivityData {
  workers: HubstaffWorkerSummary[];
  meta: { start: string; stop: string; range: string; clientMappingMissing?: boolean };
}
interface ScreenshotData {
  screenshots: HubstaffScreenshotItem[];
  meta: { date: string; clientMappingMissing?: boolean };
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fmtHours(h: number) {
  if (h === 0) return "0h";
  const hrs = Math.floor(h);
  const mins = Math.round((h - hrs) * 60);
  return mins > 0 ? `${hrs}h ${mins}m` : `${hrs}h`;
}

function fmtTime(iso: string) {
  return new Date(iso).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
}

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function HubstaffPage() {
  const { user, viewAsClientId } = useAuth();

  // Determine which clientId to use for the API calls
  // Admin viewing as a specific client uses that client's mapping
  const effectiveClientId = viewAsClientId ?? user?.clientId ?? (user?.role === "admin" ? "info-meridiem" : null);

  const [range, setRange] = useState<RangeTab>("yesterday");
  const [activityData, setActivityData] = useState<ActivityData | null>(null);
  const [screenshotData, setScreenshotData] = useState<ScreenshotData | null>(null);
  const [activityLoading, setActivityLoading] = useState(false);
  const [screenshotsLoading, setScreenshotsLoading] = useState(false);
  const [activityError, setActivityError] = useState<string | null>(null);
  const [screenshotsError, setScreenshotsError] = useState<string | null>(null);
  const [selectedShot, setSelectedShot] = useState<HubstaffScreenshotItem | null>(null);

  const loadActivity = useCallback(async () => {
    if (!effectiveClientId) return;
    setActivityLoading(true);
    setActivityError(null);
    try {
      const res = await fetch(`/api/hubstaff/activity?clientId=${encodeURIComponent(effectiveClientId)}&range=${range}`);
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Failed to load activity");
      setActivityData(json);
    } catch (e) {
      setActivityError(e instanceof Error ? e.message : "Failed to load activity data");
    } finally {
      setActivityLoading(false);
    }
  }, [effectiveClientId, range]);

  const loadScreenshots = useCallback(async () => {
    if (!effectiveClientId) return;
    setScreenshotsLoading(true);
    setScreenshotsError(null);
    try {
      const res = await fetch(`/api/hubstaff/screenshots?clientId=${encodeURIComponent(effectiveClientId)}`);
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Failed to load screenshots");
      setScreenshotData(json);
    } catch (e) {
      setScreenshotsError(e instanceof Error ? e.message : "Failed to load screenshots");
    } finally {
      setScreenshotsLoading(false);
    }
  }, [effectiveClientId]);

  useEffect(() => { loadActivity(); }, [loadActivity]);
  useEffect(() => { loadScreenshots(); }, [loadScreenshots]);

  if (!effectiveClientId) {
    return (
      <PageShell title="Hours & Activity" sub="Hubstaff time tracking data">
        <Card className="p-0">
          <EmptyState
            icon={<Icon d={ICONS.hours} size={36} />}
            title="No account linked"
            sub="Your portal account is not yet linked to a Hubstaff organisation. Contact your Meridiem account manager."
          />
        </Card>
      </PageShell>
    );
  }

  const workers = activityData?.workers ?? [];
  const screenshots = screenshotData?.screenshots ?? [];
  const mappingMissing = activityData?.meta?.clientMappingMissing;

  // Aggregate totals
  const totalHrsKey = range === "week" ? "hoursThisWeek" : "hoursYesterday";
  const totalHours = workers.reduce((s, w) => s + w[totalHrsKey], 0);
  const avgActivity = workers.length > 0
    ? Math.round(workers.reduce((s, w) => s + w.activityPct, 0) / workers.length)
    : 0;

  return (
    <PageShell
      title="Hours & Activity"
      sub="Live Hubstaff data for your remote team"
    >
      {/* ── Range tabs ──────────────────────────────────────────────────────── */}
      <div className="flex gap-2 mb-6">
        {(["yesterday", "week"] as RangeTab[]).map(r => (
          <button key={r} onClick={() => setRange(r)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all ${
              range === r
                ? "bg-[#091929] text-white border-[#091929]"
                : "bg-white border-[#e2d9c8] text-[#394452] hover:border-[#394452]"
            }`}>
            {r === "yesterday" ? "Yesterday" : "This Week"}
          </button>
        ))}
        <button onClick={() => { loadActivity(); loadScreenshots(); }}
          className="ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-[#e2d9c8] bg-white text-[#394452] hover:border-[#394452] transition-all">
          <svg className="h-3 w-3" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" d="M13.5 8A5.5 5.5 0 112.5 8" />
            <path strokeLinecap="round" d="M13.5 8V4.5M13.5 8H10" />
          </svg>
          Refresh
        </button>
      </div>

      {/* ── Config missing notice ────────────────────────────────────────────── */}
      {mappingMissing && (
        <Card className="mb-5 p-4 border-amber-200 bg-amber-50">
          <p className="text-sm text-amber-800 font-medium">Hubstaff mapping not configured</p>
          <p className="text-xs text-amber-700 mt-1">
            This account has no Hubstaff user mapping. Ask your Meridiem admin to configure it in the Admin Panel → Hubstaff Mapping.
          </p>
        </Card>
      )}

      {/* ── Stat row ─────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
        <StatCard
          label={range === "yesterday" ? "Hours Yesterday" : "Hours This Week"}
          value={activityLoading ? "—" : fmtHours(totalHours)}
          sub={activityLoading ? "Loading…" : `${workers.length} worker${workers.length !== 1 ? "s" : ""}`}
          icon={<Icon d={ICONS.hours} size={22} />}
        />
        <StatCard
          label="Avg Activity"
          value={activityLoading ? "—" : `${avgActivity}%`}
          sub={activityLoading ? "Loading…" : "keyboard & mouse"}
          icon={<Icon d={ICONS.activity} size={22} />}
          accent={avgActivity >= 70 ? "text-emerald-600" : avgActivity >= 40 ? "text-amber-600" : "text-[#091929]"}
        />
        <StatCard
          label="Screenshots"
          value={screenshotsLoading ? "—" : String(screenshots.length)}
          sub={screenshotsLoading ? "Loading…" : "from yesterday"}
          icon={<Icon d={ICONS.screenshots} size={22} />}
          className="col-span-2 md:col-span-1"
        />
      </div>

      {/* ── Error states ─────────────────────────────────────────────────────── */}
      {activityError && (
        <Card className="mb-5 p-4 border-red-100 bg-red-50">
          <p className="text-sm font-medium text-red-800">Could not load activity data</p>
          <p className="text-xs text-red-700 mt-1">{activityError}</p>
        </Card>
      )}

      {/* ── Worker table ─────────────────────────────────────────────────────── */}
      <SectionHeader title="Worker Summary" sub={`${range === "yesterday" ? "Yesterday" : "This week"}'s tracked time`} />

      {activityLoading ? (
        <Card className="p-6">
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex items-center gap-4 animate-pulse">
                <div className="h-9 w-9 rounded-full bg-[#e8dfc9]" />
                <div className="flex-1 space-y-2">
                  <div className="h-3 w-32 bg-[#e8dfc9] rounded" />
                  <div className="h-2.5 w-48 bg-[#f0e9d8] rounded" />
                </div>
                <div className="h-3 w-12 bg-[#e8dfc9] rounded" />
              </div>
            ))}
          </div>
        </Card>
      ) : workers.length === 0 && !activityError ? (
        <Card className="p-0 mb-6">
          <EmptyState
            icon={<Icon d={ICONS.team} size={36} />}
            title="No activity found"
            sub={range === "yesterday" ? "No tracked hours recorded yesterday." : "No tracked hours recorded this week."}
          />
        </Card>
      ) : (
        <Card className="mb-6 overflow-hidden">
          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#e8dfc9] bg-[#f8f3e4]">
                  <th className="text-left px-5 py-3 text-[11px] font-semibold text-[#7a8694] uppercase tracking-wider">Worker</th>
                  <th className="text-right px-5 py-3 text-[11px] font-semibold text-[#7a8694] uppercase tracking-wider">
                    {range === "yesterday" ? "Hours Yesterday" : "Hours This Week"}
                  </th>
                  <th className="text-right px-5 py-3 text-[11px] font-semibold text-[#7a8694] uppercase tracking-wider">Activity</th>
                  <th className="text-left px-5 py-3 text-[11px] font-semibold text-[#7a8694] uppercase tracking-wider">Project / Task</th>
                </tr>
              </thead>
              <tbody>
                {workers.map((w, i) => {
                  const hrs = range === "week" ? w.hoursThisWeek : w.hoursYesterday;
                  return (
                    <tr key={w.hubstaffUserId}
                      className={`border-b border-[#e8dfc9] last:border-0 hover:bg-[#f0e9d8] transition-colors ${i % 2 === 0 ? "" : ""}`}>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-[#091929] text-white text-xs font-semibold flex items-center justify-center shrink-0">
                            {w.name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2)}
                          </div>
                          <div>
                            <p className="font-medium text-[#091929]">{w.name}</p>
                            <p className="text-xs text-[#7a8694]">{w.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-right">
                        <span className="font-semibold text-[#091929]">{fmtHours(hrs)}</span>
                      </td>
                      <td className="px-5 py-4 text-right">
                        <div className="flex items-center justify-end gap-3">
                          <div className="w-20 hidden lg:block">
                            <ActivityBar pct={w.activityPct} />
                          </div>
                          <span className={`font-medium tabular-nums ${w.activityPct >= 70 ? "text-emerald-600" : w.activityPct >= 40 ? "text-amber-600" : "text-red-500"}`}>
                            {w.activityPct}%
                          </span>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex flex-wrap gap-1.5">
                          {w.projectName && <Badge label={w.projectName} variant="slate" />}
                          {w.taskName && <Badge label={w.taskName} variant="blue" />}
                          {!w.projectName && !w.taskName && <span className="text-xs text-[#7a8694]">—</span>}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden divide-y divide-[#e8dfc9]">
            {workers.map(w => {
              const hrs = range === "week" ? w.hoursThisWeek : w.hoursYesterday;
              return (
                <div key={w.hubstaffUserId} className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="h-8 w-8 rounded-full bg-[#091929] text-white text-xs font-semibold flex items-center justify-center shrink-0">
                        {w.name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2)}
                      </div>
                      <div>
                        <p className="font-medium text-[#091929] text-sm">{w.name}</p>
                        <p className="text-[11px] text-[#7a8694]">{w.email}</p>
                      </div>
                    </div>
                    <span className="font-semibold text-[#091929]">{fmtHours(hrs)}</span>
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <ActivityBar pct={w.activityPct} />
                    <span className={`text-xs font-medium ${w.activityPct >= 70 ? "text-emerald-600" : w.activityPct >= 40 ? "text-amber-600" : "text-red-500"}`}>
                      {w.activityPct}%
                    </span>
                  </div>
                  {(w.projectName || w.taskName) && (
                    <div className="flex gap-1.5 mt-2 flex-wrap">
                      {w.projectName && <Badge label={w.projectName} variant="slate" />}
                      {w.taskName && <Badge label={w.taskName} variant="blue" />}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Card>
      )}

      {/* ── Screenshots ──────────────────────────────────────────────────────── */}
      <SectionHeader title="Recent Screenshots" sub="Yesterday's activity captures" />

      {screenshotsError && (
        <Card className="mb-4 p-4 border-red-100 bg-red-50">
          <p className="text-sm font-medium text-red-800">Could not load screenshots</p>
          <p className="text-xs text-red-700 mt-1">{screenshotsError}</p>
        </Card>
      )}

      {screenshotsLoading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
          {[1, 2, 3, 4].map(i => (
            <Card key={i} className="overflow-hidden animate-pulse">
              <div className="aspect-[16/10] bg-[#e8dfc9]" />
              <div className="p-3 space-y-1.5">
                <div className="h-2.5 w-20 bg-[#e8dfc9] rounded" />
                <div className="h-2 w-14 bg-[#f0e9d8] rounded" />
              </div>
            </Card>
          ))}
        </div>
      ) : screenshots.length === 0 && !screenshotsError ? (
        <Card className="p-0">
          <EmptyState
            icon={<Icon d={ICONS.screenshots} size={36} />}
            title="No screenshots yesterday"
            sub="Screenshot captures will appear here once monitoring begins."
          />
        </Card>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
          {screenshots.map(s => (
            <Card key={s.id}
              className="overflow-hidden cursor-pointer hover:ring-2 hover:ring-[#091929]/20 transition-all"
              onClick={() => setSelectedShot(s)}>
              {/* Thumbnail */}
              <div className="relative bg-[#e8dfc9] aspect-[16/10] flex items-center justify-center overflow-hidden">
                {s.thumbUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={s.thumbUrl} alt={`Screenshot by ${s.workerName}`}
                    className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 flex flex-col gap-1.5 p-3">
                    <div className="h-2 w-3/4 bg-[#e2d9c8] rounded" />
                    <div className="h-2 w-1/2 bg-[#e2d9c8] rounded" />
                    <div className="mt-1 h-2 w-2/3 bg-[#e2d9c8] rounded" />
                  </div>
                )}
                <div className="absolute bottom-1.5 right-1.5">
                  <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${
                    s.activityPct >= 70 ? "bg-emerald-500 text-white" :
                    s.activityPct >= 40 ? "bg-amber-500 text-white" : "bg-red-500 text-white"
                  }`}>
                    {s.activityPct}%
                  </span>
                </div>
              </div>
              {/* Caption */}
              <div className="p-3">
                <p className="text-xs font-medium text-[#091929] truncate">{s.workerName}</p>
                <p className="text-[11px] text-[#7a8694] mt-0.5">{fmtTime(s.capturedAt)} · {fmtDate(s.capturedAt)}</p>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* ── Screenshot lightbox ──────────────────────────────────────────────── */}
      {selectedShot && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedShot(null)}>
          <div className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl"
            onClick={e => e.stopPropagation()}>
            {selectedShot.url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={selectedShot.url} alt="Screenshot"
                className="w-full object-contain max-h-[65vh]" />
            ) : (
              <div className="aspect-[16/10] bg-[#e8dfc9] flex items-center justify-center">
                <p className="text-sm text-[#7a8694]">Screenshot not available</p>
              </div>
            )}
            <div className="p-5 flex items-center justify-between">
              <div>
                <p className="font-semibold text-[#091929]">{selectedShot.workerName}</p>
                <p className="text-sm text-[#7a8694] mt-0.5">
                  {new Date(selectedShot.capturedAt).toLocaleString("en-US", {
                    weekday: "short", month: "short", day: "numeric",
                    hour: "2-digit", minute: "2-digit",
                  })}
                </p>
                <div className="flex gap-2 mt-2 flex-wrap">
                  {selectedShot.projectName && <Badge label={selectedShot.projectName} variant="slate" />}
                  {selectedShot.taskName && <Badge label={selectedShot.taskName} variant="blue" />}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-lg font-bold ${
                  selectedShot.activityPct >= 70 ? "text-emerald-600" :
                  selectedShot.activityPct >= 40 ? "text-amber-600" : "text-red-500"
                }`}>{selectedShot.activityPct}%</span>
                <button onClick={() => setSelectedShot(null)}
                  className="p-2 rounded-full bg-[#f0e9d8] text-[#394452] hover:bg-[#e8dfc9] transition-colors">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={2}>
                    <path d="M4 4l8 8M12 4l-8 8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </PageShell>
  );
}
