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
    "UK business and management consultancy providing strategic, administrative, compliance, operational and healthcare advisory services.",
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
  ],
  alternates: {
    canonical: "/",
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
    description:
      "UK business and management consultancy providing strategic, administrative, compliance, operational and healthcare advisory services.",
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    knowsAbout: [
      "Business strategy",
      "Management consultancy",
      "Operational improvement",
      "Compliance support",
      "Healthcare advisory",
    ],
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
