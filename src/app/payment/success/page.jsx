import Link from "next/link";
import {
  CheckCircle2,
  CircleAlert,
  LoaderCircle,
} from "lucide-react";

const verifyPayment = async (sessionId) => {
  if (!sessionId) {
    return "invalid";
  }

  const configuredApiUrl =
    process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/, "");
  const apiUrl =
    process.env.NODE_ENV === "production" &&
    configuredApiUrl?.includes("localhost")
      ? "https://habglobaldb.onrender.com/api"
      : configuredApiUrl ||
        "https://habglobaldb.onrender.com/api";

  if (!apiUrl) {
    return "unavailable";
  }

  try {
    const response = await fetch(
      `${apiUrl}/payments/verify/${encodeURIComponent(sessionId)}`,
      {
        cache: "no-store",
      },
    );
    const result = await response.json();

    if (!response.ok) {
      return "unavailable";
    }

    return result.paymentStatus === "Paid" ? "paid" : "pending";
  } catch {
    return "unavailable";
  }
};

export default async function PaymentSuccessPage({ searchParams }) {
  const { session_id: sessionId } = await searchParams;
  const status = await verifyPayment(sessionId);
  const isPaid = status === "paid";
  const isPending = status === "pending";

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-5 py-20">
      <section className="w-full max-w-2xl rounded-[36px] border border-border bg-surface p-8 text-center shadow-xl sm:p-12">
        <div
          className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full ${
            isPaid
              ? "bg-success/10 text-success"
              : isPending
                ? "bg-warning/10 text-warning"
                : "bg-error/10 text-error"
          }`}
        >
          {isPaid ? (
            <CheckCircle2 size={42} />
          ) : isPending ? (
            <LoaderCircle size={42} />
          ) : (
            <CircleAlert size={42} />
          )}
        </div>

        <h1 className="mt-6 text-4xl font-black text-text-primary">
          {isPaid
            ? "Payment confirmed"
            : isPending
              ? "Payment is processing"
              : "We could not verify the payment"}
        </h1>

        <p className="mt-4 leading-8 text-text-secondary">
          {isPaid
            ? "Thank you. Stripe confirmed your payment and your dashboard record has been updated."
            : isPending
              ? "Stripe has not confirmed the payment yet. Some payment methods take a little longer to complete."
              : "Your payment may still be successful. Please contact us and include the payment email you used so we can check it."}
        </p>

        {isPaid && (
          <p className="mt-3 text-text-secondary">
            A confirmation email will be sent to you shortly.
          </p>
        )}

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
