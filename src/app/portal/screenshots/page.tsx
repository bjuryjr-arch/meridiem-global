"use client";
import { useState, useEffect } from "react";
import { useClientId, getWorkers, getScreenshots } from "@/lib/portal/data";
import type { Worker, Screenshot } from "@/lib/portal/types";
import { Card, Badge, PageShell, EmptyState } from "@/components/portal/ui";
import { Icon, ICONS } from "@/components/portal/icons";

export default function ScreenshotsPage() {
  const clientId = useClientId();
  const [workers, setWorkers] = useState<Worker[]>([]);
  const [screenshots, setScreenshots] = useState<Screenshot[]>([]);
  const [selectedWorker, setSelectedWorker] = useState("all");
  const [selected, setSelected] = useState<Screenshot | null>(null);

  useEffect(() => {
    const allWorkers = getWorkers();
    const myWorkers = clientId ? allWorkers.filter(w => w.clientId === clientId) : [];
    const workerIds = new Set(myWorkers.map(w => w.id));
    setWorkers(myWorkers);
    setScreenshots(getScreenshots().filter(s => workerIds.has(s.workerId)));
  }, [clientId]);

  const filtered = selectedWorker === "all"
    ? screenshots
    : screenshots.filter(s => s.workerId === selectedWorker);

  const fmt = (iso: string) => new Date(iso).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });

  return (
    <PageShell title="Screenshots" sub="Activity captures from your remote team">

      {screenshots.length === 0 ? (
        <Card className="p-0">
          <EmptyState icon={<Icon d={ICONS.screenshots} size={36} />} title="No screenshots yet"
            sub="Screenshot captures will appear here once monitoring begins." />
        </Card>
      ) : (
        <>
          <div className="flex gap-2 mb-5 flex-wrap">
            <button onClick={() => setSelectedWorker("all")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all ${selectedWorker === "all" ? "bg-[#091929] text-white border-[#091929]" : "bg-white border-[#e2d9c8] text-[#394452] hover:border-[#394452]"}`}>
              All Workers
            </button>
            {workers.map(w => (
              <button key={w.id} onClick={() => setSelectedWorker(w.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all ${selectedWorker === w.id ? "bg-[#091929] text-white border-[#091929]" : "bg-white border-[#e2d9c8] text-[#394452] hover:border-[#394452]"}`}>
                {w.name.split(" ")[0]}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
            {filtered.map(s => (
              <Card key={s.id} className="overflow-hidden cursor-pointer hover:ring-2 hover:ring-[#091929]/20 transition-all"
                onClick={() => setSelected(s)}>
                <div className="relative bg-[#e8dfc9] aspect-[16/10] flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 flex flex-col gap-1.5 p-3">
                    <div className="h-2 w-3/4 bg-[#e2d9c8] rounded" />
                    <div className="h-2 w-1/2 bg-[#e2d9c8] rounded" />
                    <div className="h-2 w-5/6 bg-[#e2d9c8] rounded" />
                    <div className="mt-1 h-8 w-full bg-[#c8a96e]/20 rounded" />
                    <div className="h-2 w-2/3 bg-[#e2d9c8] rounded" />
                    <div className="h-2 w-4/5 bg-[#e2d9c8] rounded" />
                  </div>
                  <div className="absolute bottom-2 right-2">
                    <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-md ${s.activityPct >= 80 ? "bg-emerald-100 text-emerald-700" : s.activityPct >= 60 ? "bg-amber-100 text-amber-700" : "bg-red-100 text-red-700"}`}>
                      {s.activityPct}%
                    </span>
                  </div>
                </div>
                <div className="px-3 py-2.5">
                  <p className="text-xs font-medium text-[#091929]">{s.workerName.split(" ")[0]}</p>
                  <p className="text-[10px] text-[#7a8694]">{fmt(s.capturedAt)} · {s.appName}</p>
                </div>
              </Card>
            ))}
          </div>
        </>
      )}

      {selected && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}>
          <div className="bg-white rounded-2xl overflow-hidden max-w-lg w-full shadow-2xl"
            onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#e8dfc9]">
              <div>
                <p className="text-sm font-semibold text-[#091929]">{selected.workerName}</p>
                <p className="text-xs text-[#394452]">{new Date(selected.capturedAt).toLocaleString()} · {selected.appName}</p>
              </div>
              <button onClick={() => setSelected(null)} className="text-[#7a8694] hover:text-[#091929] p-1">
                <Icon d={ICONS.x} size={18} />
              </button>
            </div>
            <div className="bg-[#e8dfc9] aspect-video flex flex-col items-center justify-center p-8 gap-2">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className={`h-2 bg-[#e2d9c8] rounded ${i % 3 === 0 ? "w-3/4" : i % 3 === 1 ? "w-full" : "w-1/2"}`} />
              ))}
            </div>
            <div className="px-5 py-4 flex items-center justify-between">
              <Badge label={`${selected.activityPct}% Activity`}
                variant={selected.activityPct >= 80 ? "green" : selected.activityPct >= 60 ? "yellow" : "red"} />
              <p className="text-xs text-[#7a8694]">{selected.id}</p>
            </div>
          </div>
        </div>
      )}
    </PageShell>
  );
}
