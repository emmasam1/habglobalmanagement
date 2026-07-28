"use client";

import { motion } from "motion/react";
import { BadgeCheck } from "lucide-react";

import Section from "@/components/layout/Section";
import BackgroundGlow from "@/components/ui/BackgroundGlow";
import PremiumSectionHeading from "@/components/ui/PremiumSectionHeading";
import { getServiceAccent } from "@/lib/serviceAccents";

export default function ServiceBenefits({ service }) {
  const accent = getServiceAccent(service?.accent);

  return (
    <Section className="relative overflow-hidden bg-surface-secondary py-28 lg:py-36">
      <BackgroundGlow />

      <div className="relative z-10">
        <PremiumSectionHeading
          centered
          label="Client Benefits"
          title="The Value Your Organisation Can Expect"
          description="Clear, practical benefits shaped around your organisation's priorities and long-term goals."
        />

        <div className="mx-auto mt-16 grid max-w-6xl gap-5 md:grid-cols-2">
          {service.benefits.map((benefit, index) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-6 shadow-sm"
            >
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${accent.background} ${accent.text}`}
              >
                <BadgeCheck size={22} />
              </span>

              <p className="pt-2 font-semibold leading-7 text-text-primary">
                {benefit}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
