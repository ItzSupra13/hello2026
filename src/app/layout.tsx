import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

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
  description: "Dive into the world where dreams become true, hand in hand with us as we attempt to enlighten your path with HELLO IEEE!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} animate-gradient text-white bg-gradient-to-r from-[#1e1b4b] to-black`}>
        {children}
        <Toaster richColors position="bottom-right"/>
      </body>
    </html>
  );
}
