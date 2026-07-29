import ContactHero from "@/components/contact/ContactHero";
import ContactCards from "@/components/contact/ContactCards";
import ContactForm from "@/components/contact/ContactForm";
import WhyContactHab from "@/components/contact/WhyContactHab";
import ContactFAQ from "@/components/contact/ContactFAQ";
import ContactMapLoader from "@/components/contact/ContactMapLoader";
import ContactCTA from "@/components/contact/ContactCTA";

export const metadata = {
  title: "Contact Our Business Consultants",
  description:
    "Contact HAB Global Management in Weston-super-Mare for general enquiries or to discuss practical UK business and management consultancy support.",
  keywords: [
    "contact business consultant",
    "business consultant Weston-super-Mare",
    "management consultancy contact UK",
    "HAB Global Management contact",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact HAB Global Management",
    description:
      "Speak with our team about practical consultancy support for your organisation.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <ContactCards />

      <ContactForm />

      <WhyContactHab />

      <ContactFAQ />

      <ContactMapLoader />

      <ContactCTA />
    </>
  );
}
