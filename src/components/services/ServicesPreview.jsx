"use client";

import SectionHeader from "../ui/SectionHeader";
import ServiceCard from "./ServiceCard";

import { services } from "@/data/services";

export default function ServicesPreview() {
  return (
    <section className="section relative overflow-hidden">

      <div className="container">

        <SectionHeader
          center
          eyebrow="Our Services"
          title="Professional Solutions Tailored To Your Business"
          description="From strategic consultancy to project delivery, we provide practical solutions that help organisations operate efficiently and achieve sustainable success."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => (

            <ServiceCard
              key={service.title}
              {...service}
            />

          ))}

        </div>

      </div>

    </section>
  );
}