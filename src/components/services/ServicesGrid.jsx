import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import { services } from "@/data/services";

import ServiceCard from "./ServiceCard";

export default function ServicesGrid() {
  return (
    <Section
      id="services"
      className="relative"
    >
      <SectionHeading
        center
        badge="What We Do"
        title="Professional Services Designed Around Your Business"
        subtitle="From strategy and consulting to project delivery and business transformation, HAB Global provides tailored solutions that help organisations succeed."
      />

      <div className="mt-20 grid gap-8 md:grid-cols-2">

        {services.map((service) => (
          <ServiceCard
            key={service.id}
            {...service}
          />
        ))}

      </div>
    </Section>
  );
}
