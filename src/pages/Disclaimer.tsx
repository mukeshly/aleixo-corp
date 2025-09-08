import React from 'react';

const Disclaimer: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-10 text-center">Medical Disclaimer</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Important Medical Information</h2>
          <p className="text-muted-foreground leading-relaxed">
            <strong>This website is maintained by Aleixo Pharma as a service to healthcare professionals, patients, and the general public. Please read this medical disclaimer carefully before using any information on this website.</strong>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">General Disclaimer</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            The information provided on this website is for <strong>informational and educational purposes only</strong> and should <strong>not be considered as medical advice, diagnosis, or treatment recommendations</strong>. This information is not intended to replace or substitute professional medical consultation, diagnosis, or treatment by qualified healthcare providers.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <strong>Always seek the advice of your physician or other qualified healthcare provider</strong> with any questions you may have regarding a medical condition, treatment options, or medication. Never disregard professional medical advice or delay seeking medical treatment because of information you have read on this website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Product Information</h2>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
            <li>All product information provided on this website is intended as a <strong>brief summary</strong> for general reference only.</li>
            <li>Product availability, indications, contraindications, dosing, and regulatory status may vary between countries and regions.</li>
            <li><strong>Not all products or indications mentioned may be licensed or available in your country.</strong></li>
            <li>For specific product information, always consult the <strong>approved package insert, prescribing information,</strong> or <strong>Summary of Product Characteristics (SmPC)</strong> for your region.</li>
            <li>Product information may be subject to change without prior notice.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Regulatory Compliance</h2>
          <p className="text-muted-foreground leading-relaxed">
            This website and its contents are designed to comply with <strong>Indian laws and regulations</strong>, including the <strong>Drugs and Cosmetics Act, 1940</strong> and rules thereunder, and guidelines issued by the <strong>Central Drugs Standard Control Organization (CDSCO)</strong> and <strong>Drugs Controller General of India (DCGI)</strong>. While this website may be accessible from other countries, it is primarily intended for <strong>Indian residents</strong> and healthcare professionals practicing in India.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">No Doctor-Patient Relationship</h2>
          <p className="text-muted-foreground leading-relaxed">
            <strong>Use of this website does not create or establish a doctor-patient relationship</strong> between you and Aleixo Pharma, its employees, or affiliates. This website is not intended to provide personalized medical advice or treatment recommendations for individual cases.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Limitations and Warnings</h2>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
            <li><strong>Do not use this information for self-diagnosis or self-medication.</strong></li>
            <li><strong>Emergency situations:</strong> If you believe you have a medical emergency, call your doctor or emergency services immediately.</li>
            <li><strong>Medication changes:</strong> Do not start, stop, or change any prescribed medication without consulting your healthcare provider.</li>
            <li><strong>Allergies and interactions:</strong> Always inform your healthcare provider about all medications, supplements, and health conditions before starting any new treatment.</li>
            <li><strong>Individual results may vary:</strong> Treatment outcomes and medication effects can differ significantly between individuals.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Third-Party Content and Links</h2>
          <p className="text-muted-foreground leading-relaxed">
            This website may contain links to third-party websites or reference third-party information. Aleixo Pharma does not endorse, control, or assume responsibility for the content, accuracy, or reliability of any third-party websites or information. We encourage you to review the terms and privacy policies of any third-party sites you visit.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Accuracy and Updates</h2>
          <p className="text-muted-foreground leading-relaxed">
            While Aleixo Pharma strives to provide accurate and up-to-date information, we make <strong>no representations or warranties regarding the completeness, accuracy, reliability, or timeliness</strong> of the information on this website. Medical information and product details are subject to change, and we reserve the right to update or modify content without prior notice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Limitation of Liability</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            <strong>Aleixo Pharma, its officers, directors, employees, agents, and affiliates shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages</strong> arising from or related to your use of this website or reliance on any information contained herein, including but not limited to:
          </p>
          <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
            <li>Personal injury or adverse health effects</li>
            <li>Loss of data or business interruption</li>
            <li>Any decision made based on website content</li>
            <li>Technical difficulties or website unavailability</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Intellectual Property</h2>
          <p className="text-muted-foreground leading-relaxed">
            All content on this website, including text, graphics, logos, images, and software, is the property of Aleixo Pharma and is protected by copyright and other intellectual property laws. Unauthorized reproduction, distribution, or commercial use is prohibited.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Privacy and Data Protection</h2>
          <p className="text-muted-foreground leading-relaxed">
            Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information in accordance with applicable data protection laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Governing Law</h2>
          <p className="text-muted-foreground leading-relaxed">
            This disclaimer and your use of this website are governed by the <strong>laws of India</strong>. Any disputes arising from the use of this website shall be subject to the <strong>exclusive jurisdiction of the courts in [City], India</strong>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Contact Information</h2>
          <p className="text-muted-foreground leading-relaxed mb-2">
            If you have questions about this disclaimer or need medical information about our products, please contact:
          </p>
          <address className="text-muted-foreground not-italic space-y-1">
            <p><strong>Aleixo Pharma</strong></p>
            <p>Email: <a href="mailto:customercare@aleixo.in" className="text-primary underline">customercare@aleixo.in</a></p>
            <p>Phone: +91 90511 93355</p>
            <p>Address: Patna, Bihar, India</p>
          </address>
        </section>

        <hr className="border-muted-foreground mb-6" />

        <p className="text-center text-sm text-muted-foreground italic">
          <strong>Last Updated: {new Date().toLocaleDateString()}</strong>
        </p>
        <p className="text-center text-sm text-muted-foreground italic mt-2">
          By using this website, you acknowledge that you have read, understood, and agree to be bound by the terms of this medical disclaimer.
        </p>

      </div>
    </div>
  );
};

export default Disclaimer;
