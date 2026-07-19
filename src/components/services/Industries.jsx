"use client";

import { motion } from "motion/react";
import {
  Building2,
  Hospital,
  GraduationCap,
  Store,
  Landmark,
  Laptop2,
  Factory,
  Handshake,
} from "lucide-react";

import Section from "@/components/layout/Section";
import BackgroundGlow from "@/components/ui/BackgroundGlow";
import PremiumSectionHeading from "@/components/ui/PremiumSectionHeading";
import PremiumCard from "@/components/ui/PremiumCard";

const industries = [
  {
    icon: Hospital,
    title: "Healthcare",
  },
  {
    icon: GraduationCap,
    title: "Education",
  },
  {
    icon: Building2,
    title: "Corporate",
  },
  {
    icon: Factory,
    title: "Construction",
  },
  {
    icon: Store,
    title: "Retail",
  },
  {
    icon: Laptop2,
    title: "Technology",
  },
  {
    icon: Landmark,
    title: "Government",
  },
  {
    icon: Handshake,
    title: "Non-Profit",
  },
];

export default function Industries() {
  return (
    <Section className="relative overflow-hidden py-28 lg:py-36">

      <BackgroundGlow />

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="relative z-10">

        <PremiumSectionHeading
          centered
          label="Industries"
          title="Industries We Serve"
          description="Our expertise supports organisations across a wide range of sectors, delivering practical solutions tailored to each industry's unique needs."
        />

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {industries.map((industry, index) => {

            const Icon = industry.icon;

            return (

              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * .05 }}
              >

                <PremiumCard className="group text-center">

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 text-secondary transition group-hover:scale-110">

                    <Icon size={30} />

                  </div>

                  <h3 className="mt-8 text-xl font-bold text-text-primary">

                    {industry.title}

                  </h3>

                </PremiumCard>

              </motion.div>

            );

          })}

        </div>

      </div>

    </Section>
  );
}