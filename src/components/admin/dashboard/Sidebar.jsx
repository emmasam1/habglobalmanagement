"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "motion/react";
import {
  LayoutDashboard,
  MessageSquareText,
  Users,
  BriefcaseBusiness,
  FileText,
  CreditCard,
  Mail,
  ChartNoAxesCombined,
  Settings,
  LogOut,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";

import useAuthStore from "@/store/authStore";

const menuItems = [
  {
    label: "Dashboard",
    href: "/admin-dashboard/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Consultation Requests",
    href: "/admin-dashboard/requests",
    icon: MessageSquareText,
  },
  {
    label: "Clients",
    href: "/admin-dashboard/clients",
    icon: Users,
  },
  {
    label: "Services",
    href: "/admin-dashboard/services",
    icon: BriefcaseBusiness,
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
    icon: ChartNoAxesCombined,
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
}) {
  const pathname = usePathname();
  const router = useRouter();

  const admin = useAuthStore((state) => state.admin);
  const logout = useAuthStore((state) => state.logout);

  const isActiveRoute = (href) => {
    if (href === "/admin-dashboard/dashboard") {
      return pathname === href;
    }

    return pathname.startsWith(href);
  };

  const handleLogout = async () => {
    await logout();

    router.replace("/admin-dashboard");
    router.refresh();
  };

  return (
    <motion.aside
      initial={false}
      animate={{
        width: collapsed ? 88 : 288,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="fixed inset-y-0 left-0 z-40 hidden overflow-visible border-r border-border bg-primary text-text-light lg:flex lg:flex-col"
    >
      {/* Logo */}
      <div
        className={`flex h-20 shrink-0 items-center border-b border-white/10 ${
          collapsed
            ? "justify-center px-3"
            : "justify-between px-5"
        }`}
      >
        <Link
          href="/admin-dashboard/dashboard"
          className="flex min-w-0 items-center gap-3"
        >
          <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white">
            <Image
              src="/logo.png"
              alt="HAB Global Management"
              width={44}
              height={44}
              className="h-full w-full object-contain p-1"
              priority
            />
          </div>

          {!collapsed && (
            <motion.div
              initial={{
                opacity: 0,
                x: -8,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              className="min-w-0"
            >
              <p className="truncate text-sm font-bold text-white">
                HAB Global
              </p>

              <p className="truncate text-xs text-white/60">
                Management
              </p>
            </motion.div>
          )}
        </Link>

        {!collapsed && (
          <button
            type="button"
            onClick={() => setCollapsed(true)}
            aria-label="Collapse sidebar"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-white/60 transition hover:bg-white/10 hover:text-secondary"
          >
            <PanelLeftClose size={19} />
          </button>
        )}
      </div>

      {collapsed && (
        <div className="flex justify-center border-b border-white/10 py-3">
          <button
            type="button"
            onClick={() => setCollapsed(false)}
            aria-label="Expand sidebar"
            title="Expand sidebar"
            className="flex h-10 w-10 items-center justify-center rounded-xl text-white/60 transition hover:bg-white/10 hover:text-secondary"
          >
            <PanelLeftOpen size={19} />
          </button>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto overflow-x-visible px-3 py-5">
        {!collapsed && (
          <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-[0.16em] text-white/40">
            Main menu
          </p>
        )}

        <div className="space-y-1.5">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActiveRoute(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                title={collapsed ? item.label : undefined}
                className={`group relative flex h-12 items-center rounded-xl transition ${
                  collapsed
                    ? "justify-center px-2"
                    : "gap-3 px-3"
                } ${
                  active
                    ? "bg-secondary text-primary shadow-lg shadow-black/10"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="dashboard-sidebar-active"
                    className="absolute left-0 h-6 w-1 rounded-r-full bg-white"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}

                <Icon
                  size={20}
                  strokeWidth={active ? 2.3 : 1.9}
                  className="shrink-0"
                />

                {!collapsed && (
                  <motion.span
                    initial={{
                      opacity: 0,
                      x: -5,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    className="truncate text-sm font-medium"
                  >
                    {item.label}
                  </motion.span>
                )}

                {collapsed && (
                  <span className="pointer-events-none absolute left-[calc(100%+12px)] z-[100] hidden whitespace-nowrap rounded-lg bg-primary px-3 py-2 text-xs font-medium text-white opacity-0 shadow-xl ring-1 ring-white/10 group-hover:block group-hover:opacity-100">
                    {item.label}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Admin */}
      <div className="border-t border-white/10 p-3">
        {!collapsed && (
          <div className="mb-3 flex items-center gap-3 rounded-xl bg-white/10 p-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold uppercase text-primary">
              {admin?.firstName?.charAt(0) || "A"}
              {admin?.lastName?.charAt(0) || ""}
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-white">
                {admin
                  ? `${admin.firstName || ""} ${
                      admin.lastName || ""
                    }`.trim()
                  : "Administrator"}
              </p>

              <p className="truncate text-xs text-white/50">
                {admin?.email || "Admin account"}
              </p>
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={handleLogout}
          title={collapsed ? "Logout" : undefined}
          className={`group relative flex h-12 w-full items-center rounded-xl text-red-300 transition hover:bg-red-500/10 hover:text-red-200 ${
            collapsed
              ? "justify-center px-2"
              : "gap-3 px-3"
          }`}
        >
          <LogOut size={20} className="shrink-0" />

          {!collapsed && (
            <span className="text-sm font-semibold">
              Logout
            </span>
          )}

          {collapsed && (
            <span className="pointer-events-none absolute left-[calc(100%+12px)] z-[100] hidden whitespace-nowrap rounded-lg bg-primary px-3 py-2 text-xs font-medium text-white opacity-0 shadow-xl ring-1 ring-white/10 group-hover:block group-hover:opacity-100">
              Logout
            </span>
          )}
        </button>
      </div>
    </motion.aside>
  );
}