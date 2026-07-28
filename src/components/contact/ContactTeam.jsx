"use client";

import { motion } from "motion/react";
import SectionHeader from "../ui/SectionHeader";
import ContactPersonCard from "./ContactCards";

const contacts = [
  {
    name: "John Doe",
    position: "General Enquiries",
    phone: "+44 (0)117 244 8224",
    email: "info@habglobalmanagement.co.uk",
    response: "Usually responds within 24 hours",
    icon: "💼",
  },
  {
    name: "Jane Smith",
    position: "Healthcare Services",
    phone: "+44 (0)117 244 8224",
    email: "info@habglobalmanagement.co.uk",
    response: "Healthcare consultation enquiries",
    icon: "🏥",
  },
];

export default function ContactTeam() {
  return (
    <section className="section">

      <div className="container">

        <SectionHeader
          center
          eyebrow="Meet Our Team"
          title="Speak Directly With The Right Person"
          description="Choose the most appropriate contact based on your enquiry. We're committed to responding promptly and providing the support you need."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="mt-16 grid gap-8 lg:grid-cols-2"
        >
          {contacts.map((person) => (
            <ContactPersonCard
              key={person.email}
              {...person}
            />
          ))}
        </motion.div>

      </div>

    </section>
  );
}
