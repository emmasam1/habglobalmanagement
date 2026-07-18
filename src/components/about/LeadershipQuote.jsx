"use client";

import Image from "next/image";
import { motion } from "motion/react";
import BackgroundGlow from "@/components/ui/BackgroundGlow";
import PremiumSectionHeading from "@/components/ui/PremiumSectionHeading";
import Section from "@/components/layout/Section";

export default function LeadershipSection() {
  return (
    <Section className="relative overflow-hidden bg-neutral-950 py-28 lg:py-36">
      <BackgroundGlow />

      {/* Accent Line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <PremiumSectionHeading
          centered
          label="Leadership"
          title="Leadership Built on Vision, Integrity and Action."
          description="Every successful organisation deserves a trusted partner who understands its ambitions, challenges and opportunities."
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-20 max-w-3xl overflow-hidden rounded-[32px] border border-white/10"
        >
          <Image
            src="/founder.jpg"
            alt="Founder"
            width={1400}
            height={1800}
            className="h-[600px] w-full object-cover grayscale transition duration-700 hover:scale-105"
          />
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-16 max-w-3xl text-center"
        >
          <p className="text-3xl font-black leading-tight text-white md:text-5xl">
            “Businesses grow when strategy becomes action.”
          </p>

          <div className="mx-auto mt-8 h-px w-20 bg-secondary" />

          <p className="mt-8 text-lg leading-8 text-white/70">
            Leadership is not simply about providing advice.
            It is about creating clarity, inspiring confidence,
            and helping organisations make decisions that
            generate measurable long-term value.
          </p>
                    <div className="mt-12 flex justify-center">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-secondary to-transparent" />
          </div>

          <div className="mt-10">
            <h4 className="text-xl font-bold text-white">
              HAB Global Management Ltd
            </h4>

            <p className="mt-2 text-secondary">
              Founder & Managing Director
            </p>
          </div>
        </motion.blockquote>

        {/* Leadership Values */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.6,
          }}
          className="mt-24 grid gap-6 md:grid-cols-3"
        >
          {/* Vision */}

          <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition duration-500 hover:-translate-y-2 hover:border-secondary/40">
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

            <div className="relative">
              <span className="text-5xl font-black text-secondary/30">
                01
              </span>

              <h3 className="mt-6 text-2xl font-bold text-white">
                Vision
              </h3>

              <p className="mt-4 leading-8 text-white/70">
                We help organisations see beyond today's
                challenges by creating practical strategies
                that position them for sustainable growth.
              </p>
            </div>
          </div>

          {/* Integrity */}

          <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition duration-500 hover:-translate-y-2 hover:border-secondary/40">
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

            <div className="relative">
              <span className="text-5xl font-black text-secondary/30">
                02
              </span>

              <h3 className="mt-6 text-2xl font-bold text-white">
                Integrity
              </h3>

              <p className="mt-4 leading-8 text-white/70">
                Every recommendation is guided by honesty,
                transparency and an unwavering commitment to
                our clients' long-term success.
              </p>
            </div>
          </div>

          {/* Excellence */}

          <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition duration-500 hover:-translate-y-2 hover:border-secondary/40">
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

            <div className="relative">
              <span className="text-5xl font-black text-secondary/30">
                03
              </span>

              <h3 className="mt-6 text-2xl font-bold text-white">
                Excellence
              </h3>

              <p className="mt-4 leading-8 text-white/70">
                We believe exceptional outcomes come from
                disciplined execution, continuous improvement
                and attention to every detail.
              </p>
            </div>
          </div>
        </motion.div>
                {/* Bottom Decoration */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.5,
            duration: 0.6,
          }}
          className="mt-24 flex justify-center"
        >
          <div className="flex items-center gap-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-secondary" />

            <div className="flex h-3 w-3 rounded-full bg-secondary" />

            <div className="h-px w-20 bg-gradient-to-l from-transparent to-secondary" />
          </div>
        </motion.div>

        {/* Closing Statement */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.6,
            duration: 0.6,
          }}
          className="mx-auto mt-10 max-w-3xl text-center text-lg leading-8 text-white/60"
        >
          Our leadership philosophy is built on trust,
          collaboration and practical execution—helping every
          client move forward with confidence in an increasingly
          competitive global business environment.
        </motion.p>
      </div>
    </Section>
  );
}