import type { Metadata } from "next";
import Link from "next/link";
import { SavingsCalculator } from "@/components/savings-calculator";

export const metadata: Metadata = {
  title: "Savings Calculator | Estimate Staffing Cost Savings",
  description:
    "Use the Meridiem Global savings calculator to model potential annual payroll savings from managed overseas staffing. Adjust team size, role type, and U.S. salary benchmarks.",
};

const ZOHO_BOOKING =
  "https://meridiemglobal.zohobookings.com/#/4938048000000083003";

export default function SavingsCalculatorPage() {
  return (
    <main className="page-light bg-[#faf7f3]">

      {/* ── Interior Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(148deg,#faf7f3 0%,#f6f1ea 45%,#ede5d5 100%)" }}
      >
        <div className="container py-20 md:py-28">
          <p className="mb-4 text-[0.64rem] font-medium tracking-[0.38em] text-[#6b5a46] uppercase">
            Cost Comparison
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
            Significant Savings.{" "}
            <em className="not-italic gold-gradient-text">Sustainable Advantage.</em>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#5a6475]">
            Model potential annual savings from managed overseas staffing based on U.S. salary levels, team size, and role type.
          </p>
        </div>
        <div className="section-rule-light" />
      </section>

      {/* ── Calculator ── */}
      <section className="py-20 md:py-28" style={{ background: "#f2ece0" }}>
        <div className="container">
          <SavingsCalculator />
        </div>
      </section>

      {/* ── Reinvestment context ── */}
      <section className="section-wc-mid py-20 md:py-24">
        <div className="container">
          <div className="grid items-start gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <p className="mb-4 text-[0.65rem] font-medium tracking-[0.34em] text-[#6b5a46] uppercase">Beyond the Number</p>
              <h2
                className="text-3xl text-[#0a1628] md:text-4xl"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                From Savings to Growth Capacity
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#5a6475]">
                Savings can be reinvested into revenue-driving initiatives — customer acquisition, product delivery, operational infrastructure, or additional headcount where it matters most.
              </p>
            </div>
            <div className="surface-light p-8 md:p-10">
              <p className="mb-5 text-[0.62rem] font-medium tracking-[0.28em] text-[#6b5a46] uppercase">Common Reinvestment Directions</p>
              <ul className="space-y-3">
                {[
                  "Customer acquisition and sales",
                  "Product delivery and quality",
                  "U.S. leadership and management roles",
                  "Technology and operational tooling",
                  "Additional global team expansion",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-[#5a6475]">
                    <span className="text-[#b8882a]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
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
            Ready to Build Your Staffing Plan?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-[#8a9baa]">
            A strategy call is the fastest way to translate these numbers into a specific plan for your business.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={ZOHO_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Schedule a Strategy Call
            </a>
            <Link href="/contact" className="btn-ghost">
              Send Your Staffing Needs
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
