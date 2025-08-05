import React from 'react';
import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const HeroSection = () => {
  return (
    <section
      className={`
        relative h-screen flex items-center justify-center text-center bg-amber-50
        bg-cover bg-center bg-no-repeat
        before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-15
        ${inter.className}
      `}
      style={{
        backgroundImage: "url('/hero.png')",
      }}
    >
      <div className="card rounded-3xl relative z-10 p-4 max-w-4xl mx-auto">
        <h1 className="letter text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg">
          Innovate. Create. Elevate.
        </h1>
        <p className=" text-lg sm:text-xl md:text-2xl text-[#5caadffe] font-mono mb-8 px-4 sm:px-0 drop-shadow-md">
          Empowering your vision with cutting-edge technology solutions and unparalleled expertise.
          Let's build the future, together.
        </p>
        <Link
          href="/get-started"
          className="inline-block py-3 px-8 rounded-full bg-[#4baef0fe] text-white font-bold
                     text-lg shadow-[0px_0px_20px_rgba(90,190,255,0.5)]
                     transition-all duration-300 ease-in-out
                     hover:bg-[#409BFF] hover:shadow-[0px_0px_25px_rgba(90,190,255,0.7)]
                     transform hover:-translate-y-1"
        >
          GET STARTED
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
