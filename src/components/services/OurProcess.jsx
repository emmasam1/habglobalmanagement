"use client";

import { motion } from "motion/react";
import {
  Search,
  ClipboardCheck,
  Lightbulb,
  Settings,
  Handshake,
} from "lucide-react";

import Section from "@/components/layout/Section";
import BackgroundGlow from "@/components/ui/BackgroundGlow";
import PremiumSectionHeading from "@/components/ui/PremiumSectionHeading";
import PremiumCard from "@/components/ui/PremiumCard";

const process = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "Understanding your business objectives, challenges and long-term vision.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Assessment",
    description:
      "Reviewing current operations to identify strengths, risks and opportunities.",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Strategy",
    description:
      "Developing practical solutions tailored to your organisation's goals.",
  },
  {
    number: "04",
    icon: Settings,
    title: "Implementation",
    description:
      "Supporting execution with structured guidance and measurable actions.",
  },
  {
    number: "05",
    icon: Handshake,
    title: "Ongoing Support",
    description:
      "Building long-term partnerships focused on continuous improvement.",
  },
];

export default function OurProcess() {
  return (
    <Section className="relative overflow-hidden py-28 lg:py-36">
      <BackgroundGlow />

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="relative z-10">

        <PremiumSectionHeading
          centered
          label="Our Process"
          title="A Structured Approach To Every Engagement"
          description="Every project follows a clear, collaborative process designed to deliver measurable outcomes."
        />

        <div className="relative mx-auto mt-24 max-w-7xl">

          {/* Gold Line */}

          <div className="absolute left-0 right-0 top-16 hidden h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent lg:block" />

          <div className="grid gap-8 lg:grid-cols-5">

            {process.map((step, index) => {

              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
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
                  transition={{
                    delay: index * .12,
                  }}
                >
                  <PremiumCard className="relative h-full text-center">

                    <span className="text-6xl font-black text-secondary/15">
                      {step.number}
                    </span>

                    <div className="mx-auto mt-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">

                      <Icon size={30} />

                    </div>

                    <h3 className="mt-8 text-lg font-bold text-text-primary">
                      {step.title}
                    </h3>

                    <p className="mt-5 leading-8 text-text-secondary text-sm">
                      {step.description}
                    </p>

                  </PremiumCard>
                </motion.div>
              );

            })}

          </div>

        </div>

      </div>
    </Section>
  );
}