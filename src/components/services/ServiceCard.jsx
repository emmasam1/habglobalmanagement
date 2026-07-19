"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { serviceIcons } from "@/lib/serviceIcons";

export default function ServiceCard({
  title,
  description,
  heroImage,
  icon,
  slug,
  featured = false,
}) {
  const Icon = serviceIcons[icon];
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.3,
      }}
      className={`group relative overflow-hidden rounded-[32px] ${
        featured ? "md:col-span-2 md:h-[500px]" : "h-[340px]"
      }`}
    >
      {/* Background Image */}

      <Image
        src={heroImage}
        alt={title}
        fill
        className="object-cover transition duration-700 group-hover:scale-110"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />

      {/* Glow */}

      <div className="absolute -bottom-20 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-secondary/20 blur-[120px] opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Content */}

      <div className="relative flex h-full flex-col justify-end p-8">
        {/* Icon */}

        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-xl">
          {Icon && <Icon size={30} className="text-secondary" />}
        </div>

        <h3
          className={`font-black text-white ${
            featured ? "text-4xl" : "text-2xl"
          }`}
        >
          {title}
        </h3>

        <p
          className={`mt-5 max-w-xl text-white/80 ${
            featured ? "text-lg leading-8" : "leading-7"
          }`}
        >
          {description}
        </p>

        <Link
          href={`/services/${slug}`}
          className="mt-8 inline-flex items-center gap-3 font-semibold text-secondary"
        >
          Learn More
          <ArrowRight
            size={18}
            className="transition group-hover:translate-x-2"
          />
        </Link>
      </div>
    </motion.div>
  );
}
