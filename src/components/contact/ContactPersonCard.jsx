"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";

export default function ContactPersonCard({
  name,
  position,
  phone,
  email,
  icon,
}) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 20,
        },
        show: {
          opacity: 1,
          y: 0,
        },
      }}
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.3,
      }}
      className="group rounded-2xl border border-border bg-background p-5 transition-all duration-300 hover:border-secondary/40 hover:shadow-lg"
    >
      {/* Header */}

      <div className="flex items-start justify-between">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">

            {icon}

          </div>

          <div>

            <h3 className="text-lg font-bold text-primary">

              {name}

            </h3>

            <p className="text-sm text-text-secondary">

              {position}

            </p>

          </div>

        </div>

        <span className="rounded-full bg-green-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-green-700">

          Available

        </span>

      </div>

      {/* Divider */}

      <div className="my-5 h-px bg-border" />

      {/* Contact */}

      <div className="space-y-3">

        <Link
          href={`tel:${phone}`}
          className="flex items-center gap-3 text-sm transition-colors hover:text-secondary"
        >
          <Phone
            size={16}
            className="text-secondary"
          />

          <span>{phone}</span>

        </Link>

        <Link
          href={`mailto:${email}`}
          className="flex items-center gap-3 text-sm transition-colors hover:text-secondary"
        >
          <Mail
            size={16}
            className="text-secondary"
          />

          <span className="truncate">

            {email}

          </span>

        </Link>

      </div>

      {/* Footer */}

      <div className="mt-5 flex items-center justify-between border-t border-border pt-4">

        <p className="text-xs text-text-secondary">

          Responds within <strong>24 hrs</strong>

        </p>

        <Link
          href={`tel:${phone}`}
          className="flex items-center gap-2 text-sm font-semibold text-secondary transition-all hover:gap-3"
        >
          Call

          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:rotate-45"
          />

        </Link>

      </div>

    </motion.div>
  );
}