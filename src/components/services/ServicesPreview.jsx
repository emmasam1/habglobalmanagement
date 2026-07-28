"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

import SectionHeader from "../ui/SectionHeader";
import ServiceCard from "./ServiceCard";

import serviceApi from "@/api/serviceApi";

const HOMEPAGE_SERVICE_LIMIT = 3;

export default function ServicesPreview() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const response = await serviceApi.getServices({
          limit: HOMEPAGE_SERVICE_LIMIT,
        });

        const serviceList = Array.isArray(response?.data)
          ? response.data
          : Array.isArray(response)
            ? response
            : [];

        setServices(
          serviceList
            .filter((service) => service?.active !== false)
            .slice(0, HOMEPAGE_SERVICE_LIMIT),
        );
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
          <div className="mt-14 text-center text-text-secondary">
            Loading services...
          </div>
        ) : services.length === 0 ? (
          <div className="mt-14 rounded-3xl border border-border bg-surface p-10 text-center text-text-secondary">
            Our service catalogue is being updated. Please check
            back shortly.
          </div>
        ) : (
          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service._id}
                {...service}
                featured={false}
              />
            ))}
          </div>
        )}

        <div className="mt-12 flex justify-center">
          <Link
            href="/services"
            className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-primary px-7 py-3 font-semibold text-white shadow-lg shadow-primary/15 transition hover:-translate-y-0.5 hover:bg-primary/90"
          >
            View All Services
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
