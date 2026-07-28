"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Award } from "lucide-react";

import SectionHeader from "../ui/SectionHeader";
import AnimatedSection from "../ui/AnimatedSection";
import FeatureItem from "./FeatureItem";

import { features } from "@/data/features";

export default function WhyChoose() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />

      <div className="container">
        <SectionHeader
          center
          eyebrow="Why Choose HAB GLOBAL"
          title="Helping Businesses Move Forward With Confidence"
          description="We combine strategic thinking, professional expertise and a client-focused approach to deliver solutions that create measurable value for every organisation."
        />

        <div className="mt-20 grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}

          <AnimatedSection className="space-y-10">
            {features.map((feature) => (
              <FeatureItem key={feature.title} {...feature} />
            ))}
          </AnimatedSection>

          {/* RIGHT */}

          <AnimatedSection delay={0.2}>
            <div className="relative mx-auto max-w-lg">
              {/* Glow */}

              <div className="absolute inset-0 scale-110 rounded-full bg-primary/10 blur-3xl" />

              {/* Image */}

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative overflow-hidden rounded-[32px] border border-white/20 shadow-[0_40px_120px_rgba(0,0,0,.15)]"
              >
                <Image
                  src="/Compliance_Support.jpg"
                  alt="Business Strategy"
                  width={600}
                  height={700}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-full w-full object-cover"
                />
              </motion.div>

              {/* Floating Glass Card */}

              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-8 -left-8 max-w-xs rounded-3xl border border-border bg-background/80 p-6 shadow-2xl backdrop-blur-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20">
                    <Award size={22} className="text-secondary" />
                  </div>

                  <div>
                    <h4 className="font-bold text-text-primary">
                      Business Excellence
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-text-secondary">
                      Delivering practical, reliable and innovative solutions
                      that support sustainable business growth.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
