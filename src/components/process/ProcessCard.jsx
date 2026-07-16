"use client";

import { motion } from "motion/react";

export default function ProcessCard({
  icon: Icon,
  number,
  title,
  description,
  active,
  onClick,
}) {
  return (
    <motion.div
      layout
      onClick={onClick}
      animate={{
        y: active ? -15 : 0,
        scale: active ? 1.05 : 0.95,
      }}
      transition={{
        duration: .4,
      }}
      className={`
        cursor-pointer
        rounded-3xl
        border
        p-8
        transition-all
        duration-500

        ${
          active
            ? "border-secondary shadow-2xl"
            : "border-border shadow-sm"
        }
      `}
    >
      <motion.span
        animate={{
          opacity: active ? .12 : .05,
          scale: active ? 1.2 : 1,
        }}
        className="absolute right-6 top-2 text-7xl font-black"
      >
        {number}
      </motion.span>

      <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10">

        <Icon
          size={30}
          className="text-secondary"
        />

      </div>

      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-5 leading-8">
        {description}
      </p>
    </motion.div>
  );
}