"use client";

import { useState } from "react";

const features = [
  {
    title: "Role Scoping & Operational Consultation",
    short: "Define the work before recruiting begins.",
    detail: "We help clarify the role, schedule, responsibilities, success criteria, and communication flow so the placement is built around a real operational need.",
  },
  {
    title: "Pre-Vetted Overseas Talent",
    short: "Access candidates screened for role fit and communication.",
    detail: "Meridiem focuses on talent that fits the work, schedule, and customer experience expectations — not just resumes that match keywords.",
  },
  {
    title: "Candidate Screening & Shortlist Support",
    short: "Review a focused shortlist instead of sorting through noise.",
    detail: "We help narrow the candidate pool so clients can spend their time evaluating the strongest-fit options.",
  },
  {
    title: "Client Interview Support",
    short: "Interview with clarity and confidence.",
    detail: "We help guide the interview process around role expectations, communication ability, schedule fit, and performance needs.",
  },
  {
    title: "Onboarding Guidance",
    short: "Start the placement with structure.",
    detail: "We help define the first days and weeks so the worker understands tools, expectations, communication rhythms, and success standards.",
  },
  {
    title: "Time Tracking Setup",
    short: "Keep hours and attendance visible.",
    detail: "Time tracking helps clients maintain visibility into schedules, attendance, and staffing cost without guessing.",
  },
  {
    title: "Communication Expectations",
    short: "Set clear rhythms from day one.",
    detail: "We help establish how updates, questions, escalations, and daily communication should happen so remote support does not become a black box.",
  },
  {
    title: "Performance Check-Ins",
    short: "Keep the role accountable after launch.",
    detail: "Meridiem supports ongoing visibility so performance issues can be addressed early instead of turning into silent frustration.",
  },
  {
    title: "Replacement Support",
    short: "Protect continuity if a hire is not the right fit.",
    detail: "If a placement is not working, we help diagnose whether the issue is role clarity, expectations, training, or fit — and support the replacement process when needed.",
  },
  {
    title: "Client Portal Access",
    short: "View staffing activity in one place.",
    detail: "The Meridiem Client Portal is designed to provide visibility into team members, open roles, time tracking, support requests, invoices, and performance notes.",
  },
  {
    title: "Optional AI-Enhanced Communication Tools",
    short: "Improve clarity where appropriate.",
    detail: "When useful, Meridiem can support optional tools that improve communication quality, meeting clarity, and customer-facing confidence.",
  },
];

export function IncludedFeatures() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpen(open === i ? null : i);
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {features.map((f, i) => {
        const isOpen = open === i;
        return (
          <button
            key={i}
            onClick={() => toggle(i)}
            aria-expanded={isOpen}
            className="group feature-card flex flex-col rounded-2xl border px-6 py-6 text-left transition-all hover:border-white/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e8e0c8]/40"
            style={{
              background: "linear-gradient(to right, rgba(15,19,44,1) 0%, rgba(11,15,34,1) 52%, rgba(8,12,26,1) 100%)",
              borderColor: isOpen ? "rgba(232,224,200,0.34)" : "rgba(232,224,200,0.18)",
              transform: isOpen ? "translateY(-1px)" : "none",
            }}
          >
            <div className="flex items-start justify-between gap-3">
              <h4 className="text-[0.98rem] font-medium leading-tight text-[#f5f2ea] tracking-[0.005em]" style={{ fontFamily: "var(--font-cormorant)" }}>
                {f.title}
              </h4>
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
                  isOpen ? "border-[#e8e0c8]/60 rotate-45" : "border-white/[0.2] group-hover:border-white/35"
                }`}
                aria-hidden
              >
                <svg width="8" height="8" viewBox="0 0 9 9" fill="none">
                  <line x1="4.5" y1="1" x2="4.5" y2="8" stroke="#e8e0c8" strokeWidth="1.4" />
                  <line x1="1" y1="4.5" x2="8" y2="4.5" stroke="#e8e0c8" strokeWidth="1.4" />
                </svg>
              </span>
            </div>

            <p className="mt-3 text-sm leading-snug text-[#c8c4b8]">{f.short}</p>

            <div
              className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out text-sm leading-relaxed text-[#c8c4b8] ${
                isOpen ? "mt-4 max-h-52 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {f.detail}
            </div>
          </button>
        );
      })}
    </div>
  );
}
