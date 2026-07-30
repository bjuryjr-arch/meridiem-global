"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Are overseas hires actually reliable?",
    a: "Yes — when structured correctly. We work with pre-vetted professionals and build workflows that ensure accountability, communication, and consistent performance.",
  },
  {
    q: "What happens if the hire is not a fit?",
    a: "We offer replacement support. If a placement does not meet your expectations, we help identify the issue and replace the team member — with the same structured process we used originally.",
  },
  {
    q: "Do I need to know exactly who to hire?",
    a: "No. We help you define the role, responsibilities, and success criteria first. That clarity ensures we can locate and vet the right candidate before we ever begin sourcing.",
  },
  {
    q: "Do I manage the worker myself?",
    a: "You set priorities, direction, and work standards. We provide ongoing oversight, coaching support, and escalation paths so day-to-day management stays low friction but never goes unsupervised.",
  },
  {
    q: "How does Meridiem support onboarding?",
    a: "We define expectations, provide clear communication guidelines, and align schedules, tools, and handoff processes so your new team member starts productive immediately without heavy lifting on your end.",
  },
  {
    q: "Can I start with one role before scaling?",
    a: "Absolutely. We recommend beginning lean. A single well-scoped placement proves value, clarifies workflows, and shows ROI before you expand the team.",
  },
  {
    q: "How does Meridiem help protect the customer experience?",
    a: "We match talent specifically for quality and tone, and back it with structured accountability and optional AI tools that ensure consistent voice, accuracy, and professionalism for your brand.",
  },
  {
    q: "How much can I actually save?",
    a: "Most clients see 60–70% savings compared to U.S.-based hires, without sacrificing quality or performance.",
  },
];

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="container py-20">
      <p className="mb-4 text-[0.68rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">
        Common Questions
      </p>
      <h2
        className="mb-14 max-w-2xl text-4xl text-white md:text-5xl"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        What Business Owners Ask Before Scaling
      </h2>

      <div className="mx-auto max-w-3xl divide-y divide-white/[0.07]">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={i}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-start justify-between gap-6 py-7 text-left transition-colors hover:text-white"
                aria-expanded={isOpen}
              >
                <span
                  className={`text-[1.15rem] leading-snug transition-colors ${
                    isOpen ? "text-[#f5f2ea]" : "text-[#c8c4b8]"
                  }`}
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {item.q}
                </span>

                {/* Icon */}
                <span
                  className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                    isOpen
                      ? "border-[rgba(232,224,200,0.5)] bg-[rgba(232,224,200,0.08)]"
                      : "border-white/[0.12] bg-transparent"
                  }`}
                >
                  <svg
                    width="9"
                    height="9"
                    viewBox="0 0 9 9"
                    fill="none"
                    className={`transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                  >
                    <line x1="4.5" y1="0" x2="4.5" y2="9" stroke={isOpen ? "#e8e0c8" : "#b8b4a8"} strokeWidth="1.2" />
                    <line x1="0" y1="4.5" x2="9" y2="4.5" stroke={isOpen ? "#e8e0c8" : "#b8b4a8"} strokeWidth="1.2" />
                  </svg>
                </span>
              </button>

              {/* Answer panel */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="pb-8 pr-10 text-sm leading-relaxed text-[#b8b4a8]">
                  {item.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
