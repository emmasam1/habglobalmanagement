"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  BarChart3,
  BriefcaseBusiness,
  CreditCard,
  FileText,
  Inbox,
  LayoutDashboard,
  LogOut,
  Mail,
  PanelLeftClose,
  PanelLeftOpen,
  PlusCircle,
  Settings,
  Users,
  X,
} from "lucide-react";

import useAuthStore from "@/store/authStore";

const menuItems = [
  {
    label: "Overview",
    href: "/admin-dashboard/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Requests",
    href: "/admin-dashboard/requests",
    icon: Inbox,
  },
  {
    label: "Clients",
    href: "/admin-dashboard/clients",
    icon: Users,
  },
  {
    label: "All Services",
    href: "/admin-dashboard/service",
    icon: BriefcaseBusiness,
  },
  {
    label: "Create Service",
    href: "/admin-dashboard/service/create",
    icon: PlusCircle,
  },
  {
    label: "Invoices",
    href: "/admin-dashboard/invoices",
    icon: FileText,
  },
  {
    label: "Payments",
    href: "/admin-dashboard/payments",
    icon: CreditCard,
  },
  {
    label: "Email Centre",
    href: "/admin-dashboard/email",
    icon: Mail,
  },
  {
    label: "Analytics",
    href: "/admin-dashboard/analytics",
    icon: BarChart3,
  },
  {
    label: "Settings",
    href: "/admin-dashboard/settings",
    icon: Settings,
  },
];

export default function Sidebar({
  collapsed,
  setCollapsed,
  mobileOpen,
  onMobileClose,
}) {
  const pathname = usePathname();
  const router = useRouter();
  const admin = useAuthStore((state) => state.admin);
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = async () => {
    await logout();
    router.replace("/");
    router.refresh();
  };

  return (
    <>
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={onMobileClose}
          className="fixed inset-0 z-40 bg-primary/60 backdrop-blur-sm lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-border bg-primary text-text-light shadow-xl transition-[width,transform] duration-300 lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } ${collapsed ? "lg:w-[88px]" : "lg:w-72"}`}
      >
        <div
          className={`flex h-20 shrink-0 items-center border-b border-border ${
            collapsed
              ? "lg:justify-center lg:px-3"
              : "justify-between px-5"
          }`}
        >
          <Link
            href="/admin-dashboard/dashboard"
            onClick={onMobileClose}
            className="flex min-w-0 items-center gap-3"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-surface p-1.5">
              <Image
                src="/hab_small_icon.png"
                alt="HAB Global Management"
                width={44}
                height={44}
                className="h-full w-full object-contain"
                priority
              />
            </span>

            <span className={`${collapsed ? "lg:hidden" : ""} min-w-0`}>
              <span className="block truncate text-sm font-bold text-text-light">
                HAB Global
              </span>
              <span className="block truncate text-xs text-text-light/60">
                Admin workspace
              </span>
            </span>
          </Link>

          <button
            type="button"
            onClick={onMobileClose}
            aria-label="Close sidebar"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-text-light/70 transition hover:bg-surface/10 hover:text-secondary lg:hidden"
          >
            <X size={19} />
          </button>

          {!collapsed && (
            <button
              type="button"
              onClick={() => setCollapsed(true)}
              aria-label="Collapse sidebar"
              className="hidden h-9 w-9 items-center justify-center rounded-lg text-text-light/70 transition hover:bg-surface/10 hover:text-secondary lg:flex"
            >
              <PanelLeftClose size={19} />
            </button>
          )}
        </div>

        {collapsed && (
          <div className="hidden justify-center border-b border-border py-3 lg:flex">
            <button
              type="button"
              onClick={() => setCollapsed(false)}
              aria-label="Expand sidebar"
              className="flex h-10 w-10 items-center justify-center rounded-xl text-text-light/70 transition hover:bg-surface/10 hover:text-secondary"
            >
              <PanelLeftOpen size={19} />
            </button>
          </div>
        )}

        <nav className="flex-1 overflow-y-auto px-3 py-5">
          <p
            className={`mb-3 px-3 text-[11px] font-bold uppercase tracking-[0.16em] text-text-light/50 ${
              collapsed ? "lg:hidden" : ""
            }`}
          >
            Management
          </p>

          <div className="space-y-1.5">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = isActiveRoute(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onMobileClose}
                  title={collapsed ? item.label : undefined}
                  className={`group relative flex h-12 items-center rounded-xl transition ${
                    collapsed
                      ? "lg:justify-center lg:px-2"
                      : "gap-3 px-3"
                  } ${
                    active
                      ? "bg-secondary text-primary shadow-lg"
                      : "text-text-light/70 hover:bg-surface/10 hover:text-text-light"
                  }`}
                >
                  <Icon
                    size={20}
                    strokeWidth={active ? 2.4 : 1.9}
                    className="shrink-0"
                  />

                  <span
                    className={`truncate text-sm font-semibold ${
                      collapsed ? "lg:hidden" : ""
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="border-t border-border p-3">
          <div
            className={`mb-3 flex items-center gap-3 rounded-xl bg-surface/10 p-3 ${
              collapsed ? "lg:hidden" : ""
            }`}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold uppercase text-primary">
              {getAdminInitials(admin)}
            </span>

            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold text-text-light">
                {admin?.name ||
                  `${admin?.firstName || ""} ${
                    admin?.lastName || ""
                  }`.trim() ||
                  "Administrator"}
              </span>
              <span className="block truncate text-xs text-text-light/50">
                {admin?.email || "Admin account"}
              </span>
            </span>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className={`flex h-12 w-full items-center rounded-xl text-error transition hover:bg-error/10 ${
              collapsed
                ? "lg:justify-center lg:px-2"
                : "gap-3 px-3"
            }`}
          >
            <LogOut size={20} className="shrink-0" />
            <span
              className={`text-sm font-semibold ${
                collapsed ? "lg:hidden" : ""
              }`}
            >
              Log out
            </span>
          </button>
        </div>
      </aside>
    </>
  );
}

function isActiveRoute(pathname, href) {
  if (href === "/admin-dashboard/dashboard") {
    return pathname === href;
  }

  if (href === "/admin-dashboard/service/create") {
    return (
      pathname === href ||
      pathname === "/admin-dashboard/services/create"
    );
  }

  if (href === "/admin-dashboard/service") {
    return (
      pathname === href ||
      (pathname.startsWith(`${href}/`) &&
        !pathname.startsWith("/admin-dashboard/service/create")) ||
      pathname === "/admin-dashboard/services" ||
      (pathname.startsWith("/admin-dashboard/services/") &&
        !pathname.startsWith("/admin-dashboard/services/create"))
    );
  }

  return pathname.startsWith(href);
}

function getAdminInitials(admin) {
  const name =
    admin?.name ||
    `${admin?.firstName || ""} ${admin?.lastName || ""}`.trim();

  if (!name) return "A";

  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join("")
    .toUpperCase();
}
