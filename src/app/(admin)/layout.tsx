import type { Metadata } from "next";
import Link from "next/link";
import "../globals.css";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Hello IEEE 2026 | IEEE JUSB",
  description: "An event management website for IEEE JUSB's Hello IEEE Event!",
};

export default function Adminayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div
        className={`min-h-screen text-white bg-black`} //  bg-[#020617]
      >
        {/* Top Navigation Button */}
        <div className="w-full px-6 pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-3xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25 text-sm font-semibold tracking-wide transition-all duration-300"
          >
             <ArrowLeft size={15}/> Back to Home
          </Link>
        </div>
        {children}
      </div>
  );
}
