"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { message } from "antd";
import { ArrowLeft, ExternalLink, Mail, Phone } from "lucide-react";

import requestApi from "@/api/requestApi";
import AdminPageHeader from "@/components/admin/dashboard/AdminPageHeader";
import AdminStatusBadge from "@/components/admin/dashboard/AdminStatusBadge";
import DashboardLayout from "@/components/admin/dashboard/DashboardLayout";
import DashboardPanel from "@/components/admin/dashboard/DashboardPanel";
import {
  formatDate,
  formatMoney,
} from "@/components/admin/requests/RequestWorkspace";

const statuses = ["Pending", "Processing", "Completed", "Cancelled"];

export default function RequestDetailsPage() {
  const { id } = useParams();
  const [request, setRequest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  const loadRequest = useCallback(async () => {
    try {
      setLoading(true);
      setError("");
      const response = await requestApi.getRequest(id);

      if (!response?.success || !response?.data) {
        throw new Error(response?.message || "Unable to load this request.");
      }

      setRequest(response.data);
    } catch (requestError) {
      setError(
        requestError?.response?.data?.message ||
          requestError?.message ||
          "Unable to load this request.",
      );
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    loadRequest();
  }, [loadRequest]);

  const updateStatus = async (status) => {
    try {
      setSaving(true);
      const response = await requestApi.updateStatus(id, status);

      if (!response?.success) {
        throw new Error(response?.message || "Unable to update the status.");
      }

      setRequest((current) => ({
        ...current,
        ...(response.data || {}),
        status,
      }));
      message.success("Request status updated.");
    } catch (statusError) {
      message.error(
        statusError?.response?.data?.message ||
          statusError?.message ||
          "Unable to update the status.",
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <DashboardLayout>
      <AdminPageHeader
        eyebrow="Request details"
        title={request?.invoiceNumber || "Consultation request"}
        description="Review the customer, service, project and payment information."
        action={
          <Link
            href="/admin-dashboard/requests"
            className="inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-surface px-4 text-sm font-semibold text-text-primary transition hover:border-secondary hover:text-secondary"
          >
            <ArrowLeft size={17} />
            Back to requests
          </Link>
        }
      />

      {loading && <RequestDetailsSkeleton />}

      {!loading && error && (
        <div className="rounded-2xl border border-error/30 bg-error/10 p-6 text-sm text-error">
          {error}
        </div>
      )}

      {!loading && request && (
        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <DashboardPanel title="Customer" description="Contact and organisation details">
              <DetailsGrid
                items={[
                  ["Full name", request.fullName],
                  ["Email", request.email],
                  ["Phone", request.phone],
                  ["Company", request.company],
                  ["Job title", request.jobTitle],
                  ["Country", request.country],
                  ["Website", request.website],
                  ["Industry", request.industry],
                  ["Employees", request.employees],
                ]}
              />
            </DashboardPanel>

            <DashboardPanel title="Project brief" description="Information submitted by the customer">
              <div className="space-y-5 p-5 sm:p-6">
                <TextSection label="Project" value={request.project} />
                <TextSection label="Goals" value={request.goals} />
                <TextSection label="Message" value={request.message} />
                <DetailsGrid
                  compact
                  items={[
                    ["Timeline", request.timeline],
                    ["Preferred meeting", request.meeting],
                  ]}
                />
              </div>
            </DashboardPanel>
          </div>

          <div className="space-y-6">
            <DashboardPanel title="Request status" description="Update the workflow stage">
              <div className="space-y-4 p-5 sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <AdminStatusBadge value={request.status} />
                  <AdminStatusBadge value={request.paymentStatus} />
                </div>

                <select
                  value={request.status || "Pending"}
                  disabled={saving}
                  onChange={(event) => updateStatus(event.target.value)}
                  className="h-11 w-full rounded-xl border border-border bg-surface-secondary px-3 text-sm text-text-primary outline-none transition focus:border-secondary disabled:opacity-60"
                >
                  {statuses.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
            </DashboardPanel>

            <DashboardPanel title="Service and payment">
              <DetailsGrid
                items={[
                  ["Service", request.serviceTitle || request.serviceSlug],
                  ["Amount", formatMoney(request.amount || request.servicePrice)],
                  ["Invoice", request.invoiceNumber],
                  ["Payment", request.paymentStatus],
                  ["Stripe session", request.stripeSessionId],
                  ["Paid at", formatDate(request.paidAt)],
                  ["Submitted", formatDate(request.createdAt)],
                ]}
              />

              {(request.stripeInvoiceUrl || request.stripeInvoicePdf) && (
                <div className="flex flex-wrap gap-3 border-t border-border p-5 sm:p-6">
                  {request.stripeInvoiceUrl && (
                    <ExternalLinkButton href={request.stripeInvoiceUrl}>
                      View invoice
                    </ExternalLinkButton>
                  )}
                  {request.stripeInvoicePdf && (
                    <ExternalLinkButton href={request.stripeInvoicePdf}>
                      Download PDF
                    </ExternalLinkButton>
                  )}
                </div>
              )}
            </DashboardPanel>

            <DashboardPanel title="Contact customer">
              <div className="flex flex-col gap-3 p-5 sm:p-6">
                {request.email && (
                  <a
                    href={`mailto:${request.email}`}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-text-light transition hover:opacity-90"
                  >
                    <Mail size={17} />
                    Send email
                  </a>
                )}
                {request.phone && (
                  <a
                    href={`tel:${request.phone}`}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-surface-secondary px-4 text-sm font-semibold text-text-primary transition hover:border-secondary"
                  >
                    <Phone size={17} />
                    Call customer
                  </a>
                )}
              </div>
            </DashboardPanel>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}

function DetailsGrid({ items, compact = false }) {
  return (
    <dl className={`grid gap-4 p-5 sm:p-6 ${compact ? "p-0 sm:p-0" : "sm:grid-cols-2"}`}>
      {items
        .filter(([, value]) => value !== undefined && value !== null && value !== "")
        .map(([label, value]) => (
          <div key={label} className="rounded-xl bg-surface-secondary p-4">
            <dt className="text-xs font-bold uppercase tracking-wide text-text-secondary">
              {label}
            </dt>
            <dd className="mt-2 break-words text-sm font-semibold text-text-primary">
              {value}
            </dd>
          </div>
        ))}
    </dl>
  );
}

function TextSection({ label, value }) {
  if (!value) return null;

  return (
    <div>
      <h3 className="text-sm font-bold text-text-primary">{label}</h3>
      <p className="mt-2 whitespace-pre-line text-sm leading-7 text-text-secondary">
        {value}
      </p>
    </div>
  );
}

function ExternalLinkButton({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex h-10 items-center gap-2 rounded-xl border border-border bg-surface-secondary px-4 text-sm font-semibold text-text-primary transition hover:border-secondary hover:text-secondary"
    >
      <ExternalLink size={16} />
      {children}
    </a>
  );
}

function RequestDetailsSkeleton() {
  return (
    <div className="grid animate-pulse gap-6 xl:grid-cols-2">
      {[1, 2, 3, 4].map((item) => (
        <div key={item} className="h-64 rounded-2xl border border-border bg-surface" />
      ))}
    </div>
  );
}
