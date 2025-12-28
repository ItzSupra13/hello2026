"use client";

import { useEffect, useRef } from "react";

export default function Timeline() {
    const itemsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(
                            "opacity-100",
                            "translate-y-0"
                        );
                    }
                });
            },
            { threshold: 0.15 }
        );

        itemsRef.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const events = [
        { time: "12.00pm", title: "Introduction and Welcome Address." },
        { time: "12.10-12.20pm", title: "Address by Chief Guest" },
        { time: "12.20-12.30pm", title: "Online Introduction to IEEE by Mr. Saptarshi Ghosh." },
        { time: "12.30-12.45pm", title: "Session 1 Begins." },
        { time: "12.55-1.15pm", title: "Session 2 Begins." },
        { time: "2.00-2.30pm", title: "COMSOC Session." },
        { time: "2.45-3.30pm", title: "Break and Refreshments" },
        { time: "3.45-4.15pm", title: "Game 1." },
        { time: "4.30-5.00pm", title: "Game 2." },
        { time: "5.30-6.00pm", title: "Concluding Address." },
    ];

    return (
        <div className="ocean-bg min-h-screen flex flex-col bg-gradient-to-b from-[#003f5c] via-[#046b8a] to-[#05a2c2] text-white overflow-hidden">
            <h2 className="text-center font-extrabold text-4xl lg:text-5xl pt-24 pb-10 text-[#a9e8ff] drop-shadow-lg tracking-wide">
                TIMELINE
            </h2>

            <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-28 flex-1">
                {/* Vertical timeline line */}
                <div className="absolute top-0 bottom-0 left-10 w-[4px] bg-gradient-to-b from-transparent via-[#a9e8ff] to-transparent opacity-60" />

                <div className="space-y-24">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                if (el) itemsRef.current[index] = el;
                            }}
                            className="relative flex gap-10 opacity-0 translate-y-10 transition-all duration-700 ease-out"
                        >
                            {/* Timeline Node */}
                            <div className="relative z-10">
                                <div className="h-12 w-12 rounded-full bg-[#003a52] border border-[#00d8ff]/40 shadow-lg shadow-[#00d8ff]/30 flex items-center justify-center">
                                    <div className="h-4 w-4 rounded-full bg-[#00d8ff] shadow-md" />
                                </div>
                            </div>

                            {/* Card Wrapper (contrast layer) */}
                            <div className="relative w-full group">
                                {/* Glow layer */}
                                <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-[#00d8ff]/40 to-[#a9e8ff]/30 blur opacity-0 group-hover:opacity-100 transition duration-300" />

                                {/* Actual card */}
                                <div className="relative bg-[#022c3d]/80 backdrop-blur-xl rounded-2xl px-7 py-6 border border-[#a9e8ff]/20 shadow-xl transition-all duration-300 hover:-translate-y-2">
                                    <div className="text-lg md:text-xl font-extrabold text-[#a9e8ff] mb-2 tracking-wide">
                                        {event.time}
                                    </div>

                                    <h3 className="text-white text-2xl md:text-3xl font-medium leading-snug">
                                        {event.title}
                                    </h3>

                                    {/* Accent bar */}
                                    <div className="mt-5 h-[3px] w-14 bg-[#00d8ff] rounded-full opacity-80 group-hover:w-28 transition-all duration-300" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
