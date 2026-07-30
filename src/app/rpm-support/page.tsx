import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Remote Patient Monitoring Staffing | RPM Support Staff",
  description:
    "Scale your remote patient monitoring program with dedicated offshore RPM support staff — data monitors, patient coordinators, and reporting specialists managed by Meridiem Global.",
  robots: { index: false },
};

const capabilities = [
  {
    title: "Data Monitoring Assistants",
    body: "Dedicated staff who review incoming RPM device data, flag threshold alerts, and maintain accurate patient monitoring logs — giving your clinical team a reliable first layer of data triage.",
  },
  {
    title: "Patient Communication Coordinators",
    body: "Remote coordinators who conduct outreach calls, remind patients about device usage, collect readings, and document patient-reported concerns for clinical follow-up.",
  },
  {
    title: "Documentation & Reporting Support",
    body: "Administrative staff who compile RPM data reports, maintain patient records, generate billing documentation, and support compliance reporting requirements.",
  },
  {
    title: "Device & Enrollment Support",
    body: "Support staff who assist with patient device enrollment, technical troubleshooting, and connectivity follow-up — reducing the burden on your clinical team.",
  },
  {
    title: "Administrative Coordination",
    body: "Back-office RPM coordinators managing scheduling, consent documentation, program onboarding workflows, and cross-departmental communication.",
  },
  {
    title: "Billing & Reimbursement Support",
    body: "Specialists familiar with RPM billing codes (CPT 99453, 99454, 99457, 99458) who help ensure accurate documentation and timely claim submission for monitoring services.",
  },
];

const outcomes = [
  { metric: "60–70%", label: "Reduction in RPM admin cost vs. U.S. hiring" },
  { metric: "3×",     label: "Increase in patient monitoring capacity" },
  { metric: "24/7",   label: "Monitoring coverage windows available" },
  { metric: "30 days",label: "Average time from consultation to placement" },
];

const steps = [
  { n: "01", title: "Program Assessment",       body: "We review your current RPM workflow, staffing gaps, and volume targets to design a support model that fits." },
  { n: "02", title: "Role Definition",          body: "Together we specify exactly what your support staff will handle so the role is clear before sourcing begins." },
  { n: "03", title: "Talent Sourcing",          body: "We source candidates with healthcare administrative experience, strong attention to detail, and clear English communication." },
  { n: "04", title: "Candidate Vetting",        body: "Every candidate is assessed for accuracy, reliability, and professionalism before client interviews." },
  { n: "05", title: "Client Interviews",        body: "You meet shortlisted candidates and select the right fit for your program and team." },
  { n: "06", title: "Placement & Ongoing Support", body: "Your RPM support staff is integrated into your systems with Meridiem providing ongoing placement check-ins and support." },
];

const ZOHO_BOOKING =
  "https://meridiemglobal.zohobookings.com/#/4938048000000083003";

export default function RpmSupportPage() {
  return (
    <main className="page-light bg-[#faf7f3]">

      {/* ── Interior Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(148deg,#faf7f3 0%,#f6f1ea 45%,#ede5d5 100%)" }}
      >
        <div className="container py-20 md:py-28">
          <p className="mb-4 text-[0.64rem] font-medium tracking-[0.38em] text-[#6b5a46] uppercase">
            Healthcare Staffing · RPM
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
            Remote Patient Monitoring{" "}
            <em className="not-italic gold-gradient-text">Support Staffing</em>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#5a6475]">
            Expand your RPM program capacity with dedicated offshore support staff — data monitors, patient coordinators, and reporting specialists — managed and supported by Meridiem Global.
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
            {["Data Monitoring","Patient Communication","Reporting Support","Billing Coordination"].map((l) => (
              <span key={l} className="flex items-center gap-2">
                <span className="inline-block h-1 w-1 rounded-full bg-[#b8882a]/55" aria-hidden="true" />
                {l}
              </span>
            ))}
          </div>
        </div>
        <div className="section-rule-light" />
      </section>

      {/* ── Outcome metrics — dark section ── */}
      <section className="bg-[#06091a] py-20 md:py-24">
        <div className="container">
          <div className="grid gap-px sm:grid-cols-2 md:grid-cols-4" style={{ background: "rgba(255,255,255,0.04)", borderRadius: "1.25rem", overflow: "hidden" }}>
            {outcomes.map(({ metric, label }) => (
              <div key={label} className="bg-[#06091a] p-8 md:p-10 text-center">
                <p className="text-5xl font-light text-white md:text-6xl" style={{ fontFamily: "var(--font-cormorant)" }}>{metric}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#8a9baa]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Problem/Solution ── */}
      <section className="section-wc py-20 md:py-28">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="surface-light p-8 md:p-10">
              <p className="mb-4 text-[0.62rem] font-medium tracking-[0.28em] text-[#6b5a46] uppercase">The Challenge</p>
              <h2 className="text-3xl text-[#0a1628] md:text-4xl" style={{ fontFamily: "var(--font-cormorant)" }}>
                RPM Programs Are Constrained by Staff Capacity
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-[#5a6475]">
                Remote patient monitoring creates a significant administrative and data management burden. Clinical teams are stretched thin reviewing device data, following up with patients, and maintaining documentation — limiting how many patients your program can effectively serve.
              </p>
            </div>
            <div className="surface-light p-8 md:p-10">
              <p className="mb-4 text-[0.62rem] font-medium tracking-[0.28em] text-[#6b5a46] uppercase">The Solution</p>
              <h2 className="text-3xl text-[#0a1628] md:text-4xl" style={{ fontFamily: "var(--font-cormorant)" }}>
                Scale RPM Capacity With Offshore Support Staff
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-[#5a6475]">
                Meridiem Global provides trained offshore RPM support staff who handle the non-clinical workload — data monitoring, patient outreach, documentation, and reporting — freeing your clinical team to focus on care while dramatically expanding program capacity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="py-20 md:py-28" style={{ background: "#f2ece0" }}>
        <div className="container">
          <p className="mb-4 text-[0.65rem] font-medium tracking-[0.34em] text-[#6b5a46] uppercase">Support Roles</p>
          <h2
            className="mb-12 text-4xl text-[#0a1628] md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            RPM Support Staff Capabilities
          </h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <div key={c.title} className="surface-light p-7">
                <div
                  className="mb-5 h-[1.5px] w-8 rounded-full"
                  style={{ background: "linear-gradient(90deg,rgba(184,136,42,0.55),rgba(184,136,42,0))" }}
                  aria-hidden="true"
                />
                <h3 className="text-xl text-[#0a1628]" style={{ fontFamily: "var(--font-cormorant)" }}>{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5a6475]">{c.body}</p>
              </div>
            ))}
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
            How We Place Your RPM Support Team
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

      {/* ── Compliance note ── */}
      <section className="py-16" style={{ background: "#f2ece0" }}>
        <div className="container">
          <div className="mx-auto max-w-3xl surface-light p-8 md:p-10">
            <p className="mb-4 text-[0.62rem] font-medium tracking-[0.28em] text-[#6b5a46] uppercase">Compliance &amp; Oversight</p>
            <h2 className="mb-5 text-3xl text-[#0a1628]" style={{ fontFamily: "var(--font-cormorant)" }}>
              Non-Clinical Roles, Fully Supervised
            </h2>
            <p className="text-sm leading-relaxed text-[#5a6475]">
              All Meridiem RPM support roles are designed for non-clinical administrative and monitoring functions. Clinical interpretation, diagnosis, and medical decision-making remain with your licensed staff. Our support specialists operate under the oversight of your clinical leadership, ensuring your program maintains full compliance while scaling operational capacity.
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
            Scale Your RPM Program.{" "}
            <span className="cream-text">Without Scaling Overhead.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#8a9baa]">
            Book a consultation to explore how offshore RPM support staffing can expand your program capacity while significantly reducing administrative costs.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={ZOHO_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book a Free Consultation
            </a>
            <Link href="/medical-billing" className="btn-ghost">
              Medical Billing Outsourcing
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
