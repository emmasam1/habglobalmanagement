import CookieHero from "@/components/legal/CookieHero";
import CookieContent from "@/components/legal/CookieContent";
import ContactCTA from "@/components/contact/ContactCTA";

export const metadata = {
  title: "Cookie Policy",
  description:
    "Learn how HAB Global Management Ltd uses cookies and similar technologies, and how you can manage your cookie preferences.",
  alternates: {
    canonical: "/cookies",
  },
  openGraph: {
    title: "Cookie Policy",
    description:
      "Information about cookies used by the HAB Global Management website and how to manage them.",
    url: "/cookies",
  },
};

export default function CookiePolicyPage() {
  return (
    <>
      <CookieHero />
      <CookieContent />
      <ContactCTA />
    </>
  );
}
