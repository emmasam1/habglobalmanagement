import services from "@/data/services";
import { notFound } from "next/navigation";

import ServiceHero from "@/components/services/details/ServiceHero";
import ServiceOverview from "@/components/services/details/ServiceOverview";
import ServiceIncluded from "@/components/services/details/ServiceIncluded";
import ServiceBenefits from "@/components/services/details/ServiceBenefits";
import OurProcess from "@/components/services/OurProcess";
import ServiceFAQ from "@/components/services/details/ServiceFAQ";
import ServiceCTA from "@/components/services/details/ServiceCTA";
import ServiceOutcomes from "@/components/services/details/ServiceOutcomes";

export default async function ServicePage({ params }) {
  const { slug } = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceHero service={service} />
      <ServiceOverview service={service} />
      <ServiceIncluded service={service} />
      <ServiceOutcomes service={service} />
      <OurProcess />
      <ServiceFAQ service={service} />
      <ServiceCTA service={service} />
    </>
  );
}