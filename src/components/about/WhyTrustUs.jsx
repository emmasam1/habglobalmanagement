"use client";

import { motion } from "motion/react";
import {
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import Image from "next/image";

import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import PrimaryButton from "@/components/ui/PrimaryButton";

const reasons = [
  "Tailored business solutions for every client.",
  "Experienced consultants with practical expertise.",
  "Industry-focused strategies that deliver measurable value.",
  "Transparent communication throughout every engagement.",
  "Commitment to innovation and continuous improvement.",
  "Long-term partnerships built on trust and integrity.",
];

export default function WhyTrustUs() {
  return (
    <Section className="relative overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-secondary/10 blur-[160px]" />

      </div>

      <div className="relative grid items-center gap-20 lg:grid-cols-2">

        {/* Left */}

        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .7,
          }}
        >

          <SectionHeading
            badge="Why Choose Us"
            title="Why Businesses Trust HAB Global"
            subtitle="Our commitment goes beyond delivering consulting services. We build partnerships that create lasting value."
          />

          <div className="mt-10 space-y-6">

            {reasons.map((item, index) => (

              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * .08,
                }}
                className="flex items-start gap-4 rounded-2xl border border-border bg-background p-5"
              >

                <CheckCircle2
                  className="mt-1 text-secondary"
                  size={22}
                />

                <p className="leading-7 text-text-secondary">

                  {item}

                </p>

              </motion.div>

            ))}

          </div>

          <div className="mt-10">

            <PrimaryButton
              href="/contact"
              icon={<ArrowRight size={18} />}
            >
              Let's Work Together
            </PrimaryButton>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .7,
          }}
          className="relative"
        >

          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-secondary/15 blur-3xl" />

          <div className="relative overflow-hidden rounded-[40px] border border-border shadow-2xl">

            <Image
              src="/images/about/trust.jpg"
              alt="Why Choose HAB Global"
              width={700}
              height={800}
              className="h-[650px] w-full object-cover"
            />

          </div>

        </motion.div>

      </div>

    </Section>
  );
}