"use client";

import { Suspense } from "react";

import RequestPageContent from "./RequestPageContent";

export default function RequestServicePage() {
  return (
    <Suspense fallback={<div className="py-40 text-center">Loading...</div>}>
      <RequestPageContent />
    </Suspense>
  );
}