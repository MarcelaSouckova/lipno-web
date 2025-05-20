"use client";

import React from 'react';
import Navbar from '../components/navbar';
import Vybaveni from '../components/vybaveni';
import Footer from '../components/footer';

export default function VybaveniPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Vybaveni />
      <Footer />
    </div>
  );
}
