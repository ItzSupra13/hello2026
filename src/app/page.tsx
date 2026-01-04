import Hero from '@/components/web/Hero';
import About from '@/components/web/About';
import WhatToExpect from '@/components/web/WhatToExpect';
import OurSignatureEvents from '@/components/web/OurSignatureEvents';
import Timeline from '@/components/web/Timeline';
import Speakers from '@/components/web/Speakers';
import Sponsors from '@/components/web/Sponsors';
import Contact from '@/components/web/Contact';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#3B82F6] selection:text-black scroll-smooth">
      <Hero />
      
      <div id="about">
        <About />
      </div>

      <WhatToExpect />

      <OurSignatureEvents/>

      <div id="timeline">
        <Timeline />
      </div>

      <div id="speakers">
        <Speakers />
      </div>

      <Sponsors/>

      <div id="venue">
        <Contact />
      </div>
    </div>
  );
};