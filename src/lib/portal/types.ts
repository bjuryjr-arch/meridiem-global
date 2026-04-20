export type UserRole = "admin" | "client_owner" | "client_billing" | "client_viewer";

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  clientId?: string;
  avatar?: string;
  mustChangePassword?: boolean;
}

export interface Client {
  id: string;
  name: string;
  industry: string;
  status: "active" | "onboarding" | "paused";
  healthStatus: "green" | "yellow" | "red";
  workerCount: number;
  depositBalance: number;
  depositRequired: number;
  createdAt: string;
  contactName: string;
  contactEmail: string;
}

export interface Worker {
  id: string;
  clientId: string;
  name: string;
  role: string;
  status: "active" | "onboarding" | "inactive";
  startDate: string;
  hoursThisWeek: number;
  activityPct: number;
  onboardingStep: "intake" | "assigned" | "training" | "live";
}

export interface Invoice {
  id: string;
  clientId: string;
  amount: number;
  status: "paid" | "pending" | "overdue" | "draft";
  dueDate: string;
  issuedDate: string;
  paidDate?: string;
  period: string;
  lineItems: { description: string; amount: number }[];
}

export interface Deposit {
  id: string;
  clientId: string;
  amount: number;
  type: "credit" | "debit";
  description: string;
  date: string;
  balance: number;
}

export interface HoursEntry {
  date: string;
  workerId: string;
  workerName: string;
  hours: number;
  activityPct: number;
}

export interface Screenshot {
  id: string;
  workerId: string;
  workerName: string;
  capturedAt: string;
  activityPct: number;
  appName: string;
}

export interface HiringRequest {
  id: string;
  clientId: string;
  roleTitle: string;
  count: number;
  schedule: string;
  startDate: string;
  skills: string;
  responsibilities: string;
  notes: string;
  status: "pending" | "in_review" | "sourcing" | "placed" | "closed";
  createdAt: string;
}

export interface ReplacementRequest {
  id: string;
  clientId: string;
  workerId: string;
  workerName: string;
  reason: string;
  notes: string;
  status: "pending" | "in_review" | "sourcing" | "placed";
  createdAt: string;
}

export interface SupportMessage {
  id: string;
  clientId: string;
  clientName: string;
  category: "complaint" | "compliment" | "billing" | "support" | "feedback";
  message: string;
  aiSummary: string;
  priority: "low" | "medium" | "high";
  status: "open" | "in_progress" | "resolved";
  createdAt: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

export interface Notification {
  id: string;
  type: "invoice" | "payment" | "deposit" | "support" | "hiring";
  message: string;
  read: boolean;
  createdAt: string;
}

export interface AuditLog {
  id: string;
  userId: string;
  userName: string;
  action: string;
  target: string;
  detail: string;
  createdAt: string;
}
