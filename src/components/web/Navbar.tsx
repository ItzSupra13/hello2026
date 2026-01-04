"use client"

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", name: "Home"},
    { href: "#about", name: "About"},
    { href: "#timeline", name: "Timeline" },
    { href: "#speakers", name: "Speakers" },
    { href: "#venue", name: "Venue" },
  ];

  return (
    <nav className="w-full z-50 relative pt-6 md:pt-8">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex items-center justify-between">
        
{/* Logo Section */}
<div className="flex-shrink-0 flex items-center gap-3">
  <Link href="#" className="flex items-center gap-3 group">

    {/* Logo Image */}
    <div className="relative h-12 w-[200px] md:w-[250px]">
      <Image
        src="/Hello.png"
        alt="Hello IEEE Logo"
        fill
        className="object-contain"
        priority
      />
    </div>

  </Link>
</div>


        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-12 xl:space-x-16">
          {navLinks.map((link) => (
            <Link
              key={link.name} 
              href={link.href} 
              className="text-xs font-bold tracking-[0.2em] text-gray-400 hover:text-white transition-colors uppercase"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side Action (Desktop) */}
        <div className="hidden md:flex items-center pl-8 border-l border-white/20 h-8">
          <Link href="#" className="group flex items-center gap-2 text-sm md:text-xs font-bold tracking-widest text-white hover:text-[#8EC5FF] transition-colors uppercase">
            <span>Register</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-24 left-6 right-6 bg-[#111] border border-gray-800 rounded-lg p-6 flex flex-col space-y-6 lg:hidden shadow-2xl z-50 animate-in fade-in slide-in-from-top-4 duration-200">
            {navLinks.map((link) => (
              <Link
                key={link.name} 
                href={link.href} 
                className="text-center text-sm font-bold tracking-wider text-gray-300 hover:text-white transition-colors uppercase py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t border-gray-800 pt-4 flex justify-center">
              <Link href="#" className="flex items-center gap-2 text-white hover:text-[#8EC5FF] font-bold uppercase text-sm tracking-widest">
                 Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};