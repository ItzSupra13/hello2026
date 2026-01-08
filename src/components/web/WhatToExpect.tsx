"use client"

import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function WhatToExpect() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !titleRef.current || !cardsRef.current) return;

    // Animate Header
    gsap.fromTo(
      titleRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
        },
      }
    );

    // Animate Cards (Staggered Fade In)
    const cards = cardsRef.current.children;
    gsap.fromTo(
      cards,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const features = [
    {
      title: "Explore IEEE",
      number: "01",
      description: (
        <>
          Learn what IEEE is about and how it can help you <span className="font-bold text-black">potentially set up your future pathway,</span> from those who&apos;ve also asked these same questions
        </>
      ),
    },
    {
      title: "Insightful Sessions",
      number: "02",
      description: (
        <>
        Dive into aspects of the tech domain you may or may not have heard of,  <span className="font-bold text-black">through interactive, insightful sessions!</span>
        </>
      ),
    },
    {
      title: "Purposeful networking",
      number: "03",
      description: (
        <>
          Connect with a <span className="font-bold text-black">like-minded community</span> of creatives, and tech enthusiasts.
        </>
      ),
    },
  ];

  return (
    <section ref={containerRef} className="w-full bg-gradient-to-br from-[#A5F3FC] via-[#7DD3FC] to-[#3B82F6] text-black pt-12 pb-24 md:pt-16 md:pb-32 px-6 md:px-12 z-20">
      <div className="max-w-[1600px] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Left Column: Label */}
            <div className="lg:col-span-3 flex flex-row lg:flex-col items-center lg:items-start gap-4 lg:pt-4">
                <svg width="40" height="10" viewBox="0 0 40 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-3 text-blue-900">
                  <path d="M1 5C1 5 4.5 1 8.5 5C12.5 9 16 5 16 5C16 5 19.5 1 23.5 5C27.5 9 31 5 31 5C31 5 34.5 1 38.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-sm font-bold tracking-widest uppercase text-blue-950">What&apos;s on</span>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-9 flex flex-col gap-16 md:gap-24">
                {/* Header Section */}
                <div ref={titleRef} className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 border-t border-blue-900/10 pt-8">
                  <h2 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-none text-black">
                    What to expect
                  </h2>
                  <div className="lg:max-w-md">
                    <p className="text-xl md:text-2xl text-blue-950/80 leading-relaxed font-medium">
                      Expect a day packed with exciting sessions on the ever-evolving tech domain, insights of what IEEE has to offer, brainstorming challenges, and more!
                    </p>
                  </div>
                </div>

                {/* Cards Grid */}
                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  
                  {features.map((item, index) => (
                    <div key={index} className="flex flex-col justify-between p-8 min-h-[400px] md:min-h-[500px] bg-white/40 backdrop-blur-md border border-white/30 rounded-2xl relative group hover:bg-white/60 transition-all duration-300 shadow-lg hover:shadow-xl">
                      <div className="flex justify-between w-full">
                        <h3 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight max-w-[70%] text-black">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-lg text-gray-900 leading-relaxed mt-auto font-medium">
                        {item.description}
                      </p>
                    </div>
                  ))}

                  {/* Special CTA Card (Black) */}
                  <div className="flex flex-col justify-between p-8 min-h-[400px] md:min-h-[500px] bg-black text-white rounded-2xl relative overflow-hidden group shadow-2xl">
                     {/* Background Gradient/Sheen Effect */}
                     <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                     
                    <div className="flex justify-between w-full z-10">
                      <h3 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                        Want to be involved?
                      </h3>
                      {/* Squiggle Icon */}
                      <svg width="24" height="12" viewBox="0 0 54 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-4 text-white/50 mt-1 md:mt-2">
                          <path d="M2 7C2 7 8.5 1 14.5 7C20.5 13 27 7 27 7C27 7 33.5 1 39.5 7C45.5 13 52 7 52 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    
                    <div className="mt-auto z-10">
                    <Link href="/register">
                    <button className="flex items-center gap-2 
                        bg-white text-black 
                        px-5 py-2.5 
                        rounded-full 
                        font-semibold text-base md:text-lg 
                        hover:bg-[#8EC5FF]
                        transition-colors duration-300 w-fit"
                    >
                        <ArrowRight className="w-5 h-5" />
                        <span>Register!</span>
                      </button>
                    </Link>
                    </div>
                  </div>

                </div>
            </div>
        </div>
      </div>
    </section>
  );
};