import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#04060f]">

      {/* Watermark in footer */}
      <div
        className="pointer-events-none absolute select-none opacity-[0.035]"
        style={{ right: "-8%", bottom: "-20%", width: "420px", height: "420px" }}
      >
        <Image src="/meridiem-logo-transparent.png" alt="" fill className="object-contain" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-6 py-14 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:px-8">

        {/* Brand column */}
        <div>
          <div className="mb-5 flex items-center gap-3">
            <Image
              src="/meridiem-logo-transparent.png"
              alt="Meridiem Global logo"
              width={44}
              height={44}
              className="h-11 w-11 object-contain"
            />
            <p
              className="text-[0.7rem] font-medium tracking-[0.3em] text-[#e8e0c8]"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              MERIDIEM GLOBAL
            </p>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-[#b8b4a8]">{siteConfig.description}</p>
          <Link
            href="/contact"
            className="mt-7 inline-block rounded-full border border-[rgba(232,224,200,0.2)] px-5 py-2 text-[0.72rem] tracking-[0.1em] text-[#e8e0c8] uppercase transition hover:border-[rgba(232,224,200,0.45)]"
          >
            Book a Consultation
          </Link>
        </div>

        {/* Solutions */}
        <div>
          <p className="mb-5 text-[0.65rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">Solutions</p>
          <ul className="space-y-3 text-sm text-[#b8b4a8]">
            <li><Link href="/services" className="hover:text-[#e8e0c8] transition">Global Staffing Solutions</Link></li>
            <li><Link href="/savings-calculator" className="hover:text-[#e8e0c8] transition">Savings Calculator</Link></li>
            <li><Link href="/qsr-staffing" className="hover:text-[#e8e0c8] transition">QSR Staffing</Link></li>
            <li><Link href="/medical-billing" className="hover:text-[#e8e0c8] transition">Medical Billing</Link></li>
            <li><Link href="/rpm-support" className="hover:text-[#e8e0c8] transition">RPM Support</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <p className="mb-5 text-[0.65rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">Resources</p>
          <ul className="space-y-3 text-sm text-[#b8b4a8]">
            <li><Link href="/how-it-works" className="hover:text-[#e8e0c8] transition">How It Works</Link></li>
            <li><Link href="/services" className="hover:text-[#e8e0c8] transition">Services Overview</Link></li>
            <li><Link href="/savings-calculator" className="hover:text-[#e8e0c8] transition">ROI Calculator</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <p className="mb-5 text-[0.65rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">Company</p>
          <ul className="space-y-3 text-sm text-[#b8b4a8]">
            <li><Link href="/about" className="hover:text-[#e8e0c8] transition">About</Link></li>
            <li><Link href="/contact" className="hover:text-[#e8e0c8] transition">Contact</Link></li>
          </ul>
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
