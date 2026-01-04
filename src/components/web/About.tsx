"use client"

import { useEffect, useRef } from 'react';
import { Mic, MessageSquare, Users, MonitorPlay } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current || !titleRef.current || !statsRef.current) return;

        // Animate Title Text - Words appearing
        gsap.fromTo(
            titleRef.current.children,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                },
            }
        );

        // Animate Stats Section
        const statItems = statsRef.current.children;
        Array.from(statItems).forEach((item) => {
            const numberElement = item.querySelector('.stat-number');

            // Animate the container fade in
            gsap.fromTo(item,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: statsRef.current,
                        start: "top 85%"
                    }
                }
            );

            // Counter animation for numbers
            // Counter animation for numbers
            if (numberElement) {

                const targetValue = parseInt(
                    numberElement.getAttribute("data-target") || "0"
                );

                const counter = { value: 0 };

                gsap.to(counter, {
                    value: targetValue,
                    duration: 2.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: statsRef.current,
                        start: "top 85%"
                    },
                    onUpdate: () => {
                        const val = Math.ceil(counter.value);

                        // Format output
                        let formatted;

                        if (val >= 1000) {
                            formatted = `${Math.round(val / 1000)}k+`;
                        } else {
                            formatted = `${val}+`;
                        }

                        numberElement.textContent = formatted;
                    }
                });
            }

        });

    }, []);

    const stats = [
        { icon: MonitorPlay, label: 'Events Annually', value: 8 },
        { icon: MessageSquare, label: 'Partner IEEE Societies', value: 5 },
        { icon: Users, label: 'Event Participants', value: 5000 },
        { icon: Mic, label: 'Members', value: 80 },
    ];

    return (
        <section ref={containerRef} className="relative w-full bg-white text-black pt-24 pb-12 md:pt-32 md:pb-16 px-6 md:px-12 rounded-t-[2rem] md:rounded-t-[3rem] mt-0 z-20">
            <div className="max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

                    {/* Left Column: Label - Increased to col-span-3 (approx 1/4) */}
                    <div className="lg:col-span-3 flex flex-row lg:flex-col items-center lg:items-start gap-4 lg:pt-4">
                        <svg width="40" height="10" viewBox="0 0 40 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-3 text-[#8EC5FF]">
                            <path d="M1 5C1 5 4.5 1 8.5 5C12.5 9 16 5 16 5C16 5 19.5 1 23.5 5C27.5 9 31 5 31 5C31 5 34.5 1 38.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-sm font-bold tracking-widest uppercase text-black">About Us</span>
                    </div>

                    {/* Right Column: Content - Reduced to col-span-9 (approx 3/4) */}
                    <div className="lg:col-span-9 flex flex-col gap-24">

                        {/* Headline */}
                        <h2 ref={titleRef} className="text-3xl sm:text-1xl md:text-2xl lg:text-3xl font-medium tracking-tight leading-[1.1]">
                            <span className="inline-block text-gray-400 mr-3">At IEEE JUSB, we&apos;re more than just a student chapter - we&apos;re a dynamic community of</span>
                            <span className="inline-block font-bold text-black mr-3">innovators, creators,</span>
                            <span className="inline-block font-bold text-black mr-3">and problem-solvers</span>
                            <span className="inline-block text-gray-400">committed to driving change through collaboration.</span><span className="text-gray-400"> Founded in 2010 at one of the oldest and most prestigious universities in the country,
                                <span className="inline-block font-bold text-black mr-3">JADAVPUR UNIVERSITY,</span>we belong to the<span className="font-bold text-black mr-3"> Kolkata section of Region 10.</span>As
                                <span className="inline-block font-bold text-black">one of the most active student branches in our section,</span> together, we spark the fire of learning and innovation, thus building a passionate community that</span>
                            <span className="inline-block text-gray-400">stands on sharing ideas and making impacts!</span>
                        </h2>

                        {/* Stats Grid */}
                        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="flex flex-col items-center md:items-start gap-4 group">
                                    <span
                                        className="stat-number text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tighter text-black"
                                        data-target={stat.value}
                                    >
                                        0
                                    </span>
                                    <div className="flex items-start gap-2 ">
                                        <stat.icon className="w-5 h-5 text-[#3B82F6]" strokeWidth={2.5} />
                                        <span className="text-sm md:text-base font-bold tracking-widest text-gray-600 uppercase group-hover:text-black transition-colors">
                                            {stat.label}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};