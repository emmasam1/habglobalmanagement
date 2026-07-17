"use client";

import { motion } from "motion/react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const stats = [
  {
    end: 15,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    end: 250,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    end: 98,
    suffix: "%",
    label: "Client Satisfaction",
  },
  {
    end: 20,
    suffix: "+",
    label: "Industries Served",
  },
];

export default function CompanyStats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <Section className="relative overflow-hidden bg-primary text-white">

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-secondary/15 blur-[180px]" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-secondary/10 blur-[160px]" />

      </div>

      {/* Decorative Grid */}

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div ref={ref} className="relative">

        <SectionHeading
          center
          badge="Our Impact"
          title="Numbers That Reflect Our Commitment."
          subtitle="Every project, every client and every partnership contributes to our journey of delivering measurable business success."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => (

            <motion.div
              key={item.label}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * .12,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-md"
            >

              <h2 className="text-6xl font-black text-secondary">

                {inView && (
                  <CountUp
                    end={item.end}
                    duration={2.5}
                  />
                )}

                {item.suffix}

              </h2>

              <div className="mx-auto mt-6 h-1 w-14 rounded-full bg-secondary" />

              <p className="mt-6 text-lg text-white/80">

                {item.label}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </Section>
  );
}