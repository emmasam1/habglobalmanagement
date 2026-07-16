"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({
  icon: Icon,
  title,
  description,
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: .25,
      }}
      className="group relative overflow-hidden rounded-3xl border border-border bg-background p-8 shadow-sm transition-all duration-300 hover:shadow-xl"
    >
      {/* Gold Line */}

      <span className="absolute left-0 top-0 h-1 w-0 bg-secondary transition-all duration-500 group-hover:w-full" />

      {/* Icon */}

      <motion.div
        whileHover={{
          rotate: 10,
          scale: 1.08,
        }}
        className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10"
      >
        <Icon
          size={30}
          className="text-secondary"
        />
      </motion.div>

      <h3 className="text-2xl font-bold text-text-primary">
        {title}
      </h3>

      <p className="mt-5 leading-8 text-text-secondary">
        {description}
      </p>

      <Link
        href="/services"
        className="mt-8 inline-flex items-center gap-2 font-semibold text-secondary"
      >
        Learn More

        <motion.span
          whileHover={{
            x: 5,
          }}
        >
          <ArrowRight size={18} />
        </motion.span>
      </Link>
    </motion.div>
  );
}