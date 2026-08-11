'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function RosterComponent({ categoria }) {
  const [giocatrici, setGiocatrici] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchGiocatrici() {
      try {
        const response = await fetch('https://sheetdb.io/api/v1/m2q6s6csmvhb9?sheet=GIOCATRICI')
        const data = await response.json()
        const filtered = data.filter(g => g.Categoria === categoria)
        setGiocatrici(filtered)
        setLoading(false)
      } catch (error) {
        console.error('Errore nel caricamento giocatrici:', error)
        setLoading(false)
      }
    }
    fetchGiocatrici()
  }, [categoria])

  if (loading) {
    return <div className="py-10 text-center text-gray-300">Caricamento roster...</div>
  }

  if (giocatrici.length === 0) {
    return <div className="py-10 text-center text-gray-400">Nessuna giocatrice registrata</div>
  }

  const getRuoloColor = (ruolo) => {
    switch (ruolo) {
      case 'Guardia':
        return 'bg-blue-600/30 text-blue-300 border border-blue-500'
      case 'Ala':
        return 'bg-orange-600/30 text-orange-300 border border-orange-500'
      case 'Centro':
        return 'bg-purple-600/30 text-purple-300 border border-purple-500'
      default:
        return 'bg-gray-600/30 text-gray-300 border border-gray-500'
    }
  }

  return (
    <div className="w-full">
      <h3 className="font-bebas text-2xl font-black text-talea-orange mb-6">
        Roster {categoria}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {giocatrici.map((giocatrice, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.05 }}
            viewport={{ once: true }}
            className="bg-talea-black/50 rounded-lg p-4 border border-talea-orange/20 hover:border-talea-orange/50 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="font-bebas text-xl font-black text-talea-orange">
                  #{giocatrice.NumeroMaglia}
                </p>
                <p className="text-white font-semibold mt-1">
                  {giocatrice.Nome}
                </p>
              </div>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getRuoloColor(giocatrice.Ruolo)}`}>
                {giocatrice.Ruolo}
              </span>
            </div>

            <div className="text-xs text-gray-400 space-y-1">
              <p>📅 {giocatrice.AnnoBirth}</p>
              {giocatrice.Note && (
                <p className="text-talea-orange font-semibold">⭐ {giocatrice.Note}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
