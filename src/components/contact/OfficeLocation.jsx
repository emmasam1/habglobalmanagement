"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  MapPin,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

import Section from "@/components/layout/Section";
import BackgroundGlow from "@/components/ui/BackgroundGlow";
import PremiumSectionHeading from "@/components/ui/PremiumSectionHeading";

export default function OfficeLocation() {
  return (
    <Section className="relative overflow-hidden py-28 lg:py-36">

      <BackgroundGlow />

      {/* Accent Line */}

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="relative z-10 grid gap-20 lg:grid-cols-[450px_1fr]">

        {/* LEFT */}

        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
        >

          <PremiumSectionHeading
            label="Visit Our Office"
            title="Let's Meet In Person"
            description="Whether you're planning a consultation, discussing a project, or exploring a long-term partnership, we'd be delighted to meet with you by appointment."
          />

          <div className="mt-12 space-y-10">

            {/* Address */}

            <div className="flex items-start gap-5">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">

                <MapPin size={26} />

              </div>

              <div>

                <h3 className="text-xl font-bold text-text-primary">
                  Office Location
                </h3>

                <p className="mt-3 leading-8 text-text-secondary">
                  Unit 24–25, The Sovereign Centre
                  <br />
                  High Street, Weston-super-Mare
                  <br />
                  BS23 1HL, United Kingdom
                  <br />
                  <span className="text-sm opacity-80">Meetings available by appointment.</span>
                </p>

              </div>

            </div>

            {/* Hours */}

            <div className="flex items-start gap-5">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">

                <Clock3 size={26} />

              </div>

              <div>

                <h3 className="text-xl font-bold text-text-primary">
                  Business Hours
                </h3>

                <p className="mt-3 leading-8 text-text-secondary">
                  Monday – Friday
                  <br />
                  9:00 AM – 5:30 PM
                  <br />
                  (GMT / BST)
                </p>

              </div>

            </div>

            {/* CTA */}

            <Link
              href="https://www.google.com/maps/search/?api=1&query=Unit+24-25+The+Sovereign+Centre+High+Street+Weston-super-Mare+BS23+1HL"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-secondary px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105"
            >
              Get Directions

              <ArrowUpRight size={18} />
            </Link>

          </div>

        </motion.div>

        {/* MAP */}

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
        >

          <div className="overflow-hidden rounded-[40px] border border-border shadow-2xl">

            <iframe
  title="HAB Global Consulting Office Location"
  src="https://maps.google.com/maps?q=51.3486,-2.9774&ll=51.3486,-2.9774&z=17&output=embed"
  loading="lazy"
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
  className="h-[600px] w-full"
/>

          </div>

        </motion.div>

      </div>

    </Section>
  );
}