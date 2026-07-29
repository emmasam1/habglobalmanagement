// import ServicesHero from "@/components/services/ServicesHero";
// import FeaturedService from "@/components/services/FeaturedService";
// import ServicesNavigator from "@/components/services/ServicesNavigator";
// import OurProcess from "@/components/services/OurProcess";
// import WhyChooseHab from "@/components/services/WhyChooseHab";
// import FeaturedService from "@/components/services/FeaturedService";
// // import ServicesCTA from "@/components/services/ServicesCTA";

// export default function ServicesPage() {
//   return (
//     <>
//       <ServicesHero />
//       <FeaturedService />

//       <FeaturedService />

//       <ServicesNavigator />

//       <OurProcess />

//       <WhyChooseHab />
//       {/*  <OurProcess />


//       <ServicesCTA /> */}
//     </>
//   );
// }


import ServicesHero from "@/components/services/ServicesHero";
import FeaturedService from "@/components/services/FeaturedService";
import ServicesNavigator from "@/components/services/ServicesNavigator";
import Industries from "@/components/services/Industries";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata = {
  title: "Business & Management Consultancy Services UK",
  description:
    "Explore UK business consultancy services for strategy, operations, administration, compliance, governance and healthcare organisations.",
  keywords: [
    "business consultancy services UK",
    "management consulting services",
    "business strategy consultant",
    "operational improvement consultant",
    "administrative support for businesses",
    "business compliance support UK",
    "healthcare management consultancy",
    "business consultant South West England",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Business & Management Consultancy Services UK",
    description:
      "Practical consultancy and management support designed around your organisation's needs.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />

      <FeaturedService />

      <ServicesNavigator />

      <Industries />

      <ServicesCTA />
    </>
  );
}
