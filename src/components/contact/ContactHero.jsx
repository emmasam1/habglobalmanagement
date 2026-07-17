"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";

import AnimatedArrow from "../ui/AnimatedArrow";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24">

      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,.12),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(34,197,94,.10),transparent_35%)]" />

      <div className="container relative">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >

          {/* <span className="inline-flex rounded-full bg-secondary/10 px-5 py-2 text-sm font-semibold uppercase tracking-[.25em] text-secondary">

            Contact Us

          </span> */}

          <h1 className="mt-8 text-5xl font-bold leading-tight md:text-6xl">

            Let's Build Something

            <br />

            Exceptional Together

          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-text-secondary">

            Whether you're looking for strategic consultancy,
            business management, healthcare support or SME
            solutions, our team is ready to help.

          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link href="#contact-form">

              <button className="group flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-semibold text-white transition hover:opacity-90">

                Get In Touch

                <AnimatedArrow />

              </button>

            </Link>

            <Link href="tel:+440000000000">

              <button className="flex items-center gap-3 rounded-full border border-border px-8 py-4 font-semibold transition hover:border-secondary hover:text-secondary">

                <Phone size={18} />

                Call Us

              </button>

            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
}