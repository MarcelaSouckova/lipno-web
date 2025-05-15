"use client"

import React from 'react'

export default function AvailabilityCalendar() {
  return (
    <div className="availability-calendar p-6 bg-white rounded-xl shadow-lg">
      <iframe
        src="https://calendar.google.com/calendar/embed?src=siaj6ssadm59ceih488vjpnfavj6lt1j%40import.calendar.google.com&ctz=Europe%2FPrague"
        style={{ border: 0 }}
        width="100%"
        height="600"
        frameBorder="0"
        scrolling="no"
      />
    </div>
  )
}
