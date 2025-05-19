"use client";
 
import React from "react";
import Navbar from "../components/navbar";
import Gallery from "../components/galerie";
import Footer from "../components/footer";
 
export default function GalleryPage() {
  return (
    // Zde přidáme bg-white na celý kontejner a min-h-screen, aby se
    // bílá táhla přes celou výšku okna
    <div className="bg-white min-h-screen">
      <Navbar />
      <Gallery />
      <Footer />
    </div>
  );
}