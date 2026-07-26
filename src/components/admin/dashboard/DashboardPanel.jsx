export default function DashboardPanel({
  title,
  description,
  action,
  children,
  className = "",
}) {
  return (
    <section
      className={`overflow-hidden rounded-2xl border border-border bg-surface shadow-sm ${className}`}
    >
      <header className="flex items-start justify-between gap-4 border-b border-border px-5 py-5 sm:px-6">
        <div>
          <h2 className="text-lg font-bold text-text-primary">
            {title}
          </h2>

          {description && (
            <p className="mt-1 text-sm text-text-secondary">
              {description}
            </p>
          )}
        </div>

        {action}
      </header>

      {children}
    </section>
  );
}
