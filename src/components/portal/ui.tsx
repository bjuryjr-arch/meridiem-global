import { ReactNode } from "react";

// ─── Meridiem Brand Tokens ────────────────────────────────────────────────────
// Background:   #f8f3e4   soft cream — all page surfaces
// Surface:      #ffffff   cards — elevated above cream
// Primary:      #091929   deep navy — headings, primary text, nav, buttons
// Secondary:    #394452   muted slate — secondary text, icons, labels
// Muted:        #7a8694   low-emphasis — placeholders, metadata
// Border:       #e2d9c8   warm card / input border
// Inner:        #f0e9d8   inner panels, row hover, tag backgrounds
// Divider:      #e8dfc9   table rows, section separators
// Shadow:       rgba(9,25,41,0.08)  — warm navy-tinted card shadow

// ── Card ─────────────────────────────────────────────────────────────────────
export function Card({ children, className = "", onClick }: { children: ReactNode; className?: string; onClick?: () => void }) {
  return (
    <div onClick={onClick}
      className={`bg-white rounded-2xl border border-[#e2d9c8] shadow-[0_1px_4px_rgba(9,25,41,0.08),0_0_0_0px_transparent] ${onClick ? "cursor-pointer hover:shadow-[0_4px_16px_rgba(9,25,41,0.12)] hover:border-[#c8bfb0] transition-all" : ""} ${className}`}>
      {children}
    </div>
  );
}

// ── Badge ─────────────────────────────────────────────────────────────────────
type BadgeVariant = "green" | "yellow" | "red" | "blue" | "slate" | "purple";
const badgeStyles: Record<BadgeVariant, string> = {
  green:  "bg-emerald-50 text-emerald-700 border-emerald-200",
  yellow: "bg-amber-50 text-amber-700 border-amber-200",
  red:    "bg-red-50 text-red-700 border-red-200",
  blue:   "bg-blue-50 text-blue-700 border-blue-200",
  slate:  "bg-[#f0e9d8] text-[#394452] border-[#e2d9c8]",
  purple: "bg-purple-50 text-purple-700 border-purple-200",
};
export function Badge({ label, variant = "slate" }: { label: string; variant?: BadgeVariant }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${badgeStyles[variant]}`}>
      {label}
    </span>
  );
}

// ── StatusDot ─────────────────────────────────────────────────────────────────
const dotColors = { green: "bg-emerald-400", yellow: "bg-amber-400", red: "bg-red-400", blue: "bg-blue-400", slate: "bg-[#7a8694]" };
export function StatusDot({ color }: { color: keyof typeof dotColors }) {
  return <span className={`inline-block h-2 w-2 rounded-full ${dotColors[color]}`} />;
}

// ── StatCard ──────────────────────────────────────────────────────────────────
export function StatCard({ label, value, sub, accent, icon, className = "" }: {
  label: string; value: string; sub?: string; accent?: string; icon?: ReactNode; className?: string;
}) {
  return (
    <Card className={`p-5 ${className}`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[11px] font-semibold text-[#7a8694] uppercase tracking-wider">{label}</p>
          <p className={`mt-1.5 text-2xl font-semibold tracking-tight ${accent ?? "text-[#091929]"}`}>{value}</p>
          {sub && <p className="mt-0.5 text-xs text-[#7a8694]">{sub}</p>}
        </div>
        {icon && <div className="text-[#394452] opacity-40 mt-0.5">{icon}</div>}
      </div>
    </Card>
  );
}

// ── SectionHeader ─────────────────────────────────────────────────────────────
export function SectionHeader({ title, sub, action }: { title: string; sub?: string; action?: ReactNode }) {
  return (
    <div className="flex items-start justify-between mb-5">
      <div>
        <h2 className="text-base font-semibold text-[#091929]">{title}</h2>
        {sub && <p className="text-sm text-[#7a8694] mt-0.5">{sub}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}

// ── Btn ───────────────────────────────────────────────────────────────────────
type BtnVariant = "primary" | "secondary" | "ghost" | "danger";
const btnStyles: Record<BtnVariant, string> = {
  primary:   "bg-[#091929] text-white hover:bg-[#091929] active:bg-[#091929] shadow-sm hover:shadow-md",
  secondary: "bg-white text-[#091929] border border-[#091929]/25 hover:bg-[#f0e9d8] hover:border-[#091929]/40",
  ghost:     "border border-[#e2d9c8] text-[#394452] hover:bg-[#f0e9d8] hover:border-[#c8bfb0]",
  danger:    "bg-red-50 text-red-700 hover:bg-red-100 border border-red-200",
};
export function Btn({ children, variant = "primary", onClick, type = "button", disabled, className = "", size = "md" }: {
  children: ReactNode; variant?: BtnVariant; onClick?: () => void;
  type?: "button" | "submit"; disabled?: boolean; className?: string; size?: "sm" | "md" | "lg";
}) {
  const sizes = { sm: "px-3 py-1.5 text-xs gap-1.5", md: "px-4 py-2.5 text-sm", lg: "px-6 py-3 text-sm font-medium" };
  return (
    <button type={type} onClick={onClick} disabled={disabled}
      className={`inline-flex items-center gap-2 rounded-xl font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed ${sizes[size]} ${btnStyles[variant]} ${className}`}>
      {children}
    </button>
  );
}

// ── Input ─────────────────────────────────────────────────────────────────────
export function Input({ label, ...props }: { label?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && <label className="text-sm font-medium text-[#091929]">{label}</label>}
      <input {...props}
        className={`w-full rounded-xl border border-[#e2d9c8] bg-white px-3.5 py-2.5 text-sm text-[#091929] placeholder:text-[#7a8694] focus:outline-none focus:ring-2 focus:ring-[#091929]/12 focus:border-[#091929]/40 transition ${props.className ?? ""}`} />
    </div>
  );
}

// ── Select ────────────────────────────────────────────────────────────────────
export function Select({ label, children, ...props }: { label?: string; children: ReactNode } & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && <label className="text-sm font-medium text-[#091929]">{label}</label>}
      <select {...props}
        className={`w-full rounded-xl border border-[#e2d9c8] px-3.5 py-2.5 text-sm text-[#091929] bg-white focus:outline-none focus:ring-2 focus:ring-[#091929]/12 focus:border-[#091929]/40 transition ${props.className ?? ""}`}>
        {children}
      </select>
    </div>
  );
}

// ── Textarea ──────────────────────────────────────────────────────────────────
export function Textarea({ label, ...props }: { label?: string } & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && <label className="text-sm font-medium text-[#091929]">{label}</label>}
      <textarea {...props}
        className={`w-full rounded-xl border border-[#e2d9c8] bg-white px-3.5 py-2.5 text-sm text-[#091929] placeholder:text-[#7a8694] focus:outline-none focus:ring-2 focus:ring-[#091929]/12 focus:border-[#091929]/40 transition resize-none ${props.className ?? ""}`} />
    </div>
  );
}

// ── Avatar ────────────────────────────────────────────────────────────────────
export function Avatar({ initials, size = "md", color = "navy" }: { initials: string; size?: "sm" | "md" | "lg"; color?: "navy" | "slate" | "emerald" }) {
  const sizes = { sm: "h-8 w-8 text-xs", md: "h-10 w-10 text-sm", lg: "h-12 w-12 text-base" };
  const colors = { navy: "bg-[#091929] text-white", slate: "bg-[#e2d9c8] text-[#394452]", emerald: "bg-emerald-100 text-emerald-700" };
  return (
    <div className={`flex items-center justify-center rounded-full font-semibold shrink-0 ${sizes[size]} ${colors[color]}`}>
      {initials.slice(0, 2).toUpperCase()}
    </div>
  );
}

// ── EmptyState ────────────────────────────────────────────────────────────────
export function EmptyState({ icon, title, sub }: { icon: ReactNode; title: string; sub?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center px-6">
      <div className="text-[#394452] opacity-20 mb-4">{icon}</div>
      <p className="text-sm font-semibold text-[#394452]">{title}</p>
      {sub && <p className="text-xs text-[#7a8694] mt-2 max-w-xs leading-relaxed">{sub}</p>}
    </div>
  );
}

// ── ActivityBar ───────────────────────────────────────────────────────────────
export function ActivityBar({ pct }: { pct: number }) {
  const color = pct >= 80 ? "bg-emerald-400" : pct >= 60 ? "bg-amber-400" : "bg-red-400";
  return (
    <div className="flex items-center gap-2">
      <div className="h-1.5 w-20 rounded-full bg-[#e8dfc9] overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
      <span className="text-xs text-[#7a8694] tabular-nums">{pct}%</span>
    </div>
  );
}

// ── HealthBadge ───────────────────────────────────────────────────────────────
export function HealthBadge({ status }: { status: "green" | "yellow" | "red" }) {
  return (
    <Badge
      label={status === "green" ? "Healthy" : status === "yellow" ? "Needs Attention" : "Action Required"}
      variant={status === "green" ? "green" : status === "yellow" ? "yellow" : "red"}
    />
  );
}

// ── PageShell ─────────────────────────────────────────────────────────────────
export function PageShell({ title, sub, action, children }: { title: string; sub?: string; action?: ReactNode; children: ReactNode }) {
  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto min-h-screen">
      <div className="flex items-start justify-between mb-7">
        <div>
          <h1 className="text-xl font-semibold text-[#091929] tracking-tight">{title}</h1>
          {sub && <p className="text-sm text-[#7a8694] mt-0.5">{sub}</p>}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
      {children}
    </div>
  );
}
