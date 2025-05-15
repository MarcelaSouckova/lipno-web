import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'

export interface Photo {
  src: string
  alt?: string
}

interface Category {
  name: string
  photos: Photo[]
}

export default function Gallery() {
  const categories: Category[] = [
    {
      name: 'Okolí',
      photos: [
        { src: '/images/okolí 1.jpg', alt: 'Okolí 1' },
        { src: '/images/okolí 2.jpg', alt: 'Okolí 2' },
        { src: '/images/okolí 3.jpeg', alt: 'Okolí 3' },
        { src: '/images/okolí 4.jpg', alt: 'Okolí 4' },
        { src: '/images/okolí 5.jpg', alt: 'Okolí 5' },
        { src: '/images/okolí 6.jpg', alt: 'Okolí 6' },
        { src: '/images/okolí 7.jpg', alt: 'Okolí 7' },
        { src: '/images/okolí 8.jpeg', alt: 'Okolí 8' },
        { src: '/images/okolí 9.jpg', alt: 'Okolí 9' },
        { src: '/images/okolí 10.jpg', alt: 'Okolí 10' },
        { src: '/images/okolí 11.jpeg', alt: 'Okolí 11' },
        { src: '/images/okolí 12.jpg', alt: 'Okolí 12' },
        { src: '/images/okolí 13.jpeg', alt: 'Okolí 13' },
        { src: '/images/okolí 14.jpeg', alt: 'Okolí 13' },
        { src: '/images/okolí 15.jpeg', alt: 'Okolí 13' },
        { src: '/images/okolí 16.jpeg', alt: 'Okolí 13' },
        { src: '/images/okolí 17.jpeg', alt: 'Okolí 13' },
        { src: '/images/okolí 18.jpeg', alt: 'Okolí 13' },
        { src: '/images/okolí 19.jpeg', alt: 'Okolí 13' },
        { src: '/images/okolí 20.jpeg', alt: 'Okolí 13' },
        { src: '/images/okolí 21.jpeg', alt: 'Okolí 13' },
        { src: '/images/okolí 22.jpeg', alt: 'Okolí 13' },
        { src: '/images/okolí 23.jpeg', alt: 'Okolí 13' },
        { src: '/images/okolí 24.jpeg', alt: 'Okolí 13' },
        
       
      ],
    },
    {
      name: 'Apartmán',
      photos: [
        { src: '/images/apt 1.jpg', alt: 'Apartmán 1' },
        { src: '/images/apt 2.jpg', alt: 'Apartmán 2' },
        { src: '/images/apt 3.jpg', alt: 'Apartmán 3' },
        { src: '/images/apt 4.webp', alt: 'Apartmán 4' },
        { src: '/images/apt 5.jpeg', alt: 'Apartmán 5' },
        { src: '/images/apt 6.jpg', alt: 'Apartmán 6' },
        { src: '/images/apt 7.jpg', alt: 'Apartmán 7' },
        { src: '/images/apt 8.jpg', alt: 'Apartmán 8' },
        { src: '/images/apt 9.jpg', alt: 'Apartmán 9' },
        { src: '/images/apt 10.jpg', alt: 'Apartmán 10' },
        { src: '/images/apt 11.jpg', alt: 'Apartmán 11' },
        { src: '/images/apt 12.jpeg', alt: 'Apartmán 12' },
        { src: '/images/apt 13.jpg', alt: 'Apartmán 13' },
        { src: '/images/apt 14.jpg', alt: 'Apartmán 14' },
        { src: '/images/apt 15.jpg', alt: 'Apartmán 15' },
        { src: '/images/apt 16.jpg', alt: 'Apartmán 16' },
        { src: '/images/apt 17.jpeg', alt: 'Apartmán 17' },
        { src: '/images/apt 18.jpg', alt: 'Apartmán 18' },
        { src: '/images/apt 19.jpg', alt: 'Apartmán 19' },
        { src: '/images/apt 20.jpeg', alt: 'Apartmán 20' },
        { src: '/images/apt 21.jpg', alt: 'Apartmán 21' },
       
      ],
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const activeCategory = categories[activeIndex]

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12">
      {/* Návrat na hlavní stránku */}
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center text-indigo-500 hover:underline text-sm font-medium"
        >
          <FiArrowLeft className="w-4 h-4 mr-2" />
          Návrat na hlavní stránku
        </Link>
      </div>

      {/* Nadpis a krátký popis */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-blue-950">Galerie</h2>
        <p className="text-gray-600">Prohlédněte si fotografie apartmánu a jeho okolí.</p>
      </div>

      {/* Přepínače kategorií */}
      <div className="flex justify-center mb-6 space-x-4">
        {categories.map((cat, idx) => (
          <button
            key={cat.name}
            onClick={() => setActiveIndex(idx)}
            className={`px-4 py-2 rounded-md font-medium transition-colors duration-200
              ${idx === activeIndex
                ? 'bg-orange-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`
            }
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Mřížka fotek */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {activeCategory.photos.map((photo, i) => (
          <div key={i} className="relative w-full h-60 rounded overflow-hidden">
            <Image
              src={photo.src}
              alt={photo.alt || ''}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
