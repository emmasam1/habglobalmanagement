"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function PaymentSuccessPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="w-full max-w-xl rounded-3xl border border-border bg-card p-10 text-center shadow-xl">
        <CheckCircle
          size={80}
          className="mx-auto text-green-500"
        />

        <h1 className="mt-6 text-4xl font-black text-text-primary">
          Payment Successful
        </h1>

        <p className="mt-4 leading-8 text-text-secondary">
          Thank you for your payment. Your request has been received
          successfully.
        </p>

        <p className="mt-3 text-text-secondary">
          We will review your request and contact you shortly.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex rounded-full bg-secondary px-8 py-4 font-semibold text-white transition hover:opacity-90"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}