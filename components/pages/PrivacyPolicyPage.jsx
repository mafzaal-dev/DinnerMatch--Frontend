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
        <div className="bg-[#111121] border border-gray-600 rounded-lg p-6 md:p-8 space-y-6">
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
              Depending on how you interact with the DinnersMatch platform, we may collect
the followig categories of personal data:
            </p>
            <ul className="list-disc list-inside text-[#E0E0E0] space-y-2 ml-4">
              <li>Contact information: Name, email address, phone number</li>
              <li>Profile data: Age, gender, location, interests, dietary preferences, personality
traits and profile photo.</li>
              <li>Usage data: IP address, device type, operating system, browser type, time
spent on the platform, pages visited, and other usage information.</li>
              <li>Transaction data: Booking details, subscription history, payment
confirmations.</li>
              <li>Feedback and compatibility data: Ratings and comments from group dinners
used to improve future matches.</li>
              <li>Communication data: Interactions with our support team or feedback
through the app.</li>
            </ul>

            <p className='text-[#F5F5F5]  text-sm mt-2'>
We do not knowingly collect data from individuals under the age of 18.</p>
          </section> 

          {/* Section 3: How We Collect Data */}
          <section>
            <h2 className="text-xl font-bold text-[#F5F5F5] mb-3">3. How We Collect Data</h2>
            <p className="text-[#E0E0E0] leading-relaxed">
              We collect data:
            </p>

            <ul className="list-disc list-inside text-[#E0E0E0] space-y-2 ml-4">
              <li>When you create an account or complete your profile</li>
              <li>When you make a booking or subscription</li>
              <li>When you use the platform and interact with features</li>
              <li>When you submit feedback or contact support</li>
              <li>Via cookies and tracking technologies (see Section 8)</li>
            </ul>
          </section>


          {/* Section 4: Why We Collect Your Data */}
          <section>
            <h2 className="text-xl font-bold text-[#F5F5F5] mb-3">4. Why We Collect Your Data</h2>
            <p className="text-[#E0E0E0] leading-relaxed">
             We use your data to:
            </p>

          <ul className="list-disc list-inside text-[#E0E0E0] space-y-2 ml-4">
            <li> Provide and improve our service</li>
            <li>Match you with compatible dinner groups</li>
              <li> Handle reservations and event logistics</li>
            <li>Personalize your experience on the platform</li>
              <li>Communicate with you (confirmations, updates, support)</li>
            <li> Comply with legal obligations</li>
            <li>Ensure platform security and prevent misuse.</li>
          </ul>
          </section>

          {/* Section 5: Legal Basis for Processing */}
          <section>
            <h2 className="text-xl font-bold text-[#F5F5F5] mb-3">5. Legal Basis for Processing</h2>
            <p className="text-[#E0E0E0] leading-relaxed">
          We rely on the following legal bases:
            </p>
     <ul className="list-disc list-inside text-[#E0E0E0] space-y-2 ml-4">
      <li>Your consent (e.g., for marketing communications)</li>
      <li>Contractual necessity (e.g., to facilitate bookings)</li>
      <li>Legitimate interests (e.g., fraud prevention, service optimization)</li>
      <li>Legal compliance (e.g., accounting obligations).</li>
     </ul>

          </section>



          {/* Section 6: How Long We Keep Your Data */}
          <section>
            <h2 className="text-xl font-bold text-[#F5F5F5] mb-3">6. How Long We Keep Your Data</h2>
            <p className="text-[#E0E0E0] leading-relaxed">
              We retain your personal data for as long as necessary to fulfill the purposes outlined in this policy:
            </p>
     <ul className="list-disc list-inside text-[#E0E0E0] space-y-2 ml-4">
      <li>Account and booking data: Retained while your account is active</li>
      <li>Feedback data: Up to 2 years for match improvement</li>
      <li> Financial and billing data: Up to 5 years for legal reasons</li>
      <li>Communication records: Up to 2 years</li>
      <li>Inactive accounts: Deleted after 2 years of inactivity, following a warning.</li>

     </ul>

          </section>


          {/* Section 7: Who We Share Your Data With */}
          <section>
            <h2 className="text-xl font-bold text-[#F5F5F5] mb-3">7. Who We Share Your Data With</h2>
            <p className="text-[#E0E0E0] leading-relaxed">
              We may share your data with:
            </p>

            <ul  className="list-disc list-inside text-[#E0E0E0] space-y-2 ml-4">
              <li>Restaurants (only what's needed to confirm reservations)</li>
              <li>Payment processors (e.g., PayFast)</li>
              <li>Customer service and tech support tools</li>
              <li>Analytics and product development services</li>
            </ul>

            <p className='text-white text-sm mt-2'>

All service providers are bound by confidentiality agreements and only use data
as instructed by DinnersMatch.</p>
          </section>

          {/* Section 8: How We Protect Your Data */}
          <section>
            <h2 className="text-xl font-bold text-[#F5F5F5] mb-3">8. How We Protect Your Data</h2>
            <p className="text-[#E0E0E0] leading-relaxed">
          We use technical and organizational safeguards such as:
            </p>

            <ul  className="list-disc list-inside text-[#E0E0E0] space-y-2 ml-4">
              <li>Encrypted data transmission</li>
              <li>Secure servers and access controls</li>
              <li>Regular audits and security testing</li>
            </ul>
            <p className='text-white text-sm mt-2'>However, no platform is 100% secure. Please keep your login credentials private
and log out when using shared devices.</p>
          </section>

          {/* Section 9: Your Rights */}
          <section>
            <h2 className="text-xl font-bold text-[#F5F5F5] mb-3">9. Your Rights</h2>
            <p className="text-[#E0E0E0] leading-relaxed mb-2">
Depending on your jurisdiction, you may have the right to:
            </p>
            <ul className="list-disc list-inside text-[#E0E0E0] space-y-2 ml-4">
              <li>Access the personal data we hold about you</li>
              <li>Correct inaccurate or outdated information</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent where processing is based on consent</li>
              <li>Object to certain processing activities</li>
              <li>Request data portability</li>
            </ul>
            <p className='text-white text-sm mt-2'>You can exercise your rights by contacting us through the Help Center in the
app.</p>
          </section>


          {/* Section 10: International Transfers */}
          <section>
            <h2 className="text-xl font-bold text-[#F5F5F5] mb-3">10. International Transfers</h2>
            <p className="text-[#E0E0E0] leading-relaxed">
            If we transfer your data outside your country, we will ensure adequate protection
through safeguards like contractual clauses or equivalent legal frameworks.
           </p>
          </section>

          {/* Section 11: Changes to This Policy */}
          <section>
            <h2 className="text-xl font-bold text-[#F5F5F5] mb-3">11. Changes to This Policy</h2>
            <p className="text-[#E0E0E0] leading-relaxed">
            We may updatet is Privacy Policy rom time to time. You wil noti le in-app
or by email of major changes. Continued use of the platform implies
acceptance of the revised policy,
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
              If you have questions about this Privacy Policy or how we handle your data,
please contact us through the Help Center in the DinnersMatch app.
            </p>
          </section>
          <p className='text-white'>Thank you for trusting DinnersMatch to help you connect with new people over
great food</p>
        </div>

        
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
