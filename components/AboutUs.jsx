import React from 'react';

const AboutUs = () => {
    return (
        <section id="about-us" className="bg-white py-12 px-5">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-[32px] md:text-[40px] font-bold mb-4 text-[#212121]">About Us</h2>

                <div className="space-y-4 text-[#646363] text-[1rem] md:text-base">
                    <p>
                        We started DinnerMatch because we believe great conversations should be as regular as great meals.
                        In a world where real connection often takes a backseat to swipes and screens, we wanted to create
                        something simple: a weekly dinner where you meet new people who actually get you.
                    </p>

                    <p>
                        We're building a space where personality, vibe, and shared experiences come together around the
                        table — no pressure, no expectations, just genuine connection (and good food).
                        Cape Town is just the beginning.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;


