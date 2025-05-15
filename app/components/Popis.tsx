"use client"

import React from 'react'
import Image from 'next/image'
import { HiCheck } from 'react-icons/hi'

export default function Popis() {
  return (
    <section id="description" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
          Krásný slunný apartmán
        </h2>

        <div className="grid grid-cols-1 gap-12">
          {/* 1. Sekce: Apartmán – obrázek vlevo, text vpravo */}
          <div className="flex flex-col md:flex-row items-center md:items-center">
            <Image
              src="/images/IMG_2468.jpg"
              alt="Interiér apartmánu"
              width={500}
              height={300}
              className="rounded-xl shadow-lg object-cover mb-6 md:mb-0 md:mr-6"
            />
            <ul className="space-y-4 text-gray-700 text-center md:text-left">
              <li className="flex items-center">
                <HiCheck className="text-green-500 w-6 h-6 mr-2" />
                Dispozice 2+kk
              </li>
              <li className="flex items-center">
                <HiCheck className="text-green-500 w-6 h-6 mr-2" />
                Terasa se zahradním nábytkem
              </li>
              <li className="flex items-center">
                <HiCheck className="text-green-500 w-6 h-6 mr-2" />
                Krbová kamna pro útulnou atmosféru
              </li>
              <li className="flex items-center">
                <HiCheck className="text-green-500 w-6 h-6 mr-2" />
                Parkovací místo a uzamykatelný prostor na kola/lyže
              </li>
              <li className="flex items-center">
                <HiCheck className="text-green-500 w-6 h-6 mr-2" />
                Možnost zapůjčení paddleboardů
              </li>
            </ul>
          </div>

          {/* 2. Sekce: Okolí – text vlevo, obrázek vpravo */}
          <div className="flex flex-col md:flex-row-reverse items-center md:items-center">
            <Image
              src="/images/IMG_1233.jpg"
              alt="Vodní nádrž Lipno"
              width={500}
              height={300}
              className="rounded-xl shadow-lg object-cover mb-6 md:mb-0 md:ml-6"
            />
            <ul className="space-y-4 text-gray-700 text-center md:text-left">
              <li className="flex items-center">
                <HiCheck className="text-green-500 w-6 h-6 mr-2" />
                Koupání v nádrži Lipno a vodní sporty
              </li>
              <li className="flex items-center">
                <HiCheck className="text-green-500 w-6 h-6 mr-2" />
                Turistické a cyklotrasy v Šumavě
              </li>
              <li className="flex items-center">
                <HiCheck className="text-green-500 w-6 h-6 mr-2" />
                Dětské hřiště a venkovní ohniště
              </li>
              <li className="flex items-center">
                <HiCheck className="text-green-500 w-6 h-6 mr-2" />
                Klidné prostředí v přírodě
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
