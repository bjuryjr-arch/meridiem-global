"use client";
import { useState, useEffect } from "react";
import { useClientId, getWorkers, getHours } from "@/lib/portal/data";
import type { Worker, HoursEntry } from "@/lib/portal/types";
import { Card, StatCard, ActivityBar, PageShell, SectionHeader, EmptyState } from "@/components/portal/ui";
import { Icon, ICONS } from "@/components/portal/icons";

export default function HoursPage() {
  const clientId = useClientId();
  const [workers, setWorkers] = useState<Worker[]>([]);
  const [hours, setHours] = useState<HoursEntry[]>([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const allWorkers = getWorkers();
    const allHours = getHours();
    const myWorkers = clientId ? allWorkers.filter(w => w.clientId === clientId) : [];
    const workerIds = new Set(myWorkers.map(w => w.id));
    setWorkers(myWorkers);
    setHours(allHours.filter(h => workerIds.has(h.workerId)));
  }, [clientId]);

  const filtered = filter === "all" ? hours : hours.filter(h => h.workerId === filter);

  const totalHours = filtered.reduce((s, h) => s + h.hours, 0);
  const avgActivity = filtered.length > 0
    ? Math.round(filtered.reduce((s, h) => s + h.activityPct, 0) / filtered.length)
    : 0;

  // Get unique dates for the bar chart
  const uniqueDates = [...new Set(hours.map(h => h.date))].sort().slice(-7);

  return (
    <PageShell title="Hours & Activity" sub="Time tracking for your remote team">

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
        <StatCard label="Total Hours" value={String(totalHours)} sub="in this view" icon={<Icon d={ICONS.hours} size={22} />} />
        <StatCard label="Avg Activity" value={`${avgActivity}%`} sub={`${filtered.length} entries`} icon={<Icon d={ICONS.activity} size={22} />} />
        <StatCard label="Workers" value={String(workers.length)} sub="tracked" icon={<Icon d={ICONS.team} size={22} />} className="col-span-2 md:col-span-1" />
      </div>

      {hours.length === 0 ? (
        <Card className="p-0">
          <EmptyState
            icon={<Icon d={ICONS.hours} size={36} />}
            title="No activity yet"
            sub="Hours and activity data will appear here once tracking begins."
          />
        </Card>
      ) : (
        <>
          {/* Bar chart */}
          {uniqueDates.length > 0 && (
            <Card className="p-5 mb-5">
              <p className="text-sm font-semibold text-[#091929] mb-4">Daily Hours (Last {uniqueDates.length} Days)</p>
              <div className="flex items-end gap-2 h-24">
                {uniqueDates.map(date => {
                  const dayHours = hours.filter(h => h.date === date && (filter === "all" || h.workerId === filter))
                    .reduce((s, h) => s + h.hours, 0);
                  const maxH = Math.max(...uniqueDates.map(d =>
                    hours.filter(h => h.date === d).reduce((s, h) => s + h.hours, 0)
                  ), 1);
                  return (
                    <div key={date} className="flex-1 flex flex-col items-center gap-1">
                      <span className="text-[9px] text-[#7a8694]">{dayHours}h</span>
                      <div className="w-full rounded-t-lg bg-[#091929]/80 transition-all"
                        style={{ height: `${Math.round((dayHours / maxH) * 80)}px`, minHeight: dayHours > 0 ? 4 : 0 }} />
                      <span className="text-[9px] text-[#7a8694] truncate w-full text-center">{date.slice(5)}</span>
                    </div>
                  );
                })}
              </div>
            </Card>
          )}

          {/* Filter */}
          <div className="flex gap-2 mb-4 flex-wrap">
            <button onClick={() => setFilter("all")}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${filter === "all" ? "bg-[#091929] text-white border-[#091929]" : "border-[#e2d9c8] text-[#394452] hover:border-[#394452]"}`}>
              All Workers
            </button>
            {workers.map(w => (
              <button key={w.id} onClick={() => setFilter(w.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${filter === w.id ? "bg-[#091929] text-white border-[#091929]" : "border-[#e2d9c8] text-[#394452] hover:border-[#394452]"}`}>
                {w.name}
              </button>
            ))}
          </div>

          {/* Table */}
          <Card className="overflow-hidden p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#e8dfc9]">
                    <th className="text-left px-5 py-3 text-xs font-semibold text-[#394452] uppercase tracking-wide">Worker</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-[#394452] uppercase tracking-wide">Date</th>
                    <th className="text-right px-5 py-3 text-xs font-semibold text-[#394452] uppercase tracking-wide">Hours</th>
                    <th className="text-right px-5 py-3 text-xs font-semibold text-[#394452] uppercase tracking-wide hidden md:table-cell">Activity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e8dfc9]">
                  {filtered.slice(0, 50).map((h, i) => (
                    <tr key={i} className="hover:bg-[#f8f3e4] transition-colors">
                      <td className="px-5 py-3 font-medium text-[#091929]">{h.workerName}</td>
                      <td className="px-5 py-3 text-[#394452]">{h.date}</td>
                      <td className="px-5 py-3 text-right font-semibold text-[#091929]">{h.hours}h</td>
                      <td className="px-5 py-3 hidden md:table-cell">
                        <div className="flex justify-end"><ActivityBar pct={h.activityPct} /></div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </>
      )}
    </PageShell>
  );
}
