"use client";

import { motion } from "motion/react";

import Section from "@/components/layout/Section";

const steps = [
  "Service",
  "Organisation",
  "Project",
  "Review",
];

export default function RequestStepper({
  current,
}) {
  return (
    <Section className="pb-16">

      <div className="mx-auto flex max-w-5xl items-center justify-between">

        {steps.map((step, index) => (

          <div
            key={step}
            className="flex flex-1 items-center"
          >

            <div className="flex flex-col items-center">

              <motion.div
                animate={{
                  scale: current === index ? 1.1 : 1,
                }}
                className={`flex h-14 w-14 items-center justify-center rounded-full border text-lg font-bold transition

                ${
                  current >= index
                    ? "border-secondary bg-secondary text-black"
                    : "border-border text-text-secondary"
                }`}
              >
                {index + 1}
              </motion.div>

              <span
                className={`mt-3 text-sm font-semibold

                ${
                  current >= index
                    ? "text-secondary"
                    : "text-text-secondary"
                }`}
              >
                {step}
              </span>

            </div>

            {index < steps.length - 1 && (

              <div
                className={`mx-4 h-[2px] flex-1

                ${
                  current > index
                    ? "bg-secondary"
                    : "bg-border"
                }`}
              />

            )}

          </div>

        ))}

      </div>

    </Section>
  );
}