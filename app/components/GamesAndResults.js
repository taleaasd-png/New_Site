'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const MapComponent = dynamic(() => import('./MapComponent'), { ssr: false })

export default function GamesAndResults() {
  const [games, setGames] = useState([])
  const [filteredGames, setFilteredGames] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedGame, setSelectedGame] = useState(null)
  const [showAllGames, setShowAllGames] = useState(false)

  useEffect(() => {
    async function fetchGames() {
      try {
        const response = await fetch('https://sheetdb.io/api/v1/m2q6s6csmvhb9?sheet=GARE')
        const data = await response.json()
        
        // Ordina per data
        const sorted = data.sort((a, b) => {
          const dateA = new Date(a.Data.split(' ')[0].split('/').reverse().join('-'))
          const dateB = new Date(b.Data.split(' ')[0].split('/').reverse().join('-'))
          return dateA - dateB
        })
        
        setGames(sorted)
        filterGamesByDate(sorted)
        setLoading(false)
      } catch (error) {
        console.error('Errore nel caricamento gare:', error)
        setLoading(false)
      }
    }
    fetchGames()
  }, [])

  const filterGamesByDate = (allGames) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    
    const sevenDaysAgo = new Date(today)
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
    
    const sevenDaysAfter = new Date(today)
    sevenDaysAfter.setDate(sevenDaysAfter.getDate() + 7)

    const filtered = allGames.filter(game => {
      const parts = game.Data.split('/').map(p => p.trim())
      if (parts.length < 3) return false
      
      const gameDate = new Date(parts[2], parseInt(parts[1]) - 1, parseInt(parts[0]))
      gameDate.setHours(0, 0, 0, 0)
      
      return gameDate >= sevenDaysAgo && gameDate <= sevenDaysAfter
    })

    setFilteredGames(filtered)
  }

  if (loading) return <div className="py-20 text-center text-gray-300">Caricamento gare...</div>

  const getGameColor = (game) => {
    // Legge da colonna M (Risultato): T = Prossima, W = Vinta, L = Persa
    const result = game['Risultato'] ? game['Risultato'].trim().toUpperCase() : ''
    
    if (result === 'W') {
      return 'from-green-600 to-green-700' // Verde - vittoria
    } else if (result === 'L') {
      return 'from-red-600 to-red-700' // Rosso - sconfitta
    } else if (result === 'T') {
      return 'from-talea-orange to-orange-500' // Arancio - gara futura
    }
    
    return 'from-talea-orange to-orange-500' // Default arancio
  }

  const getGameStatus = (game) => {
    const result = game['Risultato'] ? game['Risultato'].trim().toUpperCase() : ''
    
    if (result === 'W') {
      return '✓ VINTA'
    } else if (result === 'L') {
      return '✗ PERSA'
    } else if (result === 'T') {
      return 'PROSSIMA'
    }
    
    return 'INFO'
  }

  return (
    <>
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-bebas text-5xl md:text-6xl font-black text-talea-orange mb-4">
              GARE E RISULTATI
            </h2>
            <p className="text-gray-300 text-lg">
              Scopri gli ultimi risultati e le prossime gare (ultimi 7 giorni e prossimi 7)
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredGames.map((game, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedGame(game)}
                className={`bg-gradient-to-br ${getGameColor(game)} rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-full flex flex-col justify-between`}
              >
                <div>
                  <div className="mb-6">
                    <p className="text-white/90 text-sm font-semibold mb-2">{game.Data} • {game.Ora}</p>
                    <span className="text-white text-xs bg-white/20 px-3 py-1 rounded-full font-semibold">
                      {game.Categoria}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-white font-bebas font-black text-sm">{game['Squadra 1']}</p>
                      {game['Score 1'] !== '-' ? (
                        <p className="text-3xl font-black text-white mt-2">{game['Score 1']}</p>
                      ) : (
                        <p className="text-white/70 text-xs mt-2">In programma</p>
                      )}
                    </div>

                    <div className="flex items-center justify-center my-3">
                      <div className="h-px w-full bg-white/20"></div>
                      <span className="px-3 text-white text-xs font-semibold">VS</span>
                      <div className="h-px w-full bg-white/20"></div>
                    </div>

                    <div className="text-center">
                      <p className="text-white font-bebas font-black text-sm">{game['Squadra 2']}</p>
                      {game['Score 2'] !== '-' ? (
                        <p className="text-3xl font-black text-white mt-2">{game['Score 2']}</p>
                      ) : (
                        <p className="text-white/70 text-xs mt-2">In programma</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="text-center pt-4 border-t border-white/20 mt-6">
                  <p className="text-white text-xs font-semibold uppercase tracking-wider">
                    {getGameStatus(game)}
                  </p>
                  {game.Campo && (
                    <p className="text-white text-sm mt-2 font-semibold">📍 {game.Campo}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pulsante Scopri di più */}
          {games.length > filteredGames.length && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAllGames(true)}
                className="bg-talea-orange hover:bg-orange-600 text-white font-bebas text-lg font-black px-8 py-3 rounded-lg transition-colors"
              >
                SCOPRI DI PIÙ
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Modal Tutte le gare */}
      {showAllGames && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-talea-black rounded-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto"
          >
            <div className="bg-gradient-to-r from-talea-orange to-orange-600 p-6 flex justify-between items-center sticky top-0 z-10">
              <h3 className="font-bebas text-3xl font-black text-white">
                TUTTE LE GARE
              </h3>
              <button
                onClick={() => setShowAllGames(false)}
                className="text-white text-3xl hover:text-gray-300 transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {games.map((game, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => {
                      setSelectedGame(game)
                      setShowAllGames(false)
                    }}
                    className={`bg-gradient-to-br ${getGameColor(game)} rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
                  >
                    <p className="text-white/90 text-xs font-semibold mb-2">{game.Data} • {game.Ora}</p>
                    <p className="text-white font-bebas font-black text-sm mb-1">{game.Categoria}</p>
                    <div className="grid grid-cols-3 gap-2 text-center mt-2">
                      <div>
                        <p className="text-white text-xs">{game['Squadra 1']}</p>
                        {game['Score 1'] !== '-' && <p className="text-xl font-black text-white">{game['Score 1']}</p>}
                      </div>
                      <div className="flex items-center justify-center">
                        <span className="text-white text-xs">VS</span>
                      </div>
                      <div>
                        <p className="text-white text-xs">{game['Squadra 2']}</p>
                        {game['Score 2'] !== '-' && <p className="text-xl font-black text-white">{game['Score 2']}</p>}
                      </div>
                    </div>
                    <p className="text-white text-xs mt-2 uppercase">{getGameStatus(game)}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Modal Dettagli gara */}
      {selectedGame && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-talea-black rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto"
          >
            <div className="bg-gradient-to-r from-talea-orange to-orange-600 p-6 flex justify-between items-center sticky top-0 z-10">
              <div>
                <h3 className="font-bebas text-3xl font-black text-white">
                  {selectedGame.Categoria}
                </h3>
                <p className="text-white/90 text-sm mt-1">{selectedGame.Data} • {selectedGame.Ora}</p>
              </div>
              <button
                onClick={() => setSelectedGame(null)}
                className="text-white text-3xl hover:text-gray-300 transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="p-6">
              <div className="mb-8">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-talea-orange font-bebas text-2xl font-black">
                      {selectedGame['Squadra 1']}
                    </p>
                    {selectedGame['Score 1'] !== '-' && (
                      <p className="text-5xl font-black text-white mt-3">{selectedGame['Score 1']}</p>
                    )}
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <span className="text-talea-orange font-bebas text-lg">VS</span>
                    <span className="text-gray-400 text-xs mt-2 uppercase">{getGameStatus(selectedGame)}</span>
                  </div>

                  <div className="text-center">
                    <p className="text-talea-orange font-bebas text-2xl font-black">
                      {selectedGame['Squadra 2']}
                    </p>
                    {selectedGame['Score 2'] !== '-' && (
                      <p className="text-5xl font-black text-white mt-3">{selectedGame['Score 2']}</p>
                    )}
                  </div>
                </div>
              </div>

              {(selectedGame.Latitudine || selectedGame.Longitudine) && (
                <div className="mb-6">
                  <h4 className="font-bebas text-2xl text-talea-orange mb-4">📍 {selectedGame.Campo}</h4>
                  <MapComponent 
                    latitude={selectedGame.Latitudine} 
                    longitude={selectedGame.Longitudine}
                    address={selectedGame.Indirizzo}
                  />
                  {selectedGame.Indirizzo && (
                    <p className="text-gray-300 text-sm mt-3">{selectedGame.Indirizzo}</p>
                  )}
                  
                  <a
                    href={`https://maps.google.com/?q=${selectedGame.Latitudine},${selectedGame.Longitudine}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-talea-orange hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                  >
                    Apri in Google Maps →
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}
