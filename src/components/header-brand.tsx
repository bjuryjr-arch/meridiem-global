"use client";

import Image from "next/image";
import Link from "next/link";

interface HeaderBrandProps {
  /** True when the header is in light (cream) mode — uses dark navy text. */
  isLight: boolean;
}

/**
 * HeaderBrand — official Meridiem Global brand lockup.
 *
 * Renders the official globe mark asset at ~42px (the symbol) beside a
 * two-line HTML wordmark: MERIDIEM / GLOBAL. The HTML wordmark carries
 * legibility at header scale; the globe image preserves the official mark.
 *
 * The entire lockup is a single <Link> so it behaves as one clickable unit.
 * The aria-label on the link gives the accessible name; the Image has alt=""
 * because the text already describes the brand (avoids duplication).
 */
export function HeaderBrand({ isLight }: HeaderBrandProps) {
  const nameColor  = isLight ? "text-[#0a1628]" : "text-[#e8e0c8]";
  const subColor   = isLight ? "text-[#0a1628]/70" : "text-[#c8c4b8]";

  return (
    <Link
      href="/"
      aria-label="Meridiem Global — Home"
      className="group flex shrink-0 items-center gap-2.5 no-underline"
    >
      {/* Official globe mark — purely decorative at header scale; wordmark carries legibility */}
      <div className="relative shrink-0 transition-transform duration-300 group-hover:scale-[1.04]"
           style={{ width: 42, height: 42 }}>
        <Image
          src="/meridiem-logo-transparent.png"
          alt=""
          fill
          priority
          sizes="42px"
          className="object-contain"
        />
      </div>

      {/* Two-line wordmark */}
      <div className="flex flex-col leading-none">
        <span
          className={`block text-[0.72rem] font-semibold uppercase tracking-[0.19em] transition-colors duration-200 ${nameColor}`}
          aria-hidden="true"
        >
          Meridiem
        </span>
        <span
          className={`mt-[3px] block text-[0.49rem] font-medium uppercase tracking-[0.28em] transition-colors duration-200 ${subColor}`}
          aria-hidden="true"
        >
          Global
        </span>
      </div>
    </Link>
  );
}
