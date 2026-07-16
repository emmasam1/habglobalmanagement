"use client";

import { motion } from "motion/react";

export default function FloatingCard({
  icon,
  title,
  subtitle,
  className = "",
  duration = 4,
}) {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute rounded-2xl border border-white/20 bg-white/80 p-4 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/80 ${className}`}
    >
      <div className="flex items-center gap-3">
        <div className="text-secondary">
          {icon}
        </div>

        <div>
          <h4 className="font-bold text-text-primary">
            {title}
          </h4>

          <p className="text-sm text-text-secondary">
            {subtitle}
          </p>
        </div>
      </div>
    </motion.div>
  );
}