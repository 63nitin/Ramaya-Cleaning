// components/AboutUsPage.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

const AboutUsPage = () => {
  return (
    <div className="bg-gray-300 mt-10  min-h-screen py-16">
      <div className="container mx-auto px-4 md:px-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl letter font-extrabold text-gray-900 mb-4 drop-shadow-md">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Redefining what it means to be a cleaning service with a commitment to excellence and care.
          </p>
        </header>

        <section className=" p-8 md:p-12 rounded-3xl shadow-xl mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                More Than Just a Clean
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                At Sparkle Clean, we believe a clean space is a catalyst for a happier, healthier life. Our mission is to provide more than just a cleaning service; we're here to create pristine environments that allow you to relax, focus, and thrive.
              </p>
              <p className="text-lg text-gray-700">
                Our journey began with a simple idea: to redefine what it means to be a cleaning service. We saw a need for a company that combined exceptional quality with genuine care and trustworthiness. From our humble beginnings, we've grown into a team of dedicated professionals who are passionate about bringing a sparkle to every corner.
              </p>
              <p>
                We&apos;re passionate about cleaning and delivering the best results for our clients.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/about.jpg"
                alt="A professional cleaning team smiling"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="box p-8 md:p-12 rounded-3xl shadow-xl mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Our Commitment to Excellence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start">
              <FaCheckCircle className="text-blue-500 w-6 h-6 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Professional, Vetted Team</h3>
                <p className="text-gray-600">
                  We hand-pick and thoroughly train every member of our team. Each of our cleaners is fully vetted, insured, and committed to providing a reliable and friendly service.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <FaCheckCircle className="text-blue-500 w-6 h-6 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Eco-Friendly Solutions</h3>
                <p className="text-gray-600">
                  We prioritize your health and the planet's by exclusively using non-toxic, biodegradable, and eco-friendly cleaning products that are safe for everyone.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <FaCheckCircle className="text-blue-500 w-6 h-6 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Tailored for You</h3>
                <p className="text-gray-600">
                  We work closely with you to create a customized cleaning plan that fits your specific needs and schedule, ensuring a personalized service every time.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="text-center p-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready for a Sparkle Clean?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the difference of a truly professional clean. We stand behind our work with a 100% satisfaction guarantee.
          </p>
          <Link
            href="/contact" // Link back to the services section on your homepage
            className="button inline-block py-3 px-8 rounded-full bg-blue-500 text-white font-bold
                     text-lg shadow-[0px_0px_20px_rgba(59,130,246,0.5)]
                     transition-all duration-300 ease-in-out
                     hover:bg-blue-400 hover:shadow-[0px_0px_25px_rgba(59,130,246,0.7)]
                     transform hover:-translate-y-1"
          >
            BOOK YOUR SERVICE TODAY
          </Link>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;