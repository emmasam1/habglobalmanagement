"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const socialProfiles = [
  { label: "LinkedIn", icon: FaLinkedinIn },
  { label: "Facebook", icon: FaFacebookF },
  { label: "Instagram", icon: FaInstagram },
  { label: "X", icon: FaXTwitter },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* ================================================= */}
      {/* Animated Gold Line */}
      {/* ================================================= */}

      <motion.div
        initial={{
          scaleX: 0,
          opacity: 0,
        }}
        whileInView={{
          scaleX: 1,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
        className="origin-left"
      >
        <div className="relative h-[2px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary to-transparent" />

          <motion.div
            animate={{
              x: ["-150%", "150%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-y-0 w-40 bg-gradient-to-r from-transparent via-white to-transparent opacity-80 blur-sm"
          />
        </div>
      </motion.div>

      {/* ================================================= */}
      {/* Background Glow */}
      {/* ================================================= */}

      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-primary/10 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-secondary/10 blur-[150px]" />

      {/* ================================================= */}
      {/* World Map */}
      {/* ================================================= */}

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "url('/hab_bg_image.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "75%",
        }}
      />

      <div className="container relative">
        {/* ================================================= */}
        {/* Statement */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-5xl py-24 text-center"
        >
          <span className="inline-flex rounded-full bg-secondary/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-secondary">
            HAB GLOBAL MANAGEMENT LTD
          </span>

          <h2 className="mt-8 text-4xl font-bold leading-tight md:text-5xl lg:text-5xl">
            Building Stronger Businesses.
            <br />
            Creating Lasting Impact.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-300">
            We empower organisations with strategic management, professional
            consultancy and practical solutions that create measurable results,
            sustainable growth and long-term business success.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact#contact-form"
              className="rounded-full bg-secondary px-7 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5"
            >
              Discuss your goals
            </Link>
            <a
              href="mailto:info@habglobalmanagement.co.uk"
              className="rounded-full border border-white/20 px-7 py-3 font-semibold transition hover:border-secondary hover:text-secondary"
            >
              Email our team
            </a>
          </div>

          <div
            className="mt-8 flex flex-wrap justify-center gap-4"
            aria-label="Social media profiles"
          >
            {socialProfiles.map(({ label, icon: Icon }) => (
              <span
                key={label}
                role="img"
                aria-label={`${label} profile link coming soon`}
                title={`${label} link coming soon`}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-lg text-white/80"
              >
                <Icon />
              </span>
            ))}
          </div>
        </motion.div>

        {/* ================================================= */}
        {/* Footer Grid */}
        {/* ================================================= */}

        <div className="grid gap-12 border-t border-white/10 py-20 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}

          <div>
            <h3 className="mb-8 text-xl font-semibold">Company</h3>

            <FooterLink href="/">Home</FooterLink>

            <FooterLink href="/about">About Us</FooterLink>

            <FooterLink href="/services">Services</FooterLink>

            {/* <FooterLink href="/industries">Industries</FooterLink> */}

            <FooterLink href="/contact">Contact</FooterLink>
          </div>

          {/* Solutions */}

          <div>
            <h3 className="mb-8 text-xl font-semibold">Solutions</h3>

            <FooterLink href="/services/business-solutions">Business Consultancy</FooterLink>

            <FooterLink href="/services/business-solutions">Strategic Planning</FooterLink>

            <FooterLink href="/services/operational-improvement">Operational Improvement</FooterLink>

            <FooterLink href="/services/compliance-support">Compliance Support</FooterLink>

            <FooterLink href="/services/healthcare-advisory-support">Healthcare Advisory</FooterLink>
          </div>

          {/* Contact */}

          <div>
            <h3 className="mb-8 text-xl font-semibold">Contact</h3>

            <ContactItem
              icon={<Phone size={18} />}
              text="+44 (0)117 244 8224"
              href="tel:+441172448224"
            />

            <ContactItem
              icon={<Mail size={18} />}
              text="info@habglobalmanagement.co.uk"
              href="mailto:info@habglobalmanagement.co.uk"
            />

            <ContactItem
              icon={<MapPin size={18} />}
              text="Unit 24–25, The Sovereign Centre
High Street
Weston-super-Mare
BS23 1HL"
            />
          </div>

          {/* Let's Talk */}

          <div>
            <h3 className="mb-8 text-xl font-semibold">Let's Talk</h3>

            <p className="leading-8 text-slate-300">
              Looking for a trusted partner to help your organisation grow?
              Let's discuss your goals and discover how HAB GLOBAL MANAGEMENT
              LTD can support your business journey.
            </p>

            <Link
              href="/contact#contact-form"
              className="group mt-8 inline-flex items-center gap-2 font-semibold text-secondary transition"
            >
              Get a Free Quote
              <motion.div
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                }}
              >
                <ArrowUpRight size={18} />
              </motion.div>
            </Link>
          </div>
        </div>

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 py-8 text-sm text-slate-400 md:flex-row">
          <p>
            © {new Date().getFullYear()} HAB GLOBAL MANAGEMENT LTD. All rights
            reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy" className="transition hover:text-secondary">
              Privacy Policy
            </Link>

            <Link href="/terms" className="transition hover:text-secondary">
              Terms & Conditions
            </Link>

            <Link href="/cookies" className="transition hover:text-secondary">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ========================================================= */
/* Footer Link */
/* ========================================================= */

function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      className="
        group
        mb-4
        flex
        items-center
        gap-2
        text-slate-300
        transition-all
        duration-300
        hover:text-secondary
      "
    >
      <span>{children}</span>

      <ArrowUpRight
        size={15}
        className="
          opacity-0
          -translate-x-2
          transition-all
          duration-300
          group-hover:translate-x-0
          group-hover:opacity-100
        "
      />
    </Link>
  );
}

/* ========================================================= */
/* Contact Item */
/* ========================================================= */

function ContactItem({ icon, text, href }) {
  return (
    <div className="mb-5 flex items-start gap-3 text-slate-300">
      <div className="mt-1 text-secondary">{icon}</div>

      {href ? (
        <a className="leading-7 hover:text-secondary" href={href}>
          {text}
        </a>
      ) : (
        <span className="whitespace-pre-line leading-7">{text}</span>
      )}
    </div>
  );
}
