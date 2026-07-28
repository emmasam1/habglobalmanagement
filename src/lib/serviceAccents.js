const ACCENT_STYLES = {
  gold: {
    background: "bg-secondary/10",
    text: "text-secondary",
  },
  blue: {
    background: "bg-blue-500/10",
    text: "text-blue-600 dark:text-blue-400",
  },
  emerald: {
    background: "bg-emerald-500/10",
    text: "text-emerald-600 dark:text-emerald-400",
  },
  violet: {
    background: "bg-violet-500/10",
    text: "text-violet-600 dark:text-violet-400",
  },
  red: {
    background: "bg-red-500/10",
    text: "text-red-600 dark:text-red-400",
  },
  orange: {
    background: "bg-orange-500/10",
    text: "text-orange-600 dark:text-orange-400",
  },
  cyan: {
    background: "bg-cyan-500/10",
    text: "text-cyan-600 dark:text-cyan-400",
  },
};

export function getServiceAccent(accent) {
  if (accent && typeof accent === "object") {
    return {
      background:
        accent.bg || ACCENT_STYLES.gold.background,
      text:
        accent.text || ACCENT_STYLES.gold.text,
    };
  }

  return (
    ACCENT_STYLES[accent] ||
    ACCENT_STYLES.gold
  );
}
