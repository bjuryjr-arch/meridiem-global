import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#04060f]">

      {/* Watermark */}
      <div
        className="pointer-events-none absolute select-none opacity-[0.025]"
        style={{ right: "-8%", bottom: "-18%", width: "380px", height: "380px" }}
        aria-hidden="true"
      >
        <Image src="/meridiem-logo-transparent.png" alt="" fill className="object-contain" sizes="(max-width: 768px) 200px, 400px" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-8">

        {/* Col 1 — Brand */}
        <div>
          <div className="mb-5 flex items-center gap-3">
            <Image
              src="/meridiem-logo-transparent.png"
              alt="Meridiem Global"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <p
              className="text-[0.7rem] font-medium tracking-[0.3em] text-[#e8e0c8]"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              MERIDIEM GLOBAL
            </p>
          </div>

          <div className="cream-accent mb-5 h-[1px] w-8 rounded-full" />

          <p className="mb-5 text-sm leading-relaxed text-[#b8b4a8]">
            Managed global workforce solutions built for U.S. businesses that need operational accountability, not just lower cost headcount.
          </p>

          <a
            href="mailto:info@meridiemglobal.com"
            className="text-sm text-[#c8c4b8] transition-colors hover:text-[#e8e0c8]"
          >
            info@meridiemglobal.com
          </a>

          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-block rounded-full border border-[rgba(232,224,200,0.18)] px-5 py-2 text-[0.72rem] tracking-[0.1em] text-[#e8e0c8] uppercase transition hover:border-[rgba(232,224,200,0.4)]"
            >
              Start Scaling Responsibly
            </Link>
          </div>
        </div>

        {/* Col 2 — Navigation */}
        <div>
          <p className="mb-5 text-[0.65rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">
            Navigation
          </p>
          <ul className="space-y-3 text-sm text-[#b8b4a8]">
            <li><Link href="/" className="transition hover:text-[#e8e0c8]">Home</Link></li>
            <li><Link href="/services" className="transition hover:text-[#e8e0c8]">Services</Link></li>
            <li><Link href="/industries" className="transition hover:text-[#e8e0c8]">Industries</Link></li>
            <li><Link href="/how-it-works" className="transition hover:text-[#e8e0c8]">How It Works</Link></li>
            <li><Link href="/savings-calculator" className="transition hover:text-[#e8e0c8]">Savings Calculator</Link></li>
            <li><Link href="/resources" className="transition hover:text-[#e8e0c8]">Resources</Link></li>
            <li><Link href="/guide" className="transition hover:text-[#e8e0c8]">Free Guide</Link></li>
            <li><Link href="/about" className="transition hover:text-[#e8e0c8]">About</Link></li>
            <li><Link href="/contact" className="transition hover:text-[#e8e0c8]">Contact</Link></li>
            <li><Link href="/careers" className="transition hover:text-[#e8e0c8]">Careers</Link></li>
          </ul>
        </div>

        {/* Col 3 — Services */}
        <div>
          <p className="mb-5 text-[0.65rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">
            Services
          </p>
          <ul className="space-y-3 text-sm text-[#b8b4a8]">
            <li><Link href="/qsr-staffing" className="transition hover:text-[#e8e0c8]">QSR &amp; Franchise Operations</Link></li>
            <li><Link href="/general-business" className="transition hover:text-[#e8e0c8]">General Business Support</Link></li>
            <li><Link href="/how-it-works" className="transition hover:text-[#e8e0c8]">Our Staffing Model</Link></li>
            <li><Link href="/services" className="transition hover:text-[#e8e0c8]">All Services</Link></li>
          </ul>
        </div>

        {/* Col 4 — Office + legal */}
        <div>
          <p className="mb-5 text-[0.65rem] font-medium tracking-[0.3em] text-[#b8b4a8] uppercase">
            Office
          </p>
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

      <div className="relative border-t border-white/[0.05] px-6 py-5 text-center">
        <p className="text-[0.7rem] tracking-[0.12em] text-[#b8b4a8]">
          © {new Date().getFullYear()} Meridiem Global. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
