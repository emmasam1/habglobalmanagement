"use client";

import {
  useEffect,
  useState,
} from "react";
import {
  AlertCircle,
  ArrowLeft,
  CheckCircle2,
  LoaderCircle,
  Send,
} from "lucide-react";

import serviceApi from "@/api/serviceApi";
import api from "@/lib/axios";

import Section from "@/components/layout/Section";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function StepFour({
  data,
  back,
  next,
}) {
  const [loadedService, setLoadedService] =
    useState(null);

  const [loadingService, setLoadingService] =
    useState(
      !data.serviceData &&
        Boolean(data.service),
    );

  const [submitting, setSubmitting] =
    useState(false);
  const [error, setError] = useState("");

  const service =
    data.serviceData || loadedService;
  const fixedPrice =
    Number.isFinite(Number(service?.price)) &&
    Number(service?.price) > 0;

  useEffect(() => {
    if (
      data.serviceData ||
      !data.service
    ) {
      return undefined;
    }

    let mounted = true;

    const loadService = async () => {
      try {
        const response =
          await serviceApi.getService(
            data.service,
          );

        const serviceData =
          response?.data || response;

        if (mounted) {
          setLoadedService(serviceData);
        }
      } catch (requestError) {
        console.error(
          "Failed to load service:",
          requestError,
        );

        if (mounted) {
          setError(
            requestError?.response?.data
              ?.message ||
              requestError?.message ||
              "Unable to load the selected service.",
          );
        }
      } finally {
        if (mounted) {
          setLoadingService(false);
        }
      }
    };

    loadService();

    return () => {
      mounted = false;
    };
  }, [data.service, data.serviceData]);

  const handleSubmit = async () => {
    if (!data.service) {
      setError(
        "Please select a service before submitting.",
      );
      return;
    }

    if (!service?._id) {
      setError(
        "The selected service could not be loaded.",
      );
      return;
    }

    try {
      setSubmitting(true);
      setError("");

      const requestPayload = {
        service: service._id,

        fullName: data.contact?.trim(),
        email: data.email?.trim(),
        phone: data.phone?.trim(),
        company: data.company?.trim(),
        country: data.country?.trim(),

        jobTitle: data.jobTitle?.trim(),
        website: data.website?.trim(),
        industry: data.industry?.trim(),
        employees:
          data.employees?.trim(),

        project: data.project?.trim(),
        goals: data.goals?.trim(),
        timeline: data.timeline,
        meeting: data.meeting,

        message: data.project?.trim(),
      };

      const requestResponse =
        await api.post(
          "/requests",
          requestPayload,
        );

      const requestId =
        requestResponse?.data?.data?._id;

      if (!requestId) {
        throw new Error(
          "The consultation request was created without an ID.",
        );
      }

      if (!fixedPrice) {
        next({
          requestId,
          quoteRequired: true,
        });
        return;
      }

      const paymentResponse =
        await api.post(
          `/payments/checkout/${encodeURIComponent(
            requestId,
          )}`,
        );

      const checkoutUrl =
        paymentResponse?.data?.url;

      if (!checkoutUrl) {
        throw new Error(
          "The payment checkout URL was not returned.",
        );
      }

      window.location.assign(checkoutUrl);

      /*
       * Stripe redirects away from the page.
       * If checkout is later removed, use:
       *
       * next({ requestId });
       */
    } catch (requestError) {
      console.error(
        "Submit request error:",
        requestError,
      );

      setError(
        requestError?.response?.data
          ?.message ||
          requestError?.message ||
          "Unable to submit your consultation request.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Section className="pb-28 opacity-100!">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-[40px] border border-border bg-background p-6 shadow-xl sm:p-10">
          <div className="mb-12">
            <span className="rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-secondary">
              Review
            </span>

            <h2 className="mt-6 text-3xl font-black text-text-primary sm:text-4xl">
              Review Your Request
            </h2>

            <p className="mt-4 text-lg text-text-secondary">
              Please review your information
              before submitting your consultation
              request.
            </p>
          </div>

          {error && (
            <ErrorMessage message={error} />
          )}

          <div className="space-y-8">
            <SummaryCard title="Selected Service">
              {loadingService ? (
                <LoadingService />
              ) : (
                <>
                  <SummaryItem
                    label="Service"
                    value={service?.title}
                  />

                  <SummaryItem
                    label="Service Reference"
                    value={data.service}
                  />

                  <SummaryItem
                    label="Price"
                    value={formatPrice(
                      service?.price,
                    )}
                  />

                  {service?.duration && (
                    <SummaryItem
                      label="Duration"
                      value={service.duration}
                    />
                  )}
                </>
              )}
            </SummaryCard>

            <SummaryCard title="Organisation Information">
              <SummaryItem
                label="Company"
                value={data.company}
              />

              <SummaryItem
                label="Contact Person"
                value={data.contact}
              />

              <SummaryItem
                label="Job Title"
                value={data.jobTitle}
              />

              <SummaryItem
                label="Email"
                value={data.email}
              />

              <SummaryItem
                label="Phone"
                value={data.phone}
              />

              <SummaryItem
                label="Website"
                value={data.website}
              />

              <SummaryItem
                label="Country"
                value={data.country}
              />

              <SummaryItem
                label="Industry"
                value={data.industry}
              />

              <SummaryItem
                label="Employees"
                value={data.employees}
              />
            </SummaryCard>

            <SummaryCard title="Project Information">
              <SummaryItem
                label="Project"
                value={data.project}
              />

              <SummaryItem
                label="Goals"
                value={data.goals}
              />

              <SummaryItem
                label="Timeline"
                value={data.timeline}
              />

              <SummaryItem
                label="Meeting Preference"
                value={data.meeting}
              />
            </SummaryCard>
          </div>

          <div className="mt-10 rounded-3xl border border-secondary/20 bg-secondary/5 p-6">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="mt-1 shrink-0 text-secondary" />

              <p className="leading-8 text-text-secondary">
                By submitting this consultation
                request, you consent to HAB Global
                Consulting contacting you regarding
                your enquiry. Your information will
                be handled in accordance with our
                Privacy Policy.
              </p>
            </div>
          </div>

          <div className="mt-16 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
            <PrimaryButton
              variant="outline"
              onClick={back}
              disabled={submitting}
              icon={
                <ArrowLeft size={18} />
              }
            >
              Back
            </PrimaryButton>

            <PrimaryButton
              loading={submitting}
              disabled={
                submitting ||
                loadingService ||
                !service?._id
              }
              onClick={handleSubmit}
              icon={
                submitting ? (
                  <LoaderCircle
                    size={18}
                    className="animate-spin"
                  />
                ) : (
                  <Send size={18} />
                )
              }
            >
              {submitting
                ? fixedPrice
                  ? "Preparing checkout..."
                  : "Sending request..."
                : fixedPrice
                  ? "Continue to Payment"
                  : "Request Free Quote"}
            </PrimaryButton>
          </div>
        </div>
      </div>
    </Section>
  );
}

function LoadingService() {
  return (
    <div className="flex items-center gap-3 text-text-secondary">
      <LoaderCircle
        size={18}
        className="animate-spin text-secondary"
      />

      <span>Loading service...</span>
    </div>
  );
}

function ErrorMessage({ message }) {
  return (
    <div
      role="alert"
      className="mb-8 flex items-start gap-3 rounded-2xl border border-error/20 bg-error/5 p-5 text-error"
    >
      <AlertCircle
        size={20}
        className="mt-0.5 shrink-0"
      />

      <p>{message}</p>
    </div>
  );
}

function SummaryCard({
  title,
  children,
}) {
  return (
    <div className="rounded-3xl border border-border p-6 sm:p-8">
      <h3 className="mb-6 text-2xl font-bold text-text-primary">
        {title}
      </h3>

      <div className="space-y-6">
        {children}
      </div>
    </div>
  );
}

function SummaryItem({ label, value }) {
  return (
    <div className="grid gap-2 md:grid-cols-[220px_1fr]">
      <span className="font-semibold text-text-primary">
        {label}
      </span>

      <span className="break-words leading-8 text-text-secondary">
        {value || "-"}
      </span>
    </div>
  );
}

function formatPrice(value) {
  const price = Number(value);

  if (!Number.isFinite(price) || price <= 0) {
    return "Free quote required";
  }

  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 2,
  }).format(price);
}
