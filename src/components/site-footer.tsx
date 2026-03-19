import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#04060f]">

      {/* Watermark */}
      <div className="pointer-events-none absolute select-none opacity-[0.03]"
        style={{ right: "-8%", bottom: "-20%", width: "420px", height: "420px" }}>
        <Image src="/meridiem-logo-transparent.png" alt="" fill className="object-contain" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-8">

        {/* Col 1 — Brand + description */}
        <div>
          <div className="mb-5 flex items-center gap-3">
            <Image src="/meridiem-logo-transparent.png" alt="Meridiem Global" width={40} height={40} className="h-10 w-10 object-contain" />
            <p className="text-[0.7rem] font-medium tracking-[0.3em] text-[#e8e0c8]" style={{ fontFamily: "var(--font-jost)" }}>
              MERIDIEM GLOBAL
            </p>
          </div>
          <p className="mb-3 text-[0.72rem] italic tracking-[0.04em] text-[#e8e0c8]/55">
            Premium global staffing, built for performance.
          </p>
          <p className="text-sm leading-relaxed text-[#b8b4a8]">{siteConfig.description}</p>
          <Link href="/contact"
            className="mt-6 inline-block rounded-full border border-[rgba(232,224,200,0.2)] px-5 py-2 text-[0.72rem] tracking-[0.1em] text-[#e8e0c8] uppercase transition hover:border-[rgba(232,224,200,0.45)]">
            Book a Consultation
          </Link>
        </div>

        {/* Col 2 — Navigation */}
        <div>
          <p className="mb-5 text-[0.65rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">Navigation</p>
          <ul className="space-y-3 text-sm text-[#b8b4a8]">
            <li><Link href="/"                   className="hover:text-[#e8e0c8] transition">Home</Link></li>
            <li><Link href="/services"            className="hover:text-[#e8e0c8] transition">Services</Link></li>
            <li><Link href="/how-it-works"        className="hover:text-[#e8e0c8] transition">How It Works</Link></li>
            <li><Link href="/savings-calculator"  className="hover:text-[#e8e0c8] transition">Savings Calculator</Link></li>
            <li><Link href="/about"               className="hover:text-[#e8e0c8] transition">About</Link></li>
            <li><Link href="/contact"             className="hover:text-[#e8e0c8] transition">Contact</Link></li>
          </ul>
        </div>

        {/* Col 3 — Services */}
        <div>
          <p className="mb-5 text-[0.65rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">Services</p>
          <ul className="space-y-3 text-sm text-[#b8b4a8]">
            <li><Link href="/qsr-staffing"    className="hover:text-[#e8e0c8] transition">QSR Staffing</Link></li>
            <li><Link href="/medical-billing" className="hover:text-[#e8e0c8] transition">Medical Billing</Link></li>
            <li><Link href="/rpm-support"     className="hover:text-[#e8e0c8] transition">Remote Patient Monitoring</Link></li>
            <li><Link href="/services"        className="hover:text-[#e8e0c8] transition">All Services</Link></li>
          </ul>
        </div>

        {/* Col 4 — Address */}
        <div>
          <p className="mb-5 text-[0.65rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">Office</p>
          <div className="cream-accent mb-5 h-[1px] w-8 rounded-full" />
          <address className="not-italic text-sm leading-[2] text-[#b8b4a8]">
            <span className="block font-medium text-[#e8e0c8]">Meridiem Global</span>
            17595 Harvard Avenue<br />
            Suite C &ndash; 10184<br />
            Irvine, CA 92614<br />
            United States
          </address>
        </div>

      </div>

      <div className="relative border-t border-white/[0.06] px-6 py-5 text-center">
        <p className="text-[0.7rem] tracking-[0.12em] text-[#b8b4a8]">
          © {new Date().getFullYear()} Meridiem Global. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
