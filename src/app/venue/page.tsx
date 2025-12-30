"use client"

import React from 'react';
import { MapPin, Mail } from 'lucide-react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '50vw',
    height: '50vh'
};


const center = {
    lat: 22.4983409862929,
    lng: 88.37120718718914
};


export default function Venue() {
    return (
        <div className="ocean-bg min-h-screen w-full">
            <div className="flex flex-col font-extrabold text-4xl lg:text-5xl items-center pt-24 pb-2">
                VENUE
            </div>

            <div className="flex flex-col mt-10 md:flex-row">
                <div className="m-5 p-0 flex justify-center">
                    {/* <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={16}
                        >
                            <Marker position={center} />
                        </GoogleMap>
                    </LoadScript> */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.1560221207365!2d88.36862681153707!3d22.49832863560191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271236069f175%3A0xcee7537188e8fa9c!2sDr.%20Triguna%20Sen%20Auditorium!5e0!3m2!1sen!2sin!4v1767108407210!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                <div className="m-5 justify-center w-full">
                    <div className="text-3xl flex font-extrabold justify-center">
                        Jadavpur University
                    </div>

                    <div className="bg-white p-10 m-10 rounded-lg text-black ">
                        <div className="text-lg flex font-bold justify-center">
                            <MapPin className="m-1" size={20} /> DR. TRIGUNA SEN AUDITORIUM
                        </div>

                        188, Raja Subodh Chandra Mallick Rd, Jadavpur University Campus Area, Jadavpur, Kolkata, West Bengal 700032
                    </div>

                    <div>
                        <a className = "flex justify-center m-10 text-lg" href="mailto:jaduniv.ieee@gmail.com">
                            <Mail className = "m-1" size={20} /> jaduniv.ieee@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}