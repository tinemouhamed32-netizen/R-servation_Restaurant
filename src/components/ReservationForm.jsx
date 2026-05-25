import { useState } from 'react'

function ReservationForm({ onAddReservation }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [guests, setGuests] = useState(1)
  const [date, setDate] = useState('')
  const [time, setTime] = useState('19:00')
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!name || !email || !date || !time) {
      setError('Please fill out all required fields.')
      return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.')
      return
    }

    if (guests < 1) {
      setError('Guest count must be at least 1.')
      return
    }

    setError('')
    onAddReservation({ name, email, guests, date, time })

    setName('')
    setEmail('')
    setGuests(1)
    setDate('')
    setTime('19:00')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          <strong>Error:</strong> {error}
        </div>
      )}

      <div>
        <label className="block font-semibold text-slate-900 mb-2 text-sm" style={{ color: 'white' }}>Nom comptet</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label className="block font-semibold text-slate-900 mb-2 text-sm" htmlFor="email" style={{ color: 'white' }}>
          Addresse Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          placeholder="john@example.com"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold text-slate-900 mb-2 text-sm" style={{ color: 'white' }}>Nombre de place</label>
          <input
            type="number"
            value={guests}
            min="1"
            onChange={(e) => setGuests(Number(e.target.value))}
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>

        <div>
          <label className="block font-semibold text-slate-900 mb-2 text-sm" style={{ color: 'white' }}>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>
      </div>

      <div>
        <label className="block font-semibold text-slate-900 mb-2 text-sm" style={{ color: 'white' }}>Heure</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 hover:bg-blue-700 px-6 py-2.5 font-semibold text-white transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        style={{ color: 'white' }}>
        Confirmer la Reservation
      </button>
    </form>
  )
}

export default ReservationForm
