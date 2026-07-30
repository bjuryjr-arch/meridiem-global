import type { Metadata } from "next";
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
  robots: { index: false },
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
  {
    title: "Remote Patient Monitoring (RPM)",
    body: "Remote Patient Monitoring specialists who assist with device monitoring, patient follow-ups, documentation, and coordination with healthcare providers.",
  },
];

const steps = [
  { n: "01", title: "Strategy Consultation",   body: "We assess your current billing workflow, identify bottlenecks, and design a staffing model aligned with your practice's needs." },
  { n: "02", title: "Talent Sourcing",          body: "We source pre-vetted offshore medical billing specialists with healthcare industry experience and compliance awareness." },
  { n: "03", title: "Candidate Vetting",        body: "Every candidate is assessed for billing knowledge, attention to detail, English communication, and technology proficiency." },
  { n: "04", title: "Client Interviews",        body: "You meet the shortlisted candidates and select the right fit for your team and workflow." },
  { n: "05", title: "Placement & Onboarding",  body: "Your offshore billing specialist is integrated into your systems, trained on your workflows, and fully operational." },
  { n: "06", title: "Ongoing Support",           body: "Meridiem provides placement check-ins and ongoing support so your billing operations run smoothly." },
];

const whoWeServe = [
  "Independent Medical Practices",
  "Multi-Location Clinics",
  "Behavioral Health Providers",
  "Physical Therapy Groups",
  "Urgent Care Centers",
  "Telehealth Companies",
  "Dental & Specialty Practices",
  "Healthcare MSOs",
];

const ZOHO_BOOKING =
  "https://meridiemglobal.zohobookings.com/#/4938048000000083003";

export default function MedicalBillingPage() {
  return (
    <main className="page-light bg-[#faf7f3]">

      {/* ── Interior Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(148deg,#faf7f3 0%,#f6f1ea 45%,#ede5d5 100%)" }}
      >
        <div className="container py-20 md:py-28">
          <p className="mb-4 text-[0.64rem] font-medium tracking-[0.38em] text-[#6b5a46] uppercase">
            Healthcare Staffing · Medical Billing
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
            Medical Billing{" "}
            <em className="not-italic gold-gradient-text">Outsourcing</em>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#5a6475]">
            Reduce overhead, accelerate revenue cycles, and improve clean claim rates by placing offshore medical billing specialists in your practice — managed and supported by Meridiem Global.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={ZOHO_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book a Free Consultation
            </a>
            <Link href="/savings-calculator" className="btn-ghost-light">
              Calculate Your Savings
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-2 border-t pt-8 text-[0.68rem] font-medium tracking-[0.14em] text-[#6b5a46] uppercase" style={{ borderColor: "rgba(10,22,40,0.1)" }}>
            {["Claims Processing", "Insurance Verification", "Denial Management", "Revenue Cycle Support"].map((l) => (
              <span key={l} className="flex items-center gap-2">
                <span className="inline-block h-1 w-1 rounded-full bg-[#b8882a]/55" aria-hidden="true" />
                {l}
              </span>
            ))}
          </div>
        </div>
        <div className="section-rule-light" />
      </section>

      {/* ── Problem/Opportunity ── */}
      <section className="section-wc py-20 md:py-28">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="surface-light p-8 md:p-10">
              <p className="mb-4 text-[0.62rem] font-medium tracking-[0.28em] text-[#6b5a46] uppercase">The Challenge</p>
              <h2 className="text-3xl text-[#0a1628] md:text-4xl" style={{ fontFamily: "var(--font-cormorant)" }}>
                The Hidden Cost of In-House Medical Billing
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-[#5a6475]">
                U.S. medical billing staff are expensive to recruit, train, and retain. High turnover in billing departments leads to claim errors, delayed reimbursements, and revenue leakage — while your clinical staff absorbs the administrative burden.
              </p>
            </div>
            <div className="surface-light p-8 md:p-10">
              <p className="mb-4 text-[0.62rem] font-medium tracking-[0.28em] text-[#6b5a46] uppercase">The Opportunity</p>
              <h2 className="text-3xl text-[#0a1628] md:text-4xl" style={{ fontFamily: "var(--font-cormorant)" }}>
                Offshore Medical Billing Done Right
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-[#5a6475]">
                Meridiem Global places skilled offshore medical billing professionals who are trained, vetted, and managed to your practice's standards — giving you the capacity to process more claims, reduce denials, and protect your revenue cycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="py-20 md:py-28" style={{ background: "#f2ece0" }}>
        <div className="container">
          <p className="mb-4 text-[0.65rem] font-medium tracking-[0.34em] text-[#6b5a46] uppercase">Capabilities</p>
          <h2
            className="mb-12 text-4xl text-[#0a1628] md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Medical Billing Support Services
          </h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item) => (
              <div key={item.title} className="surface-light p-7">
                <div
                  className="mb-5 h-[1.5px] w-8 rounded-full"
                  style={{ background: "linear-gradient(90deg,rgba(184,136,42,0.55),rgba(184,136,42,0))" }}
                  aria-hidden="true"
                />
                <h3 className="text-xl text-[#0a1628]" style={{ fontFamily: "var(--font-cormorant)" }}>{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5a6475]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cost comparison — dark section ── */}
      <section className="bg-[#06091a] py-20 md:py-28">
        <div className="container">
          <p className="mb-8 text-[0.65rem] font-medium tracking-[0.34em] text-[#c8c4b8] uppercase">Cost Comparison</p>
          <h2
            className="mb-12 text-4xl text-white md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            In-House vs. Offshore Medical Billing
          </h2>
          <div className="grid gap-5 md:grid-cols-2 md:max-w-3xl">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7">
              <p className="text-[0.68rem] font-medium tracking-[0.25em] text-[#c8c4b8] uppercase">U.S. Billing Specialist</p>
              <p className="mt-1 text-sm text-[#8a9baa]">Annual fully-loaded cost</p>
              <p className="mt-4 text-5xl font-semibold text-red-200/70" style={{ fontFamily: "var(--font-cormorant)" }}>
                $55–75k<span className="text-2xl">+</span>
              </p>
              <ul className="mt-5 space-y-2 text-sm text-[#8a9baa]">
                {["Salary + benefits + taxes","Recruitment & training costs","High turnover rate","Limited availability"].map((i) => (
                  <li key={i} className="flex items-center gap-2"><span className="text-red-300/50">—</span> {i}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[#c8a96e]/20 bg-white/[0.02] p-7">
              <p className="text-[0.68rem] font-medium tracking-[0.25em] text-[#c8c4b8] uppercase">Meridiem Global Specialist</p>
              <p className="mt-1 text-sm text-[#8a9baa]">Annual fully-loaded cost</p>
              <p className="mt-4 text-5xl font-semibold cream-text" style={{ fontFamily: "var(--font-cormorant)" }}>
                $18–28k
              </p>
              <ul className="mt-5 space-y-2 text-sm text-[#8a9baa]">
                {["Vetted billing professionals","U.S.-coordinated placement","Scalable capacity","Ongoing placement support included"].map((i) => (
                  <li key={i} className="flex items-center gap-2"><span className="text-[#c8a96e]/65">✓</span> {i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="section-wc py-20 md:py-28">
        <div className="container">
          <p className="mb-4 text-[0.65rem] font-medium tracking-[0.34em] text-[#6b5a46] uppercase">The Process</p>
          <h2
            className="mb-12 text-4xl text-[#0a1628] md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            How We Place Your Billing Team
          </h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="surface-light p-7">
                <p className="mb-3 text-[0.62rem] font-medium tracking-[0.28em] text-[#6b5a46] uppercase">Step {s.n}</p>
                <div
                  className="mb-5 h-[1.5px] w-8 rounded-full"
                  style={{ background: "linear-gradient(90deg,rgba(184,136,42,0.55),rgba(184,136,42,0))" }}
                  aria-hidden="true"
                />
                <h3 className="text-xl text-[#0a1628]" style={{ fontFamily: "var(--font-cormorant)" }}>{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5a6475]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who we serve ── */}
      <section className="py-20 md:py-24" style={{ background: "#f2ece0" }}>
        <div className="container">
          <p className="mb-4 text-[0.65rem] font-medium tracking-[0.34em] text-[#6b5a46] uppercase">Who We Serve</p>
          <h2
            className="mb-12 text-4xl text-[#0a1628] md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Built for Healthcare Practices &amp; Organizations
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {whoWeServe.map((item) => (
              <div key={item} className="surface-light px-6 py-5">
                <div
                  className="mb-3 h-[1.5px] w-6 rounded-full"
                  style={{ background: "linear-gradient(90deg,rgba(184,136,42,0.5),rgba(184,136,42,0))" }}
                  aria-hidden="true"
                />
                <p className="text-sm text-[#0a1628]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Compliance note ── */}
      <section className="section-wc py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl surface-light p-8 md:p-10">
            <p className="mb-4 text-[0.62rem] font-medium tracking-[0.28em] text-[#6b5a46] uppercase">Compliance &amp; Oversight</p>
            <h2 className="mb-5 text-3xl text-[#0a1628]" style={{ fontFamily: "var(--font-cormorant)" }}>
              Non-Clinical Roles, Fully Supervised
            </h2>
            <p className="text-sm leading-relaxed text-[#5a6475]">
              All Meridiem medical billing roles are non-clinical administrative functions. Clinical interpretation, diagnosis, and medical decision-making remain with your licensed staff. Our support specialists operate under the oversight of your clinical leadership.
            </p>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-[#06091a] py-20 md:py-24">
        <div className="container text-center">
          <h2
            className="text-4xl text-white md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Reduce Billing Overhead.{" "}
            <span className="cream-text">Accelerate Your Revenue Cycle.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#8a9baa]">
            Book a consultation to explore how offshore medical billing outsourcing can reduce costs and improve claim performance for your practice.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={ZOHO_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book a Free Consultation
            </a>
            <Link href="/savings-calculator" className="btn-ghost">
              Estimate Your Savings
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
