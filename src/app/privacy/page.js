import PrivacyHero from "@/components/legal/PrivacyHero";
import PrivacyContent from "@/components/legal/PrivacyContent";
import ContactCTA from "@/components/contact/ContactCTA";

export const metadata = {
  title: "Privacy Policy | HAB Global Management Ltd",
  description:
    "Learn how HAB Global Management Ltd collects, stores and protects your personal information in accordance with UK GDPR.",
};

export default function PrivacyPage() {
  return (
    <>
      <PrivacyHero />
      <PrivacyContent />
      <ContactCTA />
    </>
  );
}