import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SavingsCalculator } from "@/components/savings-calculator";

export const metadata: Metadata = {
  title: "Overseas Staffing for U.S. Companies",
  description:
    "Scale responsibly with overseas staffing, offshore hiring, and remote staffing solutions built for U.S. founders and growing teams.",
};

export default function Home() {
  return (
    <main>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="container py-20 md:py-28">
        <div className="surface relative overflow-hidden rounded-3xl px-6 py-20 md:px-16 md:py-28">

          {/* Watermark */}
          <div className="watermark" style={{
            right: "-14%", top: "50%", transform: "translateY(-50%)",
            width: "min(820px, 90vw)", height: "min(820px, 90vw)",
          }}>
            <Image src="/meridiem-logo-transparent.png" alt="" fill className="object-contain" priority />
          </div>
          <div className="pointer-events-none absolute rounded-full" style={{
            right: "-10%", top: "50%", transform: "translateY(-50%)",
            width: "640px", height: "640px",
            background: "radial-gradient(circle, rgba(13,47,103,0.22) 0%, transparent 70%)",
            filter: "blur(60px)",
          }} />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#0d2f67]/20 blur-3xl" />
          <div className="cream-accent absolute left-16 top-10 h-[1.5px] w-16 rounded-full" />

          <div className="relative max-w-3xl">
            <p className="mb-7 text-[0.7rem] font-medium tracking-[0.35em] text-[#b8b4a8] uppercase">
              Premium Global Staffing
            </p>
            <h1 className="text-[clamp(3.2rem,8vw,6.5rem)] font-semibold leading-[1.04] text-white"
              style={{ fontFamily: "var(--font-cormorant)" }}>
              Scale{" "}
              <em className="cream-text not-italic">Responsibly</em>
            </h1>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-[#b8b4a8] md:text-lg">
              Meridiem Global helps U.S. businesses scale efficiently with elite overseas talent, structured workflows, and operational clarity.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Book a 15-Minute Strategy Call</Link>
              <Link href="/services" className="btn-ghost">See Roles We Place</Link>
            </div>
            <p className="mt-6 text-sm text-[#b8b4a8]">
              See how companies are scaling faster while reducing payroll costs by up to 70%.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/[0.07] pt-8 text-xs font-medium tracking-[0.12em] text-[#b8b4a8] uppercase">
              {["U.S.-Managed Operations", "Elite Pre-Vetted Talent", "70%+ Cost Savings", "AI-Enhanced Communication"].map((l) => (
                <span key={l} className="flex items-center gap-2">
                  <span className="inline-block h-1 w-1 rounded-full bg-[#e8e0c8]/60" />{l}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TRUSTED BY STRIP
      ══════════════════════════════════════ */}
      <section className="container pb-8">
        <div className="flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-white/[0.07] bg-[#080c20] px-8 py-5">
          <p className="shrink-0 text-[0.68rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">
            Trusted by operators in
          </p>
          <div className="flex flex-wrap gap-x-7 gap-y-2">
            {["Franchise Operations", "Healthcare", "Insurance Agencies", "E-commerce", "Growing SMBs"].map((i) => (
              <span key={i} className="flex items-center gap-2 text-sm text-[#f5f2ea]">
                <span className="inline-block h-1 w-1 rounded-full bg-[#e8e0c8]/40" />{i}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICES — 3 CARDS
      ══════════════════════════════════════ */}
      <section className="container py-20">
        <p className="mb-4 text-[0.68rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">Industries We Serve</p>
        <h2 className="mb-10 text-4xl text-white md:text-5xl" style={{ fontFamily: "var(--font-cormorant)" }}>
          Specialized Solutions by Vertical
        </h2>
        <div className="grid gap-5 md:grid-cols-3">

          <Link href="/qsr-staffing" className="surface group flex flex-col rounded-2xl p-8 transition hover:border-[rgba(232,224,200,0.2)]">
            <p className="mb-3 text-[0.65rem] font-medium tracking-[0.28em] text-[#b8b4a8] uppercase">Restaurants &amp; Franchises</p>
            <div className="cream-accent mb-5 h-[1px] w-10 rounded-full" />
            <h3 className="text-2xl text-white" style={{ fontFamily: "var(--font-cormorant)" }}>QSR Staffing</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-[#b8b4a8]">
              Phone order agents, overflow call handling, and franchise operations support for restaurant operators and multi-unit groups.
            </p>
            <ul className="mt-5 space-y-1.5">
              {["Phone Order Agents", "Overflow Call Handling", "Franchise Admin Support"].map((r) => (
                <li key={r} className="flex items-center gap-2 text-xs text-[#b8b4a8]">
                  <span className="inline-block h-1 w-1 rounded-full bg-[#e8e0c8]/50" />{r}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs tracking-[0.12em] text-[#e8e0c8] uppercase">Explore QSR →</p>
          </Link>

          <Link href="/medical-billing" className="surface group flex flex-col rounded-2xl p-8 transition hover:border-[rgba(232,224,200,0.2)]">
            <p className="mb-3 text-[0.65rem] font-medium tracking-[0.28em] text-[#b8b4a8] uppercase">Healthcare</p>
            <div className="cream-accent mb-5 h-[1px] w-10 rounded-full" />
            <h3 className="text-2xl text-white" style={{ fontFamily: "var(--font-cormorant)" }}>Medical Billing</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-[#b8b4a8]">
              Offshore billing specialists for claims processing, insurance verification, denial management, and full revenue cycle management.
            </p>
            <ul className="mt-5 space-y-1.5">
              {["Claims Processing", "Insurance Verification", "Revenue Cycle Management"].map((r) => (
                <li key={r} className="flex items-center gap-2 text-xs text-[#b8b4a8]">
                  <span className="inline-block h-1 w-1 rounded-full bg-[#e8e0c8]/50" />{r}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs tracking-[0.12em] text-[#e8e0c8] uppercase">Explore Medical Billing →</p>
          </Link>

          <Link href="/rpm-support" className="surface group flex flex-col rounded-2xl p-8 transition hover:border-[rgba(232,224,200,0.2)]">
            <p className="mb-3 text-[0.65rem] font-medium tracking-[0.28em] text-[#b8b4a8] uppercase">Healthcare</p>
            <div className="cream-accent mb-5 h-[1px] w-10 rounded-full" />
            <h3 className="text-2xl text-white" style={{ fontFamily: "var(--font-cormorant)" }}>Remote Patient Monitoring</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-[#b8b4a8]">
              Dedicated offshore RPM support staff for device monitoring, patient communication, documentation, and reporting.
            </p>
            <ul className="mt-5 space-y-1.5">
              {["Data Monitoring Assistants", "Patient Communication", "Reporting & Documentation"].map((r) => (
                <li key={r} className="flex items-center gap-2 text-xs text-[#b8b4a8]">
                  <span className="inline-block h-1 w-1 rounded-full bg-[#e8e0c8]/50" />{r}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs tracking-[0.12em] text-[#e8e0c8] uppercase">Explore RPM →</p>
          </Link>

        </div>
        <div className="mt-6">
          <Link href="/services" className="text-sm font-medium tracking-[0.1em] text-[#e8e0c8] uppercase hover:text-white transition">
            View all staffing services →
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HOW IT WORKS — 3 STEPS
      ══════════════════════════════════════ */}
      <section className="container py-20">
        <div className="surface relative overflow-hidden rounded-3xl p-8 md:p-12">
          <p className="mb-4 text-[0.68rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">How It Works</p>
          <h2 className="text-4xl text-white md:text-5xl" style={{ fontFamily: "var(--font-cormorant)" }}>
            Three Steps to Your Global Team
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { n: "01", title: "Tell Us What You Need",  body: "Schedule a short strategy call. We learn the role, schedule, and workflow requirements." },
              { n: "02", title: "We Source & Vet Talent", body: "Our recruiters identify, screen, and shortlist top global professionals for your review." },
              { n: "03", title: "Your Team Scales",       body: "Onboard your dedicated team member and start reducing operational costs immediately." },
            ].map((s, i, arr) => (
              <div key={s.n} className="relative flex flex-col">
                {i < arr.length - 1 && (
                  <div className="absolute left-[calc(100%+0.625rem)] top-[0.9rem] hidden h-px w-5 bg-white/[0.07] md:block" />
                )}
                <div className="step-pill mb-6">{s.n}</div>
                <h3 className="text-2xl text-white" style={{ fontFamily: "var(--font-cormorant)" }}>{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#b8b4a8]">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-5 border-t border-white/[0.07] pt-8">
            <Link href="/contact" className="btn-primary">Book a 15-Minute Strategy Call</Link>
            <Link href="/how-it-works" className="text-sm tracking-[0.08em] text-[#e8e0c8] uppercase hover:text-white transition">
              See full process →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          OPERATIONAL CONSULTATION
      ══════════════════════════════════════ */}
      <section className="container py-20">
        <div className="surface relative overflow-hidden rounded-3xl p-8 md:p-14">
          <div className="watermark" style={{ right: "-8%", bottom: "-12%", width: "360px", height: "360px" }}>
            <Image src="/meridiem-logo-transparent.png" alt="" fill className="object-contain" />
          </div>
          <div className="relative grid gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16">
            <div>
              <p className="mb-4 text-[0.68rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">Operational Consultation</p>
              <h2 className="text-4xl text-white md:text-5xl" style={{ fontFamily: "var(--font-cormorant)" }}>
                Not Sure If You&rsquo;re Ready to Hire?
              </h2>
              <div className="cream-accent mb-6 mt-6 h-[1px] w-12 rounded-full" />
              <p className="text-base leading-relaxed text-[#b8b4a8]">
                Hiring is not just about adding people. It is about adding the right structure.
              </p>
              <p className="mt-5 text-base leading-relaxed text-[#b8b4a8]">
                At Meridiem Global, we do more than place talent. We help determine whether your business is truly ready for support in the first place — defining scope, clarifying responsibilities, and evaluating workflow readiness so a hire reduces pressure rather than adding to it.
              </p>
              <p className="mt-5 text-base leading-relaxed text-[#b8b4a8]">
                For solopreneurs and growing businesses, this can be the difference between a successful long-term hire and an added headache.
              </p>
              <Link href="/contact" className="btn-primary mt-9 inline-flex">
                Book an Operational Consultation
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { title: "Identify Your Real Staffing Needs",   body: "We help you look beyond job titles to understand what support will actually move the needle." },
                { title: "Define the Scope of Work Clearly",    body: "Vague roles create vague results. We build a precise description before any hire is made." },
                { title: "Evaluate Operational Readiness",      body: "We assess your workflows so a new team member integrates smoothly, not creates friction." },
                { title: "Hire With Confidence, Not Guesswork", body: "For solopreneurs and growing teams, this step is often the most important one." },
              ].map(({ title, body }) => (
                <div key={title} className="rounded-xl border border-white/[0.07] bg-[#080c20] px-6 py-5">
                  <div className="cream-accent mb-3 h-[1px] w-6 rounded-full" />
                  <p className="text-[1.05rem] font-medium text-[#f5f2ea]" style={{ fontFamily: "var(--font-cormorant)" }}>{title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#b8b4a8]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SAVINGS COMPARISON + ROI CALCULATOR
      ══════════════════════════════════════ */}
      <section className="container py-20">
        <div className="surface relative overflow-hidden rounded-3xl p-8 md:p-12">
          <div className="watermark" style={{ right: "-5%", bottom: "-10%", width: "340px", height: "340px" }}>
            <Image src="/meridiem-logo-transparent.png" alt="" fill className="object-contain" />
          </div>
          <div className="relative">
            <p className="mb-4 text-[0.68rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">Cost Comparison</p>
            <h2 className="text-4xl text-white md:text-5xl" style={{ fontFamily: "var(--font-cormorant)" }}>
              U.S. Hiring vs. Overseas Staffing
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-white/[0.07] bg-[#080c20] p-7">
                <p className="text-[0.68rem] font-medium tracking-[0.25em] text-[#b8b4a8] uppercase">Typical U.S. Cost</p>
                <p className="mt-1 text-sm text-[#b8b4a8]">5 support hires / annual</p>
                <p className="mt-4 text-5xl font-semibold text-rose-200/80" style={{ fontFamily: "var(--font-cormorant)" }}>
                  $325,000<span className="text-2xl">+</span>
                </p>
                <ul className="mt-5 space-y-2 text-sm text-[#b8b4a8]">
                  {["Salary + benefits + taxes", "Onboarding & training overhead", "High turnover cost", "Limited coverage hours"].map((i) => (
                    <li key={i} className="flex items-center gap-2"><span className="text-rose-300/60">—</span> {i}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-[rgba(232,224,200,0.12)] bg-[#080c20] p-7">
                <p className="text-[0.68rem] font-medium tracking-[0.25em] text-[#b8b4a8] uppercase">Meridiem Global Cost</p>
                <p className="mt-1 text-sm text-[#b8b4a8]">Equivalent output / annual</p>
                <p className="mt-4 text-5xl font-semibold cream-text" style={{ fontFamily: "var(--font-cormorant)" }}>
                  $120–150k
                </p>
                <ul className="mt-5 space-y-2 text-sm text-[#b8b4a8]">
                  {["Fully managed & vetted talent", "U.S.-supervised operations", "Extended coverage windows", "AI-enhanced communication"].map((i) => (
                    <li key={i} className="flex items-center gap-2"><span className="text-[#e8e0c8]/60">✓</span> {i}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-4 pb-20">
        <SavingsCalculator />
      </section>

      {/* ══════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════ */}
      <section className="container py-20">
        <div className="surface relative overflow-hidden rounded-3xl px-8 py-16 text-center md:py-24">
          <div className="watermark" style={{ left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: "420px", height: "420px" }}>
            <Image src="/meridiem-logo-transparent.png" alt="" fill className="object-contain" />
          </div>
          <div className="relative">
            <p className="mb-5 text-[0.68rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">Get Started</p>
            <h2 className="text-4xl text-white md:text-5xl lg:text-6xl" style={{ fontFamily: "var(--font-cormorant)" }}>
              Build a More Efficient Team<br className="hidden md:block" /> With Overseas Staffing
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#b8b4a8]">
              Talk with Meridiem Global to design a staffing strategy that improves productivity, protects customer experience, and reduces operating costs.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">Book a Consultation</Link>
              <Link href="/savings-calculator" className="btn-ghost">Calculate Your Savings</Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
