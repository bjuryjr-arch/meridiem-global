"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";

const STORAGE_KEY = "mg-exit-popup-v1";
const MIN_VIEW_MS = 5000;
const EXIT_THRESHOLD_Y = 60;
const MOBILE_SCROLL_PCT = 0.6;

export function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pageLoadedMs = useRef(0);
  const lastMouseY = useRef(0);
  const lastMouseTime = useRef(0);
  const shownRef = useRef(false);

  useEffect(() => {
    setMounted(true);
    pageLoadedMs.current = Date.now();

    const dismissed = () => {
      try {
        return sessionStorage.getItem(STORAGE_KEY) === "1";
      } catch {
        return false;
      }
    };

    const attemptShow = () => {
      if (dismissed() || shownRef.current) return;
      shownRef.current = true;
      setVisible(true);
    };

    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      const onScroll = () => {
        if (dismissed() || shownRef.current) return;
        if (Date.now() - pageLoadedMs.current < MIN_VIEW_MS) return;
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (docHeight > 0 && scrollTop / docHeight >= MOBILE_SCROLL_PCT) {
          attemptShow();
        }
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }

    // Desktop: exit-intent via mouse velocity toward top edge
    const onMouseMove = (e: MouseEvent) => {
      if (dismissed() || shownRef.current) return;
      if (Date.now() - pageLoadedMs.current < MIN_VIEW_MS) return;

      const now = Date.now();
      const y = e.clientY;
      const dt = now - lastMouseTime.current;

      if (lastMouseTime.current > 0 && dt > 30 && dt < 300) {
        const velocity = (lastMouseY.current - y) / dt;
        if (y <= EXIT_THRESHOLD_Y && velocity > 0.5) {
          attemptShow();
        }
      }

      lastMouseY.current = y;
      lastMouseTime.current = now;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  const dismiss = useCallback(() => {
    setVisible(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Storage unavailable — treat as dismissed for this session
    }
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    },
    [dismiss],
  );

  useEffect(() => {
    if (visible) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [visible, handleKeyDown]);

  if (!mounted || !visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* Popup */}
      <div
        className="relative z-10 mx-4 w-full max-w-[700px]"
        style={{
          animation: "fadeSlideUp 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        }}
      >
        <div className="surface authority-surface relative overflow-hidden rounded-2xl border border-white/[0.1] shadow-2xl">
          {/* Close X */}
          <button
            onClick={dismiss}
            className="absolute right-3 top-3 z-20 flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.15] bg-black/50 text-xs text-[#b8b4a8] transition hover:bg-white/10 hover:text-white"
            aria-label="Close"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <line x1="1" y1="1" x2="9" y2="9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <line x1="9" y1="1" x2="1" y2="9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>

          <div className="grid md:grid-cols-5">
            {/* Left: Cover art */}
            <div className="relative col-span-2 flex items-center justify-center bg-gradient-to-br from-[#060a1a] to-[#0c1128] p-6 md:p-8">
              <div className="w-full max-w-[180px] md:max-w-full">
                <div className="relative">
                  <div className="absolute -bottom-1.5 left-3 right-3 h-5 rounded bg-black/30 blur-sm" />
                  <div className="relative overflow-hidden rounded-lg shadow-xl">
                    <Image
                      src="/execution-gap-cover.webp"
                      alt="The Execution Gap — Free Guide"
                      width="300"
                      height="390"
                      className="block h-auto w-full"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-white/[0.06]" />
                  </div>
                  <div className="absolute -left-[4px] top-3 bottom-3 w-[5px] rounded-l bg-gradient-to-r from-black/25 to-transparent" />
                </div>
              </div>
            </div>

            {/* Right: Copy + CTA */}
            <div className="col-span-3 flex flex-col justify-center px-7 py-8 md:px-9 md:py-10">
              <p className="text-[0.6rem] font-medium tracking-[0.28em] text-[#c8c4b8] uppercase">
                Before you go — get the free guide
              </p>
              <h2
                className="mt-1.5 text-2xl text-white md:text-3xl"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                The Execution Gap
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#b8b4a8]">
                Learn how to tell when your business is actually ready to hire, what effective execution looks like,
                and how to avoid turning a new hire into a new management headache.
              </p>
              <div className="mt-6">
                <a
                  href="/guide"
                  className="btn-primary inline-flex items-center gap-2 text-sm"
                >
                  Download the Free Guide
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}