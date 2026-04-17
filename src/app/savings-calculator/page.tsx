import type { Metadata } from "next";
import Link from "next/link";
import { SavingsCalculator } from "@/components/savings-calculator";

export const metadata: Metadata = {
  title: "Savings Calculator | Hire Overseas Employees",
  description:
    "Use the Meridiem Global savings calculator to estimate annual payroll savings from offshore staffing and overseas hires.",
};

export default function SavingsCalculatorPage() {
  return (
    <main className="container py-20">
      <h1 className="text-4xl text-white md:text-5xl">Savings / ROI Calculator</h1>
      <p className="mt-4 max-w-3xl text-slate-300">
        Model potential annual savings from remote staffing solutions based on U.S. salary levels, team size, and role type.
      </p>

      <section className="mt-10">
        <SavingsCalculator />
      </section>

      <section className="surface mt-10 rounded-2xl p-8">
        <h2 className="text-3xl text-white">From Savings to Growth Capacity</h2>
        <p className="mt-4 leading-relaxed text-slate-300">
          Savings can be reinvested into revenue-driving initiatives such as acquisition, customer success, product delivery,
          and operational infrastructure.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-full bg-gradient-to-r from-[#0d2f67] to-[#153f87] px-6 py-3 text-sm font-semibold text-white"
        >
          Build My Staffing Plan
        </Link>
      </section>
    </main>
  );
}
