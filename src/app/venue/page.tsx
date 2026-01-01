"use client"
import React from 'react';
import { MapPin, Mail, Navigation } from 'lucide-react';

export default function Venue() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-b from-[#003f5c] via-[#046b8a] to-[#05a2c2] text-white py-16 px-4">
            {/* Header */}
            <div className="flex flex-col font-extrabold text-5xl lg:text-6xl items-center mb-16 drop-shadow-2xl tracking-wide">
                <div className="relative">
                    <span className="bg-gradient-to-r from-[#a9e8ff] to-white bg-clip-text text-transparent">
                        VENUE
                    </span>
                    <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#a9e8ff] to-transparent"></div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Map Section */}
                    <div className="order-2 lg:order-1">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/20 hover:shadow-[#a9e8ff]/30 transition-all duration-300">
                            <div className="relative overflow-hidden rounded-xl shadow-lg group">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.1560221207365!2d88.36862681153707!3d22.49832863560191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271236069f175%3A0xcee7537188e8fa9c!2sDr.%20Triguna%20Sen%20Auditorium!5e0!3m2!1sen!2sin!4v1767108407210!5m2!1sen!2sin"
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded-xl transition-transform duration-500 group-hover:scale-105"
                                ></iframe>
                                
                                {/* Overlay gradient for effect */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#022c3d]/20 to-transparent pointer-events-none rounded-xl"></div>
                            </div>
                            
                            {/* Get Directions Button */}
                            <a 
                                href="https://maps.app.goo.gl/your-directions-link" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 flex items-center justify-center gap-2 bg-gradient-to-r from-[#05a2c2] to-[#046b8a] hover:from-[#046b8a] hover:to-[#05a2c2] text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <Navigation size={20} />
                                Get Directions
                            </a>
                        </div>
                    </div>

                    {/* Info Section */}
                    <div className="order-1 lg:order-2 space-y-6">
                        {/* University Name */}
                        <div className="text-center lg:text-left mb-8">
                            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#a9e8ff] to-white bg-clip-text text-transparent drop-shadow-lg">
                                Jadavpur University
                            </h2>
                            <div className="mt-2 h-1 w-32 bg-gradient-to-r from-[#a9e8ff] to-transparent mx-auto lg:mx-0"></div>
                        </div>

                        {/* Location Card */}
                        <div className="bg-white/15 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/20 hover:border-[#a9e8ff]/50 transition-all duration-300 group">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-gradient-to-br from-[#05a2c2] to-[#046b8a] p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <MapPin size={28} className="text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-[#a9e8ff] mb-3">
                                        DR. TRIGUNA SEN AUDITORIUM
                                    </h3>
                                    <p className="text-lg leading-relaxed text-white/90">
                                        188, Raja Subodh Chandra Mallick Rd, Jadavpur University Campus Area, Jadavpur, Kolkata, West Bengal 700032
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Card */}
                        <div className="bg-white/15 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/20 hover:border-[#a9e8ff]/50 transition-all duration-300 group">
                            <div className="flex items-center gap-4">
                                <div className="bg-gradient-to-br from-[#05a2c2] to-[#046b8a] p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <Mail size={28} className="text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-[#a9e8ff] mb-2">
                                        Contact Us
                                    </h3>
                                    <a 
                                        href="mailto:jaduniv.ieee@gmail.com"
                                        className="text-lg text-white/90 hover:text-[#a9e8ff] transition-colors duration-300 underline decoration-[#a9e8ff]/30 hover:decoration-[#a9e8ff]"
                                    >
                                        jaduniv.ieee@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Additional Info Card */}
                        <div className="bg-gradient-to-br from-[#05a2c2]/20 to-[#046b8a]/20 backdrop-blur-md p-6 rounded-2xl border border-[#a9e8ff]/30 shadow-lg">
                            <p className="text-center text-sm md:text-base text-white/80 italic">
                                Join us at one of India&apos;s most prestigious institutions for an unforgettable experience of innovation and collaboration.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}