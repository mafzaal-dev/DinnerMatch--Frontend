"use client";

import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[#F3F4F6] py-16 md:py-20 min-h-[45vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-1 items-center">
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-5xl font-bold leading-[0.95] text-[#212121] max-w-xl tracking-tighter">
            WANT TO MEET YOUR PEOPLE?
          </h1>

          <p className="text-[1.2rem] md:text-[1.2rem] text-[#424242] max-w-lg leading-tight mt-1">
            Get matched by personality for a dinner you'll never forget.
          </p>

          <div className="flex flex-col gap-4 mt-4">
            <button
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("openQuiz"));
                }
              }}
              className="bg-[#F97316] text-[#F5F5F5] px-4 py-3
                             rounded-md font-semibold text-sm  md:w-fit uppercase hover:bg-[#FF9955] transition-colors cursor-pointer"
            >
              Take the Quiz
            </button>
            <p className="text-sm text-[#757575] font-normal mb-2">
              14000+ people have taken the quiz. It only takes 2 minutes.
            </p>
          </div>

          <div className="mt-1 flex flex-col">
            <span className="text-xs text-[#757575]">As featured on:</span>
            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              <Image
                src="/enca.png"
                alt="eNCA"
                width={120}
                height={40}
                className="h-16 w-auto object-contain"
              />
              <Image
                src="/good-hope-fm.png"
                alt="Good Hope FM"
                width={120}
                height={40}
                className="h-16 w-auto object-contain"
              />
              <Image
                src="/iol.png"
                alt="IOL"
                width={80}
                height={35}
                className="h-16 w-auto object-contain"
              />
              <Image
                src="/capetalk.png"
                alt="Cape Talk"
                width={120}
                height={40}
                className="h-16 w-auto object-contain"
              />
            </div>
          </div>

          <div className="flex gap-5 mt-3">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-[1rem]"></div>
              <span className="font-semibold text-sm text-[#212121]">
                Vibe-Matched Groups
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-xl"></div>
              <span className="font-semibold text-sm text-[#212121]">
                Budget-Friendly
              </span>
            </div>
          </div>
        </div>

        <div className="relative group mt-8 md:mt-0">
          <div className="relative overflow-hidden shadow-2xl duration-500 group-hover:scale-[1.01]">
            <Image
              src="/3f338432d1b44b50402ec4605b83d5bf77c831e3.png"
              alt="Dinner Party"
              width={1900}
              height={900}
              className="w-full rounded-xl h-auto object-cover"
              priority
            />
          </div>
          <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-orange-100 rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


