import type { Metadata } from "next";
import Image from "next/image";
import { CareersForm } from "@/components/careers-form";

export const metadata: Metadata = {
  title: "Careers | Join the Meridiem Global Talent Network",
  description:
    "Apply to join the Meridiem Global talent network. We place skilled remote professionals with U.S. businesses across healthcare, operations, customer support, and more.",
};

const qualities = [
  {
    title: "Reliable & Accountable",
    body: "You follow through on commitments, meet deadlines, and communicate proactively when something changes.",
  },
  {
    title: "Strong English Communication",
    body: "Clear written and verbal communication is essential across all roles we place. You're comfortable in professional business settings.",
  },
  {
    title: "Tech-Comfortable",
    body: "You work confidently with tools like Google Workspace, CRMs, or role-specific platforms. You can learn new systems quickly.",
  },
  {
    title: "Self-Directed",
    body: "You manage your time well and don't need constant supervision to stay productive and on track.",
  },
];

const expectations = [
  { n: "01", title: "Stable Internet & Equipment", body: "A reliable connection and functional workstation are required. You are responsible for your own setup." },
  { n: "02", title: "Full-Time Availability",       body: "Most placements are full-time roles aligned to U.S. business hours. Part-time opportunities are occasionally available." },
  { n: "03", title: "Professionalism",               body: "You represent both Meridiem Global and our clients. Punctuality, responsiveness, and conduct matter." },
  { n: "04", title: "Willingness to Be Managed",    body: "Our clients use structured workflows and communication tools. You should be comfortable operating within defined systems." },
];

const faqs = [
  {
    q: "Is this a full-time job or freelance?",
    a: "Most placements are full-time, dedicated roles with a single U.S.-based client. You won't be juggling multiple clients at once.",
  },
  {
    q: "What countries do you hire from?",
    a: "We work with professionals across Latin America, Southeast Asia, and other regions. We evaluate candidates based on qualifications, not just location.",
  },
  {
    q: "How long does the process take?",
    a: "After we receive your application, we review it within 3–5 business days. Qualified candidates are contacted for a screening interview. Placements typically happen within 2–4 weeks.",
  },
  {
    q: "What roles are currently available?",
    a: "We hire on a rolling basis based on client demand. The most common roles include virtual assistants, customer support reps, medical billing specialists, and RPM support staff.",
  },
  {
    q: "How is compensation determined?",
    a: "Compensation is competitive for your region and aligned to the role, your experience, and the client's requirements. We discuss this openly during the screening process.",
  },
];

export default function CareersPage() {
  return (
    <main>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="container py-20 md:py-28">
        <div className="surface relative overflow-hidden rounded-3xl px-6 py-20 md:px-16 md:py-28">

          <div className="watermark" style={{
            right: "-12%", top: "50%", transform: "translateY(-50%)",
            width: "min(700px, 85vw)", height: "min(700px, 85vw)",
          }}>
            <Image src="/meridiem-logo-transparent.png" alt="" fill className="object-contain" priority />
          </div>
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#0d2f67]/20 blur-3xl" />
          <div className="cream-accent absolute left-16 top-10 h-[1.5px] w-16 rounded-full" />

          <div className="relative max-w-3xl">
            <p className="mb-7 text-[0.7rem] font-medium tracking-[0.35em] text-[#b8b4a8] uppercase">
              Join the Meridiem Global Network
            </p>
            <h1
              className="text-[clamp(3rem,7vw,5.8rem)] font-semibold leading-[1.04] text-white"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Work With{" "}
              <em className="cream-text not-italic">U.S. Companies</em><br />
              From Anywhere
            </h1>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-[#b8b4a8] md:text-lg">
              Meridiem Global places skilled remote professionals with growing U.S. businesses.
              We&rsquo;re selective — and that&rsquo;s what makes our placements work.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/[0.07] pt-8 text-xs font-medium tracking-[0.12em] text-[#b8b4a8] uppercase">
              {["Long-Term Placements", "Professional U.S. Clients", "Structured Onboarding", "Competitive Compensation"].map((l) => (
                <span key={l} className="flex items-center gap-2">
                  <span className="inline-block h-1 w-1 rounded-full bg-[#e8e0c8]/60" />{l}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ABOUT THE OPPORTUNITY
      ══════════════════════════════════════ */}
      <section className="container py-10">
        <div className="surface relative overflow-hidden rounded-3xl p-8 md:p-14">
          <div className="relative grid gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16">
            <div>
              <p className="mb-4 text-[0.68rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">
                Who We Are
              </p>
              <h2
                className="text-4xl text-white md:text-5xl"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                A Staffing Partner Built Around Performance
              </h2>
              <div className="cream-accent my-6 h-[1px] w-12 rounded-full" />
              <p className="text-base leading-relaxed text-[#b8b4a8]">
                Meridiem Global is a U.S.-managed global staffing company that works with businesses across healthcare, restaurant operations, customer support, and general business.
              </p>
              <p className="mt-5 text-base leading-relaxed text-[#b8b4a8]">
                We don&rsquo;t just find clients a warm body to fill a seat. We match professionals to roles where they can genuinely succeed — and we set up the structure to make that happen.
              </p>
              <p className="mt-5 text-base leading-relaxed text-[#b8b4a8]">
                If you&rsquo;re looking for a stable, long-term remote position with a professional U.S.-based team, this is where to start.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { label: "Industries We Serve",       value: "Healthcare, QSR, Operations, Admin" },
                { label: "Placement Type",             value: "Full-time, dedicated roles" },
                { label: "Client Location",            value: "United States" },
                { label: "Management Style",           value: "Structured, supported, and clear" },
                { label: "Typical Role Start",         value: "Within 2–4 weeks of placement" },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-xl border border-white/[0.07] bg-[#080c20] px-6 py-4">
                  <p className="text-[0.65rem] font-medium tracking-[0.2em] text-[#b8b4a8] uppercase">{label}</p>
                  <p className="mt-1 text-sm text-[#f5f2ea]">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHAT WE LOOK FOR
      ══════════════════════════════════════ */}
      <section className="container py-20">
        <p className="mb-4 text-[0.68rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">
          Our Standards
        </p>
        <h2
          className="mb-10 max-w-xl text-4xl text-white md:text-5xl"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          What We Look for in Every Candidate
        </h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {qualities.map(({ title, body }) => (
            <div key={title} className="surface flex flex-col rounded-2xl p-8">
              <div className="cream-accent mb-5 h-[1px] w-8 rounded-full" />
              <h3
                className="text-xl text-white"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#b8b4a8]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          EXPECTATIONS
      ══════════════════════════════════════ */}
      <section className="container pb-20">
        <div className="surface relative overflow-hidden rounded-3xl p-8 md:p-12">
          <p className="mb-4 text-[0.68rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">
            Before You Apply
          </p>
          <h2
            className="mb-12 text-4xl text-white md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            What&rsquo;s Expected of You
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {expectations.map(({ n, title, body }) => (
              <div key={n} className="flex gap-5">
                <div className="step-pill shrink-0">{n}</div>
                <div>
                  <h3
                    className="text-xl text-white"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#b8b4a8]">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          APPLICATION FORM
      ══════════════════════════════════════ */}
      <section className="container pb-20">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-14 md:items-start">
          <div className="pt-2">
            <p className="mb-4 text-[0.68rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">
              Open Roles
            </p>
            <h2
              className="text-4xl text-white md:text-5xl"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Apply to Join Our Network
            </h2>
            <div className="cream-accent my-6 h-[1px] w-10 rounded-full" />
            <p className="text-sm leading-relaxed text-[#b8b4a8]">
              We recruit on a rolling basis. Even if no active opening matches your background, submitting your profile puts you in consideration when a relevant opportunity arises.
            </p>
            <div className="mt-8 space-y-2">
              {[
                "Virtual Assistant / Admin Support",
                "Customer Support Representative",
                "Medical Billing Specialist",
                "RPM Support Staff",
                "QSR Phone Order Agent",
                "Operations / Back-Office Support",
              ].map((role) => (
                <div key={role} className="flex items-center gap-2.5 text-sm text-[#b8b4a8]">
                  <span className="inline-block h-1 w-1 shrink-0 rounded-full bg-[#e8e0c8]/50" />
                  {role}
                </div>
              ))}
            </div>
          </div>
          <CareersForm />
        </div>
      </section>

      {/* ══════════════════════════════════════
          APPLICANT FAQ
      ══════════════════════════════════════ */}
      <section className="container pb-24">
        <div className="surface rounded-3xl p-8 md:p-12">
          <p className="mb-4 text-[0.68rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">
            Questions
          </p>
          <h2
            className="mb-10 text-4xl text-white md:text-5xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Common Applicant Questions
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {faqs.map(({ q, a }) => (
              <div key={q} className="rounded-xl border border-white/[0.07] bg-[#080c20] px-6 py-6">
                <div className="cream-accent mb-4 h-[1px] w-6 rounded-full" />
                <p
                  className="text-[1.05rem] font-medium text-[#f5f2ea]"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {q}
                </p>
                <p className="mt-2.5 text-sm leading-relaxed text-[#b8b4a8]">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
