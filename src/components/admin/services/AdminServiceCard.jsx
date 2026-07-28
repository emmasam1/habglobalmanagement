// "use client";

// import Image from "next/image";
// import { motion } from "motion/react";
// import { Popconfirm } from "antd";
// import { Clock3, Edit3, Eye, ListChecks, Sparkles, Trash2, LoaderCircle } from "lucide-react";

// export default function AdminServiceCard({
//   service,
//   onView,
//   onEdit,
//   onDelete,
//   deleting,
// }) {
//   const formattedPrice = new Intl.NumberFormat("en-GB", {
//     style: "currency",
//     currency: "GBP",
//     maximumFractionDigits: 0,
//   }).format(service?.price || 0);

//   return (
//     <motion.article
//       initial={{
//         opacity: 0,
//         y: 18,
//       }}
//       animate={{
//         opacity: 1,
//         y: 0,
//       }}
//       whileHover={{
//         y: -4,
//       }}
//       transition={{
//         duration: 0.3,
//       }}
//       className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-shadow hover:shadow-xl"
//     >
//       <div className="relative h-52 overflow-hidden bg-surface-secondary">
//         {service?.heroImage ? (
//           <Image
//             src={service.heroImage}
//             alt={service.title || "Service image"}
//             fill
//             sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
//             className="object-cover transition-transform duration-500 group-hover:scale-105"
//           />
//         ) : (
//           <div className="flex h-full items-center justify-center">
//             <Sparkles size={42} className="text-text-secondary" />
//           </div>
//         )}

//         <div className="absolute left-4 top-4 flex flex-wrap gap-2">
//           {service?.featured && (
//             <span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold text-primary shadow-sm">
//               Featured
//             </span>
//           )}

//           <span
//             className={`rounded-full px-3 py-1 text-xs font-bold shadow-sm ${
//               service?.active ? "bg-success text-white" : "bg-error text-white"
//             }`}
//           >
//             {service?.active ? "Active" : "Inactive"}
//           </span>
//         </div>
//       </div>

//       <div className="p-5">
//         <div className="flex items-start justify-between gap-4">
//           <div className="min-w-0">
//             <h2 className="truncate text-lg font-bold text-text-primary">
//               {service?.title}
//             </h2>

//             <p className="mt-1 text-xl font-bold text-secondary">
//               {formattedPrice}
//             </p>
//           </div>

//           {service?.icon && (
//             <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
//               <span className="text-lg">{service.icon}</span>
//             </div>
//           )}
//         </div>

//         <p className="mt-4 line-clamp-3 min-h-[66px] text-sm leading-6 text-text-secondary">
//           {service?.shortDescription}
//         </p>

//         <div className="mt-5 grid grid-cols-2 gap-3">
//           <div className="flex items-center gap-2 rounded-xl bg-surface-secondary px-3 py-3">
//             <ListChecks size={17} className="text-primary-light" />

//             <div>
//               <p className="text-sm font-semibold text-text-primary">
//                 {service?.included?.length || 0}
//               </p>

//               <p className="text-xs text-text-secondary">Included</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-2 rounded-xl bg-surface-secondary px-3 py-3">
//             <Sparkles size={17} className="text-secondary" />

//             <div>
//               <p className="text-sm font-semibold text-text-primary">
//                 {service?.benefits?.length || 0}
//               </p>

//               <p className="text-xs text-text-secondary">Benefits</p>
//             </div>
//           </div>
//         </div>

//         {service?.duration && (
//           <div className="mt-3 flex items-center gap-2 text-sm text-text-secondary">
//             <Clock3 size={16} />

//             <span>{service.duration}</span>
//           </div>
//         )}

//         <div className="mt-5 flex items-center gap-2 border-t border-border pt-4">
//           <button
//             type="button"
//             onClick={() => onView?.(service)}
//             className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-surface-secondary px-3 py-2.5 text-sm font-semibold text-text-primary transition hover:border-primary-light hover:text-primary-light"
//           >
//             <Eye size={16} />
//             View
//           </button>

//           <button
//             type="button"
//             onClick={() => onEdit?.(service)}
//             className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-text-secondary transition hover:border-secondary hover:bg-secondary/10 hover:text-secondary"
//             aria-label={`Edit ${service?.title}`}
//           >
//             <Edit3 size={17} />
//           </button>

//          <Popconfirm
//   title="Delete service?"
//   description={`Are you sure you want to delete "${service.title}"? This action cannot be undone.`}
//   okText="Delete"
//   cancelText="Cancel"
//   placement="topRight"
//   onConfirm={() => onDelete(service)}
//   okButtonProps={{
//     danger: true,
//     loading: deleting,
//   }}
//   cancelButtonProps={{
//     disabled: deleting,
//   }}
// >
//   <button
//     type="button"
//     disabled={deleting}
//     className="inline-flex items-center justify-center gap-2 rounded-xl bg-error px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
//   >
//     {deleting ? (
//       <LoaderCircle
//         size={16}
//         className="animate-spin"
//       />
//     ) : (
//       <Trash2 size={16} />
//     )}

//     {deleting ? "Deleting..." : "Delete"}
//   </button>
// </Popconfirm>
//         </div>
//       </div>
//     </motion.article>
//   );
// }

"use client";

import Image from "next/image";
import { Popconfirm } from "antd";
import {
  Activity,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  CircleCheckBig,
  ClipboardCheck,
  ClipboardList,
  Eye,
  FileCheck2,
  Gauge,
  GraduationCap,
  Handshake,
  HeartPulse,
  Landmark,
  Lightbulb,
  ListChecks,
  LoaderCircle,
  Pencil,
  Plane,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  Trash2,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";

const ICON_MAP = {
  Activity,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  CircleCheckBig,
  ClipboardCheck,
  ClipboardList,
  FileCheck2,
  Gauge,
  GraduationCap,
  Handshake,
  HeartPulse,
  Landmark,
  Lightbulb,
  Plane,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
};

const ACCENT_STYLES = {
  gold: {
    iconBackground: "bg-secondary",
    iconText: "text-primary",
  },

  blue: {
    iconBackground: "bg-primary",
    iconText: "text-text-primary",
  },

  emerald: {
    iconBackground: "bg-success",
    iconText: "text-text-primary",
  },

  violet: {
    iconBackground: "bg-primary",
    iconText: "text-text-primary",
  },

  red: {
    iconBackground: "bg-error",
    iconText: "text-text-primary",
  },

  orange: {
    iconBackground: "bg-secondary",
    iconText: "text-primary",
  },

  cyan: {
    iconBackground: "bg-primary",
    iconText: "text-text-primary",
  },
};

export default function AdminServiceCard({
  service,
  deleting = false,
  onView,
  onEdit,
  onDelete,
}) {
  const ServiceIcon =
    ICON_MAP[service?.icon] || Settings2;

  const accent =
    ACCENT_STYLES[service?.accent] ||
    ACCENT_STYLES.gold;

  const includedCount = Array.isArray(
    service?.included,
  )
    ? service.included.length
    : 0;

  const benefitsCount = Array.isArray(
    service?.benefits,
  )
    ? service.benefits.length
    : 0;

  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="relative aspect-[16/10] bg-surface-secondary">
        {service?.heroImage ? (
          <Image
            src={service.heroImage}
            alt={
              service.title ||
              "Service cover image"
            }
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <ServiceIcon
              size={54}
              className="text-text-light"
            />
          </div>
        )}

        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {service?.featured && (
            <span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold text-primary">
              Featured
            </span>
          )}

          <span
            className={`rounded-full px-3 py-1 text-xs font-bold ${
              service?.active
                ? "bg-success text-text-primary"
                : "bg-error text-text-primary"
            }`}
          >
            {service?.active
              ? "Active"
              : "Inactive"}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            {service?.badge && (
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-secondary">
                {service.badge}
              </p>
            )}

            <h2 className="line-clamp-2 text-xl font-bold text-text-primary">
              {service?.title ||
                "Untitled service"}
            </h2>

            <p className="mt-1 text-lg font-bold text-secondary">
              {formatPrice(service?.price)}
            </p>
          </div>

          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${accent.iconBackground} ${accent.iconText}`}
            title={
              service?.icon ||
              "Settings2"
            }
          >
            <ServiceIcon
              size={23}
              strokeWidth={2}
              aria-hidden="true"
            />
          </div>
        </div>

        <p className="mt-5 line-clamp-3 min-h-[72px] text-sm leading-6 text-text-secondary">
          {service?.shortDescription ||
            "No short description has been added."}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <StatCard
            icon={ListChecks}
            value={includedCount}
            label="Included"
          />

          <StatCard
            icon={Sparkles}
            value={benefitsCount}
            label="Benefits"
          />
        </div>

        {service?.duration && (
          <p className="mt-4 text-sm text-text-secondary">
            Duration:{" "}
            <span className="font-semibold text-text-primary">
              {service.duration}
            </span>
          </p>
        )}

        <div className="my-5 border-t border-border" />

        <div className="grid grid-cols-[minmax(0,1fr)_44px_minmax(0,1fr)] gap-2">
          <button
            type="button"
            onClick={() => onView(service)}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-surface-secondary px-4 text-sm font-semibold text-text-primary transition hover:border-secondary"
          >
            <Eye size={16} />
            View
          </button>

          <button
            type="button"
            onClick={() => onEdit(service)}
            aria-label={`Edit ${service?.title}`}
            className="inline-flex h-11 items-center justify-center rounded-xl border border-border bg-surface-secondary text-text-primary transition hover:border-secondary hover:text-secondary"
          >
            <Pencil size={17} />
          </button>

          <Popconfirm
            title="Delete service?"
            description={`Are you sure you want to delete "${service?.title}"? This cannot be undone.`}
            okText="Delete"
            cancelText="Cancel"
            placement="topRight"
            onConfirm={() =>
              onDelete(service)
            }
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
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-error px-4 text-sm font-semibold text-text-primary transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {deleting ? (
                <LoaderCircle
                  size={16}
                  className="animate-spin"
                />
              ) : (
                <Trash2 size={16} />
              )}

              {deleting
                ? "Deleting"
                : "Delete"}
            </button>
          </Popconfirm>
        </div>
      </div>
    </article>
  );
}

function StatCard({
  icon: Icon,
  value,
  label,
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-surface-secondary p-3">
      <Icon
        size={18}
        className="shrink-0 text-secondary"
      />

      <div>
        <p className="text-sm font-bold text-text-primary">
          {value}
        </p>

        <p className="text-xs text-text-secondary">
          {label}
        </p>
      </div>
    </div>
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
