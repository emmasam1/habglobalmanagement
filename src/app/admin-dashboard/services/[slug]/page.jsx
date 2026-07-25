// "use client";

// import { useCallback, useEffect, useState } from "react";
// import { Plus, Search } from "lucide-react";
// import { useRouter } from "next/navigation";

// import DashboardLayout from "@/components/admin/dashboard/DashboardLayout";
// import AdminServiceCard from "@/components/admin/services/AdminServiceCard";
// import serviceApi from "@/api/serviceApi";

// const SERVICES_PER_PAGE = 9;

// export default function ServicesPage() {
//   const router = useRouter();

//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [deletingId, setDeletingId] = useState(null);
//   const [error, setError] = useState("");

//   const [searchValue, setSearchValue] = useState("");
//   const [debouncedSearch, setDebouncedSearch] = useState("");

//   const [page, setPage] = useState(1);
//   const [pages, setPages] = useState(1);
//   const [total, setTotal] = useState(0);

//   const fetchServices = useCallback(async () => {
//     try {
//       setLoading(true);
//       setError("");

//       const response = await serviceApi.getServices({
//         page,
//         limit: SERVICES_PER_PAGE,
//         search: debouncedSearch,
//       });

//       if (!response?.success) {
//         throw new Error(
//           response?.message || "Unable to load services.",
//         );
//       }

//       setServices(response.data || []);
//       setTotal(response.total || 0);
//       setPages(response.pages || 1);
//     } catch (error) {
//       console.error("Get services error:", error);

//       setServices([]);
//       setTotal(0);
//       setPages(1);

//       setError(
//         error?.response?.data?.message ||
//           error?.message ||
//           "Unable to load services.",
//       );
//     } finally {
//       setLoading(false);
//     }
//   }, [page, debouncedSearch]);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setPage(1);
//       setDebouncedSearch(searchValue.trim());
//     }, 400);

//     return () => clearTimeout(timer);
//   }, [searchValue]);

//   useEffect(() => {
//     fetchServices();
//   }, [fetchServices]);

//   const handleCreate = () => {
//     router.push("/admin-dashboard/services/create");
//   };

//   const handleView = (service) => {
//     router.push(
//       `/admin-dashboard/services/${encodeURIComponent(
//         service.slug,
//       )}`,
//     );
//   };

//   const handleEdit = (service) => {
//     router.push(
//       `/admin-dashboard/services/${encodeURIComponent(
//         service.slug,
//       )}/edit`,
//     );
//   };

//   const handleDelete = async (service) => {
//     const confirmed = window.confirm(
//       `Are you sure you want to delete "${service.title}"? This action cannot be undone.`,
//     );

//     if (!confirmed) return;

//     try {
//       setDeletingId(service._id);
//       setError("");

//       const response = await serviceApi.deleteService(
//         service._id,
//       );

//       if (!response?.success) {
//         throw new Error(
//           response?.message || "Unable to delete service.",
//         );
//       }

//       const remainingServices = services.filter(
//         (item) => item._id !== service._id,
//       );

//       /*
//        * If the final service on the current page was deleted,
//        * return to the previous page.
//        */
//       if (
//         remainingServices.length === 0 &&
//         page > 1
//       ) {
//         setPage((currentPage) => currentPage - 1);
//         return;
//       }

//       await fetchServices();
//     } catch (error) {
//       console.error("Delete service error:", error);

//       setError(
//         error?.response?.data?.message ||
//           error?.message ||
//           "Unable to delete service.",
//       );
//     } finally {
//       setDeletingId(null);
//     }
//   };

//   return (
//     <DashboardLayout>
//       <div className="mx-auto max-w-7xl">
//         <header className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
//           <div>
//             <p className="text-sm font-semibold text-secondary">
//               HAB Global Management
//             </p>

//             <h1 className="mt-1 text-3xl font-bold text-text-primary">
//               Services
//             </h1>

//             <p className="mt-2 text-text-secondary">
//               Create, update and manage consultancy
//               services.
//             </p>
//           </div>

//           <button
//             type="button"
//             onClick={handleCreate}
//             className="flex h-12 items-center justify-center gap-2 rounded-xl bg-secondary px-6 font-semibold text-primary transition hover:opacity-90"
//           >
//             <Plus size={18} />
//             New Service
//           </button>
//         </header>

//         <section className="mt-8 rounded-2xl border border-border bg-surface p-5 shadow-sm">
//           <div className="relative">
//             <Search
//               size={18}
//               className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"
//             />

//             <input
//               type="search"
//               value={searchValue}
//               onChange={(event) =>
//                 setSearchValue(event.target.value)
//               }
//               placeholder="Search services..."
//               className="h-12 w-full rounded-xl border border-border bg-surface-secondary pl-12 pr-4 text-text-primary outline-none placeholder:text-text-secondary focus:border-secondary"
//             />
//           </div>
//         </section>

//         <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
//           <p className="text-sm text-text-secondary">
//             Showing{" "}
//             <span className="font-semibold text-text-primary">
//               {services.length}
//             </span>{" "}
//             of{" "}
//             <span className="font-semibold text-text-primary">
//               {total}
//             </span>{" "}
//             services
//           </p>

//           {debouncedSearch && (
//             <p className="text-sm text-text-secondary">
//               Results for{" "}
//               <span className="font-semibold text-text-primary">
//                 “{debouncedSearch}”
//               </span>
//             </p>
//           )}
//         </div>

//         {error && (
//           <div className="mt-6 rounded-2xl border border-error/30 bg-error/10 p-5">
//             <p className="font-semibold text-error">
//               Something went wrong
//             </p>

//             <p className="mt-1 text-sm text-text-secondary">
//               {error}
//             </p>

//             <button
//               type="button"
//               onClick={fetchServices}
//               className="mt-4 rounded-xl bg-error px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
//             >
//               Try again
//             </button>
//           </div>
//         )}

//         {loading ? (
//           <ServicesSkeleton />
//         ) : services.length === 0 ? (
//           <EmptyServices
//             hasSearch={Boolean(debouncedSearch)}
//             onCreate={handleCreate}
//           />
//         ) : (
//           <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//             {services.map((service) => (
//               <AdminServiceCard
//                 key={service._id}
//                 service={service}
//                 deleting={deletingId === service._id}
//                 onView={handleView}
//                 onEdit={handleEdit}
//                 onDelete={handleDelete}
//               />
//             ))}
//           </div>
//         )}

//         {!loading && pages > 1 && (
//           <Pagination
//             page={page}
//             pages={pages}
//             onPageChange={setPage}
//           />
//         )}
//       </div>
//     </DashboardLayout>
//   );
// }

// function ServicesSkeleton() {
//   return (
//     <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//       {Array.from({ length: 6 }).map((_, index) => (
//         <div
//           key={index}
//           className="h-[470px] animate-pulse rounded-2xl border border-border bg-surface-secondary"
//         />
//       ))}
//     </div>
//   );
// }

// function EmptyServices({ hasSearch, onCreate }) {
//   return (
//     <div className="mt-8 rounded-2xl border border-dashed border-border bg-surface p-12 text-center sm:p-20">
//       <h2 className="text-xl font-bold text-text-primary">
//         No services found
//       </h2>

//       <p className="mt-2 text-text-secondary">
//         {hasSearch
//           ? "No service matches your search."
//           : "Create your first consultancy service."}
//       </p>

//       {!hasSearch && (
//         <button
//           type="button"
//           onClick={onCreate}
//           className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-secondary px-5 font-semibold text-primary transition hover:opacity-90"
//         >
//           <Plus size={17} />
//           Create Service
//         </button>
//       )}
//     </div>
//   );
// }

// function Pagination({
//   page,
//   pages,
//   onPageChange,
// }) {
//   return (
//     <div className="mt-10 flex flex-wrap justify-center gap-2">
//       <button
//         type="button"
//         onClick={() => onPageChange(page - 1)}
//         disabled={page === 1}
//         className="h-11 rounded-xl border border-border bg-surface px-4 text-sm font-semibold text-text-primary transition hover:border-secondary disabled:cursor-not-allowed disabled:opacity-40"
//       >
//         Previous
//       </button>

//       {Array.from({ length: pages }).map(
//         (_, index) => {
//           const pageNumber = index + 1;

//           return (
//             <button
//               type="button"
//               key={pageNumber}
//               onClick={() =>
//                 onPageChange(pageNumber)
//               }
//               className={`flex h-11 min-w-11 items-center justify-center rounded-xl border px-3 font-semibold transition ${
//                 page === pageNumber
//                   ? "border-secondary bg-secondary text-primary"
//                   : "border-border bg-surface text-text-primary hover:border-secondary"
//               }`}
//             >
//               {pageNumber}
//             </button>
//           );
//         },
//       )}

//       <button
//         type="button"
//         onClick={() => onPageChange(page + 1)}
//         disabled={page === pages}
//         className="h-11 rounded-xl border border-border bg-surface px-4 text-sm font-semibold text-text-primary transition hover:border-secondary disabled:cursor-not-allowed disabled:opacity-40"
//       >
//         Next
//       </button>
//     </div>
//   );
// }

import ServiceDetailsClient from "./ServiceDetailsClient";

export default async function ServiceDetailsPage({ params }) {
  const { slug } = await params;

  return (
    <ServiceDetailsClient
      slug={decodeURIComponent(slug)}
    />
  );
}