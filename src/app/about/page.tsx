import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Meridiem Global",
  description:
    "Meridiem Global is a managed overseas staffing company built on real operating experience. We help U.S. businesses scale responsibly with structured global teams, clear accountability, and U.S.-based placement support.",
};

const ZOHO_BOOKING =
  "https://meridiemglobal.zohobookings.com/#/4938048000000083003";

const philosophy = [
  {
    title: "Why structure beats headcount",
    body: "Businesses don't struggle to find talent — they struggle to make talent successful. Meridiem was created to eliminate the chaos that occurs when companies hire without role clarity, workflow structure, or accountability systems.",
  },
  {
    title: "How we built Meridiem differently",
    body: "Every Meridiem engagement starts with an integration and support layer — not just a candidate. We define roles, set expectations, establish communication standards, and build the onboarding structure before talent arrives.",
  },
];

const credentials = [
  "Restaurant & Franchise Operations",
  "Remote Team Management",
  "Recruiting Workflow Design",
  "Customer Experience Protection",
  "Back-Office Support Strategy",
  "U.S.-Managed Delivery",
];

export default function AboutPage() {
  return (
    <main className="page-light bg-[#faf7f3]">

      {/* ── Interior Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(148deg,#faf7f3 0%,#f6f1ea 45%,#ede5d5 100%)" }}
      >
        <div className="container py-20 md:py-28">
          <p className="mb-4 text-[0.64rem] font-medium tracking-[0.38em] text-[#6b5a46] uppercase">
            Our Foundation
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
            Built for{" "}
            <em className="not-italic gold-gradient-text">Responsible Scale.</em>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#5a6475]">
            Meridiem Global helps businesses grow without operational chaos. We match carefully selected overseas professionals to clearly defined roles — with structured placement support, accountability, and the care you need to protect your customers and your brand.
          </p>
        </div>
        <div className="section-rule-light" />
      </section>

      {/* ── Operating Experience ── */}
      <section className="section-wc py-20 md:py-28">
        <div className="container">
          <div className="grid items-start gap-14 md:grid-cols-2 md:gap-20">
            <div>
              <p className="mb-4 text-[0.65rem] font-medium tracking-[0.34em] text-[#6b5a46] uppercase">Rooted in Real Operations</p>
              <h2
                className="text-4xl text-[#0a1628] md:text-5xl"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Built From Real Operating Experience
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#5a6475]">
                Meridiem was built by operators who have managed teams, run high-volume service operations, designed recruiting workflows, and delivered overseas staffing at the COO level.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#5a6475]">
                After observing the same pattern repeatedly — businesses that struggled not because they lacked people, but because they lacked structure — Meridiem was built around a clear belief: staffing only works when the role, expectations, communication, and accountability are established before anyone starts.
              </p>
              <div className="mt-8 inline-flex flex-wrap items-center gap-2 rounded-full border border-[#0a1628]/[0.12] bg-[#0a1628]/[0.03] px-4 py-2 text-xs text-[#5a6475] tracking-wide">
                Restaurant &amp; Franchise Operations · COO-Level Overseas Delivery · U.S. Operations Leadership
              </div>
            </div>

            <div className="surface-light p-8 md:p-10">
              <p className="mb-5 text-[0.62rem] font-medium tracking-[0.28em] text-[#6b5a46] uppercase">Experience Behind the Brand</p>
              <div
                className="mb-8 h-[1.5px] w-9 rounded-full"
                style={{ background: "linear-gradient(90deg,rgba(184,136,42,0.55),rgba(184,136,42,0))" }}
                aria-hidden="true"
              />
              <ul className="space-y-3">
                {credentials.map((c) => (
                  <li key={c} className="flex items-center gap-3 text-sm text-[#5a6475]">
                    <span className="inline-block h-1 w-5 shrink-0 rounded-full" style={{ background: "rgba(184,136,42,0.5)" }} aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="py-20 md:py-28" style={{ background: "#f2ece0" }}>
        <div className="container">
          <p className="mb-4 text-[0.65rem] font-medium tracking-[0.34em] text-[#6b5a46] uppercase">Our Perspective</p>
          <h2
            className="mb-12 text-4xl text-[#0a1628] md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Why We Built Meridiem Differently
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {philosophy.map((p) => (
              <div key={p.title} className="surface-light p-8">
                <div
                  className="mb-5 h-[1.5px] w-8 rounded-full"
                  style={{ background: "linear-gradient(90deg,rgba(184,136,42,0.55),rgba(184,136,42,0))" }}
                  aria-hidden="true"
                />
                <h3 className="text-xl text-[#0a1628]" style={{ fontFamily: "var(--font-cormorant)" }}>{p.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[#5a6475]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Operating Philosophy quote — dark anchor section ── */}
      <section className="bg-[#06091a] py-20 md:py-28">
        <div className="container">
          <div
            className="mx-auto max-w-3xl border-t pt-16 text-center"
            style={{ borderColor: "rgba(232,224,200,0.08)" }}
          >
            <blockquote
              className="text-[clamp(1.45rem,2.8vw,2.1rem)] font-light leading-[1.28] text-[#d8d4c8]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              &ldquo;Global staffing doesn&rsquo;t fail because of distance. It fails when companies skip the integration, onboarding, and support structure that helps new talent succeed.&rdquo;
            </blockquote>
            <p className="mt-6 text-sm text-[#8a9baa]">
              Meridiem Global
            </p>
          </div>
        </div>
      </section>

      {/* ── Who we serve ── */}
      <section className="section-wc py-20 md:py-28">
        <div className="container">
          <div className="grid items-start gap-14 md:grid-cols-2 md:gap-20">
            <div>
              <p className="mb-4 text-[0.65rem] font-medium tracking-[0.34em] text-[#6b5a46] uppercase">Who We Serve</p>
              <h2
                className="text-4xl text-[#0a1628] md:text-5xl"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                U.S. Businesses Ready to Scale Responsibly
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#5a6475]">
                Meridiem works with established U.S. companies that are ready to build a structured global team — not a cheap-labor experiment.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "QSR operators and franchise groups",
                  "Growing service businesses with clear role needs",
                  "Companies that value operational accountability",
                  "Businesses that have tried overseas staffing and want it done right",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#5a6475]">
                    <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-[#b8882a]/55" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <div className="surface-light p-8">
                <p className="text-[0.62rem] font-medium tracking-[0.28em] text-[#6b5a46] uppercase mb-4">Meridiem Is Not</p>
                <ul className="space-y-2">
                  {["A résumé marketplace","A cheap-labor vendor","A generic recruiting agency","A company that offshores management"].map((n) => (
                    <li key={n} className="flex items-center gap-2 text-sm text-[#7a8694]">
                      <span className="text-[#b8882a]/50">—</span> {n}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="surface-light p-8">
                <p className="text-[0.62rem] font-medium tracking-[0.28em] text-[#6b5a46] uppercase mb-4">Meridiem Is</p>
                <ul className="space-y-2">
                  {["A placement and integration partner","A structured integration and support layer","A U.S.-coordinated placement process","An accountable extension of your team"].map((n) => (
                    <li key={n} className="flex items-center gap-2 text-sm text-[#5a6475]">
                      <span className="text-[#b8882a]">✓</span> {n}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-24" style={{ background: "#f2ece0" }}>
        <div className="container text-center">
          <h2
            className="text-4xl text-[#0a1628] md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Start With a Strategy Conversation
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-[#5a6475]">
            We&rsquo;ll tell you honestly if Meridiem is the right fit for your business.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={ZOHO_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Schedule a Strategy Call
            </a>
            <Link href="/how-it-works" className="btn-ghost-light">
              See How It Works
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
