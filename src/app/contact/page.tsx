import type { Metadata } from "next";
import { StaffingNeedsForm } from "@/components/staffing-needs-form";

export const metadata: Metadata = {
  title: "Contact | Meridiem Global",
  description:
    "Book a 30-minute consultation or send us your staffing needs. Meridiem Global will help you build the right overseas staffing model for your business.",
};

const ZOHO_BOOKING =
  "https://meridiemglobal.zohobookings.com/#/4938048000000083003";

export default function ContactPage() {
  return (
    <main className="page-light bg-[#faf7f3]">

      {/* ── Interior Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(148deg,#faf7f3 0%,#f6f1ea 45%,#ede5d5 100%)" }}
      >
        <div className="container py-20 md:py-28">
          <p className="mb-4 text-[0.64rem] font-medium tracking-[0.38em] text-[#6b5a46] uppercase">
            Get Started
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
            Ready to Build Your{" "}
            <em className="not-italic gold-gradient-text">Offshore Staffing Plan?</em>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#5a6475]">
            Whether you&rsquo;re ready to talk now or just want to share what kind of support you need, Meridiem Global will help you evaluate the right role, schedule, and staffing model for your business.
          </p>
        </div>
        <div className="section-rule-light" />
      </section>

      {/* ── Dual-path CTA cards ── */}
      <section className="section-wc py-20 md:py-24">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-2">

            {/* Path 1 — Book a consultation */}
            <div className="surface-light flex flex-col justify-between gap-8 p-8 md:p-10">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0a1628]/[0.1] bg-[#0a1628]/[0.03] px-3 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#b8882a]" />
                  <span className="text-[0.65rem] font-medium tracking-[0.2em] text-[#6b5a46] uppercase">30-Minute Call · Google Meet</span>
                </div>
                <h2
                  className="text-3xl text-[#0a1628] md:text-4xl"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Book a 30-Minute Consultation
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[#5a6475]">
                  Pick a time on our calendar and speak directly with Meridiem about your staffing goals, timeline, and best-fit support model.
                </p>
                <ul className="mt-6 space-y-2">
                  {[
                    "Role mapping & recommendations",
                    "Timeline and onboarding overview",
                    "Projected cost savings",
                    "No commitment required",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-[#5a6475]">
                      <span className="text-[#b8882a]">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={ZOHO_BOOKING}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 self-start"
              >
                Schedule a Call
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            </div>

            {/* Path 2 — Form */}
            <div className="surface-light flex flex-col justify-between gap-8 p-8 md:p-10">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0a1628]/[0.1] bg-[#0a1628]/[0.03] px-3 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#7a8694]" />
                  <span className="text-[0.65rem] font-medium tracking-[0.2em] text-[#6b5a46] uppercase">Not ready for a call? Use the form</span>
                </div>
                <h2
                  className="text-3xl text-[#0a1628] md:text-4xl"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Send Us Your Staffing Needs
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[#5a6475]">
                  Fill out the quick form below and we&rsquo;ll follow up with the right next step.
                </p>
                <ul className="mt-6 space-y-2">
                  {[
                    "Takes less than 2 minutes",
                    "No sales pressure",
                    "We match you to the right staffing model",
                    "Follow-up within 1 business day",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-[#5a6475]">
                      <span className="text-[#b8882a]">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#staffing-plan"
                className="btn-ghost-light inline-flex items-center gap-2 self-start"
              >
                Fill Out the Form
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>
                </svg>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── Zoho CRM staffing intake form — dark contrast section ── */}
      <section id="staffing-plan" className="bg-[#06091a] py-20 md:py-28 scroll-mt-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <p className="mb-2 text-[0.68rem] font-medium tracking-[0.35em] text-[#c8c4b8] uppercase">
              Staffing Intake
            </p>
            <h2
              className="text-3xl text-white md:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Send Us Your{" "}
              <em className="cream-text not-italic">Staffing Needs</em>
            </h2>
            <div className="cream-accent my-5 h-[1px] w-10 rounded-full" />
            <p className="max-w-xl text-sm leading-relaxed text-[#8a9baa]">
              Tell us what kind of support you need, and we&rsquo;ll follow up with the right next step.
            </p>
            <div className="mt-10">
              <StaffingNeedsForm />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
