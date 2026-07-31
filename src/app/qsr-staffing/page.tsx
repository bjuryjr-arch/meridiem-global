import type { Metadata } from "next";
import Link from "next/link";
import { QsrRevenueCalculator } from "@/components/qsr-revenue-calculator";

export const metadata: Metadata = {
  title: "QSR & Restaurant Staffing | Phone Order Agents & Franchise Support",
  description:
    "Overseas staffing for QSR operators and restaurant groups: phone order agents, overflow call handling, franchise admin support, and multi-unit operations coverage.",
};

const ZOHO_BOOKING =
  "https://meridiemglobal.zohobookings.com/#/4938048000000083003";

const roles = [
  {
    title: "Phone Order Agents",
    body: "Dedicated remote agents who handle inbound phone orders, freeing front-of-house staff to focus on in-store experience. Consistent, trained, and accountable.",
    tags: ["Inbound Phone Orders", "Scripted & Trained", "Full-Time Dedicated"],
  },
  {
    title: "Overflow Call Handling",
    body: "Capture every call during peak hours, rushes, and lunch windows. Overflow agents activate when your in-store team is at capacity.",
    tags: ["Peak-Hour Coverage", "Rush Window Support", "Multi-Unit Capable"],
  },
  {
    title: "Customer Support Representatives",
    body: "Handle guest inquiries, complaint escalation, loyalty questions, and post-visit follow-up across phone, email, and chat channels.",
    tags: ["Guest Experience", "Multi-Channel", "Issue Resolution"],
  },
  {
    title: "Franchise Operations Admin",
    body: "Back-office coordination support for franchise groups — scheduling, vendor communication, document management, and compliance reporting.",
    tags: ["Franchise Admin", "Vendor Coordination", "Multi-Unit Support"],
  },
];

const advantages = [
  {
    stat: "100%",
    label: "Dedicated to your brand",
    body: "Unlike shared call centers, every Meridiem agent works for your operation only.",
  },
  {
    stat: "60–70%",
    label: "Cost reduction vs. U.S. hiring",
    body: "Meaningful payroll savings without sacrificing service quality or U.S. placement support.",
  },
  {
    stat: "Most placements are completed within 1–2 weeks, including candidate interviews and client selection.",
    label: "Average time to placement",
    body: "From strategy consultation to your first agent active on calls.",
  },
];

export default function QsrStaffingPage() {
  return (
    <main className="page-light bg-[#faf7f3]">

      {/* ── Interior Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(148deg,#faf7f3 0%,#f6f1ea 45%,#ede5d5 100%)" }}
      >
        <div className="container py-20 md:py-28">
          <p className="mb-4 text-[0.64rem] font-medium tracking-[0.38em] text-[#6b5a46] uppercase">
            Restaurant & Franchise Staffing
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
            Protect Service Speed.{" "}
            <em className="not-italic gold-gradient-text">Recover Lost Revenue.</em>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#5a6475]">
            Meridiem helps restaurant operators and franchise groups reduce missed calls, recover revenue, and improve guest experience through dedicated overseas staffing — with U.S.-based placement support and accountability built in.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={ZOHO_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Schedule a Strategy Call
            </a>
            <Link href="#calculator" className="btn-ghost-light">
              Estimate Your Recovery
            </Link>
          </div>
        </div>
        <div className="section-rule-light" />
      </section>

      {/* ── Roles ── */}
      <section className="section-wc py-20 md:py-28">
        <div className="container">
          <p className="mb-4 text-[0.65rem] font-medium tracking-[0.34em] text-[#6b5a46] uppercase">High-Impact Roles</p>
          <h2
            className="mb-12 text-4xl text-[#0a1628] md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Staffing Solutions for QSR Operations
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {roles.map((r) => (
              <div key={r.title} className="surface-light p-8">
                <div
                  className="mb-5 h-[1.5px] w-8 rounded-full"
                  style={{ background: "linear-gradient(90deg,rgba(184,136,42,0.55),rgba(184,136,42,0))" }}
                  aria-hidden="true"
                />
                <h3 className="text-xl text-[#0a1628]" style={{ fontFamily: "var(--font-cormorant)" }}>{r.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5a6475]">{r.body}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {r.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full px-2.5 py-1 text-[0.63rem] tracking-[0.12em] text-[#6b5a46] uppercase"
                      style={{ background: "rgba(184,136,42,0.07)", border: "1px solid rgba(184,136,42,0.15)" }}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Advantage stats — dark section ── */}
      <section className="bg-[#06091a] py-20 md:py-24">
        <div className="container">
          <p className="mb-8 text-[0.65rem] font-medium tracking-[0.34em] text-[#c8c4b8] uppercase">Why It Works</p>
          <div className="grid gap-px sm:grid-cols-3" style={{ background: "rgba(255,255,255,0.04)", borderRadius: "1.25rem", overflow: "hidden" }}>
            {advantages.map((a) => (
              <div key={a.stat} className="bg-[#06091a] p-8 md:p-10">
                <p
                  className="text-5xl font-light text-white md:text-6xl"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {a.stat}
                </p>
                <p className="mt-2 text-xs font-medium tracking-[0.14em] text-[#c8a96e] uppercase">{a.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#8a9baa]">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Revenue Calculator ── */}
      <section id="calculator" className="py-20 md:py-28 scroll-mt-24" style={{ background: "#f2ece0" }}>
        <div className="container">
          <p className="mb-4 text-[0.65rem] font-medium tracking-[0.34em] text-[#6b5a46] uppercase">Revenue Model</p>
          <h2
            className="mb-12 text-4xl text-[#0a1628] md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Estimate Your Revenue Recovery
          </h2>
          <QsrRevenueCalculator />
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
              Recover Lost Orders Without Inflating Payroll
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#5a6475]">
              Build a QSR staffing model that delivers multi-location consistency, stronger call coverage, and better unit economics.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href={ZOHO_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Book a Free Consultation
              </a>
              <Link href="/savings-calculator" className="btn-ghost-light">
                Model Your Savings
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
