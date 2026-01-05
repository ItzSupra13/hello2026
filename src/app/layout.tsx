import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from '@/components/old/Footer'
import { Toaster } from "@/components/ui/sonner"

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} animate-gradient`} style={{ backgroundImage: "linear-gradient(to right, #1e1b4b, black)", color: "white"}}>
        {children}
        <Toaster richColors position="bottom-right"/>
        <Footer/>
      </body>
    </html>
  );
}
