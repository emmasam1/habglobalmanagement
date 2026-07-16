"use client";

import { motion } from "motion/react";

export default function AnimatedSection({
  children,
  delay = 0,
  duration = 0.6,
  y = 40,
  className = "",
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}