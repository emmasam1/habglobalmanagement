"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  ChevronDown,
} from "lucide-react";

import Section from "@/components/layout/Section";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function AboutHero() {
  return (
    <Section
      className="relative min-h-screen overflow-hidden bg-background pt-40"
      containerClass="flex items-center justify-center"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-secondary/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-primary/5 blur-[120px]" />

      </div>

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#000 1px,transparent 1px),linear-gradient(to bottom,#000 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}

      <div className="relative z-10 mx-auto max-w-4xl text-center">

        <motion.span
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: .5,
          }}
          className="inline-flex rounded-full border border-secondary/20 bg-secondary/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-secondary"
        >
          About HAB Global
        </motion.span>

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
            delay: .2,
            duration: .6,
          }}
          className="mt-8 text-5xl font-black leading-tight text-text-primary md:text-7xl"
        >
          Building Better Businesses.
          <br />

          Creating
          <span className="text-secondary">
            {" "}
            Lasting Impact.
          </span>
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .4,
            duration: .6,
          }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-text-secondary"
        >
          At HAB Global Management Ltd, we help organisations,
          entrepreneurs and investors navigate complexity,
          unlock opportunities and build sustainable success
          through strategic consulting and practical business
          solutions.
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
            delay: .6,
          }}
          className="mt-12 flex flex-wrap justify-center gap-5"
        >
          <PrimaryButton
            href="/services"
            icon={<ArrowRight size={18} />}
          >
            Explore Services
          </PrimaryButton>

          <Link
            href="/contact"
            className="rounded-full border border-border px-8 py-4 font-semibold transition hover:border-secondary hover:text-secondary"
          >
            Contact Us
          </Link>

        </motion.div>

      </div>

      {/* Scroll Indicator */}

      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ChevronDown
          size={34}
          className="text-secondary"
        />
      </motion.div>

    </Section>
  );
}