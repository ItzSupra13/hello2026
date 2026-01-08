import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import Link from "next/link";
import "../globals.css";
import { ArrowLeft } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hello IEEE 2026 | IEEE JUSB",
  description: "An event management website for IEEE JUSB's Hello IEEE Event!",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} animate-gradient`}
        style={{
          color: "white",
          backgroundColor: "black",
          border: "black"
        }}
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
        <Toaster richColors position="bottom-right" />
      </body>
    </html>
  );
}
