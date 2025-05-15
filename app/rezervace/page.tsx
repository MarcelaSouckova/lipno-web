'use client'

import React from 'react'
import Navbar from '../components/navbar'
import AvailabilityCalendar from '../components/kalendar'
import AddReservationForm from '../components/AddReservationForm'
import Podminky from '../components/podminky'
import Footer from '../components/footer'

export default function Page() {
  return (
    <>
      <Navbar />

      {/* Google Calendar Embed */}
      <AvailabilityCalendar />

      {/* Formulář pro přidání rezervace */}
      <AddReservationForm />

      {/* Platební a storno podmínky */}
      <Podminky />

      {/* Další sekce: Galerie, Vybavení, Kontaktní formulář atd. */}
      <Footer />
    </>
  )
}