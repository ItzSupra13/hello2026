"use client"
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import { MapPin, Mail, Navigation } from 'lucide-react';
import Link from 'next/link';

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
    <div className="ocean-bg min-h-screen w-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="flex flex-col items-center pt-24 pb-8 px-4">
        <div className="inline-block mb-4">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full shadow-lg">
            <MapPin className="text-white" size={32} />
          </div>
        </div>
        <div className="flex flex-col font-extrabold text-5xl lg:text-6xl items-center mb-16 drop-shadow-2xl tracking-wide">
          <div className="relative">
            <span className="bg-gradient-to-r from-[#a9e8ff] to-white bg-clip-text text-transparent">
              SPEAKERS
            </span>
            <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#a9e8ff] to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Map Section */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.1560221207365!2d88.36862681153707!3d22.49832863560191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271236069f175%3A0xcee7537188e8fa9c!2sDr.%20Triguna%20Sen%20Auditorium!5e0!3m2!1sen!2sin!4v1767108407210!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="w-full lg:w-1/2 space-y-6">

            {/* University Name */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-extrabold text-gray-800 mb-2">
                Jadavpur University
              </h2>
              <p className="text-gray-600 text-lg">A Premier Institution of Learning</p>
            </div>

            {/* Address Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                    <MapPin className="text-white" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    DR. TRIGUNA SEN AUDITORIUM
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    188, Raja Subodh Chandra Mallick Rd, Jadavpur University Campus Area, Jadavpur, Kolkata, West Bengal 700032
                  </p>
                </div>
              </div>

              <Link
                href="https://maps.google.com/?q=22.4983409862929,88.37120718718914"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Navigation size={20} />
                Get Directions
              </Link>
            </div>

            {/* Contact Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Mail className="text-white" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">Contact Us</h3>
                  <a
                    href="mailto:jaduniv.ieee@gmail.com"
                    className="text-blue-600 hover:text-indigo-600 font-medium transition-colors duration-200 flex items-center gap-2"
                  >
                    jaduniv.ieee@gmail.com
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}