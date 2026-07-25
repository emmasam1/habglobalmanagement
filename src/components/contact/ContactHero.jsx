"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

import Section from "@/components/layout/Section";
import BackgroundGlow from "@/components/ui/BackgroundGlow";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function ContactHero() {
  return (
    <Section className="relative overflow-hidden pt-36 pb-24 lg:pt-44 lg:pb-32">

      <BackgroundGlow />

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="relative z-10 grid items-center gap-16 lg:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          <span className="inline-flex rounded-full bg-secondary/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-secondary">
            Contact HAB Global
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight text-text-primary lg:text-7xl">
            Let's Start The Conversation.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-text-secondary">
            Whether you're seeking strategic consulting, operational support,
            compliance guidance or healthcare advisory services, we're ready
            to understand your goals and explore the best way forward.
          </p>

          <div className="mt-12 flex flex-col gap-5 sm:flex-row">

            <PrimaryButton
              href="#contact-form"
              icon={<ArrowRight size={18} />}
            >
              Send A Message
            </PrimaryButton>

            <Link
              href="tel:+4401172448224"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-border px-8 py-4 font-semibold transition hover:border-secondary hover:text-secondary"
            >
              <Phone size={18} />

              Call Us
            </Link>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          <div className="overflow-hidden rounded-[40px]">

            <Image
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80"
              alt="Business Meeting"
              width={700}
              height={850}
              className="h-full w-full object-cover"
            />

          </div>

        </motion.div>

      </div>

    </Section>
  );
}