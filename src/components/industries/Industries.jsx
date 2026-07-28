"use client";

import { useCallback, useEffect } from "react";
import { motion, useAnimationControls } from "motion/react";

import SectionHeader from "../ui/SectionHeader";
import IndustryCard from "./IndustryCard";

import { industries } from "@/data/industries";

export default function Industries() {
  const firstRow = [...industries.slice(0, 4), ...industries.slice(0, 4)];
  const secondRow = [...industries.slice(4), ...industries.slice(4)];

  const firstControls = useAnimationControls();
  const secondControls = useAnimationControls();

  const startAnimation = useCallback(() => {
    firstControls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      },
    });

    secondControls.start({
      x: ["-50%", "0%"],
      transition: {
        duration: 32,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [firstControls, secondControls]);

  const stopAnimation = () => {
    firstControls.stop();
    secondControls.stop();
  };

  useEffect(() => {
    startAnimation();

    return () => {
      firstControls.stop();
      secondControls.stop();
    };
  }, [firstControls, secondControls, startAnimation]);

  return (
    <section className="section overflow-hidden">

      <div className="container">

        <SectionHeader
          center
          eyebrow="Industries We Serve"
          title="Supporting Organisations Across Diverse Sectors"
          description="Our expertise spans multiple industries, enabling us to provide tailored solutions for businesses of all sizes."
        />

      </div>

      {/* First Row */}

      <motion.div
        animate={firstControls}
        onHoverStart={stopAnimation}
        onHoverEnd={startAnimation}
        className="mt-16 flex gap-6 cursor-pointer"
      >
        {firstRow.map((item, index) => (
          <IndustryCard
            key={`${item.title}-${index}`}
            {...item}
          />
        ))}
      </motion.div>

      {/* Second Row */}

      <motion.div
        animate={secondControls}
        onHoverStart={stopAnimation}
        onHoverEnd={startAnimation}
        className="mt-6 flex gap-6 cursor-pointer"
      >
        {secondRow.map((item, index) => (
          <IndustryCard
            key={`${item.title}-${index}`}
            {...item}
          />
        ))}
      </motion.div>

    </section>
  );
}
