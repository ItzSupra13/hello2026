"use client"

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Sponsors() {
    const containerRef = useRef<HTMLElement>(null);
    const rowsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!rowsRef.current) return;

        // Fade in animation for pills
        const pills = rowsRef.current.querySelectorAll('.logo-pill');

        gsap.fromTo(pills,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                }
            }
        );
    }, []);

    return (
        // Negative margin-top pulls this section under the rounded corners of the previous black section
        <section ref={containerRef} className="bg-white text-black relative z-10 -mt-16 pt-32 pb-24 px-6 md:px-12">
            <div className="max-w-[1600px] mx-auto">
                <h3 className="text-3xl md:text-5xl font-serif text-left mb-16 text-black tracking-tight">
                    Our Sponsors
                </h3>
                <div ref={rowsRef} className="flex flex-col gap-6 md:gap-8">
                    {/* Row 2: 2 Items */}
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full">
                        {/* Sponsor Logo — Image Optimized */}
                        <div className="logo-pill w-full h-20 md:h-32 border border-dashed border-gray-400 rounded-[3rem] md:rounded-full flex items-center justify-center hover:border-black transition duration-300">

                            <div className="relative w-[70%] h-[65%] flex items-center justify-center">
                                <Image
                                    src="/sponsors/comsoc.png"
                                    alt="Comsoc Logo"
                                    fill
                                    priority
                                    className="object-contain pointer-events-none select-none"
                                    sizes="(max-width: 768px) 60vw, 30vw"
                                />
                            </div>
                        </div>
                        {/* Sponsor Logo — Text / Icon Combo */}
                        <div className="logo-pill w-full h-20 md:h-32 border border-dashed border-gray-400 rounded-[3rem] md:rounded-full flex items-center justify-center hover:border-black transition duration-300">
                            <div className="relative w-[70%] h-[65%] flex items-center justify-center">
                                <Image
                                    src="/sponsors/edwise.png"
                                    alt="Edwise Logo"
                                    fill
                                    priority
                                    className="object-contain pointer-events-none select-none"
                                    sizes="(max-width: 768px) 60vw, 30vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
