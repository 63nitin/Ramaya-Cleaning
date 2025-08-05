// components/Services.js
import React from 'react';
import { FaHome, FaBuilding, FaCouch } from 'react-icons/fa';

const Services = () => {
  const serviceItems = [
    {
      icon: <FaHome className="w-12 h-12 text-blue-500 mx-auto mb-4" />,
      title: 'Residential Cleaning',
      description: 'From deep cleaning to regular maintenance, we keep your home spotless and comfortable.',
    },
    {
      icon: <FaBuilding className="w-12 h-12 text-blue-500 mx-auto mb-4" />,
      title: 'Commercial Cleaning',
      description: 'Ensure a clean, hygienic, and professional environment for your employees and clients.',
    },
    {
      icon: <FaCouch className="w-12 h-12 text-blue-500 mx-auto mb-4" />,
      title: 'Furniture & Upholstery',
      description: 'Revitalize your furniture with our specialized cleaning techniques, removing stains and odors.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 letter">Our Services</h2>
        <div className=" grid grid-cols-1 space-x-4 md:grid-cols-3 gap-8">
          {serviceItems.map((item, index) => (
            <div key={index} className="box  p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
              {item.icon}
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;