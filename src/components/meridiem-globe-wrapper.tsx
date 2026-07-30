"use client";

import Image from "next/image";
import { useRef, useEffect, useState, useCallback } from "react";

// ── Globe asset ─────────────────────────────────────────────────────────────
const GLOBE_ASSET = "/meridiem-globe-v2.png";

// ── Communication arc definitions ──────────────────────────────────────────
// All coordinates [x, y] as fractions of the canvas dimensions.
// Endpoints calibrated to visible landmass regions on the eastern-hemisphere globe.
//
//   India (Deccan interior):      ≈ [0.49, 0.44]
//   Indochina coast (Vietnam/TH): ≈ [0.63, 0.38]
//   Philippines/SE archipelago:   ≈ [0.80, 0.42]
//   Eastern horizon (off-screen): x > 1.0  — implying U.S. Pacific connection
//
// `dur` is the pulse travel duration in seconds (continuous loop — no full pause).
// `phase` offsets each arc's pulse so they are never all at the same position.
const ARC_DEFS = [
  // PRIMARY — Philippines → U.S. Pacific (talent → client, main corridor)
  { from: [0.80, 0.42] as [number,number], cp: [0.95, 0.07] as [number,number], to: [1.06, 0.22] as [number,number], dur: 6.5, phase: 0.0 },
  // SECONDARY — India → Philippines (South Asian talent corridor)
  { from: [0.49, 0.44] as [number,number], cp: [0.64, 0.19] as [number,number], to: [0.80, 0.42] as [number,number], dur: 7.8, phase: 2.6 },
  // TERTIARY — Indochina coast → U.S. Pacific (parallel SE Asian route)
  { from: [0.63, 0.38] as [number,number], cp: [0.87, 0.11] as [number,number], to: [1.06, 0.26] as [number,number], dur: 5.9, phase: 4.4 },
];

// Landmass-only node positions — no ocean dots.
const NODE_DEFS = [
  { x: 0.80, y: 0.42 }, // Philippines / SE Asian archipelago
  { x: 0.49, y: 0.44 }, // Central India
  { x: 0.63, y: 0.38 }, // Indochina Peninsula coast
];

/** Sample a quadratic bézier at t ∈ [0, 1] */
function qBez(p0: number, p1: number, p2: number, t: number): number {
  return (1 - t) * (1 - t) * p0 + 2 * (1 - t) * t * p1 + t * t * p2;
}

/** Build an array of [x, y] points along the bézier curve */
function buildArcPoints(
  from: [number, number], cp: [number, number], to: [number, number],
  W: number, H: number, steps = 100
): Array<[number, number]> {
  const pts: Array<[number, number]> = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    pts.push([
      qBez(from[0] * W, cp[0] * W, to[0] * W, t),
      qBez(from[1] * H, cp[1] * H, to[1] * H, t),
    ]);
  }
  return pts;
}

export function MeridiemGlobeWrapper() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const rafRef       = useRef<number>(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const canvas    = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const syncSize = () => {
      const w = container.offsetWidth;
      const h = container.offsetHeight;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width  = w;
        canvas.height = h;
      }
    };
    const ro = new ResizeObserver(syncSize);
    ro.observe(container);
    syncSize();
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reducedMotion) return;

    const startTime = performance.now();

    // Pulse window — fraction of arc length that the traveling bright segment occupies.
    const PULSE_WINDOW = 0.28;

    function draw(now: number) {
      const ctx = canvas!.getContext("2d");
      if (!ctx) return;

      const W = canvas!.width;
      const H = canvas!.height;
      ctx.clearRect(0, 0, W, H);

      const elapsed = (now - startTime) / 1000;

      // Horizon fade: arcs disappear as they approach the eastern edge (sunrise horizon)
      const FADE_START = W * 0.84;
      const FADE_END   = W * 1.04;

      ARC_DEFS.forEach((arc) => {
        const pts = buildArcPoints(arc.from, arc.cp, arc.to, W, H, 100);
        const nPts = pts.length;

        // Pulse position: continuous 0→1 loop, no full stop.
        const pulsePos = ((elapsed + arc.phase) % arc.dur) / arc.dur;

        // ── 1. Persistent base path — always visible ──────────────────────
        // Three passes: outer halo, mid glow, core.
        // Base opacity ~35–40% so routes register without dominating the globe.

        const baseHaloGrad = ctx.createLinearGradient(FADE_START, 0, FADE_END, 0);
        baseHaloGrad.addColorStop(0, "rgba(200,169,110,0.13)");
        baseHaloGrad.addColorStop(1, "rgba(200,169,110,0)");

        const baseMidGrad = ctx.createLinearGradient(FADE_START, 0, FADE_END, 0);
        baseMidGrad.addColorStop(0, "rgba(218,186,120,0.24)");
        baseMidGrad.addColorStop(1, "rgba(218,186,120,0)");

        const baseCoreGrad = ctx.createLinearGradient(FADE_START, 0, FADE_END, 0);
        baseCoreGrad.addColorStop(0, "rgba(242,212,142,0.38)");
        baseCoreGrad.addColorStop(1, "rgba(242,212,142,0)");

        // Outer halo
        ctx.beginPath();
        pts.forEach(([x, y], i) => i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y));
        ctx.strokeStyle = baseHaloGrad;
        ctx.lineWidth   = 5.0;
        ctx.stroke();

        // Mid glow
        ctx.beginPath();
        pts.forEach(([x, y], i) => i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y));
        ctx.strokeStyle = baseMidGrad;
        ctx.lineWidth   = 2.0;
        ctx.stroke();

        // Core
        ctx.beginPath();
        pts.forEach(([x, y], i) => i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y));
        ctx.strokeStyle = baseCoreGrad;
        ctx.lineWidth   = 0.75;
        ctx.stroke();

        // ── 2. Traveling pulse segment — bright, windowed ─────────────────
        // Segment from (pulsePos - PULSE_WINDOW) to pulsePos, clamped to [0,1].
        const pulseStart = Math.max(0, pulsePos - PULSE_WINDOW);
        const pulseEnd   = pulsePos;

        const iStart = Math.floor(pulseStart * (nPts - 1));
        const iEnd   = Math.min(nPts - 1, Math.ceil(pulseEnd * (nPts - 1)));
        const pulsePts = pts.slice(iStart, iEnd + 1);

        if (pulsePts.length > 1) {
          // Fade the pulse in at the start of the arc, out at the horizon
          const leadX = pulsePts[pulsePts.length - 1][0];
          const horizFade = leadX > FADE_START
            ? Math.max(0, 1 - (leadX - FADE_START) / (FADE_END - FADE_START))
            : 1.0;

          // Ramp up envelope so pulse fades in when first starting the arc
          const rampIn = Math.min(1, pulsePos / 0.15);
          const envelope = rampIn * horizFade;

          if (envelope > 0.02) {
            // Pulse halo
            ctx.beginPath();
            pulsePts.forEach(([x, y], i) => i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y));
            ctx.strokeStyle = `rgba(220,190,125,${envelope * 0.28})`;
            ctx.lineWidth   = 6.5;
            ctx.stroke();

            // Pulse mid
            ctx.beginPath();
            pulsePts.forEach(([x, y], i) => i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y));
            ctx.strokeStyle = `rgba(235,200,130,${envelope * 0.62})`;
            ctx.lineWidth   = 2.5;
            ctx.stroke();

            // Pulse core
            ctx.beginPath();
            pulsePts.forEach(([x, y], i) => i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y));
            ctx.strokeStyle = `rgba(252,230,160,${envelope * 0.90})`;
            ctx.lineWidth   = 1.1;
            ctx.stroke();

            // ── 3. Leading dot ─────────────────────────────────────────────
            const [dotX, dotY] = pulsePts[pulsePts.length - 1];

            // Outer bloom
            ctx.beginPath();
            ctx.arc(dotX, dotY, 5.0, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(240,210,140,${envelope * 0.20})`;
            ctx.fill();

            // Inner bright
            ctx.beginPath();
            ctx.arc(dotX, dotY, 2.0, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255,238,175,${envelope * 0.95})`;
            ctx.fill();
          }
        }

        // ── 4. Arrival pulse — only for on-screen destinations ────────────
        const [toX, toY] = [arc.to[0] * W, arc.to[1] * H];
        if (toX <= W && pulsePos > 0.80) {
          const arrFade = (pulsePos - 0.80) / 0.20;
          const pulseR  = 5.0 + Math.sin(elapsed * 2.5 + arc.phase) * 1.5;

          ctx.beginPath();
          ctx.arc(toX, toY, pulseR, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(228,200,135,${arrFade * 0.22})`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(toX, toY, 1.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(252,230,165,${arrFade * 0.90})`;
          ctx.fill();
        }
      });

      // ── 5. Ambient node glows — persistent, restrained ────────────────
      NODE_DEFS.forEach((node, i) => {
        const pulse = 0.30 + 0.14 * Math.sin(elapsed * 1.1 + i * 1.8);

        // Halo
        ctx.beginPath();
        ctx.arc(node.x * W, node.y * H, 4.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(228,200,135,${pulse * 0.28})`;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(node.x * W, node.y * H, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(252,230,165,${pulse * 0.82})`;
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, [reducedMotion]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (reducedMotion || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const cx   = rect.left + rect.width  / 2;
      const cy   = rect.top  + rect.height / 2;
      setParallaxOffset({
        x: ((e.clientX - cx) / rect.width)  * 7,
        y: ((e.clientY - cy) / rect.height) * 5,
      });
    },
    [reducedMotion],
  );

  const handleMouseLeave = useCallback(() => {
    setParallaxOffset({ x: 0, y: 0 });
  }, []);

  return (
    <div
      ref={containerRef}
      className="meridiem-globe-wrap"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="meridiem-sunrise"  aria-hidden="true" />
      <div className="meridiem-atmosphere" aria-hidden="true" />

      <div
        className={`meridiem-globe-image ${reducedMotion ? "" : "globe-float"}`}
        style={{
          transform:  reducedMotion
            ? "translate(0,0)"
            : `translate(${parallaxOffset.x}px,${parallaxOffset.y}px)`,
          transition: "transform 0.18s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <Image
          src={GLOBE_ASSET}
          alt="Meridiem Global — global operations network"
          fill
          className="object-contain"
          priority
          sizes="(max-width: 1024px) 85vw, 62vw"
        />
      </div>

      {/* Animated arc canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-10"
        style={{ width: "100%", height: "100%" }}
        aria-hidden="true"
      />

      {/* Reduced-motion fallback — persistent static paths, no traveling pulse */}
      {reducedMotion && (
        <svg
          className="pointer-events-none absolute inset-0 z-10 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Halo passes */}
          <path d="M80 42 Q95 7 106 22"  fill="none" stroke="rgba(200,169,110,0.22)" strokeWidth="1.8" />
          <path d="M49 44 Q64 19 80 42"  fill="none" stroke="rgba(200,169,110,0.20)" strokeWidth="1.6" />
          <path d="M63 38 Q87 11 106 26" fill="none" stroke="rgba(200,169,110,0.18)" strokeWidth="1.6" />
          {/* Core lines */}
          <path d="M80 42 Q95 7 106 22"  fill="none" stroke="rgba(242,212,142,0.55)" strokeWidth="0.55" />
          <path d="M49 44 Q64 19 80 42"  fill="none" stroke="rgba(242,212,142,0.50)" strokeWidth="0.55" />
          <path d="M63 38 Q87 11 106 26" fill="none" stroke="rgba(242,212,142,0.45)" strokeWidth="0.55" />
          {/* Landmass nodes only */}
          <circle cx="80" cy="42" r="1.2" fill="rgba(252,230,165,0.72)" />
          <circle cx="49" cy="44" r="1.2" fill="rgba(252,230,165,0.68)" />
          <circle cx="63" cy="38" r="1.2" fill="rgba(252,230,165,0.62)" />
        </svg>
      )}
    </div>
  );
}
