"use client";

import { motion } from "motion/react";
import { ClipboardCheck } from "lucide-react";

import Section from "@/components/layout/Section";
import BackgroundGlow from "@/components/ui/BackgroundGlow";

export default function RequestHero() {
  return (
    <Section className="relative overflow-hidden py-36 lg:py-44">

      <BackgroundGlow />

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-secondary/10 text-secondary">

            <ClipboardCheck size={40} />

          </div>

          <span className="mt-8 inline-block rounded-full border border-secondary/20 bg-secondary/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-secondary">
            Consultation Request
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight text-text-primary md:text-6xl">
            Request Our
            <span className="text-secondary"> Consulting Services</span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-text-secondary">
            Complete this short consultation request. Our team will review
            your requirements and contact you with the most suitable
            approach for your organisation.
          </p>

        </motion.div>

      </div>

    </Section>
  );
}