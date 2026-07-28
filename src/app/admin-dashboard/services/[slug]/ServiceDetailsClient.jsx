"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Popconfirm } from "antd";

import {
  ArrowLeft,
  CalendarDays,
  Check,
  CheckCircle2,
  Clock3,
  Edit3,
  HelpCircle,
  ListChecks,
  LoaderCircle,
  Sparkles,
  Trash2,
  XCircle,
} from "lucide-react";

import DashboardLayout from "@/components/admin/dashboard/DashboardLayout";
import serviceApi from "@/api/serviceApi";

export default function ServiceDetailsClient({ slug }) {
  const router = useRouter();

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState("");

  const fetchService = useCallback(async () => {
    if (!slug) return;

    try {
      setLoading(true);
      setError("");

      const response = await serviceApi.getService(slug);

      if (!response?.success) {
        throw new Error(
          response?.message || "Unable to load service.",
        );
      }

      setService(
        response.data ||
          response.service ||
          null,
      );
    } catch (error) {
      console.error("Get service error:", error);

      setService(null);

      setError(
        error?.response?.data?.message ||
          error?.message ||
          "Unable to load service.",
      );
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    fetchService();
  }, [fetchService]);

  const handleEdit = () => {
    if (!service?.slug) return;

    router.push(
      `/admin-dashboard/service/${encodeURIComponent(
        service.slug,
      )}/edit`,
    );
  };

  const handleDelete = async () => {
    if (!service?._id || deleting) return;

    try {
      setDeleting(true);
      setError("");

      const response =
        await serviceApi.deleteService(
          service._id,
        );

      if (!response?.success) {
        throw new Error(
          response?.message ||
            "Unable to delete service.",
        );
      }

      router.replace(
        "/admin-dashboard/service",
      );
      router.refresh();
    } catch (error) {
      console.error(
        "Delete service error:",
        error,
      );

      setError(
        error?.response?.data?.message ||
          error?.message ||
          "Unable to delete service.",
      );
    } finally {
      setDeleting(false);
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <DetailsSkeleton />
      </DashboardLayout>
    );
  }

  if (!service) {
    return (
      <DashboardLayout>
        <ServiceNotFound
          message={error}
          onBack={() =>
            router.push(
              "/admin-dashboard/service",
            )
          }
          onRetry={fetchService}
        />
      </DashboardLayout>
    );
  }

  const included = Array.isArray(
    service.included,
  )
    ? service.included
    : [];

  const benefits = Array.isArray(
    service.benefits,
  )
    ? service.benefits
    : [];

  const outcomes = Array.isArray(
    service.outcomes,
  )
    ? service.outcomes
    : [];

  const faq = Array.isArray(service.faq)
    ? service.faq
    : [];

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <button
            type="button"
            onClick={() =>
              router.push(
                "/admin-dashboard/service",
              )
            }
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-text-secondary transition hover:text-secondary"
          >
            <ArrowLeft size={18} />
            Back to services
          </button>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleEdit}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-surface px-5 text-sm font-semibold text-text-primary transition hover:border-secondary hover:text-secondary"
            >
              <Edit3 size={17} />
              Edit service
            </button>

            <Popconfirm
              title="Delete service?"
              description={`Are you sure you want to delete "${service.title}"? This action cannot be undone.`}
              okText="Delete"
              cancelText="Cancel"
              placement="bottomRight"
              onConfirm={handleDelete}
              okButtonProps={{
                danger: true,
                loading: deleting,
              }}
              cancelButtonProps={{
                disabled: deleting,
              }}
            >
              <button
                type="button"
                disabled={deleting}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-error px-5 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {deleting ? (
                  <LoaderCircle
                    size={17}
                    className="animate-spin"
                  />
                ) : (
                  <Trash2 size={17} />
                )}

                {deleting
                  ? "Deleting..."
                  : "Delete service"}
              </button>
            </Popconfirm>
          </div>
        </div>

        {error && (
          <div className="mb-6 rounded-2xl border border-error/30 bg-error/10 p-5">
            <p className="font-semibold text-error">
              Something went wrong
            </p>

            <p className="mt-1 text-sm text-text-secondary">
              {error}
            </p>
          </div>
        )}

        <section className="overflow-hidden rounded-3xl border border-border bg-surface">
          <div className="relative min-h-[380px] bg-surface-secondary lg:min-h-[480px]">
            {service.heroImage ? (
              <Image
                src={service.heroImage}
                alt={service.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
                className="object-cover"
              />
            ) : (
              <div className="flex min-h-[380px] items-center justify-center lg:min-h-[480px]">
                <Sparkles
                  size={70}
                  className="text-text-light"
                />
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/5" />

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
              <div className="flex flex-wrap gap-2">
                <StatusBadge
                  active={service.active}
                />

                {service.featured && (
                  <span className="rounded-full bg-secondary px-3 py-1.5 text-xs font-bold text-primary">
                    Featured
                  </span>
                )}
              </div>

              <div className="mt-5 max-w-4xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                  Consultancy Service
                </p>

                <h1 className="mt-2 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
                  {service.title}
                </h1>

                {service.shortDescription && (
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-white/80 sm:text-base">
                    {service.shortDescription}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <SummaryCard
            icon={Sparkles}
            label="Price"
            value={formatPrice(service.price)}
          />

          <SummaryCard
            icon={Clock3}
            label="Duration"
            value={
              service.duration ||
              "Not specified"
            }
          />

          <SummaryCard
            icon={ListChecks}
            label="Included"
            value={`${included.length} item${
              included.length === 1 ? "" : "s"
            }`}
          />

          <SummaryCard
            icon={HelpCircle}
            label="FAQ"
            value={`${faq.length} question${
              faq.length === 1 ? "" : "s"
            }`}
          />
        </section>

        <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
          <main className="space-y-6">
            <SectionCard
              title="Service overview"
              description="Full information about this service."
            >
              {service.overview ? (
                <p className="whitespace-pre-line text-sm leading-8 text-text-secondary sm:text-base">
                  {service.overview}
                </p>
              ) : (
                <EmptyState message="No overview has been added." />
              )}
            </SectionCard>

            <ServiceListSection
              title="What is included"
              description="Everything included when a client selects this service."
              items={included}
              icon={Check}
            />

            <ServiceListSection
              title="Benefits"
              description="The main advantages clients receive from this service."
              items={benefits}
              icon={Sparkles}
            />

            <ServiceListSection
              title="Expected outcomes"
              description="The results clients should expect after completing this service."
              items={outcomes}
              icon={CheckCircle2}
            />

            <SectionCard
              title="Frequently asked questions"
              description="Common questions clients may ask about this service."
            >
              {faq.length > 0 ? (
                <div className="space-y-4">
                  {faq.map((item, index) => (
                    <FaqCard
                      key={`${item?.question}-${index}`}
                      item={item}
                      index={index}
                    />
                  ))}
                </div>
              ) : (
                <EmptyState message="No frequently asked questions have been added." />
              )}
            </SectionCard>
          </main>

          <aside className="space-y-6">
            <SectionCard title="Service details">
              <div className="space-y-5">
                <DetailRow
                  label="Title"
                  value={service.title}
                />

                <DetailRow
                  label="Slug"
                  value={service.slug}
                />

                <DetailRow
                  label="Icon"
                  value={
                    service.icon ||
                    "Not specified"
                  }
                />

                <DetailRow
                  label="Price"
                  value={formatPrice(
                    service.price,
                  )}
                />

                <DetailRow
                  label="Duration"
                  value={
                    service.duration ||
                    "Not specified"
                  }
                />

                <DetailRow
                  label="Status"
                  value={
                    service.active
                      ? "Active"
                      : "Inactive"
                  }
                />

                <DetailRow
                  label="Featured"
                  value={
                    service.featured
                      ? "Yes"
                      : "No"
                  }
                />
              </div>
            </SectionCard>

            <SectionCard title="Record information">
              <div className="space-y-5">
                <DateRow
                  label="Created"
                  value={service.createdAt}
                />

                <DateRow
                  label="Last updated"
                  value={service.updatedAt}
                />
              </div>
            </SectionCard>

            <div className="rounded-2xl border border-error/20 bg-error/5 p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-error/10 text-error">
                <Trash2 size={20} />
              </div>

              <h2 className="mt-4 font-bold text-text-primary">
                Delete this service
              </h2>

              <p className="mt-2 text-sm leading-6 text-text-secondary">
                This permanently removes the
                service from the website.
              </p>

              <Popconfirm
                title="Delete service?"
                description={`Are you sure you want to delete "${service.title}"? This action cannot be undone.`}
                okText="Delete"
                cancelText="Cancel"
                placement="top"
                onConfirm={handleDelete}
                okButtonProps={{
                  danger: true,
                  loading: deleting,
                }}
                cancelButtonProps={{
                  disabled: deleting,
                }}
              >
                <button
                  type="button"
                  disabled={deleting}
                  className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-error px-4 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {deleting ? (
                    <LoaderCircle
                      size={17}
                      className="animate-spin"
                    />
                  ) : (
                    <Trash2 size={17} />
                  )}

                  {deleting
                    ? "Deleting..."
                    : "Delete service"}
                </button>
              </Popconfirm>
            </div>
          </aside>
        </div>
      </div>
    </DashboardLayout>
  );
}

function StatusBadge({ active }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold ${
        active
          ? "bg-success text-white"
          : "bg-error text-white"
      }`}
    >
      {active ? (
        <CheckCircle2 size={14} />
      ) : (
        <XCircle size={14} />
      )}

      {active ? "Active" : "Inactive"}
    </span>
  );
}

function SummaryCard({
  icon: Icon,
  label,
  value,
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5">
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface-secondary text-secondary">
          <Icon size={20} />
        </div>

        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wider text-text-light">
            {label}
          </p>

          <p className="mt-1 truncate font-bold text-text-primary">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

function SectionCard({
  title,
  description,
  children,
}) {
  return (
    <section className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
      <div className="border-b border-border pb-5">
        <h2 className="text-xl font-bold text-text-primary">
          {title}
        </h2>

        {description && (
          <p className="mt-1 text-sm leading-6 text-text-secondary">
            {description}
          </p>
        )}
      </div>

      <div className="pt-5">{children}</div>
    </section>
  );
}

function ServiceListSection({
  title,
  description,
  items,
  icon: Icon,
}) {
  return (
    <SectionCard
      title={title}
      description={description}
    >
      {items.length > 0 ? (
        <div className="grid gap-3 md:grid-cols-2">
          {items.map((item, index) => (
            <div
              key={`${getListValue(item)}-${index}`}
              className="flex items-start gap-3 rounded-xl border border-border bg-surface-secondary p-4"
            >
              <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-secondary/15 text-secondary">
                <Icon size={15} />
              </div>

              <p className="text-sm leading-6 text-text-primary">
                {getListValue(item)}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <EmptyState
          message={`No ${title.toLowerCase()} have been added.`}
        />
      )}
    </SectionCard>
  );
}

function FaqCard({ item, index }) {
  const question =
    typeof item === "string"
      ? item
      : item?.question ||
        `Question ${index + 1}`;

  const answer =
    typeof item === "object"
      ? item?.answer
      : "";

  return (
    <article className="rounded-xl border border-border bg-surface-secondary p-5">
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary/15 text-secondary">
          <HelpCircle size={17} />
        </div>

        <div>
          <h3 className="font-bold text-text-primary">
            {question}
          </h3>

          <p className="mt-2 whitespace-pre-line text-sm leading-7 text-text-secondary">
            {answer ||
              "No answer has been provided."}
          </p>
        </div>
      </div>
    </article>
  );
}

function DetailRow({ label, value }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-text-light">
        {label}
      </p>

      <p className="mt-1 break-words text-sm font-semibold text-text-primary">
        {value || "Not available"}
      </p>
    </div>
  );
}

function DateRow({ label, value }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface-secondary text-secondary">
        <CalendarDays size={17} />
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-text-light">
          {label}
        </p>

        <p className="mt-1 text-sm font-semibold text-text-primary">
          {formatDate(value)}
        </p>
      </div>
    </div>
  );
}

function EmptyState({ message }) {
  return (
    <div className="rounded-xl border border-dashed border-border bg-surface-secondary p-6 text-center">
      <p className="text-sm text-text-secondary">
        {message}
      </p>
    </div>
  );
}

function ServiceNotFound({
  message,
  onBack,
  onRetry,
}) {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-xl items-center">
      <div className="w-full rounded-3xl border border-border bg-surface p-8 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-error/10 text-error">
          <XCircle size={30} />
        </div>

        <h1 className="mt-5 text-2xl font-bold text-text-primary">
          Service not found
        </h1>

        <p className="mt-2 text-sm leading-6 text-text-secondary">
          {message ||
            "The requested service could not be found."}
        </p>

        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-surface px-5 text-sm font-semibold text-text-primary"
          >
            <ArrowLeft size={17} />
            Back to services
          </button>

          <button
            type="button"
            onClick={onRetry}
            className="inline-flex h-11 items-center justify-center rounded-xl bg-secondary px-5 text-sm font-semibold text-primary"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}

function DetailsSkeleton() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-6 h-10 w-40 animate-pulse rounded-xl bg-surface-secondary" />

      <div className="h-[480px] animate-pulse rounded-3xl bg-surface-secondary" />

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map(
          (_, index) => (
            <div
              key={index}
              className="h-24 animate-pulse rounded-2xl bg-surface-secondary"
            />
          ),
        )}
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
        <div className="space-y-6">
          {Array.from({ length: 4 }).map(
            (_, index) => (
              <div
                key={index}
                className="h-64 animate-pulse rounded-2xl bg-surface-secondary"
              />
            ),
          )}
        </div>

        <div className="h-96 animate-pulse rounded-2xl bg-surface-secondary" />
      </div>
    </div>
  );
}

function getListValue(item) {
  if (typeof item === "string") {
    return item;
  }

  return (
    item?.title ||
    item?.name ||
    item?.text ||
    item?.description ||
    "Untitled item"
  );
}

function formatPrice(value) {
  const price = Number(value);

  if (!Number.isFinite(price) || price <= 0) {
    return "Quote required";
  }

  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 2,
  }).format(price);
}

function formatDate(value) {
  if (!value) return "Not available";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Not available";
  }

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}
