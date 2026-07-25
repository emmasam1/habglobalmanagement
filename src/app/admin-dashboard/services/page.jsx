"use client";

import {
  useCallback,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { Plus, Search } from "lucide-react";

import serviceApi from "@/api/serviceApi";
import DashboardLayout from "@/components/admin/dashboard/DashboardLayout";
import AdminServiceCard from "@/components/admin/services/AdminServiceCard";

const SERVICES_PER_PAGE = 9;
const SEARCH_DEBOUNCE_DELAY = 400;
const SERVICES_ROUTE =
  "/admin-dashboard/services";

export default function ServicesPage() {
  const router = useRouter();

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] =
    useState(null);
  const [error, setError] = useState("");

  const [searchValue, setSearchValue] =
    useState("");
  const [
    debouncedSearch,
    setDebouncedSearch,
  ] = useState("");

  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [total, setTotal] = useState(0);

  const fetchServices = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const response =
        await serviceApi.getServices({
          page,
          limit: SERVICES_PER_PAGE,
          search: debouncedSearch,
        });

        console.log(response)

      if (!response?.success) {
        throw new Error(
          response?.message ||
            "Unable to load services.",
        );
      }

      setServices(
        Array.isArray(response.data)
          ? response.data
          : [],
      );
      setTotal(Number(response.total) || 0);
      setPages(Number(response.pages) || 1);
    } catch (error) {
      console.error(
        "Get services error:",
        error,
      );

      setServices([]);
      setTotal(0);
      setPages(1);
      setError(
        getErrorMessage(
          error,
          "Unable to load services.",
        ),
      );
    } finally {
      setLoading(false);
    }
  }, [debouncedSearch, page]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPage(1);
      setDebouncedSearch(
        searchValue.trim(),
      );
    }, SEARCH_DEBOUNCE_DELAY);

    return () => clearTimeout(timer);
  }, [searchValue]);

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  const handleCreate = () => {
    router.push(`${SERVICES_ROUTE}/create`);
  };

  const handleView = (service) => {
    if (!service?.slug) return;

    router.push(
      `${SERVICES_ROUTE}/${encodeURIComponent(
        service.slug,
      )}`,
    );
  };

  const handleEdit = (service) => {
    if (!service?.slug) return;

    router.push(
      `${SERVICES_ROUTE}/${encodeURIComponent(
        service.slug,
      )}/edit`,
    );
  };

  const handleDelete = async (service) => {
    if (!service?._id || deletingId) return;

    try {
      setDeletingId(service._id);
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

      const isLastServiceOnPage =
        services.length === 1;

      if (isLastServiceOnPage && page > 1) {
        setPage(
          (currentPage) => currentPage - 1,
        );
        return;
      }

      await fetchServices();
    } catch (error) {
      console.error(
        "Delete service error:",
        error,
      );

      setError(
        getErrorMessage(
          error,
          "Unable to delete service.",
        ),
      );
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-7xl">
        <PageHeader
          onCreate={handleCreate}
        />

        <SearchPanel
          value={searchValue}
          onChange={setSearchValue}
        />

        <ResultsSummary
          visibleCount={services.length}
          total={total}
          search={debouncedSearch}
        />

        {error && (
          <ErrorMessage
            message={error}
            onRetry={fetchServices}
          />
        )}

        {loading ? (
          <ServicesSkeleton />
        ) : services.length === 0 ? (
          <EmptyServices
            hasSearch={Boolean(
              debouncedSearch,
            )}
            onCreate={handleCreate}
          />
        ) : (
          <ServicesGrid
            services={services}
            deletingId={deletingId}
            onView={handleView}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}

        {!loading && pages > 1 && (
          <Pagination
            page={page}
            pages={pages}
            onPageChange={setPage}
          />
        )}
      </div>
    </DashboardLayout>
  );
}

function PageHeader({ onCreate }) {
  return (
    <header className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-sm font-semibold text-secondary">
          HAB Global Management
        </p>

        <h1 className="mt-1 text-3xl font-bold text-text-primary">
          Services
        </h1>

        <p className="mt-2 text-text-secondary">
          Create, update and manage consultancy
          services.
        </p>
      </div>

      <button
        type="button"
        onClick={onCreate}
        className="flex h-12 items-center justify-center gap-2 rounded-xl bg-secondary px-6 font-semibold text-primary transition hover:opacity-90"
      >
        <Plus size={18} />
        New Service
      </button>
    </header>
  );
}

function SearchPanel({ value, onChange }) {
  return (
    <section className="mt-8 rounded-2xl border border-border bg-surface p-5 shadow-sm">
      <label
        htmlFor="service-search"
        className="sr-only"
      >
        Search services
      </label>

      <div className="relative">
        <Search
          size={18}
          aria-hidden="true"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"
        />

        <input
          id="service-search"
          type="search"
          value={value}
          onChange={(event) =>
            onChange(event.target.value)
          }
          placeholder="Search services..."
          className="h-12 w-full rounded-xl border border-border bg-surface-secondary pl-12 pr-4 text-text-primary outline-none placeholder:text-text-secondary focus:border-secondary"
        />
      </div>
    </section>
  );
}

function ResultsSummary({
  visibleCount,
  total,
  search,
}) {
  return (
    <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
      <p className="text-sm text-text-secondary">
        Showing{" "}
        <span className="font-semibold text-text-primary">
          {visibleCount}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-text-primary">
          {total}
        </span>{" "}
        services
      </p>

      {search && (
        <p className="text-sm text-text-secondary">
          Results for{" "}
          <span className="font-semibold text-text-primary">
            “{search}”
          </span>
        </p>
      )}
    </div>
  );
}

function ErrorMessage({
  message,
  onRetry,
}) {
  return (
    <div
      role="alert"
      className="mt-6 rounded-2xl border border-error/30 bg-error/10 p-5"
    >
      <p className="font-semibold text-error">
        Something went wrong
      </p>

      <p className="mt-1 text-sm text-text-secondary">
        {message}
      </p>

      <button
        type="button"
        onClick={onRetry}
        className="mt-4 rounded-xl bg-error px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
      >
        Try again
      </button>
    </div>
  );
}

function ServicesGrid({
  services,
  deletingId,
  onView,
  onEdit,
  onDelete,
}) {
  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {services.map((service) => (
        <AdminServiceCard
          key={service._id}
          service={service}
          deleting={
            deletingId === service._id
          }
          onView={onView}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

function ServicesSkeleton() {
  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 6 }).map(
        (_, index) => (
          <div
            key={index}
            className="h-[470px] animate-pulse rounded-2xl border border-border bg-surface-secondary"
          />
        ),
      )}
    </div>
  );
}

function EmptyServices({
  hasSearch,
  onCreate,
}) {
  return (
    <div className="mt-8 rounded-2xl border border-dashed border-border bg-surface p-12 text-center sm:p-20">
      <h2 className="text-xl font-bold text-text-primary">
        No services found
      </h2>

      <p className="mt-2 text-text-secondary">
        {hasSearch
          ? "No service matches your search."
          : "Create your first consultancy service."}
      </p>

      {!hasSearch && (
        <button
          type="button"
          onClick={onCreate}
          className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-secondary px-5 font-semibold text-primary transition hover:opacity-90"
        >
          <Plus size={17} />
          Create Service
        </button>
      )}
    </div>
  );
}

function Pagination({
  page,
  pages,
  onPageChange,
}) {
  const pageNumbers = Array.from(
    { length: pages },
    (_, index) => index + 1,
  );

  return (
    <nav
      aria-label="Services pagination"
      className="mt-10 flex flex-wrap justify-center gap-2"
    >
      <button
        type="button"
        onClick={() =>
          onPageChange(page - 1)
        }
        disabled={page === 1}
        className="h-11 rounded-xl border border-border bg-surface px-4 text-sm font-semibold text-text-primary transition hover:border-secondary disabled:cursor-not-allowed disabled:opacity-40"
      >
        Previous
      </button>

      {pageNumbers.map((pageNumber) => {
        const isCurrentPage =
          page === pageNumber;

        return (
          <button
            type="button"
            key={pageNumber}
            aria-current={
              isCurrentPage
                ? "page"
                : undefined
            }
            onClick={() =>
              onPageChange(pageNumber)
            }
            className={`flex h-11 min-w-11 items-center justify-center rounded-xl border px-3 font-semibold transition ${
              isCurrentPage
                ? "border-secondary bg-secondary text-primary"
                : "border-border bg-surface text-text-primary hover:border-secondary"
            }`}
          >
            {pageNumber}
          </button>
        );
      })}

      <button
        type="button"
        onClick={() =>
          onPageChange(page + 1)
        }
        disabled={page === pages}
        className="h-11 rounded-xl border border-border bg-surface px-4 text-sm font-semibold text-text-primary transition hover:border-secondary disabled:cursor-not-allowed disabled:opacity-40"
      >
        Next
      </button>
    </nav>
  );
}

function getErrorMessage(
  error,
  fallbackMessage,
) {
  return (
    error?.response?.data?.message ||
    error?.message ||
    fallbackMessage
  );
}