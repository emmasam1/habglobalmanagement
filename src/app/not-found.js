import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container flex min-h-[70vh] items-center justify-center py-32">
      <div className="max-w-xl text-center">
        <p className="font-semibold uppercase tracking-[0.2em] text-secondary">
          404
        </p>
        <h1 className="mt-4 text-4xl font-black text-text-primary">
          Page not found
        </h1>
        <p className="mt-5 leading-8 text-text-secondary">
          The page may have moved. Explore our consultancy services or return
          to the homepage.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-secondary px-7 py-3 font-semibold text-slate-950"
          >
            Return home
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-border px-7 py-3 font-semibold text-text-primary"
          >
            View services
          </Link>
        </div>
      </div>
    </main>
  );
}
