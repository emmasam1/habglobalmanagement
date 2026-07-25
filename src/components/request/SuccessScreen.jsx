import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function PaymentSuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-5 py-20">
      <section className="w-full max-w-2xl rounded-[36px] border border-border bg-surface p-8 text-center shadow-xl sm:p-12">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-success/10 text-success">
          <CheckCircle2 size={42} />
        </div>

        <h1 className="mt-6 text-4xl font-black text-text-primary">
          Payment received
        </h1>

        <p className="mt-4 leading-8 text-text-secondary">
          Thank you. Your payment was submitted successfully and
          your consultation request has been received.
        </p>

        <p className="mt-3 text-text-secondary">
          Payment confirmation is verified securely by Stripe. We
          will contact you shortly.
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
