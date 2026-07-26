export default function AdminPageHeader({
  eyebrow = "HAB Global Management",
  title,
  description,
  action,
}) {
  return (
    <header className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="text-sm font-semibold text-secondary">
          {eyebrow}
        </p>
        <h1 className="mt-1 text-3xl font-bold text-text-primary">
          {title}
        </h1>
        {description && (
          <p className="mt-2 max-w-3xl text-text-secondary">
            {description}
          </p>
        )}
      </div>

      {action}
    </header>
  );
}
