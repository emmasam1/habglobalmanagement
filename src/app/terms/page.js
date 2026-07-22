import TermsHero from "@/components/terms/TermsHero";
import TermsContent from "@/components/terms/TermsContent";
import ContactCTA from "@/components/contact/ContactCTA";

export const metadata = {
  title: "Terms & Conditions | HAB Global Management Ltd",
  description:
    "Read the Terms & Conditions governing the use of HAB Global Management Ltd's website and professional consultancy services.",
};

export default function TermsPage() {
  return (
    <>
      <TermsHero />
      <TermsContent />
      <ContactCTA />
    </>
  );
}