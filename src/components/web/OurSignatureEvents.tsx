"use client"

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function OurSignatureEvents(){
  const sectionRef = useRef<HTMLElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rightContentRef.current) return;
    
    // Simple fade-in animation for the grid items as they enter the viewport
    const cards = rightContentRef.current.children;
    
    gsap.fromTo(cards, 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rightContentRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  const speakers = [
    {
      name: "Double // Slash",
      role: "Double Slash, organised by IEEE JUSB is Jadavpur University's first ever offline 24 hour hackathon. Here different tracks are provided for the participants. Double Slash attracts uniqueness and creativity packaged in the form of coding and reasoning. IEEE JUSB is going to soon present Double Slash with a bang, so interested participants may as well start to gear up!",
      image: "/about/doubleslash.png"
    },
    {
      name: "Cypher 3331",
      role: "Organised by IEEE JUSB at Jadavpur University's annual tech - fest Srijan, Cypher is an exhilirating event based on cryptography and the art of coding and decoding, inviting more than 700 registrations in a span of only 24 hours . Paricipants were taught about different cyphers and challenged with brain storming questions, with the level advancing in later rounds.",
      image: "/about/cypher.png"
    },
    {
      name: "Machine Learning Accelerator Summit",
      role: "MLAS is an event solely dedicated to providing the participants with a strong foundation in Machine Learning. With sessions on python, hands on workshops on machine learning and deep learning and contests the event provided the participants the thrust for them to move forward in their quest of Machine Learning.",
      image: "/about/mlas.png"
    },
    {
      name: "TechX",
      role: "IEEE JUSB is the proud pioneer of TechX Congress which has become a global sensation since. The second edition took place in Shantiniketan and featured talks on diverse topics and an extensive workshop on augmented reality. Stuffed with hackathons and quizzes, this was undoubtedly IEEE JUSB's one of the most enriching and enjoyable events!",
      image: "/about/techX.png"
    }
  ];

  return (
    <section ref={sectionRef} className="bg-white text-black relative z-10">
      <div className="w-full flex flex-col lg:flex-row max-w-[1600px] mx-auto">
        
        {/* Left Sticky Content */}
        <div className="w-full lg:w-[40%] flex flex-col justify-center px-6 md:px-12 py-16 lg:py-0 bg-white lg:h-screen lg:sticky lg:top-0">
          <div className="flex flex-col items-start gap-8">
             {/* Label */}
             <div className="flex items-center gap-3">
               <svg width="40" height="10" viewBox="0 0 40 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-3 text-[#3B82F6]">
                  <path d="M1 5C1 5 4.5 1 8.5 5C12.5 9 16 5 16 5C16 5 19.5 1 23.5 5C27.5 9 31 5 31 5C31 5 34.5 1 38.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
               <span className="text-sm font-bold tracking-widest uppercase text-black">EVENTS BY US</span>
             </div>

             {/* Headline */}
             <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9]">
                Our<br/>Signature<br/>Events
             </h2>

             {/* Description */}
             <p className="text-xl text-gray-500 font-medium max-w-sm leading-relaxed">
                Hear from some of the best minds across technology and sustainability.
             </p>
          </div>
        </div>

        {/* Right Scrolling Grid */}
        <div className="w-full lg:w-[60%] px-6 md:px-12 pb-16 pt-0 lg:py-24">
             <div ref={rightContentRef} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                {speakers.map((speaker, index) => (
                    <div key={index} className="flex flex-col gap-6 group">
                        {/* Image Card */}
                        <div className="aspect-[3/4] w-full rounded-2xl overflow-hidden bg-gray-100 relative">
                            <Image
                                src={speaker.image}
                                alt={speaker.name}
                                fill
                                sizes="(min-width: 1024px) 50vw, 100vw"
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            />

                        </div>
                        
                        {/* Speaker Info */}
                        <div className="flex flex-col gap-1">
                            <h3 className="text-3xl font-bold tracking-tight">{speaker.name}</h3>
                            <div className="flex flex-col">
                                <span className="text-lg text-gray-600">{speaker.role}</span>
                            </div>
                        </div>
                    </div>
                ))}
             </div>
        </div>
      </div>
    </section>
  );
};