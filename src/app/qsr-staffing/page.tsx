import type { Metadata } from "next";
import Link from "next/link";
import { QsrRevenueCalculator } from "@/components/qsr-revenue-calculator";

export const metadata: Metadata = {
  title: "Overseas Staffing for QSR and Restaurants",
  description:
    "Overseas staffing for QSR operators: phone order agents, restaurant call answering service, franchise admin support, and overflow coverage.",
};

export default function QsrStaffingPage() {
  return (
    <main className="container py-20">
      <h1 className="text-4xl text-white md:text-5xl">Overseas Staffing for QSR Growth</h1>
      <p className="mt-4 max-w-3xl text-slate-300">
        Meridiem helps restaurant operators and franchise groups reduce missed calls, recover revenue, and improve guest
        experience through dedicated offshore staffing support.
      </p>

      <section className="mt-10 grid gap-5 md:grid-cols-2">
        <article className="surface rounded-2xl p-6">
          <h2 className="text-2xl text-white">High-Impact Roles</h2>
          <ul className="mt-4 space-y-2 text-slate-300">
            <li>Phone order agents</li>
            <li>Customer support representatives</li>
            <li>Administrative support for store ops</li>
            <li>Franchise operations assistance</li>
            <li>Overflow call handling during peak hours</li>
          </ul>
        </article>
        <article className="surface rounded-2xl p-6">
          <h2 className="text-2xl text-white">Why It Works for Restaurants</h2>
          <p className="mt-4 leading-relaxed text-slate-300">
            Dedicated remote call agents keep orders flowing, protect front-of-house capacity, and improve response speed when
            local teams are stretched during rush periods.
          </p>
        </article>
      </section>

      <section className="mt-10">
        <QsrRevenueCalculator />
      </section>

      <section className="surface mt-10 rounded-2xl p-8 text-center">
        <h2 className="text-3xl text-white">Recover Lost Orders Without Inflating Payroll</h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-300">
          Build a QSR staffing model for multi-location consistency, stronger call coverage, and better unit-level economics.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-full bg-gradient-to-r from-[#0d2f67] to-[#153f87] px-6 py-3 text-sm font-semibold text-white"
        >
          Book a Free Consultation
        </Link>
      </section>
    </main>
  );
}
