import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "General Business Support | Virtual Assistants & Operational Staffing",
  description:
    "Meridiem Global provides structured, premium overseas support staff for U.S. businesses — virtual assistants, administrative coordinators, customer service agents, and back-office specialists managed for performance.",
  keywords: [
    "virtual assistant staffing",
    "overseas virtual assistant",
    "offshore administrative support",
    "remote business support staff",
    "overseas executive assistant",
    "offshore customer service",
    "back office outsourcing",
    "global staffing solutions",
  ],
};

const roles = [
  {
    title: "Administrative Support",
    body: "Organized, detail-oriented professionals who manage calendars, coordinate schedules, handle correspondence, and keep your operations running without friction.",
    tags: ["Calendar & scheduling", "Email management", "Document coordination"],
  },
  {
    title: "Customer Service Agents",
    body: "Trained customer-facing staff who handle inbound inquiries, resolve issues, and represent your brand with professionalism across phone, email, and chat.",
    tags: ["Inbound support", "Issue resolution", "Brand-aligned communication"],
  },
  {
    title: "Back-Office Operations",
    body: "Skilled support for the operational workflows that keep your business moving — invoicing, data entry, CRM management, order processing, and reporting.",
    tags: ["Invoicing & billing", "CRM updates", "Order processing"],
  },
  {
    title: "Data Entry & Reporting",
    body: "Accurate, systematic staff dedicated to data hygiene, record keeping, dashboard updates, and compiling reports so your team always has reliable information.",
    tags: ["Data entry", "KPI reporting", "Spreadsheet management"],
  },
  {
    title: "Executive Assistance",
    body: "High-trust remote assistants who support founders and senior leaders with research, communications, meeting prep, and priority management.",
    tags: ["Executive coordination", "Research & briefings", "Priority management"],
  },
  {
    title: "Operational Coordination",
    body: "Process-minded coordinators who manage workflows across teams, vendors, and tools — keeping projects on track without adding management burden.",
    tags: ["Project coordination", "Vendor communication", "Workflow management"],
  },
];

const process = [
  { n: "01", title: "Strategy Consultation",    body: "We map your current workflows and identify exactly where structured overseas support creates the most leverage." },
  { n: "02", title: "Role Definition",          body: "We help you define the scope of work precisely so the right person is placed for the right outcome." },
  { n: "03", title: "Talent Sourcing & Vetting",body: "Meridiem sources candidates with the experience, communication skills, and work ethic your business requires." },
  { n: "04", title: "Client Interviews",        body: "You meet shortlisted candidates and select the person who fits your team, culture, and expectations." },
  { n: "05", title: "Placement & Onboarding",   body: "Your team member integrates into your tools and workflows with full support from our team." },
  { n: "06", title: "Ongoing Management",       body: "Meridiem provides performance oversight and continued support so your hire stays aligned as your business scales." },
];

export default function GeneralBusinessPage() {
  return (
    <main>

      {/* ── HERO ── */}
      <section className="container py-20 md:py-28">
        <div className="surface relative overflow-hidden rounded-3xl px-6 py-20 md:px-16 md:py-28">

          <div className="watermark" style={{
            right: "-12%", top: "50%", transform: "translateY(-50%)",
            width: "min(700px, 85vw)", height: "min(700px, 85vw)",
          }}>
            <Image src="/meridiem-logo-transparent.png" alt="" fill className="object-contain" priority />
          </div>
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#0d2f67]/20 blur-3xl" />
          <div className="cream-accent absolute left-16 top-10 h-[1.5px] w-16 rounded-full" />

          <div className="relative max-w-3xl">
            <p className="mb-7 text-[0.7rem] font-medium tracking-[0.35em] text-[#b8b4a8] uppercase">
              General Business Support
            </p>
            <h1 className="text-[clamp(3.2rem,7vw,6rem)] font-semibold leading-[1.0] text-white"
              style={{ fontFamily: "var(--font-cormorant)" }}>
              Structured Support for{" "}
              <em className="cream-text not-italic">Every Layer of Your Business</em>
            </h1>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-[#b8b4a8] md:text-lg">
              Meridiem Global places elite overseas professionals in administrative, operational, and customer-facing roles — giving your business the structured support it needs to scale without the overhead of domestic hiring.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Start Scaling Responsibly</Link>
              <Link href="/savings-calculator" className="btn-ghost">Calculate Your Savings</Link>
            </div>
            <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/[0.07] pt-8 text-xs font-medium tracking-[0.12em] text-[#b8b4a8] uppercase">
              {["Pre-Vetted Professionals", "U.S.-Managed Placements", "70%+ Cost Savings", "Managed for Performance"].map((l) => (
                <span key={l} className="flex items-center gap-2">
                  <span className="inline-block h-1 w-1 rounded-full bg-[#e8e0c8]/60" />{l}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── POSITIONING ── */}
      <section className="container py-20">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="surface rounded-2xl p-8">
            <p className="mb-4 text-[0.68rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">The Problem</p>
            <h2 className="text-3xl text-white md:text-4xl" style={{ fontFamily: "var(--font-cormorant)" }}>
              Generic VA Services Don&rsquo;t Scale With You
            </h2>
            <p className="mt-5 leading-relaxed text-[#b8b4a8]">
              Most virtual assistant marketplaces offer low-cost, unvetted freelancers with no accountability, no management layer, and no real understanding of your business. The result is high turnover, inconsistent output, and more time managing your support than actually being supported.
            </p>
          </div>
          <div className="surface rounded-2xl p-8">
            <p className="mb-4 text-[0.68rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">The Meridiem Difference</p>
            <h2 className="text-3xl text-white md:text-4xl" style={{ fontFamily: "var(--font-cormorant)" }}>
              Premium, Structured Overseas Talent
            </h2>
            <p className="mt-5 leading-relaxed text-[#b8b4a8]">
              Meridiem Global treats every placement as a long-term hire — not a task-by-task gig. We source experienced professionals, define clear scopes of work, and manage for ongoing performance so your support staff becomes a genuine operational asset.
            </p>
          </div>
        </div>
      </section>

      {/* ── ROLES ── */}
      <section className="container py-20">
        <p className="mb-4 text-[0.68rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">Support Roles</p>
        <h2 className="mb-10 text-4xl text-white md:text-5xl" style={{ fontFamily: "var(--font-cormorant)" }}>
          What We Place
        </h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {roles.map(({ title, body, tags }) => (
            <article key={title} className="surface flex flex-col rounded-2xl p-8">
              <div className="cream-accent mb-5 h-[1px] w-8 rounded-full" />
              <h3 className="text-2xl text-white" style={{ fontFamily: "var(--font-cormorant)" }}>{title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#b8b4a8]">{body}</p>
              <ul className="mt-5 space-y-1.5">
                {tags.map((t) => (
                  <li key={t} className="flex items-center gap-2 text-xs text-[#b8b4a8]">
                    <span className="inline-block h-1 w-1 rounded-full bg-[#e8e0c8]/50" />{t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ── WHO THIS IS FOR ── */}
      <section className="container py-20">
        <div className="surface relative overflow-hidden rounded-3xl p-8 md:p-12">
          <div className="watermark" style={{ right: "-5%", bottom: "-10%", width: "320px", height: "320px" }}>
            <Image src="/meridiem-logo-transparent.png" alt="" fill className="object-contain" />
          </div>
          <div className="relative">
            <p className="mb-4 text-[0.68rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">Who This Is For</p>
            <h2 className="mb-10 text-4xl text-white md:text-5xl" style={{ fontFamily: "var(--font-cormorant)" }}>
              Built for Operators Who Value Structure
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Founders & Solopreneurs",   body: "Reclaim your time by offloading administrative and operational tasks to a dedicated professional." },
                { label: "Growing SMBs",               body: "Scale your operational capacity without scaling your domestic payroll at the same rate." },
                { label: "E-commerce Businesses",      body: "Customer service, order processing, and back-office support that keeps pace with your volume." },
                { label: "Insurance & Finance Firms",  body: "Structured administrative and data management roles that maintain accuracy and compliance standards." },
              ].map(({ label, body }) => (
                <div key={label} className="rounded-xl border border-white/[0.07] bg-[#080c20] p-6">
                  <div className="cream-accent mb-4 h-[1px] w-6 rounded-full" />
                  <p className="font-medium text-[#f5f2ea]" style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem" }}>{label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#b8b4a8]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="container py-20">
        <p className="mb-4 text-[0.68rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">The Process</p>
        <h2 className="mb-10 text-4xl text-white md:text-5xl" style={{ fontFamily: "var(--font-cormorant)" }}>
          From Consultation to Operational Support
        </h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {process.map(({ n, title, body }) => (
            <article key={n} className="surface rounded-2xl p-7">
              <div className="step-pill mb-5">{n}</div>
              <h3 className="text-2xl text-white" style={{ fontFamily: "var(--font-cormorant)" }}>{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#b8b4a8]">{body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="container py-20">
        <p className="mb-4 text-[0.68rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">Transparent Pricing</p>
        <h2 className="mb-10 text-4xl text-white md:text-5xl" style={{ fontFamily: "var(--font-cormorant)" }}>
          What Our Clients Typically Pay
        </h2>
        <div className="surface overflow-hidden rounded-2xl">
          <div className="grid grid-cols-2 border-b border-white/[0.07] px-8 py-4">
            <p className="text-[0.68rem] font-medium tracking-[0.25em] text-[#b8b4a8] uppercase">Role</p>
            <p className="text-[0.68rem] font-medium tracking-[0.25em] text-[#b8b4a8] uppercase">Monthly Rate</p>
          </div>
          {[
            { role: "Virtual Assistant",               range: "$1,200 – $1,800 / month" },
            { role: "Customer Support Representative", range: "$1,400 – $2,000 / month" },
            { role: "Administrative Coordinator",      range: "$1,400 – $2,000 / month" },
            { role: "Bookkeeper",                      range: "$1,800 – $2,500 / month" },
            { role: "Executive Assistant",             range: "$1,800 – $2,800 / month" },
          ].map(({ role, range }, i, arr) => (
            <div key={role}
              className={`grid grid-cols-2 items-center px-8 py-5 ${i < arr.length - 1 ? "border-b border-white/[0.06]" : ""}`}>
              <p className="text-base text-white" style={{ fontFamily: "var(--font-cormorant)" }}>{role}</p>
              <p className="cream-text text-xl font-semibold" style={{ fontFamily: "var(--font-cormorant)" }}>{range}</p>
            </div>
          ))}
          <div className="border-t border-white/[0.07] bg-[#080c20] px-8 py-5">
            <p className="text-sm leading-relaxed text-[#b8b4a8]">
              Final pricing depends on experience, hours, and role requirements.{" "}
              <Link href="/contact" className="text-[#e8e0c8] underline-offset-2 hover:underline transition">
                Schedule a consultation for an exact quote.
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="container py-20">
        <div className="surface relative overflow-hidden rounded-3xl px-8 py-16 text-center md:py-20">
          <div className="watermark" style={{ left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: "420px", height: "420px" }}>
            <Image src="/meridiem-logo-transparent.png" alt="" fill className="object-contain" />
          </div>
          <div className="relative">
            <p className="mb-5 text-[0.68rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">Get Started</p>
            <h2 className="text-4xl text-white md:text-5xl" style={{ fontFamily: "var(--font-cormorant)" }}>
              Stop Managing Tasks.<br className="hidden md:block" /> Start Scaling Your Business.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#b8b4a8]">
              Book a strategy call to explore which support roles will create the most immediate impact for your operations.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">Start Scaling Responsibly</Link>
              <Link href="/savings-calculator" className="btn-ghost">Estimate Your Savings</Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
