import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Remote Patient Monitoring Staffing | RPM Support Staff",
  description:
    "Scale your remote patient monitoring program with dedicated offshore RPM support staff. Data monitoring assistants, patient communication, and reporting support — managed by Meridiem Global.",
  keywords: [
    "remote patient monitoring staffing",
    "RPM support staff",
    "offshore RPM support",
    "remote patient monitoring outsourcing",
    "RPM data monitoring assistants",
    "patient communication outsourcing",
    "healthcare remote staffing",
  ],
};

const roles = [
  {
    title: "Data Monitoring Assistants",
    body: "Dedicated staff who review incoming RPM device data, flag alerts, document readings, and escalate clinical concerns to your care team — extending your monitoring capacity without adding clinical headcount.",
  },
  {
    title: "Patient Communication Coordinators",
    body: "Overseas coordinators who handle patient outreach, check-in calls, device onboarding support, and follow-up scheduling — keeping patients engaged and improving program adherence.",
  },
  {
    title: "Reporting & Documentation Support",
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
  { metric: "3×", label: "Increase in patient monitoring capacity" },
  { metric: "24/7", label: "Monitoring coverage windows available" },
  { metric: "30 days", label: "Average time from consultation to placement" },
];

export default function RpmSupportPage() {
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
              Healthcare Staffing · RPM
            </p>
            <h1
              className="text-[clamp(3.2rem,7vw,6rem)] font-semibold leading-[1.0] text-white"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Remote Patient Monitoring{" "}
              <em className="cream-text not-italic">Support Staffing</em>
            </h1>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-[#b8b4a8] md:text-lg">
              Expand your RPM program capacity with dedicated offshore support staff — data monitors, patient coordinators,
              and reporting specialists managed and supported by Meridiem Global.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Book a Free Consultation</Link>
              <Link href="/savings-calculator" className="btn-ghost">Calculate Your Savings</Link>
            </div>
            <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/[0.07] pt-8 text-xs font-medium tracking-[0.12em] text-[#b8b4a8] uppercase">
              {["Data Monitoring", "Patient Communication", "Reporting Support", "Billing Coordination"].map((l) => (
                <span key={l} className="flex items-center gap-2">
                  <span className="inline-block h-1 w-1 rounded-full bg-[#e8e0c8]/60" />
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOME METRICS */}
      <section className="container py-20">
        <div className="grid gap-5 md:grid-cols-4">
          {outcomes.map(({ metric, label }) => (
            <div key={label} className="surface rounded-2xl p-7 text-center">
              <p className="text-5xl font-semibold cream-text" style={{ fontFamily: "var(--font-cormorant)" }}>{metric}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#b8b4a8]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROBLEM / OPPORTUNITY */}
      <section className="container py-20">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="surface rounded-2xl p-8">
            <p className="mb-4 text-[0.68rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">The Challenge</p>
            <h2 className="text-3xl text-white md:text-4xl" style={{ fontFamily: "var(--font-cormorant)" }}>
              RPM Programs Are Constrained by Staff Capacity
            </h2>
            <p className="mt-5 leading-relaxed text-[#b8b4a8]">
              Remote patient monitoring creates a significant administrative and data management burden. Clinical teams
              are stretched thin reviewing device data, following up with patients, and maintaining documentation —
              limiting how many patients your program can effectively serve.
            </p>
          </div>
          <div className="surface rounded-2xl p-8">
            <p className="mb-4 text-[0.68rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">The Solution</p>
            <h2 className="text-3xl text-white md:text-4xl" style={{ fontFamily: "var(--font-cormorant)" }}>
              Scale RPM Capacity With Offshore Support Staff
            </h2>
            <p className="mt-5 leading-relaxed text-[#b8b4a8]">
              Meridiem Global provides trained offshore RPM support staff who handle the non-clinical workload —
              data monitoring, patient outreach, documentation, and reporting — freeing your clinical team to focus
              on care while dramatically expanding program capacity at a fraction of domestic staffing costs.
            </p>
          </div>
        </div>
      </section>

      {/* ROLE BREAKDOWN */}
      <section className="container py-20">
        <p className="mb-4 text-[0.68rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">Support Roles</p>
        <h2 className="mb-10 text-4xl text-white md:text-5xl" style={{ fontFamily: "var(--font-cormorant)" }}>
          RPM Support Staff Capabilities
        </h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {roles.map((item) => (
            <article key={item.title} className="surface rounded-2xl p-8">
              <div className="cream-accent mb-5 h-[1px] w-8 rounded-full" />
              <h3 className="text-2xl text-white" style={{ fontFamily: "var(--font-cormorant)" }}>{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#b8b4a8]">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* HOW RPM STAFFING WORKS */}
      <section className="container py-20">
        <div className="surface relative overflow-hidden rounded-3xl p-8 md:p-12">
          <div className="watermark" style={{ right: "-5%", bottom: "-10%", width: "320px", height: "320px" }}>
            <Image src="/meridiem-logo-transparent.png" alt="" fill className="object-contain" />
          </div>
          <p className="mb-4 text-[0.68rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">How It Works</p>
          <h2 className="text-4xl text-white md:text-5xl" style={{ fontFamily: "var(--font-cormorant)" }}>
            From Consultation to Active Monitoring Support
          </h2>
          <div className="relative mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { step: "01", title: "Program Assessment", body: "We review your current RPM workflow, patient volume, and staff capacity gaps to define the right support model." },
              { step: "02", title: "Role Definition", body: "Together we identify which non-clinical tasks can be delegated to offshore staff while maintaining compliance and quality." },
              { step: "03", title: "Talent Sourcing", body: "We source candidates with healthcare administrative experience, strong attention to detail, and communication skills." },
              { step: "04", title: "Vetting & Screening", body: "Candidates are assessed for relevant knowledge, technology proficiency, and fit with your program requirements." },
              { step: "05", title: "Placement & Training", body: "Your RPM support specialist is placed, onboarded to your systems, and trained on your specific workflows." },
              { step: "06", title: "Ongoing Performance Management", body: "Meridiem monitors performance, provides quality oversight, and ensures your RPM support team stays aligned with program goals." },
            ].map((s) => (
              <article key={s.step} className="rounded-2xl border border-white/[0.07] bg-[#080c20] p-7">
                <div className="step-pill mb-5">{s.step}</div>
                <h3 className="text-2xl text-white" style={{ fontFamily: "var(--font-cormorant)" }}>{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#b8b4a8]">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLIANCE NOTE */}
      <section className="container py-20">
        <div className="surface rounded-2xl p-8">
          <p className="mb-4 text-[0.68rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">Compliance & Oversight</p>
          <h2 className="mb-5 text-4xl text-white md:text-5xl" style={{ fontFamily: "var(--font-cormorant)" }}>
            Non-Clinical Roles, Fully Supervised
          </h2>
          <p className="max-w-2xl leading-relaxed text-[#b8b4a8]">
            All Meridiem RPM support roles are designed for non-clinical administrative and monitoring functions. Clinical
            interpretation, diagnosis, and medical decision-making remain with your licensed staff. Our support specialists
            operate under the oversight of your clinical leadership, ensuring your program maintains full compliance while
            scaling operational capacity.
          </p>
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
              Scale Your RPM Program.<br className="hidden md:block" /> Without Scaling Overhead.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#b8b4a8]">
              Book a consultation to explore how offshore RPM support staffing can expand your program capacity
              while significantly reducing administrative costs.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">Book a Free Consultation</Link>
              <Link href="/medical-billing" className="btn-ghost">Medical Billing Outsourcing</Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
