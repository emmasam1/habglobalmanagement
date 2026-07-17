"use client"

import dynamic from "next/dynamic";

import ContactHero from "@/components/contact/ContactHero";
import ContactTeam from "@/components/contact/ContactTeam";
import ContactForm from "@/components/contact/ContactForm";
// import ContactMap from "@/components/contact/ContactMap";
import ContactFAQ from "@/components/contact/ContactFAQ";
import CTA from "@/components/cta/CTA";


const ContactMap = dynamic(
  () => import("@/components/contact/ContactMap"),
  {
    ssr: false,
  }
);

export default function ContactPage() {
  return (
    <div className="mt-10">
      <ContactHero />

      <ContactTeam />

      <ContactForm />

      <ContactMap />

      {/* <ContactFAQ />

      <CTA /> */}
    </div>
  );
}