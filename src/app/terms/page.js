import TermsHero from "@/components/terms/TermsHero";
import TermsContent from "@/components/terms/TermsContent";
import ContactCTA from "@/components/contact/ContactCTA";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "Read the Terms & Conditions governing the use of HAB Global Management Ltd's website and professional consultancy services.",
  alternates: {
    canonical: "/terms",
  },
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
