import React from 'react';
import Image from 'next/image';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

interface Event {
  title: string;
  date: string;
  location: string;
  imageSrc: string;
  description: string;
  link?: string;
}

const events: Event[] = [
  {
    title: 'Letní folklorní festival',
    date: '12. července 2025',
    location: 'Hrad Vítkův Kámen',
    imageSrc: '/images/folk_festival.jpg',
    description: 'Týden plný lidových písní, tanců a řemeslných trhů v malebném prostředí hradu.',
    link: 'https://example.com/folk-festival'
  },
  {
    title: 'Farmářský trh u jezera',
    date: 'Každou sobotu od 9:00 do 13:00',
    location: 'Náměstí Frymburk',
    imageSrc: '/images/farmarsky_trh.jpg',
    description: 'Čerstvé produkty od místních farmářů, pečivo, sýry, med a domácí lahůdky.',
  },
  {
    title: 'Letní kino pod širým nebem',
    date: 'červen – srpen, pátek 21:00',
    location: 'Amfiteátr Frymburk',
    imageSrc: '/images/open_air_cinema.jpg',
    description: 'Promítání klasických i nových filmů přímo pod hvězdami. Vstup zdarma.',
  },
  
  
  
];

export default function Udalosti() {
  return (
    <section className="max-w-screen-lg mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Akce a události</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((evt, idx) => (
          <div key={idx} className="bg-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src={evt.imageSrc}
                alt={evt.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{evt.title}</h3>
              <div className="flex items-center text-gray-500 text-sm mb-1 space-x-2">
                <FiCalendar className="w-4 h-4" />
                <span>{evt.date}</span>
              </div>
              <div className="flex items-center text-gray-500 text-sm mb-3 space-x-2">
                <FiMapPin className="w-4 h-4" />
                <span>{evt.location}</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">{evt.description}</p>
              {evt.link && (
                <a
                  href={evt.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-indigo-600 hover:underline text-sm font-medium"
                >Více informací</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
