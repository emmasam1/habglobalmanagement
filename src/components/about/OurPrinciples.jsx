"use client";

import { motion } from "motion/react";
import {
  Compass,
  Handshake,
  Target,
  Globe2,
} from "lucide-react";

import Section from "@/components/layout/Section";
import BackgroundGlow from "@/components/ui/BackgroundGlow";
import PremiumSectionHeading from "@/components/ui/PremiumSectionHeading";
import PremiumCard from "@/components/ui/PremiumCard";

const principles = [
  {
    number: "01",
    icon: Compass,
    title: "Strategic Thinking",
    description:
      "Helping organisations make informed decisions that drive sustainable growth and long-term success.",
  },
  {
    number: "02",
    icon: Handshake,
    title: "Trusted Partnership",
    description:
      "Building lasting relationships through collaboration, transparency and shared business objectives.",
  },
  {
    number: "03",
    icon: Target,
    title: "Practical Execution",
    description:
      "Transforming ideas into measurable business outcomes through disciplined implementation.",
  },
  {
    number: "04",
    icon: Globe2,
    title: "Global Perspective",
    description:
      "Delivering modern consulting solutions aligned with international standards and best practices.",
  },
];

export default function OurPrinciples() {
  return (
    <Section className="relative overflow-hidden py-28 lg:py-36">

      <BackgroundGlow />

      {/* Accent */}

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="relative z-10">

        <PremiumSectionHeading
          centered
          label="Our Principles"
          title="The Values That Shape Every Decision."
          description="Everything we do is guided by principles that encourage trust, innovation and measurable business impact."
        />

        <div className="mx-auto mt-20 grid max-w-7xl gap-8 md:grid-cols-2">

          {principles.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
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
                  delay: index * 0.1,
                }}
              >

                <PremiumCard className="h-full">

                  <span className="text-6xl font-black text-secondary/20">
                    {item.number}
                  </span>

                  <div className="mt-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">

                    <Icon size={30} />

                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-text-primary">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-8 text-text-secondary">
                    {item.description}
                  </p>

                </PremiumCard>

              </motion.div>

            );

          })}

        </div>

      </div>

    </Section>
  );
}