"use client";

import React from 'react';

const PrivacyPolicyPage = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#080814] p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          {onBack && (
            <button
              onClick={onBack}
              className="text-[#E0E0E0] hover:text-[#F5F5F5] transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back</span>
            </button>
          )}
          <h1 className="text-3xl font-bold text-[#FFAA55] flex-1 text-center">Privacy Policy</h1>
          <div className="w-20"></div> {/* Spacer for centering */}
        </div>

        {/* Content */}
        <div className="bg-[#111121] border border-white rounded-lg p-6 md:p-8 space-y-6">
          {/* Last Updated */}
          <p className="text-[#E0E0E0] text-sm">Last Updated: March 2025</p>

          {/* Introductory Paragraph */}
          <p className="text-[#E0E0E0] leading-relaxed">
            This Privacy Policy describes how DinnersMatch ("we," "us," or "our") collects, uses, stores, and protects your personal data. It also outlines your rights and choices regarding your information.
          </p>

          {/* Agreement Statement */}
          <p className="text-[#E0E0E0] leading-relaxed">
            By using the DinnersMatch app or website, you agree to the terms of this Privacy Policy and our Terms & Conditions.
          </p>

          {/* Section 1: Who We Are */}
          <section>
            <h2 className="text-xl font-bold text-[#F5F5F5] mb-3">1. Who We Are</h2>
            <p className="text-[#E0E0E0] leading-relaxed">
              DinnersMatch is a platform that organizes group dinners to help people connect socially. The platform is operated by the DinnersMatch team. For all data-related inquiries, please contact us through the Help Center in the app.
            </p>
          </section>

          {/* Section 2: What Data We Collect */}
          <section>
            <h2 className="text-xl font-bold text-[#F5F5F5] mb-3">2. What Data We Collect</h2>
            <p className="text-[#E0E0E0] leading-relaxed mb-2">
              We collect the following types of personal information:
            </p>
            <ul className="list-disc list-inside text-[#E0E0E0] space-y-2 ml-4">
              <li>Name, email address, and phone number</li>
              <li>Date of birth and gender</li>
              <li>Dining preferences and dietary restrictions</li>
              <li>Payment information (processed securely through third-party providers)</li>
              <li>Profile information and photos</li>
              <li>Usage data and interaction with our platform</li>
            </ul>
          </section>

          {/* Section 3: How We Collect Data */}
          <section>
            <h2 className="text-xl font-bold text-[#F5F5F5] mb-3">3. How We Collect Data</h2>
            <p className="text-[#E0E0E0] leading-relaxed">
              We collect data when you register for an account, complete your profile, make bookings, interact with our platform, or communicate with us. We may also collect data through cookies and similar tracking technologies.
            </p>
          </section>

          {/* Section 4: Why We Collect Your Data */}
          <section>
            <h2 className="text-xl font-bold text-[#F5F5F5] mb-3">4. Why We Collect Your Data</h2>
            <p className="text-[#E0E0E0] leading-relaxed">
              We use your data to provide and improve our services, match you with compatible dining partners, process payments, send important updates, and ensure the safety and security of our platform.
            </p>
          </section>

          {/* Section 5: Legal Basis for Processing */}
          <section>
            <h2 className="text-xl font-bold text-[#F5F5F5] mb-3">5. Legal Basis for Processing</h2>
            <p className="text-[#E0E0E0] leading-relaxed">
              We process your personal data based on your consent, contractual necessity, legal obligations, and legitimate interests in providing and improving our services.
            </p>
          </section>

          {/* Section 6: How Long We Keep Your Data */}
          <section>
            <h2 className="text-xl font-bold text-[#F5F5F5] mb-3">6. How Long We Keep Your Data</h2>
            <p className="text-[#E0E0E0] leading-relaxed">
              We retain your personal data for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements.
            </p>
          </section>

          {/* Section 7: Who We Share Your Data With */}
          <section>
            <h2 className="text-xl font-bold text-[#F5F5F5] mb-3">7. Who We Share Your Data With</h2>
            <p className="text-[#E0E0E0] leading-relaxed">
              We may share your data with service providers, business partners, and in certain legal circumstances. We do not sell your personal data to third parties.
            </p>
          </section>

          {/* Section 8: How We Protect Your Data */}
          <section>
            <h2 className="text-xl font-bold text-[#F5F5F5] mb-3">8. How We Protect Your Data</h2>
            <p className="text-[#E0E0E0] leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          {/* Section 9: Your Rights */}
          <section>
            <h2 className="text-xl font-bold text-[#F5F5F5] mb-3">9. Your Rights</h2>
            <p className="text-[#E0E0E0] leading-relaxed mb-2">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-[#E0E0E0] space-y-2 ml-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
            </ul>
          </section>

          {/* Section 10: International Transfers */}
          <section>
            <h2 className="text-xl font-bold text-[#F5F5F5] mb-3">10. International Transfers</h2>
            <p className="text-[#E0E0E0] leading-relaxed">
              Your data may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers.
            </p>
          </section>

          {/* Section 11: Changes to This Policy */}
          <section>
            <h2 className="text-xl font-bold text-[#F5F5F5] mb-3">11. Changes to This Policy</h2>
            <p className="text-[#E0E0E0] leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.
            </p>
          </section>

          {/* Section 12: Cookies and Tracking */}
          <section>
            <h2 className="text-xl font-bold text-[#F5F5F5] mb-3">12. Cookies and Tracking</h2>
            <p className="text-[#E0E0E0] leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our platform and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          {/* Section 13: Contact Us */}
          <section>
            <h2 className="text-xl font-bold text-[#F5F5F5] mb-3">13. Contact Us</h2>
            <p className="text-[#E0E0E0] leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us through the Help Center in the app.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
