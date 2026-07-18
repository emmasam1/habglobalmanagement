"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

import Section from "@/components/layout/Section";
import BackgroundGlow from "@/components/ui/BackgroundGlow";

export default function ServiceOverview({ service }) {
  return (
    <Section className="relative overflow-hidden py-28 lg:py-36 bg-background">
      <BackgroundGlow />

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="relative z-10 grid items-center gap-20 lg:grid-cols-2">
        {/* IMAGE */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative overflow-hidden rounded-[36px]">
            <Image
              src={service.heroImage}
              alt={service.title}
              width={700}
              height={850}
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        {/* CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
            Our Approach
          </span>

          <h2 className="mt-6 text-4xl font-black text-text-primary lg:text-5xl">
            Helping organisations make confident decisions.
          </h2>

          <p className="mt-8 text-lg leading-9 text-text-secondary">
            {service.overview}
          </p>

          <div className="mt-10 space-y-5">
            {service.outcomes?.slice(0, 4).map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 text-secondary" size={20} />

                <div>
                  <h4 className="font-semibold text-text-primary">
                    {item.title}
                  </h4>

                  <p className="mt-1 text-sm leading-7 text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
