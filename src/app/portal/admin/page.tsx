"use client";
import { useState, useEffect, FormEvent } from "react";
import { useAuth, getClients, saveClients, getWorkers, getAuditLogs, appendAuditLog, StoredUser } from "@/lib/portal/data";
import type { Client } from "@/lib/portal/types";
import { useRouter } from "next/navigation";
import { Card, Badge, PageShell, Btn, Input, Select, Avatar, HealthBadge, EmptyState, SectionHeader } from "@/components/portal/ui";
import { Icon, ICONS } from "@/components/portal/icons";

type AdminTab = "clients" | "users" | "logs";

const ROLE_LABELS: Record<string, string> = {
  admin: "Admin", client_owner: "Owner", client_billing: "Billing", client_viewer: "Viewer",
};
const ROLE_VARIANT: Record<string, "red"|"blue"|"yellow"|"slate"> = {
  admin: "red", client_owner: "blue", client_billing: "yellow", client_viewer: "slate",
};

export default function AdminPage() {
  const { user, setViewAsClientId, createUser, deleteUser, listUsers, updateUserRole } = useAuth();
  const router = useRouter();
  const [tab, setTab] = useState<AdminTab>("clients");
  const [clients, setClients] = useState<Client[]>([]);
  const [users, setUsers] = useState<StoredUser[]>([]);
  const [logs, setLogs] = useState<ReturnType<typeof getAuditLogs>>([]);
  const [search, setSearch] = useState("");

  // New client form
  const [showNewClient, setShowNewClient] = useState(false);
  const [clientForm, setClientForm] = useState({ name: "", industry: "", contactName: "", contactEmail: "" });
  const [clientError, setClientError] = useState("");

  // New user form
  const [showNewUser, setShowNewUser] = useState(false);
  const [userForm, setUserForm] = useState({ name: "", email: "", password: "", role: "client_owner" as StoredUser["role"], clientId: "" });
  const [userError, setUserError] = useState("");
  const [userSuccess, setUserSuccess] = useState("");

  useEffect(() => {
    setClients(getClients());
    setUsers(listUsers());
    setLogs(getAuditLogs());
  }, [tab]);

  if (user?.role !== "admin") {
    return (
      <PageShell title="Access Denied">
        <Card className="p-8 text-center">
          <p className="text-sm text-[#394452]">This page is for Meridiem administrators only.</p>
        </Card>
      </PageShell>
    );
  }

  const filteredClients = clients.filter(c =>
    !search || c.name.toLowerCase().includes(search.toLowerCase()) || c.industry.toLowerCase().includes(search.toLowerCase())
  );

  const viewAsClient = (clientId: string) => {
    setViewAsClientId(clientId);
    router.push("/portal/dashboard");
  };

  const handleCreateClient = (e: FormEvent) => {
    e.preventDefault();
    setClientError("");
    if (!clientForm.name.trim()) { setClientError("Company name is required."); return; }
    if (clients.find(c => c.name.toLowerCase() === clientForm.name.toLowerCase())) {
      setClientError("A client with that name already exists."); return;
    }
    const newClient: Client = {
      id: `c-${Date.now()}`,
      name: clientForm.name.trim(),
      industry: clientForm.industry.trim() || "Other",
      status: "onboarding",
      healthStatus: "green",
      workerCount: 0,
      depositBalance: 0,
      depositRequired: 1000,
      createdAt: new Date().toISOString().slice(0, 10),
      contactName: clientForm.contactName.trim(),
      contactEmail: clientForm.contactEmail.trim(),
    };
    const updated = [...clients, newClient];
    saveClients(updated);
    setClients(updated);
    appendAuditLog(user.id, user.name, "client_created", newClient.id, `Created client: ${newClient.name}`);
    setClientForm({ name: "", industry: "", contactName: "", contactEmail: "" });
    setShowNewClient(false);
  };

  const handleCreateUser = (e: FormEvent) => {
    e.preventDefault();
    setUserError(""); setUserSuccess("");
    if (!userForm.name.trim() || !userForm.email.trim() || !userForm.password.trim()) {
      setUserError("Name, email, and password are required."); return;
    }
    if (userForm.role !== "admin" && !userForm.clientId) {
      setUserError("Select a client for this user."); return;
    }
    const result = createUser({
      name: userForm.name.trim(),
      email: userForm.email.trim(),
      password: userForm.password,
      role: userForm.role,
      clientId: userForm.role !== "admin" ? userForm.clientId : undefined,
      avatar: userForm.name.trim().split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase(),
    });
    if (!result.ok) { setUserError(result.error ?? "Failed to create user."); return; }
    setUserSuccess(`User ${userForm.name} created successfully.`);
    setUserForm({ name: "", email: "", password: "", role: "client_owner", clientId: "" });
    setUsers(listUsers());
  };

  const handleDeleteUser = (id: string, name: string) => {
    if (!confirm(`Remove user "${name}"? This cannot be undone.`)) return;
    deleteUser(id);
    setUsers(listUsers());
    appendAuditLog(user.id, user.name, "user_deleted", id, `Removed user ${name}`);
  };

  const setf = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setClientForm(f => ({ ...f, [k]: e.target.value }));
  const setuf = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setUserForm(f => ({ ...f, [k]: e.target.value }));

  const tabs: { id: AdminTab; label: string }[] = [
    { id: "clients", label: "Clients" },
    { id: "users",   label: "User Accounts" },
    { id: "logs",    label: "Audit Logs" },
  ];

  return (
    <PageShell
      title="Admin Dashboard"
      sub="Manage clients, users, and platform activity"
      action={
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#091929] rounded-xl">
          <div className="h-2 w-2 rounded-full bg-[#c8a96e]" />
          <span className="text-xs text-white font-medium">Admin Mode</span>
        </div>
      }
    >
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
        <Card className="p-4">
          <p className="text-xs text-[#394452] uppercase tracking-wide mb-1">Clients</p>
          <p className="text-2xl font-semibold text-[#091929]">{clients.length}</p>
          <p className="text-xs text-[#7a8694] mt-0.5">{clients.filter(c => c.status === "active").length} active</p>
        </Card>
        <Card className="p-4">
          <p className="text-xs text-[#394452] uppercase tracking-wide mb-1">Users</p>
          <p className="text-2xl font-semibold text-[#091929]">{users.length}</p>
          <p className="text-xs text-[#7a8694] mt-0.5">{users.filter(u => u.role !== "admin").length} client users</p>
        </Card>
        <Card className="p-4 col-span-2 md:col-span-1">
          <p className="text-xs text-[#394452] uppercase tracking-wide mb-1">Workers</p>
          <p className="text-2xl font-semibold text-[#091929]">{getWorkers().length}</p>
          <p className="text-xs text-[#7a8694] mt-0.5">{getWorkers().filter(w => w.status === "active").length} active</p>
        </Card>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 p-1 bg-[#e8dfc9] rounded-xl mb-5 overflow-x-auto">
        {tabs.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className={`px-4 py-1.5 text-sm font-medium rounded-lg whitespace-nowrap transition-all ${
              tab === t.id ? "bg-white text-[#091929] shadow-sm" : "text-[#394452] hover:text-[#091929]"
            }`}>
            {t.label}
          </button>
        ))}
      </div>

      {/* ── Clients ─────────────────────────────────────────────────────────── */}
      {tab === "clients" && (
        <div className="space-y-4">
          <div className="flex gap-3 flex-wrap">
            <div className="relative flex-1 min-w-48">
              <Icon d={ICONS.search} size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7a8694]" />
              <input value={search} onChange={e => setSearch(e.target.value)}
                placeholder="Search clients…"
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-[#e2d9c8] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#091929]/20 focus:border-[#091929]" />
            </div>
            <Btn onClick={() => setShowNewClient(v => !v)}>
              <Icon d={ICONS.plus} size={14} />
              New Client
            </Btn>
          </div>

          {/* New client form */}
          {showNewClient && (
            <Card className="p-5">
              <p className="text-sm font-semibold text-[#091929] mb-4">Add New Client</p>
              <form onSubmit={handleCreateClient} className="space-y-3">
                <div className="grid md:grid-cols-2 gap-3">
                  <Input label="Company Name *" value={clientForm.name} onChange={setf("name")} placeholder="Acme Corp" />
                  <Input label="Industry" value={clientForm.industry} onChange={setf("industry")} placeholder="Healthcare, Finance…" />
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  <Input label="Primary Contact Name" value={clientForm.contactName} onChange={setf("contactName")} placeholder="Jane Smith" />
                  <Input label="Contact Email" type="email" value={clientForm.contactEmail} onChange={setf("contactEmail")} placeholder="jane@company.com" />
                </div>
                {clientError && <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg">{clientError}</p>}
                <div className="flex gap-2 pt-1">
                  <Btn type="submit">Create Client</Btn>
                  <Btn variant="ghost" onClick={() => { setShowNewClient(false); setClientError(""); }}>Cancel</Btn>
                </div>
              </form>
            </Card>
          )}

          {filteredClients.length === 0 ? (
            <Card className="p-0">
              <EmptyState icon={<Icon d={ICONS.building} size={36} />} title="No clients yet"
                sub="Create your first client using the button above." />
            </Card>
          ) : (
            filteredClients.map(client => {
              const workers = getWorkers().filter(w => w.clientId === client.id);
              const depositPct = client.depositRequired > 0
                ? Math.min(100, Math.round((client.depositBalance / client.depositRequired) * 100))
                : 100;
              return (
                <Card key={client.id} className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-[#091929] flex items-center justify-center text-white text-sm font-bold shrink-0">
                        {client.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#091929]">{client.name}</p>
                        <p className="text-xs text-[#394452]">{client.industry} · {client.contactEmail || "No contact"}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <HealthBadge status={client.healthStatus} />
                      <Badge label={client.status} variant={client.status === "active" ? "green" : "yellow"} />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="text-center p-2 bg-[#f0e9d8] rounded-xl">
                      <p className="text-base font-semibold text-[#091929]">{workers.length}</p>
                      <p className="text-[10px] text-[#394452]">Workers</p>
                    </div>
                    <div className="text-center p-2 bg-[#f0e9d8] rounded-xl">
                      <p className={`text-base font-semibold ${client.depositBalance < client.depositRequired ? "text-red-600" : "text-[#091929]"}`}>
                        ${client.depositBalance.toLocaleString()}
                      </p>
                      <p className="text-[10px] text-[#394452]">Deposit</p>
                    </div>
                    <div className="text-center p-2 bg-[#f0e9d8] rounded-xl">
                      <p className="text-base font-semibold text-[#091929]">{depositPct}%</p>
                      <p className="text-[10px] text-[#394452]">Funded</p>
                    </div>
                  </div>

                  <div className="flex gap-2 flex-wrap">
                    <Btn size="sm" onClick={() => viewAsClient(client.id)}>
                      <Icon d={ICONS.eye} size={14} /> View as Client
                    </Btn>
                    <Btn size="sm" variant="ghost">Edit</Btn>
                  </div>
                </Card>
              );
            })
          )}
        </div>
      )}

      {/* ── Users ────────────────────────────────────────────────────────────── */}
      {tab === "users" && (
        <div className="space-y-4">
          <div className="flex justify-end">
            <Btn onClick={() => { setShowNewUser(v => !v); setUserError(""); setUserSuccess(""); }}>
              <Icon d={ICONS.plus} size={14} /> Add User
            </Btn>
          </div>

          {showNewUser && (
            <Card className="p-5">
              <p className="text-sm font-semibold text-[#091929] mb-4">Create User Account</p>
              <form onSubmit={handleCreateUser} className="space-y-3">
                <div className="grid md:grid-cols-2 gap-3">
                  <Input label="Full Name *" value={userForm.name} onChange={setuf("name")} placeholder="Jane Smith" />
                  <Input label="Email *" type="email" value={userForm.email} onChange={setuf("email")} placeholder="jane@company.com" />
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  <Input label="Password *" type="password" value={userForm.password} onChange={setuf("password")} placeholder="Set a password" />
                  <Select label="Role *" value={userForm.role} onChange={setuf("role")}>
                    <option value="client_owner">Owner</option>
                    <option value="client_billing">Billing</option>
                    <option value="client_viewer">Viewer</option>
                    <option value="admin">Admin</option>
                  </Select>
                </div>
                {userForm.role !== "admin" && (
                  <Select label="Assign to Client *" value={userForm.clientId} onChange={setuf("clientId")}>
                    <option value="">— Select a client —</option>
                    {clients.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                  </Select>
                )}
                {userError && <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg">{userError}</p>}
                {userSuccess && <p className="text-sm text-emerald-700 bg-emerald-50 px-3 py-2 rounded-lg">{userSuccess}</p>}
                <div className="flex gap-2 pt-1">
                  <Btn type="submit">Create User</Btn>
                  <Btn variant="ghost" onClick={() => { setShowNewUser(false); setUserError(""); setUserSuccess(""); }}>Cancel</Btn>
                </div>
              </form>
            </Card>
          )}

          {users.length === 0 ? (
            <Card className="p-0">
              <EmptyState icon={<Icon d={ICONS.users} size={36} />} title="No users yet" sub="Add your first user with the button above." />
            </Card>
          ) : (
            <Card className="overflow-hidden p-0">
              <div className="divide-y divide-[#e8dfc9]">
                {users.map(u => {
                  const clientName = clients.find(c => c.id === u.clientId)?.name;
                  return (
                    <div key={u.id} className="flex items-center justify-between px-5 py-4 hover:bg-[#f8f3e4] transition-colors">
                      <div className="flex items-center gap-3 min-w-0">
                        <Avatar initials={u.avatar} size="sm" />
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-[#091929] truncate">{u.name}</p>
                          <p className="text-xs text-[#394452] truncate">{u.email}{clientName ? ` · ${clientName}` : ""}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <Badge label={ROLE_LABELS[u.role] ?? u.role} variant={ROLE_VARIANT[u.role] ?? "slate"} />
                        {u.id !== user.id && (
                          <button
                            onClick={() => handleDeleteUser(u.id, u.name)}
                            className="text-xs text-[#7a8694] hover:text-red-500 transition ml-1 p-1"
                            title="Remove user">
                            <Icon d={ICONS.x} size={14} />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          )}
        </div>
      )}

      {/* ── Audit Logs ───────────────────────────────────────────────────────── */}
      {tab === "logs" && (
        <Card className="p-0 overflow-hidden">
          {logs.length === 0 ? (
            <EmptyState icon={<Icon d={ICONS.log} size={36} />} title="No activity yet" sub="Actions taken in the portal will appear here." />
          ) : (
            <div className="divide-y divide-[#e8dfc9]">
              {logs.map(log => (
                <div key={log.id} className="flex items-start gap-3 px-5 py-3.5 hover:bg-[#f8f3e4] transition-colors">
                  <Avatar initials={log.userName.split(" ").map(n => n[0]).join("").slice(0, 2)} size="sm" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-medium text-[#091929]">{log.userName}</span>
                      <Badge label={log.action.replace(/_/g, " ")} variant="slate" />
                      {log.target && log.target !== "-" && (
                        <span className="text-xs text-[#7a8694]">→ {log.target}</span>
                      )}
                    </div>
                    <p className="text-xs text-[#394452] mt-0.5">{log.detail}</p>
                  </div>
                  <span className="text-xs text-[#7a8694] shrink-0 tabular-nums">
                    {new Date(log.createdAt).toLocaleString([], { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}
                  </span>
                </div>
              ))}
            </div>
          )}
        </Card>
      )}
    </PageShell>
  );
}
