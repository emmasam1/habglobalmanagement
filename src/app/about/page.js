import AboutHero from "@/components/about/AboutHero";
import CompanyStory from "@/components/about/CompanyStory";
import CompanyStats from "@/components/about/CompanyStats";
import MissionVision from "@/components/about/MissionVision";
import JourneyTimeline from "@/components/about/JourneyTimeline";
import LeadershipQuote from "@/components/about/LeadershipQuote";
import TheHabWay from "@/components/about/TheHabWay";
import WhyTrustUs from "@/components/about/WhyTrustUs";
import Certifications from "@/components/about/Certifications";
// import CTA from "@/components/cta/CTA";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <MissionVision />
      <CompanyStats />
      <TheHabWay />
      <LeadershipQuote />
      <JourneyTimeline />
      <WhyTrustUs />
      <Certifications />

      {/*  <MissionVision />

      

  
      

      <CTA /> */}
    </>
  );
}
