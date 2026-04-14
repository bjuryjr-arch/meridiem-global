"use client";

import { FormEvent, useState } from "react";

export function CareersForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="rounded-2xl border border-white/[0.09] bg-[#080c20] p-8 md:p-10">
      {submitted ? (
        <div className="py-8 text-center">
          <div className="cream-accent mx-auto mb-6 h-[1px] w-12 rounded-full" />
          <p
            className="text-2xl text-white"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Application Received
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#b8b4a8]">
            Thank you for your interest in Meridiem Global. We review every application carefully and will be in touch if your profile aligns with a current or upcoming opportunity.
          </p>
        </div>
      ) : (
        <>
          <p className="mb-1 text-[0.65rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">
            Apply Now
          </p>
          <h3
            className="mb-6 text-3xl text-white"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Submit Your Application
          </h3>

          <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
            {/* Row 1 */}
            <input required placeholder="Full name" className="input" />
            <input required type="email" placeholder="Email address" className="input" />

            {/* Row 2 */}
            <input placeholder="Phone number (optional)" className="input" />
            <input required placeholder="Country of residence" className="input" />

            {/* Row 3 — full width */}
            <div className="md:col-span-2">
              <select required className="input w-full appearance-none bg-[#0b1027]">
                <option value="" disabled selected>Role you&apos;re applying for</option>
                <option>Virtual Assistant / Admin Support</option>
                <option>Customer Support Representative</option>
                <option>Medical Billing Specialist</option>
                <option>Remote Patient Monitoring (RPM) Support</option>
                <option>QSR Phone Order Agent</option>
                <option>Operations / Back-Office Support</option>
                <option>Other</option>
              </select>
            </div>

            {/* Row 4 */}
            <input
              required
              placeholder="Years of relevant experience"
              className="input"
            />
            <input
              placeholder="Current or most recent employer"
              className="input"
            />

            {/* Row 5 — full width */}
            <textarea
              required
              placeholder="Briefly describe your background and what makes you a strong candidate (3–5 sentences)"
              className="input min-h-32 md:col-span-2"
            />

            {/* Row 6 — full width */}
            <input
              placeholder="LinkedIn profile or portfolio URL (optional)"
              className="input md:col-span-2"
            />

            <button
              type="submit"
              className="btn-primary md:col-span-2 justify-center"
            >
              Submit Application
            </button>

            <p className="md:col-span-2 text-center text-[0.7rem] text-[#b8b4a8]/60">
              We review all applications and respond to qualified candidates within 3–5 business days.
            </p>
          </form>
        </>
      )}
    </div>
  );
}
