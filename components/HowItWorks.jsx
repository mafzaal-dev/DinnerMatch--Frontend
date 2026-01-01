import React from 'react';

const steps = [
    {
        title: "Create Your Profile",
        description: "Fill out a brief personality assessment and let our system do the matching work for you",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        ),
        bgColor: "bg-[#FFF5ED]",
        textColor: "text-[#C2410C]",
        iconColor: "text-[#FB923C]"
    },
    {
        title: "Get Matched",
        description: "Our algorithm finds 5 compatible people for an engaging evening with meaningful conversations",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        bgColor: "bg-[#F0F9FF]",
        textColor: "text-[#0369A1]",
        iconColor: "text-[#38BDF8]"
    },
    {
        title: "Restaurant Selected",
        description: "We handle all the details including venue selection, reservations, and personalized group insights",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        bgColor: "bg-[#FFF1F2]",
        textColor: "text-[#BE123C]",
        iconColor: "text-[#FB7185]"
    },
    {
        title: "Meet & Connect",
        description: "Break the ice with our conversation starters and build genuine connections with like-minded individuals",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
        bgColor: "bg-[#F0FDF4]",
        textColor: "text-[#15803D]",
        iconColor: "text-[#4ADE80]"
    },
    {
        title: "Rate Experience",
        description: "Provide feedback on your experience and choose who to keep in touch with for future meetups",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 10h4.704a1 1 0 01.94 1.315l-2.288 6.537A2 2 0 0115.47 19.25h-5.72a2 2 0 01-1.992-1.699l-.866-5.417a1 1 0 01.992-1.134H12a1 1 0 001-1V4.5a1.5 1.5 0 113 0V10z" />
            </svg>
        ),
        bgColor: "bg-[#FEFCE8]",
        textColor: "text-[#A16207]",
        iconColor: "text-[#FACC15]"
    }
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="bg-white py-12 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black tracking-tight">How Does It Work?</h2>
                <p className="text-gray-400 mb-16 text-lg font-medium">
                    It's dining, made simple. We handle everything, you just show up!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-16">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`${step.bgColor} p-8 rounded-2xl flex flex-col items-center text-center transition-all hover:shadow-lg duration-300`}
                        >
                            <div className={`mb-6 ${step.iconColor}`}>{step.icon}</div>
                            <h3 className={`font-bold text-lg mb-4 ${step.textColor}`}>{step.title}</h3>
                            <p className="text-gray-500 text-[0.85rem] leading-relaxed font-medium">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                <button className="bg-[#FFAA55] text-white px-8 py-3 rounded-md font-bold text-[0.85rem] tracking-wide hover:bg-[#FF9955] transition-all flex items-center gap-2 mx-auto uppercase">
                    Take the Quiz <span className="text-lg">→</span>
                </button>
            </div>
        </section>
    );
};

export default HowItWorks;
