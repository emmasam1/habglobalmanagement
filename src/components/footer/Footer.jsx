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

export default function Footer() {
  const socialLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/your-company",
      icon: <FaLinkedinIn />,
    },
    {
      label: "Facebook",
      href: "https://facebook.com/your-company",
      icon: <FaFacebookF />,
    },
    {
      label: "Instagram",
      href: "https://instagram.com/your-company",
      icon: <FaInstagram />,
    },
    {
      label: "X",
      href: "https://x.com/your-company",
      icon: <FaXTwitter />,
    },
  ];

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
          backgroundImage: "url('/images/world-map.svg')",
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

          {/* Social Icons */}

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            {socialLinks.map((social) => (
              <SocialIcon
                key={social.label}
                href={social.href}
                icon={social.icon}
                label={social.label}
              />
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

            <FooterLink href="/industries">Industries</FooterLink>

            <FooterLink href="/contact">Contact</FooterLink>
          </div>

          {/* Solutions */}

          <div>
            <h3 className="mb-8 text-xl font-semibold">Solutions</h3>

            <FooterLink href="#">Business Consultancy</FooterLink>

            <FooterLink href="#">Strategic Planning</FooterLink>

            <FooterLink href="#">Project Management</FooterLink>

            <FooterLink href="#">Corporate Training</FooterLink>

            <FooterLink href="#">Business Advisory</FooterLink>
          </div>

          {/* Contact */}

          <div>
            <h3 className="mb-8 text-xl font-semibold">Contact</h3>

            <ContactItem icon={<Phone size={18} />} text="+44 XXXX XXX XXX" />

            <ContactItem
              icon={<Mail size={18} />}
              text="info@habglobalmanagement.co.uk"
            />

            <ContactItem
              icon={<MapPin size={18} />}
              text="London, United Kingdom"
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
              href="/contact"
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
/* Social Icon */
/* ========================================================= */

function SocialIcon({ href, icon, label }) {
  return (
    <motion.a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        y: -6,
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-white/5
        text-xl
        text-white
        backdrop-blur
        transition-all
        duration-300
        hover:border-secondary
        hover:bg-secondary
        hover:text-white
      "
    >
      {icon}
    </motion.a>
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

function ContactItem({ icon, text }) {
  return (
    <div className="mb-5 flex items-start gap-3 text-slate-300">
      <div className="mt-1 text-secondary">{icon}</div>

      <span className="leading-7">{text}</span>
    </div>
  );
}
