// pages/contact.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import Navbar from '../components/navbar';
import Udalosti from '../components/udalosti';
import Footer from '../components/footer';

export default function UdalostiPage() {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-md mx-auto p-4">
        <Link href="/" className="flex items-center mb-6 text-indigo-600 hover:text-indigo-800">
          <FiArrowLeft className="w-5 h-5 mr-2" />
          <span className="font-medium">Návrat na hlavní stránku</span>
        </Link>
        <Udalosti />
      </div>
      <Footer />
    </>
  );
}
