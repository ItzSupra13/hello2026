"use client"

import { useState, useEffect, useRef } from "react";
import Navbar from './Navbar';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import Image from "next/image";

export default function Hero() {
    const [, setMounted] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);

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

    return (
        <div ref={heroRef} className="relative min-h-screen w-full bg-black overflow-hidden flex flex-col font-sans">

            {/* Background Soft Gradients (Blue/Cyan Theme) */}
            <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[#3B82F6] rounded-full blur-[180px] opacity-[0.15] pointer-events-none"></div>
            <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-[#1d4ed8] rounded-full blur-[180px] opacity-[0.10] pointer-events-none"></div>
            <Navbar />

            {/* Main Content Container */}
            <main className="flex-grow w-full max-w-[1800px] mx-auto px-6 md:px-12 py-5 flex flex-col justify-between relative z-10">

                {/* Top Section: Date */}
                <div className="hero-ui w-full flex justify-center lg:justify-start pt-8 md:pt-12">
                    <div className="flex items-center gap-4">
                        <span className="text-lg md:text-2xl font-mono font-medium tracking-wider text-white/90 text-center lg:text-left">
                            15 JANUARY 2026 | Triguna Sen Auditorium
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
                                IEEE 2.0&nbsp;&nbsp;
                            </h1>

                            {/* <div className="hero-text hidden lg:block w-[10vw] h-[2vw] relative mb-4">
                                <svg viewBox="0 0 54 14" className="w-full h-full text-[#D8B4FE]">
                                    <path d="M2 7C2 8 8.5 1 14.5 7C20.5 13 27 7 27 7C27 7 33.5 1 39.5 7C45.5 13 52 7 52 7"
                                        stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div> */}
                            <div className="hero-text hidden lg:block w-[12vw] h-[2.4vw] relative mb-4">
                                <svg viewBox="0 0 120 24" className="w-full h-full text-[#8EC5FF]">
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
                        <div className="overflow-hidden w-full text-center lg:text-left pb-8 md:pb-12">
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




                    {/* Custom CSS for text outline */}
                    <style>{`
            .font-outline-text {
               -webkit-text-stroke: 1px #D8B4FE;
               color: transparent;
            }
            @media (min-width: 768px) {
              .font-outline-text {
                 -webkit-text-stroke: 2px #D8B4FE;
              }
            }

            /* From Uiverse.io by mrhyddenn */ 
.loader {
  position: relative;
  display: inline-grid;
  place-items: center; /* centers text inside */
}

.loader span {
  grid-area: 1 / 1;   /* stack spans on top of each other */
  letter-spacing: 5px;
}

/* Outline layer */
.loader span:nth-child(1) {
  color: transparent;
  -webkit-text-stroke: 2px rgb(128, 198, 255);
}

/* Animated fill layer */
.loader span:nth-child(2) {
  color: rgb(128, 198, 255);
  -webkit-text-stroke: 1px rgb(128, 198, 255);
  animation: uiverse723 3s ease-in-out infinite;
}

@keyframes uiverse723 {
  0%, 100% {
    clip-path: polygon(0% 45%, 15% 44%, 32% 50%,
     54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%);
  }

  50% {
    clip-path: polygon(0% 60%, 16% 65%, 34% 66%,
     51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%);
  }
}


.liquid {
  transform: scaleX(-1);
}


/* liquid button */
.cta-btn {
  position: relative;
  border-radius: 10px;
}

/* ocean liquid layer */
.cta-btn .liquid {
  background-color: #3B82F6; /* deep blue */
  width: 140%;
  height: 120%;
  position: absolute;
  bottom: -10%;
  left: -20%;
  box-shadow:
    inset 5px -5px 25px #0b254d,
    inset -5px 0 25px #0b254d;
  filter: blur(1px);
}

/* inner liquid blobs */
.cta-btn .liquid::after,
.cta-btn .liquid::before {
  content: '';
  width: 500px;
  height: 350px;
  position: absolute;
  left: -40px;
  top: -360px;
  border-radius: 45%;
  animation: tide-spin 5s linear infinite;
}

/* darker tide layer */
.cta-btn .liquid::after {
  background: #020617;
}

/* brighter crest layer */
.cta-btn .liquid::before {
  background: #8EC5FF;
  animation-delay: .4s;
  border-radius: 40%;
}

/* smooth loop */
@keyframes tide-spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}



          `}</style>
                </div>

                {/* Bottom Section: Countdown & CTA Grid */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-end pb-8 md:pb-12">

                    {/* Bottom Left: Stationary Countdown */}
                    <div className="hero-ui flex flex-col gap-2 items-center lg:items-start">
                        <div className="font-mono text-3xl sm:text-4xl md:text-5xl text-white tracking-widest font-bold opacity-90 text-center lg:text-left">
                            10:10:10
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


                        {/* Rectangular Button (Matching Image) */}
                        <button className="cta-btn group relative overflow-hidden min-w-[320px] w-full md:w-auto px-8 py-6 flex items-center justify-between shadow-2xl border border-white/10 bg-[#0f0f0f] text-white">
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


                        {/* RSVP Section */}
                        <div className="flex items-center gap-6">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i} className="w-12 h-12 rounded-full border-2 border-black overflow-hidden bg-gray-800 relative z-0 hover:z-10 hover:scale-110 transition-transform duration-200">
                                        <Image src={`https://i.pravatar.cc/150?img=${i + 25}`} alt="Attendee" className="w-full h-full object-cover" width={50} height={50}/>
                                    </div>
                                ))}
                            </div>
                            <span className="text-white font-mono font-medium text-lg tracking-tight">Join 100s of students</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};