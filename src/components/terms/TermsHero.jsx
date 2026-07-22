"use client";

import { motion } from "motion/react";
import Section from "@/components/layout/Section";

export default function TermsHero() {
  return (
    <Section className="text-center">

      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-sm font-semibold uppercase tracking-[0.35em] text-secondary"
      >
        Legal Information
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .1 }}
        className="mt-6 text-5xl font-black text-text-primary lg:text-6xl"
      >
        Terms & Conditions
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .2 }}
        className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-text-secondary"
      >
        These Terms & Conditions govern the use of our website and the
        professional consultancy services provided by HAB Global
        Management Ltd.
      </motion.p>

      <p className="mt-6 text-sm text-text-secondary">
        Last Updated: 22 July 2026
      </p>

    </Section>
  );
}