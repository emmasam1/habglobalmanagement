"use client";

import { useState } from "react";
import Link from "next/link";
import { Popconfirm, message } from "antd";
import {
  Download,
  Eye,
  RefreshCw,
  Trash2,
} from "lucide-react";

import requestApi from "@/api/requestApi";
import adminApi from "@/api/adminApi";
import useAdminWorkspaceData from "@/hooks/useAdminWorkspaceData";
import AdminPageHeader from "@/components/admin/dashboard/AdminPageHeader";
import AdminStatusBadge from "@/components/admin/dashboard/AdminStatusBadge";
import DashboardLayout from "@/components/admin/dashboard/DashboardLayout";

const pageContent = {
  requests: {
    title: "Consultation Requests",
    description:
      "Review customer enquiries and manage their progress.",
  },
  clients: {
    title: "Clients",
    description:
      "A consolidated view of customers who have submitted service requests.",
  },
  invoices: {
    title: "Invoices",
    description:
      "Track generated Stripe invoices and access invoice documents.",
  },
  payments: {
    title: "Payments",
    description:
      "Monitor paid and pending service payments.",
  },
  email: {
    title: "Email Centre",
    description:
      "Review customer and administrator payment-email delivery.",
  },
};

export default function RequestWorkspace({
  variant,
}) {
  const {
    data,
    setData,
    loading,
    error,
    reload,
  } = useAdminWorkspaceData(variant);
  const [messageApi, contextHolder] =
    message.useMessage();
  const [workingId, setWorkingId] =
    useState("");

  const updateStatus = async (
    request,
    status,
  ) => {
    try {
      setWorkingId(request._id);

      const response =
        await requestApi.updateStatus(
          request._id,
          status,
        );

      if (!response?.success) {
        throw new Error(
          response?.message ||
            "Unable to update status.",
        );
      }

      setData((current) =>
        current.map((item) =>
          item._id === request._id
            ? {
                ...item,
                status:
                  response.data?.status ||
                  status,
              }
            : item,
        ),
      );
      messageApi.success(
        "Request status updated.",
      );
    } catch (requestError) {
      messageApi.error(
        requestError?.response?.data
          ?.message ||
          requestError?.message ||
          "Unable to update status.",
      );
    } finally {
      setWorkingId("");
    }
  };

  const deleteRequest = async (request) => {
    try {
      setWorkingId(request._id);

      const response =
        await requestApi.deleteRequest(
          request._id,
        );

      if (!response?.success) {
        throw new Error(
          response?.message ||
            "Unable to delete request.",
        );
      }

      setData((current) =>
        current.filter(
          (item) =>
            item._id !== request._id,
        ),
      );
      messageApi.success(
        "Request deleted.",
      );
    } catch (requestError) {
      messageApi.error(
        requestError?.response?.data
          ?.message ||
          requestError?.message ||
          "Unable to delete request.",
      );
    } finally {
      setWorkingId("");
    }
  };

  const retryEmails = async (request) => {
    try {
      setWorkingId(request._id);

      const response = await adminApi.retryPaymentEmails(request._id);

      if (!response?.success) {
        throw new Error(
          response?.message || "Unable to retry payment emails.",
        );
      }

      setData((current) =>
        current.map((item) =>
          item._id === request._id
            ? { ...item, ...(response.data || {}) }
            : item,
        ),
      );
      messageApi.success(response.message || "Payment emails delivered.");
    } catch (requestError) {
      messageApi.error(
        requestError?.response?.data?.message ||
          requestError?.message ||
          "Unable to retry payment emails.",
      );
    } finally {
      setWorkingId("");
    }
  };

  const content =
    pageContent[variant] ||
    pageContent.requests;

  return (
    <DashboardLayout>
      {contextHolder}

      <div className="mx-auto max-w-[1500px]">
        <AdminPageHeader
          title={content.title}
          description={content.description}
          action={
            <button
              type="button"
              onClick={reload}
              disabled={loading}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-surface px-4 text-sm font-semibold text-text-primary transition hover:border-secondary disabled:opacity-50"
            >
              <RefreshCw
                size={17}
                className={
                  loading
                    ? "animate-spin"
                    : ""
                }
              />
              Refresh
            </button>
          }
        />

        {error ? (
          <ErrorState
            message={error}
            onRetry={reload}
          />
        ) : loading ? (
          <TableSkeleton />
        ) : variant === "clients" ? (
          <ClientsTable clients={data} />
        ) : variant === "invoices" ? (
          <InvoicesTable
            requests={data}
          />
        ) : variant === "payments" ? (
          <PaymentsTable
            requests={data}
          />
        ) : variant === "email" ? (
          <EmailTable
            requests={data}
            workingId={workingId}
            onRetry={retryEmails}
          />
        ) : (
          <RequestsTable
            requests={data}
            workingId={workingId}
            onStatusChange={updateStatus}
            onDelete={deleteRequest}
          />
        )}
      </div>
    </DashboardLayout>
  );
}

function RequestsTable({
  requests,
  workingId,
  onStatusChange,
  onDelete,
}) {
  return (
    <TableCard>
      <table className="w-full min-w-[1000px]">
        <TableHead
          columns={[
            "Client",
            "Service",
            "Invoice",
            "Payment",
            "Request status",
            "Submitted",
            "Actions",
          ]}
        />
        <tbody>
          {requests.map((request) => (
            <tr
              key={request._id}
              className="border-t border-border transition hover:bg-surface-secondary"
            >
              <Cell>
                <p className="font-semibold text-text-primary">
                  {request.fullName}
                </p>
                <p className="mt-1 text-xs text-text-secondary">
                  {request.email}
                </p>
              </Cell>
              <Cell>{request.serviceTitle}</Cell>
              <Cell>{request.invoiceNumber}</Cell>
              <Cell>
                <AdminStatusBadge
                  status={
                    request.paymentStatus
                  }
                />
              </Cell>
              <Cell>
                <select
                  value={request.status}
                  disabled={
                    workingId === request._id
                  }
                  onChange={(event) =>
                    onStatusChange(
                      request,
                      event.target.value,
                    )
                  }
                  className="h-10 rounded-xl border border-border bg-surface-secondary px-3 text-sm text-text-primary outline-none focus:border-secondary disabled:opacity-50"
                >
                  <option>Pending</option>
                  <option>Processing</option>
                  <option>Completed</option>
                  <option>Cancelled</option>
                </select>
              </Cell>
              <Cell>
                {formatDate(request.createdAt)}
              </Cell>
              <Cell>
                <div className="flex items-center gap-2">
                  <Link
                    href={`/admin-dashboard/requests/${request._id}`}
                    aria-label={`View ${request.fullName}`}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-text-primary transition hover:border-secondary hover:text-secondary"
                  >
                    <Eye size={17} />
                  </Link>

                  <Popconfirm
                    title="Delete request?"
                    description="This request and its payment record will be removed."
                    okText="Delete"
                    cancelText="Cancel"
                    okButtonProps={{
                      danger: true,
                      loading:
                        workingId ===
                        request._id,
                    }}
                    onConfirm={() =>
                      onDelete(request)
                    }
                  >
                    <button
                      type="button"
                      aria-label={`Delete ${request.fullName}`}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-error/30 text-error transition hover:bg-error/10"
                    >
                      <Trash2 size={17} />
                    </button>
                  </Popconfirm>
                </div>
              </Cell>
            </tr>
          ))}
        </tbody>
      </table>
      {!requests.length && (
        <EmptyRows message="No consultation requests have been submitted." />
      )}
    </TableCard>
  );
}

function ClientsTable({ clients }) {
  return (
    <TableCard>
      <table className="w-full min-w-[850px]">
        <TableHead
          columns={[
            "Client",
            "Company",
            "Contact",
            "Requests",
            "Paid value",
            "Last activity",
          ]}
        />
        <tbody>
          {clients.map((client) => (
            <tr
              key={client.email}
              className="border-t border-border hover:bg-surface-secondary"
            >
              <Cell>
                <p className="font-semibold text-text-primary">
                  {client.fullName}
                </p>
                <p className="mt-1 text-xs text-text-secondary">
                  {client.jobTitle ||
                    "Client contact"}
                </p>
              </Cell>
              <Cell>
                {client.company || "—"}
              </Cell>
              <Cell>
                <p>{client.email}</p>
                <p className="mt-1 text-xs text-text-secondary">
                  {client.phone || "No phone"}
                </p>
              </Cell>
              <Cell>{client.requestCount}</Cell>
              <Cell>
                {formatMoney(client.paidTotal)}
              </Cell>
              <Cell>
                {formatDate(client.lastActivity)}
              </Cell>
            </tr>
          ))}
        </tbody>
      </table>
      {!clients.length && (
        <EmptyRows message="No clients are available yet." />
      )}
    </TableCard>
  );
}

function InvoicesTable({ requests }) {
  return (
    <TableCard>
      <table className="w-full min-w-[900px]">
        <TableHead
          columns={[
            "Invoice",
            "Client",
            "Service",
            "Amount",
            "Status",
            "Created",
            "Document",
          ]}
        />
        <tbody>
          {requests.map((request) => (
            <tr
              key={request._id}
              className="border-t border-border hover:bg-surface-secondary"
            >
              <Cell>
                <span className="font-semibold text-text-primary">
                  {request.invoiceNumber}
                </span>
              </Cell>
              <Cell>{request.fullName}</Cell>
              <Cell>{request.serviceTitle}</Cell>
              <Cell>
                {formatMoney(request.amount)}
              </Cell>
              <Cell>
                <AdminStatusBadge
                  status={
                    request.paymentStatus
                  }
                />
              </Cell>
              <Cell>
                {formatDate(request.createdAt)}
              </Cell>
              <Cell>
                {request.stripeInvoicePdf ||
                request.stripeInvoiceUrl ? (
                  <a
                    href={
                      request.stripeInvoicePdf ||
                      request.stripeInvoiceUrl
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 items-center gap-2 rounded-xl border border-border px-3 text-sm font-semibold text-text-primary transition hover:border-secondary hover:text-secondary"
                  >
                    <Download size={16} />
                    Open
                  </a>
                ) : (
                  <span className="text-text-secondary">
                    Pending
                  </span>
                )}
              </Cell>
            </tr>
          ))}
        </tbody>
      </table>
    </TableCard>
  );
}

function PaymentsTable({ requests }) {
  return (
    <TableCard>
      <table className="w-full min-w-[900px]">
        <TableHead
          columns={[
            "Client",
            "Invoice",
            "Amount",
            "Payment",
            "Paid at",
            "Stripe reference",
          ]}
        />
        <tbody>
          {requests.map((request) => (
            <tr
              key={request._id}
              className="border-t border-border hover:bg-surface-secondary"
            >
              <Cell>
                <p className="font-semibold text-text-primary">
                  {request.fullName}
                </p>
                <p className="mt-1 text-xs text-text-secondary">
                  {request.email}
                </p>
              </Cell>
              <Cell>{request.invoiceNumber}</Cell>
              <Cell>
                {formatMoney(request.amount)}
              </Cell>
              <Cell>
                <AdminStatusBadge
                  status={
                    request.paymentStatus
                  }
                />
              </Cell>
              <Cell>
                {request.paidAt
                  ? formatDate(request.paidAt)
                  : "—"}
              </Cell>
              <Cell>
                <span className="block max-w-56 truncate text-xs text-text-secondary">
                  {request.stripePaymentIntentId ||
                    request.stripeSessionId ||
                    "Not created"}
                </span>
              </Cell>
            </tr>
          ))}
        </tbody>
      </table>
    </TableCard>
  );
}

function EmailTable({
  requests,
  workingId,
  onRetry,
}) {
  return (
    <TableCard>
      <table className="w-full min-w-[950px]">
        <TableHead
          columns={[
            "Invoice",
            "Customer",
            "Customer email",
            "Admin email",
            "Last attempt",
            "Delivery issue",
            "Action",
          ]}
        />
        <tbody>
          {requests.map((request) => (
            <tr
              key={request._id}
              className="border-t border-border hover:bg-surface-secondary"
            >
              <Cell>{request.invoiceNumber}</Cell>
              <Cell>
                <p>{request.fullName}</p>
                <p className="mt-1 text-xs text-text-secondary">
                  {request.email}
                </p>
              </Cell>
              <Cell>
                <AdminStatusBadge
                  status={
                    request.customerPaymentEmailSentAt
                      ? "Sent"
                      : request.paymentEmailLastError
                        ? "Failed"
                        : "Pending"
                  }
                />
              </Cell>
              <Cell>
                <AdminStatusBadge
                  status={
                    request.adminPaymentEmailSentAt
                      ? "Sent"
                      : request.paymentEmailLastError
                        ? "Failed"
                        : "Pending"
                  }
                />
              </Cell>
              <Cell>
                {request.paymentEmailLastAttemptAt
                  ? formatDate(
                      request.paymentEmailLastAttemptAt,
                    )
                  : "—"}
              </Cell>
              <Cell>
                <p className="max-w-80 text-xs leading-5 text-text-secondary">
                  {request.paymentEmailLastError ||
                    "No delivery errors recorded."}
                </p>
              </Cell>
              <Cell>
                {!request.customerPaymentEmailSentAt ||
                !request.adminPaymentEmailSentAt ? (
                  <button
                    type="button"
                    disabled={workingId === request._id}
                    onClick={() => onRetry(request)}
                    className="inline-flex h-10 items-center gap-2 rounded-xl border border-border px-3 text-sm font-semibold text-text-primary transition hover:border-secondary hover:text-secondary disabled:opacity-50"
                  >
                    <RefreshCw
                      size={16}
                      className={
                        workingId === request._id ? "animate-spin" : ""
                      }
                    />
                    Retry
                  </button>
                ) : (
                  <span className="text-xs font-semibold text-success">
                    Delivered
                  </span>
                )}
              </Cell>
            </tr>
          ))}
        </tbody>
      </table>
    </TableCard>
  );
}

function TableCard({ children }) {
  return (
    <section className="mt-8 overflow-x-auto rounded-2xl border border-border bg-surface shadow-sm">
      {children}
    </section>
  );
}

function TableHead({ columns }) {
  return (
    <thead className="bg-surface-secondary">
      <tr>
        {columns.map((column) => (
          <th
            key={column}
            className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-text-secondary"
          >
            {column}
          </th>
        ))}
      </tr>
    </thead>
  );
}

function Cell({ children }) {
  return (
    <td className="px-5 py-4 text-sm text-text-primary">
      {children}
    </td>
  );
}

function EmptyRows({ message }) {
  return (
    <div className="p-12 text-center text-text-secondary">
      {message}
    </div>
  );
}

function ErrorState({
  message: errorMessage,
  onRetry,
}) {
  return (
    <div className="mt-8 rounded-2xl border border-error/30 bg-error/10 p-6">
      <p className="font-semibold text-error">
        Unable to load this page
      </p>
      <p className="mt-2 text-sm text-text-secondary">
        {errorMessage}
      </p>
      <button
        type="button"
        onClick={onRetry}
        className="mt-4 rounded-xl bg-error px-4 py-2 text-sm font-semibold text-text-light"
      >
        Try again
      </button>
    </div>
  );
}

function TableSkeleton() {
  return (
    <div className="mt-8 space-y-3 rounded-2xl border border-border bg-surface p-5">
      {Array.from({ length: 7 }).map(
        (_, index) => (
          <div
            key={index}
            className="h-14 animate-pulse rounded-xl bg-surface-secondary"
          />
        ),
      )}
    </div>
  );
}

export function formatMoney(value) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(Number(value) || 0);
}

export function formatDate(value) {
  if (!value) return "—";

  return new Intl.DateTimeFormat(
    "en-GB",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    },
  ).format(new Date(value));
}
