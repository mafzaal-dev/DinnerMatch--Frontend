"use client";
import React, { useState } from 'react';

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

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="bg-[#F9FAFB] py-14 px-5">
            <div className="max-w-3xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-[#212121]">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-[#424242] text-lg mt-4">
                        Get answers to the most common questions about DinnerMatch
                    </p>
                </div>

                <div className="space-y-3 mt-5 md:mt-10">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-md shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-gray-100/50 overflow-hidden transition-all duration-300"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50/50 transition-colors"
                            >
                                <span className="font-semibold text-[#424242] text-base">
                                    {item.question}
                                </span>
                                <svg
                                    className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="px-8 pb-8 text-gray-600 leading-relaxed text-[1rem]">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;


