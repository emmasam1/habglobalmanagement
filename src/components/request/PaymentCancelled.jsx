import Link from "next/link";
import { CircleX } from "lucide-react";

export default function PaymentCancelPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-5 py-20">
      <section className="w-full max-w-2xl rounded-[36px] border border-border bg-surface p-8 text-center shadow-xl sm:p-12">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-error/10 text-error">
          <CircleX size={42} />
        </div>

        <h1 className="mt-6 text-4xl font-black text-text-primary">
          Payment Cancelled
        </h1>

        <p className="mt-4 leading-8 text-text-secondary">
          The checkout was cancelled and no payment was completed.
          You can return to the services page and try again when you
          are ready.
        </p>

        <Link
          href="/services"
          className="mt-10 inline-flex h-12 items-center justify-center rounded-xl bg-secondary px-8 font-semibold text-primary transition hover:opacity-90"
        >
          Return to Services
        </Link>
      </section>
    </main>
  );
}
