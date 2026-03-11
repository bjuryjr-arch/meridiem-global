import type { Metadata } from "next";
import Link from "next/link";
import { coreServices } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services | Offshore Staffing Roles",
  description:
    "Explore Meridiem Global services: virtual assistants, customer support agents, administrative support, call center staffing, and specialized remote roles.",
};

export default function ServicesPage() {
  return (
    <main className="container py-20">
      <h1 className="text-4xl text-white md:text-5xl">Services</h1>
      <p className="mt-4 max-w-3xl text-slate-300">
        Meridiem Global delivers high-performing overseas hires for U.S. teams that need reliability, clear communication,
        and measurable results.
      </p>

      <section className="mt-10 grid gap-5 md:grid-cols-2">
        {coreServices.map((service) => (
          <article key={service.title} className="surface rounded-2xl p-6">
            <h2 className="text-2xl text-white">{service.title}</h2>
            <p className="mt-3 leading-relaxed text-slate-300">{service.description}</p>
          </article>
        ))}
      </section>

      <section className="surface mt-10 rounded-2xl p-6 md:p-8">
        <h2 className="text-3xl text-white">Add-On: AI Accent Correction Technology</h2>
        <p className="mt-4 leading-relaxed text-slate-300">
          Meridiem Global offers an optional real-time AI accent correction layer for customer service representatives. During
          live calls, speech is refined to improve clarity and neutrality while preserving natural conversation, helping your
          brand deliver consistent customer experience without sacrificing cost advantages.
        </p>
      </section>

      <section className="mt-10 rounded-2xl border border-white/10 bg-slate-900/60 p-8 text-center">
        <h2 className="text-3xl text-white">Need Help Matching Roles to Your Growth Plan?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-300">
          We design staffing plans around output goals, not generic headcount targets.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-full bg-gradient-to-r from-[#0d2f67] to-[#153f87] px-6 py-3 text-sm font-semibold text-white"
        >
          Book a Consultation
        </Link>
      </section>
    </main>
  );
}
