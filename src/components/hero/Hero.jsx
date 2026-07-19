import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroBackground from "../background/HeroBackground";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-10"
    >
        <HeroBackground />
        
      <div className="container min-h-[calc(100vh-80px)] grid items-center gap-20 lg:grid-cols-2">

        <HeroContent />

        <HeroImage />

      </div>
    </section>
  );
}