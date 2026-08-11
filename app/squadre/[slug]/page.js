'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import RosterComponent from '../../components/RosterComponent'
import StaffComponent from '../../components/StaffComponent'

const squadreData = {
  'u19': {
    nome: 'U19 FEMMINILE',
    emoji: '🏀',
    descrizione: 'La nostra categoria più forte, pronta per serie superiori',
    giocatrici: 12,
    allenatore: 'Coach Maria',
    colore: 'from-talea-orange to-orange-500'
  },
  'u17': {
    nome: 'U17 FEMMINILE',
    emoji: '🏀',
    descrizione: 'Talenti in crescita, futuro della società',
    giocatrici: 14,
    allenatore: 'Coach Laura',
    colore: 'from-orange-400 to-talea-orange'
  },
  'u15': {
    nome: 'U15 FEMMINILE',
    emoji: '🏀',
    descrizione: 'La base della nostra piramide agonistica',
    giocatrici: 16,
    allenatore: 'Coach Francesca',
    colore: 'from-talea-orange to-orange-600'
  },
  'u14': {
    nome: 'U14 FEMMINILE',
    emoji: '🏀',
    descrizione: 'Dove inizia il viaggio nel basket agonistico',
    giocatrici: 18,
    allenatore: 'Coach Valentina',
    colore: 'from-orange-500 to-talea-orange'
  },
  'serie-c': {
    nome: 'SERIE C FEMMINILE',
    emoji: '🏆',
    descrizione: 'Il nostro fiore all\'occhiello, orgoglio di Talea',
    giocatrici: 12,
    allenatore: 'Coach Daniela',
    colore: 'from-talea-orange to-yellow-500'
  }
}

export default function SquadraPage({ params }) {
  const squadra = squadreData[params.slug] || squadreData['u19']
  const displayName = params.slug === 'serie-c' ? 'Serie C' : params.slug.toUpperCase()

  return (
    <main className="w-full">
      {/* Header */}
      <section className={`bg-gradient-to-br ${squadra.colore} py-20 px-6`}>
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-6xl">{squadra.emoji}</span>
            <h1 className="font-bebas text-5xl md:text-6xl font-black text-white mt-4 drop-shadow-lg">
              {squadra.nome}
            </h1>
            <p className="text-white/90 text-lg mt-4 max-w-2xl mx-auto">
              {squadra.descrizione}
            </p>
          </motion.div>
        </div>
      </section>



      {/* Roster */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <RosterComponent categoria={displayName} />
        </div>
      </section>

      {/* Staff */}
      <section className="py-16 px-6 bg-talea-black/50">
        <div className="max-w-6xl mx-auto">
          <StaffComponent categoria={displayName} />
        </div>
      </section>

      {/* Back Button */}
      <section className="py-16 px-6 bg-talea-black/50">
        <div className="max-w-6xl mx-auto">
          <Link href="/">
            <button className="bg-talea-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">
              ← Torna alla Home
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}
