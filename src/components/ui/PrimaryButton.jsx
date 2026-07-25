"use client";

import Link from "next/link";
import clsx from "clsx";
import { motion } from "motion/react";

export default function PrimaryButton({
  children,
  icon,
  href,
  onClick,
  loading = false,
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

  const classes = clsx(
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300",
    variants[variant],
    sizes[size],
    className
  );

  // If href exists, render a Link
  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        <motion.span
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="inline-flex items-center gap-2"
        >
          {children}
          {icon}
        </motion.span>
      </Link>
    );
  }

  // Otherwise render a button
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      aria-busy={loading || undefined}
      className={classes}
      {...props}
    >
      {children}
      {icon}
    </motion.button>
  );
}
