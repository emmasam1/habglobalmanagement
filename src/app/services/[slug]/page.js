import serviceApi from "@/api/serviceApi";
import { notFound } from "next/navigation";

import ServiceHero from "@/components/services/details/ServiceHero";
import ServiceOverview from "@/components/services/details/ServiceOverview";
import ServiceIncluded from "@/components/services/details/ServiceIncluded";
import ServiceOutcomes from "@/components/services/details/ServiceOutcomes";
import OurProcess from "@/components/services/OurProcess";
import ServiceFAQ from "@/components/services/details/ServiceFAQ";
import ServiceCTA from "@/components/services/details/ServiceCTA";

export default async function ServicePage({ params }) {
  const { slug } = await params;

  try {
    const response = await serviceApi.getService(slug);

    const service = response?.data || response;

    if (!service) {
      notFound();
    }

    const hasFaq = Array.isArray(service.faq) && service.faq.length > 0;

    return (
      <>
        <ServiceHero service={service} />

        <ServiceOverview service={service} />

        <ServiceIncluded service={service} />

        <ServiceOutcomes service={service} />

        <OurProcess />

        {hasFaq && <ServiceFAQ service={service} />}

        <ServiceCTA service={service} />
      </>
    );
  } catch {
    notFound();
  }
}
