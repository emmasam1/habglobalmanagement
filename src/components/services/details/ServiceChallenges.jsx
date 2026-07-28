"use client";

import { motion } from "motion/react";
import {
  TrendingDown,
  Compass,
  Settings2,
  BarChart3,
} from "lucide-react";

import Section from "@/components/layout/Section";
import BackgroundGlow from "@/components/ui/BackgroundGlow";
import PremiumSectionHeading from "@/components/ui/PremiumSectionHeading";
import PremiumCard from "@/components/ui/PremiumCard";
import { getServiceAccent } from "@/lib/serviceAccents";

const icons = [
  TrendingDown,
  Compass,
  Settings2,
  BarChart3,
];

export default function ServiceChallenges({ service }) {
  const accent = getServiceAccent(service?.accent);

  return (
    <Section className="relative overflow-hidden py-28 lg:py-36">

      <BackgroundGlow />

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="relative z-10">

        <PremiumSectionHeading
          centered
          label="Challenges We Help Solve"
          title="Helping Organisations Overcome Real Business Challenges"
          description="Every organisation faces unique obstacles. Our role is to identify those challenges and deliver practical solutions that create measurable results."
        />

        <div className="mx-auto mt-20 grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-4">

          {service.challenges.map((challenge, index) => {

            const Icon = icons[index % icons.length];

            return (

              <motion.div
                key={challenge}
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
                  delay: index * .1,
                }}
              >

                <PremiumCard className="h-full">

                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl ${accent.background} ${accent.text}`}
                  >
                    <Icon size={30} />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-text-primary">
                    {challenge}
                  </h3>

                  <p className="mt-5 leading-8 text-text-secondary">
                    We work closely with organisations to understand this
                    challenge, identify its root causes and implement practical
                    solutions that deliver sustainable improvements.
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
