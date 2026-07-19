"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

import Section from "@/components/layout/Section";
import BackgroundGlow from "@/components/ui/BackgroundGlow";
import PremiumSectionHeading from "@/components/ui/PremiumSectionHeading";

const faqs = [
  {
    question: "How quickly will I receive a response?",
    answer:
      "We aim to respond to all enquiries within one business day.",
  },
  {
    question: "Do you offer virtual consultations?",
    answer:
      "Yes. We offer virtual consultations for clients across Nigeria and other locations where appropriate.",
  },
  {
    question: "Can small businesses contact HAB Global?",
    answer:
      "Absolutely. We work with organisations of different sizes, providing solutions tailored to their specific needs.",
  },
  {
    question: "How do I request a specific service?",
    answer:
      "You can use the contact form or the dedicated Request Service page to tell us about your requirements.",
  },
];

export default function ContactFAQ() {
  const [active, setActive] = useState(0);

  return (
    <Section className="relative overflow-hidden py-28 lg:py-36">

      <BackgroundGlow />

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="relative z-10">

        <PremiumSectionHeading
          centered
          label="Frequently Asked Questions"
          title="Answers To Common Questions"
          description="Everything you need to know before contacting us."
        />

        <div className="mx-auto mt-20 max-w-4xl space-y-5">

          {faqs.map((faq, index) => {

            const open = active === index;

            return (

              <div
                key={faq.question}
                className="overflow-hidden rounded-3xl border border-border bg-background"
              >

                <button
                  onClick={() =>
                    setActive(open ? -1 : index)
                  }
                  className="flex w-full items-center justify-between p-8 text-left"
                >
                  <span className="text-lg font-semibold text-text-primary">
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{ rotate: open ? 180 : 0 }}
                  >
                    <ChevronDown />
                  </motion.div>
                </button>

                <AnimatePresence>

                  {open && (

                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
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