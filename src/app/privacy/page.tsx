
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy – OneArch',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background text-foreground leading-relaxed">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="my-8 text-center">
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: 27&nbsp;June&nbsp;2025</p>
        </header>

        <div className="space-y-10">
          <p>
            This Privacy Policy explains how <strong>OneArch</strong> ("we", "our", "us")
            collects, uses, discloses and protects your information when you use the
            OneArch web application located at{' '}
            <a href="https://theone.archi" className="text-primary hover:underline">https://theone.archi</a> (the "Service").
          </p>

          <section>
            <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
            <p className="mt-4"><strong>Information you provide to us</strong></p>
            <ul className="list-disc space-y-1 pl-5 mt-2">
              <li><em>Email address</em> and <em>password</em> when you create an account via AWS&nbsp;Cognito.</li>
              <li><em>Full&nbsp;name</em> if you choose to provide it or sign up with Google or Facebook.</li>
            </ul>

            <p className="mt-4"><strong>Information collected automatically</strong></p>
            <ul className="list-disc space-y-1 pl-5 mt-2">
              <li>Usage data such as pages visited, interactions and diagnostic logs.</li>
              <li>Device information including browser type, operating system and IP address.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
            <ul className="list-disc space-y-1 pl-5 mt-4">
              <li>Authenticate you and secure access to the Service.</li>
              <li>Personalise your experience and remember your preferences.</li>
              <li>Monitor, maintain and improve the Service.</li>
              <li>Detect, prevent and address technical issues or misuse.</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">3. Legal Basis for Processing</h2>
            <p className="mt-4">
              We process your personal data only when we have a lawful basis, including
              your consent (given when you sign up), to fulfil a contract (provide the
              Service), or to pursue our legitimate interests (service security and
              improvement).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">4. Sharing of Information</h2>
            <ul className="list-disc space-y-1 pl-5 mt-4">
              <li>
                With <strong>Service Providers</strong> such as Amazon Web Services (hosting &amp;
                authentication) and analytics vendors who process data on our behalf in
                accordance with this Policy.
              </li>
              <li>
                With <strong>Identity Providers</strong> (Google, Facebook) when you elect to sign
                in using those services. They share basic profile information with us;
                please review their respective policies.
              </li>
              <li>Where required by law or to protect our rights and the safety of users.</li>
            </ul>
            <p className="mt-4">We do <strong>not</strong> sell or rent your personal data.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">5. Data Retention</h2>
            <p className="mt-4">
              We retain your information for as long as your account is active or as
              needed to provide the Service. You may request deletion at any time (see
              "Your Rights" below). Back‑ups may persist for up to 30&nbsp;days before
              automatic deletion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">6. International Transfers</h2>
            <p className="mt-4">
              We operate from servers located in the European Union. If you access the
              Service from another region, your data may be transferred and stored
              outside of your jurisdiction; we rely on AWS safeguards and standard
              contractual clauses where applicable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">7. Your Rights</h2>
            <p className="mt-4">Subject to local law, you may have the right to:</p>
            <ul className="list-disc space-y-1 pl-5 mt-2">
              <li>Access, correct or delete the personal data we hold about you;</li>
              <li>Withdraw consent at any time;</li>
              <li>Object to or restrict certain processing; and</li>
              <li>Receive a copy of your data in a portable format.</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, <strong>email us at{' '}
              <a href="mailto:privacy@theone.archi" className="text-primary hover:underline">privacy@theone.archi</a></strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">8. Children’s Privacy</h2>
            <p className="mt-4">
              The Service is not directed to children under 13, and we do not knowingly
              collect personal data from anyone under 13. If you believe we have
              collected such data, please contact us so we can delete it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">9. Security</h2>
            <p className="mt-4">
              We use industry‑standard safeguards such as HTTPS, encryption at rest and
              in transit, least‑privilege access controls and continuous monitoring to
              protect your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">10. Changes to This Policy</h2>
            <p className="mt-4">
              We may update this Privacy Policy from time to time. We will post the
              revised version with a new “Last updated” date. Material changes will be
              announced via the Service or email.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">11. Contact Us</h2>
            <p className="mt-4">If you have any questions about this Policy or our data practices, please contact us at:</p>
            <p className="mt-2">
              Email: <a href="mailto:nickolay.laptev@gmail.com" className="text-primary hover:underline">nickolay.laptev@gmail.com</a>
            </p>
          </section>
        </div>

        <footer className="mt-16 text-center text-sm text-muted-foreground">
          <p>©&nbsp;2025 OneArch</p>
        </footer>
      </div>
    </div>
  );
}
