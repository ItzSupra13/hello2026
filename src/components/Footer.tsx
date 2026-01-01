"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className="text-center ali p-4 bg-background/5 text-gray-500 text-sm">
            <p>Created by Sarin Sanyal</p>
            <div className="flex justify-center pt-2">
                <a href="https://www.linkedin.com/in/sarinsanyal" target="_blank" rel="noopener noreferrer" className="mx-2 text-gray-500 hover:text-gray-700">
                    <FaLinkedin size={20} />
                </a>
                <a href="https://github.com/sarinsanyal" target="_blank" rel="noopener noreferrer" className="mx-2 text-gray-500 hover:text-gray-700">
                    <FaGithub size={20} />
                </a>
                <a href="https://twitter.com/sarinsanyal" target="_blank" rel="noopener noreferrer" className="mx-2 text-gray-500 hover:text-gray-700">
                    <FaTwitter size={20} />
                </a>
            </div>
        </div>
    );
}
