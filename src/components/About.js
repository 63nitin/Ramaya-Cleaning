// components/AboutUs.js
import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-gray-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 letter">About Ramaya Cleaning</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className='box rounded-2xl'>
            <Image src="/team.jpg" alt="A team of professional cleaners" width={600} height={400} className="rounded-xl shadow-lg" />
          </div>
          <div>
            <p className="text-gray-700 text-lg font-mono mb-4">
              At Sparkle Clean, we believe that a clean space is a happy space. We are a team of dedicated and highly-trained professionals committed to providing exceptional cleaning services that meet your unique needs.
            </p>
            <p className="text-gray-700 text-lg">
              Using eco-friendly products and state-of-the-art equipment, we guarantee a thorough and safe cleaning experience for your home or business. Your satisfaction is our top priority.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;