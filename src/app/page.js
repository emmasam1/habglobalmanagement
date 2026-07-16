import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import AboutPreview from "@/components/about/AboutPreview";
import ServicesPreview from "@/components/services/ServicesPreview";
import WhyChoose from "@/components/whyChoose/WhyChoose";
import Process from "@/components/process/Process";
import Industries from "@/components/industries/Industries";
import CTA from "@/components/cta/CTA";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-20">
        <Hero />
        <AboutPreview />
        <ServicesPreview />
        <WhyChoose />
        <Process />
        <Industries />  
        <CTA />
      </main>

      <Footer />
    </>
  );
}