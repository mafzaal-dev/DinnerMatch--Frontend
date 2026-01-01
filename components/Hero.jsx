"use client";

import React from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="bg-[#F3F4F6] py-8 md:py-12 min-h-[45vh] flex items-center">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col gap-5">
                    <h1 className="text-2xl md:text-5xl font-bold leading-[0.95] tracking-tighter text-black max-w-xl">
                        WANT TO MEET YOUR PEOPLE?
                    </h1>

                    <p className="text-xl md:text-[1.1rem] text-gray-800 max-w-lg font-light leading-tight">
                        Get matched by personality for a dinner you'll never forget.
                    </p>

                    <div className="flex flex-col gap-4">
                        <button 
                            onClick={() => {
                                if (typeof window !== 'undefined') {
                                    window.dispatchEvent(new CustomEvent('openQuiz'));
                                }
                            }}
                            className="bg-[#FFAA55] text-white px-6 py-3 rounded-md font-bold text-[0.8rem] tracking-wide w-fit uppercase hover:bg-[#FF9955] transition-colors cursor-pointer"
                        >
                            Take the Quiz
                        </button>
                        <p className="text-sm text-gray-500 font-medium">
                            14000+ people have taken the quiz. It only takes 2 minutes.
                        </p>
                    </div>

                    <div className="mt-1 flex flex-col gap-4">
                        <span className="text-xs text-gray-600">As featured on</span>
                        <div className="flex flex-wrap items-center gap-3 md:gap-4">
                            <Image src="/enca.png" alt="eNCA" width={120} height={40} className="h-12 w-auto object-contain" />
                            <Image src="/good-hope-fm.png" alt="Good Hope FM" width={120} height={40} className="h-12 w-auto object-contain" />
                            <Image src="/iol.png" alt="IOL" width={80} height={35} className="h-8 w-auto object-contain" />
                            <Image src="/capetalk.png" alt="Cape Talk" width={120} height={40} className="h-12 w-auto object-contain" />
                        </div>
                    </div>

                    <div className="flex gap-10 mt-2">
                        <div className="flex items-center gap-3">
                            <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-[1rem]">

                            </div>
                            <span className="font-medium text-[0.8rem] text-gray-800">Vibe-Matched Groups</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-xl">

                            </div>
                            <span className="font-medium text-[0.8rem] text-gray-800">Budget-Friendly</span>
                        </div>
                    </div>
                </div>


                <div className="relative group">
                    <div className="relative overflow-hidden shadow-2xl duration-500 group-hover:scale-[1.01]">
                        <Image
                            src="/3f338432d1b44b50402ec4605b83d5bf77c831e3.png"
                            alt="Dinner Party"
                            width={1900}
                            height={900}
                            className="w-full h-auto object-cover"
                            priority
                        />


                        <div className="absolute top-6 right-6 bg-white text-black px-4 py-2 rounded font-black text-xs shadow-xl uppercase tracking-wider">
                            Cape Town
                        </div>
                    </div>

                    <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-orange-100 rounded-2xl"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
