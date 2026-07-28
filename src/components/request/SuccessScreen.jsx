import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function SuccessScreen({ data }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-5 py-20">
      <section className="w-full max-w-2xl rounded-[36px] border border-border bg-surface p-8 text-center shadow-xl sm:p-12">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-success/10 text-success">
          <CheckCircle2 size={42} />
        </div>

        <h1 className="mt-6 text-4xl font-black text-text-primary">
          {data?.quoteRequired
            ? "Quote request received"
            : "Request received"}
        </h1>

        <p className="mt-4 leading-8 text-text-secondary">
          Thank you. Your consultation request has been sent to HAB
          Global Management.
        </p>

        <p className="mt-3 text-text-secondary">
          {data?.quoteRequired
            ? "Our team will discuss the requirements with you. Once a price is agreed, we will email you a secure Stripe payment link showing that exact amount."
            : "We will contact you shortly with the next steps."}
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex h-12 items-center justify-center rounded-xl bg-secondary px-8 font-semibold text-primary transition hover:opacity-90"
        >
          Back to Home
        </Link>
      </section>
    </main>
  );
}
