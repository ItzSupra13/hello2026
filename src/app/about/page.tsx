// import { Card } from "@/components/ui/card"

export default function AboutSection() {
    const events = [
        {
            id: 1,
            name: "Double // Slash",
            image: "/about/doubleslash.png",
            description: "Double Slash, organised by IEEE JUSB is Jadavpur University's first ever offline 24 hour hackathon. Here different tracks are provided for the participants. Double Slash attracts uniqueness and creativity packaged in the form of coding and reasoning. IEEE JUSB is going to soon present Double Slash with a bang, so interested participants may as well start to gear up!"
        },
        {
            id: 2,
            name: "TechX",
            image: "/about/techX.png",
            description: "IEEE JUSB is the proud pioneer of TechX Congress which has become a global sensation since. The second edition took place in Shantiniketan and featured talks on diverse topics and an extensive workshop on augmented reality. Stuffed with hackathons and quizzes, this was undoubtedly IEEE JUSB's one of the most enriching and enjoyable events!"
        },
        {
            id: 3,
            name: "EarthXChange",
            image: "/about/earthXchange.png",
            description: "EarthXChange served as a platform to address rising concerns on climate changes and global issues. Insightful talks from industry experts along with competitions and hackathons with different tracks centred on climate sustainability served to stimulate the technical acumen of aspiring students!"
        },
        {
            id: 4,
            name: "MLAS",
            image: "/about/mlas.png",
            description: "Machine Learning Accelerator Summit is an event solely dedicated to providing the participants with a strong foundation in Machine Learning. With sessions on python, hands on workshops on machine learning and deep learning and contests the event provided the participants the thrust for them to move forward in their quest of Machine Learning."
        },
        {
            id: 5,
            name: "Cypher 3331",
            image: "/about/cypher.png",
            description: "Organised by IEEE JUSB at Jadavpur University's annual tech - fest Srijan, Cypher is an exhilirating event based on cryptography and the art of coding and decoding, inviting more than 700 registrations in a span of only 24 hours . Paricipants were taught about different cyphers and challenged with brain storming questions, with the level advancing in later rounds."
        }
    ]

    return (
        <div className="min-h-screen w-full bg-gradient-to-b from-[#003f5c] via-[#046b8a] to-[#05a2c2] text-white py-16 px-4">
            {/* Header */}
            <div className="flex flex-col font-extrabold text-5xl lg:text-6xl items-center mb-16 drop-shadow-2xl tracking-wide">
                <div className="relative">
                    <span className="bg-gradient-to-r from-[#a9e8ff] to-white bg-clip-text text-transparent">
                        ABOUT US
                    </span>
                    <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#a9e8ff] to-transparent"></div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto mb-20">
                <div className="bg-white/15 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-2xl border border-white/20">
                    <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-justify">
                        At IEEE JUSB, we&apos;re more than just a student chapter—we&apos;re a dynamic community of innovators, creators, and problem-solvers committed to driving change through collaboration. Founded in 2010 at one of the oldest and most prestigious universities in the country, JADAVPUR UNIVERSITY, we belong to the Kolkata section of Region 10. As one of the most active student branches in our section, we are there to support you every step of the way whether you&apos;re starting and eager to learn, ready to present your ideas, or passionate about diving into the world of technology or design. Through hands-on workshops, engaging seminars, and other large-scale events thriving throughout the year we intend to bridge the gap between knowledge and real-world application. Together, we spark the fire of learning and innovation, thus building a passionate community that stands on sharing ideas and making impacts!
                    </p>
                </div>
            </div>

            {/* Events Section */}
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#a9e8ff] drop-shadow-lg">
                    Our Signature Events
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event) => (
                        <div 
                            key={event.id}
                            className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-[#a9e8ff]/30 transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* Image Container */}
                            <div 
                                className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundImage: `url('${event.image}')` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-[#022c3d] via-[#022c3d]/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                            </div>
                            
                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#022c3d] to-transparent">
                                <h3 className="text-2xl font-bold text-[#a9e8ff] mb-3 drop-shadow-lg">
                                    {event.name}
                                </h3>
                                <p className="text-sm text-[#e3faff] leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                                    {event.description}
                                </p>
                            </div>
                            
                            {/* Decorative corner accent */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#a9e8ff]/20 to-transparent rounded-bl-full"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}