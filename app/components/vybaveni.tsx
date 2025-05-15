"use client";

import React from 'react';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import { 
  GiValley,
  GiTowel,
  GiBarbecue,
  GiCookingPot,
  GiToaster,
  GiWashingMachine,
  GiTeapot,
  GiSpoon,
  GiShower,
} from 'react-icons/gi';
import {
  FaMountain,
  FaUmbrellaBeach,
  FaWater,
  FaBed,
  FaSoap,
  FaToiletPaper,
  FaBug,
  FaFire,
  FaThermometerHalf,
  FaTv,
  FaBookOpen,
  FaChessBoard,
  FaChild,
  FaDoorOpen,
  FaPaw,
  FaAccessibleIcon,
  FaKey,
  FaCoffee,
  FaChair,
  FaFan,
} from 'react-icons/fa';
import { IoIosShirt } from 'react-icons/io';
import { MdMicrowave } from 'react-icons/md';

interface Feature {
  icon: React.ElementType;
  label: string;
}

interface Section {
  title: string;
  features: Feature[];
}

const sections: Section[] = [
  {
    title: 'Výhledy',
    features: [
      { icon: FaMountain, label: 'Hory' },
      { icon: FaUmbrellaBeach, label: 'Zátoka' },
      { icon: FaWater, label: 'Jezero' },
      { icon: GiValley, label: 'Údolí' },
    ],
  },
  {
    title: 'Kuchyň',
    features: [
      { icon: GiCookingPot, label: 'Varná deska' },
      { icon: MdMicrowave, label: 'Mikrovlnka s troubou' },
      { icon: FaCoffee, label: 'Kávovar' },
      { icon: GiToaster, label: 'Toaster' },
      { icon: GiWashingMachine, label: 'Myčka' },
      { icon: GiTeapot, label: 'Varná konvice' },
      { icon: GiSpoon, label: 'Mycí potřeby' },
    ],
  },
  {
    title: 'Ložnice',
    features: [
      { icon: GiTowel, label: 'Ručníky & povlečení' },
      { icon: FaBed, label: 'Postel & lůžkoviny' },
      { icon: IoIosShirt, label: 'Sušák na prádlo' },
      { icon: FaBug, label: 'Moskytiéra' },
    ],
  },
  {
    title: 'Koupelna',
    features: [
      { icon: FaSoap, label: 'Mýdlo' },
      { icon: FaToiletPaper, label: 'Toaletní papír' },
      { icon: FaFan, label: 'Fén' },
      { icon: GiWashingMachine, label: 'Pračka' },
      { icon: GiShower, label: 'Sprchový kout' },
    ],
  },
  {
    title: 'Topení',
    features: [
      { icon: FaFire, label: 'Krb' },
      { icon: FaThermometerHalf, label: 'Ústřední' },
    ],
  },
  {
    title: 'Zábava',
    features: [
      { icon: FaTv, label: 'TV' },
      { icon: FaBookOpen, label: 'Dětské knihy' },
      { icon: FaChessBoard, label: 'Stolní hry' },
      { icon: FaChild, label: 'Hřiště' },
      { icon: FaChild, label: 'Prolézačky' },
    ],
  },
  {
    title: 'Venkovní',
    features: [
      { icon: FaDoorOpen, label: 'Terasa' },
      { icon: GiBarbecue, label: 'Gril' },
      { icon: FaChair, label: 'Zahradní nábytek' },
      { icon: FaUmbrellaBeach, label: 'Slunečník' },
    ],
  },
  {
    title: 'Služby',
    features: [
      { icon: FaPaw, label: 'Mazlíčci OK' },
      { icon: FaAccessibleIcon, label: 'Asist. zvířata' },
      { icon: FaKey, label: 'Schránka na klíče' },
    ],
  },
];

const Vybaveni: React.FC = () => (
  <div className="max-w-screen-md mx-auto p-4">
    <div className="mb-4">
      <Link
        href="/"
        className="inline-flex items-center text-indigo-500 hover:underline text-sm font-medium"
      >
        <FiArrowLeft className="w-4 h-4 mr-2" />
        Návrat na hlavní stránku
      </Link>
    </div>
    <section>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {sections.map((section) => (
          <div key={section.title}>
            <h4 className="text-sm font-semibold uppercase text-gray-600 mb-2">
              {section.title}
            </h4>
            <ul className="space-y-1">
              {section.features.map((feature) => (
                <li
                  key={feature.label}
                  className="flex items-center space-x-2"
                >
                  <feature.icon className="w-5 h-5 text-indigo-500" />
                  <span className="text-xs text-gray-700">
                    {feature.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Vybaveni;
