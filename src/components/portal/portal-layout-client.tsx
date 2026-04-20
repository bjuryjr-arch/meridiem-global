"use client";
import { ReactNode, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { AuthProvider, useAuth, getClients } from "@/lib/portal/data";
import { Icon, ICONS } from "./icons";
import { Avatar } from "./ui";

// Full nav — visible in sidebar
const NAV_ITEMS = [
  { href: "/portal/dashboard",    label: "Dashboard",       icon: ICONS.dashboard },
  { href: "/portal/team",         label: "My Team",         icon: ICONS.team },
  { href: "/portal/hours",        label: "Hours & Activity",icon: ICONS.hours },
  { href: "/portal/screenshots",  label: "Screenshots",     icon: ICONS.screenshots },
  { href: "/portal/billing",      label: "Billing",         icon: ICONS.billing },
  { href: "/portal/invoices",     label: "Invoice History", icon: ICONS.invoices },
  { href: "/portal/hire",         label: "Requests",        icon: ICONS.hire },
  { href: "/portal/support",      label: "Chat & Support",  icon: ICONS.support },
  { href: "/portal/settings",     label: "Settings",        icon: ICONS.settings },
];

// Mobile bottom bar — 5 primary items
const MOBILE_NAV = [
  { href: "/portal/dashboard",   label: "Home",     icon: ICONS.dashboard },
  { href: "/portal/team",        label: "Team",     icon: ICONS.team },
  { href: "/portal/hours",       label: "Hours",    icon: ICONS.hours },
  { href: "/portal/billing",     label: "Billing",  icon: ICONS.billing },
  { href: "/portal/support",     label: "Chat",     icon: ICONS.support },
];

// ─── Sidebar ──────────────────────────────────────────────────────────────────
function Sidebar({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname();
  const { user, logout, viewAsClientId, setViewAsClientId } = useAuth();
  const router = useRouter();
  const isAdmin = user?.role === "admin";

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  const handleLogout = () => { logout(); router.push("/portal/login"); };

  const exitViewAs = () => { setViewAsClientId(null); router.push("/portal/admin"); };

  return (
    <div className="flex flex-col h-full bg-[#091929] text-white w-60 shrink-0">
      {/* Logo */}
      <div className="px-5 py-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <Image src="/meridiem-logo.png" alt="Meridiem Global" width={36} height={36}
            className="rounded-lg object-contain shrink-0" style={{ background: "transparent" }} />
          <div>
            <p className="text-sm font-semibold text-white leading-none">Meridiem Global</p>
            <p className="text-[10px] text-white/40 mt-0.5 uppercase tracking-widest">Client Portal</p>
          </div>
        </div>
      </div>

      {/* View-as-client banner */}
      {isAdmin && viewAsClientId && (
        <button
          onClick={exitViewAs}
          className="mx-3 mt-3 px-3 py-2 bg-amber-500/20 rounded-xl border border-amber-400/30 text-left hover:bg-amber-500/30 transition-colors"
        >
          <p className="text-[10px] font-bold text-amber-300 uppercase tracking-widest">Viewing as Client</p>
          <p className="text-[10px] text-amber-200/60 mt-0.5">Tap to exit client view</p>
        </button>
      )}
      {isAdmin && !viewAsClientId && (
        <div className="mx-3 mt-3 px-3 py-2 bg-amber-500/10 rounded-xl border border-amber-400/20">
          <p className="text-[10px] font-semibold text-amber-300 uppercase tracking-widest">Admin Mode</p>
        </div>
      )}

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-3 space-y-0.5">
        {isAdmin && (
          <>
            <NavItem href="/portal/admin" label="Admin Panel" icon={ICONS.admin}
              active={isActive("/portal/admin")} onClose={onClose} />
            <div className="my-2 border-t border-white/10" />
          </>
        )}
        {NAV_ITEMS.map(item => (
          <NavItem key={item.href} href={item.href} label={item.label} icon={item.icon}
            active={isActive(item.href)} onClose={onClose} />
        ))}
      </nav>

      {/* User footer */}
      <div className="px-3 pb-4 border-t border-white/10 pt-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5 min-w-0">
            <Avatar initials={user?.name?.split(" ").map(n => n[0]).join("") ?? "U"} size="sm" />
            <div className="min-w-0">
              <p className="text-xs font-medium text-white truncate">{user?.name}</p>
              <p className="text-[10px] text-white/40 truncate capitalize">{user?.role.replace(/_/g, " ")}</p>
            </div>
          </div>
          <button onClick={handleLogout}
            className="text-white/30 hover:text-white/70 transition p-1.5 rounded-lg hover:bg-white/10"
            title="Sign out">
            <Icon d={ICONS.logout} size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}

function NavItem({ href, label, icon, active, onClose }: {
  href: string; label: string; icon: string; active: boolean; onClose?: () => void;
}) {
  return (
    <Link href={href} onClick={onClose}
      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
        active ? "bg-white/15 text-white font-medium" : "text-white/50 hover:text-white/80 hover:bg-white/8"
      }`}>
      <Icon d={icon} size={16} className="shrink-0" />
      <span className="truncate">{label}</span>
    </Link>
  );
}

// ─── Mobile bottom nav ────────────────────────────────────────────────────────
function MobileNav() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#f8f3e4] border-t border-[#e2d9c8] px-1 pb-safe md:hidden">
      <div className="flex items-center justify-around">
        {MOBILE_NAV.map(item => (
          <Link key={item.href} href={item.href}
            className={`flex flex-col items-center gap-1 px-3 py-3 rounded-xl transition-colors min-w-0 ${
              isActive(item.href) ? "text-[#091929]" : "text-[#7a8694]"
            }`}>
            <Icon d={item.icon} size={20} />
            <span className="text-[10px] font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

// ─── Mobile header ────────────────────────────────────────────────────────────
function MobileHeader() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, viewAsClientId } = useAuth();
  const pathname = usePathname();

  const allItems = [...NAV_ITEMS, { href: "/portal/admin", label: "Admin Panel", icon: ICONS.admin }];
  const currentItem = allItems.find(i => pathname.startsWith(i.href));
  const title = currentItem?.label ?? "Portal";

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#f8f3e4] border-b border-[#e2d9c8] px-4 py-3 flex items-center justify-between md:hidden">
        <button onClick={() => setSidebarOpen(true)} className="text-[#394452] hover:text-[#091929] p-1 -ml-1">
          <Icon d={ICONS.menu} size={22} />
        </button>
        <div className="flex items-center gap-2">
          <Image src="/meridiem-logo.png" alt="Meridiem Global" width={28} height={28} className="object-contain" />
          <p className="text-sm font-semibold text-[#091929]">{title}</p>
        </div>
        <div className="flex items-center gap-2">
          {viewAsClientId && (
            <span className="text-[10px] font-bold text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">AS CLIENT</span>
          )}
          <Avatar initials={user?.name?.split(" ").map(n => n[0]).join("") ?? "U"} size="sm" />
        </div>
      </header>

      {/* Drawer overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
          <div className="relative z-10">
            <Sidebar onClose={() => setSidebarOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}

// ─── View-as-client top banner (desktop) ──────────────────────────────────────
function ViewAsClientBanner() {
  const { user, viewAsClientId, setViewAsClientId } = useAuth();
  const router = useRouter();

  if (!user || user.role !== "admin" || !viewAsClientId) return null;

  const clients = getClients();
  const client = clients.find((c: { id: string }) => c.id === viewAsClientId);

  return (
    <div className="hidden md:flex items-center justify-between px-5 py-2 bg-amber-50 border-b border-amber-200">
      <div className="flex items-center gap-2.5 text-sm text-amber-800">
        <div className="h-2 w-2 rounded-full bg-amber-500 shrink-0" />
        <span>Viewing portal as client: <strong>{client?.name ?? viewAsClientId}</strong></span>
      </div>
      <button
        onClick={() => { setViewAsClientId(null); router.push("/portal/admin"); }}
        className="text-xs font-semibold text-amber-700 bg-amber-100 hover:bg-amber-200 border border-amber-300 px-3 py-1 rounded-lg transition-colors"
      >
        Exit Client View
      </button>
    </div>
  );
}

// ─── Portal inner ─────────────────────────────────────────────────────────────
function PortalInner({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  if (!user && pathname !== "/portal/login") {
    if (typeof window !== "undefined") router.replace("/portal/login");
    return null;
  }

  if (pathname === "/portal/login") return <>{children}</>;

  return (
    <div className="flex h-screen bg-[#f8f3e4] overflow-hidden">
      {/* Desktop sidebar */}
      <div className="hidden md:flex shrink-0">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <MobileHeader />
        <ViewAsClientBanner />
        <main className="flex-1 overflow-y-auto pb-20 md:pb-0">
          {children}
        </main>
      </div>

      {/* Mobile bottom nav */}
      <MobileNav />
    </div>
  );
}

export function PortalLayoutClient({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <PortalInner>{children}</PortalInner>
    </AuthProvider>
  );
}
