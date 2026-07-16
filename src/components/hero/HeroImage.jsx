"use client";

import Image from "next/image";
import { ShieldCheck, BriefcaseBusiness, Users } from "lucide-react";

import FloatingCard from "./FloatingCard";

export default function HeroImage() {
  return (
    <div className="relative flex justify-center">
      <div className="relative w-full max-w-lg">
        <div className="absolute inset-0 scale-110 rounded-full bg-primary/10 blur-3xl" />
        <Image
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80"
          alt="Business Team"
          width={600}
          height={700}
          priority
          className="h-auto w-full rounded-3xl object-cover shadow-2xl"
        />

        <FloatingCard
          title="500+"
          subtitle="Projects"
          icon={<BriefcaseBusiness size={22} />}
          duration={3}
          className="top-10 -left-8"
        />

        <FloatingCard
          title="98%"
          subtitle="Client Satisfaction"
          icon={<Users size={22} />}
          duration={4}
          className="-right-6 top-1/2"
        />

        <FloatingCard
          title="Trusted"
          subtitle="Professional Team"
          icon={<ShieldCheck size={22} />}
          duration={5}
          className="-bottom-8 left-10"
        />
      </div>
    </div>
  );
}
