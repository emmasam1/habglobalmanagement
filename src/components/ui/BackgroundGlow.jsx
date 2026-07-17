"use client";

import { motion } from "motion/react";

export default function BackgroundGlow() {
  return (
    <>
      {/* Blue */}

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-[-250px] top-40 h-[550px] w-[550px] rounded-full bg-primary/8 blur-[140px]"
      />

      {/* Gold */}

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 22,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[-250px] bottom-20 h-[500px] w-[500px] rounded-full bg-secondary/10 blur-[140px]"
      />

      {/* Small Accent */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
        }}
        className="pointer-events-none absolute left-1/2 top-20 h-64 w-64 -translate-x-1/2 rounded-full bg-secondary/5 blur-[110px]"
      />
    </>
  );
}