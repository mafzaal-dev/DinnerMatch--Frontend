import React from 'react';

const testimonials = [
    {
        text: "The whole night was amazing. I think if we didn't have to go to work the following day, we would have stayed there all night. We couldn't stop chatting.",
        author: "L, 28, Cape Town",
        align: "left"
    },
    {
        text: "We were all such different people, but somehow it meshed really well. It was a very memorable evening — a roaring success in my opinion.",
        author: "G, 43, Cape Town",
        align: "right"
    },
    {
        text: "Thank you for creating something like this, I didn't know how much I needed it.",
        author: "L, 28, Cape Town",
        align: "left"
    },
    {
        text: "Conversing and having great chats... it mostly seemed like we knew each other 😊. So much laughter, and everyone was fully engaged.",
        author: "L, 31, Cape Town",
        align: "right"
    },
    {
        text: "My first DinnerMatch experience was great! I was a bit nervous at first, but it turned out to be such a lovely evening. The group was well-matched - good energy, interesting conversations, and an overall comfortable vibe. We were five instead of six unfortunately, but it still flowed really nicely. The restaurant was lovely too (hope we weren't too loud lol). You can tell thought and effort went into putting the group together. I'm really looking forward to the next one!",
        author: "N, 36, Cape Town",
        align: "left"
    }
];

const Testimonials = () => {
    return (
        <section className="bg-white pt-8 md:pt-20 px-5 md:px-20 pb-12 lg:px-60">
            <div className="max-w-5xl mx-auto">
                <h2 className="md:uppercase text-[2rem] md:text-[2rem] font-bold text-center text-[#212121]">
                    Real People. Unreal Nights.
                </h2>

                <div className="flex flex-col gap-5 md:gap-5 relative max-w-4xl mt-10 mx-auto">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className={`w-full md:w-114.5 bg-white p-5 rounded-lg md:rounded-xl shadow-[0_0_16px_0_rgba(0,0,0,0.12)] border border-gray-100/50 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] ${item.align === 'right' ? 'rounded-br-none ml-5 md:ml-auto' : 'rounded-bl-none mr-5 md:mr-auto'} relative`}
                        >
                            <p className="text-base leading-[1.6] text-[#757575] mb-1 font-normal">
                                "{item.text}"
                            </p>
                            <p className="text-sm text-[#424242]  ">
                                — {item.author}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;


