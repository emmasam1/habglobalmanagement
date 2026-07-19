"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  CalendarDays,
  Mail,
} from "lucide-react";

import Section from "@/components/layout/Section";
import BackgroundGlow from "@/components/ui/BackgroundGlow";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function ContactCTA() {
  return (
    <Section className="relative overflow-hidden py-28 lg:py-36">

      <BackgroundGlow />

      {/* Accent Line */}

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
        }}
        className="relative overflow-hidden rounded-[42px] border border-border bg-background shadow-2xl"
      >

        {/* Decorative Glow */}

        <div className="absolute -left-36 top-0 h-[380px] w-[380px] rounded-full bg-primary/10 blur-[140px]" />

        <div className="absolute -right-36 bottom-0 h-[380px] w-[380px] rounded-full bg-secondary/10 blur-[140px]" />

        <div className="relative z-10 px-8 py-20 text-center md:px-20 lg:px-32 lg:py-28">

          <span className="inline-flex rounded-full bg-secondary/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
            Ready To Begin?
          </span>

          <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-black leading-tight text-text-primary md:text-5xl lg:text-6xl">
            Let's Build Better Solutions Together.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-text-secondary">
            Every successful partnership begins with a conversation.
            Whether you're looking to improve operations, strengthen
            compliance, streamline administration, or explore new
            opportunities, HAB Global Consulting is here to help.
          </p>

          {/* CTA Buttons */}

          <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">

            <PrimaryButton
              href="/services/request"
              icon={<CalendarDays size={18} />}
            >
              Request Consultation
            </PrimaryButton>

            <Link
              href="mailto:info@habglobalconsulting.com"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-border px-8 py-4 font-semibold transition-all duration-300 hover:border-secondary hover:text-secondary hover:shadow-lg"
            >
              <Mail size={18} />

              Email Us
            </Link>

          </div>

          {/* Bottom Highlights */}

          <div className="mt-20 grid gap-10 border-t border-border pt-10 md:grid-cols-3">

            <div>
              <h3 className="text-3xl font-black text-secondary">
                Professional
              </h3>

              <p className="mt-3 text-sm uppercase tracking-[0.25em] text-text-secondary">
                Consulting
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-secondary">
                Tailored
              </h3>

              <p className="mt-3 text-sm uppercase tracking-[0.25em] text-text-secondary">
                Solutions
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-secondary">
                Trusted
              </h3>

              <p className="mt-3 text-sm uppercase tracking-[0.25em] text-text-secondary">
                Partnership
              </p>
            </div>

          </div>

        </div>

      </motion.div>

    </Section>
  );
}