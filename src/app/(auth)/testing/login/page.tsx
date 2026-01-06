"use client"

import { useRef, useEffect, useState } from 'react';
import { ArrowRight, Mail, Lock } from 'lucide-react';
import Link from 'next/link';

export default function Login() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [pathD, setPathD] = useState("");

  // CONSTANT: Control the gap between the form and the text
  const TEXT_GAP = 20;

  // Update the SVG path to match the Form's position relative to the Section with gap
  useEffect(() => {
    const updatePath = () => {
        if(formRef.current && sectionRef.current) {
            const sectionRect = sectionRef.current.getBoundingClientRect();
            const formRect = formRef.current.getBoundingClientRect();
            
            const x = (formRect.left - sectionRect.left) - TEXT_GAP;
            const y = (formRect.top - sectionRect.top) - TEXT_GAP;
            const w = formRect.width + (TEXT_GAP * 2);
            const h = formRect.height + (TEXT_GAP * 2);
            
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

  const borderText = "ATTENDEE PORTAL • ACCESS YOUR TICKET • NETWORK WITH PEERS • ";
  const repeatedText = borderText.repeat(25);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen bg-[#020617] text-white flex flex-col items-center justify-center py-24 px-4 md:px-12 overflow-hidden border-t border-white/5">
      
      {/* 
        LAYER 1: Base Background & Default Text 
        Visible on the black background. Text is Blue.
        Added 'hidden md:block' to hide on mobile.
      */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-900/10 via-black to-black opacity-60"></div>
          <svg width="100%" height="100%" className="overflow-visible absolute inset-0 hidden md:block">
              <defs>
                  <path id="login-path-base" d={pathD} fill="none" />
              </defs>
              <text className="font-mono font-medium text-sm tracking-[0.2em] fill-[#3B82F6]" dominantBaseline="middle">
                  <textPath href="#login-path-base" startOffset="0%">
                      {repeatedText}
                  </textPath>
              </text>
          </svg>
      </div>

      {/* 
        LAYER 2: Secant Region & Contrast Text
        Clipped to the secant shape. 
        Background is Blue. Text is White.
      */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ clipPath: 'ellipse(90% 60% at 50% 100%)' }}
      >
         {/* The Blue Fill */}
         <div className="absolute inset-0 bg-[#3B82F6]"></div>

         {/* 
           The Contrast Text (White) 
           Added 'hidden md:block' to hide on mobile.
         */}
         <div className="absolute inset-0 hidden md:block">
            <svg width="100%" height="100%" className="overflow-visible">
                  <defs>
                      <path id="login-path-contrast" d={pathD} fill="none" />
                  </defs>
                  <text className="font-mono font-medium text-sm tracking-[0.2em] fill-white" dominantBaseline="middle">
                      <textPath href="#login-path-contrast" startOffset="0%">
                          {repeatedText}
                      </textPath>
                  </text>
              </svg>
         </div>
      </div>

      <div className="relative z-20 w-full max-w-lg mx-auto mb-20">
        
        {/* Section Title */}
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
                Welcome Back
            </h2>
            <p className="text-gray-400">Manage your agenda and networking profile.</p>
        </div>

        {/* Actual Form Card */}
        <div ref={formRef} className="bg-[#050505] border border-white/10 rounded-xl p-8 md:p-12 relative z-10 shadow-2xl">
            <form className="flex flex-col gap-6">
                
                {/* Email */}
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                    <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-white transition-colors" />
                        <input 
                            type="email" 
                            className="w-full bg-white/5 border border-white/10 rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-white focus:bg-white/10 transition-all duration-300"
                            placeholder="jane@example.com"
                        />
                    </div>
                </div>

                {/* Password */}
                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Password</label>
                        <Link href="#" className="text-xs text-[#3B82F6] hover:text-white transition-colors">Forgot password?</Link>
                    </div>
                    <div className="relative group">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-white transition-colors" />
                        <input 
                            type="password" 
                            className="w-full bg-white/5 border border-white/10 rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-white focus:bg-white/10 transition-all duration-300"
                            placeholder="••••••••"
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <button className="group mt-4 w-full bg-white text-black hover:bg-gray-200 py-4 rounded-lg font-bold text-lg uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300">
                    <span>Sign In</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
                
                <div className="text-center text-sm text-gray-500 mt-2">
                    Don&apos;t have an account? <Link href="/testing/register" className="text-white font-bold hover:underline ml-1">Register now</Link>
                </div>
            </form>
        </div>

      </div>
    </section>
  );
};
