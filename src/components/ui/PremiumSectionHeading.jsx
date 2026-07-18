"use client";

import { motion } from "motion/react";

export default function PremiumSectionHeading({
  label,
  title,
  description,
  centered = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative ${
        centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
      }`}
    >
      {/* Glow */}

      <div className="absolute -top-16 left-0 h-40 w-40 rounded-full bg-secondary/10 blur-[90px]" />

      {/* Accent Line */}

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="relative pt-8">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-secondary">
          {label}
        </p>

        <h2 className="mt-5 text-4xl font-black leading-tight text-text-primary md:text-5xl">
          {title}
        </h2>

        {description && (
          <p className="mt-6 text-lg leading-8 text-text-secondary">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
}