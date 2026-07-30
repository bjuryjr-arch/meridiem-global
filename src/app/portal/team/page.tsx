"use client";
import { useState, useEffect } from "react";
import { useClientId, getWorkers } from "@/lib/portal/data";
import type { Worker } from "@/lib/portal/types";
import { Card, Badge, ActivityBar, PageShell, SectionHeader, EmptyState } from "@/components/portal/ui";
import { Icon, ICONS } from "@/components/portal/icons";

const STEP_ORDER = ["intake", "assigned", "training", "live"] as const;
const STEP_LABELS: Record<string, string> = { intake: "Intake", assigned: "Assigned", training: "Training", live: "Live" };

export default function TeamPage() {
  const clientId = useClientId();
  const [workers, setWorkers] = useState<Worker[]>([]);

  useEffect(() => {
    const all = getWorkers();
    setWorkers(clientId ? all.filter(w => w.clientId === clientId) : []);
  }, [clientId]);

  const active = workers.filter(w => w.status === "active");
  const onboarding = workers.filter(w => w.status === "onboarding");

  return (
    <PageShell title="My Team" sub={`${workers.length} team member${workers.length !== 1 ? "s" : ""}`}>
      {workers.length === 0 ? (
        <Card className="p-0">
          <EmptyState
            icon={<Icon d={ICONS.team} size={36} />}
            title="No workers yet"
            sub="Your assigned staff will appear here once onboarding begins."
          />
        </Card>
      ) : (
        <>
          {active.length > 0 && (
            <>
              <SectionHeader title="Active Workers" sub={`${active.length} currently active`} />
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 mb-8">
                {active.map(w => (
                  <Card key={w.id} className="p-5">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="h-11 w-11 rounded-xl bg-[#091929]/10 flex items-center justify-center text-sm font-semibold text-[#091929]">
                          {w.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#091929]">{w.name}</p>
                          <p className="text-xs text-[#394452]">{w.role}</p>
                        </div>
                      </div>
                      <Badge label="Active" variant="green" />
                    </div>
                    <div className="space-y-2.5 text-xs text-[#394452]">
                      <div className="flex justify-between">
                        <span>Start date</span>
                        <span className="text-[#091929] font-medium">{w.startDate}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Hours this week</span>
                        <span className="text-[#091929] font-medium">{w.hoursThisWeek}h</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Activity</span>
                        <ActivityBar pct={w.activityPct} />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </>
          )}

          {onboarding.length > 0 && (
            <>
              <SectionHeader title="In Onboarding" sub="New team members in progress" />
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {onboarding.map(w => (
                  <Card key={w.id} className="p-5">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="h-11 w-11 rounded-xl bg-amber-50 flex items-center justify-center text-sm font-semibold text-amber-700">
                          {w.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#091929]">{w.name}</p>
                          <p className="text-xs text-[#394452]">{w.role}</p>
                        </div>
                      </div>
                      <Badge label="Onboarding" variant="yellow" />
                    </div>
                    <div className="flex items-center gap-1 mt-2">
                      {STEP_ORDER.map((step, i) => {
                        const currentIdx = STEP_ORDER.indexOf(w.onboardingStep);
                        const done = i <= currentIdx;
                        return (
                          <div key={step} className="flex-1 flex flex-col items-center gap-1">
                            <div className={`h-1.5 w-full rounded-full ${done ? "bg-[#091929]" : "bg-[#e2d9c8]"}`} />
                            <span className={`text-[9px] font-medium ${done ? "text-[#091929]" : "text-[#7a8694]"}`}>{STEP_LABELS[step]}</span>
                          </div>
                        );
                      })}
                    </div>
                  </Card>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </PageShell>
  );
}
