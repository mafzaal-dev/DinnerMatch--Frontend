import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className="flex flex-col">
            <section className="bg-[#FFFBF7] py-20 px-6">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl p-12 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.04)] text-center border border-[#F3F4F6]">
                    <div className="inline-block bg-[#FFF7ED] text-[#F97315] text-[0.7rem] font-bold px-4 py-1.5 rounded-full mb-8 uppercase tracking-widest">
                        Limited Spots Available
                    </div>

                    <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#111827] mb-6 tracking-tight">
                        Start Your Journey <span className="text-[#F97315]">Today</span>
                    </h2>

                    <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8 font-medium">
                        Imagine showing up to dinner every week with 5 interesting strangers who just get you. No awkward small talk — just good vibes, shared laughs, and food that fits your budget.
                    </p>

                    <p className="font-bold text-[#111827] mb-10 text-lg">
                        Spaces are limited — take the quiz to secure your spot.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12 text-sm font-semibold text-gray-500">
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F97315]"></span>
                            Personality Matching
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F97315]"></span>
                            Budget Considerate
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F97315]"></span>
                            Cape Town Restaurants
                        </div>
                    </div>

                    <button className="bg-[#F97315] text-white px-10 py-4 rounded-full font-bold text-sm tracking-wide transition-all flex items-center gap-2 mx-auto mb-6 uppercase">
                        Take the Quiz <span className="text-lg">→</span>
                    </button>

                    <p className="text-[0.7rem] text-gray-400 font-medium">
                        By joining, you agree to our <a href="/terms-conditions" className="underline">Terms</a> and <a href="/privacy-policy" className="underline">Privacy Policy</a>.
                    </p>
                </div>
            </section>

            <footer className="bg-white pt-20 pb-10 px-6 border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                        <div className="flex flex-col gap-6">
                            <div className="text-2xl font-bold text-[#111827] tracking-tight">
                                DinnerMatch
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-medium">
                                Weekly dinner experiences with like-minded people in Cape Town. Carefully matched based on personality, budget, and interests.
                            </p>
                        </div>

                        <div className="flex flex-col gap-6">
                            <h3 className="font-bold text-[#111827] text-sm uppercase tracking-wider">Get in Touch</h3>
                            <div className="flex flex-col gap-5 text-sm font-medium text-gray-500">
                                <a href="mailto:hello@dinnermatch.co.za" className="flex items-center gap-3 hover:text-[#F97315] transition-colors group">
                                    <svg className="w-4 h-4 text-gray-400 group-hover:text-[#F97315] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    hello@dinnermatch.co.za
                                </a>
                                <a href="#" className="flex items-center gap-3 hover:text-[#F97315] transition-colors group">
                                    <svg className="w-4 h-4 text-gray-400 group-hover:text-[#F97315] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 011.664.89l.812 1.22A2 2 0 0010.07 10H14a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13V9a2 2 0 00-2-2H5" />
                                    </svg>
                                    @dinnermatch
                                </a>
                                <a href="#" className="flex items-center gap-3 hover:text-[#F97315] transition-colors group">
                                    <svg className="w-4 h-4 text-gray-400 group-hover:text-[#F97315] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
                                    </svg>
                                    @dinnermatch
                                </a>
                                <div className="flex items-center gap-3">
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    Cape Town, South Africa
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-6 text-[0.7rem] font-medium text-gray-400">
                            <span>© 2025 DinnerMatch. All rights reserved.</span>
                            <a href="#" className="hover:text-gray-600 transition-colors">Cancel Subscription</a>
                        </div>

                        <div className="flex items-center gap-4 text-gray-400">
                            <a href="#" className="hover:text-gray-600 transition-colors">
                                <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.607.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.607 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.607-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.607-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.28.058-2.152.26-2.917.557-.79.307-1.46.717-2.128 1.385-.668.667-1.078 1.338-1.385 2.128-.297.765-.499 1.637-.557 2.917-.059 1.28-.073 1.688-.073 4.947s.014 3.667.072 4.947c.058 1.28.26 2.152.557 2.917.307.79.717 1.46 1.385 2.128.667.668 1.338 1.078 2.128 1.385.765.297 1.637.499 2.917.557 1.28.059 1.688.073 4.947.073s3.667-.014 4.947-.072c1.28-.058 2.152-.26 2.917-.557.79-.307 1.46-.717 2.128-1.385.668-.667 1.078-1.338 1.385-2.128.297-.765.499-1.637.557-2.917.059-1.28.073-1.688.073-4.947s-.014-3.667-.072-4.947c-.058-1.28-.26-2.152-.557-2.917-.307-.79-.717-1.46-1.385-2.128-.667-.668-1.338-1.078-2.128-1.385-.765-.297-1.637-.499-2.917-.557-1.28-.059-1.688-.073-4.947-.073z" /><path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                            <a href="#" className="hover:text-gray-600 transition-colors">
                                <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
