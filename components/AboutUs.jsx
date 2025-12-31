import React from 'react';

const AboutUs = () => {
    return (
        <section id="about-us" className="bg-white py-12 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-7 text-black">About Us</h2>

                <div className="space-y-5 text-gray-600 text-[1rem] md:text-[1rem] leading-relaxed font-medium">
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
