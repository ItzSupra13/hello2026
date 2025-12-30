import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import HeroSection from "@/components/HeroSection";
import SpeakerSection from "@/components/SpeakerSection";
import SponsorSection from "@/components/SponsorSection";
import TimelineSection from "@/components/TimelineSection";
import VenueSection from "@/components/VenueSection";
import Image from "next/image";

export default function Home() {
	return (
		<div className="ocean-bg min-h-screen flex flex-col items-center p-8 text-center bg-gradient-to-b from-[#003f5c] via-[#046b8a] to-[#05a2c2] text-white">

			<main className="flex flex-col gap-4 font-bold text-xl sm:text-2xl items-center" style={{ alignItems: "center", height: "200px" }}>
				<Image
					src="/ieeejusb.png"
					alt="IEEE JUSB Logo"
					width={250}
					height={250}
					className="rounded-lg pt-20 drop-shadow-xl"
				/>
				<span className="font-medium text-[#c7f4ff] sm:text-xl md:text-2xl">presents</span>
			</main>

			<div className="text-4xl sm:text-6xl md:text-8xl font-extrabold 
				bg-gradient-to-r from-[#ced0f0] via-[#100abb] to-[#2f51e7]
				text-transparent bg-clip-text drop-shadow-lg animate-pulse pt-6 pb-6 mt-7">
				Hello IEEE 2026
			</div>

			<div className="pr-6 pl-6 md:pr-20 md:pl-20 mb-10 font-semibold text-xl md:text-2xl z-10 lg:text-3xl 
				bg-clip-text text-transparent bg-gradient-to-b from-[#e2faff] to-white drop-shadow-sm">
				Dive into the world where dreams become true, hand in hand with us as we attempt to enlighten your path!
			</div>

			<div className="flex justify-center">
				<a
					className="cursor-pointer border-2 border-[#a9e8ff] hover:border-white
					rounded-full px-6 py-3 font-bold
					bg-white/10 backdrop-blur-sm text-white hover:text-[#eaffff]
					transition-all duration-300 hover:shadow-[0_0_20px_5px_rgba(0,204,255,0.6)] hover:scale-105"
					href="/register"
				>
					Register!
				</a>
			</div>
			<p className="mt-10 text-xl font-semibold text-center text-gray-1	00 dark:text-gray-200">
				<span className="text-gradient">15.01.2026</span> @Triguna Sen Auditorium
			</p>
			{/* <>
				<HeroSection />
				<AboutSection />
				<TimelineSection />
				<SpeakerSection />
				<EventsSection />
				<SponsorSection />
				<VenueSection />
			</> */}

		</div>
	);
}
