"use client";

import dynamic from "next/dynamic";

const ContactMap = dynamic(() => import("./ContactMap"), {
  ssr: false,
  loading: () => (
    <section className="py-20">
      <div className="container">
        <div className="min-h-[420px] animate-pulse rounded-2xl border border-border bg-surface-secondary" />
      </div>
    </section>
  ),
});

export default function ContactMapLoader() {
  return <ContactMap />;
}
