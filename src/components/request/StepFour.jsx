"use client";

import { ArrowLeft, Send, CheckCircle2 } from "lucide-react";

// import axios from "axios";
// import { stripePromise } from "@/lib/stripe";

import Section from "@/components/layout/Section";
import PrimaryButton from "@/components/ui/PrimaryButton";
import services from "@/data/services";

export default function StepFour({ data, back, next }) {
  const service = services.find((item) => item.slug === data.service);

  // function handleSubmit() {
  //   // API call goes here

  //   console.log(data);

  //   next();
  // }

  // const handlePayment = async () => {
  //   try {
  //     const stripe = await stripePromise;

  //     const response = await axios.post("/api/stripe/checkout", {
  //       title: data.serviceTitle,
  //       service: data.service,
  //       customer: data.name,
  //       price: data.price,
  //     });

  //     await stripe.redirectToCheckout({
  //       sessionId: response.data.id,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <Section className="pb-28">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-[40px] border border-border bg-background p-10 shadow-xl">
          <div className="mb-12">
            <span className="rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-secondary">
              Review
            </span>

            <h2 className="mt-6 text-4xl font-black text-text-primary">
              Review Your Request
            </h2>

            <p className="mt-4 text-lg text-text-secondary">
              Please review your information before submitting your consultation
              request.
            </p>
          </div>

          <div className="space-y-8">
            <SummaryCard title="Selected Service">
              <SummaryItem label="Service" value={service?.title} />
            </SummaryCard>

            <SummaryCard title="Organisation Information">
              <SummaryItem label="Company" value={data.company} />

              <SummaryItem label="Contact Person" value={data.contact} />

              <SummaryItem label="Job Title" value={data.jobTitle} />

              <SummaryItem label="Email" value={data.email} />

              <SummaryItem label="Phone" value={data.phone} />

              <SummaryItem label="Website" value={data.website} />

              <SummaryItem label="Country" value={data.country} />

              <SummaryItem label="Industry" value={data.industry} />
            </SummaryCard>

            <SummaryCard title="Project Information">
              <SummaryItem label="Project" value={data.project} />

              <SummaryItem label="Goals" value={data.goals} />

              <SummaryItem label="Timeline" value={data.timeline} />

              <SummaryItem label="Budget" value={data.budget} />

              <SummaryItem label="Meeting Preference" value={data.meeting} />
            </SummaryCard>
          </div>

          <div className="mt-10 rounded-3xl border border-secondary/20 bg-secondary/5 p-6">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="mt-1 text-secondary" />

              <p className="leading-8 text-text-secondary">
                By submitting this consultation request, you consent to HAB
                Global Consulting contacting you regarding your enquiry. Your
                information will be handled in accordance with our Privacy
                Policy.
              </p>
            </div>
          </div>

          <div className="mt-16 flex justify-between">
            <PrimaryButton
              variant="outline"
              onClick={back}
              icon={<ArrowLeft size={18} />}
            >
              Back
            </PrimaryButton>

            <PrimaryButton icon={<Send size={18} />}>
              Pay Now
            </PrimaryButton>
          </div>
        </div>
      </div>
    </Section>
  );
}

function SummaryCard({
  title,

  children,
}) {
  return (
    <div className="rounded-3xl border border-border p-8">
      <h3 className="mb-6 text-2xl font-bold text-text-primary">{title}</h3>

      <div className="space-y-6">{children}</div>
    </div>
  );
}

function SummaryItem({
  label,

  value,
}) {
  return (
    <div className="grid gap-2 md:grid-cols-[220px_1fr]">
      <span className="font-semibold text-text-primary">{label}</span>

      <span className="leading-8 text-text-secondary">{value || "-"}</span>
    </div>
  );
}
