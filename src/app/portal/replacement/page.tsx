"use client";
import { useState, useEffect, FormEvent } from "react";
import { useClientId, getWorkers, getReplacementRequests, saveReplacementRequests } from "@/lib/portal/data";
import type { Worker, ReplacementRequest } from "@/lib/portal/types";
import { Card, Badge, PageShell, Btn, Select, Textarea, EmptyState } from "@/components/portal/ui";
import { Icon, ICONS } from "@/components/portal/icons";

const REASON_OPTIONS = [
  "Performance issues", "Communication difficulties", "Schedule incompatibility",
  "Role mismatch", "Absence / reliability concerns", "Mutual fit — not working out", "Other",
];
const STATUS_VARIANT: Record<string, "slate"|"yellow"|"blue"|"green"> = {
  pending: "slate", in_review: "yellow", sourcing: "blue", placed: "green",
};
const STATUS_LABELS: Record<string, string> = {
  pending: "Pending", in_review: "Under Review", sourcing: "Sourcing", placed: "Replaced",
};

export default function ReplacementPage() {
  const clientId = useClientId();
  const [workers, setWorkers] = useState<Worker[]>([]);
  const [existing, setExisting] = useState<ReplacementRequest[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ workerId: "", reason: REASON_OPTIONS[0], notes: "" });

  useEffect(() => {
    const myWorkers = clientId ? getWorkers().filter(w => w.clientId === clientId && w.status === "active") : [];
    setWorkers(myWorkers);
    setExisting(clientId ? getReplacementRequests().filter(r => r.clientId === clientId) : []);
    if (myWorkers.length > 0) setForm(f => ({ ...f, workerId: myWorkers[0].id }));
  }, [clientId]);

  const set = (k: string) => (e: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const selectedWorker = workers.find(w => w.id === form.workerId);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!clientId || !selectedWorker) return;
    setLoading(true);
    setTimeout(() => {
      const req: ReplacementRequest = {
        id: `rep-${Date.now()}`, clientId,
        workerId: form.workerId, workerName: selectedWorker.name,
        reason: form.reason, notes: form.notes,
        status: "pending", createdAt: new Date().toISOString().slice(0, 10),
      };
      saveReplacementRequests([...getReplacementRequests(), req]);
      setExisting(prev => [...prev, req]);
      setLoading(false); setSubmitted(true);
    }, 1000);
  };

  return (
    <PageShell title="Request a Replacement" sub="We'll source a qualified replacement and manage the handoff.">

      {existing.length > 0 && (
        <Card className="p-5 mb-6">
          <p className="text-sm font-semibold text-[#091929] mb-4">Active Replacement Requests</p>
          <div className="space-y-3">
            {existing.map(r => (
              <div key={r.id} className="flex items-center justify-between p-3 rounded-xl bg-[#f0e9d8]">
                <div>
                  <p className="text-sm font-medium text-[#091929]">{r.workerName}</p>
                  <p className="text-xs text-[#394452]">Reason: {r.reason} · {r.createdAt}</p>
                </div>
                <Badge label={STATUS_LABELS[r.status] ?? r.status} variant={STATUS_VARIANT[r.status] ?? "slate"} />
              </div>
            ))}
          </div>
        </Card>
      )}

      {submitted ? (
        <Card className="p-8 text-center">
          <div className="h-14 w-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
            <Icon d={ICONS.check} size={24} className="text-emerald-600" />
          </div>
          <p className="text-lg font-semibold text-[#091929] mb-1">Replacement Request Submitted</p>
          <p className="text-sm text-[#394452] max-w-sm mx-auto">
            Our team will review your request and begin sourcing. You'll hear from us within 1–2 business days.
          </p>
          <Btn variant="secondary" className="mt-6" onClick={() => setSubmitted(false)}>Submit Another</Btn>
        </Card>
      ) : (
        <Card className="p-6">
          <p className="text-sm font-semibold text-[#091929] mb-5">New Replacement Request</p>
          {workers.length === 0 ? (
            <EmptyState icon={<Icon d={ICONS.team} size={36} />} title="No active workers"
              sub="You need at least one active worker to request a replacement." />
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <Select label="Select Team Member *" value={form.workerId} onChange={set("workerId")}>
                {workers.map(w => <option key={w.id} value={w.id}>{w.name} — {w.role}</option>)}
              </Select>

              {selectedWorker && (
                <div className="p-3.5 rounded-xl bg-[#f0e9d8] border border-[#e2d9c8] flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#091929] flex items-center justify-center text-white text-sm font-semibold shrink-0">
                    {selectedWorker.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#091929]">{selectedWorker.name}</p>
                    <p className="text-xs text-[#394452]">{selectedWorker.role} · Since {selectedWorker.startDate}</p>
                  </div>
                </div>
              )}

              <Select label="Reason for Replacement *" value={form.reason} onChange={set("reason")}>
                {REASON_OPTIONS.map(r => <option key={r}>{r}</option>)}
              </Select>

              <Textarea label="Additional Context" placeholder="Share details to help us find the right replacement…"
                rows={4} value={form.notes} onChange={set("notes")} />

              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-100">
                <p className="text-xs text-amber-700 leading-relaxed">
                  <span className="font-semibold">Note:</span> The current worker remains active until a replacement is confirmed and onboarded.
                </p>
              </div>

              <Btn type="submit" disabled={loading} className="w-full justify-center" size="lg">
                {loading ? "Submitting…" : "Submit Replacement Request"}
              </Btn>
            </form>
          )}
        </Card>
      )}
    </PageShell>
  );
}
