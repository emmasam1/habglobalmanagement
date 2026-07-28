"use client";

export default function ErrorPage({ reset }) {
  return (
    <main className="container flex min-h-[70vh] items-center justify-center py-32">
      <div className="max-w-xl text-center">
        <p className="font-semibold uppercase tracking-[0.2em] text-secondary">
          Something went wrong
        </p>
        <h1 className="mt-4 text-4xl font-black text-text-primary">
          We could not load this page
        </h1>
        <p className="mt-5 leading-8 text-text-secondary">
          Please try again. If the problem continues, email
          info@habglobalmanagement.co.uk.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 rounded-full bg-secondary px-7 py-3 font-semibold text-slate-950"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
