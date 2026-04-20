"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useClientId, getClients, getInvoices, getDeposits } from "@/lib/portal/data";
import type { Client, Invoice, Deposit } from "@/lib/portal/types";
import { Card, Badge, PageShell, Btn, EmptyState } from "@/components/portal/ui";
import { Icon, ICONS } from "@/components/portal/icons";

export default function BillingPage() {
  const clientId = useClientId();
  const [client, setClient] = useState<Client | null>(null);
  const [invoice, setInvoice] = useState<Invoice | null>(null);
  const [deposits, setDeposits] = useState<Deposit[]>([]);
  const [autoPay, setAutoPay] = useState(false);
  const [showPay, setShowPay] = useState(false);
  const [paying, setPaying] = useState(false);
  const [paid, setPaid] = useState(false);

  useEffect(() => {
    const c = clientId ? getClients().find(x => x.id === clientId) ?? null : null;
    const invs = clientId ? getInvoices().filter(i => i.clientId === clientId) : [];
    const deps = clientId ? getDeposits().filter(d => d.clientId === clientId) : [];
    setClient(c);
    setInvoice(invs.find(i => i.status !== "paid") ?? invs[0] ?? null);
    setDeposits(deps);
  }, [clientId]);

  if (!client) {
    return (
      <PageShell title="Billing">
        <Card className="p-0">
          <EmptyState icon={<Icon d={ICONS.billing} size={36} />} title="No billing data" sub="Your billing information will appear here once your account is configured." />
        </Card>
      </PageShell>
    );
  }

  const depositPct = Math.min(100, client.depositRequired > 0
    ? Math.round((client.depositBalance / client.depositRequired) * 100) : 100);

  const handlePay = () => {
    setPaying(true);
    setTimeout(() => { setPaying(false); setPaid(true); setShowPay(false); }, 2000);
  };

  return (
    <PageShell title="Billing" sub="Manage invoices and your deposit account">

      {/* Current invoice */}
      {invoice ? (
        <Card className="p-5 mb-5">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm font-semibold text-[#091929]">Current Invoice</p>
              <p className="text-xs text-[#394452] mt-0.5">{invoice.period} · Due {invoice.dueDate}</p>
            </div>
            <Badge
              label={paid ? "Paid" : invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
              variant={paid || invoice.status === "paid" ? "green" : invoice.status === "overdue" ? "red" : "yellow"}
            />
          </div>

          <p className="text-3xl font-semibold text-[#091929] mb-4">${invoice.amount.toLocaleString()}</p>

          <div className="space-y-2 mb-4">
            {invoice.lineItems.map((li, i) => (
              <div key={i} className="flex justify-between py-2 border-b border-[#e8dfc9] text-sm">
                <span className="text-[#394452] truncate pr-2">{li.description}</span>
                <span className="text-[#091929] font-medium shrink-0">${li.amount.toLocaleString()}</span>
              </div>
            ))}
            <div className="flex justify-between py-2 text-sm font-semibold">
              <span className="text-[#091929]">Total</span>
              <span className="text-[#091929]">${invoice.amount.toLocaleString()}</span>
            </div>
          </div>

          {!paid && invoice.status !== "paid" && (
            <div className="flex gap-2 flex-wrap">
              <Btn onClick={() => setShowPay(true)}>Pay Now</Btn>
              <Btn variant="ghost">Download PDF</Btn>
            </div>
          )}
          {(paid || invoice.status === "paid") && (
            <div className="flex items-center gap-2 text-sm text-emerald-700">
              <Icon d={ICONS.check} size={16} />
              Payment confirmed
            </div>
          )}
        </Card>
      ) : (
        <Card className="p-0 mb-5">
          <EmptyState icon={<Icon d={ICONS.billing} size={36} />} title="No invoices yet" sub="Invoices will appear here when issued." />
        </Card>
      )}

      {/* Deposit balance */}
      <Card className="p-5 mb-5">
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-sm font-semibold text-[#091929]">Deposit Balance</p>
            <p className="text-xs text-[#394452] mt-0.5">Required minimum: ${client.depositRequired.toLocaleString()}</p>
          </div>
          <p className={`text-lg font-semibold ${client.depositBalance < client.depositRequired ? "text-red-600" : "text-[#091929]"}`}>
            ${client.depositBalance.toLocaleString()}
          </p>
        </div>
        <div className="h-2 bg-[#e8dfc9] rounded-full overflow-hidden mb-3">
          <div className={`h-full rounded-full ${depositPct >= 80 ? "bg-emerald-400" : depositPct >= 50 ? "bg-amber-400" : "bg-red-400"}`}
            style={{ width: `${depositPct}%` }} />
        </div>
        {deposits.length > 0 && (
          <div className="space-y-2 mt-4">
            <p className="text-xs font-semibold text-[#394452] uppercase tracking-wide">Recent Transactions</p>
            {deposits.slice(0, 4).map(d => (
              <div key={d.id} className="flex justify-between text-xs">
                <span className="text-[#394452]">{d.description} · {d.date}</span>
                <span className={`font-semibold ${d.type === "credit" ? "text-emerald-600" : "text-red-600"}`}>
                  {d.type === "credit" ? "+" : "-"}${Math.abs(d.amount).toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        )}
      </Card>

      {/* AutoPay */}
      <Card className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-semibold text-[#091929]">AutoPay</p>
            <p className="text-xs text-[#394452] mt-0.5 max-w-xs">Auto-pay invoices on due date via ACH. No additional fees.</p>
          </div>
          <button onClick={() => setAutoPay(v => !v)}
            className={`relative h-6 w-11 rounded-full transition-colors shrink-0 ${autoPay ? "bg-emerald-500" : "bg-[#e2d9c8]"}`}>
            <span className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${autoPay ? "translate-x-5" : "translate-x-0"}`} />
          </button>
        </div>
      </Card>

      {/* Pay modal */}
      {showPay && invoice && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl w-full max-w-sm p-6 shadow-2xl">
            <p className="text-lg font-semibold text-[#091929] mb-1">Confirm Payment</p>
            <p className="text-sm text-[#394452] mb-5">Pay ${invoice.amount.toLocaleString()} via ACH bank transfer?</p>
            <div className="flex gap-2">
              <Btn onClick={handlePay} disabled={paying} className="flex-1 justify-center">
                {paying ? "Processing…" : "Confirm Payment"}
              </Btn>
              <Btn variant="ghost" onClick={() => setShowPay(false)}>Cancel</Btn>
            </div>
          </div>
        </div>
      )}
    </PageShell>
  );
}
