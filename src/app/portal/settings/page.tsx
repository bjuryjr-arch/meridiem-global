"use client";
import { useState, useEffect } from "react";
import { useAuth, useClientId, getClients, getWorkers } from "@/lib/portal/data";
import type { Client } from "@/lib/portal/types";
import { Card, Badge, PageShell, Btn, Input, Avatar } from "@/components/portal/ui";
import { Icon, ICONS } from "@/components/portal/icons";

const TEAM_MEMBERS = [
  { id: "u1", name: "Dr. Sarah Kline", email: "sarah@oceanviewdental.com", role: "client_owner", avatar: "SK" },
  { id: "u2", name: "James Holloway", email: "james@oceanviewdental.com", role: "client_billing", avatar: "JH" },
  { id: "u3", name: "Lisa Park", email: "lisa@oceanviewdental.com", role: "client_viewer", avatar: "LP" },
];

const ROLE_LABELS: Record<string, string> = {
  client_owner: "Owner", client_billing: "Billing", client_viewer: "Viewer",
};
const ROLE_VARIANT: Record<string, "blue"|"yellow"|"slate"> = {
  client_owner: "blue", client_billing: "yellow", client_viewer: "slate",
};

export default function SettingsPage() {
  const { user } = useAuth();
  const clientId = useClientId();
  const [client, setClient] = useState<Client | null>(null);

  useEffect(() => {
    const c = clientId ? getClients().find(x => x.id === clientId) ?? null : null;
    setClient(c);
    if (c) setCompanyForm(f => ({ ...f, name: c.name, industry: c.industry, contactName: c.contactName, contactEmail: c.contactEmail }));
  }, [clientId]);
  const [autoPay, setAutoPay] = useState(false);
  const [payMethod, setPayMethod] = useState<"ach"|"card">("ach");
  const [saved, setSaved] = useState(false);
  const [activeTab, setActiveTab] = useState<"account"|"team"|"billing"|"security">("account");

  const [companyForm, setCompanyForm] = useState({
    name: "",
    industry: "",
    contactName: "",
    contactEmail: "",
    phone: "(305) 555-0198",
    timezone: "America/New_York",
  });

  const save = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const tabs = [
    { id: "account",  label: "Company" },
    { id: "team",     label: "Team Users" },
    { id: "billing",  label: "Billing & AutoPay" },
    { id: "security", label: "Security" },
  ] as const;

  return (
    <PageShell title="Account Settings" sub="Manage your company, team, and billing preferences.">

      {/* Tab bar */}
      <div className="flex gap-1 p-1 bg-[#e8dfc9] rounded-xl mb-5 overflow-x-auto">
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className={`px-4 py-1.5 text-sm font-medium rounded-lg whitespace-nowrap transition-all ${
              activeTab === t.id ? "bg-white text-[#091929] shadow-sm" : "text-[#394452] hover:text-[#091929]"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* ── Company Info ─────────────────────────────────────────────────────── */}
      {activeTab === "account" && (
        <Card className="p-6">
          <p className="text-sm font-semibold text-[#091929] mb-5">Company Information</p>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Input label="Company Name" value={companyForm.name} onChange={e => setCompanyForm(f => ({ ...f, name: e.target.value }))} />
              <Input label="Industry" value={companyForm.industry} onChange={e => setCompanyForm(f => ({ ...f, industry: e.target.value }))} />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Input label="Primary Contact Name" value={companyForm.contactName} onChange={e => setCompanyForm(f => ({ ...f, contactName: e.target.value }))} />
              <Input label="Contact Email" type="email" value={companyForm.contactEmail} onChange={e => setCompanyForm(f => ({ ...f, contactEmail: e.target.value }))} />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Input label="Phone" type="tel" value={companyForm.phone} onChange={e => setCompanyForm(f => ({ ...f, phone: e.target.value }))} />
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-[#091929]">Timezone</label>
                <select
                  value={companyForm.timezone}
                  onChange={e => setCompanyForm(f => ({ ...f, timezone: e.target.value }))}
                  className="w-full rounded-xl border border-[#e2d9c8] px-3.5 py-2.5 text-sm text-[#091929] bg-white focus:outline-none focus:ring-2 focus:ring-[#091929]/15 focus:border-[#091929]/50 transition"
                >
                  <option value="America/New_York">Eastern (ET)</option>
                  <option value="America/Chicago">Central (CT)</option>
                  <option value="America/Denver">Mountain (MT)</option>
                  <option value="America/Los_Angeles">Pacific (PT)</option>
                </select>
              </div>
            </div>
            <div className="flex items-center justify-between pt-2">
              {saved && <p className="text-sm text-emerald-600 font-medium">Changes saved!</p>}
              {!saved && <span />}
              <Btn onClick={save}>Save Changes</Btn>
            </div>
          </div>
        </Card>
      )}

      {/* ── Team Users ───────────────────────────────────────────────────────── */}
      {activeTab === "team" && (
        <div className="space-y-4">
          <Card className="p-5">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-semibold text-[#091929]">Portal Users</p>
              <Btn size="sm" variant="secondary">
                <Icon d={ICONS.plus} size={14} />
                Invite User
              </Btn>
            </div>
            <div className="space-y-3">
              {TEAM_MEMBERS.map(m => (
                <div key={m.id} className="flex items-center justify-between p-3 rounded-xl bg-[#f8f3e4]">
                  <div className="flex items-center gap-3">
                    <Avatar initials={m.avatar} size="sm" />
                    <div>
                      <p className="text-sm font-medium text-[#091929]">{m.name}</p>
                      <p className="text-xs text-[#394452]">{m.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge label={ROLE_LABELS[m.role]} variant={ROLE_VARIANT[m.role]} />
                    {m.id !== user?.id && (
                      <button className="text-xs text-[#7a8694] hover:text-red-500 transition ml-1">Remove</button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-5">
            <p className="text-sm font-semibold text-[#091929] mb-2">Role Permissions</p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="text-[#394452]">
                    <th className="text-left py-2 pr-4 font-medium">Permission</th>
                    <th className="text-center py-2 px-3 font-medium">Owner</th>
                    <th className="text-center py-2 px-3 font-medium">Billing</th>
                    <th className="text-center py-2 px-3 font-medium">Viewer</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e8dfc9]">
                  {[
                    ["View team & hours", true, true, true],
                    ["View invoices", true, true, true],
                    ["Pay invoices", true, true, false],
                    ["Manage AutoPay", true, true, false],
                    ["Submit support requests", true, true, true],
                    ["Request hires", true, false, false],
                    ["Manage portal users", true, false, false],
                  ].map(([perm, owner, billing, viewer]) => (
                    <tr key={String(perm)}>
                      <td className="py-2 pr-4 text-[#394452]">{perm}</td>
                      {[owner, billing, viewer].map((v, i) => (
                        <td key={i} className="text-center py-2 px-3">
                          {v
                            ? <span className="text-emerald-500">✓</span>
                            : <span className="text-[#394452]">—</span>
                          }
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      )}

      {/* ── Billing & AutoPay ────────────────────────────────────────────────── */}
      {activeTab === "billing" && (
        <div className="space-y-4">
          {/* AutoPay toggle */}
          <Card className="p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-semibold text-[#091929]">AutoPay</p>
                <p className="text-xs text-[#394452] mt-0.5 max-w-xs">Automatically pay invoices on the due date via ACH. No additional fees.</p>
              </div>
              <button
                onClick={() => setAutoPay(v => !v)}
                className={`relative h-6 w-11 rounded-full transition-colors ${autoPay ? "bg-emerald-500" : "bg-[#e2d9c8]"}`}
              >
                <span className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${autoPay ? "translate-x-5" : "translate-x-0"}`} />
              </button>
            </div>
            {autoPay && (
              <div className="mt-3 p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                <p className="text-xs text-emerald-700 font-medium">AutoPay is enabled. Invoices will be paid automatically via ACH on their due date.</p>
              </div>
            )}
          </Card>

          {/* Payment method */}
          <Card className="p-5">
            <p className="text-sm font-semibold text-[#091929] mb-4">Default Payment Method</p>
            <div className="space-y-2.5">
              {[
                { value: "ach" as const, label: "ACH Bank Transfer", sub: "Recommended · No additional fee", icon: ICONS.bank },
                { value: "card" as const, label: "Credit / Debit Card", sub: "+3% processing fee applies", icon: ICONS.card },
              ].map(opt => (
                <button
                  key={opt.value}
                  onClick={() => setPayMethod(opt.value)}
                  className={`w-full flex items-center gap-3 p-3.5 rounded-xl border transition-all text-left ${
                    payMethod === opt.value
                      ? "border-[#091929] bg-[#091929]/5"
                      : "border-[#e2d9c8] hover:border-[#394452]"
                  }`}
                >
                  <div className={`h-9 w-9 rounded-lg flex items-center justify-center shrink-0 ${payMethod === opt.value ? "bg-[#091929] text-white" : "bg-[#e8dfc9] text-[#394452]"}`}>
                    <Icon d={opt.icon} size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#091929]">{opt.label}</p>
                    <p className="text-xs text-[#394452]">{opt.sub}</p>
                  </div>
                  <div className={`ml-auto h-4 w-4 rounded-full border-2 shrink-0 ${payMethod === opt.value ? "border-[#091929] bg-[#091929]" : "border-[#e2d9c8]"}`} />
                </button>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-xs text-[#7a8694]">Connected: •••• 4892 (Chase Business)</p>
              <Btn size="sm" variant="ghost">Update Bank Info</Btn>
            </div>
          </Card>

          {/* Notifications */}
          <Card className="p-5">
            <p className="text-sm font-semibold text-[#091929] mb-4">Billing Notifications</p>
            <div className="space-y-3">
              {[
                { label: "New invoice issued", sub: "Receive an email when a new invoice is created" },
                { label: "Payment confirmed", sub: "Receive confirmation when payment is processed" },
                { label: "Low deposit warning", sub: "Alert when deposit balance drops below minimum" },
                { label: "AutoPay upcoming", sub: "48-hour notice before AutoPay processes" },
              ].map((item, i) => (
                <div key={i} className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-[#091929]">{item.label}</p>
                    <p className="text-xs text-[#7a8694]">{item.sub}</p>
                  </div>
                  <input type="checkbox" defaultChecked className="mt-1 h-4 w-4 rounded accent-[#091929]" />
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      {/* ── Security ─────────────────────────────────────────────────────────── */}
      {activeTab === "security" && (
        <div className="space-y-4">
          <Card className="p-5">
            <p className="text-sm font-semibold text-[#091929] mb-4">Change Password</p>
            <div className="space-y-3">
              <Input label="Current Password" type="password" placeholder="••••••••" />
              <Input label="New Password" type="password" placeholder="••••••••" />
              <Input label="Confirm New Password" type="password" placeholder="••••••••" />
              <Btn>Update Password</Btn>
            </div>
          </Card>

          <Card className="p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-semibold text-[#091929]">Two-Factor Authentication</p>
                <p className="text-xs text-[#394452] mt-0.5">Add an extra layer of security to your account.</p>
              </div>
              <Badge label="Not Enabled" variant="slate" />
            </div>
            <Btn variant="secondary" size="sm" className="mt-4">Enable 2FA</Btn>
          </Card>

          <Card className="p-5">
            <p className="text-sm font-semibold text-[#091929] mb-3">Active Sessions</p>
            <div className="space-y-2.5">
              {[
                { device: "Chrome on macOS", location: "Miami, FL", time: "Active now", current: true },
                { device: "Safari on iPhone 15", location: "Miami, FL", time: "2 hours ago", current: false },
              ].map((s, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-[#f8f3e4]">
                  <div>
                    <p className="text-sm font-medium text-[#091929]">{s.device} {s.current && <span className="text-xs text-emerald-600 ml-1">(This device)</span>}</p>
                    <p className="text-xs text-[#394452]">{s.location} · {s.time}</p>
                  </div>
                  {!s.current && <button className="text-xs text-red-500 hover:underline">Revoke</button>}
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}
    </PageShell>
  );
}
