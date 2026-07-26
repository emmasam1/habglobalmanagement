"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/footer/Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash.slice(1);

    if (hash) {
      const frame = window.requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({
          behavior: "auto",
          block: "start",
        });
      });

      return () => window.cancelAnimationFrame(frame);
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
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
