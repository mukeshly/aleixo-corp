import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-10 text-center">Privacy Policy</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">1. Introduction</h2>
          <p className="text-muted-foreground leading-relaxed">
            Aleixo Pharma (“we,” “us,” or “our”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">2. Information We Collect</h2>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
            <li><strong>Personal Data:</strong> Name, email address, phone number, and postal address when you contact us or subscribe.</li>
            <li><strong>Usage Data:</strong> Pages visited, time on site, IP address, browser type, and device information collected automatically via cookies and analytics tools.</li>
            <li><strong>Cookies & Tracking:</strong> Small files placed on your device to improve site functionality and enable analytics.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">3. How We Use Your Information</h2>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
            <li>To provide, operate, and maintain our website.</li>
            <li>To respond to your inquiries, comments, or requests.</li>
            <li>To send newsletters, marketing communications, and updates if you opt in.</li>
            <li>To improve and personalize your experience on our site.</li>
            <li>To monitor and analyze usage, trends, and customer preferences.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">4. Disclosure of Your Information</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            We may share your information with:
          </p>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
            <li>Service providers and partners who perform functions on our behalf (hosting, analytics, marketing).</li>
            <li>Law enforcement or government authorities if required by law.</li>
            <li>Our affiliates and subsidiaries for internal business purposes.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">5. Cookies and Tracking Technologies</h2>
          <p className="text-muted-foreground leading-relaxed">
            We use cookies, web beacons, and similar tracking technologies to collect usage data and enhance your experience. You can control cookie preferences through your browser settings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">6. Data Security</h2>
          <p className="text-muted-foreground leading-relaxed">
            We implement reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">7. Children’s Privacy</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our website is not intended for children under 16. We do not knowingly collect personal data from children. If you believe we have collected such information, please contact us to request deletion.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">8. Your Rights</h2>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
            <li>Access, correct, update, or delete your personal information.</li>
            <li>Opt out of marketing communications at any time.</li>
            <li>Restrict or object to our processing of your data.</li>
            <li>Lodge a complaint with a data protection authority.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">9. Third-Party Links</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our website may contain links to third-party websites. We are not responsible for their privacy practices. Please review their privacy policies separately.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">10. Changes to This Policy</h2>
          <p className="text-muted-foreground leading-relaxed">
            We may update this Privacy Policy periodically. The “Last Updated” date at the bottom indicates when changes were last made. Your continued use of the site after modifications constitutes acceptance of the revised policy.
          </p>
        </section>

        <hr className="border-muted-foreground mb-6" />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">11. Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <address className="text-muted-foreground not-italic space-y-1">
            <p><strong>Aleixo Pharma</strong></p>
            <p>Email: <a href="mailto:customercare@aleixo.in" className="text-primary underline">customercare@aleixo.in</a></p>
            <p>Phone: +91 90511 93355</p>
            <p>Address: Patna, Bihar, India</p>
          </address>
        </section>

        <p className="text-center text-sm text-muted-foreground italic">
          <strong>Last Updated: {new Date().toLocaleDateString()}</strong>
        </p>
      </div>
    </div>
  );
};

export default Privacy;
