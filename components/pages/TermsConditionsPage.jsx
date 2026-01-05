"use client";

import React from 'react';

const TermsConditionsPage = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#080814] p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          {onBack && (
            <button
              onClick={onBack}
              className="text-[#E0E0E0] hover:text-[#F5F5F5] transition-colors mb-4 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back</span>
            </button>
          )}
          <h1 className="text-3xl font-bold text-[#F5F5F5] mb-2">Terms & Conditions</h1>
          <p className="text-[#E0E0E0] text-sm">Last updated: December 2024</p>
        </div>

        {/* Content */}
        <div className="bg-[#111121] border border-white rounded-lg p-6 md:p-8 space-y-6">
          <section>
            <h2 className="text-xl font-bold text-[#F5F5F5] mb-3">1. Acceptance of Terms</h2>
            <p className="text-[#E0E0E0] leading-relaxed">
              By accessing and using DinnersMatch, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#F5F5F5] mb-3">2. Description of Service</h2>
            <p className="text-[#E0E0E0] leading-relaxed">
              DinnersMatch is a social dining platform that connects individuals for group dining experiences. We facilitate matches between users based on compatibility and preferences.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#F5F5F5] mb-3">3. User Accounts</h2>
            <p className="text-[#E0E0E0] leading-relaxed mb-2">
              To use our service, you must:
            </p>
            <ul className="list-disc list-inside text-[#E0E0E0] space-y-2 ml-4">
              <li>Be at least 18 years old</li>
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account</li>
              <li>Be responsible for all activities under your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#F5F5F5] mb-3">4. Subscriptions and Payments</h2>
            <p className="text-[#E0E0E0] leading-relaxed">
              Subscriptions are billed in advance on a monthly or annual basis. You may cancel your subscription at any time, but refunds are subject to our refund policy. Single dinner tickets are non-refundable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#F5F5F5] mb-3">5. User Conduct</h2>
            <p className="text-[#E0E0E0] leading-relaxed mb-2">
              You agree to:
            </p>
            <ul className="list-disc list-inside text-[#E0E0E0] space-y-2 ml-4">
              <li>Treat all members with respect and kindness</li>
              <li>Not engage in harassment, discrimination, or inappropriate behavior</li>
              <li>Attend confirmed dinner reservations or cancel with appropriate notice</li>
              <li>Not share personal contact information before meeting in person</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#F5F5F5] mb-3">6. Cancellation and Refunds</h2>
            <p className="text-[#E0E0E0] leading-relaxed">
              You may cancel your subscription at any time. Cancellations take effect at the end of the current billing period. Refunds for unused portions of subscriptions are not provided unless required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#F5F5F5] mb-3">7. Limitation of Liability</h2>
            <p className="text-[#E0E0E0] leading-relaxed">
              DinnersMatch is not liable for any interactions between users, the quality of restaurants, or any incidents that occur during dinners. Users participate at their own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#F5F5F5] mb-3">8. Intellectual Property</h2>
            <p className="text-[#E0E0E0] leading-relaxed">
              All content on DinnersMatch, including text, graphics, logos, and software, is the property of DinnersMatch and is protected by copyright and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#F5F5F5] mb-3">9. Privacy</h2>
            <p className="text-[#E0E0E0] leading-relaxed">
              Your use of DinnersMatch is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#F5F5F5] mb-3">10. Termination</h2>
            <p className="text-[#E0E0E0] leading-relaxed">
              We reserve the right to terminate or suspend your account at any time for violations of these terms or for any other reason we deem necessary.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#F5F5F5] mb-3">11. Changes to Terms</h2>
            <p className="text-[#E0E0E0] leading-relaxed">
              We reserve the right to modify these terms at any time. We will notify users of any material changes. Continued use of the service constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#F5F5F5] mb-3">12. Contact Information</h2>
            <p className="text-[#E0E0E0] leading-relaxed">
              If you have any questions about these Terms & Conditions, please contact us at support@dinnersmatch.com or through our Help Center.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditionsPage;

