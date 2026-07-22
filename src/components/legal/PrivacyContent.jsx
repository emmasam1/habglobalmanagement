"use client";

import Section from "@/components/layout/Section";

const sections = [
  {
    title: "1. Introduction",
    content: (
      <>
        <p>
          HAB Global Management Ltd ("we", "us", "our") is a UK-based
          management consultancy provider committed to protecting your
          privacy and personal information.
        </p>

        <p className="mt-5">
          This Privacy Policy explains how we collect, use, store and
          protect personal data when you use our website, contact us or
          engage our consultancy services.
        </p>

        <p className="mt-5">
          We operate healthcare-related services that do not require CQC
          registration and comply with the UK GDPR and the Data
          Protection Act 2018.
        </p>
      </>
    ),
  },

  {
    title: "2. Who We Are",
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

        <p className="mt-5">
          HAB Global Management Ltd acts as the Data Controller for the
          personal information we collect.
        </p>
      </>
    ),
  },

  {
    title: "3. Personal Information We Collect",
    content: (
      <>
        <p>We may collect:</p>

        <ul className="mt-5 list-disc space-y-3 pl-6">
          <li>Name and job title</li>

          <li>Email address</li>

          <li>Telephone number</li>

          <li>Information submitted through contact forms</li>

          <li>Business information relevant to consultancy services</li>

          <li>
            Healthcare-related information where necessary for
            non-regulated services
          </li>
        </ul>
      </>
    ),
  },

  {
    title: "4. Information Collected Automatically",
    content: (
      <>
        <p>When visiting our website we may collect:</p>

        <ul className="mt-5 list-disc space-y-3 pl-6">
          <li>IP address</li>

          <li>Browser type</li>

          <li>Device information</li>

          <li>Website usage analytics</li>

          <li>Cookies</li>
        </ul>
      </>
    ),
  },

  {
    title: "5. Special Category Data",
    content: (
      <p>
        We may process limited healthcare-related information only where
        necessary and with your explicit consent for services that do not
        fall under CQC regulation.
      </p>
    ),
  },

  {
    title: "6. How We Use Your Data",
    content: (
      <>
        <p>Your information may be used to:</p>

        <ul className="mt-5 list-disc space-y-3 pl-6">
          <li>Provide consultancy services</li>

          <li>Respond to enquiries</li>

          <li>Manage contracts and projects</li>

          <li>Improve our website</li>

          <li>Comply with legal obligations</li>

          <li>Maintain business records</li>

          <li>Send marketing communications with your consent</li>
        </ul>

        <p className="mt-5">
          We never sell your personal information to third parties.
        </p>
      </>
    ),
  },

  {
    title: "7. Legal Basis for Processing",
    content: (
      <>
        <ul className="list-disc space-y-3 pl-6">
          <li>Contract</li>

          <li>Consent</li>

          <li>Legitimate Interests</li>

          <li>Legal Obligation</li>
        </ul>
      </>
    ),
  },

  {
    title: "8. How We Protect Your Information",
    content: (
      <>
        <p>
          We implement appropriate technical and organisational security
          measures including:
        </p>

        <ul className="mt-5 list-disc space-y-3 pl-6">
          <li>Secure servers</li>

          <li>Encrypted storage</li>

          <li>Access controls</li>

          <li>Security monitoring</li>

          <li>Staff data protection training</li>
        </ul>

        <p className="mt-5">
          Personal data is retained only for as long as required by law
          or for legitimate business purposes.
        </p>
      </>
    ),
  },

  {
    title: "9. Sharing Your Information",
    content: (
      <>
        <p>Your data may be shared with:</p>

        <ul className="mt-5 list-disc space-y-3 pl-6">
          <li>Professional partners</li>

          <li>Subcontractors</li>

          <li>Secure cloud service providers</li>

          <li>Legal or regulatory authorities where required</li>
        </ul>

        <p className="mt-5">
          All third parties are required to comply with UK GDPR.
        </p>
      </>
    ),
  },

  {
    title: "10. Cookies",
    content: (
      <>
        <p>Cookies help us:</p>

        <ul className="mt-5 list-disc space-y-3 pl-6">
          <li>Improve website functionality</li>

          <li>Analyse visitor traffic</li>

          <li>Enhance user experience</li>
        </ul>

        <p className="mt-5">
          You can disable cookies through your browser settings.
        </p>
      </>
    ),
  },

  {
    title: "11. Your Rights",
    content: (
      <>
        <p>Under UK GDPR you have the right to:</p>

        <ul className="mt-5 list-disc space-y-3 pl-6">
          <li>Access your data</li>

          <li>Correct inaccurate data</li>

          <li>Request deletion</li>

          <li>Restrict processing</li>

          <li>Data portability</li>

          <li>Object to processing</li>

          <li>Withdraw consent at any time</li>
        </ul>
      </>
    ),
  },

  {
    title: "12. Children's Privacy",
    content: (
      <p>
        Our services are not directed at children under the age of 16,
        and we do not knowingly collect their personal information.
      </p>
    ),
  },

  {
    title: "13. Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time. The latest
        version will always be published on our website together with the
        revision date.
      </p>
    ),
  },

  {
    title: "14. Contact Us",
    content: (
      <>
        <p>
          <strong>HAB Global Management Ltd</strong>
        </p>

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
];

export default function PrivacyContent() {
  return (
    <Section className="pb-28 pt-0! opacity-100!">
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
      </div>
    </Section>
  );
}