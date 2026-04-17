"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Are overseas hires actually reliable?",
    a: "Yes — when structured correctly. We work with pre-vetted professionals and build workflows that ensure accountability, communication, and consistent performance.",
  },
  {
    q: "Will this feel like outsourcing or part of my team?",
    a: "Our goal is integration, not separation. Your team member works within your systems, follows your processes, and operates as an extension of your business.",
  },
  {
    q: "What if I'm not ready to hire yet?",
    a: "That's exactly why we offer operational consultation. We help define scope, clean up workflows, and ensure a hire will reduce pressure — not add to it.",
  },
  {
    q: "How much can I actually save?",
    a: "Most clients see 60–70% savings compared to U.S.-based hires, without sacrificing quality or performance.",
  },
  {
    q: "What kind of roles can be filled?",
    a: "From customer support and admin work to medical billing, RPM, and operational roles — we match talent based on your exact needs.",
  },
  {
    q: "How quickly can I get started?",
    a: "In many cases, we can place qualified candidates within days once your needs are clearly defined.",
  },
  {
    q: "What makes Meridiem Global different?",
    a: "We don't just provide talent — we ensure you're operationally ready for that talent to succeed. That's what makes the difference between growth and frustration.",
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
