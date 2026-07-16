"use client";

import AnimatedSection from "./AnimatedSection";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  center = false,
}) {
  return (
    <AnimatedSection
      className={`max-w-3xl ${
        center ? "mx-auto text-center" : ""
      }`}
    >
      <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
        {eyebrow}
      </span>

      <h2 className="mt-4 text-4xl font-bold leading-tight text-text-primary md:text-4xl">
        {title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-text-secondary">
        {description}
      </p>
    </AnimatedSection>
  );
}