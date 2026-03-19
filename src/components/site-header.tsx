"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const services = [
  { href: "/qsr-staffing",          label: "QSR Staffing",              desc: "Restaurant & franchise support" },
  { href: "/medical-billing",       label: "Medical Billing",           desc: "Offshore billing & RCM" },
  { href: "/rpm-support",           label: "Remote Patient Monitoring", desc: "RPM support staffing" },
  { href: "/general-business",      label: "General Business Support",  desc: "VA, admin & operational roles" },
];

const mainNav = [
  { href: "/",                  label: "Home" },
  { href: "/how-it-works",      label: "How It Works" },
  { href: "/savings-calculator",label: "Savings" },
  { href: "/about",             label: "About" },
  { href: "/contact",           label: "Contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#06091a]/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-8">

        {/* Brand mark */}
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Meridiem Global Home">
          <Image
            src="/meridiem-logo-transparent.png"
            alt="Meridiem Global logo"
            width={40}
            height={40}
            className="h-9 w-9 object-contain"
            priority
          />
          <span className="text-[0.72rem] font-medium tracking-[0.28em] text-[#e8e0c8]"
            style={{ fontFamily: "var(--font-jost)" }}>
            MERIDIEM GLOBAL
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/"
            className="text-[0.76rem] font-medium tracking-[0.08em] text-[#b8b4a8] uppercase transition hover:text-[#e8e0c8]">
            Home
          </Link>

          {/* Services dropdown */}
          <div className="relative"
            onMouseEnter={() => setDropOpen(true)}
            onMouseLeave={() => setDropOpen(false)}>
            <button
              className="flex items-center gap-1.5 text-[0.76rem] font-medium tracking-[0.08em] text-[#b8b4a8] uppercase transition hover:text-[#e8e0c8]"
              aria-expanded={dropOpen}>
              Services
              <svg className={`h-3 w-3 transition-transform ${dropOpen ? "rotate-180" : ""}`}
                fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth={2}>
                <path d="M2 4l4 4 4-4" />
              </svg>
            </button>

            {dropOpen && (
              <div className="absolute left-1/2 top-full mt-3 w-64 -translate-x-1/2 rounded-2xl border border-white/[0.09] bg-[#0c1128] p-2 shadow-2xl">
                {/* pointer triangle */}
                <div className="absolute -top-[5px] left-1/2 h-2.5 w-2.5 -translate-x-1/2 rotate-45 rounded-sm border-l border-t border-white/[0.09] bg-[#0c1128]" />
                {services.map(({ href, label, desc }) => (
                  <Link key={href} href={href}
                    className="group flex flex-col rounded-xl px-4 py-3 transition hover:bg-white/[0.04]">
                    <span className="text-[0.8rem] font-medium text-[#f5f2ea] transition group-hover:text-[#e8e0c8]"
                      style={{ fontFamily: "var(--font-cormorant)", fontSize: "1rem" }}>
                      {label}
                    </span>
                    <span className="mt-0.5 text-[0.72rem] text-[#b8b4a8]">{desc}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {mainNav.slice(1).map(({ href, label }) => (
            <Link key={href} href={href}
              className="text-[0.76rem] font-medium tracking-[0.08em] text-[#b8b4a8] uppercase transition hover:text-[#e8e0c8]">
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link href="/contact"
          className="hidden rounded-full border border-[rgba(232,224,200,0.22)] px-5 py-2 text-[0.72rem] font-medium tracking-[0.12em] text-[#e8e0c8] uppercase transition hover:border-[rgba(232,224,200,0.5)] hover:bg-[rgba(232,224,200,0.04)] md:inline-flex">
          Book Consultation
        </Link>

        {/* Mobile hamburger */}
        <button className="ml-4 flex flex-col gap-[5px] p-1 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`block h-[1.5px] w-6 bg-[#e8e0c8] transition-all ${menuOpen ? "translate-y-[6.5px] rotate-45" : ""}`} />
          <span className={`block h-[1.5px] w-6 bg-[#e8e0c8] transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-[1.5px] w-6 bg-[#e8e0c8] transition-all ${menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <nav className="border-t border-white/[0.06] bg-[#06091a] px-6 pb-6 pt-4 md:hidden">
          <Link href="/" onClick={() => setMenuOpen(false)}
            className="block py-2.5 text-sm tracking-[0.08em] text-[#b8b4a8] uppercase hover:text-[#e8e0c8]">
            Home
          </Link>

          {/* Services group */}
          <div className="border-t border-white/[0.05] py-2">
            <p className="pb-1 pt-2 text-[0.65rem] tracking-[0.25em] text-[#b8b4a8] uppercase">Services</p>
            {services.map(({ href, label }) => (
              <Link key={href} href={href} onClick={() => setMenuOpen(false)}
                className="block py-2 pl-3 text-sm tracking-[0.06em] text-[#f5f2ea] hover:text-[#e8e0c8]">
                {label}
              </Link>
            ))}
          </div>

          {mainNav.slice(1).map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)}
              className="block py-2.5 text-sm tracking-[0.08em] text-[#b8b4a8] uppercase hover:text-[#e8e0c8]">
              {label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMenuOpen(false)}
            className="mt-4 block w-full rounded-full border border-[rgba(232,224,200,0.22)] py-2.5 text-center text-xs tracking-[0.12em] text-[#e8e0c8] uppercase">
            Book Consultation
          </Link>
        </nav>
      )}
    </header>
  );
}
