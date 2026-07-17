"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  Briefcase,
  Globe2,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import PrimaryButton from "@/components/ui/PrimaryButton";

const pillars = [
  {
    icon: <Briefcase size={22} />,
    title: "Business Strategy",
    text: "Helping organisations make confident, data-driven decisions.",
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Growth Advisory",
    text: "Supporting sustainable expansion with practical solutions.",
  },
  {
    icon: <Globe2 size={22} />,
    title: "Global Perspective",
    text: "Delivering solutions that meet international standards.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Trusted Partnership",
    text: "Building long-term relationships through integrity, transparency and measurable results.",
  },
];

export default function CompanyStory() {
  return (
    <Section className="relative overflow-hidden">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-secondary/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary/5 blur-[180px]" />
      </div>

      <div className="relative grid items-center gap-20 lg:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >
          <SectionHeading
            badge="Who We Are"
            title="Helping Businesses Move Forward With Confidence."
            subtitle="HAB Global Management Ltd partners with businesses, entrepreneurs and organisations to transform challenges into opportunities through strategic thinking, operational excellence and practical execution."
          />

          <div className="mt-10 space-y-6 text-lg leading-9 text-text-secondary">

            <p>
              HAB Global Management Ltd is a UK-based management consulting
              firm committed to helping organisations navigate complex
              business challenges with confidence.
            </p>

            <p>
              By combining strategic thinking, industry expertise and
              practical execution, we deliver tailored solutions that
              strengthen operations, improve performance and create
              sustainable growth.
            </p>

            <p>
              Every client engagement begins with understanding your
              objectives before developing strategies that are practical,
              scalable and results-driven.
            </p>

          </div>

          <div className="mt-10">
            <PrimaryButton
              href="/services"
              icon={<ArrowRight size={18} />}
            >
              Explore Our Services
            </PrimaryButton>
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {pillars.map((item, index) => (
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
                delay: index * .1,
              }}
              whileHover={{
                y: -8,
              }}
              className="group rounded-3xl border border-border bg-background p-8 shadow-sm transition-all duration-300 hover:border-secondary/40 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary transition duration-300 group-hover:scale-110">
                {item.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-text-primary">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-text-secondary">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </Section>
  );
}