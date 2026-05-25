import { useState } from 'react'
import ReservationForm from './components/ReservationForm'
import ReservationList from './components/ReservationList'

function App() {
  const [reservations, setReservations] = useState([])

  const handleAddReservation = (reservation) => {
    const newReservation = {
      id: Date.now(),
      ...reservation,
      status: 'Confirmed'
    }
    setReservations([newReservation, ...reservations])
  }

  const handleCancelReservation = (id) => {
    setReservations(reservations.filter(res => res.id !== id))
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="relative container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-900 mb-2" style={{ color: 'white' }}>Reservation Management</h1>
          <p className="text-lg text-slate-600" style={{ color: 'white' }}>Professional booking system for your Restaurant</p>
          
          {/* Decorative line */}
          <div className="mt-6 flex justify-center">
            <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 sticky top-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6" style={{ color: 'white' }}>Nouvelle Reservation</h2>
              <ReservationForm onAddReservation={handleAddReservation} />
            </div>
          </div>

          {/* Reservations List Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6" style={{ color: 'white' }}>
                Reservations ({reservations.length})
              </h2>
              <ReservationList 
                reservations={reservations}
                onCancel={handleCancelReservation}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
