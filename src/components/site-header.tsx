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
  { href: "/how-it-works",       label: "How It Works" },
  { href: "/savings-calculator", label: "Savings" },
  { href: "/about",              label: "About" },
  { href: "/contact",            label: "Contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#06091a]/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-8 px-6 py-4 lg:px-8">

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
        <nav className="hidden items-center gap-8 md:flex">
          {mainNav.map(({ href, label }) => (
            <Link key={href} href={href}
              className="whitespace-nowrap text-[0.76rem] font-medium tracking-[0.08em] text-[#b8b4a8] uppercase transition hover:text-[#e8e0c8]">
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden shrink-0 items-center gap-3 md:flex">
          <Link href="/portal/login"
            className="whitespace-nowrap rounded-full border border-[#394452]/60 px-5 py-2 text-[0.72rem] font-medium tracking-[0.1em] text-[#8a9baa] uppercase transition hover:border-[#394452] hover:bg-white/[0.04] hover:text-[#b8b4a8]">
            Client Login
          </Link>
          <Link href="/contact"
            className="whitespace-nowrap rounded-full bg-[#091929] px-6 py-2 text-[0.72rem] font-semibold tracking-[0.1em] text-[#e8e0c8] uppercase shadow-[0_2px_14px_rgba(9,25,41,0.6)] transition hover:bg-[#0d2235] hover:shadow-[0_4px_20px_rgba(9,25,41,0.7)]">
            See If You&rsquo;re Ready to Scale
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="ml-auto flex flex-col gap-[5px] p-1 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`block h-[1.5px] w-6 bg-[#e8e0c8] transition-all ${menuOpen ? "translate-y-[6.5px] rotate-45" : ""}`} />
          <span className={`block h-[1.5px] w-6 bg-[#e8e0c8] transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-[1.5px] w-6 bg-[#e8e0c8] transition-all ${menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <nav className="border-t border-white/[0.06] bg-[#06091a] px-6 pb-6 pt-4 md:hidden">
          {/* Main nav links */}
          {mainNav.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)}
              className="block py-2.5 text-sm tracking-[0.08em] text-[#b8b4a8] uppercase hover:text-[#e8e0c8]">
              {label}
            </Link>
          ))}

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

          {/* CTAs */}
          <div className="mt-4 flex flex-col gap-3 border-t border-white/[0.05] pt-4">
            <Link href="/contact" onClick={() => setMenuOpen(false)}
              className="block w-full rounded-full bg-[#091929] py-3 text-center text-xs font-semibold tracking-[0.1em] text-[#e8e0c8] uppercase shadow-[0_2px_14px_rgba(9,25,41,0.6)]">
              See If You&rsquo;re Ready to Scale
            </Link>
            <Link href="/portal/login" onClick={() => setMenuOpen(false)}
              className="block w-full rounded-full border border-[#394452]/50 py-3 text-center text-xs font-medium tracking-[0.1em] text-[#8a9baa] uppercase transition hover:border-[#394452] hover:bg-white/[0.04]">
              Client Login
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
