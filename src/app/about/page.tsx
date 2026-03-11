import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Global Staffing Mission",
  description:
    "Meridiem Global helps businesses scale responsibly by leveraging global talent while improving efficiency, productivity, and profitability.",
};

export default function AboutPage() {
  return (
    <main className="container py-20">
      <h1 className="text-4xl text-white md:text-5xl">About Meridiem Global</h1>
      <p className="mt-4 max-w-3xl text-slate-300">
        Our mission is simple: help companies scale responsibly by leveraging global talent while improving efficiency,
        productivity, and profitability.
      </p>

      <section className="mt-10 grid gap-5 md:grid-cols-3">
        <article className="surface rounded-2xl p-6">
          <h2 className="text-2xl text-white">Elite Talent Standards</h2>
          <p className="mt-3 text-slate-300">Role-specific hiring frameworks and communication-first evaluation criteria.</p>
        </article>
        <article className="surface rounded-2xl p-6">
          <h2 className="text-2xl text-white">Operational Intelligence</h2>
          <p className="mt-3 text-slate-300">Staffing strategy aligned with business economics and workload realities.</p>
        </article>
        <article className="surface rounded-2xl p-6">
          <h2 className="text-2xl text-white">Performance Partnership</h2>
          <p className="mt-3 text-slate-300">Continuous support to maintain quality, reliability, and growth readiness.</p>
        </article>
      </section>

      <section className="surface mt-10 rounded-2xl p-8">
        <h2 className="text-3xl text-white">Who We Serve</h2>
        <p className="mt-4 leading-relaxed text-slate-300">
          U.S. founders, startups, growth-stage companies, and restaurant franchise groups that need dependable offshore
          staffing without sacrificing customer experience.
        </p>
      </section>
    </main>
  );
}
