"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import Section from "@/components/layout/Section";
import PrimaryButton from "@/components/ui/PrimaryButton";

const timelines = [
  "Immediately",
  "Within 2 Weeks",
  "Within 1 Month",
  "Within 3 Months",
  "Flexible",
];

const budgets = [
  "Under £5,000",
  "£5,000 - £10,000",
  "£10,000 - £25,000",
  "£25,000+",
  "Let's Discuss",
];

const meetings = [
  "Video Meeting",
  "Phone Call",
  "On-site Meeting",
  "Email Communication",
];

export default function StepThree({
  next,
  back,
  data,
}) {

  const [form, setForm] = useState({

    project: data.project || "",

    goals: data.goals || "",

    timeline: data.timeline || "",

    budget: data.budget || "",

    meeting: data.meeting || "",

  });

  function update(name, value) {

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

  }

  const canContinue =
    form.project &&
    form.timeline &&
    form.meeting;

  return (

    <Section className="pb-28">

      <div className="mx-auto max-w-5xl rounded-[40px] border border-border bg-background p-10 shadow-xl">

        <div className="mb-12">

          <h2 className="text-4xl font-black text-text-primary">

            Tell Us About Your Project

          </h2>

          <p className="mt-4 text-text-secondary">

            The more information you provide, the better we can prepare
            before contacting you.

          </p>

        </div>

        {/* Project */}

        <FieldTitle>
          Describe your current challenge
        </FieldTitle>

        <textarea
          rows={6}
          value={form.project}
          onChange={(e) =>
            update("project", e.target.value)
          }
          placeholder="Tell us about your project..."
          className="w-full rounded-3xl border border-border bg-transparent p-6 outline-none transition focus:border-secondary"
        />

        {/* Goals */}

        <FieldTitle className="mt-10">
          What do you want to achieve?
        </FieldTitle>

        <textarea
          rows={5}
          value={form.goals}
          onChange={(e) =>
            update("goals", e.target.value)
          }
          placeholder="Business growth, efficiency, compliance..."
          className="w-full rounded-3xl border border-border bg-transparent p-6 outline-none transition focus:border-secondary"
        />

        {/* Timeline */}

        <FieldTitle className="mt-12">

          Desired Timeline

        </FieldTitle>

        <OptionGrid>

          {timelines.map((item) => (

            <OptionCard
              key={item}
              active={form.timeline === item}
              onClick={() => update("timeline", item)}
            >
              {item}
            </OptionCard>

          ))}

        </OptionGrid>

        {/* Budget */}

        <FieldTitle className="mt-12">

          Estimated Budget

        </FieldTitle>

        <OptionGrid>

          {budgets.map((item) => (

            <OptionCard
              key={item}
              active={form.budget === item}
              onClick={() => update("budget", item)}
            >
              {item}
            </OptionCard>

          ))}

        </OptionGrid>

        {/* Meeting */}

        <FieldTitle className="mt-12">

          Preferred Consultation

        </FieldTitle>

        <OptionGrid>

          {meetings.map((item) => (

            <OptionCard
              key={item}
              active={form.meeting === item}
              onClick={() => update("meeting", item)}
            >
              {item}
            </OptionCard>

          ))}

        </OptionGrid>

        <div className="mt-16 flex justify-between">

          <PrimaryButton
            variant="outline"
            onClick={back}
            icon={<ArrowLeft size={18} />}
          >
            Back
          </PrimaryButton>

          <PrimaryButton
            disabled={!canContinue}
            onClick={() => next(form)}
            icon={<ArrowRight size={18} />}
          >
            Continue
          </PrimaryButton>

        </div>

      </div>

    </Section>

  );

}

function FieldTitle({
  children,
  className = "",
}) {

  return (

    <h3
      className={`mb-4 text-xl font-bold text-text-primary ${className}`}
    >
      {children}
    </h3>

  );

}

function OptionGrid({
  children,
}) {

  return (

    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

      {children}

    </div>

  );

}

function OptionCard({

  active,

  children,

  onClick,

}) {

  return (

    <button
      type="button"
      onClick={onClick}
      className={`rounded-2xl border p-5 text-left font-semibold transition-all duration-300

      ${
        active
          ? "border-secondary bg-secondary/10 text-secondary"
          : "border-border hover:border-secondary/40"
      }`}
    >

      {children}

    </button>

  );

}