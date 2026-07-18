"use client";

import { motion } from "motion/react";
import {
  Rocket,
  BriefcaseBusiness,
  Globe2,
} from "lucide-react";

import Section from "@/components/layout/Section";
import BackgroundGlow from "@/components/ui/BackgroundGlow";
import PremiumSectionHeading from "@/components/ui/PremiumSectionHeading";
import PremiumCard from "@/components/ui/PremiumCard";

const journey = [
  {
    icon: Rocket,
    year: "2026",
    title: "A Strong Beginning",
    description:
      "HAB Global Management Ltd was established in the United Kingdom with a vision of helping organisations make better business decisions through practical consulting and strategic advisory services.",
  },
  {
    icon: BriefcaseBusiness,
    year: "Today",
    title: "Building Trusted Partnerships",
    description:
      "We are focused on supporting businesses, entrepreneurs and organisations with tailored solutions that encourage sustainable growth and operational excellence.",
  },
  {
    icon: Globe2,
    year: "The Future",
    title: "Growing With Our Clients",
    description:
      "Our ambition is to become a trusted consulting partner recognised for professionalism, innovation and measurable impact across industries and international markets.",
  },
];

export default function Journey() {
  return (
    <Section className="relative overflow-hidden py-28 lg:py-36">
      <BackgroundGlow />

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="relative z-10">

        <PremiumSectionHeading
          centered
          label="Our Journey"
          title="A Clear Vision For The Future."
          description="Every successful business begins with purpose. Our journey is focused on building trusted relationships and creating meaningful impact."
        />

        <div className="mx-auto mt-20 grid max-w-7xl gap-8 lg:grid-cols-3">

          {journey.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                }}
              >
                <PremiumCard className="h-full">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                    <Icon size={30} />
                  </div>

                  <span className="mt-8 block text-sm font-bold uppercase tracking-[0.25em] text-secondary">
                    {item.year}
                  </span>

                  <h3 className="mt-4 text-2xl font-bold text-text-primary">
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