"use client";

import { useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import Sidebar from "./Sidebar";
import Header from "./Header";
import useAuthStore from "@/store/authStore";

export default function DashboardLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const sessionChecked = useAuthStore((state) => state.sessionChecked);
  const loadSession = useAuthStore((state) => state.loadSession);
  const restoreCachedAdmin = useAuthStore(
    (state) => state.restoreCachedAdmin,
  );

  useEffect(() => {
    restoreCachedAdmin();
    void loadSession();
  }, [loadSession, restoreCachedAdmin]);

  useEffect(() => {
    if (sessionChecked && !isAuthenticated) {
      const loginUrl = new URLSearchParams({
        next: pathname,
      });

      router.replace(`/admin-dashboard?${loginUrl.toString()}`);
    }
  }, [isAuthenticated, pathname, router, sessionChecked]);

  if (!sessionChecked || !isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-3 text-text-secondary">
          <LoaderCircle size={30} className="animate-spin text-secondary" />
          <p className="text-sm font-semibold">
            Verifying administrator session...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        mobileOpen={mobileOpen}
        onMobileClose={() => setMobileOpen(false)}
      />

      <div
        className={`flex min-h-screen flex-col transition-[margin] duration-300 ${
          collapsed ? "lg:ml-[88px]" : "lg:ml-72"
        }`}
      >
        <Header
          collapsed={collapsed}
          onMobileOpen={() => setMobileOpen(true)}
        />

        <main className="flex-1 px-5 pb-8 pt-24 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}
