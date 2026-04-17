import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact | Book a Consultation",
  description:
    "Book a consultation with Meridiem Global and get a custom offshore staffing strategy for your business.",
};

export default function ContactPage() {
  return (
    <main className="container py-20">
      <h1 className="text-4xl text-white md:text-5xl">Contact / Consultation</h1>
      <p className="mt-4 max-w-3xl text-slate-300">
        Speak with our team about overseas staffing, role mapping, onboarding timelines, and projected cost savings.
      </p>

      <section className="mt-10">
        <ContactForm />
      </section>
    </main>
  );
}
