"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import Section from "@/components/layout/Section";
import PrimaryButton from "@/components/ui/PrimaryButton";

const TIMELINE_OPTIONS = [
  "Immediately",
  "Within 2 Weeks",
  "Within 1 Month",
  "Within 3 Months",
  "Flexible",
];

const MEETING_OPTIONS = [
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
    meeting: data.meeting || "",
  });

  const updateField = (name, value) => {
    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  };

  const canContinue = Boolean(
    form.project.trim() &&
      form.timeline &&
      form.meeting,
  );

  const handleContinue = () => {
    if (!canContinue) return;

    next({
      project: form.project.trim(),
      goals: form.goals.trim(),
      timeline: form.timeline,
      meeting: form.meeting,
    });
  };

  return (
    <Section className="pb-28">
      <div className="mx-auto max-w-5xl rounded-[40px] border border-border bg-background p-6 shadow-xl sm:p-10">
        <div className="mb-12">
          <h2 className="text-3xl font-black text-text-primary sm:text-4xl">
            Tell Us About Your Project
          </h2>

          <p className="mt-4 text-text-secondary">
            The more information you provide,
            the better we can prepare before
            contacting you.
          </p>
        </div>

        <FieldTitle>
          Describe your current challenge
        </FieldTitle>

        <textarea
          rows={6}
          value={form.project}
          onChange={(event) =>
            updateField(
              "project",
              event.target.value,
            )
          }
          placeholder="Tell us about your project..."
          className={textareaClasses}
        />

        <FieldTitle className="mt-10">
          What do you want to achieve?
        </FieldTitle>

        <textarea
          rows={5}
          value={form.goals}
          onChange={(event) =>
            updateField(
              "goals",
              event.target.value,
            )
          }
          placeholder="Business growth, efficiency, compliance..."
          className={textareaClasses}
        />

        <FieldTitle className="mt-12">
          Desired Timeline
        </FieldTitle>

        <OptionGrid>
          {TIMELINE_OPTIONS.map((option) => (
            <OptionCard
              key={option}
              active={
                form.timeline === option
              }
              onClick={() =>
                updateField(
                  "timeline",
                  option,
                )
              }
            >
              {option}
            </OptionCard>
          ))}
        </OptionGrid>

        <FieldTitle className="mt-12">
          Preferred Consultation
        </FieldTitle>

        <OptionGrid>
          {MEETING_OPTIONS.map((option) => (
            <OptionCard
              key={option}
              active={
                form.meeting === option
              }
              onClick={() =>
                updateField(
                  "meeting",
                  option,
                )
              }
            >
              {option}
            </OptionCard>
          ))}
        </OptionGrid>

        <div className="mt-16 flex items-center justify-between gap-4">
          <PrimaryButton
            variant="outline"
            onClick={back}
            icon={<ArrowLeft size={18} />}
          >
            Back
          </PrimaryButton>

          <PrimaryButton
            disabled={!canContinue}
            onClick={handleContinue}
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

function OptionGrid({ children }) {
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
      aria-pressed={active}
      className={`rounded-2xl border p-5 text-left font-semibold transition-all duration-300 ${
        active
          ? "border-secondary bg-secondary/10 text-secondary"
          : "border-border text-text-primary hover:border-secondary/40"
      }`}
    >
      {children}
    </button>
  );
}

const textareaClasses =
  "w-full resize-y rounded-3xl border border-border bg-transparent p-6 text-text-primary outline-none transition placeholder:text-text-secondary/60 focus:border-secondary";