"use client";

import Section from "@/components/layout/Section";

const sections = [
  {
    title: "1. Introduction",
    content: (
      <>
        <p>
          These Terms & Conditions ("Terms") govern your use of the website
          operated by <strong>HAB Global Management Ltd</strong> ("we", "us",
          "our") and the professional consultancy services we provide,
          including management consultancy and healthcare-related services that
          do not require CQC registration.
        </p>

        <p className="mt-5">
          By accessing our website or engaging our services, you agree to be
          bound by these Terms. If you do not agree, please discontinue use of
          our website and services.
        </p>
      </>
    ),
  },

  {
    title: "2. About HAB Global Management Ltd",
    content: (
      <>
        <p>
          <strong>HAB Global Management Ltd</strong>
        </p>

        <p>Management Consultancy & Business Solutions</p>

        <p>United Kingdom</p>

        <p>Email: info@habglobalmanagement.co.uk</p>

        <p className="mt-4">
          Unit 24–25, The Sovereign Centre
          <br />
          High Street
          <br />
          Weston-super-Mare
          <br />
          BS23 1HL
        </p>
      </>
    ),
  },

  {
    title: "3. Use of Our Website",
    content: (
      <>
        <p>
          You agree to use our website only for lawful purposes. You must not:
        </p>

        <ul className="mt-5 list-disc space-y-3 pl-6">
          <li>Disrupt or interfere with the operation of our website.</li>

          <li>
            Attempt to gain unauthorised access to our systems, servers or data.
          </li>

          <li>Transmit unlawful, harmful or offensive content.</li>

          <li>
            Copy, reproduce or distribute website content without our written
            permission.
          </li>
        </ul>

        <p className="mt-5">
          We reserve the right to suspend or terminate access where misuse is
          identified.
        </p>
      </>
    ),
  },

  {
    title: "4. Our Services",
    content: (
      <p>
        We provide professional management consultancy and healthcare-related
        support services that do not fall under regulated CQC activities. All
        services are delivered with reasonable skill, care and professionalism.
      </p>
    ),
  },

  {
    title: "5. Service Availability",
    content: (
      <p>
        While we strive to provide uninterrupted services, we cannot guarantee
        continuous availability. We reserve the right to modify, suspend or
        discontinue services where necessary.
      </p>
    ),
  },

  {
    title: "6. Professional Advice Disclaimer",
    content: (
      <p>
        Information provided through our consultancy and healthcare-related
        services is intended for guidance only and should not be considered a
        substitute for regulated medical, legal or financial advice.
      </p>
    ),
  },

  {
    title: "7. Client Responsibilities",
    content: (
      <>
        <p>Clients agree to:</p>

        <ul className="mt-5 list-disc space-y-3 pl-6">
          <li>Provide accurate and complete information.</li>

          <li>Cooperate throughout service delivery.</li>

          <li>Comply with all applicable laws and regulations.</li>

          <li>
            Ensure any information supplied does not infringe third-party rights.
          </li>
        </ul>
      </>
    ),
  },

  {
    title: "8. Fees & Payment",
    content: (
      <>
        <p>Our fees are agreed before work begins.</p>

        <ul className="mt-5 list-disc space-y-3 pl-6">
          <li>Payment terms will be stated in quotations or invoices.</li>

          <li>Late payments may incur administrative charges.</li>

          <li>Services may be suspended where payment is overdue.</li>
        </ul>
      </>
    ),
  },

  {
    title: "9. Intellectual Property",
    content: (
      <p>
        All website content, branding, graphics, reports, documentation and
        consultancy materials remain the intellectual property of HAB Global
        Management Ltd unless otherwise agreed in writing. No material may be
        reproduced or distributed without our prior written consent.
      </p>
    ),
  },

  {
    title: "10. Limitation of Liability",
    content: (
      <>
        <p>To the fullest extent permitted by UK law:</p>

        <ul className="mt-5 list-disc space-y-3 pl-6">
          <li>We are not liable for indirect or consequential losses.</li>

          <li>
            Decisions made using our consultancy remain the responsibility of
            the client.
          </li>

          <li>
            Our total liability shall not exceed the fees paid for the relevant
            service.
          </li>
        </ul>

        <p className="mt-5">
          Nothing within these Terms excludes liability for death, personal
          injury or fraud where prohibited by law.
        </p>
      </>
    ),
  },

  {
    title: "11. Third-Party Links",
    content: (
      <p>
        Our website may contain links to third-party websites. HAB Global
        Management Ltd accepts no responsibility for the content, availability
        or use of those external websites.
      </p>
    ),
  },

  {
    title: "12. Data Protection",
    content: (
      <p>
        We process personal information in accordance with the UK General Data
        Protection Regulation (UK GDPR) and the Data Protection Act 2018.
        Please refer to our Privacy Policy for full details.
      </p>
    ),
  },

  {
    title: "13. Termination",
    content: (
      <p>
        We reserve the right to suspend or terminate access to our services if
        these Terms are breached, unlawful activity is identified or where
        required by law.
      </p>
    ),
  },

  {
    title: "14. Changes to These Terms",
    content: (
      <p>
        We may revise these Terms from time to time. Updated versions will be
        published on this website and continued use constitutes acceptance of
        the revised Terms.
      </p>
    ),
  },

  {
    title: "15. Governing Law",
    content: (
      <p>
        These Terms are governed by the laws of England and Wales. Any disputes
        arising under these Terms shall be subject to the exclusive jurisdiction
        of the courts of England and Wales.
      </p>
    ),
  },
];

export default function TermsContent() {
  return (
    <Section className="pt-0! opacity-100!">
      <div className="mx-auto max-w-5xl space-y-8">
        {sections.map((section) => (
          <div
            key={section.title}
            className="rounded-3xl border border-border bg-background p-8 shadow-sm"
          >
            <h2 className="text-2xl font-bold text-text-primary">
              {section.title}
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-text-secondary">
              {section.content}
            </div>
          </div>
        ))}

        <div className="rounded-3xl border border-secondary/20 bg-secondary/5 p-8">
          <h2 className="text-2xl font-bold text-text-primary">
            Contact Us
          </h2>

          <div className="mt-6 space-y-3 leading-8 text-text-secondary">
            <p>
              <strong>HAB Global Management Ltd</strong>
            </p>

            <p>Email: info@habglobalmanagement.co.uk</p>

            <p>
              Unit 24–25, The Sovereign Centre
              <br />
              High Street
              <br />
              Weston-super-Mare
              <br />
              BS23 1HL
              <br />
              United Kingdom
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}