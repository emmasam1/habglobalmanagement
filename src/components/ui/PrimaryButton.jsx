"use client";

import clsx from "clsx";
import { motion } from "motion/react";

export default function PrimaryButton({
  children,
  icon,
  variant = "primary",
  size = "md",
  className,
  ...props
}) {
  const variants = {
    primary:
      "bg-secondary text-primary hover:shadow-xl",

    outline:
      "border border-primary bg-transparent text-primary hover:bg-primary hover:text-white",

    white:
      "bg-white text-primary hover:shadow-xl",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",

    md: "px-6 py-3",

    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.96,
      }}
      className={clsx(
        "group inline-flex items-center gap-2 rounded-full font-semibold transition-all duration-300",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}

      {icon}
    </motion.button>
  );
}