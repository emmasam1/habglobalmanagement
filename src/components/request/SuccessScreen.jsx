"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import Section from "@/components/layout/Section";
import BackgroundGlow from "@/components/ui/BackgroundGlow";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function SuccessScreen() {
  return (
    <Section className="relative overflow-hidden py-32">

      <BackgroundGlow />

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">

        <motion.div
          initial={{
            scale: .8,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: .6,
          }}
        >

          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-secondary/10 text-secondary">

            <CheckCircle2 size={60} />

          </div>

          <h1 className="mt-10 text-5xl font-black text-text-primary">

            Thank You!

          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-text-secondary">

            Your consultation request has been received successfully.

            Our consultants will review your enquiry and contact
            you within one business day.

          </p>

          <div className="mt-14 flex flex-col justify-center gap-5 sm:flex-row">

            <PrimaryButton
              href="/"
            >

              Return Home

            </PrimaryButton>

            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-border px-8 py-4 font-semibold transition hover:border-secondary hover:text-secondary"
            >

              Browse Services

              <ArrowRight size={18} />

            </Link>

          </div>

        </motion.div>

      </div>

    </Section>
  );
}