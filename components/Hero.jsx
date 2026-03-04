"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext";

const Hero = () => {
  const { isAuthenticated } = useAuthContext();
  const router = useRouter();

  return (
    <section className="bg-[#F3F4F6] py-8 md:py-20 min-h-[45vh] flex items-center">
      <div className="max-w-7xl mx-auto px-5 md:px-6 grid md:grid-cols-2 gap-1 items-center">
        <div className="flex flex-col">
          <h1 className="text-center md:text-left text-3xl md:text-5xl font-bold leading-[0.95] text-[#212121] max-w-xl tracking-tighter">
            WANT TO MEET YOUR PEOPLE?
          </h1>

          <p className="text-center md:text-left text-[1.2rem] md:text-[1.2rem] text-[#424242] max-w-lg leading-tight mt-4">
            Get matched by personality for a dinner you'll never forget.
          </p>

          <div className="flex flex-col gap-5 mt-5">
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
              className="bg-[#F97316] text-[#F5F5F5] px-4 py-3 rounded-md font-semibold text-sm md:w-fit uppercase hover:bg-[#FF9955] transition-colors cursor-pointer"
            >
              {isAuthenticated ? "Available Dinners" : "Take the Quiz"}
            </button>
            <p className="text-center md:text-left text-sm text-[#757575] font-normal">
              14000+ people have taken the quiz. It only takes 2 minutes.
            </p>
          </div>

          <div className="mt-5 flex flex-col">
            <span className="text-center md:text-left text-xs text-[#757575]">As featured on:</span>
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

          <div className="flex gap-3 mt-5">
            <div className="flex items-center gap-3">
              <Image
                src="/vibe-matched.svg"
                alt=""
                width={34}
                height={34}
                className=" object-contain shrink-0"
              />
              <span className="font-semibold text-sm text-[#212121]">
                Vibe-Matched Groups
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/budget-friendly.svg"
                alt=""
                width={34}
                height={34}
                className=" object-contain shrink-0"
              />
              <span className="font-semibold text-sm text-[#212121]">
                Budget-Friendly
              </span>
            </div>
          </div>
        </div>

        <div className="relative group mt-4 md:mt-0">
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
