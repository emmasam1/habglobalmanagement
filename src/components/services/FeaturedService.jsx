"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import services from "@/data/services";

import Section from "@/components/layout/Section";
import BackgroundGlow from "@/components/ui/BackgroundGlow";
import PremiumSectionHeading from "@/components/ui/PremiumSectionHeading";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { serviceIcons } from "@/lib/serviceIcons";

export default function FeaturedService() {
  const service = services.find((item) => item.featured);

  const Icon = serviceIcons[service.icon];

  return (
    <Section className="relative overflow-hidden py-28 lg:py-36">
      <BackgroundGlow />

      {/* Accent Line */}

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="relative z-10">
        <PremiumSectionHeading
          centered
          label="Featured Service"
          title={service.title}
          description="Designed to help organisations make better decisions, improve performance and achieve sustainable business growth."
        />

        <motion.div
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
            duration: 0.7,
          }}
          className="mt-20 overflow-hidden rounded-[40px] border border-border bg-background shadow-xl"
        >
          <div className="grid items-center lg:grid-cols-2">
            {/* IMAGE */}

            <div className="relative h-[350px] lg:h-[650px]">
              <Image
                src={service.heroImage}
                alt={service.title}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
            </div>

            {/* CONTENT */}

            <div className="p-8 md:p-12 lg:p-16">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                <Icon size={30} />
              </div>

              <h2 className="mt-8 text-4xl font-black text-text-primary lg:text-5xl">
                {service.title}
              </h2>

              <p className="mt-8 text-lg leading-9 text-text-secondary">
                {service.shortDescription}
              </p>

              {/* BENEFITS */}

              <div className="mt-10 space-y-6">
                {service.outcomes?.map((outcome) => (
                  <div key={outcome.title} className="flex items-start gap-4">
                    <CheckCircle2
                      size={20}
                      className="mt-1 shrink-0 text-secondary"
                    />

                    <div>
                      <h4 className="font-semibold text-text-primary">
                        {outcome.title}
                      </h4>

                      <p className="mt-1 text-sm leading-7 text-text-secondary">
                        {outcome.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* BUTTONS */}

              <div className="mt-14 flex flex-col gap-4 sm:flex-row">
                <PrimaryButton
                  href={`/services/${service.slug}`}
                  icon={<ArrowRight size={18} />}
                >
                  View Full Details
                </PrimaryButton>

                <Link
                  href={`/services/request?service=${service.slug}`}
                  className="inline-flex items-center justify-center rounded-full border border-border px-8 py-4 font-semibold transition hover:border-secondary hover:text-secondary"
                >
                  Request Service
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
