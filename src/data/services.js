import {
  BriefcaseBusiness,
  ClipboardList,
  Settings2,
  ShieldCheck,
  HeartPulse,
} from "lucide-react";

const services = [
  {
    id: 1,
    slug: "business-solutions",

    featured: true,

    title: "Business Solutions",

    badge: "Flagship Service",

    icon: "BriefcaseBusiness",

    heroImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80",

    accent: {
      bg: "bg-secondary/10",
      text: "text-secondary",
      border: "border-secondary/30",
      glow: "via-secondary",
    },

    shortDescription:
      "Helping organisations improve performance through strategic consulting and practical business solutions.",

    overview:
      "Every successful organisation needs more than ideas. It needs clear strategy, efficient operations and informed decision-making. Our Business Solutions service helps organisations strengthen their foundations, improve performance and prepare for sustainable long-term growth.",

    challenges: [
      "Unclear business strategy",
      "Slow organisational growth",
      "Inefficient operations",
      "Poor decision-making",
    ],

    included: [
      "Business Strategy",
      "Business Planning",
      "Growth Advisory",
      "Business Development",
      "Market Expansion",
      "Operational Reviews",
      "Performance Improvement",
      "Executive Advisory",
    ],

    outcomes: [
  {
    title: "Improved Operational Efficiency",
    description:
      "Streamline workflows and optimise resources to improve day-to-day performance.",
  },
  {
    title: "Better Strategic Decisions",
    description:
      "Support leadership with practical insights for confident decision-making.",
  },
  {
    title: "Sustainable Growth",
    description:
      "Create a strong foundation for long-term organisational success.",
  },
  {
    title: "Enhanced Business Performance",
    description:
      "Improve operational effectiveness and overall organisational outcomes.",
  },
],

    process: [
      "Discovery",
      "Assessment",
      "Strategy",
      "Implementation",
      "Ongoing Support",
    ],

    industries: [
      "Construction",
      "Retail",
      "Education",
      "Healthcare",
      "Technology",
      "Professional Services",
    ],

    faqs: [
      {
        question: "Who is this service designed for?",
        answer:
          "Businesses, organisations and entrepreneurs seeking strategic guidance, operational improvement and sustainable growth.",
      },
      {
        question: "Do you work with startups?",
        answer:
          "Yes. We support both new and established organisations with solutions tailored to their stage of growth.",
      },
      {
        question: "Can consultations be conducted remotely?",
        answer:
          "Absolutely. We offer both virtual and in-person consultations depending on your requirements.",
      },
    ],
  },

  {
    id: 2,
    slug: "administrative-services",

    title: "Administrative Services",

    badge: "Business Support",

    icon: "ClipboardList",

    heroImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=80",

    accent: {
      bg: "bg-blue-500/10",
      text: "text-blue-500",
      border: "border-blue-500/30",
      glow: "via-blue-500",
    },

    shortDescription:
      "Professional administrative support that improves efficiency and keeps organisations running smoothly.",

    overview:
      "Strong administration forms the backbone of every successful organisation. We help businesses establish efficient systems, streamline documentation and improve day-to-day coordination.",

    challenges: [
      "Disorganised documentation",
      "Administrative inefficiencies",
      "Poor workflow coordination",
      "Manual processes",
    ],

    included: [
      "Administrative Support",
      "Documentation",
      "Office Coordination",
      "Business Records",
      "Workflow Management",
      "Administrative Planning",
    ],

    outcomes: [
  {
    title: "Improved Operational Efficiency",
    description:
      "Streamline workflows and optimise resources to improve day-to-day performance.",
  },
  {
    title: "Better Strategic Decisions",
    description:
      "Support leadership with practical insights for confident decision-making.",
  },
  {
    title: "Sustainable Growth",
    description:
      "Create a strong foundation for long-term organisational success.",
  },
  {
    title: "Enhanced Business Performance",
    description:
      "Improve operational effectiveness and overall organisational outcomes.",
  },
],

    process: [
      "Discovery",
      "Assessment",
      "Planning",
      "Implementation",
      "Continuous Support",
    ],

    industries: [
      "Healthcare",
      "Education",
      "Retail",
      "Construction",
      "Technology",
    ],

    faqs: [],
  },

  {
    id: 3,
    slug: "operational-improvement",

    title: "Operational Improvement",

    badge: "Performance",

    icon: "Settings2",

    heroImage:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1800&q=80",

    accent: {
      bg: "bg-emerald-500/10",
      text: "text-emerald-500",
      border: "border-emerald-500/30",
      glow: "via-emerald-500",
    },

    shortDescription:
      "Helping organisations improve productivity through smarter operational processes.",

    overview:
      "Operational excellence is achieved through continuous improvement. We identify inefficiencies and implement practical solutions that enhance productivity and performance.",

    challenges: [
      "Slow processes",
      "Operational bottlenecks",
      "Low productivity",
      "High operating costs",
    ],

    included: [
      "Workflow Optimisation",
      "Process Improvement",
      "Performance Reviews",
      "Operational Planning",
      "Efficiency Audits",
    ],

  outcomes: [
  {
    title: "Improved Operational Efficiency",
    description:
      "Streamline workflows and optimise resources to improve day-to-day performance.",
  },
  {
    title: "Better Strategic Decisions",
    description:
      "Support leadership with practical insights for confident decision-making.",
  },
  {
    title: "Sustainable Growth",
    description:
      "Create a strong foundation for long-term organisational success.",
  },
  {
    title: "Enhanced Business Performance",
    description:
      "Improve operational effectiveness and overall organisational outcomes.",
  },
],

    process: [
      "Discovery",
      "Analysis",
      "Improvement Plan",
      "Execution",
      "Monitoring",
    ],

    industries: [
      "Manufacturing",
      "Healthcare",
      "Retail",
      "Technology",
    ],

    faqs: [],
  },

  {
    id: 4,
    slug: "compliance-support",

    title: "Compliance Support",

    badge: "Governance",

    icon: "ShieldCheck",

    heroImage:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1800&q=80",

    accent: {
      bg: "bg-violet-500/10",
      text: "text-violet-500",
      border: "border-violet-500/30",
      glow: "via-violet-500",
    },

    shortDescription:
      "Helping organisations strengthen governance and maintain regulatory readiness.",

    overview:
      "Good governance supports sustainable growth. We help organisations improve internal compliance processes, documentation and operational readiness.",

    challenges: [
      "Policy gaps",
      "Documentation issues",
      "Compliance risks",
      "Governance weaknesses",
    ],

    included: [
      "Compliance Reviews",
      "Documentation",
      "Policy Development",
      "Risk Guidance",
    ],

    outcomes: [
  {
    title: "Improved Operational Efficiency",
    description:
      "Streamline workflows and optimise resources to improve day-to-day performance.",
  },
  {
    title: "Better Strategic Decisions",
    description:
      "Support leadership with practical insights for confident decision-making.",
  },
  {
    title: "Sustainable Growth",
    description:
      "Create a strong foundation for long-term organisational success.",
  },
  {
    title: "Enhanced Business Performance",
    description:
      "Improve operational effectiveness and overall organisational outcomes.",
  },
],

    process: [
      "Review",
      "Assessment",
      "Recommendations",
      "Implementation",
      "Monitoring",
    ],

    industries: [
      "Healthcare",
      "Construction",
      "Education",
      "Finance",
    ],

    faqs: [],
  },

  {
    id: 5,
    slug: "healthcare-advisory-support",

    title: "Healthcare Advisory & Support",

    badge: "Healthcare",

    icon: "HeartPulse",

    heroImage:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1800&q=80",

    accent: {
      bg: "bg-red-500/10",
      text: "text-red-500",
      border: "border-red-500/30",
      glow: "via-red-500",
    },

    shortDescription:
      "Supporting healthcare organisations with operational excellence and administrative improvement.",

    overview:
      "Healthcare organisations require efficient administration, sound operational processes and effective support systems. Our advisory services help improve service delivery and organisational performance.",

    challenges: [
      "Operational inefficiencies",
      "Administrative workload",
      "Compliance challenges",
      "Service delivery issues",
    ],

    included: [
      "Healthcare Administration",
      "Operational Reviews",
      "Compliance Guidance",
      "Service Improvement",
      "Workflow Optimisation",
    ],

    outcomes: [
  {
    title: "Improved Operational Efficiency",
    description:
      "Streamline workflows and optimise resources to improve day-to-day performance.",
  },
  {
    title: "Better Strategic Decisions",
    description:
      "Support leadership with practical insights for confident decision-making.",
  },
  {
    title: "Sustainable Growth",
    description:
      "Create a strong foundation for long-term organisational success.",
  },
  {
    title: "Enhanced Business Performance",
    description:
      "Improve operational effectiveness and overall organisational outcomes.",
  },
],

    process: [
      "Consultation",
      "Assessment",
      "Planning",
      "Implementation",
      "Support",
    ],

    industries: [
      "Hospitals",
      "Clinics",
      "NGOs",
      "Healthcare Providers",
    ],

    faqs: [],
  },
];

export default services;