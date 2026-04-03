"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactSchema } from '@/constants/validationSchemas';

const HelpCenterPage = ({ onSubmit, onBack, isSubmitting = false }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const onFormSubmit = (data) => {
    if (onSubmit) {
      onSubmit(data);
    }
  };

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

  const toggleFAQ = (index) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#080714] p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-center relative">
          {onBack && (
            <button
              onClick={onBack}
              className="absolute left-0 text-[#F5F5F5] hover:text-[#FFAA55] transition-colors flex items-center gap-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm">Back</span>
            </button>
          )}
          
          <p className="font-bold text-center text-[#FFAA55] uppercase tracking-wide text-[32px]">HELP CENTER</p>
        </div>

        {/* Contact Form */}
        <div className="bg-[#111121] border border-[#2F3A51] rounded-lg p-6 mb-8 shadow-lg">
          <h2 className="text-xl font-bold text-[#F5F5F5] mb-6">Contact Us</h2>
          <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
           
            <div>
              <label className="block text-[#757575] font-semibold text-sm mb-2">
                Your email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                {...register('email')}
                placeholder="johnDoe@mail.com"
                className="w-full px-4 py-3 bg-[#111121] border
                 border-[#2F3A51] placeholder-[#424242]  rounded-lg text-[#F5F5F5] focus:outline-none focus:border-[#FFAA55] transition-colors"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>


            <div>
              <label className="block text-[#757575] font-semibold text-sm mb-2">
                Your name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register('name')}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 bg-[#111121] border
                  border-[#2F3A51] placeholder-[#424242]  rounded-lg text-[#F5F5F5]   focus:outline-none focus:border-[#FFAA55] transition-colors"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
              )}
            </div>


            <div>
              <label className="block text-[#757575] font-semibold text-sm mb-2">
                Reason for contacting us<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register('reason')}
                placeholder="Reason"
                className="w-full px-4 py-3 bg-[#111121] border
                 border-[#2F3A51] placeholder-[#424242] rounded-lg text-[#F5F5F5]  focus:outline-none focus:border-[#FFAA55] transition-colors"
              />
              {errors.reason && (
                <p className="text-red-500 text-xs mt-1">{errors.reason.message}</p>
              )}
            </div>


            <div>
              <label className="block text-[#757575] font-semibold text-sm mb-2">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register('subject')}
                placeholder="Brief summary of your message"
                className="w-full px-4 py-3 bg-[#111121] border
                 border-[#2F3A51] placeholder-[#424242]  rounded-lg text-[#F5F5F5]   focus:outline-none focus:border-[#FFAA55] transition-colors"
              />
              {errors.subject && (
                <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>
              )}
            </div>

            <div>
              <label className="block text-[#757575] font-semibold text-sm mb-2">
               Description<span className="text-red-500">*</span>
              </label>
              <textarea
                {...register('description')}
                placeholder="Please provide detail information about your inquiry or issue"
                className="w-full px-4 py-3 bg-[#111121] border
                 border-[#2F3A51] placeholder-[#424242]  rounded-lg text-[#F5F5F5]  focus:outline-none focus:border-[#FFAA55] transition-colors min-h-[120px]"
              />
              {errors.description && (
                <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>
              )}
            </div>

            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#FFAA55] text-[#212121] py-4 px-2 rounded-lg text-sm uppercase tracking-wide font-bold hover:bg-[#FF9955] transition-colors shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting && (
                <svg className="h-4 w-4 shrink-0 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden>
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              )}
              {isSubmitting ? "Sending…" : "Send Message"}
            </button>
          </form>
        </div>

        {/* FAQ Section */}
        <div className="bg-[#111121] border border-[#2F3A51] rounded-lg p-6 shadow-lg">
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
