"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import services from "@/data/services";

import Section from "@/components/layout/Section";
import BackgroundGlow from "@/components/ui/BackgroundGlow";
import PremiumSectionHeading from "@/components/ui/PremiumSectionHeading";

export default function ServicesNavigator() {
  const otherServices = services.filter((item) => !item.featured);

  return (
    <Section className="relative overflow-hidden py-28 lg:py-36">
      <BackgroundGlow />

      {/* Accent */}

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="relative z-10">

        <PremiumSectionHeading
          centered
          label="Explore Our Expertise"
          title="Specialised Consulting Services"
          description="Discover tailored consulting solutions designed to help organisations improve efficiency, strengthen compliance and achieve sustainable growth."
        />

        <div className="mx-auto mt-20 max-w-6xl space-y-6">

          {otherServices.map((service, index) => {

            const Icon = service.icon;

            return (

              <motion.div
                key={service.id}
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
                className="group overflow-hidden rounded-[30px] border border-border bg-background transition-all duration-500 hover:border-secondary/40 hover:shadow-xl"
              >

                {/* Glow */}

                <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="grid gap-10 p-8 lg:grid-cols-[80px_1fr_auto] lg:items-center">

                  {/* Icon */}

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">

                    <Icon size={30} />

                  </div>

                  {/* Text */}

                  <div>

                    <h3 className="text-2xl font-bold text-text-primary">
                      {service.title}
                    </h3>

                    <p className="mt-3 max-w-3xl leading-8 text-text-secondary">
                      {service.shortDescription}
                    </p>

                  </div>

                  {/* Actions */}

                  <div className="flex flex-col gap-4 sm:flex-row">

                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold transition hover:border-secondary hover:text-secondary"
                    >
                      View Details

                      <ArrowRight size={18} />
                    </Link>

                    <Link
                      href={`/services/request?service=${service.slug}`}
                      className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 font-semibold text-black transition hover:scale-105"
                    >
                      Request Service

                      <ArrowUpRight size={18} />
                    </Link>

                  </div>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </Section>
  );
}