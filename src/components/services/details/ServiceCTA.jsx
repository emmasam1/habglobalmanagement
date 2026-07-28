"use client";

import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "motion/react";

import Section from "@/components/layout/Section";
import BackgroundGlow from "@/components/ui/BackgroundGlow";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function ServiceCTA({ service }) {
  return (
    <Section className="relative overflow-hidden py-32">

      <BackgroundGlow />

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />

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
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[40px] border border-border bg-background px-8 py-20 text-center shadow-2xl md:px-20"
      >

        <span
          className={`inline-flex rounded-full ${service.accent?.bg} px-5 py-2 text-sm font-semibold ${service.accent?.text}`}
        >
          Ready To Get Started?
        </span>

        <h2 className="mt-8 text-4xl font-black text-text-primary lg:text-6xl">
          Let's Build Something Exceptional Together.
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-text-secondary">
          Every successful engagement starts with a conversation. Tell us
          about your organisation, your objectives and the challenges you're
          facing—we'll work with you to identify the most effective path
          forward.
        </p>

        <div className="mt-14 flex flex-col justify-center gap-5 sm:flex-row">

          <PrimaryButton
            href={`/services/request?service=${service.slug}`}
            icon={<ArrowRight size={18} />}
          >
            {Number(service.price) > 0
              ? "Request This Service"
              : "Get a Free Quote"}
          </PrimaryButton>

          <Link
            href="/contact#contact-form"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-border px-8 py-4 font-semibold transition hover:border-secondary hover:text-secondary"
          >
            <Calendar size={18} />

            Book Consultation
          </Link>

        </div>

      </motion.div>

    </Section>
  );
}
