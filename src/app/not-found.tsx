import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Meridiem Global",
  description: "The page you were looking for could not be found.",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="page-light bg-[#faf7f3]">
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(148deg,#faf7f3 0%,#f6f1ea 45%,#ede5d5 100%)",
          minHeight: "70vh",
        }}
      >
        <div className="container flex min-h-[70vh] flex-col items-center justify-center py-28 text-center">

          <div
            className="mb-7 h-[1.5px] w-11 rounded-full"
            style={{ background: "linear-gradient(90deg,rgba(184,136,42,0.65),rgba(184,136,42,0))" }}
            aria-hidden="true"
          />

          <p className="mb-4 text-[0.64rem] font-medium tracking-[0.38em] text-[#6b5a46] uppercase">
            404 — Page Not Found
          </p>

          <h1
            className="text-[clamp(2.8rem,6vw,4.5rem)] font-semibold leading-[1.06] text-[#0a1628]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            This page doesn&rsquo;t exist.
          </h1>

          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-[#5a6475]">
            The URL may have changed or the page may have been removed.
            Let&rsquo;s get you back on track.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary">
              Return Home
            </Link>
            <Link href="/services" className="btn-ghost-light">
              Our Services
            </Link>
            <Link href="/contact" className="btn-ghost-light">
              Contact Us
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
