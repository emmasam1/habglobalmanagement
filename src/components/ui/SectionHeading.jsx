"use client";

import { motion } from "motion/react";

export default function SectionHeading({
  badge,
  title,
  subtitle,
  center = false,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
      }}
      className={`max-w-3xl ${
        center ? "mx-auto text-center" : ""
      }`}
    >
      {badge && (
        <span className="inline-flex rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
          {badge}
        </span>
      )}

      <h2 className="mt-6 text-4xl font-bold leading-tight text-text-primary md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-6 text-lg leading-8 text-text-secondary">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}