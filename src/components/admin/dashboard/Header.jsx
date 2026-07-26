"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ExternalLink, Menu, Plus } from "lucide-react";

const pageDetails = [
  {
    test: (pathname) =>
      pathname === "/admin-dashboard/service/create" ||
      pathname === "/admin-dashboard/services/create",
    title: "Create Service",
    description: "Add a new consultancy service",
  },
  {
    test: (pathname) =>
      (pathname.startsWith("/admin-dashboard/service/") ||
        pathname.startsWith("/admin-dashboard/services/")) &&
      pathname.endsWith("/edit"),
    title: "Edit Service",
    description: "Update service content and availability",
  },
  {
    test: (pathname) =>
      pathname.startsWith("/admin-dashboard/requests/"),
    title: "Request Details",
    description: "Review a consultation request",
  },
  {
    match: "/admin-dashboard/requests",
    title: "Requests",
    description: "Manage consultation requests",
  },
  {
    match: "/admin-dashboard/clients",
    title: "Clients",
    description: "Review customer activity",
  },
  {
    test: (pathname) =>
      pathname === "/admin-dashboard/service" ||
      pathname.startsWith("/admin-dashboard/service/") ||
      pathname === "/admin-dashboard/services" ||
      pathname.startsWith("/admin-dashboard/services/"),
    title: "Services",
    description: "Manage your service catalogue",
  },
  {
    match: "/admin-dashboard/invoices",
    title: "Invoices",
    description: "Review generated invoices",
  },
  {
    match: "/admin-dashboard/payments",
    title: "Payments",
    description: "Monitor payment activity",
  },
  {
    match: "/admin-dashboard/email",
    title: "Email Centre",
    description: "Review email delivery",
  },
  {
    match: "/admin-dashboard/analytics",
    title: "Analytics",
    description: "Track business performance",
  },
  {
    match: "/admin-dashboard/settings",
    title: "Settings",
    description: "Administration and integrations",
  },
  {
    match: "/admin-dashboard/dashboard",
    title: "Dashboard",
    description: "Service management overview",
  },
];

export default function Header({
  collapsed,
  onMobileOpen,
}) {
  const pathname = usePathname();

  const page =
    pageDetails.find((item) =>
      item.test ? item.test(pathname) : pathname.startsWith(item.match),
    ) ||
    pageDetails.at(-1);

  return (
    <header
      className={`fixed right-0 top-0 z-30 h-20 border-b border-border bg-surface/90 shadow-sm backdrop-blur-xl transition-[left] duration-300 ${
        collapsed ? "left-0 lg:left-[88px]" : "left-0 lg:left-72"
      }`}
    >
      <div className="flex h-full items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <button
            type="button"
            onClick={onMobileOpen}
            aria-label="Open navigation"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-secondary text-text-primary transition hover:border-secondary lg:hidden"
          >
            <Menu size={20} />
          </button>

          <div className="min-w-0">
            <h1 className="truncate text-lg font-bold text-text-primary sm:text-xl">
              {page.title}
            </h1>
            <p className="hidden truncate text-xs text-text-secondary sm:block">
              {page.description}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/"
            target="_blank"
            className="hidden h-11 items-center gap-2 rounded-xl border border-border bg-surface-secondary px-4 text-sm font-semibold text-text-primary transition hover:border-secondary hover:text-secondary sm:flex"
          >
            <ExternalLink size={17} />
            View website
          </Link>

          <Link
            href="/admin-dashboard/service/create"
            className="flex h-11 items-center gap-2 rounded-xl bg-secondary px-4 text-sm font-semibold text-primary transition hover:opacity-90"
          >
            <Plus size={17} />
            <span className="hidden sm:inline">New service</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
