"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import type {
  AuthUser, Client, Worker, Invoice, Deposit,
  HoursEntry, Screenshot, HiringRequest, SupportMessage,
  Notification, AuditLog, ReplacementRequest,
} from "./types";

// ─── Storage helpers ──────────────────────────────────────────────────────────

function load<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function save<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(value));
}

// ─── Stored user type ─────────────────────────────────────────────────────────

export interface StoredUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: AuthUser["role"];
  clientId?: string;
  avatar: string;
  createdAt: string;
  mustChangePassword?: boolean;
}

// ─── Seed — runs once on first load ──────────────────────────────────────────

function ensureSeedUsers(): StoredUser[] {
  const existing = load<StoredUser[]>("mg_users", []);
  if (existing.length > 0) return existing;
  const seeded: StoredUser[] = [
    {
      id: "admin-1",
      name: "Ben",
      email: "ben@meridiemglobal.com",
      password: "Meridiem2025!",
      role: "admin",
      avatar: "BM",
      createdAt: new Date().toISOString(),
      mustChangePassword: true,
    },
  ];
  save("mg_users", seeded);
  return seeded;
}

// ─── Data accessors ───────────────────────────────────────────────────────────

export function getClients(): Client[] { return load<Client[]>("mg_clients", []); }
export function saveClients(c: Client[]) { save("mg_clients", c); }

export function getWorkers(): Worker[] { return load<Worker[]>("mg_workers", []); }
export function saveWorkers(w: Worker[]) { save("mg_workers", w); }

export function getInvoices(): Invoice[] { return load<Invoice[]>("mg_invoices", []); }
export function saveInvoices(i: Invoice[]) { save("mg_invoices", i); }

export function getDeposits(): Deposit[] { return load<Deposit[]>("mg_deposits", []); }
export function saveDeposits(d: Deposit[]) { save("mg_deposits", d); }

export function getHours(): HoursEntry[] { return load<HoursEntry[]>("mg_hours", []); }
export function saveHours(h: HoursEntry[]) { save("mg_hours", h); }

export function getScreenshots(): Screenshot[] { return load<Screenshot[]>("mg_screenshots", []); }
export function saveScreenshots(s: Screenshot[]) { save("mg_screenshots", s); }

export function getHiringRequests(): HiringRequest[] { return load<HiringRequest[]>("mg_hiring", []); }
export function saveHiringRequests(h: HiringRequest[]) { save("mg_hiring", h); }

export function getReplacementRequests(): ReplacementRequest[] { return load<ReplacementRequest[]>("mg_replacements", []); }
export function saveReplacementRequests(r: ReplacementRequest[]) { save("mg_replacements", r); }

export function getSupportMessages(): SupportMessage[] { return load<SupportMessage[]>("mg_support", []); }
export function saveSupportMessages(s: SupportMessage[]) { save("mg_support", s); }

export function getNotifications(): Notification[] { return load<Notification[]>("mg_notifications", []); }

export function getAuditLogs(): AuditLog[] { return load<AuditLog[]>("mg_audit", []); }
export function saveAuditLogs(a: AuditLog[]) { save("mg_audit", a); }

export function appendAuditLog(userId: string, userName: string, action: string, target: string, detail: string) {
  const logs = getAuditLogs();
  logs.unshift({ id: `al-${Date.now()}`, userId, userName, action, target, detail, createdAt: new Date().toISOString() });
  saveAuditLogs(logs.slice(0, 200));
}

function getStoredUsers(): StoredUser[] { return load<StoredUser[]>("mg_users", []); }
function saveStoredUsers(u: StoredUser[]) { save("mg_users", u); }

// ─── Auth Context ─────────────────────────────────────────────────────────────

interface AuthContextValue {
  user: AuthUser | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  changePassword: (newPassword: string) => void;
  viewAsClientId: string | null;
  setViewAsClientId: (id: string | null) => void;
  createUser: (data: Omit<StoredUser, "id" | "createdAt">) => { ok: boolean; error?: string };
  deleteUser: (id: string) => void;
  listUsers: () => StoredUser[];
  updateUserRole: (id: string, role: AuthUser["role"], clientId?: string) => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [viewAsClientId, setViewAsClientId] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    ensureSeedUsers();
    const stored = localStorage.getItem("mg_session");
    if (stored) {
      try { setUser(JSON.parse(stored)); } catch { /* ignore */ }
    }
    setReady(true);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    const users = getStoredUsers();
    const found = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    if (!found) return false;
    const { password: _pw, ...authUser } = found;
    setUser(authUser);
    localStorage.setItem("mg_session", JSON.stringify(authUser));
    appendAuditLog(authUser.id, authUser.name, "login", "-", "User signed in");
    return true;
  };

  const logout = () => {
    setUser(null);
    setViewAsClientId(null);
    localStorage.removeItem("mg_session");
  };

  const changePassword = (newPassword: string) => {
    if (!user) return;
    const users = getStoredUsers();
    const updated = users.map(u =>
      u.id === user.id ? { ...u, password: newPassword, mustChangePassword: false } : u
    );
    saveStoredUsers(updated);
    const updatedSession = { ...user, mustChangePassword: false };
    setUser(updatedSession);
    localStorage.setItem("mg_session", JSON.stringify(updatedSession));
    appendAuditLog(user.id, user.name, "password_changed", "-", "User changed password");
  };

  const createUser = (data: Omit<StoredUser, "id" | "createdAt">): { ok: boolean; error?: string } => {
    const users = getStoredUsers();
    if (users.find(u => u.email.toLowerCase() === data.email.toLowerCase())) {
      return { ok: false, error: "A user with that email already exists." };
    }
    const newUser: StoredUser = { ...data, id: `u-${Date.now()}`, createdAt: new Date().toISOString() };
    saveStoredUsers([...users, newUser]);
    appendAuditLog(user?.id ?? "system", user?.name ?? "system", "user_created", newUser.email, `Created ${newUser.name} (${newUser.role})`);
    return { ok: true };
  };

  const deleteUser = (id: string) => {
    saveStoredUsers(getStoredUsers().filter(u => u.id !== id));
  };

  const listUsers = (): StoredUser[] => getStoredUsers();

  const updateUserRole = (id: string, role: AuthUser["role"], clientId?: string) => {
    saveStoredUsers(getStoredUsers().map(u => u.id === id ? { ...u, role, clientId } : u));
  };

  if (!ready) return null;

  return (
    <AuthContext.Provider value={{ user, login, logout, changePassword, viewAsClientId, setViewAsClientId, createUser, deleteUser, listUsers, updateUserRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

export function useClientId() {
  const { user, viewAsClientId } = useAuth();
  return viewAsClientId ?? user?.clientId ?? null;
}

// ─── Legacy empty exports (keeps old MOCK_* imports from breaking) ────────────
export const MOCK_CLIENTS: Client[] = [];
export const MOCK_WORKERS: Worker[] = [];
export const MOCK_INVOICES: Invoice[] = [];
export const MOCK_DEPOSITS: Deposit[] = [];
export const MOCK_HOURS: HoursEntry[] = [];
export const MOCK_SCREENSHOTS: Screenshot[] = [];
export const MOCK_HIRING_REQUESTS: HiringRequest[] = [];
export const MOCK_REPLACEMENT_REQUESTS: ReplacementRequest[] = [];
export const MOCK_SUPPORT_MESSAGES: SupportMessage[] = [];
export const MOCK_NOTIFICATIONS: Notification[] = [];
export const MOCK_AUDIT_LOGS: AuditLog[] = [];
