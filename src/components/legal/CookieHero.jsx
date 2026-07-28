"use client";

import { motion } from "motion/react";

import Section from "@/components/layout/Section";

export default function CookieHero() {
  return (
    <Section className="pb-24 pt-40 text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xs font-semibold uppercase tracking-[0.35em] text-secondary"
      >
        Legal Information
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="mx-auto mt-6 max-w-4xl text-5xl font-black text-text-primary lg:text-6xl"
      >
        Cookie Policy
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-text-secondary"
      >
        This policy explains how HAB Global Management Ltd uses cookies and
        similar technologies on our website, and how you can manage them.
      </motion.p>

      <p className="mt-8 text-sm text-text-secondary">
        Last Updated: 25 July 2026
      </p>
    </Section>
  );
}
