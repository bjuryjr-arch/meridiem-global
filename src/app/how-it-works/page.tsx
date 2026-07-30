import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/faq-accordion";

export const metadata: Metadata = {
  title: "How It Works | The Meridiem Managed Staffing Process",
  description:
    "Learn how Meridiem Global builds managed global teams for U.S. businesses — consultation, sourcing, vetting, interviews, placement, and ongoing placement support.",
};

const ZOHO_BOOKING =
  "https://meridiemglobal.zohobookings.com/#/4938048000000083003";

const steps = [
  {
    n: "01",
    title: "Strategy Consultation",
    body: "We start by understanding your business, your workflows, and the specific outcomes you need. Role design, timeline, and expectations are defined before sourcing begins.",
  },
  {
    n: "02",
    title: "Talent Sourcing",
    body: "We access international talent markets to identify candidates who match your role requirements — not just general profiles, but professionals qualified for your specific context.",
  },
  {
    n: "03",
    title: "Candidate Vetting",
    body: "Every candidate is assessed for skill, communication, reliability, and cultural fit. We use structured evaluations and role-specific scorecards.",
  },
  {
    n: "04",
    title: "Client Interviews",
    body: "You review shortlisted candidates and make the final selection. We give you enough information to choose with confidence, not just résumés.",
  },
  {
    n: "05",
    title: "Placement & Onboarding",
    body: "Your new team member is integrated into your systems with clear role documentation, communication standards, and performance expectations set before day one.",
  },
  {
    n: "06",
    title: "Ongoing Support",
    body: "Meridiem provides continuing placement check-ins, engagement monitoring, and support — so your hire stays aligned over time, not just at launch.",
  },
];

const standards = [
  {
    title: "Defined Role Before Sourcing",
    body: "We never recruit before the role is documented. Expectations, success metrics, and communication standards are established first.",
  },
  {
    title: "U.S.-Based Coordination",
    body: "A U.S. operations team coordinates between your business and your overseas team throughout the engagement.",
  },
  {
    title: "Transparent Reporting",
    body: "Regular visibility into team activity, hours, and performance — no black boxes, no surprises.",
  },
  {
    title: "Continuity Support",
    body: "If a placement doesn't work, Meridiem sources a replacement. Meridiem's placement support outlasts any individual hire.",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="page-light bg-[#faf7f3]">

      {/* ── Interior Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(148deg,#faf7f3 0%,#f6f1ea 45%,#ede5d5 100%)" }}
      >
        <div className="container py-20 md:py-28">
          <p className="mb-4 text-[0.64rem] font-medium tracking-[0.38em] text-[#6b5a46] uppercase">
            The Managed Staffing Process
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
            How Meridiem{" "}
            <em className="not-italic gold-gradient-text">Builds Your Team</em>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#5a6475]">
            Every Meridiem engagement follows a structured process designed to reduce hiring risk, accelerate time-to-productivity, and keep your overseas team accountable over time — not just at launch.
          </p>
        </div>
        <div className="section-rule-light" />
      </section>

      {/* ── Six-Step Process ── */}
      <section className="section-wc py-20 md:py-28">
        <div className="container">
          <p className="mb-4 text-[0.65rem] font-medium tracking-[0.34em] text-[#6b5a46] uppercase">Six Steps</p>
          <h2
            className="mb-14 text-4xl text-[#0a1628] md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            From Consultation to Ongoing Support
          </h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.n} className="surface-light p-8">
                <p className="mb-3 text-[0.62rem] font-medium tracking-[0.28em] text-[#6b5a46] uppercase">
                  Step {step.n}
                </p>
                <div
                  className="mb-5 h-[1.5px] w-8 rounded-full"
                  style={{ background: "linear-gradient(90deg,rgba(184,136,42,0.55),rgba(184,136,42,0))" }}
                  aria-hidden="true"
                />
                <h3 className="text-xl text-[#0a1628]" style={{ fontFamily: "var(--font-cormorant)" }}>{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5a6475]">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Three-tier model — dark anchor section ── */}
      <section className="bg-[#06091a] py-20 md:py-28">
        <div className="container">
          <div className="reveal">
            <p className="mb-4 text-[0.65rem] font-medium tracking-[0.34em] text-[#c8c4b8] uppercase">
              The Integration & Support Layer
            </p>
            <h2
              className="mb-4 text-4xl text-white md:text-5xl"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Built for Placement Accountability
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-[#8a9baa]">
              Meridiem places a disciplined integration and support structure between your business and the global talent you rely on — so you get the benefit of overseas talent without the placement complexity.
            </p>
          </div>

          <div className="mt-16 max-w-2xl mx-auto space-y-0">
            <div className="tier-plane">
              <p className="mb-1 text-[0.6rem] font-medium tracking-[0.3em] text-[#8a9baa] uppercase">Your Organization</p>
              <p className="text-xl text-white" style={{ fontFamily: "var(--font-cormorant)" }}>Client Business</p>
              <p className="mt-1.5 text-sm text-[#8a9baa]">Role training, daily direction, and team leadership</p>
            </div>
            <div className="tier-connector" aria-hidden="true" />
            <div className="tier-plane tier-highlighted">
              <p className="mb-1 text-[0.6rem] font-medium tracking-[0.3em] text-[#c8a96e] uppercase">The Integration & Support Layer</p>
              <p className="text-xl text-white" style={{ fontFamily: "var(--font-cormorant)" }}>Meridiem — Integration &amp; Support</p>
              <p className="mt-1.5 mb-5 text-sm text-[#b8b4a8]">U.S.-based coordination, onboarding, and placement support</p>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {["Ongoing placement check-ins","Engagement health monitoring","Transparent reporting and visibility","Support, replacement, and continuity"].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-xs text-[#b8b4a8]">
                    <span className="mt-0.5 h-1 w-1 shrink-0 rounded-full bg-[#c8a96e]/55" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="tier-connector" aria-hidden="true" />
            <div className="tier-plane">
              <p className="mb-1 text-[0.6rem] font-medium tracking-[0.3em] text-[#8a9baa] uppercase">The Talent Network</p>
              <p className="text-xl text-white" style={{ fontFamily: "var(--font-cormorant)" }}>Globally Sourced Professionals</p>
              <p className="mt-1.5 text-sm text-[#8a9baa]">Carefully selected professionals from international talent markets, matched to your specific role requirements</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Operating Standards ── */}
      <section className="py-20 md:py-28" style={{ background: "#f2ece0" }}>
        <div className="container">
          <p className="mb-4 text-[0.65rem] font-medium tracking-[0.34em] text-[#6b5a46] uppercase">Operating Standards</p>
          <h2
            className="mb-12 text-4xl text-[#0a1628] md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            How We Keep Every Engagement Accountable
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {standards.map((s) => (
              <div key={s.title} className="surface-light p-8">
                <div
                  className="mb-4 h-[1.5px] w-8 rounded-full"
                  style={{ background: "linear-gradient(90deg,rgba(184,136,42,0.55),rgba(184,136,42,0))" }}
                  aria-hidden="true"
                />
                <h3 className="text-xl text-[#0a1628]" style={{ fontFamily: "var(--font-cormorant)" }}>{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5a6475]">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 surface-light p-8 md:p-10">
            <p className="mb-4 text-[0.62rem] font-medium tracking-[0.28em] text-[#6b5a46] uppercase">Beyond Placement</p>
            <h3 className="text-2xl text-[#0a1628] md:text-3xl" style={{ fontFamily: "var(--font-cormorant)" }}>
              Ongoing Optimization, Not Just Delivery
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#5a6475]">
              Beyond placement, Meridiem provides support for onboarding, quality control, retention, and ongoing optimization so your overseas staffing model continues to improve over time.
            </p>
            <Link href="/contact" className="mt-6 inline-block btn-ghost-light">
              Start Scaling Responsibly
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-wc py-20 md:py-28">
        <div className="container">
          <p className="mb-4 text-[0.65rem] font-medium tracking-[0.34em] text-[#6b5a46] uppercase">Common Questions</p>
          <h2
            className="mb-12 text-4xl text-[#0a1628] md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Frequently Asked Questions
          </h2>
          <FaqAccordion />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#06091a] py-20 md:py-24">
        <div className="container text-center">
          <h2
            className="text-4xl text-white md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Ready to Build a More Dependable Global Team?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-[#8a9baa]">
            Start with a strategy conversation. We&rsquo;ll tell you honestly if Meridiem is the right fit for your business.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={ZOHO_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Schedule a Strategy Call
            </a>
            <Link href="/contact" className="btn-ghost">
              Send Your Staffing Needs
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
