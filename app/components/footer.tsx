"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="flex flex-col items-center sm:items-start">
          <Link href="/">
            <Image
              src="/images/logo-white.svg"
              alt="Logo Apartmánového domu"
              width={140}
              height={140}
              priority
            />
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-center sm:text-left">
            Útulné ubytování s výhledem na jezero.<br />
            Kovářov 48, 382 79 Frymburk
          </p>
        </div>

        {/* Navigace */}
        <div className="flex flex-col items-center">
          <h5 className="text-base font-semibold mb-3 uppercase tracking-wider">Navigace</h5>
          <ul className="space-y-2 text-sm">
            {['Domů', 'Galerie', 'Vybaveni', 'Kontakt'].map((item) => (
              <li key={item}>
                <Link href={item === 'Domů' ? '/' : `/${item.toLowerCase()}`} className="hover:text-white transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontakt */}
        <div className="flex flex-col items-center">
          <h5 className="text-base font-semibold mb-3 uppercase tracking-wider">Kontakt</h5>
          <p className="text-sm">dvezatoky6@gmail.com</p>
          <p className="text-sm mt-2">+420 602 359 047</p>
          <div className="flex space-x-4 mt-4">
            <Link href="#" aria-label="Facebook" className="hover:text-white transition-colors">
              {/* Facebook SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12..." />
              </svg>
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:text-white transition-colors">
              {/* Instagram SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.2c3.2 0..." />
              </svg>
            </Link>
          </div>
        </div>

        
      </div>

      <div className="mt-12 border-t border-blue-700 pt-6 text-center text-xs text-gray-400">
        &copy;&nbsp;
        <span suppressHydrationWarning>
          {year}
        </span>
        &nbsp;Apartmánový dům. Všechna práva vyhrazena.
      </div>
    </footer>
  );
}
