"use client";
import { useState, useEffect } from "react";
import { useClientId, getInvoices } from "@/lib/portal/data";
import type { Invoice } from "@/lib/portal/types";
import { Card, Badge, PageShell, Btn, EmptyState } from "@/components/portal/ui";
import { Icon, ICONS } from "@/components/portal/icons";

const STATUS_VARIANT: Record<string, "green"|"yellow"|"red"|"slate"> = {
  paid: "green", pending: "yellow", overdue: "red", draft: "slate",
};

export default function InvoicesPage() {
  const clientId = useClientId();
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  useEffect(() => {
    setInvoices(clientId ? getInvoices().filter(i => i.clientId === clientId) : []);
  }, [clientId]);

  const totalPaid = invoices.filter(i => i.status === "paid").reduce((s, i) => s + i.amount, 0);
  const totalPending = invoices.filter(i => i.status !== "paid").reduce((s, i) => s + i.amount, 0);

  return (
    <PageShell title="Invoice History" sub="All invoices for your account">

      {invoices.length > 0 && (
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Card className="p-4">
            <p className="text-xs text-[#394452] uppercase tracking-wide mb-1">Total Paid</p>
            <p className="text-2xl font-semibold text-emerald-600">${totalPaid.toLocaleString()}</p>
            <p className="text-xs text-[#7a8694] mt-0.5">{invoices.filter(i => i.status === "paid").length} invoices</p>
          </Card>
          <Card className="p-4">
            <p className="text-xs text-[#394452] uppercase tracking-wide mb-1">Outstanding</p>
            <p className={`text-2xl font-semibold ${totalPending > 0 ? "text-amber-600" : "text-[#091929]"}`}>
              ${totalPending.toLocaleString()}
            </p>
            <p className="text-xs text-[#7a8694] mt-0.5">{invoices.filter(i => i.status !== "paid").length} pending</p>
          </Card>
        </div>
      )}

      {invoices.length === 0 ? (
        <Card className="p-0">
          <EmptyState icon={<Icon d={ICONS.invoices} size={36} />} title="No invoices yet"
            sub="Invoices will appear here once they are issued." />
        </Card>
      ) : (
        <>
          {/* Desktop table */}
          <Card className="hidden md:block overflow-hidden p-0">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#e8dfc9]">
                  {["Invoice", "Period", "Amount", "Due Date", "Status", ""].map(h => (
                    <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-[#394452] uppercase tracking-wide">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e8dfc9]">
                {invoices.map(inv => (
                  <tr key={inv.id} className="hover:bg-[#f8f3e4] transition-colors">
                    <td className="px-5 py-3.5 font-mono text-xs text-[#394452]">{inv.id.toUpperCase()}</td>
                    <td className="px-5 py-3.5 text-[#091929]">{inv.period}</td>
                    <td className="px-5 py-3.5 font-semibold text-[#091929]">${inv.amount.toLocaleString()}</td>
                    <td className="px-5 py-3.5 text-[#394452]">{inv.dueDate}</td>
                    <td className="px-5 py-3.5"><Badge label={inv.status} variant={STATUS_VARIANT[inv.status]} /></td>
                    <td className="px-5 py-3.5">
                      <Btn size="sm" variant="ghost">
                        <Icon d={ICONS.download} size={13} /> PDF
                      </Btn>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>

          {/* Mobile cards */}
          <div className="md:hidden space-y-3">
            {invoices.map(inv => (
              <Card key={inv.id} className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-sm font-semibold text-[#091929]">{inv.period}</p>
                    <p className="text-xs font-mono text-[#7a8694]">{inv.id.toUpperCase()}</p>
                  </div>
                  <Badge label={inv.status} variant={STATUS_VARIANT[inv.status]} />
                </div>
                <p className="text-xl font-semibold text-[#091929] mb-1">${inv.amount.toLocaleString()}</p>
                <p className="text-xs text-[#394452]">Due: {inv.dueDate}</p>
                <div className="mt-3">
                  <Btn size="sm" variant="ghost">
                    <Icon d={ICONS.download} size={13} /> Download PDF
                  </Btn>
                </div>
              </Card>
            ))}
          </div>
        </>
      )}
    </PageShell>
  );
}
