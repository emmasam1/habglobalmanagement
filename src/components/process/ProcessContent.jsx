"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import PrimaryButton from "../ui/PrimaryButton";
import AnimatedArrow from "../ui/AnimatedArrow";

export default function ProcessContent({ step }) {
  const Icon = step.icon;

  return (
    <motion.div
      layout
      className="relative overflow-hidden rounded-[32px] border border-border bg-background shadow-xl"
    >
      {/* Background Glow */}

      <div className="absolute -right-20 -top-20 h-65 w-72 rounded-full bg-secondary/10 blur-3xl" />

      <div className="grid items-center gap-12 p-8 md:p-12 lg:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .45 }}
        >
          {/* Step */}

          <span className="inline-flex rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold tracking-[0.2em] uppercase text-secondary">
            Step {step.number}
          </span>

          {/* Title */}

          <div className="mt-6 flex items-center gap-5">

            <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-secondary text-white">

              <Icon size={20} />

            </div>

            <h2 className="text-3xl font-bold text-text-primary">
              {step.title}
            </h2>

          </div>

          {/* Description */}

          <p className="mt-5 text-lg leading-8 text-text-secondary">
            {step.description}
          </p>

          {/* Highlights */}

          <div className="mt-5 space-y-4">

            <div className="flex items-center gap-3">
              <CheckCircle2
                size={22}
                className="text-secondary"
              />

              <span className="text-text-secondary">
                Tailored business solutions
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2
                size={22}
                className="text-secondary"
              />

              <span className="text-text-secondary">
                Experienced professional guidance
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2
                size={22}
                className="text-secondary"
              />

              <span className="text-text-secondary">
                Long-term strategic partnership
              </span>
            </div>

          </div>

          {/* Button */}

          <Link
            href="/quote"
            className="inline-block"
          >
            <PrimaryButton
            href="/contact"
              className="mt-10"
              icon={<AnimatedArrow />}
            >
              Get Started
            </PrimaryButton>
          </Link>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .45 }}
          className="relative"
        >

          {/* Main Image */}

          <div className="overflow-hidden rounded-[30px]">

            <Image
              src={step.image}
              alt={step.title}
              width={700}
              height={700}
              className="h-full w-full object-cover"
            />

          </div>

          {/* Floating Card */}

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-8 -left-8 rounded-3xl border border-white/20 bg-background/90 p-6 shadow-2xl backdrop-blur-xl"
          >

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-white">

                <Icon size={24} />

              </div>

              <div>

                <h4 className="font-bold text-text-primary">
                  Professional Approach
                </h4>

                <p className="mt-1 text-sm text-text-secondary">
                  Delivering measurable results.
                </p>

              </div>

            </div>

          </motion.div>

        </motion.div>

      </div>
    </motion.div>
  );
}