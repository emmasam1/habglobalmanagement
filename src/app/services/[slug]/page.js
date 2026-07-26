import { cache } from "react";
import { notFound } from "next/navigation";

import serviceApi from "@/api/serviceApi";
import ServiceHero from "@/components/services/details/ServiceHero";
import ServiceOverview from "@/components/services/details/ServiceOverview";
import ServiceIncluded from "@/components/services/details/ServiceIncluded";
import ServiceOutcomes from "@/components/services/details/ServiceOutcomes";
import OurProcess from "@/components/services/OurProcess";
import ServiceFAQ from "@/components/services/details/ServiceFAQ";
import ServiceCTA from "@/components/services/details/ServiceCTA";

const siteUrl = "https://www.habglobalmanagement.co.uk";

const getService = cache(async (slug) => {
  const response = await serviceApi.getService(slug);
  return response?.data || response;
});

export async function generateMetadata({ params }) {
  const { slug } = await params;

  try {
    const service = await getService(slug);

    if (!service) {
      return {
        title: "Service Not Found",
        robots: { index: false, follow: false },
      };
    }

    const description =
      service.shortDescription ||
      service.overview ||
      `Learn more about ${service.title} from HAB Global Management.`;
    const canonical = `/services/${service.slug || slug}`;
    const image = service.heroImage || "/hab_bg_image.png";

    return {
      title: service.title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        title: service.title,
        description,
        url: canonical,
        images: [{ url: image, alt: service.title }],
      },
      twitter: {
        card: "summary_large_image",
        title: service.title,
        description,
        images: [image],
      },
    };
  } catch {
    return {
      title: "Service",
      robots: { index: false, follow: false },
    };
  }
}

export default async function ServicePage({ params }) {
  const { slug } = await params;

  try {
    const service = await getService(slug);

    if (!service) {
      notFound();
    }

    const validFaq = Array.isArray(service.faq)
      ? service.faq.filter((item) => item?.question && item?.answer)
      : [];

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeSchema(buildServiceSchema(service)),
          }}
        />

        {validFaq.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: serializeSchema(buildFaqSchema(validFaq)),
            }}
          />
        )}

        <ServiceHero service={service} />
        <ServiceOverview service={service} />
        <ServiceIncluded service={service} />
        <ServiceOutcomes service={service} />
        <OurProcess />
        {validFaq.length > 0 && <ServiceFAQ service={service} />}
        <ServiceCTA service={service} />
      </>
    );
  } catch {
    notFound();
  }
}

function buildServiceSchema(service) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.shortDescription || service.overview,
    url: `${siteUrl}/services/${service.slug}`,
    image: service.heroImage || `${siteUrl}/hab_bg_image.png`,
    provider: {
      "@type": "Organization",
      name: "HAB Global Management Ltd",
      url: siteUrl,
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
  };

  if (Number.isFinite(Number(service.price)) && Number(service.price) >= 0) {
    schema.offers = {
      "@type": "Offer",
      price: Number(service.price),
      priceCurrency: "GBP",
      availability:
        service.active === false
          ? "https://schema.org/OutOfStock"
          : "https://schema.org/InStock",
      url: `${siteUrl}/services/${service.slug}`,
    };
  }

  return schema;
}

function buildFaqSchema(faq) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

function serializeSchema(schema) {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}
