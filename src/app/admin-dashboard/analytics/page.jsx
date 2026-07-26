"use client";

import { useCallback, useEffect, useState } from "react";
import { BarChart3, CircleCheckBig, CreditCard, Users } from "lucide-react";

import adminApi from "@/api/adminApi";
import AdminPageHeader from "@/components/admin/dashboard/AdminPageHeader";
import DashboardLayout from "@/components/admin/dashboard/DashboardLayout";
import DashboardPanel from "@/components/admin/dashboard/DashboardPanel";
import DashboardStatCard from "@/components/admin/dashboard/DashboardStatCard";
import { formatMoney } from "@/components/admin/requests/RequestWorkspace";

export default function AnalyticsPage() {
  const [analytics, setAnalytics] = useState({
    totals: {},
    services: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadAnalytics = useCallback(async () => {
    try {
      setLoading(true);
      setError("");
      const response = await adminApi.getAnalytics();

      if (!response?.success) {
        throw new Error(response?.message || "Unable to load analytics.");
      }

      setAnalytics(response.data || { totals: {}, services: [] });
    } catch (requestError) {
      setError(
        requestError?.response?.data?.message ||
          requestError?.message ||
          "Unable to load analytics.",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(loadAnalytics, 0);
    return () => window.clearTimeout(timer);
  }, [loadAnalytics]);

  const totals = analytics.totals || {};
  const services = analytics.services || [];
  const highestCount = Math.max(...services.map((item) => item.count), 1);

  return (
    <DashboardLayout>
      <AdminPageHeader
        eyebrow="Performance"
        title="Analytics"
        description="Live request, payment and service performance calculated by the backend."
      />

      {error && (
        <div className="mb-6 rounded-2xl border border-error/30 bg-error/10 p-5 text-sm text-error">
          {error}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <DashboardStatCard
          title="Total requests"
          value={loading ? "—" : totals.requests || 0}
          description="All consultation requests"
          icon={Users}
        />
        <DashboardStatCard
          title="Paid revenue"
          value={loading ? "—" : formatMoney(totals.revenue)}
          description={`${totals.paidRequests || 0} successful payments`}
          icon={CreditCard}
          tone="success"
        />
        <DashboardStatCard
          title="Completed"
          value={loading ? "—" : totals.completedRequests || 0}
          description="Requests marked completed"
          icon={CircleCheckBig}
          tone="secondary"
        />
        <DashboardStatCard
          title="Completion rate"
          value={loading ? "—" : `${totals.completionRate || 0}%`}
          description="Completed requests as a percentage"
          icon={BarChart3}
        />
      </div>

      <DashboardPanel
        className="mt-6"
        title="Requests by service"
        description="Demand across the current service catalogue"
      >
        <div className="space-y-5 p-5 sm:p-6">
          {!loading && services.length === 0 && (
            <p className="text-sm text-text-secondary">
              No request data is available yet.
            </p>
          )}

          {services.map((service) => (
            <div key={service.name}>
              <div className="mb-2 flex items-center justify-between gap-4">
                <p className="truncate text-sm font-semibold text-text-primary">
                  {service.name}
                </p>
                <span className="text-sm font-bold text-text-secondary">
                  {service.count}
                </span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-surface-secondary">
                <div
                  className="h-full rounded-full bg-secondary"
                  style={{
                    width: `${Math.max(
                      (service.count / highestCount) * 100,
                      5,
                    )}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </DashboardPanel>
    </DashboardLayout>
  );
}
