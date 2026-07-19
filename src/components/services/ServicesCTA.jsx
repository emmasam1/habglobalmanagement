"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, CalendarDays } from "lucide-react";

import Section from "@/components/layout/Section";
import BackgroundGlow from "@/components/ui/BackgroundGlow";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function ServicesCTA() {
  return (
    <Section className="relative overflow-hidden py-28 lg:py-36">

      <BackgroundGlow />

      {/* Accent Line */}

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[40px] border border-border bg-background shadow-2xl"
      >

        {/* Decorative Glow */}

        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-primary/10 blur-[120px]" />

        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-secondary/10 blur-[120px]" />

        <div className="relative z-10 px-8 py-20 md:px-16 lg:px-24 lg:py-24">

          <div className="mx-auto max-w-4xl text-center">

            <span className="inline-flex rounded-full bg-secondary/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-secondary">
              Let's Work Together
            </span>

            <h2 className="mt-8 text-4xl font-black leading-tight text-text-primary md:text-5xl lg:text-6xl">
              Ready to Transform Your Organisation?
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-text-secondary">
              Whether you're looking to improve operations, strengthen
              compliance, optimise performance, or accelerate business growth,
              HAB Global Consulting is ready to help you achieve measurable
              results.
            </p>

            <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">

              <PrimaryButton
                href="/contact"
                icon={<ArrowRight size={18} />}
              >
                Request a Consultation
              </PrimaryButton>

              <Link
                href="/services/request"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-border px-8 py-4 font-semibold transition-all duration-300 hover:border-secondary hover:text-secondary hover:shadow-lg"
              >
                <CalendarDays size={18} />

                Request a Service
              </Link>

            </div>

            {/* Stats */}

            <div className="mt-20 grid gap-10 border-t border-border pt-10 sm:grid-cols-3">

              <div>
                <h3 className="text-3xl font-black text-secondary">
                  5+
                </h3>

                <p className="mt-2 text-sm uppercase tracking-widest text-text-secondary">
                  Professional Services
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-secondary">
                  Tailored
                </h3>

                <p className="mt-2 text-sm uppercase tracking-widest text-text-secondary">
                  Consulting Solutions
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-secondary">
                  Client
                </h3>

                <p className="mt-2 text-sm uppercase tracking-widest text-text-secondary">
                  Focused Approach
                </p>
              </div>

            </div>

          </div>

        </div>

      </motion.div>

    </Section>
  );
}