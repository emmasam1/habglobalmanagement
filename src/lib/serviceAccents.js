export const serviceAccents = {
  gold: {
    bg: "bg-secondary/10",
    solidBg: "bg-secondary",
    text: "text-secondary",
    border: "border-secondary/30",
    hoverBorder: "hover:border-secondary/50",
    ring: "ring-secondary/20",
    gradient: "via-secondary",
    softGradient: "from-secondary/10 via-secondary/5 to-transparent",
  },

  blue: {
    bg: "bg-blue-500/10",
    solidBg: "bg-blue-500",
    text: "text-blue-500",
    border: "border-blue-500/30",
    hoverBorder: "hover:border-blue-500/50",
    ring: "ring-blue-500/20",
    gradient: "via-blue-500",
    softGradient: "from-blue-500/10 via-blue-500/5 to-transparent",
  },

  emerald: {
    bg: "bg-emerald-500/10",
    solidBg: "bg-emerald-500",
    text: "text-emerald-500",
    border: "border-emerald-500/30",
    hoverBorder: "hover:border-emerald-500/50",
    ring: "ring-emerald-500/20",
    gradient: "via-emerald-500",
    softGradient:
      "from-emerald-500/10 via-emerald-500/5 to-transparent",
  },

  violet: {
    bg: "bg-violet-500/10",
    solidBg: "bg-violet-500",
    text: "text-violet-500",
    border: "border-violet-500/30",
    hoverBorder: "hover:border-violet-500/50",
    ring: "ring-violet-500/20",
    gradient: "via-violet-500",
    softGradient:
      "from-violet-500/10 via-violet-500/5 to-transparent",
  },

  red: {
    bg: "bg-red-500/10",
    solidBg: "bg-red-500",
    text: "text-red-500",
    border: "border-red-500/30",
    hoverBorder: "hover:border-red-500/50",
    ring: "ring-red-500/20",
    gradient: "via-red-500",
    softGradient: "from-red-500/10 via-red-500/5 to-transparent",
  },

  orange: {
    bg: "bg-orange-500/10",
    solidBg: "bg-orange-500",
    text: "text-orange-500",
    border: "border-orange-500/30",
    hoverBorder: "hover:border-orange-500/50",
    ring: "ring-orange-500/20",
    gradient: "via-orange-500",
    softGradient:
      "from-orange-500/10 via-orange-500/5 to-transparent",
  },

  cyan: {
    bg: "bg-cyan-500/10",
    solidBg: "bg-cyan-500",
    text: "text-cyan-500",
    border: "border-cyan-500/30",
    hoverBorder: "hover:border-cyan-500/50",
    ring: "ring-cyan-500/20",
    gradient: "via-cyan-500",
    softGradient: "from-cyan-500/10 via-cyan-500/5 to-transparent",
  },
};

export function getServiceAccent(accentName) {
  return serviceAccents[accentName] || serviceAccents.gold;
}