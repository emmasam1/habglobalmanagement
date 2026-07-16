"use client";

import { motion } from "motion/react";

export default function AnimatedText({
  children,
  delay = 0,
  className = "",
}) {
  return (
    <motion.h1
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.h1>
  );
}