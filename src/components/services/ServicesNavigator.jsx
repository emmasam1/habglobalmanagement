"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useState,
} from "react";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, LoaderCircle, Sparkles } from "lucide-react";

import serviceApi from "@/api/serviceApi";

import Section from "@/components/layout/Section";
import BackgroundGlow from "@/components/ui/BackgroundGlow";
import PremiumSectionHeading from "@/components/ui/PremiumSectionHeading";

import { serviceIcons } from "@/lib/serviceIcons";

export default function ServicesNavigator() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadServices = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const response = await serviceApi.getServices({
        page: 1,
        limit: 50,
      });

      const serviceList = Array.isArray(response?.data)
        ? response.data
        : Array.isArray(response)
          ? response
          : [];

      setServices(serviceList);
    } catch (requestError) {
      console.error("Load services error:", requestError);

      setServices([]);
      setError(
        requestError?.response?.data?.message ||
          requestError?.message ||
          "Unable to load services. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadServices();
  }, [loadServices]);

  const otherServices = services.filter(
    (service) => service?.active !== false && service?.featured !== true,
  );

  return (
    <Section className="relative overflow-hidden py-28 lg:py-36">
      <BackgroundGlow />

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="relative z-10">
        <PremiumSectionHeading
          centered
          label="Explore Our Expertise"
          title="Specialised Consulting Services"
          description="Discover tailored consulting solutions designed to help organisations improve efficiency, strengthen compliance and achieve sustainable growth."
        />

        {loading && (
          <div className="mt-20 flex items-center justify-center gap-3 text-text-secondary">
            <LoaderCircle size={22} className="animate-spin text-secondary" />

            <span>Loading services...</span>
          </div>
        )}

        {!loading && error && (
          <div className="mx-auto mt-20 max-w-xl rounded-2xl border border-error/20 bg-error/5 p-6 text-center">
            <p className="font-semibold text-error">{error}</p>

            <button
              type="button"
              onClick={loadServices}
              className="mt-5 inline-flex h-11 items-center justify-center rounded-xl bg-secondary px-5 text-sm font-semibold text-primary transition hover:opacity-90"
            >
              Try again
            </button>
          </div>
        )}

        {!loading && !error && otherServices.length === 0 && (
          <div className="mx-auto mt-20 flex max-w-xl flex-col items-center rounded-[30px] border border-border bg-background p-10 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
              <Sparkles size={28} />
            </div>

            <h3 className="mt-5 text-xl font-bold text-text-primary">
              More services are coming soon
            </h3>

            <p className="mt-3 leading-7 text-text-secondary">
              Our specialised consulting services will appear here once they are
              published.
            </p>
          </div>
        )}

        {!loading && !error && otherServices.length > 0 && (
          <div className="mx-auto mt-20 max-w-6xl space-y-6">
            {otherServices.map((service, index) => {
              const Icon = serviceIcons[service?.icon] || Sparkles;

              return (
                <motion.div
                  key={service?._id || service?.slug || index}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group relative overflow-hidden rounded-[30px] border border-border bg-background transition-all duration-500 hover:border-secondary/40 hover:shadow-xl"
                >
                  <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="grid gap-8 p-8 lg:grid-cols-[80px_1fr_auto] lg:items-center lg:gap-10">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                      <Icon size={30} />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-text-primary">
                        {service?.title}
                      </h3>

                      <p className="mt-3 max-w-3xl leading-8 text-text-secondary">
                        {service?.shortDescription}
                      </p>

                      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
                        <span className="font-bold text-secondary">
                          {formatServicePrice(service?.price)}
                        </span>

                        {service?.duration && (
                          <span className="text-text-secondary">
                            {service.duration}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-border px-6 py-3 font-semibold text-text-primary transition hover:border-secondary hover:text-secondary"
                      >
                        View Details
                        <ArrowRight size={18} />
                      </Link>

                      <Link
                        href={`/services/request?service=${encodeURIComponent(service.slug)}`}
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-secondary px-6 py-3 font-semibold text-primary transition hover:scale-105"
                      >
                        {hasFixedPrice(service?.price)
                          ? "Request Service"
                          : "Get a Free Quote"}
                        <ArrowUpRight size={18} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </Section>
  );
}

function hasFixedPrice(value) {
  return Number.isFinite(Number(value)) && Number(value) > 0;
}

function formatServicePrice(value) {
  if (!hasFixedPrice(value)) return "Free quote";

  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(Number(value));
}
