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
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 20% 30%, rgba(26,58,122,0.5) 0%, transparent 65%)" }}
        />

        <div className="relative">
          <div className="flex items-center gap-3.5 mb-14">
            <Image src="/meridiem-logo.png" alt="Meridiem Global" width={52} height={52}
              className="rounded-xl object-contain shrink-0" />
            <div>
              <p className="text-white font-semibold text-xl leading-none tracking-tight">Meridiem Global</p>
              <p className="text-white/40 text-[11px] mt-1 uppercase tracking-widest">Client Portal</p>
            </div>
          </div>

          <h1 className="text-4xl font-semibold text-white leading-[1.15] mb-4">
            Your Workforce,<br />Fully Visible
          </h1>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            Track hours, manage billing, request support, and monitor your remote team — all in one place.
          </p>

          <div className="mt-10 space-y-3">
            {[
              "Real-time hours & activity tracking",
              "Invoice management & AutoPay",
              "AI-powered support assistant",
              "Hiring & replacement requests",
            ].map(f => (
              <div key={f} className="flex items-center gap-2.5 text-sm text-white/55">
                <div className="h-1.5 w-1.5 rounded-full bg-[#c8a96e] shrink-0" />
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
            <Image src="/meridiem-logo.png" alt="Meridiem Global" width={40} height={40}
              className="rounded-xl object-contain shrink-0" />
            <div>
              <p className="text-sm font-semibold text-[#091929] leading-none">Meridiem Global</p>
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
