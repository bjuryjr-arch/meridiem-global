import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industries | Meridiem Global",
  description:
    "Meridiem Global supports U.S. businesses in QSR and restaurant operations, general business support, and specialized global roles — with structured overseas staffing and U.S.-coordinated placement support.",
};

const ZOHO_BOOKING =
  "https://meridiemglobal.zohobookings.com/#/4938048000000083003";

const industries = [
  {
    href: "/qsr-staffing",
    label: "Restaurants & Franchises",
    title: "QSR & Franchise Operations",
    desc: "Phone order support, overflow handling, and franchise operations staffing designed to protect service speed and guest experience across single-unit and multi-unit operations.",
    highlights: ["Phone Order Agents", "Overflow Call Handling", "Franchise Admin Support"],
  },
  {
    href: "/general-business",
    label: "General Operations",
    title: "General Business Support",
    desc: "Virtual assistants, administrative coordinators, customer support, and operational roles for businesses that need reliable execution without adding headcount cost or complexity on site.",
    highlights: ["Virtual Assistants", "Administrative Support", "Customer Support Teams"],
  },
  {
    href: "/services",
    label: "Custom Sourcing",
    title: "Specialized Global Talent",
    desc: "For roles requiring specific expertise, Meridiem sources and qualifies candidates from international talent markets to match your exact requirements and operational standards.",
    highlights: ["Role-Specific Sourcing", "Skills-Based Qualification", "Geographically Flexible"],
  },
  {
    href: "/how-it-works",
    label: "Managed Staffing",
    title: "The Managed Staffing Model",
    desc: "Every Meridiem engagement includes U.S.-based integration support — structured onboarding, placement check-ins, and coordination between your business and the overseas professionals we place.",
    highlights: ["U.S. Placement Coordination", "Defined Accountability", "Transparent Reporting"],
  },
];

export default function IndustriesPage() {
  return (
    <main className="page-light bg-[#faf7f3]">

      {/* ── Interior Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(148deg,#faf7f3 0%,#f6f1ea 45%,#ede5d5 100%)" }}
      >
        <div className="container py-20 md:py-28">
          <p className="mb-4 text-[0.64rem] font-medium tracking-[0.38em] text-[#6b5a46] uppercase">
            Expertise by Vertical
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
            Industries We{" "}
            <em className="not-italic gold-gradient-text">Serve</em>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#5a6475]">
            Every industry has different operational pressures. Meridiem builds staffing models that respect your customers, your workflows, and your service standards.
          </p>
        </div>
        <div className="section-rule-light" />
      </section>

      {/* ── Industry Cards ── */}
      <section className="section-wc py-20 md:py-28">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-2">
            {industries.map((ind) => (
              <Link
                key={ind.href}
                href={ind.href}
                className="surface-light group flex flex-col p-8 md:p-10"
              >
                <p className="mb-3 text-[0.62rem] font-medium tracking-[0.28em] text-[#6b5a46] uppercase">{ind.label}</p>
                <div
                  className="mb-6 h-[1px] w-9 rounded-full"
                  style={{ background: "linear-gradient(90deg,rgba(184,136,42,0.5),rgba(184,136,42,0))" }}
                  aria-hidden="true"
                />
                <h2 className="text-2xl text-[#0a1628]" style={{ fontFamily: "var(--font-cormorant)" }}>{ind.title}</h2>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-[#5a6475]">{ind.desc}</p>
                <ul className="mt-6 space-y-1.5">
                  {ind.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2.5 text-xs text-[#7a8694]">
                      <span className="inline-block h-1 w-1 shrink-0 rounded-full bg-[#b8882a]/45" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
                <span className="mt-7 inline-flex items-center gap-1 text-xs tracking-[0.12em] text-[#0a1628] uppercase transition-transform duration-200 group-hover:translate-x-0.5">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Managed model callout ── */}
      <section className="py-20 md:py-24" style={{ background: "#f2ece0" }}>
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-[0.65rem] font-medium tracking-[0.34em] text-[#6b5a46] uppercase">
              Regardless of Industry
            </p>
            <h2
              className="text-4xl text-[#0a1628] md:text-5xl"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Every Engagement Includes the Integration & Support Layer
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#5a6475]">
              Meridiem does not place talent without structure. Every client receives defined role expectations, structured onboarding, transparent reporting, and ongoing placement support.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href={ZOHO_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Schedule a Strategy Call
              </a>
              <Link href="/how-it-works" className="btn-ghost-light">
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
