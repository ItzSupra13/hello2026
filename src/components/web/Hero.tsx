"use client"

import { useState, useEffect, useRef } from "react";
import Navbar from './Navbar';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Hero() {

    const [, setMounted] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
    // Set target date to June 14, 2026
    const targetDate = new Date('2026-01-15T12:00:00').getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTimeLeft(); // Initial call
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
    }, []);
    useEffect(() => {
        setMounted(true);

        // Entrance animations using GSAP
        const ctx = gsap.context(() => {
            // Animate text elements
            gsap.from(".hero-text", {
                y: 100,
                opacity: 0,
                duration: 1.2,
                stagger: 0.15,
                ease: "power3.out",
                delay: 0.2
            });

            // Animate UI elements (date, countdown, cta)
            gsap.from(".hero-ui", {
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power2.out",
                delay: 0.8
            });

            // Animate the squiggly arrow path drawing
            gsap.from(".arrow-path", {
                strokeDasharray: 300,
                strokeDashoffset: 300,
                duration: 1.5,
                ease: "power2.inOut",
                delay: 1.2
            });

            gsap.from(logoRef.current, {
                opacity: 0,
                scale: 0.85,
                y: 40,
                duration: 1.2,
                ease: "power3.out",
                delay: 0.6
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    const formatTime = (value: number) => {
        return value < 10 ? `0${value}` : value;
    };

    return (
        <div ref={heroRef} className="relative min-h-screen w-full bg-black overflow-hidden flex flex-col font-sans">

            {/* Background Soft Gradients (Blue/Cyan Theme) */}
            <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[#3B82F6] rounded-full blur-[180px] opacity-[0.15] pointer-events-none"></div>
            <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-[#1d4ed8] rounded-full blur-[180px] opacity-[0.10] pointer-events-none"></div>
            <Navbar/>
            
            {/* Main Content Container */}
            <main className="flex-grow w-full max-w-[1800px] mx-auto px-6 md:px-12 py-5 flex flex-col justify-between relative z-10">

                {/* Top Section: Date */}
                <div className="hero-ui w-full flex justify-center lg:justify-start pt-8 md:pt-12">
                    <div className="flex items-center gap-4">
                        <span className="text-lg md:text-2xl font-mono font-medium tracking-wider text-white/90 text-center lg:text-left">
                            X JANUARY 2026 | Triguna Sen Auditorium
                        </span>
                    </div>
                </div>

                {/* Center Section: Massive Typography */}
                <div ref={logoRef} className="flex flex-col lg:flex-row justify-between items-center lg:items-start my-auto py-12 md:py-8 relative w-full gap-12">
                    {/* LEFT: Title Block */}
                    <div className="flex flex-col justify-center items-center lg:items-start w-full">

                        {/* Line 1 */}
                        <div className="overflow-hidden w-full text-center lg:text-left">
                            <h1 className="hero-text text-[15vw] lg:text-[10vw] leading-[0.85] font-black tracking-tighter text-white uppercase">
                                HELLO
                            </h1>
                        </div>

                        {/* Line 2 */}
                        <div className="overflow-hidden w-full flex items-center justify-center lg:justify-start gap-4 md:gap-8 flex-wrap">
                            <h1 className="hero-text text-[15vw] lg:text-[10vw] leading-[0.85] font-black tracking-tighter text-white uppercase">
                                IEEE
                            </h1>

                            {/* <div className="hero-text hidden lg:block w-[10vw] h-[2vw] relative mb-4">
                                <svg viewBox="0 0 54 14" className="w-full h-full text-[#D8B4FE]">
                                    <path d="M2 7C2 8 8.5 1 14.5 7C20.5 13 27 7 27 7C27 7 33.5 1 39.5 7C45.5 13 52 7 52 7"
                                        stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div> */}
                            <div className="hero-text hidden lg:block w-[12vw] h-[2.4vw] relative mb-4">
                                <svg viewBox="0 0 120 24" className="w-full h-full text-[#8EC5FF] ml-60">
                                    <path
                                        d=" M2 12 
                                            Q 12 4 22 12 
                                            T 42 12 
                                            T 62 12
                                            T 82 12
                                            T 102 12
                                            T 118 12"
                                        stroke="currentColor"
                                        strokeWidth="5"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                        </div>

                        {/* Line 3 */}
                        <div className="overflow-hidden w-full flex justify-center lg:justify-start pb-8 md:pb-10">
  <h1 className="hero-text text-[15vw] lg:text-[10vw] leading-[0.85] font-black tracking-tighter uppercase mt-2">
    <span className="loader">
      <span>2026</span>
      <span>2026</span>
    </span>
  </h1>
</div>
                    </div>
                    {/* RIGHT: Logo Section */}
                    <div className="flex flex-col items-center lg:items-end gap-4">

                        <div
                            className="
                                relative group
                                lg:-translate-x-15
                                lg:translate-y-8
                                lg:scale-[0.95] 
                                transition-transform duration-300
                            "
                        >
                            <div className="absolute -inset-4 bg-gradient-to-r rounded-full opacity-50 blur-2xl"></div>

                            <Image
                                src="/ieeejusb.png"
                                alt="IEEE JUSB Logo"
                                width={900}
                                height={900}
                                className="
        relative rounded-2xl drop-shadow-2xl
        [-webkit-user-drag:none] [user-drag:none]
      "
                            />
                        </div>

                    </div>
                </div>

                {/* Bottom Section: Countdown & CTA Grid */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-end pb-8 md:pb-12">

                    {/* Bottom Left: Stationary Countdown */}
                    <div className="hero-ui flex justify-center lg:justify-start w-full">
            <div className="flex items-start gap-3 sm:gap-6">
              {[
                { value: timeLeft.days, label: 'Days' },
                { value: timeLeft.hours, label: 'Hrs' },
                { value: timeLeft.minutes, label: 'Mins' },
                { value: timeLeft.seconds, label: 'Secs' },
              ].map((item, index) => (
                <React.Fragment key={item.label}>
                  <div className="flex flex-col items-center gap-1 sm:gap-2">
                    <span className="font-mono text-3xl sm:text-4xl md:text-5xl text-white tracking-widest font-bold leading-none tabular-nums">
                      {formatTime(item.value)}
                    </span>
                    <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-widest">
                      {item.label}
                    </span>
                  </div>
                  {index < 3 && (
                    <span className="font-mono text-3xl sm:text-4xl md:text-5xl text-white/30 font-bold leading-none pt-1">:</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

                    {/* Bottom Right: CTA Cluster */}
                    <div className="hero-ui flex flex-col items-center lg:items-end gap-8 relative">

                        <div className="absolute hidden lg:block pointer-events-none opacity-70
  -top-45 right-[5rem] rotate-[80deg]">

                            <svg
                                viewBox="0 0 220 180"
                                className="w-[18vw] max-w-[240px] text-white/40"
                                fill="none"
                            >
                                {/* swirl body */}
                                <path
                                    className="arrow-path"
                                    d="M30 110
         C 10 60, 40 20, 90 30
         C 140 40, 150 95, 110 110
         C 70 125, 80 160, 140 165"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />

                                {/* arrow head */}
                                {/* arrow head (aligned to end of curve) */}
                                <g className="arrow-head" transform="rotate(-50 144 175)">
                                    <path
                                        d="M140 165 L 156 174 L 150 156"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                    />
                                </g>

                            </svg>
                        </div>

                        <Link href='/register'>
                        {/* Rectangular Button (Matching Image) */}
                        <button className="cta-btn group relative overflow-hidden min-w-[320px] w-full md:w-auto px-8 py-6 flex items-center justify-between shadow-2xl border border-white/10 bg-[#0f0f0f] text-white cursor-pointer">
                            {/* liquid layer */}
                            <span className="liquid"></span>
                            {/* button text */}
                            <span className="relative z-10 text-lg font-bold tracking-widest uppercase">
                                Register Now!
                            </span>

                            {/* arrow container */}
                            <div className="relative z-10 bg-white/10 p-2 rounded-sm group-hover:bg-[#3B82F6] transition-colors duration-300">
                                <ArrowRight className="w-5 h-5" />
                            </div>
                        </button>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};