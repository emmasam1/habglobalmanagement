"use client";

import { useState } from "react";

import Section from "@/components/layout/Section";
import PrimaryButton from "@/components/ui/PrimaryButton";

import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

export default function StepTwo({
  next,
  back,
  data,
}) {

  const [form, setForm] = useState({

    company: data.company || "",

    contact: data.contact || "",

    jobTitle: data.jobTitle || "",

    email: data.email || "",

    phone: data.phone || "",

    website: data.website || "",

    country: data.country || "",

    industry: data.industry || "",

    employees: data.employees || "",

  });

  function handleChange(e) {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  }

  const canContinue =
    form.company &&
    form.contact &&
    form.email;

  return (

    <Section className="pb-28">

      <div className="mx-auto max-w-5xl rounded-[40px] border border-border bg-background p-10 shadow-xl">

        <div className="mb-12">

          <h2 className="text-4xl font-black text-text-primary">

            Organisation Information

          </h2>

          <p className="mt-4 text-text-secondary">

            Tell us about your organisation so we can prepare the
            right consulting approach.

          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2">

          <Input
            label="Company Name"
            name="company"
            value={form.company}
            onChange={handleChange}
          />

          <Input
            label="Contact Person"
            name="contact"
            value={form.contact}
            onChange={handleChange}
          />

          <Input
            label="Job Title"
            name="jobTitle"
            value={form.jobTitle}
            onChange={handleChange}
          />

          <Input
            label="Business Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />

          <Input
            label="Phone Number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />

          <Input
            label="Website"
            name="website"
            value={form.website}
            onChange={handleChange}
          />

          <Input
            label="Country"
            name="country"
            value={form.country}
            onChange={handleChange}
          />

          <Input
            label="Industry"
            name="industry"
            value={form.industry}
            onChange={handleChange}
          />

          <Input
            label="Employees"
            name="employees"
            value={form.employees}
            onChange={handleChange}
          />

        </div>

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

function Input({

  label,

  ...props

}) {

  return (

    <div>

      <label className="mb-3 block font-semibold text-text-primary">

        {label}

      </label>

      <input
        {...props}
        className="w-full rounded-2xl border border-border bg-transparent px-5 py-4 outline-none transition focus:border-secondary"
      />

    </div>

  );

}