import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MeridiemGlobeWrapper } from "@/components/meridiem-globe-wrapper";
import { SavingsCalculator } from "@/components/savings-calculator";

export const metadata: Metadata = {
  title: "Meridiem Global — Scale Responsibly",
  description:
    "Meridiem Global builds managed global workforce solutions for U.S. businesses — responsible staffing, operational accountability, and carefully selected global talent.",
};

const ZOHO_BOOKING =
  "https://meridiemglobal.zohobookings.com/#/4938048000000083003";

/* ── Arrow icon — reused in CTAs ── */
function ArrowRight({ size = 13 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size} height={size}
      viewBox="0 0 24 24"
      fill="none" stroke="currentColor"
      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="page-light bg-[#f8f5f0]">

      {/* ══════════════════════════════════════════════════
          1. HERO
          Globe as environmental background element —
          absolutely positioned, bleeds past the right and
          top viewport edges. Content overlaid on the left.
          No grid: the globe is not a column, it is the world.
      ══════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{
          minHeight: "100svh",
          background: "linear-gradient(148deg, #faf7f3 0%, #f6f1ea 38%, #f0ead8 72%, #ebe3ce 100%)",
        }}
        aria-label="Hero"
      >
        {/* Atmospheric gradients */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 72% 46%, rgba(180,148,80,0.07) 0%, transparent 54%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 8% 14%, rgba(10,28,60,0.05) 0%, transparent 42%)",
            }}
          />
        </div>

        {/* ── Desktop globe — environmental, overflows right + top edges ─── */}
        {/* Drop a new transparent WebP at /meridiem-globe-hero.png and this  */}
        {/* updates automatically. Section overflow:hidden clips the overflow.  */}
        <div
          className="pointer-events-none absolute hidden lg:block"
          aria-hidden="true"
          style={{
            right: "-6%",
            top: "-5%",
            width: "62%",
            aspectRatio: "1 / 1",
            zIndex: 1,
          }}
        >
          <MeridiemGlobeWrapper />
        </div>

        {/* ── Mobile / tablet globe — atmospheric presence behind content ── */}
        {/* Raised from 9% to 22% opacity; shown on sm and md (below lg).    */}
        <div
          className="pointer-events-none absolute lg:hidden"
          aria-hidden="true"
          style={{
            right: "-14%",
            top: "-6%",
            width: "82vw",
            aspectRatio: "1 / 1",
            zIndex: 0,
            opacity: 0.26,
            maskImage:
              "radial-gradient(circle at 44% 42%, black 24%, rgba(0,0,0,0.7) 46%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(circle at 44% 42%, black 24%, rgba(0,0,0,0.7) 46%, transparent 70%)",
          }}
        >
          <Image
            src="/meridiem-globe-v2.png"
            alt=""
            fill
            className="object-contain"
            priority
            sizes="82vw"
          />
        </div>

        {/* Content — left-aligned, z-index above globe */}
        <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10" style={{ zIndex: 2 }}>
          <div
            className="flex flex-col justify-center py-28 lg:py-0"
            style={{ minHeight: "100svh" }}
          >
            {/* Max-width constrains content to the left half on wide screens */}
            <div className="max-w-[500px]">

              {/* Thin gold rule */}
              <div
                className="mb-7 h-[1.5px] w-11 rounded-full fade-in-up"
                style={{
                  background: "linear-gradient(90deg, rgba(184,136,42,0.65), rgba(184,136,42,0))",
                }}
                aria-hidden="true"
              />

              {/* Eyebrow — contrast corrected: #8a7e68 (3.7:1) → #6b5a46 (6.2:1) */}
              <p className="mb-5 text-[0.64rem] font-medium tracking-[0.38em] text-[#6b5a46] uppercase fade-in-up delay-50">
                Meridiem Global
              </p>

              <h1
                className="text-[clamp(3.4rem,7.5vw,6rem)] font-semibold leading-[1.01] text-[#0a1628] fade-in-up delay-100"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Scale{" "}
                <em className="not-italic gold-gradient-text">
                  Responsibly.
                </em>
              </h1>

              <p className="mt-6 max-w-[420px] text-base leading-relaxed text-[#5a6475] fade-in-up delay-200">
                Meridiem builds the integration and support structure — careful selection, structured onboarding, and ongoing placement support — that makes global talent actually work for your business.
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-wrap gap-4 fade-in-up delay-350">
                <a
                  href={ZOHO_BOOKING}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary group"
                >
                  Schedule a Strategy Call
                  <ArrowRight />
                </a>
                <Link href="/how-it-works" className="btn-ghost-light group">
                  How We Work
                  <ArrowRight />
                </Link>
              </div>

              {/* Authority strip */}
              <div
                className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 pt-8 text-[0.62rem] font-medium tracking-[0.14em] text-[#6b5a46] uppercase fade-in-up delay-500"
                style={{
                  borderTop: "1px solid rgba(10,28,46,0.09)",
                }}
              >
                {["U.S.-Managed Operations", "Carefully Selected Global Talent", "Responsible Scaling"].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <span
                      className="inline-block h-1 w-1 shrink-0 rounded-full bg-[#b8882a]/55"
                      aria-hidden="true"
                    />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          2. PILLARS STRIP
          Four concise anchors that articulate what
          Meridiem delivers — no icons, pure typography.
      ══════════════════════════════════════════════════ */}
      <section className="section-wc" aria-label="Core pillars">
        <div className="container">
          <div className="section-rule-light" />
          <div className="grid gap-8 pt-9 pb-11 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: "U.S.-Based Management",
                desc: "Oversight, accountability, and coordination run by a U.S. operations team — not offshored.",
              },
              {
                label: "Carefully Vetted Talent",
                desc: "We screen for skill, communication, and reliability. You inherit team members, not warm bodies.",
              },
              {
                label: "Defined Accountability",
                desc: "Roles, expectations, and success metrics are set before anyone starts. Structure is built in.",
              },
              {
                label: "Transparent Cost Architecture",
                desc: "One clear rate per role. No hidden fees, no surprise billing, no ambiguity at month-end.",
              },
            ].map((item, i) => (
              <div key={item.label} className={`reveal delay-${i * 50 + 100}`}>
                <div
                  className="mb-4 h-[1.5px] w-8 rounded-full"
                  style={{
                    background: "linear-gradient(90deg, rgba(184,136,42,0.55), rgba(184,136,42,0))",
                  }}
                  aria-hidden="true"
                />
                <h3
                  className="mb-2.5 text-[1.05rem] font-semibold leading-snug text-[#0a1628]"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {item.label}
                </h3>
                <p className="text-sm leading-relaxed text-[#5a6475]">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="section-rule-light" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          3. THE OPERATING MODEL
          Strategic dark section — navy as structural anchor.
          Three-tier diagram with credibility quote below.
      ══════════════════════════════════════════════════ */}
      <section className="bg-[#06091a] py-20 md:py-28" aria-label="The operating model">
        <div className="container">

          <div className="reveal">
            <p className="mb-4 text-[0.65rem] font-medium tracking-[0.34em] text-[#c8c4b8] uppercase">
              The Managed Staffing Model
            </p>
            <h2
              className="mb-4 text-4xl text-white md:text-5xl"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Built for Operational Accountability
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-[#8a9baa]">
              Meridiem places a disciplined integration and support structure between your business and the global talent you rely on — so you get the benefit of overseas talent without the placement complexity.
            </p>
          </div>

          {/* Three-tier diagram */}
          <div className="mt-16 max-w-2xl mx-auto space-y-0">

            {/* Tier 1 */}
            <div className="tier-plane reveal delay-100">
              <p className="mb-1 text-[0.6rem] font-medium tracking-[0.3em] text-[#8a9baa] uppercase">Your Organization</p>
              <p className="text-xl text-white" style={{ fontFamily: "var(--font-cormorant)" }}>
                Client Business
              </p>
              <p className="mt-1.5 text-sm text-[#8a9baa]">
                Role training, daily direction, and team leadership
              </p>
            </div>

            <div className="tier-connector" aria-hidden="true" />

            {/* Tier 2 — Meridiem */}
            <div className="tier-plane tier-highlighted reveal delay-200">
              <p className="mb-1 text-[0.6rem] font-medium tracking-[0.3em] text-[#c8a96e] uppercase">The Integration & Support Layer</p>
              <p className="text-xl text-white" style={{ fontFamily: "var(--font-cormorant)" }}>
                Meridiem — Integration &amp; Support
              </p>
              <p className="mt-1.5 mb-5 text-sm text-[#b8b4a8]">
                U.S.-based coordination, onboarding, and placement support
              </p>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {[
                  "Ongoing placement check-ins",
                  "Engagement health monitoring",
                  "Transparent reporting and visibility",
                  "Support, replacement, and continuity",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-xs text-[#b8b4a8]">
                    <span className="mt-0.5 h-1 w-1 shrink-0 rounded-full bg-[#c8a96e]/55" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="tier-connector" aria-hidden="true" />

            {/* Tier 3 */}
            <div className="tier-plane reveal delay-300">
              <p className="mb-1 text-[0.6rem] font-medium tracking-[0.3em] text-[#8a9baa] uppercase">The Talent Network</p>
              <p className="text-xl text-white" style={{ fontFamily: "var(--font-cormorant)" }}>
                Globally Sourced Professionals
              </p>
              <p className="mt-1.5 text-sm text-[#8a9baa]">
                Carefully selected professionals from international talent markets, matched to your specific role requirements
              </p>
            </div>

          </div>

          {/* Credibility pull quote */}
          <div
            className="mx-auto mt-20 max-w-2xl border-t pt-16 text-center reveal delay-400"
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

          <div className="mt-10 text-center reveal delay-500">
            <Link
              href="/how-it-works"
              className="text-sm tracking-[0.1em] text-[#c8c4b8] uppercase transition-colors hover:text-white"
            >
              See the Full Operating Model →
            </Link>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          4. SOLUTIONS
          Light cream background — three focus areas,
          clean card design. No healthcare.
      ══════════════════════════════════════════════════ */}
      <section className="section-wc py-20 md:py-28" aria-label="Solutions">
        <div className="container">

          <div className="mb-16 reveal">
            <p className="mb-4 text-[0.65rem] font-medium tracking-[0.34em] text-[#6b5a46] uppercase">
              How We Deploy
            </p>
            <h2
              className="text-4xl text-[#0a1628] md:text-5xl"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Solutions for Growing Operations
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">

            {/* QSR & Franchise */}
            <Link
              href="/qsr-staffing"
              className="surface-light group flex flex-col p-8 reveal delay-100"
            >
              <p className="mb-3 text-[0.62rem] font-medium tracking-[0.28em] text-[#6b5a46] uppercase">
                Restaurants &amp; Franchises
              </p>
              <div
                className="mb-6 h-[1.5px] w-9 rounded-full"
                style={{ background: "linear-gradient(90deg, rgba(184,136,42,0.55), rgba(184,136,42,0))" }}
                aria-hidden="true"
              />
              <h3
                className="text-2xl text-[#0a1628]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                QSR &amp; Franchise Operations
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#5a6475]">
                Phone order agents, overflow call handling, and franchise operations support for restaurant operators and multi-unit groups.
              </p>
              <ul className="mt-5 space-y-1.5">
                {["Phone Order Agents", "Overflow Call Handling", "Franchise Admin Support"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-[#7a8694]">
                    <span className="inline-block h-1 w-1 shrink-0 rounded-full bg-[#b8882a]/45" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-xs tracking-[0.12em] text-[#0a1628] uppercase group-hover:translate-x-0.5 transition-transform duration-200">
                Explore QSR →
              </p>
            </Link>

            {/* General Business */}
            <Link
              href="/general-business"
              className="surface-light group flex flex-col p-8 reveal delay-150"
            >
              <p className="mb-3 text-[0.62rem] font-medium tracking-[0.28em] text-[#6b5a46] uppercase">
                Business Operations
              </p>
              <div
                className="mb-6 h-[1.5px] w-9 rounded-full"
                style={{ background: "linear-gradient(90deg, rgba(184,136,42,0.55), rgba(184,136,42,0))" }}
                aria-hidden="true"
              />
              <h3
                className="text-2xl text-[#0a1628]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                General Business &amp; Administrative Support
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#5a6475]">
                Virtual assistants, customer support, marketing assistance, and finance operations for growing businesses across industries.
              </p>
              <ul className="mt-5 space-y-1.5">
                {["Virtual Assistants", "Customer Support", "Marketing & Finance Ops"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-[#7a8694]">
                    <span className="inline-block h-1 w-1 shrink-0 rounded-full bg-[#b8882a]/45" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-xs tracking-[0.12em] text-[#0a1628] uppercase group-hover:translate-x-0.5 transition-transform duration-200">
                Explore Business Support →
              </p>
            </Link>

            {/* Specialized Global Talent */}
            <Link
              href="/services"
              className="surface-light group flex flex-col p-8 reveal delay-200"
            >
              <p className="mb-3 text-[0.62rem] font-medium tracking-[0.28em] text-[#6b5a46] uppercase">
                Custom Sourcing
              </p>
              <div
                className="mb-6 h-[1.5px] w-9 rounded-full"
                style={{ background: "linear-gradient(90deg, rgba(184,136,42,0.55), rgba(184,136,42,0))" }}
                aria-hidden="true"
              />
              <h3
                className="text-2xl text-[#0a1628]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Globally Sourced Specialized Talent
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#5a6475]">
                For roles requiring specific expertise, Meridiem sources and qualifies candidates from international talent markets to match your exact requirements.
              </p>
              <ul className="mt-5 space-y-1.5">
                {["Role-Specific Sourcing", "Skills-Based Qualification", "Geographically Flexible"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-[#7a8694]">
                    <span className="inline-block h-1 w-1 shrink-0 rounded-full bg-[#b8882a]/45" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-xs tracking-[0.12em] text-[#0a1628] uppercase group-hover:translate-x-0.5 transition-transform duration-200">
                All Services →
              </p>
            </Link>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          5. COST ARCHITECTURE
          Light stone background — cost savings context
          on the left, interactive calculator on the right.
          Cost numbers ($325k+ vs $120-150k) preserved.
      ══════════════════════════════════════════════════ */}
      <section
        className="py-20 md:py-28"
        style={{ background: "#f2ece0" }}
        aria-label="Cost architecture"
      >
        <div className="container">
          <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">

            {/* Left — savings positioning */}
            <div className="reveal">
              <p className="mb-4 text-[0.65rem] font-medium tracking-[0.34em] text-[#6b5a46] uppercase">
                Cost Comparison
              </p>
              <h2
                className="text-4xl text-[#0a1628] md:text-5xl"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Significant savings.<br />Sustainable advantage.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#5a6475]">
                Reduce operating costs while maintaining the quality, reliability, and support infrastructure your business depends on.
              </p>

              {/* Big cost numbers */}
              <div className="mt-10 grid grid-cols-2 gap-5">
                <div>
                  <p className="text-[0.62rem] font-medium tracking-[0.22em] text-[#6b5a46] uppercase mb-1">
                    Typical U.S. Cost
                  </p>
                  <p
                    className="text-[2.4rem] font-semibold leading-none text-[#9b5555]"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    $325k<span className="text-xl">+</span>
                  </p>
                  <p className="mt-1 text-xs text-[#8a9baa]">5 support hires / annual</p>
                </div>
                <div>
                  <p className="text-[0.62rem] font-medium tracking-[0.22em] text-[#6b5a46] uppercase mb-1">
                    Meridiem Cost
                  </p>
                  <p
                    className="text-[2.4rem] font-semibold leading-none text-[#b8882a]"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    $120–150k
                  </p>
                  <p className="mt-1 text-xs text-[#8a9baa]">Equivalent output / annual</p>
                </div>
              </div>

              {/* What's included */}
              <ul className="mt-8 space-y-2.5">
                {[
                  "Fully managed & vetted talent",
                  "U.S.-coordinated placement",
                  "Extended coverage windows",
                  "Accountability and oversight built in",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-[#5a6475]">
                    <span className="text-[#b8882a]">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — calculator (stays dark for dimensional contrast) */}
            <div className="reveal reveal-right delay-150">
              <SavingsCalculator />
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          6. VISIBILITY & CONTROL
          White background — text-based, no card heavy layout.
          Four operational transparency pillars.
      ══════════════════════════════════════════════════ */}
      <section className="section-wc-mid py-20 md:py-28" aria-label="Visibility and control">
        <div className="container">

          <div className="grid items-start gap-16 md:grid-cols-2 md:gap-24">

            {/* Left — headline */}
            <div className="reveal">
              <p className="mb-4 text-[0.65rem] font-medium tracking-[0.34em] text-[#6b5a46] uppercase">
                Operational Transparency
              </p>
              <h2
                className="text-4xl text-[#0a1628] md:text-5xl"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Visibility and control in one place.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[#5a6475]">
                Managing a global team should not feel like managing a black box. Meridiem ensures you have clear sight into your team&rsquo;s activity, performance, and costs from day one.
              </p>
              <a
                href="https://meridiem-global-cli.replit.app"
                className="mt-8 inline-block text-sm tracking-[0.1em] text-[#0a1628] uppercase transition-opacity hover:opacity-60"
              >
                Client Portal Overview →
              </a>
            </div>

            {/* Right — four pillars, text only */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {[
                {
                  title: "Team Activity",
                  detail: "Know when your team is working, what they're focused on, and how hours are allocated — without micromanaging.",
                  delay: "delay-100",
                },
                {
                  title: "Billing Transparency",
                  detail: "Clear, itemized billing with no ambiguity. Understand exactly what you're paying and what it covers.",
                  delay: "delay-150",
                },
                {
                  title: "Placement Check-ins",
                  detail: "Regular placement check-ins and engagement notes from your Meridiem team — issues are surfaced early.",
                  delay: "delay-200",
                },
                {
                  title: "Support & Communication",
                  detail: "Direct access to your Meridiem account team for requests, escalations, replacement sourcing, and coordination.",
                  delay: "delay-250",
                },
              ].map((item) => (
                <div key={item.title} className={`reveal ${item.delay}`}>
                  <div
                    className="mb-3 h-[1.5px] w-7"
                    style={{ background: "linear-gradient(90deg, rgba(184,136,42,0.5), rgba(184,136,42,0))" }}
                    aria-hidden="true"
                  />
                  <h3
                    className="text-[1.05rem] font-semibold text-[#0a1628]"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5a6475]">{item.detail}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          7. RESOURCES
          Cream background — editorial presentation.
          QSR Magazine URL and Execution Gap URL preserved exactly.
      ══════════════════════════════════════════════════ */}
      <section
        className="py-20 md:py-28"
        style={{ background: "#f8f5f0" }}
        aria-label="Resources"
      >
        <div className="container">

          <div className="mb-16 reveal">
            <p className="mb-4 text-[0.65rem] font-medium tracking-[0.34em] text-[#6b5a46] uppercase">
              Perspectives &amp; Resources
            </p>
            <h2
              className="text-4xl text-[#0a1628] md:text-5xl"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              For Operators, By Operators
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">

            {/* QSR Magazine Article */}
            <a
              href="https://www.qsrmagazine.com/growth/fast-casual/the-hidden-labor-trap-holding-restaurant-operators-back/"
              target="_blank"
              rel="noopener noreferrer"
              className="surface-light group flex flex-col p-8 md:p-10 reveal delay-100"
            >
              <p className="text-[0.62rem] tracking-[0.28em] text-[#6b5a46] uppercase">
                Article · QSR Magazine
              </p>
              <div
                className="my-5 h-px w-9"
                style={{ background: "linear-gradient(90deg, rgba(184,136,42,0.5), rgba(184,136,42,0))" }}
                aria-hidden="true"
              />
              <h3
                className="text-2xl leading-snug text-[#0a1628] md:text-3xl"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                The Hidden Labor Trap Holding Restaurant Operators Back
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-[#5a6475]">
                Founder-led QSR insight on execution, workflow, and why labor issues are rarely solved by headcount alone.
              </p>
              <span className="mt-8 flex items-center gap-2 text-xs tracking-[0.14em] uppercase text-[#0a1628] group-hover:translate-x-0.5 transition-transform duration-200">
                Read Article →
              </span>
            </a>

            {/* Execution Gap Guide */}
            <div className="surface-light relative overflow-hidden flex flex-col p-8 md:p-10 reveal delay-200">
              <p className="text-[0.62rem] font-medium tracking-[0.28em] text-[#6b5a46] uppercase">
                Free Guide · Download
              </p>
              <div
                className="my-5 h-px w-9"
                style={{ background: "linear-gradient(90deg, rgba(184,136,42,0.5), rgba(184,136,42,0))" }}
                aria-hidden="true"
              />
              <h3
                className="text-2xl leading-snug text-[#0a1628] md:text-3xl"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Free Guide:{" "}
                <em className="not-italic gold-gradient-text">
                  The Execution Gap
                </em>
              </h3>
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

              {/* Guide watermark */}
              <div
                className="pointer-events-none absolute -bottom-2 -right-2 w-28 opacity-[0.1]"
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
            </div>

          </div>

          <div className="mt-6 reveal delay-300">
            <Link
              href="/resources"
              className="text-sm tracking-[0.1em] text-[#7a8694] uppercase transition-colors hover:text-[#0a1628]"
            >
              View All Resources →
            </Link>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          8. FINAL CTA
          Deep navy — strategic dark close.
          Globe atmosphere, single headline, single button.
      ══════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden bg-[#04060f] py-20 md:py-28"
        aria-label="Call to action"
      >

        {/* Very faint globe atmospheric presence */}
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          aria-hidden="true"
        >
          <div
            className="relative"
            style={{
              width: "min(580px, 92vw)",
              height: "min(580px, 92vw)",
              opacity: 0.038,
            }}
          >
            <Image
              src="/meridiem-globe-hero.png"
              alt=""
              fill
              className="object-contain"
              sizes="(max-width: 768px) 92vw, 580px"
            />
          </div>
        </div>

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 50% 50%, rgba(10,32,76,0.14) 0%, transparent 68%)",
          }}
          aria-hidden="true"
        />

        <div className="container relative text-center reveal reveal-scale">
          <div
            className="mx-auto mb-10 h-[1px] w-10"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(200,169,110,0.28), transparent)",
            }}
            aria-hidden="true"
          />

          <h2
            className="text-4xl text-white md:text-5xl lg:text-[3.4rem]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Ready to Build a More<br className="hidden md:block" /> Dependable Global Team?
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-[#8a9baa]">
            Start with a strategy conversation. We&rsquo;ll tell you honestly if Meridiem is the right fit for your business.
          </p>

          <div className="mt-10">
            <a
              href={ZOHO_BOOKING}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Schedule a Strategy Call
              <ArrowRight />
            </a>
          </div>
        </div>

      </section>

    </main>
  );
}
