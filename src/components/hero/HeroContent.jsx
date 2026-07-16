"use client";

import { Sparkles } from "lucide-react";

import AnimatedText from "../ui/AnimatedText";
import AnimatedSection from "../ui/AnimatedSection";
import AnimatedArrow from "../ui/AnimatedArrow";
import PrimaryButton from "../ui/PrimaryButton";

export default function HeroContent() {
  return (
    <div>

      <AnimatedSection delay={0}>

        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-5 py-2">

          <Sparkles
            size={16}
            className="text-secondary"
          />

          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-secondary">
            Trusted Business Solutions
          </span>

        </div>

      </AnimatedSection>

      <AnimatedText
        delay={0.2}
        className="max-w-2xl text-5xl font-extrabold leading-tight lg:text-4xl"
      >
        Empowering Businesses Through Strategic Management Excellence.
      </AnimatedText>

      <AnimatedSection
        delay={0.4}
        className="mt-8 max-w-xl"
      >
        <p className="text-lg leading-8 text-text-secondary">
          HAB GLOBAL MANAGEMENT LTD partners with
          organisations to deliver professional
          consultancy, strategic planning and business
          solutions that create lasting success.
        </p>
      </AnimatedSection>

      <AnimatedSection
        delay={0.6}
        className="mt-10 flex flex-wrap gap-4"
      >
        <PrimaryButton
          icon={<AnimatedArrow />}
        >
          Get A Quote
        </PrimaryButton>

        <PrimaryButton variant="outline">
          Explore Services
        </PrimaryButton>

      </AnimatedSection>

    </div>
  );
}