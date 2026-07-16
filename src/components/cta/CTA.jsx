"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  BriefcaseBusiness,
  Handshake,
} from "lucide-react";

import AnimatedArrow from "../ui/AnimatedArrow";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Background Glow */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-primary/10 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-secondary/15 blur-[120px]"
      />

      <div className="container relative">

        <div className="mx-auto max-w-5xl text-center">

          <span className="inline-flex rounded-full bg-secondary/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Let's Work Together
          </span>

          <h2 className="mt-8 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Ready to Move Your Business Forward?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-text-secondary">
            Whether you're seeking strategic guidance, operational
            improvement, or expert management support, HAB GLOBAL
            MANAGEMENT LTD is ready to help your organisation achieve
            sustainable growth.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

            <Link href="/contact">

              <motion.div
                animate={{
                  scale: [1, 1.04, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
                className="inline-flex"
              >
                <button className="flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-semibold text-white transition hover:opacity-90">

                  Get a Free Quote

                  <AnimatedArrow />

                </button>
              </motion.div>

            </Link>

            <Link href="/services">

              <button className="rounded-full border border-border px-8 py-4 font-semibold transition hover:border-secondary hover:text-secondary">

                Explore Services

              </button>

            </Link>

          </div>

          {/* Features */}

          <div className="mt-20 grid gap-8 md:grid-cols-3">

            <Feature
              icon={ShieldCheck}
              title="Professional"
              text="Reliable consulting backed by practical experience."
            />

            <Feature
              icon={BriefcaseBusiness}
              title="Strategic"
              text="Solutions tailored to your business objectives."
            />

            <Feature
              icon={Handshake}
              title="Partnership"
              text="Committed to long-term success and measurable results."
            />

          </div>

        </div>

      </div>

    </section>
  );
}

function Feature({ icon: Icon, title, text }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: .25,
      }}
      className="rounded-3xl border border-border bg-background/70 p-8 backdrop-blur"
    >
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10">

        <Icon
          size={30}
          className="text-secondary"
        />

      </div>

      <h3 className="mt-6 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-text-secondary">
        {text}
      </p>
    </motion.div>
  );
}