"use client";

import { motion } from "motion/react";

export default function PremiumCard({
  children,
  className = "",
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: .35,
      }}
      className={`
      group
      relative
      overflow-hidden
      rounded-[32px]
      border
      border-border/70
      bg-background
      p-8
      shadow-[0_25px_60px_rgba(0,0,0,.06)]
      transition-all
      duration-500
      hover:border-secondary/40
      hover:shadow-[0_35px_80px_rgba(0,0,0,.12)]
      ${className}
      `}
    >
      {/* Glow */}

      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute -top-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-secondary/10 blur-[100px]" />
      </div>

      {/* Accent */}

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative">
        {children}
      </div>
    </motion.div>
  );
}