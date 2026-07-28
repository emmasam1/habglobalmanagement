"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import BackgroundGlow from "@/components/ui/BackgroundGlow";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function ServiceHero({
  service,
}) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">

      <Image
        src={service.heroImage}
        alt={service.title}
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/65" />

      <BackgroundGlow />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-6 py-32 lg:px-8">

        <motion.span
          initial={{ opacity:0,y:20 }}
          animate={{ opacity:1,y:0 }}
          className="text-sm font-semibold uppercase tracking-[0.35em] text-secondary"
        >
          Our Expertise
        </motion.span>

        <motion.h1
          initial={{ opacity:0,y:30 }}
          animate={{ opacity:1,y:0 }}
          transition={{ delay:.15 }}
          className="mt-6 max-w-4xl text-5xl font-black leading-tight text-white lg:text-7xl"
        >
          {service.title}
        </motion.h1>

        <motion.p
          initial={{ opacity:0,y:30 }}
          animate={{ opacity:1,y:0 }}
          transition={{ delay:.3 }}
          className="mt-8 max-w-2xl text-xl leading-9 text-white/75"
        >
          {service.overview}
        </motion.p>

        {/* Quick Highlights */}

        <div className="mt-14 grid gap-5 md:grid-cols-2">

          {service.included.slice(0,4).map(item=>(
            <div
              key={item}
              className="flex items-center gap-3 text-white"
            >

              <CheckCircle2
                size={20}
                className="text-secondary"
              />

              {item}

            </div>
          ))}

        </div>

        <div className="mt-14">

          <PrimaryButton
            href={`/services/request?service=${service.slug}`}
            icon={<ArrowRight size={18}/>}
          >
            {Number(service.price) > 0
              ? "Request This Service"
              : "Get a Free Quote"}
          </PrimaryButton>

        </div>

      </div>

      {/* Scroll */}

      <motion.div
        animate={{
          y:[0,12,0],
        }}
        transition={{
          repeat:Infinity,
          duration:2,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white"
      >

        <ArrowDown size={28}/>

      </motion.div>

    </section>
  );
}
