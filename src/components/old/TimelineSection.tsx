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
                            "translate-y-0",
                            "scale-100"
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
        <div className="relative min-h-screen w-full bg-gradient-to-b from-[#003f5c] via-[#046b8a] to-[#05a2c2] text-white overflow-hidden py-16 px-4">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-40 right-20 w-96 h-96 bg-[#05a2c2]/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-40 left-20 w-80 h-80 bg-[#046b8a]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>

            {/* Header */}
            <div className="relative z-10 flex flex-col font-extrabold text-5xl lg:text-6xl items-center mb-20 drop-shadow-2xl tracking-wide">
                <div className="relative">
                    <span className="bg-gradient-to-r from-[#a9e8ff] to-white bg-clip-text text-transparent">
                        TIMELINE
                    </span>
                    <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#a9e8ff] to-transparent"></div>
                </div>
            </div>

            {/* Subtitle */}
            <p className="relative z-10 text-center text-lg md:text-xl text-[#e3faff] max-w-3xl mx-auto mb-16 px-4">
                Join us for an exciting day of innovation, learning, and networking
            </p>

            <div className="relative max-w-5xl mx-auto px-6 pb-20">
                {/* Vertical timeline line with gradient */}
                <div className="absolute top-0 bottom-0 left-4 md:left-10 w-1 bg-gradient-to-b from-[#a9e8ff]/20 via-[#a9e8ff] to-[#a9e8ff]/20 shadow-lg shadow-[#a9e8ff]/50" />

                <div className="space-y-16">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                if (el) itemsRef.current[index] = el;
                            }}
                            className="relative flex gap-6 md:gap-12 opacity-0 translate-y-16 scale-95 transition-all duration-700 ease-out"
                            style={{ transitionDelay: `${index * 50}ms` }}
                        >
                            {/* Timeline Node */}
                            <div className="relative z-20 flex-shrink-0">
                                <div className="relative">
                                    {/* Outer glow ring */}
                                    <div className="absolute -inset-2 bg-gradient-to-r from-[#05a2c2] to-[#a9e8ff] rounded-full opacity-50 blur-lg animate-pulse"></div>
                                    
                                    {/* Node circle */}
                                    <div className="relative h-14 w-14 rounded-full bg-gradient-to-br from-[#046b8a] to-[#003f5c] border-2 border-[#a9e8ff] shadow-xl shadow-[#a9e8ff]/40 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                                        <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[#00d8ff] to-[#a9e8ff] shadow-lg animate-pulse" />
                                    </div>

                                    {/* Connecting line to card */}
                                    <div className="absolute top-1/2 left-full w-6 md:w-12 h-0.5 bg-gradient-to-r from-[#a9e8ff] to-transparent"></div>
                                </div>
                            </div>

                            {/* Card */}
                            <div className="relative w-full group flex-1">
                                {/* Hover glow effect */}
                                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#05a2c2]/40 to-[#a9e8ff]/40 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />

                                {/* Main card */}
                                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl px-6 md:px-8 py-6 border border-white/20 group-hover:border-[#a9e8ff]/50 shadow-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[#a9e8ff]/30 overflow-hidden">
                                    {/* Decorative gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#a9e8ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    
                                    {/* Time badge */}
                                    <div className="relative inline-flex items-center gap-2 mb-4">
                                        <svg className="w-5 h-5 text-[#a9e8ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="text-xl md:text-2xl font-bold text-[#a9e8ff] tracking-wide">
                                            {event.time}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="relative text-white text-xl md:text-2xl font-semibold leading-relaxed mb-4">
                                        {event.title}
                                    </h3>

                                    {/* Decorative elements */}
                                    <div className="flex items-center gap-2 mt-4">
                                        <div className="h-1 w-16 bg-gradient-to-r from-[#a9e8ff] to-transparent rounded-full group-hover:w-32 transition-all duration-500"></div>
                                        <div className="h-1 w-1 bg-[#a9e8ff] rounded-full opacity-50"></div>
                                        <div className="h-1 w-1 bg-[#a9e8ff] rounded-full opacity-30"></div>
                                    </div>

                                    {/* Corner accent */}
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#a9e8ff]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* End marker */}
                <div className="relative flex justify-start mt-8 ml-4 md:ml-10">
                    <div className="relative">
                        <div className="absolute -inset-3 bg-gradient-to-r from-[#05a2c2] to-[#a9e8ff] rounded-full opacity-50 blur-xl"></div>
                        <div className="relative h-8 w-8 rounded-full bg-gradient-to-br from-[#a9e8ff] to-[#05a2c2] shadow-xl"></div>
                    </div>
                </div>
            </div>

            {/* Bottom decoration */}
            <div className="relative z-10 max-w-4xl mx-auto mt-12 px-4">
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 text-center">
                    <p className="text-[#e3faff] text-sm md:text-base italic">
                        All times are subject to change. Stay tuned for updates!
                    </p>
                </div>
            </div>
        </div>
    );
}