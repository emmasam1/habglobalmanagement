"use client";

import Link from "next/link";

import Section from "@/components/layout/Section";

const cardClass =
  "rounded-3xl border border-border bg-background p-8 shadow-sm";
const listClass = "mt-5 list-disc space-y-3 pl-6";

export default function CookieContent() {
  return (
    <Section className="pb-28 pt-0! opacity-100!">
      <div className="mx-auto max-w-5xl space-y-8">
        <PolicySection title="1. Introduction">
          <p>
            This Cookie Policy explains how HAB Global Management Ltd
            (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) uses cookies and
            similar technologies on our website. It should be read together
            with our{" "}
            <LegalLink href="/privacy">Privacy Policy</LegalLink> and{" "}
            <LegalLink href="/terms">Terms &amp; Conditions</LegalLink>.
          </p>

          <p className="mt-5">
            By using our website, you consent to the use of cookies as
            described in this policy. You can manage or disable cookies at any
            time through your browser settings.
          </p>
        </PolicySection>

        <PolicySection title="2. What Are Cookies?">
          <p>
            Cookies are small text files stored on your device when you visit a
            website. They help websites function properly, improve user
            experience, and provide analytics to website owners.
          </p>

          <p className="mt-5">Cookies may be:</p>

          <ul className={listClass}>
            <li>Session cookies - deleted when you close your browser</li>
            <li>Persistent cookies - stored until they expire or are deleted</li>
            <li>First-party cookies - set by our website</li>
            <li>Third-party cookies - set by external services we use</li>
          </ul>
        </PolicySection>

        <PolicySection title="3. How We Use Cookies">
          <p>We use cookies for the following purposes:</p>

          <CookieType title="Essential Cookies">
            <p>
              These cookies are necessary for the website to function and
              cannot be switched off. They include:
            </p>
            <ul className={listClass}>
              <li>Security and authentication cookies</li>
              <li>Cookies that enable core website features</li>
              <li>Load-balancing and performance cookies</li>
            </ul>
          </CookieType>

          <CookieType title="Performance & Analytics Cookies">
            <p>
              These cookies help us understand how visitors use our website,
              allowing us to improve functionality and user experience.
              Examples include:
            </p>
            <ul className={listClass}>
              <li>Page visit tracking</li>
              <li>Traffic sources</li>
              <li>User behaviour analytics</li>
            </ul>
            <p className="mt-5">
              We may use tools such as Google Analytics or similar services.
            </p>
          </CookieType>

          <CookieType title="Functionality Cookies">
            <p>
              These cookies allow the website to remember your preferences,
              such as:
            </p>
            <ul className={listClass}>
              <li>Language settings</li>
              <li>Form inputs</li>
              <li>Display preferences</li>
            </ul>
          </CookieType>

          <CookieType title="Marketing & Third-Party Cookies">
            <p>
              We may use third-party services that place cookies to:
            </p>
            <ul className={listClass}>
              <li>Display relevant content</li>
              <li>Integrate social media features</li>
              <li>Support embedded content, such as videos and maps</li>
            </ul>
            <p className="mt-5">
              We do <strong>not</strong> use cookies to sell or share personal
              data for advertising purposes.
            </p>
          </CookieType>
        </PolicySection>

        <PolicySection title="4. Cookies We May Use">
          <p>
            Below are examples of cookies that may be used on our website:
          </p>

          <ul className={listClass}>
            <li>
              <strong>_ga / _gid</strong> - Google Analytics cookies for
              visitor tracking
            </li>
            <li>
              <strong>session_id</strong> - essential cookie for maintaining
              secure sessions
            </li>
            <li>
              <strong>preferences</strong> - stores user settings and choices
            </li>
          </ul>

          <p className="mt-5">
            The exact cookies may vary depending on updates to our website or
            third-party services.
          </p>
        </PolicySection>

        <PolicySection title="5. Managing Cookies">
          <p>
            You can control cookies through your browser settings. Most
            browsers allow you to:
          </p>

          <ul className={listClass}>
            <li>Block all cookies</li>
            <li>Block specific types of cookies</li>
            <li>Delete existing cookies</li>
            <li>Receive alerts before cookies are stored</li>
          </ul>

          <p className="mt-5">For guidance, visit:</p>

          <ul className={listClass}>
            <li>Chrome: chrome://settings/cookies</li>
            <li>Firefox: about:preferences#privacy</li>
            <li>Safari: Preferences, then Privacy</li>
            <li>Edge: Settings, then Cookies and site permissions</li>
          </ul>

          <p className="mt-5">
            Please note: disabling certain cookies may affect website
            functionality.
          </p>
        </PolicySection>

        <PolicySection title="6. Third-Party Services">
          <p>
            Some cookies are placed by third-party providers we use for
            analytics, hosting, or embedded content. These providers may have
            their own cookie policies.
          </p>

          <p className="mt-5">
            We recommend reviewing their policies for more information.
          </p>
        </PolicySection>

        <PolicySection title="7. Changes to This Cookie Policy">
          <p>
            We may update this Cookie Policy from time to time. The latest
            version will always be available on our website, with the date of
            revision clearly indicated.
          </p>
        </PolicySection>

        <section className="rounded-3xl border border-secondary/20 bg-secondary/5 p-8">
          <h2 className="text-2xl font-bold text-text-primary">
            8. Contact Us
          </h2>

          <div className="mt-6 space-y-3 leading-8 text-text-secondary">
            <p>
              If you have questions about this Cookie Policy or how we use
              cookies, please contact:
            </p>
            <p className="pt-2">
              <strong>HAB Global Management Ltd</strong>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:info@habglobalmanagement.co.uk"
                className="font-semibold text-secondary transition hover:opacity-80"
              >
                info@habglobalmanagement.co.uk
              </a>
            </p>
            <p>
              Unit 24-25, The Sovereign Centre
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
        </section>
      </div>
    </Section>
  );
}

function PolicySection({ title, children }) {
  return (
    <section className={cardClass}>
      <h2 className="text-2xl font-bold text-text-primary">{title}</h2>
      <div className="mt-6 leading-8 text-text-secondary">{children}</div>
    </section>
  );
}

function CookieType({ title, children }) {
  return (
    <div className="mt-8 rounded-2xl bg-surface-secondary p-6">
      <h3 className="text-lg font-bold text-text-primary">{title}</h3>
      <div className="mt-3 leading-8 text-text-secondary">{children}</div>
    </div>
  );
}

function LegalLink({ href, children }) {
  return (
    <Link
      href={href}
      className="font-semibold text-secondary transition hover:opacity-80"
    >
      {children}
    </Link>
  );
}
