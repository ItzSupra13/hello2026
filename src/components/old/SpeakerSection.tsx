import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function SpeakerSection() {
    const speakers = [
        {
            name: "Saptarshi Pani",
            image: "/speakers/saptarshiPani.png",
            description: "Jadavpur University Alumnus from the Department of Electrical Engineering, Forbes and ET unstoppable Leader, Working professional at Texas Instruments, part-time professional at co-founded startup Alchemyst AI.",
            link: "https://www.linkedin.com/in/panisap/"
        },
        {
            name: "Saptarshi Ghosh",
            image: "/speakers/saptarshiGhosh.png",
            description: "Jadavpur University Alumnus from Department of Instrumentation and Electronic Engineering, Ex UC Berkeley, Professional in ASIC at Intel Corporation, President of Global Students and Young Professionals at IEEE Computer Society.",
            link: "https://www.linkedin.com/in/sapghosh/"
        },
        {
            name: "Dr. Bhaskar Gupta",
            image: "/speakers/vc.png",
            description: "Jadavpur University Alumnus from Department of Electronics and Telecommunication, Former Senior Professor at Department of ETCE, and current Honourable Vice-Chancellor of Jadavpur University.",
            link: "https://jadavpuruniversity.in/"
        }
    ];

    return (
        <div className="min-h-screen w-full bg-gradient-to-b from-[#003f5c] via-[#046b8a] to-[#05a2c2] text-white py-16 px-4">
            {/* Header */}
            <div className="flex flex-col font-extrabold text-5xl lg:text-6xl items-center mb-16 drop-shadow-2xl tracking-wide">
                <div className="relative">
                    <span className="bg-gradient-to-r from-[#a9e8ff] to-white bg-clip-text text-transparent">
                        SPEAKERS
                    </span>
                    <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#a9e8ff] to-transparent"></div>
                </div>
            </div>

            {/* Subtitle */}
            <p className="text-center text-lg md:text-xl text-[#e3faff] max-w-3xl mx-auto mb-12 px-4">
                Meet our distinguished speakers who will share their expertise and insights
            </p>

            {/* Speakers Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {speakers.map((speaker, index) => (
                    <Link
                        key={index}
                        href={speaker.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group block h-full"
                    >
                        <Card className="h-full bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 
                            hover:border-[#a9e8ff] hover:shadow-[#a9e8ff]/30 transition-all duration-500 
                            hover:-translate-y-3 overflow-hidden">
                            <CardContent className="p-8 flex flex-col items-center h-full relative">
                                {/* Decorative gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#a9e8ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                {/* Image Container with enhanced effects */}
                                <div className="relative mb-6 z-10">
                                    <div className="absolute -inset-2 bg-gradient-to-r from-[#05a2c2] to-[#a9e8ff] rounded-full opacity-0 group-hover:opacity-75 blur-xl transition-opacity duration-500"></div>
                                    <div className="relative bg-gradient-to-br from-[#05a2c2]/30 to-[#046b8a]/30 p-1 rounded-full group-hover:scale-105 transition-transform duration-500">
                                        <Image 
                                            src={speaker.image} 
                                            className="rounded-full border-4 border-white/20 group-hover:border-[#a9e8ff]/50 transition-colors duration-500" 
                                            width={180} 
                                            height={180} 
                                            alt={speaker.name} 
                                        />
                                    </div>
                                    {/* Decorative corner accent */}
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-[#a9e8ff] to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>

                                {/* Name */}
                                <h2 className="text-2xl md:text-3xl font-bold text-[#a9e8ff] text-center mb-4 z-10 group-hover:text-white transition-colors duration-300">
                                    {speaker.name}
                                </h2>

                                {/* Divider */}
                                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#a9e8ff] to-transparent mb-4 group-hover:w-24 transition-all duration-500"></div>

                                {/* Description */}
                                <p className="text-[#e7faff] text-sm md:text-base leading-relaxed text-center z-10 group-hover:text-white transition-colors duration-300">
                                    {speaker.description}
                                </p>

                                {/* Hover indicator */}
                                <div className="mt-6 text-[#a9e8ff] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                    Learn More →
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>

            {/* Bottom decoration */}
            <div className="max-w-4xl mx-auto mt-16 px-4">
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 text-center">
                    <p className="text-[#e3faff] text-sm md:text-base italic">
                        Click on any speaker card to learn more about their journey and expertise
                    </p>
                </div>
            </div>
        </div>
    );
}