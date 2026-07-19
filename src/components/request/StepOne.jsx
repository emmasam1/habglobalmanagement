"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, ArrowRight } from "lucide-react";

import services from "@/data/services";
import { serviceIcons } from "@/lib/serviceIcons";

import Section from "@/components/layout/Section";
import PremiumCard from "@/components/ui/PremiumCard";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function StepOne({
  next,
  data,
}) {

  const [selected, setSelected] = useState(
    data.service || ""
  );

  const selectedService = services.find(
    (item) => item.slug === selected
  );

  return (
    <Section className="pb-28">

      <div className="mx-auto max-w-7xl">

        <div className="mb-14 text-center">

          <h2 className="text-4xl font-black text-text-primary">
            Which Service Do You Need?
          </h2>

          <p className="mt-5 text-lg text-text-secondary">
            Choose the consulting service that best matches your
            current requirements.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => {

            const Icon = serviceIcons[service.icon];

            const active = selected === service.slug;

            return (

              <motion.button
                key={service.id}
                type="button"
                onClick={() => setSelected(service.slug)}
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
                  delay: index * .08,
                }}
                whileHover={{
                  y: -6,
                }}
                className="text-left"
              >

                <PremiumCard
                  className={`relative h-full transition-all duration-300

                  ${
                    active
                      ? "border-secondary ring-2 ring-secondary/20"
                      : ""
                  }`}
                >

                  {active && (

                    <div className="absolute right-5 top-5">

                      <CheckCircle2
                        className="text-secondary"
                        size={28}
                      />

                    </div>

                  )}

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">

                    <Icon size={30} />

                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-text-primary">
                    {service.title}
                  </h3>

                  <p className="mt-5 leading-8 text-text-secondary">
                    {service.shortDescription}
                  </p>

                  <div className="mt-8 space-y-3">

                    {service.benefits
                      ?.slice(0, 3)
                      .map((item) => (

                        <div
                          key={item}
                          className="flex items-center gap-3"
                        >

                          <CheckCircle2
                            size={16}
                            className="text-secondary"
                          />

                          <span className="text-sm text-text-secondary">
                            {item}
                          </span>

                        </div>

                    ))}

                  </div>

                </PremiumCard>

              </motion.button>

            );

          })}

        </div>

        {/* Bottom */}

        <div className="mt-20 flex items-center justify-between rounded-[32px] border border-border bg-background p-8">

          <div>

            <h3 className="text-xl font-bold text-text-primary">

              {selectedService
                ? selectedService.title
                : "No Service Selected"}

            </h3>

            <p className="mt-2 text-text-secondary">

              {selectedService
                ? "Continue to provide your organisation details."
                : "Please select a consulting service to continue."}

            </p>

          </div>

          <PrimaryButton
            disabled={!selected}
            onClick={() =>
              next({
                service: selected,
              })
            }
            icon={<ArrowRight size={18} />}
          >
            Continue
          </PrimaryButton>

        </div>

      </div>

    </Section>
  );
}