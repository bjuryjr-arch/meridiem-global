"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#06091a]/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-8">

        {/* Brand mark */}
        <Link href="/" className="flex items-center gap-3" aria-label="Meridiem Global Home">
          <Image
            src="/meridiem-logo-transparent.png"
            alt="Meridiem Global logo"
            width={42}
            height={42}
            className="h-10 w-10 object-contain"
            priority
          />
          <span
            className="text-[0.72rem] font-medium tracking-[0.28em] text-[#e8e0c8]"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            MERIDIEM GLOBAL
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.78rem] font-medium tracking-[0.08em] text-[#b8b4a8] uppercase transition hover:text-[#e8e0c8]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden rounded-full border border-[rgba(232,224,200,0.22)] px-5 py-2 text-[0.75rem] font-medium tracking-[0.1em] text-[#e8e0c8] uppercase transition hover:border-[rgba(232,224,200,0.5)] hover:bg-[rgba(232,224,200,0.04)] md:inline-flex"
        >
          Book Consultation
        </Link>

        {/* Mobile hamburger */}
        <button
          className="ml-4 flex flex-col gap-1.5 p-1 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block h-[1.5px] w-6 bg-[#e8e0c8] transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-[1.5px] w-6 bg-[#e8e0c8] transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-[1.5px] w-6 bg-[#e8e0c8] transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile nav drawer */}
      {open && (
        <nav className="border-t border-white/[0.06] bg-[#06091a] px-6 pb-6 pt-4 md:hidden">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm tracking-[0.08em] text-[#b8b4a8] uppercase hover:text-[#e8e0c8]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 block w-full rounded-full border border-[rgba(232,224,200,0.22)] py-2.5 text-center text-xs tracking-[0.1em] text-[#e8e0c8] uppercase"
          >
            Book Consultation
          </Link>
        </nav>
      )}
    </header>
  );
}
