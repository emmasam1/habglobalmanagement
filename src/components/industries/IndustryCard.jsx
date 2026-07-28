"use client";

import { motion } from "motion/react";

export default function IndustryCard({ title, icon: Icon }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group flex min-w-[240px] items-center gap-5 rounded-2xl border border-border bg-background px-6 py-5 shadow-sm"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 transition-all duration-300 group-hover:bg-secondary group-hover:text-primary">
        <Icon size={26} />
      </div>

      <div>
        <h3 className="font-semibold text-text-primary">
          {title}
        </h3>

        <p className="mt-1 text-sm text-text-secondary">
          Professional consulting solutions
        </p>
      </div>
    </motion.div>
  );
}
