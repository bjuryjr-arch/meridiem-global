"use client";
import { useState, FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAuth } from "@/lib/portal/data";
import { Btn, Input } from "@/components/portal/ui";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isFirstBoot, setIsFirstBoot] = useState(false);

  // Detect first boot: mg_users not in localStorage yet (seed hasn't run)
  useEffect(() => {
    const stored = localStorage.getItem("mg_users");
    if (!stored) setIsFirstBoot(true);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const ok = await login(email, password);
    setLoading(false);
    if (ok) {
      // Re-read session to check mustChangePassword
      const session = localStorage.getItem("mg_session");
      if (session) {
        try {
          const user = JSON.parse(session);
          if (user.mustChangePassword) {
            router.push("/portal/change-password");
            return;
          }
        } catch { /* ignore */ }
      }
      router.push("/portal/dashboard");
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex bg-[#f8f3e4]">

      {/* ── Left brand panel ─────────────────────────────────────────────────── */}
      <div className="hidden md:flex md:w-[44%] bg-[#091929] flex-col justify-between p-12 relative overflow-hidden">

        {/* Ambient navy glow — pure brand navy, no purple */}
        <div className="pointer-events-none absolute inset-0" style={{
          background: "radial-gradient(ellipse at 25% 35%, rgba(13,34,53,0.9) 0%, transparent 60%)",
        }} />

        {/* Globe animation keyframes */}
        <style>{`
          @keyframes globe-breathe {
            0%, 100% { opacity: 0.28; transform: translateY(-50%) scale(1); }
            50%       { opacity: 0.34; transform: translateY(-50%) scale(1.018); }
          }
        `}</style>

        {/* Globe — larger, centered-right, watermark-style with clear definition */}
        <div className="pointer-events-none absolute select-none" style={{
          right: "-10%", top: "50%",
          width: "min(640px, 115%)", height: "min(640px, 115%)",
          mixBlendMode: "screen",
          animation: "globe-breathe 14s ease-in-out infinite",
          willChange: "transform, opacity",
        }}>
          <Image src="/meridiem-logo-transparent.png" alt="" fill className="object-contain" priority />
        </div>

        {/* Soft left-edge fade — blends globe into background without boxing it */}
        <div className="pointer-events-none absolute inset-0" style={{
          background: "linear-gradient(to right, #091929 0%, #091929 18%, transparent 52%)",
        }} />

        {/* Soft top/bottom fade — keeps globe atmospheric */}
        <div className="pointer-events-none absolute inset-0" style={{
          background: "linear-gradient(to bottom, #091929 0%, transparent 20%, transparent 80%, #091929 100%)",
        }} />

        {/* Content */}
        <div className="relative">
          {/* Cream accent line */}
          <div className="mb-10 h-[1.5px] w-12 rounded-full" style={{
            background: "linear-gradient(90deg, rgba(232,224,200,0.6), rgba(232,224,200,0.1))",
          }} />

          {/* Wordmark */}
          <div className="flex items-center gap-3.5 mb-14">
            <Image src="/meridiem-logo-transparent.png" alt="Meridiem Global" width={44} height={44}
              className="object-contain shrink-0 opacity-90" />
            <div>
              <p className="text-[0.72rem] font-medium tracking-[0.28em] text-[#e8e0c8] uppercase">Meridiem Global</p>
              <p className="text-white/30 text-[10px] mt-0.5 uppercase tracking-widest">Client Portal</p>
            </div>
          </div>

          <h1 className="text-[2.6rem] font-semibold text-white leading-[1.1] mb-4"
            style={{ fontFamily: "var(--font-cormorant)" }}>
            Your Workforce,<br />
            <em className="not-italic" style={{
              background: "linear-gradient(135deg, #e8e0c8 0%, #c8a96e 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>Fully Visible</em>
          </h1>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            Track hours, manage billing, request support, and monitor your remote team — all in one place.
          </p>

          <div className="mt-10 space-y-3 pt-8" style={{
            borderTop: "1px solid transparent",
            borderImage: "linear-gradient(90deg, rgba(232,224,200,0.15) 0%, rgba(232,224,200,0.07) 50%, transparent 100%) 1",
          }}>
            {[
              "Real-time hours & activity tracking",
              "Invoice management & AutoPay",
              "AI-powered support assistant",
              "Hiring & replacement requests",
            ].map(f => (
              <div key={f} className="flex items-center gap-2.5 text-xs text-white/55 tracking-[0.04em]">
                <span className="inline-block h-1 w-1 rounded-full bg-[#e8e0c8]/60 shrink-0" />
                {f}
              </div>
            ))}
          </div>
        </div>

        <p className="relative text-white/20 text-xs">© {new Date().getFullYear()} Meridiem Global. All rights reserved.</p>
      </div>

      {/* ── Right login form ─────────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 bg-[#f8f3e4]">
        <div className="mx-auto w-full max-w-sm">

          {/* Mobile logo */}
          <div className="flex items-center gap-3 mb-10 md:hidden">
            <div className="h-9 w-9 rounded-lg bg-[#06091a] flex items-center justify-center shrink-0">
              <Image src="/meridiem-logo-transparent.png" alt="Meridiem Global" width={32} height={32}
                className="object-contain" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#091929] leading-none tracking-tight">Meridiem Global</p>
              <p className="text-[10px] text-[#394452] mt-0.5 uppercase tracking-widest">Client Portal</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-[#091929] mb-1">Sign in</h2>
          <p className="text-sm text-[#394452] mb-7">Enter your credentials to access your account.</p>

          {/* First-boot credential hint — only shown before any users exist */}
          {isFirstBoot && (
            <div className="mb-6 rounded-lg border border-[#e2d9c8] bg-white p-4">
              <p className="text-xs font-semibold text-[#091929] mb-2.5 uppercase tracking-wide">Initial Admin Access</p>
              <div className="space-y-1.5 text-xs text-[#394452]">
                <div className="flex items-center gap-2">
                  <span className="text-[#7a8694] w-16 shrink-0">Email</span>
                  <code className="font-mono text-[#091929] select-all">ben@meridiemglobal.com</code>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#7a8694] w-16 shrink-0">Password</span>
                  <code className="font-mono text-[#091929] select-all">Meridiem2025!</code>
                </div>
              </div>
              <p className="mt-3 text-[11px] text-[#7a8694]">You will be prompted to set a new password after signing in.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Email address"
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />

            {error && (
              <div className="px-3.5 py-2.5 bg-red-50 border border-red-100 rounded-xl">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            <Btn type="submit" disabled={loading} className="w-full justify-center" size="lg">
              {loading ? "Signing in…" : "Sign In"}
            </Btn>
          </form>

          <p className="mt-6 text-center text-xs text-[#7a8694]">
            Need access?{" "}
            <span className="text-[#091929] font-medium">Contact your Meridiem account manager.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
