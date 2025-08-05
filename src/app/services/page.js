// components/ServicesPage.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

const ServicesPage = () => {
  return (
    <div className="bg-gray-300 mt-10 min-h-screen py-16">
      <div className="container mx-auto px-4 md:px-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl letter md:text-6xl font-extrabold text-gray-900 mb-4 drop-shadow-md">
            Our Cleaning Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive range of professional cleaning services tailored to fit your unique needs.
          </p>
        </header>

        {/* Residential Cleaning Section */}
        <section className=" p-8 md:p-12 rounded-3xl shadow-xl mb-16">
          <div className="card grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Residential Cleaning
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Your home is your sanctuary, and we're here to keep it spotless. Our residential services are tailored to fit your lifestyle, from regular upkeep to a one-time deep clean. We work with you to create a customized plan that covers every detail.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-lg text-gray-700">
                  <FaCheckCircle className="text-blue-500 w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <span>Routine Cleaning for consistent tidiness.</span>
                </li>
                <li className="flex items-start text-lg text-gray-700">
                  <FaCheckCircle className="text-blue-500 w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <span>Deep Cleaning that revitalizes every room&apos;.</span>
                </li>
                <li className="flex items-start text-lg text-gray-700">
                  <FaCheckCircle className="text-blue-500 w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <span>Move-In/Move-Out Cleaning for a fresh start.</span>
                </li>
              </ul>
            </div>
            <div className="hidden md:block">
              <Image
                src="/cleaning1.jpg"
                alt="A sparkling clean kitchen after residential cleaning"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Commercial Cleaning Section */}
        <section className=" p-8 md:p-12 rounded-3xl shadow-xl mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="hidden md:block">
              <Image
                src="/cleaning2.jpg"
                alt="A modern office space being professionally cleaned"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Commercial Cleaning
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                A clean workplace is essential for productivity and making a great first impression. We provide reliable and efficient commercial cleaning services for offices, retail spaces, and other business environments with flexible scheduling.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-lg text-gray-700">
                  <FaCheckCircle className="text-blue-500 w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <span>Office Cleaning, from desks to break rooms.</span>
                </li>
                <li className="flex items-start text-lg text-gray-700">
                  <FaCheckCircle className="text-blue-500 w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <span>Retail Space Cleaning to welcome your customers.</span>
                </li>
                <li className="flex items-start text-lg text-gray-700">
                  <FaCheckCircle className="text-blue-500 w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <span>Restroom Sanitization for a hygienic environment.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Furniture & Upholstery Section */}
        <section className=" p-8 md:p-12 rounded-3xl shadow-xl mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Furniture & Upholstery Cleaning
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Revitalize your furniture and extend its life with our professional upholstery cleaning. Our specialized methods safely and effectively remove dirt, odors, and stains, leaving your furniture looking and smelling fresh.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start text-lg text-gray-700">
                  <FaCheckCircle className="text-blue-500 w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <span>Fabric-specific techniques for a safe clean.</span>
                </li>
                <li className="flex items-start text-lg text-gray-700">
                  <FaCheckCircle className="text-blue-500 w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <span>Targeted stain and odor removal.</span>
                </li>
                <li className="flex items-start text-lg text-gray-700">
                  <FaCheckCircle className="text-blue-500 w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <span>Allergen reduction for improved air quality.</span>
                </li>
              </ul>
            </div>
            <div className="hidden md:block">
              <Image
                src="/cleaning3.jpg"
                alt="A sofa being cleaned with professional upholstery equipment"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="text-center bg-blue-100 p-8 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to experience the Sparkle Clean difference?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We are committed to providing a transparent, high-quality, and reliable service. Get a free, no-obligation quote today!
          </p>
          <Link
            href="/contact" // Or wherever your booking page is located
            className="button inline-block py-3 px-8 rounded-full bg-blue-500 text-white font-bold
                     text-lg shadow-[0px_0px_20px_rgba(59,130,246,0.5)]
                     transition-all duration-300 ease-in-out
                     hover:bg-blue-400 hover:shadow-[0px_0px_25px_rgba(59,130,246,0.7)]
                     transform hover:-translate-y-1"
          >
            GET A FREE QUOTE
          </Link>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;