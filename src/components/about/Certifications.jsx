"use client";

import { motion } from "motion/react";
import {
  ShieldCheck,
  Building2,
  BadgeCheck,
  Landmark,
} from "lucide-react";

import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const certifications = [
  {
    icon: <Building2 size={30} />,
    title: "UK Registered Company",
    description:
      "HAB Global Management Ltd is incorporated and operates in accordance with the laws and regulations of the United Kingdom.",
  },
  {
    icon: <Landmark size={30} />,
    title: "Regulatory Compliance",
    description:
      "Committed to maintaining the highest standards of legal, financial and corporate compliance.",
  },
  {
    icon: <ShieldCheck size={30} />,
    title: "Professional Integrity",
    description:
      "Every engagement is guided by transparency, accountability and ethical business practices.",
  },
  {
    icon: <BadgeCheck size={30} />,
    title: "Global Best Practices",
    description:
      "Our consulting approach follows internationally recognised business standards to deliver sustainable results.",
  },
];

export default function Certifications() {
  return (
    <Section className="relative overflow-hidden bg-surface-secondary">

      <div className="absolute inset-0">

        <div className="absolute left-10 top-10 h-80 w-80 rounded-full bg-secondary/10 blur-[160px]" />

      </div>

      <div className="relative">

        <SectionHeading
          center
          badge="Professional Standards"
          title="Committed to Excellence"
          subtitle="We operate with integrity, professionalism and a commitment to internationally recognised business practices."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {certifications.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 40,
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
              whileHover={{
                y: -8,
              }}
              className="group rounded-3xl border border-border bg-background p-8 shadow-sm transition-all duration-300 hover:border-secondary/40 hover:shadow-xl"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary transition group-hover:scale-110">

                {item.icon}

              </div>

              <h3 className="mt-6 text-xl font-bold text-text-primary">

                {item.title}

              </h3>

              <p className="mt-4 leading-7 text-text-secondary">

                {item.description}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </Section>
  );
}