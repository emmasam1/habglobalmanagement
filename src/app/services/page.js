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
  title: "Business Consultancy Services",
  description:
    "Explore strategic business solutions, administrative services, compliance support, operational improvement and healthcare advisory from HAB Global Management.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Business Consultancy Services",
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
