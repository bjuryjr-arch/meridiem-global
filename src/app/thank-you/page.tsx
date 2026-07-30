import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | Meridiem Global",
  description:
    "Thank you for sharing your staffing needs with Meridiem Global. A team member will review your request and follow up within one business day.",
  robots: { index: false },
};

export default function ThankYouPage() {
  return (
    <main className="page-light bg-[#faf7f3]">
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(148deg,#faf7f3 0%,#f6f1ea 45%,#ede5d5 100%)",
          minHeight: "75vh",
        }}
      >
        <div className="container flex min-h-[75vh] flex-col items-center justify-center py-28 text-center">

          {/* Check mark */}
          <div
            className="mb-8 flex h-14 w-14 items-center justify-center rounded-full border text-2xl text-[#0a1628]"
            style={{ borderColor: "rgba(184,136,42,0.4)", background: "rgba(184,136,42,0.06)" }}
            aria-hidden="true"
          >
            ✓
          </div>

          <p className="mb-4 text-[0.64rem] font-medium tracking-[0.38em] text-[#6b5a46] uppercase">
            Request Received
          </p>

          <h1
            className="text-[clamp(2.8rem,6vw,4.5rem)] font-semibold leading-[1.06] text-[#0a1628]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Thank{" "}
            <em className="not-italic gold-gradient-text">You.</em>
          </h1>

          <div
            className="mx-auto my-7 h-[1.5px] w-11 rounded-full"
            style={{ background: "linear-gradient(90deg,rgba(184,136,42,0.65),rgba(184,136,42,0))" }}
            aria-hidden="true"
          />

          <p className="mx-auto max-w-md text-base leading-relaxed text-[#5a6475]">
            Thank you for sharing your staffing needs with Meridiem Global.
            A team member will review your details and follow up within one business day.
          </p>

          <p className="mt-3 text-sm text-[#7a8694]">
            We look forward to helping you scale responsibly.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary">
              Return Home
            </Link>
            <Link href="/services" className="btn-ghost-light">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
