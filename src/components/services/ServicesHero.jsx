"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import Section from "@/components/layout/Section";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function ServicesHero() {
  return (
    <Section className="relative overflow-hidden pt-32 pb-24">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-secondary/10 blur-[160px]" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-primary/5 blur-[180px]" />

      </div>

      <div className="relative mx-auto max-w-5xl text-center">

        <motion.span
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="inline-flex rounded-full border border-secondary/20 bg-secondary/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-secondary"
        >
          Our Services
        </motion.span>

        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .15,
          }}
          className="mt-8 text-5xl font-black leading-tight text-text-primary md:text-7xl"
        >
          Strategic Solutions
          <br />

          For Modern Businesses
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .3,
          }}
          className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-text-secondary"
        >
          From business consulting and corporate strategy to project
          management and investment advisory, HAB Global Management Ltd
          delivers tailored solutions that help organisations grow,
          innovate and succeed.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .45,
          }}
          className="mt-12"
        >
          <PrimaryButton
            href="#services"
            icon={<ArrowRight size={18} />}
          >
            Explore Services
          </PrimaryButton>
        </motion.div>

      </div>

    </Section>
  );
}