"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/footer/Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname]);

  const hideLayout =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/admin-dashboard");

  return (
    <>
      {!hideLayout && <Navbar />}

      {children}

      {!hideLayout && <Footer />}
    </>
  );
}
