"use client";

import { useEffect, useState } from "react";

import SectionHeader from "../ui/SectionHeader";
import ServiceCard from "./ServiceCard";

import serviceApi from "@/api/serviceApi";

export default function ServicesPreview() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const response = await serviceApi.getServices({
          limit: 6,
        });

        setServices(response.data || []);
      } catch (error) {
        console.error("Failed to load services:", error);
      } finally {
        setLoading(false);
      }
    };

    loadServices();
  }, []);

  return (
    <section className="section relative overflow-hidden">
      <div className="container">
        <SectionHeader
          center
          eyebrow="Our Services"
          title="Professional Solutions Tailored To Your Business"
          description="From strategic consultancy to project delivery, we provide practical solutions that help organisations operate efficiently and achieve sustainable success."
        />

        {loading ? (
          <div className="mt-20 text-center">
            Loading services...
          </div>
        ) : (
          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service._id}
                {...service}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}