"use client";

import { motion } from "motion/react";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* Blue Blob */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-30 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
      />

      {/* Gold Blob */}
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-30 bottom-20 h-96 w-96 rounded-full bg-secondary/10 blur-3xl"
      />

    </div>
  );
}