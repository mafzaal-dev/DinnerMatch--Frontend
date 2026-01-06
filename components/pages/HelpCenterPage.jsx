"use client";

import React, { useState } from 'react';

const HelpCenterPage = ({ onSubmit, onBack }) => {
  const [formData, setFormData] = useState({
    email:'',
    subject: '',
    message: '',
    description:'',
    reason:''
  });

  const faqData = [
    {
      question: "Is this a dating app?",
      answer: "No, DinnerMatch is not a dating app. It's a social platform designed to help people make new friends and have meaningful conversations over dinner. While people do sometimes form romantic connections, our primary focus is on platonic social matching."
    },
    {
      question: "Do I have to talk to strangers before the dinner?",
      answer: "Nope! One of the best parts of DinnerMatch is the surprise. You'll receive the restaurant details and a little bit about your group's 'vibe', but you won't chat with them until you're all sitting around the table together."
    },
    {
      question: "How much does it cost?",
      answer: "We offer different subscription tiers to suit your social life. Each tier covers the matching service and coordination. You simply pay for your own meal and drinks at the restaurant."
    },
    {
      question: "Why is DinnerMatch a subscription now?",
      answer: "Moving to a subscription model allows us to invest more in our matching algorithm and expand to more restaurants and cities, ensuring you get the best possible experience every single time."
    },
    {
      question: "What if I'm shy or introverted?",
      answer: "You're in good company! Many of our members are introverts. We match groups based on personality types to ensure a comfortable environment, and our conversation starters help break the ice naturally."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription at any time through your account settings. There are no long-term contracts or cancellation fees."
    }
  ];

  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  const toggleFAQ = (index) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

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
              <span className='text-sm'>Back</span>
            </button>
          )}
          
          <p className="font-bold text-center text-[#FFAA55] uppercase tracking-wide text-[32px]">HELP CENTER</p>
        </div>

        {/* Contact Form */}
        <div className="bg-[#111121] border border-gray-700 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-[#F5F5F5] mb-6">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
           
            <div>
              <label className="block text-[#E0E0E0] text-sm mb-2">
                Your email address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="johnDoe@mail.com"
                className="w-full px-4 py-3 bg-[#0F1419] border
                 border-[#2F3A51] placeholder-[#424242]  rounded-lg text-[#F5F5F5] focus:outline-none focus:border-[#FFAA55]"
                required
              />
            </div>


            <div>
              <label className="block text-[#E0E0E0] text-sm mb-2">
                Your name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 bg-[#0F1419] border
                  border-[#2F3A51] placeholder-[#424242]  rounded-lg text-[#F5F5F5]   focus:outline-none focus:border-[#FFAA55]"
                required
              />
            </div>


            <div>
              <label className="block text-[#E0E0E0] text-sm mb-2">
                Reason for contacting us<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.reason}
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                placeholder="Reason"
                className="w-full px-4 py-3 bg-[#0F1419] border
                 border-[#2F3A51] placeholder-[#424242] rounded-lg text-[#F5F5F5]  focus:outline-none focus:border-[#FFAA55]"
                required
              />
            </div>


            <div>
              <label className="block text-[#E0E0E0] text-sm mb-2">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Brief summary of your message"
                className="w-full px-4 py-3 bg-[#0F1419] border
                 border-[#2F3A51] placeholder-[#424242]  rounded-lg text-[#F5F5F5]   focus:outline-none focus:border-[#FFAA55]"
                required
              />
            </div>

            <div>
              <label className="block text-[#E0E0E0] text-sm mb-2">
               Description<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Please provide detail information about your inquiry or issue"
                className="w-full px-4 py-3 bg-[#0F1419] border
                 border-[#2F3A51] placeholder-[#424242]  rounded-lg text-[#F5F5F5]  focus:outline-none focus:border-[#FFAA55]"
                required
              />
            </div>

            
            <button
              type="submit"
              className="w-full bg-[#FFAA55] text-[#212121] py-4 px-2 rounded-lg 
               text-sm uppercase tracking-wide hover:bg-[#FF9955] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* FAQ Section */}
        <div className="bg-[#111121] border border-gray-600 rounded-lg p-6">
          <h2 className="text-xl font-bold text-[#F5F5F5] mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b border-[#2F3A51] last:border-0 pb-3 last:pb-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left flex items-center justify-between py-3"
                >
                  <span className="text-[#F5F5F5] font-medium">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-[#E0E0E0] transition-transform ${
                      activeFaqIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeFaqIndex === index && (
                  <div className="pb-3">
                    <p className="text-[#E0E0E0] text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenterPage;
