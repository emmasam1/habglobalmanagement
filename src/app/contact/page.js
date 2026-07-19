import ContactHero from "@/components/contact/ContactHero";
import ContactCards from "@/components/contact/ContactCards";
import ContactForm from "@/components/contact/ContactForm";
import WhyContactHab from "@/components/contact/WhyContactHab";
import ContactFAQ from "@/components/contact/ContactFAQ";
import OfficeLocation from "@/components/contact/OfficeLocation";
import ContactCTA from "@/components/contact/ContactCTA";

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <ContactCards />

      <ContactForm />

      <WhyContactHab />

      <ContactFAQ />

      <OfficeLocation />

      <ContactCTA />
    </>
  );
}