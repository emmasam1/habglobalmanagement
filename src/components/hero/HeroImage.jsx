import Image from "next/image";
import { ShieldCheck, BriefcaseBusiness, Users } from "lucide-react";

import FloatingCard from "./FloatingCard";

export default function HeroImage() {
  return (
    <div className="relative flex justify-center">
      <div className="relative w-full max-w-lg">
        <div className="absolute inset-0 scale-110 rounded-full bg-primary/10 blur-3xl" />
        <Image
          src="/Business_Solutions.jpg"
          alt="Business Team"
          width={600}
          height={700}
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="h-auto w-full rounded-3xl object-cover shadow-2xl"
        />

        <FloatingCard
          title="Practical"
          subtitle="Business Solutions"
          icon={<BriefcaseBusiness size={22} />}
          duration={3}
          className="top-10 -left-8"
        />

        <FloatingCard
          title="Tailored"
          subtitle="Advisory Support"
          icon={<Users size={22} />}
          duration={4}
          className="-right-6 top-1/2"
        />

        <FloatingCard
          title="Trusted"
          subtitle="UK Consultancy"
          icon={<ShieldCheck size={22} />}
          duration={5}
          className="-bottom-8 left-10"
        />
      </div>
    </div>
  );
}
