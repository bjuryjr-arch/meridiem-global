"use client";

import React, { useState } from "react";
import Link from "next/link";

interface WaitlistFormData {
  name: string;
  email: string;
  company: string;
  role: string;
  challenge: string;
}

export function WaitlistForm() {
  const [formData, setFormData] = useState<WaitlistFormData>({
    name: "",
    email: "",
    company: "",
    role: "",
    challenge: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) {
      alert("Please provide at least your name and email.");
      return;
    }

    setIsSubmitting(true);

    // Real delivery: open mail client prefilled with details.
    // Includes lead metadata for manual CRM import:
    //   Source = E-book Waitlist
    //   Resource = The Execution Gap
    //   Interest Level = Educational Lead / Guide Waitlist
    const subject = encodeURIComponent("Guide Waitlist Interest — The Execution Gap");
    const bodyLines = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Company: ${formData.company || "-"}`,
      `Role/Title: ${formData.role || "-"}`,
      `Challenge: ${formData.challenge || "-"}`,
      "",
      "Lead metadata tags for import:",
      "Source = E-book Waitlist",
      "Resource = The Execution Gap",
      "Interest Level = Educational Lead / Guide Waitlist",
    ];
    const body = encodeURIComponent(bodyLines.join("\n"));
    const mailto = `mailto:info@meridiemglobal.com?subject=${subject}&body=${body}`;

    window.location.href = mailto;

    // Small delay for user to notice email client opened.
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 380);
  };

  if (isSubmitted) {
    return (
      <div className="mx-auto mt-14 max-w-2xl">
        <div className="surface authority-surface rounded-3xl px-8 py-14 text-center md:px-14 md:py-16">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#e8e0c8]/25 bg-[#e8e0c8]/10 text-3xl text-[#e8e0c8]">
            ✓
          </div>
          <h2
            className="text-4xl text-white md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Thank you
          </h2>
          <p className="mt-4 text-base text-[#c5c1b5]">
            Your details have been opened in your email client and will reach us directly with the following safe tags for processing: <strong>Source = E-book Waitlist • Resource = The Execution Gap • Interest Level = Educational Lead / Guide Waitlist</strong>.
          </p>
          <p className="mt-4 text-sm text-[#c5c1b5]">
            We will email you at <span className="text-[#e8e0c8]">{formData.email}</span> once the guide is released.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/resources" className="btn-ghost">
              Browse More Resources
            </Link>
            <Link href="/contact#staffing-plan" className="btn-primary">
              Ready for Staffing Support?
            </Link>
          </div>

          <p className="mt-10 text-xs text-[#b8b4a8]/60">
            This is exclusively for educational resources / guide waitlist. It will never enroll you in active staffing programs.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-14 max-w-xl">
      <div className="surface authority-surface rounded-3xl px-8 py-10 md:px-12 md:py-12">
        <div className="mb-2 text-[0.68rem] font-medium tracking-[0.28em] text-[#c8c4b8] uppercase">Reserve your copy</div>
        <h2 className="text-2xl text-white" style={{ fontFamily: "var(--font-cormorant)" }}>
          Join the Waitlist for The Execution Gap
        </h2>
        <p className="mt-2 text-sm text-[#c5c1b5]">
          Submit to send your details directly to us via email (with the tags Source = E-book Waitlist • Resource = The Execution Gap • Interest Level = Educational Lead / Guide Waitlist) for when the guide is released. This is exclusively for the guide — no staffing contact.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-[0.7rem] font-semibold tracking-[0.09em] uppercase text-[#c8c4b8]">
                Name <span className="text-[#c8a96e]">*</span>
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Alex Rivera"
                className="input w-full"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-[0.7rem] font-semibold tracking-[0.09em] uppercase text-[#c8c4b8]">
                Email <span className="text-[#c8a96e]">*</span>
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@yourcompany.com"
                className="input w-full"
              />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-[0.7rem] font-semibold tracking-[0.09em] uppercase text-[#c8c4b8]">
                Company <span className="text-[#c8a96e] opacity-60">(optional)</span>
              </label>
              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company"
                className="input w-full"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-[0.7rem] font-semibold tracking-[0.09em] uppercase text-[#c8c4b8]">
                Role or Title <span className="text-[#c8a96e] opacity-60">(optional)</span>
              </label>
              <input
                name="role"
                value={formData.role}
                onChange={handleChange}
                placeholder="Founder / COO / Operations Lead"
                className="input w-full"
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-[0.7rem] font-semibold tracking-[0.09em] uppercase text-[#c8c4b8]">
              What is your biggest delegation or staffing challenge? <span className="text-[#c8a96e] opacity-60">(optional)</span>
            </label>
            <textarea
              name="challenge"
              rows={3}
              value={formData.challenge}
              onChange={handleChange}
              placeholder="E.g. Defining clear scope, finding reliable support, keeping visibility into performance…"
              className="input w-full min-h-[92px] resize-y"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full justify-center disabled:opacity-60"
          >
            {isSubmitting ? "Opening your email…" : "Submit Waitlist Interest (via Email)"}
          </button>

          <p className="text-center text-xs text-[#b8b4a8]/70">
            By submitting, you’re signing up for educational updates only. We will tag this as Source = E-book Waitlist, Resource = The Execution Gap.
          </p>
        </form>
      </div>
    </div>
  );
}
