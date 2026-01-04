"use client"

import { useRef, useEffect, useState } from 'react';
import { ArrowRight, User, Mail, Briefcase, Ticket } from 'lucide-react';

export default function Register() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [pathD, setPathD] = useState("");

  // CONSTANT: Control the gap between the form and the text
  const TEXT_GAP = 20;

  // Update the SVG path to match the Form's position relative to the Section with a gap
  useEffect(() => {
    const updatePath = () => {
        if(formRef.current && sectionRef.current) {
            const sectionRect = sectionRef.current.getBoundingClientRect();
            const formRect = formRef.current.getBoundingClientRect();
            
            // Calculate coordinates relative to the section container with GAP offset
            const x = (formRect.left - sectionRect.left) - TEXT_GAP;
            const y = (formRect.top - sectionRect.top) - TEXT_GAP;
            const w = formRect.width + (TEXT_GAP * 2);
            const h = formRect.height + (TEXT_GAP * 2);
            
            // Create a path that traces the border of the form
            // Top-Left -> Top-Right -> Bottom-Right -> Bottom-Left -> Close
            setPathD(`M ${x} ${y} L ${x+w} ${y} L ${x+w} ${y+h} L ${x} ${y+h} Z`);
        }
    };

    updatePath();
    
    const resizeObserver = new ResizeObserver(updatePath);
    if (sectionRef.current) resizeObserver.observe(sectionRef.current);
    if (formRef.current) resizeObserver.observe(formRef.current);
    window.addEventListener('resize', updatePath);
    
    return () => {
        resizeObserver.disconnect();
        window.removeEventListener('resize', updatePath);
    };
  }, []);

  const borderText = "REGISTER FOR THINK FORWARD SUMMIT 2025 • JOIN THE REVOLUTION • SECURE YOUR SPOT • ";
  const repeatedText = borderText.repeat(20);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen bg-[#020617] text-white flex flex-col items-center justify-center py-24 px-4 md:px-12 overflow-hidden">
      
      {/* 
        LAYER 1: Base Background & Default Text 
        Visible on the black background.
        Added 'hidden md:block' to hide on mobile.
      */}
      <div className="absolute inset-0 z-0 hidden md:block">
          <svg width="100%" height="100%" className="overflow-visible">
              <defs>
                  <path id="reg-path-base" d={pathD} fill="none" />
              </defs>
              <text className="font-mono font-bold text-sm tracking-[0.1em] fill-[#3B82F6]" dominantBaseline="middle">
                  <textPath href="#reg-path-base" startOffset="0%">
                      {repeatedText}
                  </textPath>
              </text>
          </svg>
      </div>

      {/* 
        LAYER 2: Secant Region & Contrast Text
        This container is clipped to the secant shape. 
        It contains the Blue Fill and the White Text.
        Because it sits on top of Layer 1, it masks it.
      */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ clipPath: 'ellipse(90% 60% at 50% 100%)' }} // The Secant Geometry
      >
         {/* The Blue Fill for the Secant */}
         <div className="absolute inset-0 bg-[#3B82F6]"></div>

         {/* 
           The Contrast Text (White) - Only visible inside the secant because of the parent clipPath 
           Added 'hidden md:block' to hide on mobile.
         */}
         <div className="absolute inset-0 hidden md:block">
            <svg width="100%" height="100%" className="overflow-visible">
                  <defs>
                      <path id="reg-path-contrast" d={pathD} fill="none" />
                  </defs>
                  <text className="font-mono font-bold text-sm tracking-[0.1em] fill-white" dominantBaseline="middle">
                      <textPath href="#reg-path-contrast" startOffset="0%">
                          {repeatedText}
                      </textPath>
                  </text>
              </svg>
         </div>
      </div>

      <div className="relative z-20 w-full max-w-2xl mx-auto mb-20">
        
        {/* Section Title */}
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                Secure Your Spot
            </h2>
            <p className="text-gray-400">Join 1,000+ innovators in Kolkata.</p>
        </div>

        {/* Actual Form Card */}
        <div ref={formRef} className="bg-[#050505] border border-white/10 rounded-xl p-8 md:p-12 shadow-2xl relative">
            <form className="flex flex-col gap-6 relative z-30">
                {/* Name Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500">First Name</label>
                        <div className="relative group">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-[#3B82F6] transition-colors" />
                            <input 
                                type="text" 
                                className="w-full bg-white/5 border border-white/10 rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#3B82F6] focus:bg-white/10 transition-all duration-300"
                                placeholder="Jane"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Last Name</label>
                        <div className="relative group">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-[#3B82F6] transition-colors" />
                            <input 
                                type="text" 
                                className="w-full bg-white/5 border border-white/10 rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#3B82F6] focus:bg-white/10 transition-all duration-300"
                                placeholder="Doe"
                            />
                        </div>
                    </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                    <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-[#3B82F6] transition-colors" />
                        <input 
                            type="email" 
                            className="w-full bg-white/5 border border-white/10 rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#3B82F6] focus:bg-white/10 transition-all duration-300"
                            placeholder="jane@example.com"
                        />
                    </div>
                </div>

                {/* Organization */}
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Organization / Company</label>
                    <div className="relative group">
                        <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-[#3B82F6] transition-colors" />
                        <input 
                            type="text" 
                            className="w-full bg-white/5 border border-white/10 rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#3B82F6] focus:bg-white/10 transition-all duration-300"
                            placeholder="Acme Corp"
                        />
                    </div>
                </div>

                {/* Ticket Type */}
                <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Ticket Type</label>
                        <div className="relative group">
                            <Ticket className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-[#3B82F6] transition-colors pointer-events-none" />
                            <select className="w-full bg-white/5 border border-white/10 rounded-lg py-4 pl-12 pr-4 text-white appearance-none focus:outline-none focus:border-[#3B82F6] focus:bg-white/10 transition-all duration-300 cursor-pointer">
                            <option className="bg-black text-gray-300">General Admission - $199</option>
                            <option className="bg-black text-gray-300">Student - $99</option>
                            <option className="bg-black text-gray-300">VIP Access - $499</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1.5L6 6.5L11 1.5" stroke="white" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            </div>
                        </div>
                </div>

                {/* Submit Button */}
                <button className="group mt-4 w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white py-4 rounded-lg font-bold text-lg uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                    <span>Complete Registration</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
                
                <p className="text-center text-xs text-gray-500 mt-2">
                    By registering, you agree to our Terms & Conditions.
                </p>
            </form>
        </div>
      </div>
    </section>
  );
};
