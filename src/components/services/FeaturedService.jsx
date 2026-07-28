"use client";

import {
  useEffect,
  useState,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  LoaderCircle,
  Sparkles,
} from "lucide-react";

import serviceApi from "@/api/serviceApi";
import { serviceIcons } from "@/lib/serviceIcons";

import Section from "@/components/layout/Section";
import BackgroundGlow from "@/components/ui/BackgroundGlow";
import PremiumSectionHeading from "@/components/ui/PremiumSectionHeading";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function FeaturedService() {
  const [service, setService] =
    useState(null);
  const [loading, setLoading] =
    useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    const fetchFeaturedService =
      async () => {
        try {
          setLoading(true);
          setError("");

          const response =
            await serviceApi.getServices({
              page: 1,
              limit: 50,
            });

          const services =
            extractServices(response);

          const featuredService =
            services.find(
              (item) =>
                item?.featured === true &&
                item?.active !== false,
            ) || null;

          if (mounted) {
            setService(featuredService);
          }
        } catch (requestError) {
          console.error(
            "Featured service error:",
            requestError,
          );

          if (mounted) {
            setService(null);

            setError(
              requestError?.response?.data
                ?.message ||
                requestError?.message ||
                "Unable to load the featured service.",
            );
          }
        } finally {
          if (mounted) {
            setLoading(false);
          }
        }
      };

    fetchFeaturedService();

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return <FeaturedServiceSkeleton />;
  }

  if (error) {
    return (
      <FeaturedServiceError
        message={error}
      />
    );
  }

  if (!service) {
    return null;
  }

  const Icon =
    serviceIcons[service.icon] ||
    Sparkles;

  const outcomes = Array.isArray(
    service.outcomes,
  )
    ? service.outcomes
    : [];

  return (
    <Section className="relative overflow-hidden py-28 lg:py-36">
      <BackgroundGlow />

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="relative z-10">
        <PremiumSectionHeading
          centered
          label={
            service.badge ||
            "Featured Service"
          }
          title={service.title}
          description={
            service.shortDescription ||
            "Discover our featured consultancy service."
          }
        />

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
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
            duration: 0.7,
          }}
          className="mt-20 overflow-hidden rounded-[40px] border border-border bg-background shadow-xl"
        >
          <div className="grid items-stretch lg:grid-cols-2">
            <div className="relative min-h-[350px] bg-surface-secondary lg:min-h-[650px]">
              {service.heroImage ? (
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full min-h-[350px] items-center justify-center lg:min-h-[650px]">
                  <Icon
                    size={72}
                    className="text-text-light"
                  />
                </div>
              )}

              {service.heroImage && (
                <div className="absolute inset-0 bg-gradient-to-r from-background/30 to-transparent" />
              )}

              {/* <div className="absolute left-6 top-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-secondary px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary">
                  Featured
                </span>

                {service.active && (
                  <span className="rounded-full bg-success px-4 py-2 text-xs font-bold uppercase tracking-wider text-text-primary">
                    Active
                  </span>
                )}
              </div> */}
            </div>

            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                <Icon size={30} />
              </div>

              {service.badge && (
                <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                  {service.badge}
                </p>
              )}

              <h2 className="mt-3 text-4xl font-black text-text-primary lg:text-5xl">
                {service.title}
              </h2>

              <p className="mt-6 text-2xl font-black text-secondary">
                {formatPrice(service.price)}
              </p>

              <p className="mt-8 text-lg leading-9 text-text-secondary">
                {service.shortDescription}
              </p>

              {outcomes.length > 0 && (
                <div className="mt-10 space-y-6">
                  {outcomes
                    .slice(0, 4)
                    .map(
                      (
                        outcome,
                        index,
                      ) => (
                        <OutcomeItem
                          key={
                            outcome?._id ||
                            `${getOutcomeTitle(
                              outcome,
                            )}-${index}`
                          }
                          outcome={outcome}
                        />
                      ),
                    )}
                </div>
              )}

              <div className="mt-14 flex flex-col gap-4 sm:flex-row">
                <PrimaryButton
                  href={`/services/${encodeURIComponent(
                    service.slug,
                  )}`}
                  icon={
                    <ArrowRight
                      size={18}
                    />
                  }
                >
                  View Full Details
                </PrimaryButton>

                <Link
                  href={`/services/request?service=${encodeURIComponent(
                    service.slug,
                  )}`}
                  className="inline-flex items-center justify-center rounded-full border border-border px-8 py-4 font-semibold text-text-primary transition hover:border-secondary hover:text-secondary"
                >
                  {hasFixedPrice(service.price)
                    ? "Request Service"
                    : "Get a Free Quote"}
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function OutcomeItem({ outcome }) {
  if (typeof outcome === "string") {
    return (
      <div className="flex items-start gap-4">
        <CheckCircle2
          size={20}
          className="mt-1 shrink-0 text-secondary"
        />

        <p className="font-semibold text-text-primary">
          {outcome}
        </p>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-4">
      <CheckCircle2
        size={20}
        className="mt-1 shrink-0 text-secondary"
      />

      <div>
        <h3 className="font-semibold text-text-primary">
          {outcome?.title ||
            "Expected outcome"}
        </h3>

        {outcome?.description && (
          <p className="mt-1 text-sm leading-7 text-text-secondary">
            {outcome.description}
          </p>
        )}
      </div>
    </div>
  );
}

function FeaturedServiceSkeleton() {
  return (
    <Section className="relative overflow-hidden py-28 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto flex w-fit items-center gap-3 text-text-secondary">
          <LoaderCircle
            size={22}
            className="animate-spin text-secondary"
          />

          <span>
            Loading featured service...
          </span>
        </div>

        <div className="mt-20 grid overflow-hidden rounded-[40px] border border-border bg-background lg:grid-cols-2">
          <div className="min-h-[350px] animate-pulse bg-surface-secondary lg:min-h-[650px]" />

          <div className="space-y-6 p-8 md:p-12 lg:p-16">
            <div className="h-16 w-16 animate-pulse rounded-2xl bg-surface-secondary" />

            <div className="h-12 w-3/4 animate-pulse rounded-xl bg-surface-secondary" />

            <div className="h-7 w-32 animate-pulse rounded-xl bg-surface-secondary" />

            <div className="h-28 animate-pulse rounded-xl bg-surface-secondary" />

            <div className="space-y-4">
              {Array.from({
                length: 3,
              }).map((_, index) => (
                <div
                  key={index}
                  className="h-16 animate-pulse rounded-xl bg-surface-secondary"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function FeaturedServiceError({
  message,
}) {
  return (
    <Section className="py-28">
      <div
        role="alert"
        className="mx-auto max-w-xl rounded-3xl border border-error/20 bg-error/5 p-8 text-center"
      >
        <AlertCircle
          size={36}
          className="mx-auto text-error"
        />

        <h2 className="mt-4 text-xl font-bold text-text-primary">
          Featured service unavailable
        </h2>

        <p className="mt-2 text-text-secondary">
          {message}
        </p>
      </div>
    </Section>
  );
}

function extractServices(response) {
  if (Array.isArray(response)) {
    return response;
  }

  if (Array.isArray(response?.data)) {
    return response.data;
  }

  if (
    Array.isArray(response?.data?.data)
  ) {
    return response.data.data;
  }

  return [];
}

function getOutcomeTitle(outcome) {
  if (typeof outcome === "string") {
    return outcome;
  }

  return (
    outcome?.title ||
    "expected-outcome"
  );
}

function formatPrice(value) {
  const price = Number(value);

  if (!Number.isFinite(price) || price <= 0) {
    return "Free quote";
  }

  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 2,
  }).format(price);
}

function hasFixedPrice(value) {
  return Number.isFinite(Number(value)) && Number(value) > 0;
}
