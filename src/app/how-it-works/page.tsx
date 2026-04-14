import type { Metadata } from "next";
import Link from "next/link";
import { processSteps } from "@/lib/site";

export const metadata: Metadata = {
  title: "How It Works | Overseas Staffing Process",
  description:
    "Learn the Meridiem Global staffing process: consultation, sourcing, vetting, interviews, placement, and ongoing management.",
};

export default function HowItWorksPage() {
  return (
    <main className="container py-20">
      <h1 className="text-4xl text-white md:text-5xl">How It Works</h1>
      <p className="mt-4 max-w-3xl text-slate-300">
        Our process is built to reduce hiring risk and accelerate time-to-productivity for overseas staffing initiatives.
      </p>

      <section className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((step, index) => (
          <article key={step} className="surface rounded-2xl p-6">
            <p className="text-xs tracking-[0.14em] text-slate-400">STEP {index + 1}</p>
            <h2 className="mt-2 text-2xl text-white">{step}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Structured execution with role-specific scorecards, communication standards, and measurable performance targets.
            </p>
          </article>
        ))}
      </section>

      <section className="surface mt-10 rounded-2xl p-8">
        <h2 className="text-3xl text-white">Built for Long-Term Performance</h2>
        <p className="mt-4 leading-relaxed text-slate-300">
          Beyond placement, Meridiem provides support for onboarding, quality control, retention, and ongoing optimization so
          your offshore staffing model continues to improve over time.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-full border border-slate-500 bg-slate-900/70 px-6 py-3 text-sm font-semibold text-slate-100"
        >
          Start Scaling Responsibly
        </Link>
      </section>
    </main>
  );
}
