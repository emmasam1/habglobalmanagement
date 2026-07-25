"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  CircleDollarSign,
  Clock3,
  FileText,
  MessageSquareText,
  Plus,
  TrendingUp,
  Users,
} from "lucide-react";

import DashboardLayout from "@/components/admin/dashboard/DashboardLayout";
import useAuthStore from "@/store/authStore";

const stats = [
  {
    title: "Total Clients",
    value: "128",
    change: "+12.5%",
    description: "Compared with last month",
    icon: Users,
  },
  {
    title: "Consultation Requests",
    value: "36",
    change: "+8.2%",
    description: "12 requests need attention",
    icon: MessageSquareText,
  },
  {
    title: "Total Revenue",
    value: "£24,850",
    change: "+18.7%",
    description: "Compared with last month",
    icon: CircleDollarSign,
  },
  {
    title: "Pending Invoices",
    value: "14",
    change: "£6,450",
    description: "Outstanding invoice value",
    icon: FileText,
  },
];

const recentRequests = [
  {
    name: "Daniel Williams",
    company: "Williams Advisory Ltd",
    service: "Business Strategy",
    date: "24 Jul 2026",
    status: "New",
  },
  {
    name: "Sarah Thompson",
    company: "Thompson Retail Group",
    service: "Operational Consulting",
    date: "23 Jul 2026",
    status: "In Review",
  },
  {
    name: "Michael Brown",
    company: "Brown Digital Solutions",
    service: "Growth Planning",
    date: "22 Jul 2026",
    status: "Scheduled",
  },
  {
    name: "Amelia Johnson",
    company: "AJ Corporate Services",
    service: "Financial Advisory",
    date: "21 Jul 2026",
    status: "Completed",
  },
];

const activities = [
  {
    title: "New consultation request received",
    description: "Daniel Williams requested Business Strategy.",
    time: "10 minutes ago",
    icon: MessageSquareText,
  },
  {
    title: "Invoice generated",
    description: "Invoice #HAB-1048 was created for AJ Corporate Services.",
    time: "1 hour ago",
    icon: FileText,
  },
  {
    title: "New client added",
    description: "Brown Digital Solutions was added to your clients.",
    time: "3 hours ago",
    icon: Users,
  },
  {
    title: "Payment confirmed",
    description: "A payment of £2,400 was successfully recorded.",
    time: "Yesterday",
    icon: CircleDollarSign,
  },
];

const revenueData = [
  {
    month: "Feb",
    value: 42,
  },
  {
    month: "Mar",
    value: 56,
  },
  {
    month: "Apr",
    value: 48,
  },
  {
    month: "May",
    value: 72,
  },
  {
    month: "Jun",
    value: 64,
  },
  {
    month: "Jul",
    value: 88,
  },
];

const getStatusClasses = (status) => {
  switch (status) {
    case "New":
      return "bg-info/10 text-info";

    case "In Review":
      return "bg-warning/10 text-warning";

    case "Scheduled":
      return "bg-primary-light/10 text-primary-light";

    case "Completed":
      return "bg-success/10 text-success";

    default:
      return "bg-surface-secondary text-text-secondary";
  }
};

export default function DashboardPage() {
  const admin = useAuthStore((state) => state.admin);

  const firstName = admin?.firstName || "Administrator";

  const greeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) {
      return "Good morning";
    }

    if (hour < 17) {
      return "Good afternoon";
    }

    return "Good evening";
  };

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-[1600px]">
        {/* Welcome section */}
        <motion.section
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.45,
          }}
          className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-sm font-medium text-secondary">
              HAB Global Management
            </p>

            <h1 className="mt-1 text-2xl font-bold text-text-primary sm:text-3xl">
              {greeting()}, {firstName}
            </h1>

            <p className="mt-2 text-sm text-text-secondary sm:text-base">
              Here is an overview of your business activity and performance.
            </p>
          </div>

          <button
            type="button"
            className="flex h-12 items-center justify-center gap-2 rounded-xl bg-secondary px-5 font-semibold text-primary transition hover:opacity-90"
          >
            <Plus size={19} />

            Add New Client
          </button>
        </motion.section>

        {/* Statistics */}
        <section className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.07,
                }}
                className="rounded-2xl border border-border bg-surface p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                    <Icon size={22} />
                  </div>

                  <div className="flex items-center gap-1 rounded-full bg-success/10 px-2.5 py-1 text-xs font-semibold text-success">
                    <TrendingUp size={13} />

                    {item.change}
                  </div>
                </div>

                <p className="mt-5 text-sm font-medium text-text-secondary">
                  {item.title}
                </p>

                <h2 className="mt-2 text-lg font-bold text-text-primary">
                  {item.value}
                </h2>

                <p className="mt-2 text-xs text-text-secondary">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </section>

        {/* Main content */}
        <section className="mt-6 grid gap-6 xl:grid-cols-[1.6fr_1fr]">
          {/* Revenue overview */}
          <motion.article
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="rounded-2xl border border-border bg-surface p-5 shadow-sm sm:p-6"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-medium text-text-secondary">
                  Revenue overview
                </p>

                <div className="mt-2 flex items-end gap-3">
                  <h2 className="text-3xl font-bold text-text-primary">
                    £24,850
                  </h2>

                  <span className="mb-1 flex items-center gap-1 text-sm font-semibold text-success">
                    <TrendingUp size={15} />

                    18.7%
                  </span>
                </div>

                <p className="mt-2 text-sm text-text-secondary">
                  Revenue performance over the last six months.
                </p>
              </div>

              <select className="h-10 rounded-xl border border-border bg-surface-secondary px-3 text-sm text-text-primary outline-none focus:border-secondary">
                <option>Last 6 months</option>
                <option>Last 12 months</option>
                <option>This year</option>
              </select>
            </div>

            <div className="mt-8 flex h-64 items-end gap-3 border-b border-border px-1 pb-1 sm:gap-5">
              {revenueData.map((item) => (
                <div
                  key={item.month}
                  className="flex h-full flex-1 flex-col items-center justify-end gap-3"
                >
                  <div className="group relative flex h-full w-full items-end justify-center">
                    <div
                      className="w-full max-w-14 rounded-t-lg bg-primary transition hover:bg-primary-light"
                      style={{
                        height: `${item.value}%`,
                      }}
                    />

                    <span className="pointer-events-none absolute bottom-[calc(100%+8px)] hidden rounded-lg bg-primary px-2 py-1 text-xs text-white shadow-lg group-hover:block">
                      £{Math.round(item.value * 420)}
                    </span>
                  </div>

                  <span className="text-xs font-medium text-text-secondary">
                    {item.month}
                  </span>
                </div>
              ))}
            </div>
          </motion.article>

          {/* Business overview */}
          <motion.article
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.28,
            }}
            className="rounded-2xl border border-border bg-primary p-5 text-white shadow-sm sm:p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-white/60">
                  Business overview
                </p>

                <h2 className="mt-1 text-xl font-bold">
                  July performance
                </h2>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-secondary">
                <BriefcaseBusiness size={21} />
              </div>
            </div>

            <div className="mt-8 space-y-6">
              <div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/70">
                    Monthly revenue target
                  </span>

                  <span className="font-semibold">
                    82%
                  </span>
                </div>

                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[82%] rounded-full bg-secondary" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/70">
                    Consultation completion
                  </span>

                  <span className="font-semibold">
                    68%
                  </span>
                </div>

                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[68%] rounded-full bg-secondary" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/70">
                    Invoice collection
                  </span>

                  <span className="font-semibold">
                    74%
                  </span>
                </div>

                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[74%] rounded-full bg-secondary" />
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-white/10 p-4">
                <CalendarDays
                  size={18}
                  className="text-secondary"
                />

                <p className="mt-3 text-2xl font-bold">
                  18
                </p>

                <p className="mt-1 text-xs text-white/60">
                  Meetings this month
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-4">
                <Clock3
                  size={18}
                  className="text-secondary"
                />

                <p className="mt-3 text-2xl font-bold">
                  12
                </p>

                <p className="mt-1 text-xs text-white/60">
                  Pending actions
                </p>
              </div>
            </div>
          </motion.article>
        </section>

        {/* Requests and activity */}
        <section className="mt-6 grid gap-6 xl:grid-cols-[1.6fr_1fr]">
          {/* Recent requests */}
          <motion.article
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.34,
            }}
            className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm"
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-5 sm:px-6">
              <div>
                <h2 className="text-lg font-bold text-text-primary">
                  Recent consultation requests
                </h2>

                <p className="mt-1 text-sm text-text-secondary">
                  Latest requests submitted by prospective clients.
                </p>
              </div>

              <button
                type="button"
                className="hidden items-center gap-1 text-sm font-semibold text-secondary sm:flex"
              >
                View all

                <ArrowUpRight size={16} />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px]">
                <thead className="bg-surface-secondary">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-text-secondary">
                      Client
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-text-secondary">
                      Service
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-text-secondary">
                      Date
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-text-secondary">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {recentRequests.map((request) => (
                    <tr
                      key={`${request.name}-${request.date}`}
                      className="border-t border-border transition hover:bg-surface-secondary"
                    >
                      <td className="px-6 py-4">
                        <p className="text-sm font-semibold text-text-primary">
                          {request.name}
                        </p>

                        <p className="mt-1 text-xs text-text-secondary">
                          {request.company}
                        </p>
                      </td>

                      <td className="px-6 py-4 text-sm text-text-primary">
                        {request.service}
                      </td>

                      <td className="px-6 py-4 text-sm text-text-secondary">
                        {request.date}
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusClasses(
                            request.status,
                          )}`}
                        >
                          {request.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.article>

          {/* Recent activity */}
          <motion.article
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.4,
            }}
            className="rounded-2xl border border-border bg-surface p-5 shadow-sm sm:p-6"
          >
            <div>
              <h2 className="text-lg font-bold text-text-primary">
                Recent activity
              </h2>

              <p className="mt-1 text-sm text-text-secondary">
                Latest updates across the dashboard.
              </p>
            </div>

            <div className="mt-6 space-y-5">
              {activities.map((activity, index) => {
                const Icon = activity.icon;

                return (
                  <div
                    key={activity.title}
                    className="relative flex gap-4"
                  >
                    {index !== activities.length - 1 && (
                      <span className="absolute left-5 top-11 h-[calc(100%+4px)] w-px bg-border" />
                    )}

                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-secondary text-primary">
                      <Icon size={18} />
                    </div>

                    <div className="min-w-0 pb-1">
                      <p className="text-sm font-semibold text-text-primary">
                        {activity.title}
                      </p>

                      <p className="mt-1 text-sm leading-6 text-text-secondary">
                        {activity.description}
                      </p>

                      <p className="mt-1 text-xs text-text-secondary">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.article>
        </section>
      </div>
    </DashboardLayout>
  );
}