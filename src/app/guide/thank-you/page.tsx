import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Your Guide Is on Its Way | Meridiem Global",
  description: "Your copy of The Execution Gap is on its way to your inbox.",
  robots: { index: false, follow: false },
};

export default function GuideThankYouPage() {
  return (
    <main className="page-light bg-[#faf7f3]">

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(148deg,#faf7f3 0%,#f6f1ea 45%,#ede5d5 100%)" }}
      >
        <div className="container py-24 md:py-32">
          <div className="mx-auto max-w-xl text-center">

            {/* Gold check icon */}
            <span
              className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full"
              style={{ background: "rgba(184,136,42,0.12)" }}
            >
              <svg
                width="28" height="28" viewBox="0 0 24 24" fill="none"
                stroke="#b8882a" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>

            <p className="mb-4 text-[0.64rem] font-medium tracking-[0.38em] text-[#6b5a46] uppercase">
              The Execution Gap · Download
            </p>
            <div
              className="mx-auto mb-6 h-[1.5px] w-11 rounded-full"
              style={{ background: "linear-gradient(90deg,rgba(184,136,42,0.65),rgba(184,136,42,0))" }}
              aria-hidden="true"
            />

            <h1
              className="text-[clamp(2.2rem,5vw,3.8rem)] font-semibold leading-[1.1] text-[#0a1628]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Your Guide Is{" "}
              <em className="not-italic gold-gradient-text">on Its Way</em>
            </h1>

            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-[#5a6475]">
              Check your inbox for your copy of{" "}
              <strong className="font-medium text-[#0a1628]">The Execution Gap</strong>.
              If you don&rsquo;t see it within a few minutes, please check your
              spam or promotions folder.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-primary">
                Back to Meridiem Global
              </Link>
              <Link href="/resources" className="btn-ghost-light">
                Browse Resources
              </Link>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
