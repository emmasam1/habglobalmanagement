import { ArrowUpRight } from "lucide-react";

export default function DashboardStatCard({
  title,
  value,
  description,
  icon: Icon,
  tone = "primary",
}) {
  const tones = {
    primary: "bg-primary text-text-light",
    secondary: "bg-secondary text-primary",
    success: "bg-success text-text-light",
    error: "bg-error text-text-light",
  };

  return (
    <article className="group rounded-2xl border border-border bg-surface p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <span
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${
            tones[tone] || tones.primary
          }`}
        >
          <Icon size={22} />
        </span>

        <ArrowUpRight
          size={18}
          className="text-text-secondary transition group-hover:text-secondary"
        />
      </div>

      <p className="mt-5 text-sm font-semibold text-text-secondary">
        {title}
      </p>

      <p className="mt-1 text-3xl font-bold text-text-primary">
        {value}
      </p>

      <p className="mt-2 text-xs leading-5 text-text-secondary">
        {description}
      </p>
    </article>
  );
}
