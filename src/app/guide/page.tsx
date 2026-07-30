import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExecutionGapForm } from "@/components/execution-gap-form";

export const metadata: Metadata = {
  title: "The Execution Gap — Free Guide | Meridiem Global",
  description:
    "Download the free guide: The Execution Gap — why businesses struggle to delegate, hire, and scale responsibly. Practical operator insights from Meridiem Global.",
};

export default function GuideDownloadPage() {
  return (
    <main className="page-light bg-[#faf7f3]">

      {/* ── Interior Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(148deg,#faf7f3 0%,#f6f1ea 45%,#ede5d5 100%)" }}
      >
        <div className="container py-20 md:py-24">
          <p className="mb-4 text-[0.64rem] font-medium tracking-[0.38em] text-[#6b5a46] uppercase">
            Free Guide · Download
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
            The{" "}
            <em className="not-italic gold-gradient-text">Execution Gap</em>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#5a6475]">
            Why businesses struggle to delegate, hire, and scale responsibly — and what to do about it.
          </p>
        </div>
        <div className="section-rule-light" />
      </section>

      {/* ── Guide Download Card ── */}
      <section className="section-wc py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="surface-light relative overflow-hidden p-8 md:p-14">

              {/* Guide cover watermark */}
              <div
                className="pointer-events-none absolute -bottom-2 -right-2 w-28 opacity-[0.12]"
                aria-hidden="true"
              >
                <Image
                  src="/execution-gap-cover.webp"
                  alt=""
                  width={112}
                  height={146}
                  className="object-contain"
                  style={{ width: "auto" }}
                />
              </div>

              <div className="relative max-w-2xl">
                <h2
                  className="text-3xl text-[#0a1628] md:text-4xl"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  What&rsquo;s inside this guide
                </h2>

                <ul className="mt-8 space-y-4">
                  {[
                    "How to tell when your business is actually ready to hire",
                    "What effective execution looks like in a support role",
                    "Why most staffing problems are structure problems, not people problems",
                    "How to avoid turning a new hire into a new management burden",
                    "A practical framework for delegating responsibly",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[#5a6475]">
                      <span className="mt-1 inline-block h-1 w-1 shrink-0 rounded-full bg-[#b8882a]/55" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <ExecutionGapForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related ── */}
      <section className="py-16" style={{ background: "#f2ece0" }}>
        <div className="container">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-sm text-[#6b5a46] font-medium">Also worth reading</p>
              <h3 className="mt-1 text-xl text-[#0a1628]" style={{ fontFamily: "var(--font-cormorant)" }}>
                The Hidden Labor Trap Holding Restaurant Operators Back
              </h3>
              <p className="mt-1 text-sm text-[#7a8694]">Published in QSR Magazine</p>
            </div>
            <a
              href="https://www.qsrmagazine.com/growth/fast-casual/the-hidden-labor-trap-holding-restaurant-operators-back/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-light shrink-0"
            >
              Read the Article →
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
