// components/Footer.js
import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Sparkle Clean</h3>
            <p className="text-gray-400">
              Your trusted partner for professional cleaning services. We bring the sparkle back!
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#services" className="hover:text-amber-400 transition-colors">Services</Link></li>
              <li><Link href="#about" className="hover:text-amber-400 transition-colors">About Us</Link></li>
              <li><Link href="#testimonials" className="hover:text-amber-400 transition-colors">Testimonials</Link></li>
              <li><Link href="#" className="hover:text-amber-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors"><FaFacebook className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors"><FaTwitter className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors"><FaInstagram className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Sparkle Clean. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;