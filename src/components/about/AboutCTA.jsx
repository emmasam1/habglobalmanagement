"use client";

import { motion } from "motion/react";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";

import Section from "@/components/layout/Section";
import BackgroundGlow from "@/components/ui/BackgroundGlow";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function AboutCTA() {
  return (
    <Section className="relative overflow-hidden bg-neutral-950 py-28 lg:py-36">

      <BackgroundGlow />

      {/* Accent */}

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="relative z-10 mx-auto max-w-5xl">

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .6,
          }}
          className="rounded-[40px] border border-white/10 bg-white/[0.03] px-8 py-20 text-center backdrop-blur-sm md:px-20"
        >

          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-secondary">
            Let's Work Together
          </span>

          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-black leading-tight text-white md:text-6xl">
            Ready to move your
            business forward?
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/70">
            Whether you're launching a new venture,
            improving business performance or planning
            your next stage of growth, we're ready to
            help you make confident decisions backed by
            practical expertise.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

            <PrimaryButton
              href="/contact#contact-form"
              icon={<ArrowRight size={18} />}
            >
              Book a Consultation
            </PrimaryButton>

          </div>

        </motion.div>

      </div>

    </Section>
  );
}
