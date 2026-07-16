"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function AnimatedArrow() {
  return (
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
      <ArrowRight size={18} strokeWidth={2.5} />
    </motion.span>
  );
}