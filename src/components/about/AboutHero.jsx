"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import Section from "@/components/layout/Section";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function AboutHero() {
  return (
    <Section className="pt-36 lg:pt-44 pb-20">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: .8 }}
        className="mx-auto max-w-5xl text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="mb-5 uppercase tracking-[0.35em] text-xs font-semibold text-secondary"
        >
          About HAB Global
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .1, duration: .6 }}
          className="mx-auto max-w-4xl text-[38px] font-black leading-[1.05] text-text-primary md:text-[52px] lg:text-[64px]"
        >
          Building Better
          <br />
          Businesses.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2, duration: .6 }}
          className="mx-auto mt-8 max-w-2xl text-base leading-8 text-text-secondary md:text-lg"
        >
          HAB Global Management Ltd partners with organisations to solve
          complex business challenges through strategic thinking,
          operational excellence and long-term partnerships.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .3, duration: .6 }}
          className="mt-10"
        >
          <PrimaryButton
            href="/services"
            icon={<ArrowRight size={18} />}
          >
            Explore Services
          </PrimaryButton>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          scale: 1.05,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: .8,
        }}
        className="relative mx-auto mt-20 max-w-7xl"
      >
        <div className="relative overflow-hidden rounded-2xl">

          <Image
            src="/ceo.jpg"
            alt="Executive Meeting"
            width={1800}
            height={1000}
            priority
            className="h-[280px] w-full object-cover md:h-[500px] lg:h-[650px]"
          />

        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .25,
          }}
          viewport={{
            once: true,
          }}
          className="absolute -bottom-8 left-6 rounded-2xl border border-white/20 bg-[#020617] px-7 py-6 shadow-xl backdrop-blur-xl lg:left-10"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-secondary">
            United Kingdom
          </p>

          <h3 className="mt-3 text-lg font-bold text-text-primary">
            Registered Company
          </h3>

          <div className="mt-5 space-y-2 text-sm text-text-secondary">
            <p>Business Strategy</p>
            <p>Corporate Advisory</p>
            <p>International Perspective</p>
          </div>
        </motion.div>
      </motion.div>

    </Section>
  );
}