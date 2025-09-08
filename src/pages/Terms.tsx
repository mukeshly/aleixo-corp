import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-10 text-center">Terms of Service</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground leading-relaxed">
            By accessing or using the Aleixo Pharma website (“Site”), you agree to be bound by these Terms of Service (“Terms”). If you do not agree to these Terms, you must not use the Site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">2. Use of the Site</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            You may use this Site for lawful purposes only. You agree not to post or transmit any unlawful, harmful, or malicious content.
          </p>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
            <li>Do not attempt to gain unauthorized access to any portion of the Site.</li>
            <li>Do not interfere with the security or proper functioning of the Site.</li>
            <li>Do not use the Site to upload or distribute viruses or other malicious code.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">3. Intellectual Property</h2>
          <p className="text-muted-foreground leading-relaxed">
            All content on this Site, including text, graphics, logos, images, and software, is owned by Aleixo Pharma or its licensors and is protected by applicable copyright and trademark laws. You may not reproduce, distribute, or create derivative works without express written permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">4. Disclaimers and Limitation of Liability</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            The information on this Site is provided “as is” and “as available.” Aleixo Pharma makes no warranties or representations regarding the accuracy, completeness, or reliability of the content.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Aleixo Pharma and its affiliates will not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of the Site or reliance on any content.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">5. Privacy</h2>
          <p className="text-muted-foreground leading-relaxed">
            Your use of the Site is also governed by our <a href="/privacy" className="text-primary underline">Privacy Policy</a>, which explains how we collect, use, and protect your personal information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">6. Third-Party Links</h2>
          <p className="text-muted-foreground leading-relaxed">
            The Site may contain links to third-party websites. Aleixo Pharma does not endorse or control these sites and is not responsible for their content or practices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">7. Modifications to Terms</h2>
          <p className="text-muted-foreground leading-relaxed">
            We reserve the right to update or modify these Terms at any time. The “Last Updated” date at the bottom of this page indicates when the Terms were last revised. Continued use of the Site after changes constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">8. Governing Law</h2>
          <p className="text-muted-foreground leading-relaxed">
            These Terms are governed by the laws of India. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Patna, Bihar, India.
          </p>
        </section>

        <hr className="border-muted-foreground mb-6" />

        <p className="text-center text-sm text-muted-foreground italic">
          <strong>Last Updated: {new Date().toLocaleDateString()}</strong>
        </p>
      </div>
    </div>
  );
};

export default Terms;
