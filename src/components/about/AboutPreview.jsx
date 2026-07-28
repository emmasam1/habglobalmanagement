"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Target } from "lucide-react";

import SectionHeader from "../ui/SectionHeader";
import PrimaryButton from "../ui/PrimaryButton";
import AnimatedArrow from "../ui/AnimatedArrow";
import AnimatedSection from "../ui/AnimatedSection";

export default function AboutPreview() {
  return (
    <section className="section relative overflow-hidden">
      <div className="container">
        <SectionHeader
          eyebrow="Who We Are"
          title="Helping Businesses Build Sustainable Growth"
          description="At HAB GLOBAL MANAGEMENT LTD, we provide practical business management, consultancy and strategic solutions that empower organisations to improve efficiency, embrace innovation and achieve lasting success."
        />

        <div className="mt-20 grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}

          <AnimatedSection>
            <h3 className="text-3xl font-bold text-text-primary">
              Your Trusted Business Partner
            </h3>

            <p className="mt-6 leading-8 text-text-secondary">
              Whether you're launching a new venture or strengthening an
              established organisation, our team works closely with you to
              develop practical solutions that drive measurable results and
              long-term value.
            </p>

            <p className="mt-6 leading-8 text-text-secondary">
              We believe every business deserves a strategy built around its
              unique goals, challenges and opportunities.
            </p>

            <Link href="/about">
              <PrimaryButton className="mt-10" icon={<AnimatedArrow />}>
                Learn More
              </PrimaryButton>
            </Link>
          </AnimatedSection>

          {/* RIGHT */}

          <AnimatedSection delay={0.2}>
            <div className="relative mx-auto max-w-lg">
              {/* Glow */}

              <div className="absolute inset-0 scale-110 rounded-full bg-primary/10 blur-3xl" />

              {/* Image */}

              <div className="relative overflow-hidden rounded-[32px] border border-white/20 shadow-[0_40px_120px_rgba(0,0,0,.15)]">
                <Image
                  src="/Administrative_Services.jpg"
                  alt="Business administration and planning"
                  width={600}
                  height={700}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-full w-full rounded-[32px] object-cover"
                />
              </div>

              {/* Floating Card */}

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-8 -left-8 max-w-xs rounded-3xl border border-border bg-background/80 p-6 shadow-2xl backdrop-blur-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20">
                    <Target size={22} className="text-secondary" />
                  </div>

                  <div>
                    <h4 className="font-bold text-text-primary">Our Mission</h4>

                    <p className="mt-2 text-sm leading-6 text-text-secondary">
                      Deliver innovative business solutions that help
                      organisations grow with confidence.
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
