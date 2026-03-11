import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Medical Billing Outsourcing | Offshore Medical Billing Support",
  description:
    "Reduce overhead and accelerate revenue cycle management with Meridiem Global's offshore medical billing outsourcing. Expert claims processing, insurance verification, and billing administration.",
  keywords: [
    "medical billing outsourcing",
    "offshore medical billing",
    "medical administrative outsourcing",
    "revenue cycle management staffing",
    "insurance verification outsourcing",
    "claims processing support",
  ],
};

const benefits = [
  {
    title: "Claims Processing",
    body: "Overseas billing specialists handle claim submission, tracking, denial management, and resubmission with accuracy and speed — reducing your revenue cycle lag.",
  },
  {
    title: "Insurance Verification",
    body: "Pre-authorization requests, eligibility checks, and benefit verification managed by dedicated offshore staff before patient appointments.",
  },
  {
    title: "Billing Administration",
    body: "End-to-end billing coordination including coding review support, patient billing inquiries, and payer communication management.",
  },
  {
    title: "Revenue Cycle Management",
    body: "Full-cycle RCM support from charge capture through collections — reducing days in AR and improving clean claim rates.",
  },
  {
    title: "Denial & Rejection Management",
    body: "Proactive follow-up on denied and rejected claims to recover lost revenue with structured appeal workflows.",
  },
  {
    title: "Reporting & Analytics Support",
    body: "Billing performance reports, KPI dashboards, and payer analysis to help your team make data-informed decisions.",
  },
];

const steps = [
  { step: "01", title: "Strategy Consultation", body: "We assess your current billing workflow, identify bottlenecks, and design a staffing model aligned with your practice's needs." },
  { step: "02", title: "Talent Sourcing", body: "We source pre-vetted offshore medical billing specialists with healthcare industry experience and compliance awareness." },
  { step: "03", title: "Candidate Vetting", body: "Every candidate is assessed for billing knowledge, attention to detail, English communication, and technology proficiency." },
  { step: "04", title: "Client Interviews", body: "You meet the shortlisted candidates and select the right fit for your team and workflow." },
  { step: "05", title: "Placement & Onboarding", body: "Your offshore billing specialist is integrated into your systems, trained on your workflows, and fully operational." },
  { step: "06", title: "Ongoing Management", body: "Meridiem provides performance oversight, quality checks, and ongoing support so your billing operations run smoothly." },
];

export default function MedicalBillingPage() {
  return (
    <main>

      {/* HERO */}
      <section className="container py-20 md:py-28">
        <div className="surface relative overflow-hidden rounded-3xl px-6 py-20 md:px-16 md:py-28">

          <div
            className="watermark"
            style={{ right: "-12%", top: "50%", transform: "translateY(-50%)", width: "min(700px, 85vw)", height: "min(700px, 85vw)" }}
          >
            <Image src="/meridiem-logo-transparent.png" alt="" fill className="object-contain" priority />
          </div>
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#0d2f67]/20 blur-3xl" />
          <div className="cream-accent absolute left-16 top-10 h-[1.5px] w-16 rounded-full" />

          <div className="relative max-w-3xl">
            <p className="mb-7 text-[0.7rem] font-medium tracking-[0.35em] text-[#b8b4a8] uppercase">
              Healthcare Staffing · Medical Billing
            </p>
            <h1
              className="text-[clamp(3.2rem,7vw,6rem)] font-semibold leading-[1.0] text-white"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Medical Billing{" "}
              <em className="cream-text not-italic">Outsourcing</em>
            </h1>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-[#b8b4a8] md:text-lg">
              Reduce overhead, accelerate revenue cycles, and improve clean claim rates by placing elite offshore medical
              billing specialists in your practice — managed and supported by Meridiem Global.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Book a Consultation</Link>
              <Link href="/savings-calculator" className="btn-ghost">Calculate Your Savings</Link>
            </div>
            <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/[0.07] pt-8 text-xs font-medium tracking-[0.12em] text-[#b8b4a8] uppercase">
              {["Claims Processing", "Insurance Verification", "Denial Management", "Revenue Cycle Support"].map((l) => (
                <span key={l} className="flex items-center gap-2">
                  <span className="inline-block h-1 w-1 rounded-full bg-[#e8e0c8]/60" />
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM STATEMENT */}
      <section className="container py-20">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="surface rounded-2xl p-8">
            <p className="mb-4 text-[0.68rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">The Challenge</p>
            <h2 className="text-3xl text-white md:text-4xl" style={{ fontFamily: "var(--font-cormorant)" }}>
              The Hidden Cost of In-House Medical Billing
            </h2>
            <p className="mt-5 leading-relaxed text-[#b8b4a8]">
              U.S. medical billing staff are expensive to recruit, train, and retain. High turnover in billing departments
              leads to claim errors, delayed reimbursements, and revenue leakage — all while your clinical staff absorbs
              the administrative burden.
            </p>
          </div>
          <div className="surface rounded-2xl p-8">
            <p className="mb-4 text-[0.68rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">The Opportunity</p>
            <h2 className="text-3xl text-white md:text-4xl" style={{ fontFamily: "var(--font-cormorant)" }}>
              Offshore Medical Billing Done Right
            </h2>
            <p className="mt-5 leading-relaxed text-[#b8b4a8]">
              Meridiem Global places skilled offshore medical billing professionals who are trained, vetted, and
              managed to your practice's standards — giving you the capacity to process more claims, reduce denials,
              and protect your revenue cycle without the cost of domestic FTEs.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES BREAKDOWN */}
      <section className="container py-20">
        <p className="mb-4 text-[0.68rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">Capabilities</p>
        <h2 className="mb-10 text-4xl text-white md:text-5xl" style={{ fontFamily: "var(--font-cormorant)" }}>
          Medical Billing Support Services
        </h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => (
            <article key={item.title} className="surface rounded-2xl p-8">
              <div className="cream-accent mb-5 h-[1px] w-8 rounded-full" />
              <h3 className="text-2xl text-white" style={{ fontFamily: "var(--font-cormorant)" }}>{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#b8b4a8]">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* COST COMPARISON */}
      <section className="container py-20">
        <div className="surface relative overflow-hidden rounded-3xl p-8 md:p-12">
          <div className="watermark" style={{ right: "-5%", bottom: "-10%", width: "340px", height: "340px" }}>
            <Image src="/meridiem-logo-transparent.png" alt="" fill className="object-contain" />
          </div>
          <p className="mb-4 text-[0.68rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">Cost Comparison</p>
          <h2 className="text-4xl text-white md:text-5xl" style={{ fontFamily: "var(--font-cormorant)" }}>
            In-House vs. Offshore Medical Billing
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-white/[0.07] bg-[#080c20] p-7">
              <p className="text-[0.68rem] font-medium tracking-[0.25em] text-[#b8b4a8] uppercase">U.S. Billing Specialist</p>
              <p className="mt-1 text-sm text-[#b8b4a8]">Annual fully-loaded cost</p>
              <p className="mt-4 text-5xl font-semibold text-rose-200/80" style={{ fontFamily: "var(--font-cormorant)" }}>
                $55–75k<span className="text-2xl">+</span>
              </p>
              <ul className="mt-5 space-y-2 text-sm text-[#b8b4a8]">
                {["Salary + benefits + taxes", "Recruitment & training costs", "High turnover rate", "Limited availability"].map(i => (
                  <li key={i} className="flex items-center gap-2"><span className="text-rose-300/60">—</span> {i}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[rgba(232,224,200,0.12)] bg-[#080c20] p-7">
              <p className="text-[0.68rem] font-medium tracking-[0.25em] text-[#b8b4a8] uppercase">Meridiem Global Specialist</p>
              <p className="mt-1 text-sm text-[#b8b4a8]">Annual fully-loaded cost</p>
              <p className="mt-4 text-5xl font-semibold cream-text" style={{ fontFamily: "var(--font-cormorant)" }}>
                $18–28k
              </p>
              <ul className="mt-5 space-y-2 text-sm text-[#b8b4a8]">
                {["Vetted billing professionals", "U.S.-managed operations", "Scalable capacity", "Performance oversight included"].map(i => (
                  <li key={i} className="flex items-center gap-2"><span className="text-[#e8e0c8]/60">✓</span> {i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container py-20">
        <p className="mb-4 text-[0.68rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">The Process</p>
        <h2 className="mb-10 text-4xl text-white md:text-5xl" style={{ fontFamily: "var(--font-cormorant)" }}>
          How We Place Your Billing Team
        </h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <article key={s.step} className="surface rounded-2xl p-7">
              <div className="step-pill mb-5">{s.step}</div>
              <h3 className="text-2xl text-white" style={{ fontFamily: "var(--font-cormorant)" }}>{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#b8b4a8]">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="container py-20">
        <div className="surface rounded-3xl p-8 md:p-12">
          <p className="mb-4 text-[0.68rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">Who We Serve</p>
          <h2 className="text-4xl text-white md:text-5xl" style={{ fontFamily: "var(--font-cormorant)" }}>
            Built for Healthcare Practices & Organizations
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Independent Medical Practices",
              "Multi-Location Clinics",
              "Behavioral Health Providers",
              "Physical Therapy Groups",
              "Urgent Care Centers",
              "Telehealth Companies",
              "Dental & Specialty Practices",
              "Healthcare MSOs",
            ].map((item) => (
              <div key={item} className="rounded-xl border border-white/[0.07] bg-[#080c20] px-5 py-4">
                <div className="cream-accent mb-3 h-[1px] w-6 rounded-full" />
                <p className="text-sm text-[#f5f2ea]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-20">
        <div className="surface relative overflow-hidden rounded-3xl px-8 py-16 text-center md:py-20">
          <div className="watermark" style={{ left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: "420px", height: "420px" }}>
            <Image src="/meridiem-logo-transparent.png" alt="" fill className="object-contain" />
          </div>
          <div className="relative">
            <p className="mb-5 text-[0.68rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">Get Started</p>
            <h2 className="text-4xl text-white md:text-5xl" style={{ fontFamily: "var(--font-cormorant)" }}>
              Reduce Billing Overhead.<br className="hidden md:block" /> Accelerate Your Revenue Cycle.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#b8b4a8]">
              Book a consultation to explore how offshore medical billing outsourcing can reduce costs and improve
              claim performance for your practice.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">Book a Consultation</Link>
              <Link href="/savings-calculator" className="btn-ghost">Estimate Your Savings</Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
