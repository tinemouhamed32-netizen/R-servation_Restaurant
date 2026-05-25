function ReservationList({ reservations, onCancel }) {
  if (reservations.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-3"></div>
        <p className="text-gray-300 text-lg" style={{ color: 'white' }}>Pas de reservations pour le moment.Ajouter une reservation pour la voir ici.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
      {reservations.map((reservation, index) => (
        <div 
          key={reservation.id} 
          className="relative group rounded-xl overflow-hidden animate-fade-in"
          style={{animationDelay: `${index * 0.1}s`}}
        >
          {/* Animated border gradient */}
          <div className="absolute -inset-px bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-30 blur transition duration-500"></div>
          
          <div className="relative rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm p-6 shadow-lg hover:bg-white/10 transition transform hover:-translate-y-1">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
              <div>
                <h3 className="text-xl font-bold text-white">{reservation.name}</h3>
                <p className="text-sm text-gray-300 mt-1">{reservation.email}</p>
              </div>

              <div className="text-right">
                <span className="inline-flex rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/50 text-emerald-200 px-4 py-1 text-xs font-bold uppercase tracking-wider">
                  ✓ {reservation.status}
                </span>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="relative group/card bg-white/5 rounded-lg p-3 border border-white/10 hover:border-white/30 transition">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover/card:opacity-100 rounded-lg transition"></div>
                <span className="relative block font-semibold text-gray-200 text-xs uppercase mb-1"> Guests</span>
                <p className="relative text-lg text-white font-bold">{reservation.guests}</p>
              </div>
              <div className="relative group/card bg-white/5 rounded-lg p-3 border border-white/10 hover:border-white/30 transition">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover/card:opacity-100 rounded-lg transition"></div>
                <span className="relative block font-semibold text-gray-200 text-xs uppercase mb-1">Date</span>
                <p className="relative text-lg text-white font-bold">{reservation.date}</p>
              </div>
              <div className="relative group/card bg-white/5 rounded-lg p-3 border border-white/10 hover:border-white/30 transition">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover/card:opacity-100 rounded-lg transition"></div>
                <span className="relative block font-semibold text-gray-200 text-xs uppercase mb-1"> Time</span>
                <p className="relative text-lg text-white font-bold">{reservation.time}</p>
              </div>
            </div>

            <div className="mt-5 flex justify-end">
              <button
                onClick={() => onCancel(reservation.id)}
                className="relative group/btn rounded-lg border border-red-500/50 bg-red-500/10 px-5 py-2 text-sm font-semibold text-red-300 hover:bg-red-500/20 hover:border-red-500 transition transform hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition"></div>
                <span className="relative">✕ Cancel</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ReservationList
