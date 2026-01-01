"use client";

import { Home, Info, CalendarDays, MapPin, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home", icon: <Home size={22} /> },
    { href: "/about", label: "About", icon: <Info size={22} /> },
    { href: "/timeline", label: "Timeline", icon: <CalendarDays size={22} /> },
    { href: "/venue", label: "Venue", icon: <MapPin size={22} /> },
    { href: "/speakers", label: "Speakers", icon: <Users size={22} /> },
  ];

  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 w-auto md:w-[90%] lg:w-auto mt-5 z-50">
      <div className="backdrop-blur-md bg-white/10 dark:bg-black/20 
      p-4 rounded-full flex justify-between items-center 
      shadow-xl border border-white/20">

        {/* Navigation Buttons */}
        <div className="flex gap-4 md:gap-6 items-center">
          {navItems.map(({ href, label, icon }) => {
            const active = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                className={`flex flex-col md:flex-row items-center gap-1 px-2 py-1 rounded-full 
                transition-all duration-300 cursor-pointer
                ${active ? "text-blue-400 font-semibold scale-105" : "hover:text-indigo-400 hover:scale-105"}
                `}
              >
                {icon}
                <span className="hidden md:inline">{label}</span>
              </Link>
            );
          })}
        </div>

        {/* Register Button */}
        <div className="hidden md:block">
          <Link
            href="/register"
            className="border-2 border-white hover:border-blue-500 rounded-full
            px-5 py-2 bg-black/80 hover:bg-black transition-all duration-300 
            shadow-md hover:shadow-blue-500/40"
          >
            Register!
          </Link>
        </div>

      </div>
    </div>
  );
}
