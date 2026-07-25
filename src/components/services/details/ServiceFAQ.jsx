"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

import Section from "@/components/layout/Section";
import BackgroundGlow from "@/components/ui/BackgroundGlow";
import PremiumSectionHeading from "@/components/ui/PremiumSectionHeading";

export default function ServiceFAQ({ service }) {
  const [active, setActive] = useState(null);

  return (
    <Section className="relative overflow-hidden py-28 lg:py-36">

      <BackgroundGlow />

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="relative z-10">

        <PremiumSectionHeading
          centered
          label="Frequently Asked Questions"
          title="Questions You May Have"
          description="We've answered some of the most common questions about this service."
        />

        <div className="mx-auto mt-20 max-w-4xl space-y-5">

          {service?.faq.map((faq, index) => {

            const opened = active === index;

            return (

              <div
                key={faq.question}
                className="overflow-hidden rounded-3xl border border-border bg-background"
              >

                <button
                  onClick={() =>
                    setActive(opened ? null : index)
                  }
                  className="flex w-full items-center justify-between p-8 text-left"
                >

                  <span className="text-xl font-semibold text-text-primary">
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{
                      rotate: opened ? 180 : 0,
                    }}
                  >

                    <ChevronDown
                      className="text-secondary"
                      size={22}
                    />

                  </motion.div>

                </button>

                <AnimatePresence>

                  {opened && (

                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                    >

                      <div className="border-t border-border px-8 py-6 leading-8 text-text-secondary">

                        {faq.answer}

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </div>

            );

          })}

        </div>

      </div>

    </Section>
  );
}