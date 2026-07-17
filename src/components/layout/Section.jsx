"use client";

import { motion } from "motion/react";

export default function Section({
  children,
  className = "",
  containerClass = "",
  id,
}) {
  return (
    <motion.section
      id={id}
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
      }}
      className={`relative overflow-hidden py-24 lg:py-32 ${className}`}
    >
      <div
        className={`mx-auto w-full max-w-7xl px-6 lg:px-8 ${containerClass}`}
      >
        {children}
      </div>
    </motion.section>
  );
}