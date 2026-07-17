"use client";

import { motion } from "motion/react";
import {
  Lightbulb,
  Target,
  ShieldCheck,
  Handshake,
  TrendingUp,
  Sparkles,
} from "lucide-react";

import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const principles = [
  {
    icon: <Target size={26} />,
    title: "Purpose-Driven Strategy",
    description:
      "Every recommendation begins with understanding your business goals, challenges and long-term vision.",
  },
  {
    icon: <Lightbulb size={26} />,
    title: "Innovation",
    description:
      "We embrace modern thinking, technology and creative problem-solving to help businesses stay ahead.",
  },
  {
    icon: <Handshake size={26} />,
    title: "Partnership",
    description:
      "We work alongside our clients, becoming an extension of their team rather than just another consultant.",
  },
  {
    icon: <ShieldCheck size={26} />,
    title: "Integrity",
    description:
      "Trust, transparency and professionalism are at the centre of every engagement we undertake.",
  },
  {
    icon: <TrendingUp size={26} />,
    title: "Measurable Growth",
    description:
      "Success is measured through tangible improvements, sustainable growth and lasting business value.",
  },
  {
    icon: <Sparkles size={26} />,
    title: "Excellence",
    description:
      "We continuously strive to exceed expectations and deliver outstanding experiences for every client.",
  },
];

export default function TheHabWay() {
  return (
    <Section className="relative overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-20 top-24 h-72 w-72 rounded-full bg-secondary/10 blur-[140px]" />

        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-primary/5 blur-[180px]" />

      </div>

      <div className="relative">

        <SectionHeading
          center
          badge="Our Principles"
          title="The HAB Global Way"
          subtitle="Our approach is built on principles that shape every decision, every strategy and every partnership."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {principles.map((item, index) => (

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
                y: -10,
              }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-background p-8 shadow-sm transition-all duration-300 hover:border-secondary/40 hover:shadow-2xl"
            >

              {/* Glow */}

              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-secondary/5 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary transition duration-300 group-hover:scale-110 group-hover:rotate-6">

                  {item.icon}

                </div>

                <h3 className="mt-8 text-2xl font-bold text-text-primary">

                  {item.title}

                </h3>

                <p className="mt-5 leading-8 text-text-secondary">

                  {item.description}

                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </Section>
  );
}