"use client";

import { motion } from "motion/react";
import Section from "@/components/layout/Section";

export default function PrivacyHero() {
  return (
    <Section className="pt-40 pb-24 text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="uppercase tracking-[0.35em] text-xs font-semibold text-secondary"
      >
        Legal Information
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="mx-auto mt-6 max-w-4xl text-5xl font-black text-text-primary lg:text-6xl"
      >
        Privacy Policy
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .25 }}
        className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-text-secondary"
      >
        This Privacy Policy explains how HAB Global Management Ltd
        collects, uses, stores and protects your personal information in
        accordance with UK GDPR and the Data Protection Act 2018.
      </motion.p>

      <p className="mt-8 text-sm text-text-secondary">
        Last Updated: 22 July 2026
      </p>
    </Section>
  );
}