"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';

const navLinks = [
  { name: 'Domů', href: '/' },
  { name: 'Galerie', href: '/galerie' },
  { name: 'Kontakt', href: '/kontakt' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);           // mobile menu open?
  const [isInfoHover, setIsInfoHover] = useState(false); // desktop “Informace” hover
  const hideInfoTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleInfoMouseEnter = () => {
    if (hideInfoTimeout.current) clearTimeout(hideInfoTimeout.current);
    setIsInfoHover(true);
  };
  const handleInfoMouseLeave = () => {
    hideInfoTimeout.current = setTimeout(() => {
      setIsInfoHover(false);
    }, 200);
  };

  return (
    <nav className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/logo-white.svg"
                alt="Logo Apartmánového domu"
                width={150}
                height={150}
                priority
              />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link
                key={link.name}
                href={link.href}
                className="relative group px-1 py-2 font-medium"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}

            {/* Desktop “Informace” dropdown */}
            <div
              className="relative"
              onMouseEnter={handleInfoMouseEnter}
              onMouseLeave={handleInfoMouseLeave}
            >
              <button className="px-1 py-2 font-medium flex items-center">
                Informace
                <svg
                  className="ml-1 h-4 w-4 transform transition-transform duration-200"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              {isInfoHover && (
                <div className="absolute left-0 mt-2 w-48 bg-blue-950 text-white rounded-md shadow-lg z-50">
                  <Link href="/vybaveni" className="block px-4 py-2 hover:bg-blue-800">
                    Vybavení apartmánu
                  </Link>
                  <Link href="/tipy" className="block px-4 py-2 hover:bg-blue-800">
                    Tipy na výlety
                  </Link>
                  <Link href="/aktuality" className="block px-4 py-2 hover:bg-blue-800">
                    Aktuality
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/rezervace"
              className="inline-block px-4 py-2 font-semibold rounded-lg bg-[#FF9149] hover:bg-orange-500 transition-colors duration-200"
            >
              Rezervace
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(prev => !prev)}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                // X icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"/>
                </svg>
              ) : (
                // Hamburger icon
                <div className="space-y-1">
                  <span className="block w-6 h-0.5 bg-white"></span>
                  <span className="block w-6 h-0.5 bg-white"></span>
                  <span className="block w-6 h-0.5 bg-white"></span>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-950 px-2 pt-2 pb-3 space-y-1">
          {navLinks.map(link => (
            <Link
              key={link.name}
              href={link.href}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800"
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Informace submenu */}
          <MobileInfoMenu />

          <Link
            href="/reservation"
            className="block w-full text-center px-3 py-2 rounded-md font-semibold bg-[#FF9149] hover:bg-orange-500 transition-colors duration-200"
          >
            Rezervace
          </Link>
        </div>
      )}
    </nav>
  );
}

// Separated component for Mobile “Informace” submenu
function MobileInfoMenu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800"
      >
        Informace
        <svg
          className={`h-4 w-4 transform transition-transform ${open ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
        </svg>
      </button>
      {open && (
        <div className="pl-4 space-y-1">
          <Link href="/vybaveni" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800">
            Vybavení apartmánu
          </Link>
          <Link href="/tipy" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800">
            Tipy na výlety
          </Link>
          <Link href="/aktuality" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800">
            Aktuality
          </Link>
        </div>
      )}
    </>
  );
}
