"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

import RequestHero from "@/components/request/RequestHero";
import RequestStepper from "@/components/request/RequestStepper";
import StepOne from "@/components/request/StepOne";
import StepTwo from "@/components/request/StepTwo";
import StepThree from "@/components/request/StepThree";
import StepFour from "@/components/request/StepFour";
import SuccessScreen from "@/components/request/SuccessScreen";

export default function RequestPageContent() {
  const searchParams = useSearchParams();

  const defaultService = useMemo(
    () => searchParams.get("service") || "",
    [searchParams]
  );

  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState({
    service: defaultService,
  });

  const next = (data = {}) => {
    setFormData((prev) => ({
      ...prev,
      ...data,
    }));

    setStep((prev) => prev + 1);
  };

  const back = () => setStep((prev) => prev - 1);

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

      {step === 4 && <SuccessScreen />}
    </>
  );
}