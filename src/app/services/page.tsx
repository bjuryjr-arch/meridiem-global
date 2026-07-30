import type { Metadata } from "next";
import Link from "next/link";
import { coreServices } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services | Global Staffing & Managed Talent Solutions",
  description:
    "Meridiem Global provides managed overseas staffing for U.S. businesses — virtual assistants, customer support agents, phone order agents, administrative staff, and specialized remote roles.",
};

const ZOHO_BOOKING =
  "https://meridiemglobal.zohobookings.com/#/4938048000000083003";

const primaryServices = [
  {
    label: "Restaurants & Franchises",
    title: "QSR & Franchise Operations",
    href: "/qsr-staffing",
    body: "Phone order agents, overflow call handling, and franchise operations support for restaurant operators and multi-unit groups.",
    items: ["Phone Order Agents", "Overflow Call Handling", "Franchise Admin Support"],
  },
  {
    label: "Business Operations",
    title: "General Business & Administrative Support",
    href: "/general-business",
    body: "Virtual assistants, customer support, marketing assistance, and finance operations for growing businesses across industries.",
    items: ["Virtual Assistants", "Customer Support", "Marketing & Finance Ops"],
  },
  {
    label: "Custom Sourcing",
    title: "Specialized Global Talent",
    href: "/services",
    body: "For roles requiring specific expertise, Meridiem sources and qualifies candidates from international talent markets to your exact requirements.",
    items: ["Role-Specific Sourcing", "Skills-Based Qualification", "Geographically Flexible"],
  },
];

export default function ServicesPage() {
  return (
    <main className="page-light bg-[#faf7f3]">

      {/* ── Interior Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(148deg,#faf7f3 0%,#f6f1ea 45%,#ede5d5 100%)" }}
      >
        <div className="container py-20 md:py-28">
          <p className="mb-4 text-[0.64rem] font-medium tracking-[0.38em] text-[#6b5a46] uppercase">
            What We Deliver
          </p>
          <div
            className="mb-6 h-[1.5px] w-11 rounded-full"
            style={{ background: "linear-gradient(90deg,rgba(184,136,42,0.65),rgba(184,136,42,0))" }}
            aria-hidden="true"
          />
          <h1
            className="max-w-[20ch] text-[clamp(2.6rem,5.5vw,4.5rem)] font-semibold leading-[1.08] text-[#0a1628]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Managed Staffing for{" "}
            <em className="not-italic gold-gradient-text">Growing Operations</em>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#5a6475]">
            Meridiem Global delivers high-performing overseas professionals supported by a U.S.-based integration and support layer — not raw headcount, but carefully prepared, accountable talent your business can rely on.
          </p>
        </div>
        <div className="section-rule-light" />
      </section>

      {/* ── Primary Service Areas ── */}
      <section className="section-wc py-20 md:py-28">
        <div className="container">
          <p className="mb-4 text-[0.65rem] font-medium tracking-[0.34em] text-[#6b5a46] uppercase">Primary Verticals</p>
          <h2
            className="mb-12 text-4xl text-[#0a1628] md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Solutions for Growing Operations
          </h2>

          <div className="grid gap-5 md:grid-cols-3">
            {primaryServices.map((s) => (
              <Link key={s.href} href={s.href} className="surface-light group flex flex-col p-8">
                <p className="mb-3 text-[0.62rem] font-medium tracking-[0.28em] text-[#6b5a46] uppercase">{s.label}</p>
                <div
                  className="mb-6 h-[1.5px] w-9 rounded-full"
                  style={{ background: "linear-gradient(90deg,rgba(184,136,42,0.55),rgba(184,136,42,0))" }}
                  aria-hidden="true"
                />
                <h3 className="text-2xl text-[#0a1628]" style={{ fontFamily: "var(--font-cormorant)" }}>{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#5a6475]">{s.body}</p>
                <ul className="mt-5 space-y-1.5">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-[#7a8694]">
                      <span className="inline-block h-1 w-1 shrink-0 rounded-full bg-[#b8882a]/45" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-7 text-xs tracking-[0.12em] text-[#0a1628] uppercase transition-transform duration-200 group-hover:translate-x-0.5">
                  Learn More →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Role Catalogue ── */}
      <section className="py-20 md:py-28" style={{ background: "#f2ece0" }}>
        <div className="container">
          <p className="mb-4 text-[0.65rem] font-medium tracking-[0.34em] text-[#6b5a46] uppercase">Role Catalogue</p>
          <h2
            className="mb-12 text-4xl text-[#0a1628] md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Roles We Staff
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {coreServices.map((service) => (
              <div key={service.title} className="surface-light p-8">
                <div
                  className="mb-4 h-[1.5px] w-8 rounded-full"
                  style={{ background: "linear-gradient(90deg,rgba(184,136,42,0.55),rgba(184,136,42,0))" }}
                  aria-hidden="true"
                />
                <h3 className="text-xl text-[#0a1628]" style={{ fontFamily: "var(--font-cormorant)" }}>{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5a6475]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI Accent Option ── */}
      <section className="section-wc-mid py-20 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl surface-light p-10 md:p-14">
            <p className="mb-4 text-[0.62rem] font-medium tracking-[0.28em] text-[#6b5a46] uppercase">Optional Add-On</p>
            <div
              className="mb-6 h-[1.5px] w-9 rounded-full"
              style={{ background: "linear-gradient(90deg,rgba(184,136,42,0.55),rgba(184,136,42,0))" }}
              aria-hidden="true"
            />
            <h3 className="text-2xl text-[#0a1628] md:text-3xl" style={{ fontFamily: "var(--font-cormorant)" }}>
              AI Accent Correction Technology
            </h3>
            <p className="mt-4 text-base leading-relaxed text-[#5a6475]">
              Meridiem Global offers an optional real-time AI accent correction layer for customer-facing roles. During live calls, speech is refined to improve clarity and neutrality while preserving natural conversation — helping your brand deliver consistent customer experience.
            </p>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-[#06091a] py-20 md:py-28">
        <div className="container text-center">
          <p className="mb-5 text-[0.65rem] font-medium tracking-[0.34em] text-[#c8c4b8] uppercase">Ready to Build</p>
          <h2
            className="text-4xl text-white md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Match Roles to Your Growth Plan
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-[#8a9baa]">
            We design staffing plans around output goals, not generic headcount targets. Start with a strategy conversation.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={ZOHO_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Schedule a Strategy Call
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
