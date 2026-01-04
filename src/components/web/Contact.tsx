import { MapPin, Mail, Navigation } from 'lucide-react';

export default function Contact() {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 relative z-20 border-t border-white/10">
       <div className="max-w-[1600px] mx-auto">
          
          {/* Header */}
          <div className="mb-16">
             <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-[#3B82F6] w-6 h-6" />
                <span className="text-sm font-bold tracking-widest uppercase text-gray-400">Venue</span>
             </div>
             <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">Jadavpur University</h2>
             <p className="text-xl text-gray-400 font-medium">A Premier Institution of Learning</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
             
             {/* Map Container */}
             <div className="w-full h-[400px] lg:h-auto min-h-[400px] rounded-3xl overflow-hidden relative bg-white/5 border border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.264448529232!2d88.3694033!3d22.4942537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027122822a94e9%3A0x6b6311e355c2f0b9!2sDr.%20Triguna%20Sen%20Auditorium!5e0!3m2!1sen!2sin!4v1709999999999!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                  title="Jadavpur University Map"
                ></iframe>
             </div>

             {/* Info Cards */}
             <div className="flex flex-col gap-6 justify-center">
                
                {/* Auditorium Card */}
                <div className="bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col gap-8 hover:bg-white/10 transition-colors duration-300">
                   <div className="flex items-start gap-5">
                      <div className="p-4 rounded-2xl bg-[#3B82F6]/10 text-[#3B82F6] border border-[#3B82F6]/20 shrink-0">
                         <MapPin className="w-8 h-8" strokeWidth={1.5} />
                      </div>
                      <div>
                         <h3 className="text-2xl font-bold mb-3 leading-tight uppercase tracking-tight">Dr. Triguna Sen Auditorium</h3>
                         <p className="text-gray-400 leading-relaxed text-lg">
                            188, Raja Subodh Chandra Mallick Rd, Jadavpur University Campus Area, Jadavpur, Kolkata, West Bengal 700032
                         </p>
                      </div>
                   </div>
                   
                   <a 
                     href="https://maps.app.goo.gl/YourMapLinkHere" 
                     target="_blank" 
                     rel="noreferrer"
                     className="inline-flex items-center justify-center gap-3 bg-[#3b82f6] hover:bg-[#2563eb] text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:shadow-lg w-full sm:w-auto self-start"
                   >
                     <Navigation className="w-5 h-5" />
                     Get Directions
                   </a>
                </div>

                {/* Contact Card */}
                <div className="bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col gap-6 hover:bg-white/10 transition-colors duration-300">
                    <div className="flex items-start gap-5">
                      <div className="p-4 rounded-2xl bg-[#3B82F6]/10 text-[#3B82F6] border border-[#3B82F6]/20 shrink-0">
                         <Mail className="w-8 h-8" strokeWidth={1.5} />
                      </div>
                      <div>
                         <h3 className="text-2xl font-bold mb-2">Contact Us</h3>
                         <a href="mailto:jaduniv.ieee@gmail.com" className="text-xl text-gray-400 hover:text-[#3B82F6] transition-colors border-b border-transparent hover:border-[#3B82F6]">
                            jaduniv.ieee@gmail.com
                         </a>
                      </div>
                   </div>
                </div>

             </div>
          </div>
       </div>
    </section>
  );
};
