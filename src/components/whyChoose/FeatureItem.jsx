"use client";

import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function FeatureItem({
  title,
  description,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .5 }}
      className="flex gap-5"
    >
      <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary/10">
        <CheckCircle2
          size={22}
          className="text-secondary"
        />
      </div>

      <div>
        <h4 className="text-xl font-semibold text-text-primary">
          {title}
        </h4>

        <p className="mt-2 leading-7 text-text-secondary">
          {description}
        </p>
      </div>
    </motion.div>
  );
}