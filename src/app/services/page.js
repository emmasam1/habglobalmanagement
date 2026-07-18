import ServicesHero from "@/components/services/ServicesHero";
import FeaturedService from "@/components/services/FeaturedService";
import ServicesNavigator from "@/components/services/ServicesNavigator";
import OurProcess from "@/components/services/OurProcess";
import WhyChooseHab from "@/components/services/WhyChooseHab";
// import ServicesCTA from "@/components/services/ServicesCTA";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />

      <FeaturedService />

      <ServicesNavigator />

      <OurProcess />

      <WhyChooseHab />
      {/*  <OurProcess />


      <ServicesCTA /> */}
    </>
  );
}
