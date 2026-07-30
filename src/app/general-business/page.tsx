import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "General Business Support | Virtual Assistants & Operational Staffing",
  description:
    "Meridiem Global provides structured overseas support staff for U.S. businesses — virtual assistants, administrative coordinators, customer service agents, and back-office specialists managed for performance.",
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

const ZOHO_BOOKING =
  "https://meridiemglobal.zohobookings.com/#/4938048000000083003";

const roles = [
  {
    title: "Administrative Support",
    body: "Organized, detail-oriented professionals who manage calendars, coordinate schedules, handle correspondence, and keep your operations running without friction.",
    tags: ["Calendar & Scheduling", "Email Management", "Document Coordination"],
  },
  {
    title: "Customer Service Agents",
    body: "Trained customer-facing staff who handle inbound inquiries, resolve issues, and represent your brand with professionalism across phone, email, and chat.",
    tags: ["Inbound Support", "Issue Resolution", "Brand-Aligned Communication"],
  },
  {
    title: "Back-Office Operations",
    body: "Skilled support for the operational workflows that keep your business moving — invoicing, data entry, CRM management, order processing, and reporting.",
    tags: ["Invoicing & Billing", "CRM Updates", "Order Processing"],
  },
  {
    title: "Data Entry & Reporting",
    body: "Accurate, systematic staff dedicated to data hygiene, record keeping, dashboard updates, and compiling reports so your team always has reliable information.",
    tags: ["Data Entry", "KPI Reporting", "Spreadsheet Management"],
  },
  {
    title: "Executive Assistance",
    body: "High-trust remote assistants who support founders and senior leaders with research, communications, meeting prep, and priority management.",
    tags: ["Executive Coordination", "Research & Briefings", "Priority Management"],
  },
  {
    title: "Operational Coordination",
    body: "Process-minded coordinators who manage workflows across teams, vendors, and tools — keeping projects on track without adding management burden.",
    tags: ["Project Coordination", "Vendor Communication", "Workflow Management"],
  },
];

const process = [
  { n: "01", title: "Strategy Consultation",     body: "We map your current workflows and identify exactly where structured overseas support creates the most leverage." },
  { n: "02", title: "Role Definition",           body: "We help you define the scope of work precisely so the right person is placed for the right outcome." },
  { n: "03", title: "Talent Sourcing & Vetting", body: "Meridiem sources candidates with the experience, communication skills, and work ethic your business requires." },
  { n: "04", title: "Client Interviews",         body: "You meet shortlisted candidates and select the person who fits your team, culture, and expectations." },
  { n: "05", title: "Placement & Onboarding",    body: "Your team member integrates into your tools and workflows with full support from Meridiem." },
  { n: "06", title: "Ongoing Support",            body: "Meridiem provides continued placement check-ins and support so your hire stays aligned as your business scales." },
];

const whoFor = [
  { label: "Founders & Solopreneurs",  body: "Reclaim your time by offloading administrative and operational tasks to a dedicated professional." },
  { label: "Growing SMBs",             body: "Scale your operational capacity without scaling your domestic payroll at the same rate." },
  { label: "E-commerce Businesses",   body: "Customer service, order processing, and back-office support that keeps pace with your volume." },
  { label: "Insurance & Finance",     body: "Structured administrative and data management roles that maintain accuracy and compliance standards." },
];

const pricing = [
  { role: "Virtual Assistant",               range: "$1,200 – $1,800 / month" },
  { role: "Customer Support Representative", range: "$1,400 – $2,000 / month" },
  { role: "Administrative Coordinator",      range: "$1,400 – $2,000 / month" },
  { role: "Bookkeeper",                      range: "$1,800 – $2,500 / month" },
  { role: "Executive Assistant",             range: "$1,800 – $2,800 / month" },
];

export default function GeneralBusinessPage() {
  return (
    <main className="page-light bg-[#faf7f3]">

      {/* ── Interior Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(148deg,#faf7f3 0%,#f6f1ea 45%,#ede5d5 100%)" }}
      >
        <div className="container py-20 md:py-28">
          <p className="mb-4 text-[0.64rem] font-medium tracking-[0.38em] text-[#6b5a46] uppercase">
            General Business Support
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
            Structured Support for{" "}
            <em className="not-italic gold-gradient-text">Every Layer of Your Business</em>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#5a6475]">
            Meridiem Global places experienced overseas professionals in administrative, operational, and customer-facing roles — giving your business the structured support it needs to scale without the overhead of domestic hiring.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={ZOHO_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Start Scaling Responsibly
            </a>
            <Link href="/savings-calculator" className="btn-ghost-light">
              Calculate Your Savings
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-2 border-t pt-8 text-[0.68rem] font-medium tracking-[0.14em] text-[#6b5a46] uppercase" style={{ borderColor: "rgba(10,22,40,0.1)" }}>
            {["Pre-Vetted Professionals", "U.S.-Managed Placements", "70%+ Cost Savings", "Managed for Performance"].map((l) => (
              <span key={l} className="flex items-center gap-2">
                <span className="inline-block h-1 w-1 rounded-full bg-[#b8882a]/55" aria-hidden="true" />
                {l}
              </span>
            ))}
          </div>
        </div>
        <div className="section-rule-light" />
      </section>

      {/* ── Positioning ── */}
      <section className="section-wc py-20 md:py-28">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="surface-light p-8 md:p-10">
              <p className="mb-4 text-[0.62rem] font-medium tracking-[0.28em] text-[#6b5a46] uppercase">The Problem</p>
              <h2 className="text-3xl text-[#0a1628] md:text-4xl" style={{ fontFamily: "var(--font-cormorant)" }}>
                Generic VA Services Don&rsquo;t Scale With You
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-[#5a6475]">
                Most virtual assistant marketplaces offer low-cost, unvetted freelancers with no accountability, no integration or support layer, and no real understanding of your business. The result is high turnover, inconsistent output, and more time managing your support than actually being supported.
              </p>
            </div>
            <div className="surface-light p-8 md:p-10">
              <p className="mb-4 text-[0.62rem] font-medium tracking-[0.28em] text-[#6b5a46] uppercase">The Meridiem Difference</p>
              <h2 className="text-3xl text-[#0a1628] md:text-4xl" style={{ fontFamily: "var(--font-cormorant)" }}>
                Structured Overseas Talent, Managed for Performance
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-[#5a6475]">
                Meridiem treats every placement as a long-term hire. We source experienced professionals, define clear scopes of work, and manage for ongoing performance so your support staff becomes a genuine operational asset.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Roles ── */}
      <section className="py-20 md:py-28" style={{ background: "#f2ece0" }}>
        <div className="container">
          <p className="mb-4 text-[0.65rem] font-medium tracking-[0.34em] text-[#6b5a46] uppercase">Support Roles</p>
          <h2
            className="mb-12 text-4xl text-[#0a1628] md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Roles We Place
          </h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {roles.map(({ title, body, tags }) => (
              <div key={title} className="surface-light flex flex-col p-8">
                <div
                  className="mb-5 h-[1.5px] w-8 rounded-full"
                  style={{ background: "linear-gradient(90deg,rgba(184,136,42,0.55),rgba(184,136,42,0))" }}
                  aria-hidden="true"
                />
                <h3 className="text-xl text-[#0a1628]" style={{ fontFamily: "var(--font-cormorant)" }}>{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#5a6475]">{body}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full px-2.5 py-1 text-[0.63rem] tracking-[0.1em] text-[#6b5a46] uppercase"
                      style={{ background: "rgba(184,136,42,0.07)", border: "1px solid rgba(184,136,42,0.15)" }}
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who this is for ── */}
      <section className="section-wc py-20 md:py-24">
        <div className="container">
          <p className="mb-4 text-[0.65rem] font-medium tracking-[0.34em] text-[#6b5a46] uppercase">Who This Is For</p>
          <h2
            className="mb-12 text-4xl text-[#0a1628] md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Built for Operators Who Value Structure
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {whoFor.map(({ label, body }) => (
              <div key={label} className="surface-light p-7">
                <div
                  className="mb-4 h-[1.5px] w-6 rounded-full"
                  style={{ background: "linear-gradient(90deg,rgba(184,136,42,0.5),rgba(184,136,42,0))" }}
                  aria-hidden="true"
                />
                <p className="text-base text-[#0a1628]" style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem" }}>{label}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#5a6475]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="bg-[#06091a] py-20 md:py-28">
        <div className="container">
          <p className="mb-4 text-[0.65rem] font-medium tracking-[0.34em] text-[#c8c4b8] uppercase">The Process</p>
          <h2
            className="mb-12 text-4xl text-white md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            From Consultation to Operational Support
          </h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {process.map(({ n, title, body }) => (
              <div key={n} className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7">
                <p className="mb-3 text-[0.6rem] font-medium tracking-[0.28em] text-[#c8c4b8] uppercase">Step {n}</p>
                <div
                  className="mb-4 h-[1px] w-6 rounded-full"
                  style={{ background: "linear-gradient(90deg,rgba(200,169,110,0.45),rgba(200,169,110,0))" }}
                  aria-hidden="true"
                />
                <h3 className="text-xl text-white" style={{ fontFamily: "var(--font-cormorant)" }}>{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#8a9baa]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="py-20 md:py-28" style={{ background: "#f2ece0" }}>
        <div className="container">
          <p className="mb-4 text-[0.65rem] font-medium tracking-[0.34em] text-[#6b5a46] uppercase">Transparent Pricing</p>
          <h2
            className="mb-12 text-4xl text-[#0a1628] md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            What Our Clients Typically Pay
          </h2>
          <div className="surface-light overflow-hidden">
            <div className="grid grid-cols-2 border-b px-8 py-4" style={{ borderColor: "rgba(10,22,40,0.07)" }}>
              <p className="text-[0.68rem] font-medium tracking-[0.25em] text-[#6b5a46] uppercase">Role</p>
              <p className="text-[0.68rem] font-medium tracking-[0.25em] text-[#6b5a46] uppercase">Monthly Rate</p>
            </div>
            {pricing.map(({ role, range }, i, arr) => (
              <div
                key={role}
                className={`grid grid-cols-2 items-center px-8 py-5${i < arr.length - 1 ? " border-b" : ""}`}
                style={{ borderColor: "rgba(10,22,40,0.06)" }}
              >
                <p className="text-base text-[#0a1628]" style={{ fontFamily: "var(--font-cormorant)" }}>{role}</p>
                <p className="text-xl font-semibold gold-gradient-text" style={{ fontFamily: "var(--font-cormorant)" }}>{range}</p>
              </div>
            ))}
            <div className="border-t px-8 py-5" style={{ borderColor: "rgba(10,22,40,0.07)", background: "rgba(184,136,42,0.04)" }}>
              <p className="text-sm leading-relaxed text-[#5a6475]">
                Final pricing depends on experience, hours, and role requirements.{" "}
                <Link href="/contact" className="text-[#0a1628] underline-offset-2 hover:underline transition">
                  Schedule a consultation for an exact quote.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="section-wc-mid py-20 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl surface-light p-10 md:p-14 text-center">
            <h2
              className="text-4xl text-[#0a1628] md:text-5xl"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Stop Managing Tasks.{" "}
              <em className="not-italic gold-gradient-text">Start Scaling.</em>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-[#5a6475]">
              Book a strategy call to explore which support roles will create the most immediate impact for your operations.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href={ZOHO_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Start Scaling Responsibly
              </a>
              <Link href="/savings-calculator" className="btn-ghost-light">
                Estimate Your Savings
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
