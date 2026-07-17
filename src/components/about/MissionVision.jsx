"use client";

import { motion } from "motion/react";
import {
  Target,
  Globe2,
  ArrowDown,
} from "lucide-react";

import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export default function MissionVision() {
  return (
    <Section className="relative overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-secondary/10 blur-[180px]" />

      </div>

      <div className="relative">

        <SectionHeading
          center
          badge="Our Purpose"
          title="Driven By Purpose. Focused On Impact."
          subtitle="Everything we do is guided by a clear mission and an ambitious vision for the future."
        />

        <div className="mx-auto mt-24 max-w-5xl">

          {/* Mission */}

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
              duration: .6,
            }}
            className="relative rounded-[32px] border border-border bg-background p-10 shadow-xl"
          >

            <div className="flex items-start gap-6">

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-secondary/10 text-secondary">

                <Target size={30} />

              </div>

              <div>

                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">

                  Our Mission

                </span>

                <h3 className="mt-3 text-3xl font-black text-text-primary">

                  Empowering Sustainable Business Growth

                </h3>

                <p className="mt-6 text-lg leading-9 text-text-secondary">

                  To empower businesses, organisations and entrepreneurs
                  through strategic consulting, innovative thinking and
                  practical solutions that create measurable impact,
                  strengthen performance and support sustainable growth.

                </p>

              </div>

            </div>

          </motion.div>

          {/* Connector */}

          <div className="flex justify-center py-10">

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-background shadow-lg"
            >

              <ArrowDown
                size={28}
                className="text-secondary"
              />

            </motion.div>

          </div>

          {/* Vision */}

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
              duration: .6,
              delay: .15,
            }}
            className="relative rounded-[32px] border border-border bg-primary p-10 text-white shadow-2xl"
          >

            <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-secondary/20 blur-[120px]" />

            <div className="relative flex items-start gap-6">

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-white/10 text-secondary">

                <Globe2 size={30} />

              </div>

              <div>

                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">

                  Our Vision

                </span>

                <h3 className="mt-3 text-3xl font-black">

                  Becoming A Global Benchmark For Excellence

                </h3>

                <p className="mt-6 text-lg leading-9 text-white/85">

                  To become one of the world's most trusted management
                  consulting firms, recognised for delivering excellence,
                  innovation and transformational solutions that help
                  organisations thrive in an evolving global economy.

                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </Section>
  );
}