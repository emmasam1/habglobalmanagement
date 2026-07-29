import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import ThemeRegistry from "@/components/providers/ThemeRegistry";
import LayoutWrapper from "@/components/layout/LayoutWrapper";

const siteUrl = "https://www.habglobalmanagement.co.uk";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "HAB Global Management | Business & Management Consultancy",
    template: "%s | HAB Global Management",
  },
  description:
    "UK management consultancy in Weston-super-Mare providing business strategy, operational improvement, administrative, compliance and healthcare advisory support.",
  applicationName: "HAB Global Management",
  authors: [{ name: "HAB Global Management Ltd", url: siteUrl }],
  creator: "HAB Global Management Ltd",
  publisher: "HAB Global Management Ltd",
  keywords: [
    "business consultancy UK",
    "management consultancy",
    "business strategy",
    "operational improvement",
    "administrative support",
    "compliance support",
    "healthcare advisory",
    "business consultant Weston-super-Mare",
    "management consultant South West England",
    "business process improvement UK",
    "small business consulting UK",
    "business growth consultant",
    "governance and policy support",
  ],
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-GB": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "HAB Global Management",
    title: "HAB Global Management | Business & Management Consultancy",
    description:
      "Practical business, management and advisory solutions that help organisations improve performance and grow sustainably.",
    images: [
      {
        url: "/hab-social-preview.jpg",
        width: 1200,
        height: 630,
        alt: "HAB Global Management business consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HAB Global Management | Business & Management Consultancy",
    description:
      "Practical business, management and advisory solutions for sustainable organisational growth.",
    images: ["/hab-social-preview.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/hab_round.png",
    apple: "/hab_logo_1.png",
  },
  category: "business",
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "HAB Global Management Ltd",
    url: siteUrl,
    logo: `${siteUrl}/hab_logo_light.png`,
    image: `${siteUrl}/hab-social-preview.jpg`,
    email: "info@habglobalmanagement.co.uk",
    telephone: "+44 117 244 8224",
    priceRange: "££",
    description:
      "UK management consultancy helping organisations improve strategy, administration, governance, compliance and operational performance.",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Unit 24-25, The Sovereign Centre, High Street",
      addressLocality: "Weston-super-Mare",
      postalCode: "BS23 1HL",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.3486,
      longitude: -2.9774,
    },
    areaServed: [
      {
        "@type": "Country",
        name: "United Kingdom",
      },
      {
        "@type": "AdministrativeArea",
        name: "South West England",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "info@habglobalmanagement.co.uk",
        telephone: "+44 117 244 8224",
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "consult@habglobalmanagement.co.uk",
        availableLanguage: "English",
      },
    ],
    knowsAbout: [
      "Business strategy",
      "Management consultancy",
      "Operational improvement",
      "Business process improvement",
      "Administrative systems",
      "Compliance support",
      "Governance and policy development",
      "Healthcare advisory",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Business and management consultancy services",
      itemListElement: [
        "Business Solutions",
        "Administrative Services",
        "Operational Improvement",
        "Compliance Support",
        "Consulting Services",
        "Healthcare Advisory and Support",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
        },
      })),
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${poppins.variable}`}
      >
        <ThemeRegistry>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </ThemeRegistry>
      </body>
    </html>
  );
}
