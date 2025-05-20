"use client";

import React from 'react';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import Navbar from '../components/navbar';
import Tipy from '../components/tipy';
import Footer from '../components/footer';

export default function TipyPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
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
        <Tipy />
      </div>
      <Footer />
    </div>
  );
}
