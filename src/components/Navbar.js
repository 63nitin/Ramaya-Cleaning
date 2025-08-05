'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Import Link for internal navigation
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

// A single, reusable link component for both desktop and mobile
const CustomNavLink = ({ href, children, isMobile = false, onClick }) => (
  <Link
    href={href}
    onClick={onClick}
    className={`
      ${isMobile 
        ? 'block w-full px-3 py-2 text-center text-[#333333] hover:bg-[#F5F5F5] hover:text-[#5ABEFF] rounded-md transition'
        : 'text-[#333333] hover:text-[#5ABEFF] font-medium px-3 py-2 rounded-md text-lg transition'
      }
    `}
  >
    {children}
  </Link>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT US' },
    { href: '/services', label: 'SERVICES' },
    { href: '/contact', label: 'CONTACT' },
  ];

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 border-none card shadow-md
        transition-all duration-300 ease-in-out lg:p-3 ${inter.className}
        ${isScrolled ? 'rounded-xl top-3 left-3 right-3' : 'py-2'}
      `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" onClick={closeMobileMenu}>
              {/* Using next/image for optimized image handling */}
              {/* Estimated width and height based on h-16 class and expected aspect ratio */}
              <Image
                src="/logo.png" // Make sure to update this path
                alt="ramaya-cleaning-logo"
                width={100} // Estimate width based on aspect ratio and h-16 (64px height) with some scaling
                height={64} // h-16 corresponds to 64px
                className="line scale-150 hover:scale-200 transition all ease-in-out duration-300" // Keep original styling classes
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:flex-1 md:ml-10 lg:ml-20">
            <div className="flex  space-x-4 lg:space-x-6">
             <div className=" line flex space-x-4">
                 {navLinks.map((link) => (
                <CustomNavLink  key={link.href} href={link.href}>
                  {link.label}
                </CustomNavLink>
              ))}
              </div>
            </div>
            <Link
              href="/contact"
              className=" button ml-4 py-2 px-4 rounded-2xl bg-[#5ABEFF] text-white font-bold shadow-[0px_0px_12px_rgba(90,190,255,0.3)] transition hover:shadow-md"
            >
              GETTING STARTED
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex md:hidden ">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex p-2 rounded-md bg-white text-[#333333] shadow-sm border focus:outline-none focus:ring-2 focus:ring-[#5ABEFF] transition-all ease-in-out duration-300"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden  bg-transparent transition-all ease-in-out duration-700  overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 p-5 opacity-100 py-2' : 'max-h-0 opacity-0'
        }`}
        id="mobile-menu"
      >
        <div className="card bg-transparent space-y-2 pb-5  text-center rounded-4xl">
          {navLinks.map((link) => (
            <CustomNavLink key={link.href} href={link.href} isMobile onClick={closeMobileMenu}>
              {link.label}
            </CustomNavLink>
          ))}
          <Link
            href="/contact"
            onClick={closeMobileMenu}
            className="button p-3 mx-auto  py-2  bg-[#5ABEFF] text-white font-semibold rounded-full items-center justify-center shadow transition hover:shadow-lg"
          >
            GETTING STARTED
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;