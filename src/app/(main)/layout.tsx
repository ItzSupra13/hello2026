import type { Metadata } from "next";
import "../globals.css";
import Footer from '@/components/old/Footer'

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
    <div>
      {children}
      <Footer/>
    </div>
  );
}
