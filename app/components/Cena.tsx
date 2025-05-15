"use client"

import React, { useState, useMemo } from 'react'
import Link from 'next/link'

// Pomocná funkce pro formátování data jako "D. M." pro štítky
type BreakdownItem = { date: Date; priceEUR: number }
function formatDateLabel(date: Date): string {
  return `${date.getDate()}. ${date.getMonth() + 1}.`
}

type Season = {
  name: string
  ranges: { start: string; end: string }[]
  rateEUR: number
  minNights: number
  surchargeDays: number[]   // dny, kdy se příplatek vztahuje (0=Ne, ...,6=So)
  surchargeEUR: number
}

const SEASONS: Season[] = [
  {
    name: 'Hlavní sezóna',
    ranges: [
      { start: '2025-02-01', end: '2025-03-10' },
      { start: '2025-06-20', end: '2025-08-15' },
    ],
    rateEUR: 110,
    minNights: 5,
    surchargeDays: [],
    surchargeEUR: 0,
  },
  {
    name: 'Vedlejší sezóna',
    ranges: [
      { start: '2025-01-05', end: '2025-01-31' },
      { start: '2025-03-11', end: '2025-06-19' },
      { start: '2025-08-16', end: '2025-12-20' },
    ],
    rateEUR: 90,
    minNights: 2,
    surchargeDays: [5, 6],
    surchargeEUR: 5,
  },
  {
    name: 'Top sezóna',
    ranges: [
      { start: '2025-12-21', end: '2026-01-04' },
    ],
    rateEUR: 120,
    minNights: 5,
    surchargeDays: [],
    surchargeEUR: 0,
  },
]

// Měnový kurz
const EUR_TO_CZK = 25

enum Currency {
  EUR = 'EUR',
  CZK = 'CZK',
}

export default function Cena() {
  const [arrival, setArrival] = useState<string>('')
  const [departure, setDeparture] = useState<string>('')
  const [withDog, setWithDog] = useState<boolean>(false)
  const [currency, setCurrency] = useState<Currency>(Currency.EUR)

  // Vypočteme délku pobytu a položky rozpisu v EUR
  const { nights, breakdown, valid, message } = useMemo(() => {
    if (!arrival || !departure) {
      return { nights: 0, breakdown: [] as BreakdownItem[], valid: false, message: '' }
    }
    const start = new Date(arrival)
    const end = new Date(departure)
    if (end <= start) {
      return { nights: 0, breakdown: [], valid: false, message: 'Datum odjezdu musí být po dni příjezdu.' }
    }

    const nightsArr: Date[] = []
    for (let d = new Date(start); d < end; d.setDate(d.getDate() + 1)) {
      nightsArr.push(new Date(d))
    }

    let minReq = 0
    const items: BreakdownItem[] = []

    nightsArr.forEach(day => {
      const season = SEASONS.find(s =>
        s.ranges.some(r => {
          const rs = new Date(r.start)
          const re = new Date(r.end)
          return day >= rs && day <= re
        })
      ) ?? SEASONS[1]

      minReq = Math.max(minReq, season.minNights)
      let priceEUR = season.rateEUR
      if (season.surchargeDays.includes(day.getDay())) {
        priceEUR += season.surchargeEUR
      }
      items.push({ date: new Date(day), priceEUR })
    })

    const meetsMin = items.length >= minReq
    const err = meetsMin ? '' : `Minimální počet nocí je ${minReq}.`
    return { nights: items.length, breakdown: items, valid: meetsMin, message: err }
  }, [arrival, departure])

  // Spočítáme příplatek za psa v Kč a EUR
  const dogChargeCZK = withDog ? nights * 150 : 0
  const dogChargeEUR = dogChargeCZK / EUR_TO_CZK

  // Celková cena podle měny
  const totalEUR = breakdown.reduce((sum, b) => sum + b.priceEUR, 0) + dogChargeEUR
  const totalCZK = breakdown.reduce((sum, b) => sum + b.priceEUR * EUR_TO_CZK, 0) + dogChargeCZK
  const totalDisplay = currency === Currency.EUR ? totalEUR : totalCZK
  const symbol = currency === Currency.EUR ? '€' : 'Kč'

  // Rozpis pro zobrazení
  const displayBreakdown = breakdown.map(b => ({
    date: b.date,
    price: currency === Currency.EUR ? b.priceEUR : b.priceEUR * EUR_TO_CZK,
  }))

  return (
    <section id="pricing" className="bg-gradient-to-br from-white to-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-4">
          Kalkulátor ceny pobytu
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Pro výpočet ceny zadejte prosím datum příjezdu a odjezdu.
        </p>

        {/* Výběr měny */}
        <div className="flex justify-end mb-6">
          <label className="mr-2 font-medium text-gray-700">Měna:</label>
          <select
            value={currency}
            onChange={e => setCurrency(e.target.value as Currency)}
            className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value={Currency.EUR}>€ Euro</option>
            <option value={Currency.CZK}>Kč Koruna</option>
          </select>
        </div>

        {/* Sezónní přehled */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {SEASONS.map((s, i) => {
            const rate = currency === Currency.EUR ? s.rateEUR : s.rateEUR * EUR_TO_CZK
            const surcharge = currency === Currency.EUR ? s.surchargeEUR : s.surchargeEUR * EUR_TO_CZK
            return (
              <div key={i} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
                <h3 className="text-lg font-semibold text-indigo-700 mb-3">{s.name}</h3>
                <ul className="text-gray-600 space-y-1 mb-4">
                  {s.ranges.map((r, idx) => (
                    <li key={idx} className="flex justify-between">
                      <span>{formatDateLabel(new Date(r.start))} – {formatDateLabel(new Date(r.end))}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-2xl font-bold text-gray-900">
                  {rate} <span className="text-base font-normal">/ noc {symbol}</span>
                </p>
                {surcharge > 0 && (
                  <p className="mt-1 text-sm text-indigo-500">
                    +{surcharge} {symbol} víkendová noc
                  </p>
                )}
              </div>
            )
          })}
        </div>

        {/* Výběr termínu */}
        <div className="bg-white rounded-xl shadow-md p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="flex flex-col">
            <label htmlFor="arrival" className="mb-2 text-gray-700 font-medium">Datum příjezdu</label>
            <input
              id="arrival"
              type="date"
              value={arrival}
              onChange={e => setArrival(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="departure" className="mb-2 text-gray-700 font-medium">Datum odjezdu</label>
            <input
              id="departure"
              type="date"
              value={departure}
              onChange={e => setDeparture(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        </div>

        {/* Doplňkové služby */}
        {nights > 0 && (
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Ceník doplňkových služeb</h3>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={withDog}
                onChange={e => setWithDog(e.target.checked)}
                className="form-checkbox h-5 w-5 text-indigo-600"
              />
              <span className="text-gray-700">
                Pobyt se psem (max. 1, malé a střední plemeno) – 150 Kč / noc
              </span>
            </label>
          </div>
        )}

        {/* Rozpis ceny */}
        {breakdown.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Rozpis ceny</h3>
            <ul className="divide-y divide-gray-200 mb-4">
              {displayBreakdown.map((b, idx) => (
                <li key={idx} className="flex justify-between py-2">
                  <span>{formatDateLabel(b.date)}</span>
                  <span className="font-medium">
                    {b.price.toFixed(currency === Currency.EUR ? 2 : 0)} {symbol}
                  </span>
                </li>
              ))}
              {withDog && (
                <li className="flex justify-between py-2">
                  <span>Poplatek za psa</span>
                  <span className="font-medium">
                    {(
                      currency === Currency.EUR
                        ? dogChargeEUR.toFixed(2)
                        : dogChargeCZK
                    )} {symbol}
                  </span>
                </li>
              )}
            </ul>
          </div>
        )}

        {/* Celková cena a akce */}
        {arrival && departure && (
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <p className="text-lg text-gray-700 mb-2">
              Počet nocí: <span className="font-semibold">{nights}</span>
            </p>
            <p className="text-2xl font-extrabold text-gray-900 mb-4">
              Celkem: <span>{totalDisplay.toFixed(currency === Currency.EUR ? 2 : 0)} {symbol}</span>
            </p>
            {message && <p className="text-sm text-red-600 mb-4">{message}</p>}
            <Link
              href={{ pathname: '/reservation', query: { arrival, departure, withDog } }}
              className={`inline-block px-8 py-3 rounded-full text-white font-semibold shadow-md transition ${
                valid ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              Rezervovat
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
