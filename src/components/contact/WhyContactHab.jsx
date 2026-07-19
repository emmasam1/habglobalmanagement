"use client";

import { motion } from "motion/react";
import {
  Users,
  ShieldCheck,
  Lightbulb,
  Handshake,
} from "lucide-react";

import Section from "@/components/layout/Section";
import BackgroundGlow from "@/components/ui/BackgroundGlow";
import PremiumSectionHeading from "@/components/ui/PremiumSectionHeading";
import PremiumCard from "@/components/ui/PremiumCard";

const reasons = [
  {
    icon: Users,
    title: "Personalised Consulting",
    description:
      "Every organisation is different. We take time to understand your goals before recommending practical solutions.",
  },
  {
    icon: Lightbulb,
    title: "Practical Solutions",
    description:
      "Our recommendations focus on real-world implementation and measurable improvements—not unnecessary complexity.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Integrity",
    description:
      "We value transparency, confidentiality, and professionalism throughout every engagement.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description:
      "Our objective is to build trusted relationships that support your organisation beyond a single project.",
  },
];

export default function WhyContactHab() {
  return (
    <Section className="relative overflow-hidden py-28 lg:py-36">

      <BackgroundGlow />

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="relative z-10">

        <PremiumSectionHeading
          centered
          label="Why HAB Global"
          title="Why Organisations Choose HAB Global"
          description="Our approach combines strategic thinking, operational expertise, and a commitment to delivering practical value."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {reasons.map((reason, index) => {

            const Icon = reason.icon;

            return (

              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >

                <PremiumCard className="group h-full">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 text-secondary transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">

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