"use client";

import { motion } from "motion/react";
import {
  Mail,
  MapPin,
  Clock3,
  MessageCircleMore,
} from "lucide-react";

import Section from "@/components/layout/Section";
import BackgroundGlow from "@/components/ui/BackgroundGlow";
import PremiumSectionHeading from "@/components/ui/PremiumSectionHeading";
import PremiumCard from "@/components/ui/PremiumCard";

const contactItems = [
  {
    icon: Mail,
    title: "Email Us",
    value: "info@habglobalmanagement.co.uk",
    description:
      "Send us your enquiry and we'll respond as soon as possible.",
    href: "mailto:info@habglobalmanagement.co.uk",
  },
  {
    icon: MapPin,
    title: "Office Location",
    value: "Unit 24–25, The Sovereign Centre, High Street, Weston-super-Mare, BS23 1HL",
    description:
      "Serving organisations across the UK and internationally.",
  },
  {
    icon: Clock3,
    title: "Business Hours",
    value: "Mon – Fri",
    description:
      "9:00 AM – 5:00 PM (UK time)",
  },
  {
    icon: MessageCircleMore,
    title: "Response Time",
    value: "Within 24 Hours",
    description:
      "We aim to respond to all enquiries within one business day.",
  },
];

export default function ContactCards() {
  return (
    <Section className="relative overflow-hidden py-24 lg:py-32">

      <BackgroundGlow />

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="relative z-10">

        <PremiumSectionHeading
          centered
          label="Get In Touch"
          title="We're Here To Help"
          description="Reach out through your preferred channel. Whether you have a question or want to discuss a project, we'd love to hear from you."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {contactItems.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >

                <PremiumCard className="group h-full text-center">

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 text-secondary transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">

                    <Icon size={30} />

                  </div>

                  <h3 className="mt-8 text-xl font-bold text-text-primary">
                    {item.title}
                  </h3>

                  {item.href ? (

                    <a
                      href={item.href}
                      className="mt-4 block break-all font-semibold text-secondary hover:underline"
                    >
                      {item.value}
                    </a>

                  ) : (

                    <p className="mt-4 font-semibold text-text-primary">
                      {item.value}
                    </p>

                  )}

                  <p className="mt-4 leading-8 text-text-secondary">
                    {item.description}
                  </p>

                </PremiumCard>

              </motion.div>

            );

          })}

        </div>

      </div>

    </Section>
  );
}
