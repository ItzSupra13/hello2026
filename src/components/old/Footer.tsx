"use client";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
    return (
        <div className="text-center p-4  bg-[#003f5c]  text-white text-sm">
            <p>Made with ❤️ by IEEE-JUSB</p>
            <div className="flex justify-center pt-2">
                <Link href="linkedin.com/company/ieee-ju" target="_blank" rel="noopener noreferrer" className="mx-2 text-white hover:text-gray-200">
                    <FaLinkedin size={20} />
                </Link>
                <Link href="https://www.facebook.com/ieeejusb" target="_blank" rel="noopener noreferrer" className="mx-2 text-white hover:text-gray-200">
                    <FaFacebook size={20} />
                </Link>
                <Link href="https://www.instagram.com/_ieeeju/" target="_blank" rel="noopener noreferrer" className="mx-2 text-white hover:text-gray-200">
                    <FaInstagram size={20} />
                </Link>
                <Link href="https://x.com/_ieeeju" target="_blank" rel="noopener noreferrer" className="mx-2 text-white hover:text-gray-200">
                    <FaTwitter size={20} />
                </Link>
            </div>
        </div>
    );
}
