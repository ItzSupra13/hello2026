

// Event name

import Image from "next/image";
import Link from "next/link"

// Tagline

// Primary CTAs (Join IEEE, Explore Events)

export default function HeroSection() {
  return (
            <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#003f5c] via-[#046b8a] to-[#05a2c2] text-white px-4 py-12">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-[#05a2c2]/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#046b8a]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#003f5c]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>
    
                <main className="relative z-10 pt-20 flex flex-col items-center gap-8 max-w-6xl mx-auto">
                    {/* Logo Section */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-[#05a2c2] to-[#a9e8ff] rounded-full opacity-50 group-hover:opacity-75 blur-2xl transition-opacity duration-500"></div>
                            <Image
                                src="/ieeejusb.png"
                                alt="IEEE JUSB Logo"
                                width={280}
                                height={280}
                                className="relative rounded-2xl drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <span className="text-2xl md:text-3xl font-light text-[#c7f4ff] tracking-widest">
                            presents
                        </span>
                    </div>
    
                    {/* Main Title */}
                    <div className="relative">
                        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold 
                            bg-gradient-to-r from-[#ced0f0] via-[#5d6ff5] to-[#2f51e7]
                            text-transparent bg-clip-text drop-shadow-2xl
                            text-center leading-tight">
                            Hello IEEE 2026
                        </h1>
                        {/* Glow effect behind title */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#2f51e7]/30 to-[#5d6ff5]/30 blur-3xl -z-10 animate-pulse"></div>
                    </div>
    
                    {/* Tagline */}
                    <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-center max-w-4xl
                        bg-gradient-to-b from-[#e2faff] via-[#ffffff] to-[#c7f4ff]
                        text-transparent bg-clip-text drop-shadow-lg px-6
                        leading-relaxed">
                        Dive into the world where dreams become true, hand in hand with us as we attempt to enlighten your path!
                    </p>
    
                    {/* CTA Button */}
                    <div className="mt-8">
                        <Link
                            className="group relative inline-flex items-center justify-center
                                px-10 py-5 text-xl md:text-2xl font-bold
                                rounded-full overflow-hidden
                                transition-all duration-300 hover:scale-110"
                            href="/register"
                        >
                            {/* Gradient background */}
                            <span className="absolute inset-0 bg-gradient-to-r from-[#05a2c2] to-[#046b8a] 
                                group-hover:from-[#046b8a] group-hover:to-[#05a2c2] transition-all duration-300"></span>
                            
                            {/* Glow effect */}
                            <span className="absolute inset-0 bg-gradient-to-r from-[#a9e8ff] to-[#05a2c2] 
                                opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></span>
                            
                            {/* Border */}
                            <span className="absolute inset-0 border-2 border-[#a9e8ff] rounded-full 
                                group-hover:border-white transition-colors duration-300"></span>
                            
                            {/* Text */}
                            <span className="relative text-white group-hover:text-[#eaffff] tracking-wide flex items-center gap-3">
                                Register Now
                                <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                        </Link>
                    </div>
    
                    {/* Date and Location */}
                    <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-lg md:text-xl font-semibold">
                        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 hover:border-[#a9e8ff] transition-all duration-300 hover:scale-105 shadow-lg">
                            <svg className="w-6 h-6 text-[#a9e8ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="bg-gradient-to-r from-[#a9e8ff] to-white bg-clip-text text-transparent font-bold">
                                15.01.2026
                            </span>
                        </div>
                        
                        <div className="hidden sm:block text-[#a9e8ff]">•</div>
                        
                        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 hover:border-[#a9e8ff] transition-all duration-300 hover:scale-105 shadow-lg">
                            <svg className="w-6 h-6 text-[#a9e8ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-white">Triguna Sen Auditorium</span>
                        </div>
                    </div>
    
                    {/* Scroll Indicator */}
                    <div className="mt-16 animate-bounce">
                        <svg className="w-8 h-8 text-[#a9e8ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </main>
            </div>
  );
}

