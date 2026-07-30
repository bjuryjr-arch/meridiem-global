"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Reveal animation strategy — visible-by-default.
 *
 * Elements with .reveal are fully visible out of the box (SSR, no-JS, slow hydration).
 * JavaScript adds data-reveal-ready ONLY to below-fold elements so they animate in
 * when scrolled into view. In-viewport elements are marked reveal-visible immediately
 * and never hidden — no blank sections, no flash of invisible content (FOIC).
 *
 * Transition-suppression pattern:
 *   Before setting data-reveal-ready (which applies opacity:0 via CSS), we temporarily
 *   set transition:none inline so the snap to hidden is instant. We then clear the
 *   inline style so the CSS [data-reveal-ready] transition is in effect for the
 *   subsequent smooth reveal-in. Without this, the CSS transition would animate the
 *   fade-OUT (opacity:1→0) as well, which is visually wrong and potentially visible
 *   near the fold.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal")
    );

    if (!("IntersectionObserver" in window) || reducedMotion) {
      // No observer or motion preference — everything visible immediately
      elements.forEach((el) => el.classList.add("reveal-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -4% 0px",
        threshold: 0.04,
      }
    );

    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const alreadyVisible =
        rect.top < window.innerHeight * 0.96 && rect.bottom > 0;

      if (alreadyVisible) {
        // Already in viewport — mark visible immediately, skip animation entirely
        el.classList.add("reveal-visible");
      } else {
        // Below fold — set up animated entry.
        // Step 1: suppress transition so opacity:0 is applied instantly (no fade-out)
        el.style.transition = "none";
        // Step 2: apply hidden state via CSS attribute selector
        el.setAttribute("data-reveal-ready", "");
        // Step 3: force synchronous reflow so the hidden state commits before
        //         we restore the transition
        void el.offsetHeight;
        // Step 4: clear inline override — CSS [data-reveal-ready] transition now
        //         governs future state changes (the reveal-in animation)
        el.style.transition = "";
        // Step 5: observe; adding reveal-visible later triggers the smooth reveal
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
