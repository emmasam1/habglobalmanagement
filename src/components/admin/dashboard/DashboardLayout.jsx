"use client";

import { useState } from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DashboardLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      <div
        className={`flex min-h-screen flex-col transition-[margin] duration-300 ${
          collapsed ? "lg:ml-[88px]" : "lg:ml-72"
        }`}
      >
        <Header
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />

        <main className="flex-1 px-5 pb-8 pt-24 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}