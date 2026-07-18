"use client";

import Image from "next/image";
import { motion } from "motion/react";

import Section from "@/components/layout/Section";

export default function CompanyStory() {
  return (
    <Section className=" py-28 lg:py-36">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="mx-auto max-w-5xl">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-secondary">
            Who We Are
          </p>

          <h2 className="max-w-3xl text-4xl font-black leading-tight text-text-primary md:text-5xl">
            Helping Businesses Build Sustainable Success Through Strategic Thinking.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary">
            It is built through strategic thinking, disciplined execution and
            trusted partnerships that create measurable long-term value.
          </p>
        </motion.div>

        {/* Image */}

        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-20 overflow-hidden rounded-2xl"
        >
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80"
            alt="Business Meeting"
            width={1800}
            height={1100}
            className="h-[260px] w-full object-cover md:h-[420px] lg:h-[560px]"
          />
        </motion.div>

        {/* Story */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mx-auto mt-20 max-w-4xl space-y-8"
        >
          <p className="text-lg leading-9 text-text-secondary">
            At HAB Global Management Ltd, we partner with businesses,
            entrepreneurs and organisations to solve complex challenges through
            practical consulting and strategic advisory services.
          </p>

          <p className="text-lg leading-9 text-text-secondary">
            Rather than offering generic recommendations, every engagement
            begins with understanding your objectives before designing tailored
            solutions that strengthen operations, improve performance and
            support sustainable growth.
          </p>
        </motion.div>

        {/* Principles */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-24 grid gap-10 border-t border-border pt-12 md:grid-cols-3"
        >
          <div>
            <p className="text-3xl font-bold text-text-primary">Strategy</p>
          </div>

          <div>
            <p className="text-3xl font-bold text-text-primary">Leadership</p>
          </div>

          <div>
            <p className="text-3xl font-bold text-text-primary">Growth</p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
