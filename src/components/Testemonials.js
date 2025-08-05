// components/Testimonials.js
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: 'The team did an outstanding job on my home. It has never looked so clean! Highly recommended.',
      name: 'Sarah J.',
    },
    {
      quote: 'Sparkle Clean has been our go-to for office cleaning for years. Always reliable and professional.',
      name: 'Michael T.',
    },
    {
      quote: 'My old sofa looks brand new after their upholstery cleaning service. I am amazed by the results.',
      name: 'Emily R.',
    },
    {
      quote: 'Ramaya Cleaning did an amazing job!',
      name: 'Satisfied Customer',
    },
  ];

  return (
    <section className="py-20 bg-gray-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl letter font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white box p-8 rounded-xl shadow-lg">
              <p className="italic text-gray-600 mb-4">"{testimonial.quote}"</p>
              <p className="font-bold text-blue-500">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;