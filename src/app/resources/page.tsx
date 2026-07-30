import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources & Insights | Meridiem Global",
  description:
    "Operator-led perspectives on responsible scaling, delegation, and global staffing. Read Meridiem's QSR Magazine feature and download The Execution Gap — a free practical guide.",
};

export default function ResourcesPage() {
  return (
    <main className="page-light bg-[#faf7f3]">

      {/* ── Interior Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(148deg,#faf7f3 0%,#f6f1ea 45%,#ede5d5 100%)" }}
      >
        <div className="container py-20 md:py-28">
          <p className="mb-4 text-[0.64rem] font-medium tracking-[0.38em] text-[#6b5a46] uppercase">
            Perspectives &amp; Resources
          </p>
          <div
            className="mb-6 h-[1.5px] w-11 rounded-full"
            style={{ background: "linear-gradient(90deg,rgba(184,136,42,0.65),rgba(184,136,42,0))" }}
            aria-hidden="true"
          />
          <h1
            className="max-w-[22ch] text-[clamp(2.6rem,5.5vw,4.5rem)] font-semibold leading-[1.08] text-[#0a1628]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            For Operators,{" "}
            <em className="not-italic gold-gradient-text">By Operators</em>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#5a6475]">
            Meridiem was built around a simple belief: staffing only works when roles are clear, systems are structured, and performance is visible. Explore founder-led perspectives on execution, delegation, and operational accountability.
          </p>
        </div>
        <div className="section-rule-light" />
      </section>

      {/* ── Resources Grid ── */}
      <section className="section-wc py-20 md:py-28">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-2">

            {/* QSR Magazine */}
            <a
              href="https://www.qsrmagazine.com/growth/fast-casual/the-hidden-labor-trap-holding-restaurant-operators-back/"
              target="_blank"
              rel="noopener noreferrer"
              className="surface-light group flex flex-col p-8 md:p-10"
            >
              <p className="text-[0.62rem] font-medium tracking-[0.28em] text-[#6b5a46] uppercase">
                Article · QSR Magazine
              </p>
              <div
                className="my-5 h-px w-9"
                style={{ background: "linear-gradient(90deg,rgba(184,136,42,0.5),rgba(184,136,42,0))" }}
                aria-hidden="true"
              />
              <h2
                className="text-2xl leading-snug text-[#0a1628] md:text-3xl"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                The Hidden Labor Trap Holding Restaurant Operators Back
              </h2>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-[#5a6475]">
                Founder-led QSR insight on execution, workflow, and why labor issues are rarely solved by headcount alone.
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-xs tracking-[0.14em] uppercase text-[#0a1628] transition-transform duration-200 group-hover:translate-x-0.5">
                Read Article →
              </span>
            </a>

            {/* Execution Gap Guide */}
            <div className="surface-light flex flex-col p-8 md:p-10">
              <p className="text-[0.62rem] font-medium tracking-[0.28em] text-[#6b5a46] uppercase">
                Free Guide · Download
              </p>
              <div
                className="my-5 h-px w-9"
                style={{ background: "linear-gradient(90deg,rgba(184,136,42,0.5),rgba(184,136,42,0))" }}
                aria-hidden="true"
              />
              <h2
                className="text-2xl leading-snug text-[#0a1628] md:text-3xl"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Free Guide:{" "}
                <em className="not-italic gold-gradient-text">The Execution Gap</em>
              </h2>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-[#5a6475]">
                How to tell when your business is actually ready to hire, what effective execution looks like, and how to avoid turning a new hire into a new management problem.
              </p>
              <div className="mt-8">
                <a
                  href="/guide"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Download the Free Guide
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </a>
              </div>
            </div>

          </div>

          <div className="mt-8">
            <Link
              href="/guide"
              className="text-sm tracking-[0.1em] text-[#7a8694] uppercase transition-colors hover:text-[#0a1628]"
            >
              View Guide Download Page →
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
