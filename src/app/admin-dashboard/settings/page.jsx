"use client";

import { useCallback, useEffect, useState } from "react";
import {
  Cloud,
  CreditCard,
  ExternalLink,
  ImageIcon,
  Mail,
  ShieldCheck,
} from "lucide-react";

import adminApi from "@/api/adminApi";
import useAuthStore from "@/store/authStore";
import AdminPageHeader from "@/components/admin/dashboard/AdminPageHeader";
import DashboardLayout from "@/components/admin/dashboard/DashboardLayout";
import DashboardPanel from "@/components/admin/dashboard/DashboardPanel";

const integrationDetails = [
  {
    key: "stripe",
    name: "Stripe",
    description: "Checkout, invoice and payment webhook processing.",
    icon: CreditCard,
  },
  {
    key: "resend",
    name: "Resend",
    description: "Customer confirmations, invoices and admin notifications.",
    icon: Mail,
  },
  {
    key: "cloudinary",
    name: "Cloudinary",
    description: "Service hero image storage and delivery.",
    icon: ImageIcon,
  },
  {
    key: "mongodb",
    name: "MongoDB",
    description: "Services, requests, payments and administrator data.",
    icon: Cloud,
  },
];

export default function SettingsPage() {
  const cachedAdmin = useAuthStore((state) => state.admin);
  const [settings, setSettings] = useState({
    admin: null,
    integrations: {},
    websiteUrl: "https://www.habglobalmanagement.co.uk",
  });
  const [error, setError] = useState("");

  const loadSettings = useCallback(async () => {
    try {
      setError("");
      const response = await adminApi.getSettings();

      if (!response?.success) {
        throw new Error(response?.message || "Unable to load settings.");
      }

      setSettings(response.data || {});
    } catch (requestError) {
      setError(
        requestError?.response?.data?.message ||
          requestError?.message ||
          "Unable to load settings.",
      );
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(loadSettings, 0);
    return () => window.clearTimeout(timer);
  }, [loadSettings]);

  const admin = settings.admin || cachedAdmin;
  const fullName =
    admin?.name ||
    `${admin?.firstName || ""} ${admin?.lastName || ""}`.trim() ||
    "Administrator";
  const initials = fullName
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join("")
    .toUpperCase();

  return (
    <DashboardLayout>
      <AdminPageHeader
        eyebrow="Administration"
        title="Settings"
        description="Review the signed-in administrator and backend integration setup."
        action={
          <a
            href={
              settings.websiteUrl || "https://www.habglobalmanagement.co.uk"
            }
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-text-light transition hover:opacity-90"
          >
            <ExternalLink size={17} />
            Open website
          </a>
        }
      />

      {error && (
        <div className="mb-6 rounded-2xl border border-error/30 bg-error/10 p-5 text-sm text-error">
          {error}
        </div>
      )}

      <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
        <DashboardPanel
          title="Administrator profile"
          description="Current authenticated account"
        >
          <div className="p-5 sm:p-6">
            <div className="flex items-center gap-4 rounded-2xl bg-surface-secondary p-5">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-secondary text-lg font-bold text-primary">
                {initials || "A"}
              </span>
              <div className="min-w-0">
                <p className="truncate font-bold text-text-primary">
                  {fullName}
                </p>
                <p className="mt-1 truncate text-sm text-text-secondary">
                  {admin?.email || "Authenticated administrator"}
                </p>
              </div>
            </div>

            <div className="mt-5 flex items-start gap-3 rounded-xl border border-success/30 bg-success/10 p-4">
              <ShieldCheck className="mt-0.5 shrink-0 text-success" size={20} />
              <p className="text-sm leading-6 text-text-secondary">
                Authentication is handled by a secure HttpOnly cookie. No JWT
                is stored in the browser.
              </p>
            </div>
          </div>
        </DashboardPanel>

        <DashboardPanel
          title="Backend integrations"
          description="Live configuration status without exposing credentials"
        >
          <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6">
            {integrationDetails.map((integration) => {
              const Icon = integration.icon;
              const configured = Boolean(
                settings.integrations?.[integration.key],
              );

              return (
                <article
                  key={integration.name}
                  className="rounded-2xl border border-border bg-surface-secondary p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-secondary">
                      <Icon size={21} />
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${
                        configured
                          ? "bg-success/10 text-success"
                          : "bg-error/10 text-error"
                      }`}
                    >
                      {configured ? "Configured" : "Needs setup"}
                    </span>
                  </div>
                  <h3 className="mt-4 font-bold text-text-primary">
                    {integration.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">
                    {integration.description}
                  </p>
                </article>
              );
            })}
          </div>
        </DashboardPanel>
      </div>
    </DashboardLayout>
  );
}
