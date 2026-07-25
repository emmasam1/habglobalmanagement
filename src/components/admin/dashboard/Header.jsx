"use client";

import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import {
  Menu,
  Bell,
  Search,
  ChevronDown,
} from "lucide-react";

import useAuthStore from "@/store/authStore";

export default function Header({
  collapsed,
  setCollapsed,
}) {
  const router = useRouter();

  const admin = useAuthStore(
    (state) => state.admin
  );

  const logout = useAuthStore(
    (state) => state.logout
  );

  const today = new Date().toLocaleDateString(
    "en-GB",
    {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  const handleLogout = async () => {
    await logout();

    router.replace("/admin-dashboard");
  };

  return (
    <motion.header
      initial={{
        y: -40,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      className="fixed right-0 top-0 z-30 h-20 border-b border-slate-200 bg-white/80 backdrop-blur-xl"
      style={{
        left: collapsed ? 88 : 288,
      }}
    >
      <div className="flex h-full items-center justify-between px-8">
        {/* Left */}

        <div className="flex items-center gap-5">

          <button
            onClick={() =>
              setCollapsed(!collapsed)
            }
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 transition hover:bg-slate-100"
          >
            <Menu size={20} />
          </button>

          <div>

            <h1 className="text-2xl font-bold text-slate-900">
              Dashboard
            </h1>

            <p className="text-sm text-slate-500">
              {today}
            </p>

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-5">

          {/* Search */}

          <div className="hidden items-center rounded-xl border border-slate-200 bg-slate-50 px-4 lg:flex">

            <Search
              size={18}
              className="text-slate-400"
            />

            <input
              placeholder="Search..."
              className="w-72 bg-transparent px-3 py-3 outline-none"
            />

          </div>

          {/* Notification */}

          <button className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 hover:bg-slate-100">

            <Bell size={20} />

            <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-red-500" />

          </button>

          {/* User */}


        </div>

      </div>
    </motion.header>
  );
}