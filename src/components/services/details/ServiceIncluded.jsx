"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";

import Section from "@/components/layout/Section";
import BackgroundGlow from "@/components/ui/BackgroundGlow";
import PremiumSectionHeading from "@/components/ui/PremiumSectionHeading";

export default function ServiceIncluded({ service }) {
  return (
    <Section className="relative overflow-hidden py-28 lg:py-36">

      <BackgroundGlow />

      {/* Accent */}

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="relative z-10">

        <PremiumSectionHeading
          centered
          label="What's Included"
          title="Comprehensive Support Tailored To Your Organisation"
          description="Every engagement is designed around your organisation's objectives, ensuring practical solutions that deliver measurable value."
        />

        <div className="mx-auto mt-20 max-w-6xl rounded-[36px] border border-border bg-background p-10 shadow-xl lg:p-16">

          <div className="grid gap-x-16 gap-y-8 md:grid-cols-2">

            {service.included.map((item, index) => (

              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -20 : 20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.05,
                }}
                className="group flex items-center gap-5 border-b border-border pb-6"
              >

                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${service.accent.bg}`}
                >
                  <Check
                    size={18}
                    className={service.accent.text}
                  />
                </div>

                <span className="text-lg font-medium text-text-primary transition-colors duration-300 group-hover:text-secondary">
                  {item}
                </span>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </Section>
  );
}