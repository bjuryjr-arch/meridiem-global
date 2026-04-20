"use client";
import { useState, useEffect, FormEvent } from "react";
import { useClientId, getHiringRequests, saveHiringRequests } from "@/lib/portal/data";
import type { HiringRequest } from "@/lib/portal/types";
import { Card, Badge, PageShell, Btn, Input, Select, Textarea } from "@/components/portal/ui";
import { Icon, ICONS } from "@/components/portal/icons";

const STATUS_VARIANT: Record<string, "slate"|"yellow"|"blue"|"green"> = {
  pending: "slate", in_review: "yellow", sourcing: "blue", placed: "green", closed: "slate",
};
const STATUS_LABELS: Record<string, string> = {
  pending: "Pending", in_review: "In Review", sourcing: "Sourcing", placed: "Placed", closed: "Closed",
};

export default function HirePage() {
  const clientId = useClientId();
  const [existingRequests, setExistingRequests] = useState<HiringRequest[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ roleTitle:"", count:"1", schedule:"", startDate:"", skills:"", responsibilities:"", notes:"" });

  useEffect(() => {
    setExistingRequests(clientId ? getHiringRequests().filter(r => r.clientId === clientId) : []);
  }, [clientId]);

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm(f => ({...f,[k]:e.target.value}));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!clientId || !form.roleTitle.trim()) return;
    setLoading(true);
    setTimeout(() => {
      const req: HiringRequest = {
        id: `hr-${Date.now()}`, clientId,
        roleTitle: form.roleTitle, count: Number(form.count),
        schedule: form.schedule, startDate: form.startDate,
        skills: form.skills, responsibilities: form.responsibilities,
        notes: form.notes, status: "pending",
        createdAt: new Date().toISOString().slice(0, 10),
      };
      const all = getHiringRequests();
      saveHiringRequests([...all, req]);
      setExistingRequests([...existingRequests, req]);
      setLoading(false); setSubmitted(true);
    }, 1000);
  };

  return (
    <PageShell title="Request Additional Hire" sub="Tell us who you need — we handle the rest.">

      {/* Existing requests */}
      {existingRequests.length > 0 && (
        <Card className="p-5 mb-6">
          <p className="text-sm font-semibold text-[#091929] mb-4">Your Active Requests</p>
          <div className="space-y-3">
            {existingRequests.map(r => (
              <div key={r.id} className="flex items-center justify-between p-3 rounded-xl bg-[#f8f3e4]">
                <div>
                  <p className="text-sm font-medium text-[#091929]">{r.roleTitle} ({r.count})</p>
                  <p className="text-xs text-[#394452]">Submitted {r.createdAt} · Target start {r.startDate}</p>
                </div>
                <Badge label={STATUS_LABELS[r.status]} variant={STATUS_VARIANT[r.status]} />
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
          <p className="text-lg font-semibold text-[#091929] mb-1">Request Submitted</p>
          <p className="text-sm text-[#394452] max-w-sm mx-auto">We'll review your requirements and begin sourcing. You'll receive an update within 1–2 business days.</p>
          <Btn variant="secondary" className="mt-6" onClick={() => setSubmitted(false)}>Submit Another Request</Btn>
        </Card>
      ) : (
        <Card className="p-6">
          <p className="text-sm font-semibold text-[#091929] mb-5">New Hiring Request</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Input label="Role Title *" placeholder="e.g. Medical Billing Specialist" value={form.roleTitle} onChange={set("roleTitle")} required />
              <Select label="Number of Hires *" value={form.count} onChange={set("count")}>
                {["1","2","3","4","5"].map(n => <option key={n}>{n}</option>)}
              </Select>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Input label="Schedule / Hours" placeholder="e.g. Mon–Fri 9am–5pm EST" value={form.schedule} onChange={set("schedule")} />
              <Input label="Target Start Date" type="date" value={form.startDate} onChange={set("startDate")} />
            </div>
            <Input label="Required Skills" placeholder="e.g. EHR systems, insurance verification, strong English" value={form.skills} onChange={set("skills")} />
            <Textarea label="Key Responsibilities" placeholder="Describe the main tasks and day-to-day duties…" rows={3} value={form.responsibilities} onChange={set("responsibilities")} />
            <Textarea label="Additional Notes" placeholder="Any other context, preferences, or requirements…" rows={2} value={form.notes} onChange={set("notes")} />
            <Btn type="submit" disabled={loading} className="w-full justify-center" size="lg">
              {loading ? "Submitting…" : "Submit Hiring Request"}
            </Btn>
          </form>
        </Card>
      )}
    </PageShell>
  );
}
