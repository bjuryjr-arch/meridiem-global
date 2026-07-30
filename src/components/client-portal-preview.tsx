"use client";

import React from "react";

/**
 * Premium, Meridiem-branded static dashboard preview / mockup.
 * Styled after a modern SaaS client portal for illustrative purposes.
 * Careful wording used outside this component so we don't overpromise.
 */
export function ClientPortalPreview() {
  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-white/[0.10] bg-[#050a1f] shadow-2xl">
      {/* Portal chrome / top bar */}
      <div className="flex items-center justify-between border-b border-white/[0.08] bg-black/40 px-4 py-3 text-xs">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-[#e8e0c8] flex items-center justify-center">
              <span className="text-[10px] font-bold text-[#0a0e23]">M</span>
            </div>
            <span className="font-medium tracking-[0.08em] text-[#e8e0c8] uppercase text-[10px]">Meridiem</span>
          </div>
          <span className="text-[#b8b4a8]">Client Portal</span>
          <div className="ml-2 rounded bg-white/[0.06] px-1.5 py-0.5 text-[9px] text-[#c8c4b8] tracking-widest">
            DEMO
          </div>
        </div>
        <div className="flex items-center gap-3 text-[#c8c4b8]">
          <div className="rounded-full bg-white/[0.04] px-2 py-0.5 text-[10px]">Sarah Patel — Acme Hospitality</div>
          <div className="h-6 w-6 rounded-full bg-[#e8e0c8]/70"></div>
        </div>
      </div>

      <div className="flex min-h-[380px]">
        {/* Sidebar mock */}
        <div className="hidden w-[152px] flex-shrink-0 border-r border-white/[0.08] bg-black/30 p-3 text-[11px] text-[#b8b4a8] md:block">
          <div className="mb-4 text-[10px] tracking-[0.1em] uppercase text-[#c8c4b8]/70">MENU</div>
          <div className="space-y-[1px]">
            {["Dashboard", "Team Members", "Open Roles", "Time Tracking", "Monitoring", "Invoicing & Billing", "Support", "Reports"].map((item, idx) => (
              <div key={idx} className={`rounded px-2 py-1.5 ${idx === 0 ? "bg-white/[0.06] text-[#e8e0c8]" : "hover:bg-white/[0.035]"}`}>
                {item}
              </div>
            ))}
          </div>
          <div className="mt-8 border-t border-white/[0.07] pt-4 text-[10px] text-[#c5c1b5]">
            Need Help?<br />Open Support Ticket
          </div>
        </div>

        {/* Main content area */}
        <div className="flex-1 p-4 text-xs text-[#c5c1b5]">
          {/* Greeting row */}
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-sm text-white">Welcome back, Acme Hospitality</div>
              <div className="text-xs text-[#b8b4a8]/70">15 active placements • Last login today</div>
            </div>
            <div className="hidden items-center gap-2 text-[10px] md:flex">
              <div className="rounded border border-white/[0.1] px-2 py-px">Export</div>
              <div className="rounded bg-[#e8e0c8] px-2 py-px text-[10px] font-semibold text-[#0a0e23]">Open Ticket</div>
            </div>
          </div>

          {/* KPI row - matches the image stats */}
          <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {[
              { label: "Team Members", val: "7", sub: "Across 3 locations" },
              { label: "Open Roles", val: "3", sub: "1 in pipeline" },
              { label: "Hours Tracked", val: "186.5", sub: "This month" },
              { label: "Issues", val: "2", sub: "Support active" },
            ].map((k, i) => (
              <div key={i} className="rounded-xl border border-white/[0.08] bg-[#0a0f27] p-3">
                <div className="text-[9px] text-[#b8b4a8] uppercase tracking-[0.06em]">{k.label}</div>
                <div className="mt-0.5 text-2xl font-semibold text-[#e8e0c8]">{k.val}</div>
                <div className="text-[9px] text-[#b8b4a8]/70">{k.sub}</div>
              </div>
            ))}
          </div>

          {/* Two column main panels */}
          <div className="grid gap-3 md:grid-cols-12">
            {/* Team Members list + Monitoring */}
            <div className="md:col-span-5">
              <div className="mb-1.5 flex items-center justify-between text-[10px] text-[#b8b4a8]">
                <span>Team Members (5 shown)</span>
                <span className="uppercase tracking-widest">View All</span>
              </div>
              <div className="rounded-lg border border-white/[0.08] bg-[#0a0f27] overflow-hidden text-[10px]">
                {[
                  { name: "Maria Lopez", role: "Customer Support Specialist", status: "Active", online: "Today" },
                  { name: "Arjun Rao", role: "Billing Assistant", status: "Active", online: "Today" },
                  { name: "Lina Kim", role: "Operations Support Specialist", status: "Offline", online: "Yesterday" },
                  { name: "Diego Santos", role: "Virtual Assistant", status: "Active", online: "Today" },
                ].map((m, idx) => (
                  <div key={idx} className={`flex items-center border-b border-[#121a39] px-3 py-2.5 last:border-b-0 ${idx % 2 === 0 ? '' : 'bg-black/20'}`}>
                    <div className="h-5 w-5 flex-shrink-0 rounded bg-[#e8e0c8]/70 mr-2" />
                    <div className="min-w-0 flex-1">
                      <div className="font-medium text-[#f5f2ea]">{m.name}</div>
                      <div className="text-[9px] text-[#b8b4a8]">{m.role}</div>
                    </div>
                    <div className="flex items-center gap-1 pr-1 text-[9px]">
                      <span className={`inline-block h-1.5 w-1.5 rounded-full ${m.status === "Active" ? "bg-emerald-400" : "bg-[#c8c4b8]"}`} /> {m.online}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right wide: Time Tracking + Gauges & Pipeline */}
            <div className="md:col-span-7">
              <div className="mb-1.5 text-[10px] text-[#b8b4a8]">Time Tracking • Hours This Week</div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {/* Radial time tracker like image */}
                <div className="col-span-1 rounded-xl border border-white/[0.08] bg-[#0a0f27] p-4 flex items-center justify-center">
                  <div className="relative h-20 w-20">
                    <div className="absolute inset-0 rounded-full" style={{ background: `conic-gradient(#e8e0c8 0deg 225deg, #121a39 225deg 360deg)` }}></div>
                    <div className="absolute inset-[9px] rounded-full bg-[#050a1f] flex flex-col items-center justify-center text-center">
                      <div className="text-lg leading-none font-semibold text-[#e8e0c8]">186.5</div>
                      <div className="text-[9px] text-[#b8b4a8]">hrs</div>
                    </div>
                  </div>
                </div>

                {/* Pipeline & Support quick */}
                <div className="col-span-2 rounded-xl border border-white/[0.08] bg-[#0a0f27] p-4 text-[10px]">
                  <div className="mb-2 text-[#c8c4b8]">Open Roles / Candidate Pipeline</div>
                  <div className="flex gap-2">
                    <div className="flex-1 space-y-1">
                      <div className="flex justify-between bg-white/5 rounded px-2 py-[1px] text-[9px]"><span>Customer Support Agent</span><span className="text-[#e8e0c8]">3</span></div>
                      <div className="flex justify-between bg-white/5 rounded px-2 py-[1px] text-[9px]"><span>Recruiting Coordinator</span><span className="text-[#e8e0c8]">2</span></div>
                      <div className="flex justify-between bg-white/5 rounded px-2 py-[1px] text-[9px]"><span>Scheduling Coordinator</span><span className="text-[#e8e0c8]">1</span></div>
                    </div>
                    <div className="w-[1px] bg-white/10 self-stretch mx-1" />
                    <div>
                      <div className="text-[9px] mb-0.5">Support Requests (Active)</div>
                      <div className="text-[9px] leading-tight text-[#c5c1b5]">
                        • 2 open tickets<br />
                        • Replacement accepted today<br />
                        • Onboarding scheduled
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom billing / monitoring sneak */}
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 text-[10px]">
                <div className="rounded-xl border border-white/[0.08] bg-[#0a0f27] px-3 py-2">
                  <div className="flex justify-between text-[9px]"><span>Invoices & Billing</span><span className="text-[#e8e0c8]">Next: Feb 1</span></div>
                  <div className="mt-1 font-medium text-[#e8e0c8]">Current cycle: $2,450 billed • 28.75 hrs @ blended rate</div>
                </div>

                <div className="rounded-xl border border-white/[0.08] bg-[#0a0f27] px-3 py-2">
                  <div className="text-[#c8c4b8]">Performance Notes — Recent</div>
                  <div className="mt-0.5 text-[9px]">“Maria Lopez — consistently hitting response targets and quality. Excellent customer tone.”</div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer bar in mock for polish */}
          <div className="mt-3 border-t border-white/[0.06] pt-2 text-[9px] text-[#b8b4a8]/70 flex items-center justify-between">
            <span>Updates sync in real time • Last refreshed moments ago</span>
            <span className="uppercase tracking-[0.06em]">Portal preview shown for illustrative purposes</span>
          </div>
        </div>
      </div>
    </div>
  );
}
