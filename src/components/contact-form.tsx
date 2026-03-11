"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="rounded-2xl border border-white/15 bg-slate-900/70 p-6 md:p-8">
      <h2 className="text-2xl font-semibold text-white">Book Your Consultation</h2>
      <p className="mt-2 text-sm text-slate-300">
        Share your hiring goals and we will return with role recommendations, projected savings, and next steps.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 grid gap-4 md:grid-cols-2">
        <input required placeholder="Full name" className="input" />
        <input required type="email" placeholder="Work email" className="input" />
        <input required placeholder="Company name" className="input" />
        <input placeholder="Phone number" className="input" />
        <input placeholder="Hiring timeline" className="input md:col-span-2" />
        <textarea
          placeholder="What roles are you hiring for?"
          className="input min-h-32 md:col-span-2"
          required
        />

        <button
          type="submit"
          className="md:col-span-2 rounded-full bg-gradient-to-r from-[#0d2f67] to-[#153f87] px-6 py-3 text-sm font-semibold text-white transition hover:from-[#123f88] hover:to-[#184ea7]"
        >
          Submit Consultation Request
        </button>
      </form>

      {submitted && (
        <p className="mt-4 rounded-lg border border-emerald-400/40 bg-emerald-400/10 px-3 py-2 text-sm text-emerald-100">
          Thanks. Your request has been captured. A Meridiem advisor will follow up shortly.
        </p>
      )}
    </div>
  );
}
