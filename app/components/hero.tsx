"use client";
 
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
 
export default function HeroSection() {
  // Array of image sources
  const images = [
    '/images/IMG_1590.webp',
    '/images/IMG_0364.webp',
    '/images/apt_66.webp',
  ];
 
  const [current, setCurrent] = useState(0);
 
  // Change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]); // ← přidali jsme sem images.length
 
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background slideshow */}
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={src}
            alt={`Slideshow image ${index + 1}`}
            fill
            style={{ objectFit: 'cover' }}
            priority={index === 0}
          />
        </div>
      ))}
 
      {/* Light overlay to slightly darken image */}
      <div className="absolute inset-0 bg-black opacity-40" />
 
      {/* Content: text highlighted with drop-shadow for visibility */}
      <div className="relative z-10 px-4 text-center max-w-2xl">
        <h1
          className={`
            text-3xl sm:text-4xl lg:text-5xl
            font-black text-orange-200 mb-4
            [text-shadow:2px_1px_0_#172554]
          `}
        >
          PRONÁJEM APARTMÁNU
        </h1>
 
        <p
          className={`
            text-base sm:text-lg mb-6 text-white
            [text-shadow:2px_2px_2px_rgba(0,0,0,0.8)]
          `}
        >
          Užijte si klidné prostředí a prvotřídní vybavení během vašeho pobytu.
        </p>
 
        <Link
          href="/reservation"
          className="inline-block px-6 py-3 text-lg font-semibold rounded-lg bg-[#FF9149] hover:bg-orange-500 transition-colors duration-200 drop-shadow-lg sm:hidden"
        >
          Rezervujte nyní
        </Link>
      </div>
    </section>
  );
}