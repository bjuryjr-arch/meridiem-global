"use client";
import { useState, FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAuth } from "@/lib/portal/data";
import { Btn, Input } from "@/components/portal/ui";

export default function ChangePasswordPage() {
  const { user, changePassword } = useAuth();
  const router = useRouter();

  const [newPassword, setNewPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // If not logged in at all, send to login
  useEffect(() => {
    if (user === null) router.replace("/portal/login");
  }, [user, router]);

  // If logged in but no password change required, send to dashboard
  useEffect(() => {
    if (user && !user.mustChangePassword) router.replace("/portal/dashboard");
  }, [user, router]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (newPassword !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    changePassword(newPassword);
    router.push("/portal/dashboard");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen flex bg-[#f8f3e4]">

      {/* Left brand panel */}
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
            Secure Your<br />Account
          </h1>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            Set a strong password to protect your Meridiem admin account. This is a one-time setup step.
          </p>
        </div>
        <p className="relative text-white/20 text-xs">© {new Date().getFullYear()} Meridiem Global. All rights reserved.</p>
      </div>

      {/* Right form */}
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

          {/* Security badge */}
          <div className="mb-6 flex items-center gap-2.5 rounded-lg bg-amber-50 border border-amber-200 px-3.5 py-2.5">
            <svg className="h-4 w-4 text-amber-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 3h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            </svg>
            <p className="text-xs text-amber-800 font-medium">You must set a new password before continuing.</p>
          </div>

          <h2 className="text-2xl font-semibold text-[#091929] mb-1">Set your password</h2>
          <p className="text-sm text-[#394452] mb-7">
            Welcome, {user.name}. Choose a strong password for your account.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="New password"
              type="password"
              placeholder="Min. 8 characters"
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              autoComplete="new-password"
              required
            />
            <Input
              label="Confirm new password"
              type="password"
              placeholder="Re-enter password"
              value={confirm}
              onChange={e => setConfirm(e.target.value)}
              autoComplete="new-password"
              required
            />

            {error && (
              <div className="px-3.5 py-2.5 bg-red-50 border border-red-100 rounded-xl">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            <Btn type="submit" disabled={loading} className="w-full justify-center" size="lg">
              {loading ? "Saving…" : "Set Password & Continue"}
            </Btn>
          </form>
        </div>
      </div>
    </div>
  );
}
