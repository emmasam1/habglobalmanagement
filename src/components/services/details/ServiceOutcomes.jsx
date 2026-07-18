"use client";

import { motion } from "motion/react";
import {
  TrendingUp,
  Target,
  BarChart3,
  Award,
} from "lucide-react";

import Section from "@/components/layout/Section";
import BackgroundGlow from "@/components/ui/BackgroundGlow";
import PremiumSectionHeading from "@/components/ui/PremiumSectionHeading";
import PremiumCard from "@/components/ui/PremiumCard";

const icons = [
  TrendingUp,
  Target,
  BarChart3,
  Award,
];

export default function ServiceOutcomes({ service }) {
  return (
    <Section className="relative overflow-hidden py-28 lg:py-36">

      <BackgroundGlow />

      {/* Accent Line */}

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="relative z-10">

        <PremiumSectionHeading
          centered
          label="Business Outcomes"
          title="Creating Long-Term Value For Your Organisation"
          description="Every engagement is focused on delivering meaningful improvements that strengthen your organisation today and prepare it for tomorrow."
        />

        <div className="mx-auto mt-20 grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-4">

          {service.outcomes.map((outcome, index) => {

            const Icon = icons[index % icons.length];

            return (

              <motion.div
                key={outcome.title}
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

                <PremiumCard className="group relative h-full overflow-hidden">

                  {/* Hover Glow */}

                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.accent.bg} opacity-0 transition duration-500 group-hover:opacity-100`}
                  />

                  <div className="relative">

                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl ${service.accent.bg} ${service.accent.text}`}
                    >
                      <Icon size={30} />
                    </div>

                    <h3 className="mt-8 text-2xl font-bold text-text-primary">
                      {outcome.title}
                    </h3>

                    <p className="mt-5 leading-8 text-text-secondary">
                      {outcome.description}
                    </p>

                  </div>

                </PremiumCard>

              </motion.div>

            );

          })}

        </div>

      </div>

    </Section>
  );
}