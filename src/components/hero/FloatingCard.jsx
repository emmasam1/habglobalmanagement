export default function FloatingCard({
  icon,
  title,
  subtitle,
  className = "",
}) {
  return (
    <div
      className={`absolute rounded-2xl border border-white/20 bg-white/80 p-4 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/80 ${className}`}
    >
      <div className="flex items-center gap-3">
        <div className="text-secondary">
          {icon}
        </div>

        <div>
          <h4 className="font-bold text-text-primary">
            {title}
          </h4>

          <p className="text-sm text-text-secondary">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
