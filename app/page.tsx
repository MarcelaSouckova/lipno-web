"use client"

import React from 'react'
import Navbar from './components/navbar'
import HeroSection from './components/hero'
import Popis from './components/Popis'
import Cena from './components/Cena'
import Footer from './components/footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Popis />
      <Cena />
      {/* Sem budou přidány další sekce: Galerie, Vybavení, Kontaktní formulář atd. */}
      <Footer />
    </>
  )
}
