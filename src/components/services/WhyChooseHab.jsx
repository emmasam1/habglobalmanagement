"use client";

import { motion } from "motion/react";
import {
  Users,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import Section from "@/components/layout/Section";
import BackgroundGlow from "@/components/ui/BackgroundGlow";
import PremiumSectionHeading from "@/components/ui/PremiumSectionHeading";
import PremiumCard from "@/components/ui/PremiumCard";

const reasons = [
  {
    icon: Users,
    title: "Client-Focused Partnership",
    description:
      "Every engagement begins with understanding your organisation's goals before recommending practical solutions.",
  },
  {
    icon: Lightbulb,
    title: "Tailored Solutions",
    description:
      "No two organisations are the same. Our recommendations are designed specifically around your business needs.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Integrity",
    description:
      "We value transparency, accountability and ethical business practices in every client relationship.",
  },
  {
    icon: TrendingUp,
    title: "Sustainable Growth",
    description:
      "Our focus is helping organisations build stronger operations and long-term business success.",
  },
];

export default function WhyChooseHab() {
  return (
    <Section className="relative overflow-hidden py-28 lg:py-36">

      <BackgroundGlow />

      {/* Accent */}

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="relative z-10">

        <PremiumSectionHeading
          centered
          label="Why Organisations Choose HAB Global"
          title="Built On Trust. Driven By Results."
          description="We combine strategic thinking, collaborative partnerships and practical execution to help organisations achieve meaningful outcomes."
        />

        <div className="mx-auto mt-20 grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-4">

          {reasons.map((reason, index) => {

            const Icon = reason.icon;

            return (

              <motion.div
                key={reason.title}
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

                <PremiumCard className="h-full text-center">

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">

                    <Icon size={30} />

                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-text-primary">
                    {reason.title}
                  </h3>

                  <p className="mt-5 leading-8 text-text-secondary">
                    {reason.description}
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