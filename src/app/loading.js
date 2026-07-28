export default function Loading() {
  return (
    <main
      className="container flex min-h-[60vh] items-center justify-center py-32"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-secondary/25 border-t-secondary" />
        <p className="mt-5 font-semibold text-text-secondary">Loading…</p>
      </div>
    </main>
  );
}
