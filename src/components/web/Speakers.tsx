"use client"

import  { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Waves, Compass, Anchor } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Speakers() {
  const containerRef = useRef<HTMLElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    if (!containerRef.current || !dividerRef.current || !gridRef.current) return;

    // Animate Divider expanding
    gsap.fromTo(dividerRef.current,
      { width: "0%" },
      {
        width: "100%",
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      }
    );

    // Animate Cards Fading Up
    const cards = gridRef.current.children;
    gsap.fromTo(cards,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  // Placeholder data for teaser
  const teaserSlots = [Compass, Anchor, Waves];

  return (
    <section ref={containerRef} className="bg-black text-white py-24 px-6 md:px-12 relative z-20 rounded-b-[2.5rem] md:rounded-b-[4rem] overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#3B82F6]">
                <circle cx="12" cy="12" r="3" fill="currentColor"/>
                <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span className="text-sm font-bold tracking-widest uppercase text-gray-400">Special Guests</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
              Panel Discussion
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-right hidden md:block">
            Stay tuned for the reveal of our industry pioneers shaping the digital landscape.
          </p>
        </div>

        {/* Sleek Divider */}
        <div className="w-full h-[1px] bg-white/20 mb-16 relative overflow-hidden">
          <div ref={dividerRef} className="absolute top-0 left-0 h-full bg-[#3B82F6]"></div>
        </div>

        {/* Teaser Grid - 3 Columns */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {teaserSlots.map((_, index) => {
            const Icon = teaserSlots[index];
            return (
            <div key={index} className="flex flex-col gap-4 group cursor-default">
              
              {/* TEASER POSTER CONTAINER */}
              <div className="w-full aspect-[4/5] relative overflow-hidden bg-[#050505] border border-white/10 flex flex-col items-center justify-center p-6 transition-all duration-500 hover:border-[#3B82F6]/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                 
                 {/* Technical Grid Background */}
                 <div className="absolute inset-0 opacity-20" 
                      style={{ 
                          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', 
                          backgroundSize: '40px 40px' 
                      }}>
                 </div>
                 {/* Subtle Radial Gradient Glow */}
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-60"></div>

                 {/* Corner Technical Markers */}
                 <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-white/30 group-hover:border-[#3B82F6] transition-colors duration-500"></div>
                 <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-white/30 group-hover:border-[#3B82F6] transition-colors duration-500"></div>
                 <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-white/30 group-hover:border-[#3B82F6] transition-colors duration-500"></div>
                 <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-white/30 group-hover:border-[#3B82F6] transition-colors duration-500"></div>

                 {/* Center Content */}
                 <div className="relative z-10 flex flex-col items-center justify-center text-center gap-6 transform group-hover:scale-105 transition-transform duration-500">
                    
                    {/* Locked Icon Container */}
                    <div className="w-16 h-16 rounded-full border border-white/10 bg-white/5 flex items-center justify-center backdrop-blur-sm group-hover:bg-[#3B82F6]/10 group-hover:text-[#3B82F6] group-hover:border-[#3B82F6]/30 transition-all duration-500">
                        <Icon className="w-6 h-6" />
                    </div>

                    {/* Typography */}
                    <div>
                        <h3 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 uppercase tracking-tighter leading-[0.9] mb-2">
                            Coming<br/>Soon
                        </h3>
                        <span className="inline-block px-3 py-1 border border-white/10 rounded-full text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-gray-500 group-hover:text-[#3B82F6] group-hover:border-[#3B82F6]/30 transition-all duration-500 bg-black/50">
                            Speaker 0{index + 1}
                        </span>
                    </div>
                 </div>
              </div>
              {/* Minimal Info - Placeholder */}
              <div className="flex flex-col px-1">
                <h3 className="text-2xl font-bold text-white/40 tracking-wide uppercase">Mystery Guest</h3>
                <span className="text-[#3B82F6]/60 text-sm uppercase tracking-wider font-medium mt-1">
                  Announcement pending
                </span>
              </div>
            </div>
        )})}
        </div>
      </div>
    </section>
  );
}


// "use client"

// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Image from 'next/image';

// gsap.registerPlugin(ScrollTrigger);

// export default function Speakers() {
//     const containerRef = useRef<HTMLElement>(null);
//     const dividerRef = useRef<HTMLDivElement>(null);
//     const gridRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         if (!containerRef.current || !dividerRef.current || !gridRef.current) return;

//         // Animate Divider expanding
//         gsap.fromTo(dividerRef.current,
//             { width: "0%" },
//             {
//                 width: "100%",
//                 duration: 1.5,
//                 ease: "power3.out",
//                 scrollTrigger: {
//                     trigger: containerRef.current,
//                     start: "top 75%",
//                 }
//             }
//         );

//         // Animate Images Fading Up
//         const images = gridRef.current.children;
//         gsap.fromTo(images,
//             { y: 50, opacity: 0 },
//             {
//                 y: 0,
//                 opacity: 1,
//                 stagger: 0.2,
//                 duration: 1,
//                 ease: "power2.out",
//                 scrollTrigger: {
//                     trigger: gridRef.current,
//                     start: "top 80%",
//                 }
//             }
//         );
//     }, []);

//     const guests = [
//         {
//             name: "Dr. Bhaskar Gupta",
//             title: "Jadavpur University Alumnus from Department of Electronics and Telecommunication, Former Senior Professor at Department of ETCE, and current Honourable Vice-Chancellor of Jadavpur University.",
//             image: "/speakers/vc.png"
//         },
//         {
//             name: "Saptarshi Pani",
//             title: "Jadavpur University Alumnus from the Department of Electrical Engineering, Forbes and ET unstoppable Leader, Working professional at Texas Instruments, part-time professional at co-founded startup Alchemyst AI.",
//             image: "/speakers/saptarshiPani.png"
//         },
//         {
//             name: "Saptarshi Ghosh",
//             title: "Jadavpur University Alumnus from Department of Instrumentation and Electronic Engineering, Ex UC Berkeley, Professional in ASIC at Intel Corporation, President of Global Students and Young Professionals at IEEE Computer Society.",
//             image: "/speakers/saptarshiGhosh.png"
//         }
//     ];

//     return (
//         <section ref={containerRef} className="bg-black text-white py-24 px-6 md:px-12 relative z-20 rounded-b-[2.5rem] md:rounded-b-[4rem] overflow-hidden">
//             <div className="max-w-[1600px] mx-auto">

//                 {/* Header Section */}
//                 <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
//                     <div>
//                         <div className="flex items-center gap-3 mb-2">
//                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#3B82F6]">
//                                 <circle cx="12" cy="12" r="3" fill="currentColor" />
//                                 <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" />
//                             </svg>
//                             <span className="text-sm font-bold tracking-widest uppercase text-gray-400">Special Guests</span>
//                         </div>
//                         <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
//                             Panel Discussion
//                         </h2>
//                     </div>
//                     <p className="text-gray-400 max-w-md text-right hidden md:block">
//                         Join an exclusive conversation with our esteemed industry pioneers.
//                     </p>
//                 </div>

//                 {/* Sleek Divider */}
//                 <div className="w-full h-[1px] bg-white/20 mb-16 relative overflow-hidden">
//                     <div ref={dividerRef} className="absolute top-0 left-0 h-full bg-[#3B82F6]"></div>
//                 </div>
//                 {/* Images Grid - 3 Columns, No Border, No Hover Effect */}
//                 <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
//                     {guests.map((guest, index) => (
//                         <div key={index} className="flex flex-col gap-4">
//                             {/* Image Container */}
//                             <div className="w-full aspect-[4/5] overflow-hidden bg-white/5 relative">
//                                 {/* Next.js Image */}
//                                 <Image
//                                     src={guest.image}
//                                     alt={guest.name}
//                                     fill
//                                     className="object-cover grayscale opacity-90"
//                                     sizes="(max-width: 768px) 100vw, 33vw"
//                                 />
//                             </div>

//                             {/* Minimal Info */}
//                             <div className="flex flex-col">
//                                 <h3 className="text-2xl font-bold text-white tracking-wide">{guest.name}</h3>
//                                 <span className="text-[#3B82F6] text-sm uppercase tracking-wider font-medium mt-1">
//                                     {guest.title}
//                                 </span>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };