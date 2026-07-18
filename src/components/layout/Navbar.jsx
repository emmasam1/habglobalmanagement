"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Drawer } from "antd";
import { Spin as Hamburger } from "hamburger-react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import PrimaryButton from "@/components/ui/PrimaryButton";
import { navigation } from "@/constants/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-background/90 shadow-lg backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Logo */}

          <Link href="/" className="flex items-center gap-3">
          <img src="/hab_logo_2.png" alt="logo" className="w-50"/>
         
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-10 lg:flex">
            {navigation.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`group relative py-2 text-[15px] font-medium transition-colors duration-300 ${
                    active
                      ? "font-semibold text-primary"
                      : "text-text-secondary hover:text-primary"
                  }`}
                >
                  {item.label}

                  {active ? (
                    <motion.span
                      layoutId="active-nav"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                      className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-secondary"
                    />
                  ) : (
                    <span className="absolute -bottom-1 left-1/2 h-[3px] w-0 -translate-x-1/2 rounded-full bg-secondary transition-all duration-300 group-hover:w-6" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}

          <div className="hidden lg:block">
            <PrimaryButton
              icon={
                <motion.span
                  animate={{
                    x: [0, 8, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              }
            >
              Get A Quote
            </PrimaryButton>
          </div>

          {/* Mobile */}

          <div className="lg:hidden">
            <Hamburger
              toggled={open}
              toggle={setOpen}
              rounded
              size={24}
            />
          </div>
        </div>
      </motion.header>

      {/* Drawer */}

      <Drawer
        placement="left"
        size={320}
        open={open}
        closeIcon={false}
        onClose={() => setOpen(false)}
        styles={{
          body: {
            padding: 0,
          },
        }}
      >
        <div className="flex h-full flex-col">
          {/* Header */}

          <div className="border-b border-border px-6 py-5">
            <h2 className="text-xl font-bold text-text-primary">
              HAB GLOBAL
            </h2>

            <p className="text-text-secondary">
              Management Ltd
            </p>
          </div>

          {/* Mobile Links */}

          <div className="flex flex-1 flex-col py-6">
            {navigation.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`border-l-4 px-6 py-4 text-lg font-medium transition-all duration-300 ${
                    active
                      ? "border-secondary bg-secondary/10 text-primary"
                      : "border-transparent text-text-primary hover:bg-surface-secondary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* CTA */}

          <div className="border-t border-border p-6">
            <PrimaryButton
              className="w-full justify-center"
              icon={<ArrowRight size={18} />}
            >
              Get A Quote
            </PrimaryButton>
          </div>
        </div>
      </Drawer>
    </>
  );
}