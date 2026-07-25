"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

import RequestHero from "@/components/request/RequestHero";
import RequestStepper from "@/components/request/RequestStepper";
import StepOne from "@/components/request/StepOne";
import StepTwo from "@/components/request/StepTwo";
import StepThree from "@/components/request/StepThree";
import StepFour from "@/components/request/StepFour";
import SuccessScreen from "@/components/request/SuccessScreen";

const INITIAL_STEP = 0;
const SUCCESS_STEP = 4;

export default function RequestPageContent() {
  const searchParams = useSearchParams();
  const serviceSlug =
    searchParams.get("service") || "";

  const [step, setStep] =
    useState(INITIAL_STEP);

  const [formData, setFormData] =
    useState(() => ({
      service: serviceSlug,
      serviceData: null,

      company: "",
      contact: "",
      jobTitle: "",
      email: "",
      phone: "",
      website: "",
      country: "",
      industry: "",
      employees: "",

      project: "",
      goals: "",
      timeline: "",
      meeting: "",

      requestId: "",
    }));

  const next = (data = {}) => {
    setFormData((currentData) => ({
      ...currentData,
      ...data,
    }));

    setStep((currentStep) =>
      Math.min(
        currentStep + 1,
        SUCCESS_STEP,
      ),
    );
  };

  const back = () => {
    setStep((currentStep) =>
      Math.max(
        currentStep - 1,
        INITIAL_STEP,
      ),
    );
  };

  return (
    <>
      <RequestHero />

      <RequestStepper current={step} />

      {step === 0 && (
        <StepOne
          next={next}
          data={formData}
        />
      )}

      {step === 1 && (
        <StepTwo
          next={next}
          back={back}
          data={formData}
        />
      )}

      {step === 2 && (
        <StepThree
          next={next}
          back={back}
          data={formData}
        />
      )}

      {step === 3 && (
        <StepFour
          next={next}
          back={back}
          data={formData}
        />
      )}

      {step === SUCCESS_STEP && (
        <SuccessScreen data={formData} />
      )}
    </>
  );
}