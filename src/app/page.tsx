import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SavingsCalculator } from "@/components/savings-calculator";
import { coreServices, processSteps, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Overseas Staffing for U.S. Companies",
  description:
    "Scale responsibly with overseas staffing, offshore hiring, and remote staffing solutions built for U.S. founders and growing teams.",
};

const reasons = [
  {
    title: "Cost Efficiency Without Sacrificing Quality",
    body: "Access capable overseas professionals at a fraction of U.S. hiring costs while preserving quality standards.",
  },
  {
    title: "Operational Coverage That Scales",
    body: "Extend support hours and reduce missed calls without increasing local payroll or creating scheduling strain.",
  },
  {
    title: "Communication Built for Customer Experience",
    body: "Optional AI accent correction improves live-call clarity and professionalism for customer-facing teams.",
  },
  {
    title: "Managed for Performance",
    body: "Meridiem sources, vets, and supports talent so your team scales without added management complexity.",
  },
];

export default function Home() {
  return (
    <main>

      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section className="container py-20 md:py-28">
        <div className="surface relative overflow-hidden rounded-3xl px-6 py-20 md:px-16 md:py-28">

          {/* Watermark — oversized, off-center, ultra-low opacity */}
          <div
            className="watermark"
            style={{
              right: "-14%",
              top: "50%",
              transform: "translateY(-50%)",
              width: "min(820px, 90vw)",
              height: "min(820px, 90vw)",
            }}
          >
            <Image
              src="/meridiem-logo-transparent.png"
              alt=""
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Glow behind watermark */}
          <div
            className="pointer-events-none absolute rounded-full"
            style={{
              right: "-10%",
              top: "50%",
              transform: "translateY(-50%)",
              width: "640px",
              height: "640px",
              background: "radial-gradient(circle, rgba(13,47,103,0.22) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          {/* Bottom-left ambient glow */}
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#0d2f67]/20 blur-3xl" />

          {/* Cream accent bar */}
          <div className="cream-accent absolute left-16 top-10 h-[1.5px] w-16 rounded-full" />

          {/* Content */}
          <div className="relative max-w-3xl">
            <p className="mb-7 text-[0.7rem] font-medium tracking-[0.35em] text-[#b8b4a8] uppercase">
              Premium Global Staffing
            </p>

            <h1
              className="text-[clamp(3.8rem,9vw,7.5rem)] font-semibold leading-[1.0] text-white"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Scale{" "}
              <em className="cream-text not-italic">Responsibly</em>
            </h1>

            <p className="mt-8 max-w-lg text-base leading-relaxed text-[#b8b4a8] md:text-lg">
              {siteConfig.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Book a Consultation
              </Link>
              <Link href="/savings-calculator" className="btn-ghost">
                Calculate Your Savings
              </Link>
            </div>

            {/* Social proof strip */}
            <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/[0.07] pt-8 text-xs font-medium tracking-[0.12em] text-[#b8b4a8] uppercase">
              {[
                "U.S.-Managed Operations",
                "Elite Pre-Vetted Talent",
                "70%+ Average Cost Savings",
                "AI-Enhanced Communication",
              ].map((label) => (
                <span key={label} className="flex items-center gap-2">
                  <span className="inline-block h-1 w-1 rounded-full bg-[#e8e0c8]/60" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          PROBLEM / SOLUTION
      ════════════════════════════════════════ */}
      <section className="container grid gap-5 py-8 md:grid-cols-2">
        <div className="surface rounded-2xl p-8">
          <p className="mb-4 text-[0.68rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">The Challenge</p>
          <h2 className="text-3xl text-white md:text-4xl" style={{ fontFamily: "var(--font-cormorant)" }}>
            The Problem With Expensive U.S. Hiring
          </h2>
          <p className="mt-5 leading-relaxed text-[#b8b4a8]">
            Rising labor costs, staffing shortages, and high turnover create operational drag. Teams spend more while customer
            experience and response times decline. Scaling headcount domestically is no longer a sustainable path for most growing businesses.
          </p>
        </div>
        <div className="surface rounded-2xl p-8">
          <p className="mb-4 text-[0.68rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">The Solution</p>
          <h2 className="text-3xl text-white md:text-4xl" style={{ fontFamily: "var(--font-cormorant)" }}>
            Why Global Talent Helps Companies Scale Responsibly
          </h2>
          <p className="mt-5 leading-relaxed text-[#b8b4a8]">
            Offshore staffing enables cost-efficient growth, faster execution, and predictable coverage so businesses can scale
            output without scaling fixed payroll at the same pace. Global hiring is a strategic advantage.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════
          WHY CHOOSE
      ════════════════════════════════════════ */}
      <section className="container py-20">
        <p className="mb-4 text-[0.68rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">Why Meridiem</p>
        <h2 className="text-4xl text-white md:text-5xl" style={{ fontFamily: "var(--font-cormorant)" }}>
          Why Companies Choose<br className="hidden md:block" /> Meridiem Global
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {reasons.map((item) => (
            <article key={item.title} className="surface rounded-2xl p-8">
              <div className="cream-accent mb-5 h-[1px] w-10 rounded-full" />
              <h3 className="text-2xl text-white md:text-3xl" style={{ fontFamily: "var(--font-cormorant)" }}>
                {item.title}
              </h3>
              <p className="mt-4 leading-relaxed text-[#b8b4a8]">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          SERVICES OVERVIEW
      ════════════════════════════════════════ */}
      <section className="container py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="mb-4 text-[0.68rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">What We Offer</p>
            <h2 className="text-4xl text-white md:text-5xl" style={{ fontFamily: "var(--font-cormorant)" }}>
              Services Overview
            </h2>
          </div>
          <Link href="/services" className="text-sm font-medium tracking-[0.1em] text-[#e8e0c8] uppercase hover:text-white transition">
            Explore all services →
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {coreServices.map((service) => (
            <article key={service.title} className="surface rounded-2xl p-8 transition hover:border-[rgba(232,224,200,0.2)]">
              <div className="cream-accent mb-5 h-[1px] w-8 rounded-full" />
              <h3 className="text-2xl text-white" style={{ fontFamily: "var(--font-cormorant)" }}>
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#b8b4a8]">{service.description}</p>
            </article>
          ))}
          {/* Healthcare card */}
          <article className="surface rounded-2xl p-8 transition hover:border-[rgba(232,224,200,0.2)]">
            <div className="cream-accent mb-5 h-[1px] w-8 rounded-full" />
            <h3 className="text-2xl text-white" style={{ fontFamily: "var(--font-cormorant)" }}>
              Healthcare Support
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#b8b4a8]">
              Medical billing outsourcing, insurance verification, claims processing, and remote patient monitoring support roles.
            </p>
            <Link href="/medical-billing" className="mt-5 inline-block text-xs tracking-[0.12em] text-[#e8e0c8] uppercase hover:text-white transition">
              Learn more →
            </Link>
          </article>
        </div>
      </section>

      {/* ════════════════════════════════════════
          COST COMPARISON
      ════════════════════════════════════════ */}
      <section className="container py-20">
        <div className="surface relative overflow-hidden rounded-3xl p-8 md:p-12">
          <div className="watermark" style={{ right: "-5%", bottom: "-10%", width: "340px", height: "340px" }}>
            <Image src="/meridiem-logo-transparent.png" alt="" fill className="object-contain" />
          </div>
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
                {["Salary + benefits + taxes", "Onboarding & training overhead", "High turnover cost", "Limited coverage hours"].map(i => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-rose-300/60">—</span> {i}
                  </li>
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
                {["Fully managed & vetted talent", "U.S.-supervised operations", "Extended coverage windows", "AI-enhanced communication"].map(i => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[#e8e0c8]/60">✓</span> {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          HOW IT WORKS
      ════════════════════════════════════════ */}
      <section className="container py-20">
        <p className="mb-4 text-[0.68rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">The Process</p>
        <h2 className="text-4xl text-white md:text-5xl" style={{ fontFamily: "var(--font-cormorant)" }}>
          How Meridiem Global Works
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <article key={step} className="surface rounded-2xl p-7">
              <div className="step-pill mb-5">{String(index + 1).padStart(2, "0")}</div>
              <h3 className="text-2xl text-white" style={{ fontFamily: "var(--font-cormorant)" }}>
                {step}
              </h3>
            </article>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link href="/how-it-works" className="text-sm font-medium tracking-[0.1em] text-[#e8e0c8] uppercase hover:text-white transition">
            See the full process →
          </Link>
        </div>
      </section>

      {/* ════════════════════════════════════════
          TESTIMONIALS
      ════════════════════════════════════════ */}
      <section className="container py-20">
        <div className="surface relative overflow-hidden rounded-3xl p-8 md:p-12">
          <p className="mb-4 text-[0.68rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">Social Proof</p>
          <h2 className="text-4xl text-white md:text-5xl" style={{ fontFamily: "var(--font-cormorant)" }}>
            What Our Clients Say
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { quote: "Reduced customer response times by 43% in the first quarter working with Meridiem.", role: "Operations Lead, Multi-Location Service Brand" },
              { quote: "We scaled support coverage without adding domestic payroll pressure. Exactly what we needed.", role: "Founder, SaaS Startup" },
              { quote: "Dependable phone order coverage for peak-hour demand. Our missed call rate dropped dramatically.", role: "Director of Ops, QSR Franchise Group" },
            ].map(({ quote, role }) => (
              <article key={role} className="rounded-2xl border border-white/[0.07] bg-[#080c20] p-7">
                <div className="cream-accent mb-5 h-[1px] w-8 rounded-full" />
                <p className="text-base leading-relaxed text-[#f5f2ea]">&ldquo;{quote}&rdquo;</p>
                <p className="mt-5 text-xs tracking-[0.1em] text-[#b8b4a8] uppercase">{role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          INLINE CALCULATOR
      ════════════════════════════════════════ */}
      <section className="container py-20">
        <SavingsCalculator />
      </section>

      {/* ════════════════════════════════════════
          INDUSTRY VERTICALS
      ════════════════════════════════════════ */}
      <section className="container py-20">
        <p className="mb-4 text-[0.68rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">Industries</p>
        <h2 className="mb-10 text-4xl text-white md:text-5xl" style={{ fontFamily: "var(--font-cormorant)" }}>
          Specialized Solutions by Vertical
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { label: "Quick Service Restaurants", href: "/qsr-staffing", desc: "Phone order agents, overflow call handling, and franchise operations support." },
            { label: "Medical Billing", href: "/medical-billing", desc: "Claims processing, insurance verification, and revenue cycle management." },
            { label: "Remote Patient Monitoring", href: "/rpm-support", desc: "Data monitoring assistants, patient communication, and reporting support." },
          ].map(({ label, href, desc }) => (
            <Link key={href} href={href} className="surface group rounded-2xl p-8 transition hover:border-[rgba(232,224,200,0.2)]">
              <div className="cream-accent mb-5 h-[1px] w-10 rounded-full" />
              <h3 className="text-2xl text-white group-hover:cream-text transition" style={{ fontFamily: "var(--font-cormorant)" }}>
                {label}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#b8b4a8]">{desc}</p>
              <p className="mt-6 text-xs tracking-[0.12em] text-[#e8e0c8] uppercase">Explore →</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          FINAL CTA
      ════════════════════════════════════════ */}
      <section className="container py-20">
        <div className="surface relative overflow-hidden rounded-3xl px-8 py-16 text-center md:py-20">
          <div className="watermark" style={{ left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: "420px", height: "420px" }}>
            <Image src="/meridiem-logo-transparent.png" alt="" fill className="object-contain" />
          </div>
          <div className="relative">
            <p className="mb-5 text-[0.68rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">Get Started</p>
            <h2 className="text-4xl text-white md:text-5xl lg:text-6xl" style={{ fontFamily: "var(--font-cormorant)" }}>
              Build a More Efficient Team<br className="hidden md:block" /> With Overseas Staffing
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#b8b4a8]">
              Talk with Meridiem Global to design a staffing strategy that improves productivity, protects customer experience,
              and reduces operating costs.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">Book a Consultation</Link>
              <Link href="/qsr-staffing" className="btn-ghost">QSR Staffing Solutions</Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
