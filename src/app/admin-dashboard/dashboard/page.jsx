"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CircleCheckBig,
  Plus,
  RefreshCw,
  Sparkles,
  TriangleAlert,
} from "lucide-react";

import adminApi from "@/api/adminApi";
import DashboardLayout from "@/components/admin/dashboard/DashboardLayout";
import DashboardPanel from "@/components/admin/dashboard/DashboardPanel";
import DashboardStatCard from "@/components/admin/dashboard/DashboardStatCard";
import useAuthStore from "@/store/authStore";

export default function DashboardPage() {
  const admin = useAuthStore((state) => state.admin);
  const [services, setServices] = useState([]);
  const [metrics, setMetrics] = useState({
    services: 0,
    activeServices: 0,
    featuredServices: 0,
    inactiveServices: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadServices = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const response = await adminApi.getDashboard();

      if (!response?.success) {
        throw new Error(
          response?.message || "Unable to load dashboard information.",
        );
      }

      setServices(
        Array.isArray(response.data?.recentServices)
          ? response.data.recentServices
          : [],
      );
      setMetrics(response.data?.totals || {});
    } catch (requestError) {
      setServices([]);
      setError(
        requestError?.response?.data?.message ||
          requestError?.message ||
          "Unable to load dashboard information.",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      loadServices();
    }, 0);

    return () => window.clearTimeout(timer);
  }, [loadServices]);

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-[1500px]">
        <section className="relative overflow-hidden rounded-3xl border border-border bg-primary p-6 shadow-lg sm:p-8">
          <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-secondary/20 blur-3xl" />
          <div className="absolute -bottom-24 left-1/3 h-52 w-52 rounded-full bg-primary-light/30 blur-3xl" />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold text-secondary">
                HAB Global Management
              </p>

              <h1 className="mt-2 text-3xl font-bold text-text-light sm:text-4xl">
                Welcome back, {admin?.firstName || "Administrator"}
              </h1>

              <p className="mt-3 max-w-2xl leading-7 text-text-light/70">
                Manage the consultancy services displayed across your website
                from one focused workspace.
              </p>
            </div>

            <Link
              href="/admin-dashboard/service/create"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-secondary px-5 font-semibold text-primary transition hover:opacity-90"
            >
              <Plus size={19} />
              Create service
            </Link>
          </div>
        </section>

        {error && (
          <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-error/30 bg-error/10 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <TriangleAlert className="mt-0.5 shrink-0 text-error" size={20} />
              <div>
                <p className="font-semibold text-error">
                  Dashboard data could not be loaded
                </p>
                <p className="mt-1 text-sm text-text-secondary">{error}</p>
              </div>
            </div>

            <button
              type="button"
              onClick={loadServices}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-error/30 px-4 text-sm font-semibold text-error transition hover:bg-error/10"
            >
              <RefreshCw size={16} />
              Try again
            </button>
          </div>
        )}

        <section className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {loading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="h-48 animate-pulse rounded-2xl border border-border bg-surface-secondary"
              />
            ))
          ) : (
            <>
              <DashboardStatCard
                title="Total services"
                value={metrics.services || 0}
                description="All services in your catalogue"
                icon={BriefcaseBusiness}
              />
              <DashboardStatCard
                title="Active services"
                value={metrics.activeServices || 0}
                description="Currently visible to customers"
                icon={CircleCheckBig}
                tone="success"
              />
              <DashboardStatCard
                title="Featured services"
                value={metrics.featuredServices || 0}
                description="Highlighted across the website"
                icon={Sparkles}
                tone="secondary"
              />
              <DashboardStatCard
                title="Inactive services"
                value={metrics.inactiveServices || 0}
                description="Hidden from the public catalogue"
                icon={TriangleAlert}
                tone="error"
              />
            </>
          )}
        </section>

        <section className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
          <DashboardPanel
            title="Recently added services"
            description="Your latest catalogue entries"
            action={
              <Link
                href="/admin-dashboard/service"
                className="inline-flex items-center gap-1 text-sm font-semibold text-secondary"
              >
                View all
                <ArrowRight size={16} />
              </Link>
            }
          >
            {loading ? (
              <div className="space-y-3 p-5 sm:p-6">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div
                    key={index}
                    className="h-16 animate-pulse rounded-xl bg-surface-secondary"
                  />
                ))}
              </div>
            ) : services.length ? (
              <div className="divide-y divide-border">
                {services.map((service) => (
                  <Link
                    key={service._id}
                    href={`/admin-dashboard/service/${encodeURIComponent(
                      service.slug,
                    )}`}
                    className="flex items-center gap-4 px-5 py-4 transition hover:bg-surface-secondary sm:px-6"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-text-light">
                      <BriefcaseBusiness size={19} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-semibold text-text-primary">
                        {service.title}
                      </span>
                      <span className="mt-1 block truncate text-xs text-text-secondary">
                        {service.badge || "Consultancy service"}
                      </span>
                    </span>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        service.active
                          ? "bg-success/10 text-success"
                          : "bg-error/10 text-error"
                      }`}
                    >
                      {service.active ? "Active" : "Inactive"}
                    </span>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="p-10 text-center">
                <p className="font-semibold text-text-primary">
                  No services yet
                </p>
                <p className="mt-2 text-sm text-text-secondary">
                  Create your first service to populate the website.
                </p>
              </div>
            )}
          </DashboardPanel>

          <DashboardPanel
            title="Quick actions"
            description="Common service management tasks"
          >
            <div className="space-y-3 p-5 sm:p-6">
              <QuickAction
                href="/admin-dashboard/service/create"
                icon={Plus}
                title="Create a service"
                description="Add a new public service"
              />
              <QuickAction
                href="/admin-dashboard/service"
                icon={BriefcaseBusiness}
                title="Manage services"
                description="View, edit or remove services"
              />
              <QuickAction
                href="/services"
                icon={ArrowRight}
                title="View public catalogue"
                description="Review the customer-facing page"
                external
              />
            </div>
          </DashboardPanel>
        </section>
      </div>
    </DashboardLayout>
  );
}

function QuickAction({
  href,
  icon: Icon,
  title,
  description,
  external = false,
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      className="group flex items-center gap-4 rounded-xl border border-border bg-surface-secondary p-4 transition hover:border-secondary"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
        <Icon size={18} />
      </span>

      <span className="min-w-0 flex-1">
        <span className="block font-semibold text-text-primary">{title}</span>
        <span className="mt-1 block text-xs text-text-secondary">
          {description}
        </span>
      </span>

      <ArrowRight
        size={17}
        className="text-text-secondary transition group-hover:translate-x-1 group-hover:text-secondary"
      />
    </Link>
  );
}
