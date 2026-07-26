import AboutHero from "@/components/about/AboutHero";
import CompanyStory from "@/components/about/CompanyStory";
import CompanyStats from "@/components/about/CompanyStats";
import MissionVision from "@/components/about/MissionVision";
import JourneyTimeline from "@/components/about/JourneyTimeline";
import LeadershipQuote from "@/components/about/LeadershipQuote";
import TheHabWay from "@/components/about/TheHabWay";
import WhyTrustUs from "@/components/about/WhyTrustUs";
import Certifications from "@/components/about/Certifications";
import OurPrinciples from "@/components/about/OurPrinciples";
import Journey from "@/components/about/Journey";
import AboutCTA from "@/components/about/AboutCTA";
// import CTA from "@/components/cta/CTA";

export const metadata = {
  title: "About Us",
  description:
    "Discover HAB Global Management Ltd, our approach and our commitment to practical, ethical and sustainable business solutions.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About HAB Global Management",
    description:
      "Meet the consultancy helping organisations strengthen operations, strategy and long-term performance.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <LeadershipQuote />
      <OurPrinciples />
      <Journey />
      <AboutCTA />
      {/* <MissionVision />
      <CompanyStats />
      <TheHabWay />
      <JourneyTimeline />
      <WhyTrustUs />
      <Certifications /> */}

      {/*  <MissionVision />

      

  
      

      <CTA /> */}
    </>
  );
}
