"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  Award,
  BriefcaseBusiness,
  Building2,
} from "lucide-react";

import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const stats = [
  {
    icon: <Award size={20} />,
    value: "15+",
    label: "Years Experience",
  },
  {
    icon: <BriefcaseBusiness size={20} />,
    value: "250+",
    label: "Projects Led",
  },
  {
    icon: <Building2 size={20} />,
    value: "20+",
    label: "Industries Served",
  },
];

export default function LeadershipQuote() {
  return (
    <Section className="relative overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-secondary/10 blur-[180px]" />

      </div>

      <div className="relative">

        <SectionHeading
          center
          badge="Leadership"
          title="Meet Our Founder"
          subtitle="The vision behind HAB Global Management Ltd."
        />

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">

          {/* Photo */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="relative"
          >

            <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-secondary/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[40px] border border-border bg-background shadow-2xl">

              <Image
                src="/founder.jpg"
                alt="Founder"
                width={700}
                height={900}
                className="h-[620px] w-full object-cover"
              />

            </div>

          </motion.div>

          {/* Content */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >

            <span className="text-secondary font-semibold uppercase tracking-[0.25em]">
              Founder & Managing Director
            </span>

            <h2 className="mt-4 text-5xl font-black text-text-primary">

              Your Name Here

            </h2>

            <blockquote className="mt-8 border-l-4 border-secondary pl-6 text-2xl italic leading-relaxed text-text-primary">

              "We believe every business has the potential to
              achieve extraordinary growth when strategy,
              innovation and execution work together."

            </blockquote>

            <div className="mt-8 space-y-6 text-lg leading-9 text-text-secondary">

              <p>
                As Founder and Managing Director of HAB Global
                Management Ltd, I am passionate about helping
                businesses build sustainable growth through
                practical consulting, strategic planning and
                operational excellence.
              </p>

              <p>
                Every organisation is unique, which is why we
                believe in creating tailored solutions rather
                than offering one-size-fits-all advice.
              </p>

            </div>

            {/* Signature */}

            <div className="mt-10">

              <p className="font-serif text-4xl text-secondary">

                Your Signature

              </p>

            </div>

          </motion.div>

        </div>

        {/* Statistics */}

        <div className="mt-20 grid gap-6 md:grid-cols-3">

          {stats.map((item) => (

            <motion.div
              key={item.label}
              whileHover={{
                y: -8,
              }}
              className="rounded-3xl border border-border bg-background p-8 shadow-lg"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">

                {item.icon}

              </div>

              <h3 className="mt-6 text-4xl font-black text-text-primary">

                {item.value}

              </h3>

              <p className="mt-2 text-text-secondary">

                {item.label}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </Section>
  );
}