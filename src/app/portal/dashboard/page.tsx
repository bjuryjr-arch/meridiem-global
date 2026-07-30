"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  useAuth, useClientId,
  getClients, getWorkers, getInvoices, getHours, getNotifications,
} from "@/lib/portal/data";
import type { Client, Worker, Invoice, Notification, HoursEntry } from "@/lib/portal/types";
import { Card, StatCard, Badge, HealthBadge, ActivityBar, PageShell, Btn, EmptyState } from "@/components/portal/ui";
import { Icon, ICONS } from "@/components/portal/icons";

export default function Dashboard() {
  const { user } = useAuth();
  const clientId = useClientId();

  const [client, setClient] = useState<Client | null>(null);
  const [workers, setWorkers] = useState<Worker[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [hours, setHours] = useState<HoursEntry[]>([]);

  useEffect(() => {
    const allClients = getClients();
    const allWorkers = getWorkers();
    const allInvoices = getInvoices();
    const allNotifications = getNotifications();
    const allHours = getHours();

    setClient(clientId ? (allClients.find(c => c.id === clientId) ?? null) : null);
    setWorkers(clientId ? allWorkers.filter(w => w.clientId === clientId) : []);
    setInvoices(clientId ? allInvoices.filter(i => i.clientId === clientId) : []);
    setNotifications(allNotifications.filter(n => !n.read));
    setHours(clientId ? allHours.filter(h => allWorkers.find(w => w.id === h.workerId && w.clientId === clientId)) : []);
  }, [clientId]);

  const latestInvoice = invoices[0];
  const weekHours = hours.reduce((s, h) => s + h.hours, 0);

  const alerts: { type: "warning" | "error"; msg: string }[] = [];
  if (client && client.depositBalance < client.depositRequired)
    alerts.push({ type: "error", msg: "Deposit balance is below the minimum required. Add funds to avoid service interruption." });
  if (latestInvoice?.status === "overdue")
    alerts.push({ type: "error", msg: `Invoice ${latestInvoice.id} is overdue — $${latestInvoice.amount.toLocaleString()} due.` });
  if (latestInvoice?.status === "pending")
    alerts.push({ type: "warning", msg: `Invoice due ${latestInvoice.dueDate} — $${latestInvoice.amount.toLocaleString()} pending.` });

  if (!client) {
    return (
      <PageShell title={`Welcome${user?.name ? `, ${user.name.split(" ")[0]}` : ""}`} sub="Meridiem Client Portal">
        <Card className="p-0">
          <EmptyState
            icon={<Icon d={ICONS.dashboard} size={36} />}
            title="No client account linked"
            sub="Your account hasn't been linked to a client yet. Contact your Meridiem account manager."
          />
        </Card>
      </PageShell>
    );
  }

  const depositPct = Math.min(100, Math.round((client.depositBalance / Math.max(client.depositRequired * 1.5, 1)) * 100));
  const depositStatus = client.depositBalance < client.depositRequired
    ? { label: "Low — Action Required", variant: "red" as const }
    : client.depositBalance < client.depositRequired * 1.2
    ? { label: "Watch Closely", variant: "yellow" as const }
    : { label: "Fully Funded", variant: "green" as const };

  return (
    <PageShell
      title={`Welcome back${user?.name ? `, ${user.name.split(" ")[0]}` : ""}`}
      sub={`${client.name} · Client Portal`}
    >
      {/* Alerts */}
      {alerts.length > 0 && (
        <div className="space-y-2 mb-5">
          {alerts.map((a, i) => (
            <div key={i} className={`flex items-start gap-3 px-4 py-3 rounded-xl border text-sm ${
              a.type === "error" ? "bg-red-50 border-red-200 text-red-700" : "bg-amber-50 border-amber-200 text-amber-700"
            }`}>
              <Icon d={ICONS.alertTriangle} size={16} className="mt-0.5 shrink-0" />
              {a.msg}
            </div>
          ))}
        </div>
      )}

      {/* Health */}
      <div className="flex items-center gap-3 mb-6">
        <div className={`h-2.5 w-2.5 rounded-full animate-pulse ${
          client.healthStatus === "green" ? "bg-emerald-400" : client.healthStatus === "yellow" ? "bg-amber-400" : "bg-red-500"
        }`} />
        <span className="text-sm font-medium text-[#091929]">Account Status:</span>
        <HealthBadge status={client.healthStatus} />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <StatCard label="Active Workers" value={String(workers.filter(w => w.status === "active").length)}
          sub={`${workers.length} total`} icon={<Icon d={ICONS.team} size={22} />} />
        <StatCard label="Hours This Week" value={String(weekHours)}
          sub={workers.length === 0 ? "No workers" : "logged"} icon={<Icon d={ICONS.hours} size={22} />} />
        <StatCard label="Deposit Balance" value={`$${client.depositBalance.toLocaleString()}`}
          sub={depositStatus.label}
          accent={client.depositBalance < client.depositRequired ? "text-red-600" : "text-[#091929]"}
          icon={<Icon d={ICONS.creditCard} size={22} />} />
        <StatCard label="Invoice Status"
          value={latestInvoice ? `$${latestInvoice.amount.toLocaleString()}` : "—"}
          sub={latestInvoice?.status ?? "No invoices"}
          accent={latestInvoice?.status === "overdue" ? "text-red-600" : "text-[#091929]"}
          icon={<Icon d={ICONS.invoices} size={22} />} />
      </div>

      {/* Team + Invoice row */}
      <div className="grid md:grid-cols-2 gap-5 mb-5">
        <Card className="p-5">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-semibold text-[#091929]">Your Team</p>
            <Link href="/portal/team" className="text-xs text-blue-700 hover:underline">View all</Link>
          </div>
          {workers.length === 0 ? (
            <p className="text-sm text-[#7a8694] py-4 text-center">No workers yet.</p>
          ) : (
            <div className="space-y-3">
              {workers.slice(0, 3).map(w => (
                <div key={w.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-full bg-[#091929]/10 flex items-center justify-center text-xs font-semibold text-[#091929]">
                      {w.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#091929]">{w.name}</p>
                      <p className="text-xs text-[#7a8694]">{w.role}</p>
                    </div>
                  </div>
                  <ActivityBar pct={w.activityPct} />
                </div>
              ))}
            </div>
          )}
        </Card>

        <Card className="p-5">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-semibold text-[#091929]">Latest Invoice</p>
            <Link href="/portal/invoices" className="text-xs text-blue-700 hover:underline">History</Link>
          </div>
          {latestInvoice ? (
            <>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-2xl font-semibold text-[#091929]">${latestInvoice.amount.toLocaleString()}</p>
                  <p className="text-xs text-[#394452] mt-0.5">{latestInvoice.period}</p>
                </div>
                <Badge
                  label={latestInvoice.status.charAt(0).toUpperCase() + latestInvoice.status.slice(1)}
                  variant={latestInvoice.status === "paid" ? "green" : latestInvoice.status === "overdue" ? "red" : "yellow"}
                />
              </div>
              {latestInvoice.lineItems.slice(0, 2).map((li, i) => (
                <div key={i} className="flex justify-between text-xs text-[#394452] mb-1">
                  <span className="truncate pr-2">{li.description}</span>
                  <span className="shrink-0 font-medium text-[#091929]">${li.amount.toLocaleString()}</span>
                </div>
              ))}
              {latestInvoice.status !== "paid" && (
                <Link href="/portal/billing" className="block mt-3">
                  <Btn className="w-full justify-center" size="sm">Pay Invoice</Btn>
                </Link>
              )}
            </>
          ) : (
            <p className="text-sm text-[#7a8694] py-4 text-center">No invoices yet.</p>
          )}
        </Card>
      </div>

      {/* Deposit bar */}
      <Card className="p-5 mb-5">
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-sm font-semibold text-[#091929]">Deposit Balance</p>
            <p className="text-xs text-[#394452] mt-0.5">Minimum required: ${client.depositRequired.toLocaleString()}</p>
          </div>
          <Badge label={depositStatus.label} variant={depositStatus.variant} />
        </div>
        <div className="h-2 bg-[#e8dfc9] rounded-full overflow-hidden mb-2">
          <div className={`h-full rounded-full transition-all ${
            depositPct >= 80 ? "bg-emerald-400" : depositPct >= 50 ? "bg-amber-400" : "bg-red-400"
          }`} style={{ width: `${depositPct}%` }} />
        </div>
        <div className="flex justify-between text-xs text-[#7a8694]">
          <span>$0</span>
          <span className="font-medium text-[#091929]">${client.depositBalance.toLocaleString()} available</span>
          <span>Max</span>
        </div>
      </Card>

      {/* Quick actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: "Screenshots",    href: "/portal/screenshots", icon: ICONS.screenshots },
          { label: "Request a Hire", href: "/portal/hire",        icon: ICONS.hire },
          { label: "Get Support",    href: "/portal/support",     icon: ICONS.support },
          { label: "Settings",       href: "/portal/settings",    icon: ICONS.settings },
        ].map(a => (
          <Link key={a.href} href={a.href}>
            <Card className="p-4 flex flex-col items-center gap-2 text-center hover:border-[#c8a96e]/40 transition-colors">
              <div className="h-9 w-9 rounded-xl bg-[#e8dfc9] flex items-center justify-center text-[#394452]">
                <Icon d={a.icon} size={18} />
              </div>
              <p className="text-xs font-medium text-[#091929]">{a.label}</p>
            </Card>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
