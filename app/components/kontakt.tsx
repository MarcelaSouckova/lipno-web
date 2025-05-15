import { useState, FormEvent } from 'react'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
      if (res.ok) {
        setStatus('success')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        throw new Error('Chyba odeslání')
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section className="flex justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-lg w-full">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-indigo-500 hover:underline text-sm font-medium"
          >
            <FiArrowLeft className="w-4 h-4 mr-2" />
            Návrat na hlavní stránku
          </Link>
        </div>
        <div className="bg-white shadow-xl rounded-xl p-8">
          <h2 className="text-3xl font-bold text-center text-blue-950 mb-4">Kontakt</h2>
          <div className="mb-8 space-y-3 text-gray-700">
            <p className="flex items-center space-x-2">
              <FaEnvelope className="w-5 h-5 text-indigo-500" />
              <span><span className="font-semibold">Email:</span> Dvezatoky6@gmail.com</span>
            </p>
            <p className="flex items-center space-x-2">
              <FaPhone className="w-5 h-5 text-indigo-500" />
              <span><span className="font-semibold">Telefon:</span> +420 602 359 047</span>
            </p>
            <p className="flex items-center space-x-2">
              <FaMapMarkerAlt className="w-5 h-5 text-indigo-500" />
              <span><span className="font-semibold">Adresa:</span> Kovářov 48, Frymburk, okr. Český Krumlov</span>
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Jméno
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:border-blue-600 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:border-blue-600 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Zpráva
              </label>
              <textarea
                id="message"
                rows={5}
                value={message}
                onChange={e => setMessage(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 focus:border-blue-600 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full flex justify-center py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors duration-200 disabled:opacity-50"
            >
              {status === 'sending' ? 'Odesílání...' : 'Odeslat zprávu'}
            </button>

            {status === 'success' && (
              <p className="text-green-600 text-center">Zpráva byla úspěšně odeslána!</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-center">Nastala chyba při odesílání. Zkuste to znovu.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
