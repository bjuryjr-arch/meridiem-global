"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { HeaderBrand } from "@/components/header-brand";

// Services shown in the dropdown.
// Healthcare excluded from primary dropdown pending owner decision.
const serviceDropdownItems = [
  {
    href: "/qsr-staffing",
    label: "QSR & Franchise Operations",
    desc: "Phone agents, overflow support, franchise admin",
  },
  {
    href: "/general-business",
    label: "General Business Support",
    desc: "VAs, admin, customer support, marketing & finance",
  },
  {
    href: "/how-it-works",
    label: "Our Staffing Model",
    desc: "How Meridiem's managed operating approach works",
  },
];

const mainNavLinks = [
  { href: "/industries", label: "Industries" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/savings-calculator", label: "Savings" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// Light-background pages — nav switches to dark-text mode
const LIGHT_PAGES = ["/"];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isLight = LIGHT_PAGES.includes(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close Services dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close both menus on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setServicesOpen(false); setMenuOpen(false); }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Close on route change
  useEffect(() => {
    setServicesOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  const isServicesActive =
    pathname === "/services" ||
    serviceDropdownItems.some((s) => pathname.startsWith(s.href));

  // ── Adaptive styling ──────────────────────────────────────
  // Light pages (homepage): transparent → white/cream when scrolled
  // Dark pages: transparent → deep navy when scrolled
  // On light pages the header always carries a cream/white background so the
  // transparent-over-dark html/body doesn't show through. On dark pages it's
  // transparent at top, navy when scrolled.
  // Light pages: fully solid background — no transparency that could wash out text.
  // Dark pages: transparent at top, deep navy when scrolled.
  const headerBg = isLight
    ? scrolled
      ? "bg-white shadow-[0_1px_0_rgba(10,28,46,0.10)]"
      : "bg-[#faf7f3] border-b border-[#0a1628]/[0.07]"
    : scrolled
      ? "bg-[#071B33]/95 backdrop-blur-2xl border-b border-white/[0.06]"
      : "bg-transparent border-b border-transparent";

  // Full-contrast nav on light pages — all links must be legible without hovering
  const navLinkBase = isLight
    ? "text-[#0a1628] hover:text-[#0a1628]/70"
    : "text-[#8a9baa] hover:text-[#c8c4b8]";

  const navLinkActive = isLight ? "text-[#0a1628] font-semibold" : "text-[#e8e0c8]";

  const navLinkUnderline = isLight
    ? "bg-[#0a1628]/60"
    : "bg-[#e8e0c8]/60";

  const servicesButtonColor = isServicesActive
    ? navLinkActive
    : navLinkBase;

  const loginBtnClass = isLight
    ? "border-[#0a1628]/[0.55] text-[#0a1628] hover:border-[#0a1628]/[0.80] hover:bg-[#0a1628]/[0.05] hover:text-[#0a1628]"
    : "border-white/[0.18] text-[#c8c4b8] hover:border-white/[0.35] hover:bg-white/[0.04] hover:text-[#e8e0c8]";

  const hamburgerColor = isLight ? "bg-[#0a1628]" : "bg-[#e8e0c8]";

  const navLinkClass = (href: string) => {
    const active = pathname === href || (href !== "/" && pathname.startsWith(href));
    return `relative whitespace-nowrap text-[0.73rem] font-semibold tracking-[0.08em] transition-colors duration-200 ${
      active ? navLinkActive : navLinkBase
    }`;
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-8 px-6 py-2.5 lg:px-10">

        <HeaderBrand isLight={isLight} />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">

          {/* Services — with dropdown */}
          <div ref={servicesRef} className="relative">
            <button
              onClick={() => setServicesOpen((prev) => !prev)}
              aria-expanded={servicesOpen}
              aria-haspopup="menu"
              className={`flex items-center gap-1 whitespace-nowrap text-[0.73rem] font-semibold tracking-[0.08em] transition-colors duration-200 ${servicesButtonColor}`}
            >
              Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10" height="10" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round"
                className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
              {isServicesActive && (
                <span className={`absolute -bottom-1 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full ${navLinkUnderline}`} />
              )}
            </button>

            {/* Dropdown panel — always dark navy regardless of page theme */}
            {servicesOpen && (
              <div role="menu" className="nav-dropdown absolute left-0 top-full mt-3 w-72">
                {serviceDropdownItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    role="menuitem"
                    className="nav-dropdown-item"
                    onClick={() => setServicesOpen(false)}
                  >
                    <span className="block text-[0.8rem] font-medium text-[#e8e0c8]">{item.label}</span>
                    <span className="mt-0.5 block text-xs text-[#8a9baa]">{item.desc}</span>
                  </Link>
                ))}
                <div
                  className="mx-3 my-1 h-[1px]"
                  style={{ background: "rgba(232,224,200,0.07)" }}
                  aria-hidden="true"
                />
                <Link
                  href="/services"
                  role="menuitem"
                  className="nav-dropdown-item flex items-center justify-between"
                  onClick={() => setServicesOpen(false)}
                >
                  <span className="text-xs font-medium tracking-[0.1em] text-[#c8c4b8] uppercase">View All Services</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round"
                    className="text-[#8a9baa]" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            )}
          </div>

          {/* Rest of nav */}
          {mainNavLinks.map(({ href, label }) => (
            <Link key={href} href={href} className={navLinkClass(href)}>
              {label}
              {(pathname === href || (href !== "/" && pathname.startsWith(href))) && (
                <span className={`absolute -bottom-1 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full ${navLinkUnderline}`} />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden shrink-0 items-center gap-4 lg:flex">
          <a
            href="https://meridiem-global-cli.replit.app"
            className={`whitespace-nowrap rounded-full border px-5 py-2.5 text-[0.7rem] font-medium tracking-[0.1em] uppercase transition-all duration-300 ${loginBtnClass}`}
          >
            Client Login
          </a>
          <a
            href="https://meridiemglobal.zohobookings.com/#/4938048000000083003"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-[#0a2040] to-[#071B33] px-6 py-2.5 text-[0.7rem] font-semibold tracking-[0.1em] text-[#e8e0c8] uppercase shadow-lg shadow-[#071B33]/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(200,169,110,0.15),0_4px_20px_rgba(7,27,51,0.5)]"
          >
            Schedule a Strategy Call
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="ml-auto flex flex-col gap-[5px] p-1 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className={`block h-[1.5px] w-6 transition-all ${hamburgerColor} ${menuOpen ? "translate-y-[6.5px] rotate-45" : ""}`} />
          <span className={`block h-[1.5px] w-6 transition-opacity ${hamburgerColor} ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-[1.5px] w-6 transition-all ${hamburgerColor} ${menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer — always dark navy */}
      {menuOpen && (
        <nav
          className="border-t border-white/[0.06] bg-[#071B33]/98 backdrop-blur-xl px-6 pb-6 pt-4 lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="border-b border-white/[0.05] pb-4 mb-3">
            <p className="pb-2 pt-1 text-[0.63rem] tracking-[0.25em] text-[#8a9baa] uppercase">Services</p>
            {serviceDropdownItems.map(({ href, label }) => (
              <Link key={href} href={href} onClick={() => setMenuOpen(false)}
                className="block py-2.5 pl-2 text-sm tracking-[0.04em] text-[#f5f2ea] transition-colors hover:text-[#e8e0c8]">
                {label}
              </Link>
            ))}
            <Link href="/services" onClick={() => setMenuOpen(false)}
              className="block py-2.5 pl-2 text-xs tracking-[0.1em] text-[#8a9baa] uppercase transition-colors hover:text-[#c8c4b8]">
              View All Services →
            </Link>
          </div>

          {mainNavLinks.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm tracking-[0.08em] text-[#b8b4a8] uppercase transition-colors hover:text-[#e8e0c8]">
              {label}
            </Link>
          ))}

          <div className="mt-4 flex flex-col gap-3 border-t border-white/[0.05] pt-4">
            <a
              href="https://meridiemglobal.zohobookings.com/#/4938048000000083003"
              target="_blank" rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="block w-full rounded-full bg-gradient-to-r from-[#0a2040] to-[#071B33] py-3.5 text-center text-xs font-semibold tracking-[0.1em] text-[#e8e0c8] uppercase shadow-lg"
            >
              Schedule a Strategy Call
            </a>
            <a href="https://meridiem-global-cli.replit.app" onClick={() => setMenuOpen(false)}
              className="block w-full rounded-full border border-white/[0.12] py-3 text-center text-xs font-medium tracking-[0.1em] text-[#8a9baa] uppercase transition-colors hover:border-white/[0.25] hover:text-[#c8c4b8]">
              Client Login
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
