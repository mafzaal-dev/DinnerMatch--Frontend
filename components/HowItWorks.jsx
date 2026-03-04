"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/context/AuthContext';

const steps = [
    {
        title: "Create Your Profile",
        description: "Fill out a brief personality assessment and let our system do the matching work for you",
        icon: (
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28Z" fill="white" />
                <g clip-path="url(#clip0_1_660)">
                    <path d="M33.3334 40V37.3333C33.3334 35.9188 32.7715 34.5623 31.7713 33.5621C30.7711 32.5619 29.4145 32 28 32H18.6667C17.2522 32 15.8957 32.5619 14.8955 33.5621C13.8953 34.5623 13.3334 35.9188 13.3334 37.3333V40" stroke="#FFAA55" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M23.3333 26.6667C26.2789 26.6667 28.6667 24.2789 28.6667 21.3333C28.6667 18.3878 26.2789 16 23.3333 16C20.3878 16 18 18.3878 18 21.3333C18 24.2789 20.3878 26.6667 23.3333 26.6667Z" stroke="#FFAA55" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M34.6666 26.6667L37.3333 29.3333L42.6666 24" stroke="#FFAA55" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_1_660">
                        <rect width="32" height="32" fill="white" transform="translate(12 12)" />
                    </clipPath>
                </defs>
            </svg>
        ),
        bgColor: "bg-[#FFF2E6]",
        textColor: "text-[#C76A00]",
    },
    {
        title: "Get Matched",
        description: "Our algorithm finds 5 compatible people for an engaging evening with meaningful conversations",
        icon: (
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28Z" fill="white" />
                <g clip-path="url(#clip0_1_668)">
                    <path d="M34.6667 40V37.3333C34.6667 35.9188 34.1048 34.5623 33.1046 33.5621C32.1044 32.5619 30.7479 32 29.3334 32H18.6667C17.2522 32 15.8957 32.5619 14.8955 33.5621C13.8953 34.5623 13.3334 35.9188 13.3334 37.3333V40" stroke="#8CBEB2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M24 26.6667C26.9455 26.6667 29.3333 24.2789 29.3333 21.3333C29.3333 18.3878 26.9455 16 24 16C21.0544 16 18.6666 18.3878 18.6666 21.3333C18.6666 24.2789 21.0544 26.6667 24 26.6667Z" stroke="#8CBEB2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M42.6666 40V37.3333C42.6657 36.1516 42.2724 35.0037 41.5484 34.0698C40.8245 33.1358 39.8108 32.4688 38.6666 32.1733" stroke="#8CBEB2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M33.3334 16.1733C34.4806 16.4671 35.4974 17.1343 36.2236 18.0698C36.9497 19.0052 37.3438 20.1558 37.3438 21.34C37.3438 22.5242 36.9497 23.6748 36.2236 24.6103C35.4974 25.5457 34.4806 26.2129 33.3334 26.5067" stroke="#8CBEB2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_1_668">
                        <rect width="32" height="32" fill="white" transform="translate(12 12)" />
                    </clipPath>
                </defs>
            </svg>
        ),
        bgColor: "bg-[#F2F8F6]",
        textColor: "text-[#2A6258]",
    },
    {
        title: "Restaurant Selected",
        description: "We handle all the details including venue selection, reservations, and personalized group insights",
        icon: (
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28Z" fill="white" />
                <g clip-path="url(#clip0_1_677)">
                    <path d="M40 25.3333C40 34.6666 28 42.6666 28 42.6666C28 42.6666 16 34.6666 16 25.3333C16 22.1507 17.2643 19.0984 19.5147 16.848C21.7652 14.5975 24.8174 13.3333 28 13.3333C31.1826 13.3333 34.2348 14.5975 36.4853 16.848C38.7357 19.0984 40 22.1507 40 25.3333Z" stroke="#F3C1D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M28 29.3333C30.2091 29.3333 32 27.5424 32 25.3333C32 23.1241 30.2091 21.3333 28 21.3333C25.7909 21.3333 24 23.1241 24 25.3333C24 27.5424 25.7909 29.3333 28 29.3333Z" stroke="#F3C1D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_1_677">
                        <rect width="32" height="32" fill="white" transform="translate(12 12)" />
                    </clipPath>
                </defs>
            </svg>
        ),
        bgColor: "bg-[#FFF7FA]",
        textColor: "text-[#994056]",
    },
    {
        title: "Meet & Connect",
        description: "Break the ice with our conversation starters and build genuine connections with like-minded individuals",
        icon: (
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28Z" fill="white" />
                <path d="M40 32C40 32.7072 39.719 33.3855 39.219 33.8856C38.7189 34.3857 38.0406 34.6667 37.3333 34.6667H21.3333L16 40V18.6667C16 17.9594 16.281 17.2811 16.781 16.781C17.2811 16.281 17.9594 16 18.6667 16H37.3333C38.0406 16 38.7189 16.281 39.219 16.781C39.719 17.2811 40 17.9594 40 18.6667V32Z" stroke="#A6D8D4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        bgColor: "bg-[#F7FBFB]",
        textColor: "text-[#3D7B77]",
    },
    {
        title: "Rate Experience",
        description: "Provide feedback on your experience and choose who to keep in touch with for future meetups",
        icon: (
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28Z" fill="white" />
                <path d="M21.3333 26.6667L26.6666 14.6667C27.7275 14.6667 28.7449 15.0882 29.4951 15.8383C30.2452 16.5885 30.6666 17.6059 30.6666 18.6667V24.0001H38.2133C38.5998 23.9957 38.9827 24.0754 39.3354 24.2337C39.6881 24.392 40.0021 24.6251 40.2558 24.9168C40.5094 25.2085 40.6966 25.5518 40.8044 25.9231C40.9122 26.2943 40.938 26.6846 40.88 27.0667L39.04 39.0667C38.9435 39.7026 38.6205 40.2822 38.1305 40.6988C37.6405 41.1153 37.0164 41.3407 36.3733 41.3334H21.3333M21.3333 26.6667V41.3334M21.3333 26.6667H17.3333C16.626 26.6667 15.9478 26.9477 15.4477 27.4478C14.9476 27.9479 14.6666 28.6262 14.6666 29.3334V38.6667C14.6666 39.374 14.9476 40.0523 15.4477 40.5524C15.9478 41.0525 16.626 41.3334 17.3333 41.3334H21.3333" stroke="#FFDDA1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
        bgColor: "bg-[#FFF8ED]",
        textColor: "text-[#9E7B38]",
    }
];

const HowItWorks = () => {
    const { isAuthenticated } = useAuthContext();
    const router = useRouter();

    return (
        <section id="how-it-works" className="bg-white py-8 md:py-20 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#212121] ">How Does It Work?</h2>
                <p className="text-[#424242] mt-4 text-lg ">
                    It's dining, made simple. We handle everything, you just show up!
                </p>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-6 mb-7">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`${step.bgColor} py-5 px-6 rounded-lg md:rounded-xl flex flex-col gap-5 items-center text-center transition-all hover:shadow-lg duration-300`}
                        >
                            <div className={`${step.iconColor}`}>{step.icon}</div>
                            <h3 className={`font-bold text-xl ${step.textColor}`}>{step.title}</h3>
                            <p className={` text-base leading-relaxed ${step.textColor}`}>
                                {step.description}
                            </p>
                        </div>
                    ))}
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
                    className="bg-[#FFAA55] text-[#F5F5F5] px-4 py-4 font-semibold rounded-lg text-sm hover:bg-[#FF9955] transition-all flex items-center gap-2 mx-auto uppercase"
                >
                    {isAuthenticated ? "Available Dinners" : "Take the Quiz"}
                </button>
            </div>
        </section>
    );
};

export default HowItWorks;


