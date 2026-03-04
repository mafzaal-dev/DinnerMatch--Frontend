"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/context/AuthContext';

const Footer = () => {
    const { isAuthenticated } = useAuthContext();
    const router = useRouter();

    return (
        <div className="flex flex-col">
            <section className="bg-[#FFFBF7] py-14 px-5">
                <div className="max-w-5xl mx-auto bg-white rounded-lg md:rounded-xl p-12 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.04)] text-center border border-[#F3F4F6]">
                    <div className="inline-block bg-[#FFFAE6] text-[#FFAA55] text-sm font-semibold py-3 px-4 rounded-full">
                        Limited Spots Available
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-[#212121] mt-6">
                        Start Your Journey <span className="text-[#FFAA55]">Today</span>
                    </h2>

                    <p className="text-[#757575] text-[1rem]  max-w-2xl mx-auto mt-6">
                        Imagine showing up to dinner every week with 5 interesting strangers who just get you. No awkward small talk — just good vibes, shared laughs, and food that fits your budget.
                    </p>

                    <p className="font-semibold text-[#424242] mt-6 text-base">
                        Spaces are limited — take the quiz to secure your spot.
                    </p>

                    <div className="flex flex-wrap md:justify-center max-w-[180px] mx-auto md:max-w-none gap-2 md:gap-4 mt-6">
                        <div className="flex items-center gap-2 text-sm text-[#757575]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F97315]"></span>
                            Personality Matching
                        </div>
                        <div className="flex items-center gap-2 text-sm text-[#757575]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F97315]"></span>
                            Budget Considerate
                        </div>
                        <div className="flex items-center gap-2 text-sm text-[#757575]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F97315]"></span>
                            Cape Town Restaurants
                        </div>
                    </div>

                    <button
                        onClick={() => {
                            if (isAuthenticated) {
                                router.push("/available-dinners");
                            } else {
                                if (typeof window !== "undefined") {
                                    window.dispatchEvent(new CustomEvent("openQuiz"));
                                }
                            }
                        }}
                        className="bg-[#FFAA55] text-white font-semibold p-4 rounded-lg md:rounded-xl text-sm transition-all flex items-center gap-2 mx-auto mt-6 uppercase"
                    >
                        {isAuthenticated ? "Available Dinners" : "Take the Quiz"}
                    </button>

                    <p className="text-xs text-[#757575] mt-6">
                        By joining, you agree to our <a href="/terms-conditions" className="underline">Terms</a> and <a href="/privacy-policy" className="underline">Privacy Policy</a>.
                    </p>
                </div>
            </section>

            <footer className="bg-white pt-14 px-5 border-t border-b border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-14">
                        <div className="flex flex-col gap-4 text-center md:text-left">
                            <div className="text-2xl font-bold text-[#212121] ">
                                DinnerMatch
                            </div>
                            <p className="text-[#757575] text-base leading-relaxed max-w-154 ">
                                Weekly dinner experiences with like-minded people in Cape Town. Carefully matched based on personality, budget, and interests.
                            </p>
                        </div>

                        <div className="flex flex-col gap-6 max-w-md md:max-w-none mx-auto">
                            <h3 className="font-bold text-[#424242] text-lg">Get in Touch</h3>
                            <div className="flex flex-col gap-4 text-sm  text-[#757575]">
                                <a href="mailto:hello@dinnermatch.co.za" className="flex items-center gap-3 hover:text-[#F97315] transition-colors group">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6" stroke="#FFAA55" stroke-width="1.5" stroke-linejoin="round" />
                                        <path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" stroke="#FFAA55" stroke-width="1.5" stroke-linejoin="round" />
                                    </svg>
                                    Hello@dinnermatch.co.za
                                </a>
                                <a href="#" className="flex items-center gap-3 hover:text-[#F97315] transition-colors group">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#FFAA55" stroke-width="1.5" stroke-linejoin="round" />
                                        <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="#FFAA55" stroke-width="1.5" />
                                        <path d="M17.5078 6.5H17.4988" stroke="#FFAA55" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    @Dinnermatch
                                </a>
                                <a href="#" className="flex items-center gap-3 hover:text-[#F97315] transition-colors group">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#FFAA55" stroke-width="1.5" stroke-linejoin="round" />
                                        <path d="M10.5359 11.0075C9.71585 10.8916 7.84666 11.0834 6.93011 12.7782C6.01355 14.4729 6.9373 16.2368 7.51374 16.9069C8.08298 17.5338 9.89226 18.721 11.8114 17.5619C12.2871 17.2746 12.8797 17.0603 13.552 14.8153L13.4738 5.98145C13.3441 6.95419 14.4186 9.23575 17.478 9.5057" stroke="#FFAA55" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    @Dinnermatch
                                </a>
                                <div className="flex items-center gap-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 18C19.2447 18.4244 20 18.9819 20 19.5925C20 20.9221 16.4183 22 12 22C7.58172 22 4 20.9221 4 19.5925C4 18.9819 4.75527 18.4244 6 18" stroke="#FFAA55" stroke-width="1.5" stroke-linecap="round" />
                                        <path d="M15 9.5C15 11.1569 13.6569 12.5 12 12.5C10.3431 12.5 9 11.1569 9 9.5C9 7.84315 10.3431 6.5 12 6.5C13.6569 6.5 15 7.84315 15 9.5Z" stroke="#FFAA55" stroke-width="1.5" />
                                        <path d="M12 2C16.0588 2 19.5 5.42803 19.5 9.5869C19.5 13.812 16.0028 16.777 12.7725 18.7932C12.5371 18.9287 12.2709 19 12 19C11.7291 19 11.4629 18.9287 11.2275 18.7932C8.00325 16.7573 4.5 13.8266 4.5 9.5869C4.5 5.42803 7.9412 2 12 2Z" stroke="#FFAA55" stroke-width="1.5" />
                                    </svg>
                                    Cape Town, South Africa
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="py-4 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-6 text-base  text-[#757575]">
                            <span>© 2026 DinnerMatch. All rights reserved.</span>
                            {/* <a href="#" className="hover:text-gray-600 transition-colors">Cancel Subscription</a> */}
                        </div>

                        <div className="flex items-center gap-4 text-gray-400">
                            <a href="#" className="hover:text-gray-600 transition-colors">
                                <svg className="size-6 fill-currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.607.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.607 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.607-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.607-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.28.058-2.152.26-2.917.557-.79.307-1.46.717-2.128 1.385-.668.667-1.078 1.338-1.385 2.128-.297.765-.499 1.637-.557 2.917-.059 1.28-.073 1.688-.073 4.947s.014 3.667.072 4.947c.058 1.28.26 2.152.557 2.917.307.79.717 1.46 1.385 2.128.667.668 1.338 1.078 2.128 1.385.765.297 1.637.499 2.917.557 1.28.059 1.688.073 4.947.073s3.667-.014 4.947-.072c1.28-.058 2.152-.26 2.917-.557.79-.307 1.46-.717 2.128-1.385.668-.667 1.078-1.338 1.385-2.128.297-.765.499-1.637.557-2.917.059-1.28.073-1.688.073-4.947s-.014-3.667-.072-4.947c-.058-1.28-.26-2.152-.557-2.917-.307-.79-.717-1.46-1.385-2.128-.667-.668-1.338-1.078-2.128-1.385-.765-.297-1.637-.499-2.917-.557-1.28-.059-1.688-.073-4.947-.073z" /><path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                            <a href="#" className="hover:text-gray-600 transition-colors">
                                <svg className="size-6 fill-currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;


