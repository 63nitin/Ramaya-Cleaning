// components/ContactPage.js
"use client";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactPage = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Replace with your actual Service ID, Template ID, and Public Key
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    emailjs.sendForm(serviceID, templateID, form.current, {
      publicKey: publicKey,
    }).then(
      (result) => {
        setSubmitStatus('success');
        setIsSubmitting(false);
        form.current.reset(); // Clear form fields on success
        console.log('SUCCESS!', result.text);
      },
      (error) => {
        setSubmitStatus('error');
        setIsSubmitting(false);
        console.log('FAILED...', error.text);
      },
    );
  };

  return (
    <div className="bg-gray-300 min-h-screen mt-10 py-16">
      <div className="container mx-auto px-4 md:px-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl letter md:text-6xl font-extrabold text-gray-900 mb-4 drop-shadow-md">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;d love to hear from you. Fill out the form below or use our contact details to reach out directly.
          </p>
          <p>
            Feel free to reach out &mdash; we&amp;apos;re here to help!
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <section className="box card p-8 md:p-12 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="user_name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="user_email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="user_phone" className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="user_phone"
                  id="user_phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Your Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className=" button w-full py-3 px-8 rounded-full bg-blue-500 text-white font-bold
                           text-lg shadow-[0px_0px_20px_rgba(59,130,246,0.5)]
                           transition-all duration-300 ease-in-out
                           hover:bg-blue-400 hover:shadow-[0px_0px_25px_rgba(59,130,246,0.7)]
                           disabled:bg-blue-300 disabled:shadow-none"
              >
                {isSubmitting ? 'Sending...' : 'SEND MESSAGE'}
              </button>
              {submitStatus === 'success' && (
                <p className="mt-4 text-green-600 text-center font-semibold">Your message has been sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="mt-4 text-red-600 text-center font-semibold">Failed to send message. Please try again later.</p>
              )}
            </form>
          </section>

          {/* Contact Details Section */}
          <section className="box p-8 md:p-12 rounded-3xl shadow-xl flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center md:text-left">
              Contact Details
            </h2>
            <ul className="space-y-6">
              <li className="flex items-center text-gray-700 text-lg">
                <FaEnvelope className="w-6 h-6 text-blue-500 mr-4 flex-shrink-0" />
                <span>info@sparkleclean.com</span>
              </li>
              <li className="flex items-center text-gray-700 text-lg">
                <FaPhone className="w-6 h-6 text-blue-500 mr-4 flex-shrink-0" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-start text-gray-700 text-lg">
                <FaMapMarkerAlt className="w-6 h-6 text-blue-500 mr-4 mt-1 flex-shrink-0" />
                <span>123 Clean Street, Sparkle City, SC 54321</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;