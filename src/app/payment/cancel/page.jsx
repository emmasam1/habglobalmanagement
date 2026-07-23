"use client";

import Link from "next/link";
import { XCircle } from "lucide-react";

export default function PaymentCancelPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="w-full max-w-xl rounded-3xl border border-border bg-card p-10 text-center shadow-xl">
        <XCircle
          size={80}
          className="mx-auto text-red-500"
        />

        <h1 className="mt-6 text-4xl font-black text-text-primary">
          Payment Cancelled
        </h1>

        <p className="mt-4 leading-8 text-text-secondary">
          Your payment was cancelled. No money has been charged.
        </p>

        <Link
          href="/services"
          className="mt-10 inline-flex rounded-full bg-secondary px-8 py-4 font-semibold text-white transition hover:opacity-90"
        >
          Return to Services
        </Link>
      </div>
    </div>
  );
}