"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const milestones = [
  {
    year: "2016",
    title: "Company Founded",
    description:
      "HAB Global Management Ltd was established with the vision of helping organisations build sustainable growth through strategic consulting.",
  },
  {
    year: "2018",
    title: "Business Expansion",
    description:
      "The company expanded its consulting services, supporting clients across multiple industries and business sectors.",
  },
  {
    year: "2021",
    title: "Regional Growth",
    description:
      "HAB Global strengthened its presence by delivering larger projects and building long-term partnerships.",
  },
  {
    year: "2024",
    title: "Innovation",
    description:
      "Digital transformation and modern consulting approaches became central to helping clients achieve measurable success.",
  },
  {
    year: "Today",
    title: "Looking Ahead",
    description:
      "We continue to empower organisations with innovative strategies, operational excellence and sustainable business solutions.",
  },
];

export default function JourneyTimeline() {
  const [active, setActive] = useState(0);

  return (
    <Section className="relative overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-secondary/10 blur-[140px]" />

      </div>

      <div className="relative">

        <SectionHeading
          center
          badge="Our Journey"
          title="Every Milestone Tells A Story"
          subtitle="From our foundation to where we are today, every step has been driven by innovation, partnership and measurable impact."
        />

        {/* Timeline */}

        <div className="mt-20">

          {/* Line */}

          <div className="relative">

            <div className="absolute left-0 top-5 h-1 w-full rounded-full bg-border" />

            <motion.div
              animate={{
                width: `${(active / (milestones.length - 1)) * 100}%`,
              }}
              transition={{
                duration: .5,
              }}
              className="absolute left-0 top-5 h-1 rounded-full bg-secondary"
            />

            <div className="relative flex justify-between">

              {milestones.map((item, index) => {

                const selected = index === active;

                return (

                  <button
                    key={item.year}
                    onClick={() => setActive(index)}
                    className="flex flex-col items-center"
                  >

                    <motion.div
                      animate={{
                        scale: selected ? 1.3 : 1,
                      }}
                      className={`z-10 h-10 w-10 rounded-full border-4 transition ${
                        selected
                          ? "border-secondary bg-secondary"
                          : "border-border bg-background"
                      }`}
                    />

                    <span
                      className={`mt-4 text-sm font-semibold transition ${
                        selected
                          ? "text-secondary"
                          : "text-text-secondary"
                      }`}
                    >
                      {item.year}
                    </span>

                  </button>

                );

              })}

            </div>

          </div>

          {/* Card */}

          <div className="mt-20">

            <AnimatePresence mode="wait">

              <motion.div
                key={active}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                }}
                transition={{
                  duration: .4,
                }}
                className="rounded-[32px] border border-border bg-background p-10 shadow-xl"
              >

                <span className="rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary">

                  {milestones[active].year}

                </span>

                <h3 className="mt-6 text-4xl font-bold text-text-primary">

                  {milestones[active].title}

                </h3>

                <p className="mt-6 max-w-3xl text-lg leading-9 text-text-secondary">

                  {milestones[active].description}

                </p>

              </motion.div>

            </AnimatePresence>

          </div>

        </div>

      </div>

    </Section>
  );
}