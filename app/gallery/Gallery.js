'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Gallery() {
  const [galleries, setGalleries] = useState([])
  const [selectedGallery, setSelectedGallery] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchGalleries() {
      try {
        const response = await fetch('https://sheetdb.io/api/v1/m2q6s6csmvhb9?sheet=GALLERY')
        const data = await response.json()
        
        // Processa i dati delle gallery
        const processedGalleries = data.map((gallery, idx) => {
          console.log(`\n=== GALLERY ${idx}: ${gallery['Nome Gallery']} ===`)
          console.log('Tutte le chiavi:', Object.keys(gallery))
          console.log('Tutti i valori:', Object.values(gallery))
          
          // Estrai tutti i link delle foto
          const photoLinks = Object.values(gallery)
            .filter((value, filterIdx) => {
              const isValid = value && 
                typeof value === 'string' && 
                value.includes('drive.google.com') &&
                value.includes('/file/')
              
              console.log(`  [${filterIdx}] "${value}" → ${isValid ? '✅ VALIDO' : '❌ SCARTATO'}`)
              
              return isValid
            })
            .map((link, i) => {
              let cleaned = link.trim().replace(/^"(.*)"$/, '$1')
              console.log(`    Foto ${i}: ${cleaned}`)
              return cleaned
            })
          
          console.log(`TOTALE: ${photoLinks.length} foto valide`)
          
          return {
            id: idx,
            nome: gallery['Nome Gallery'],
            descrizione: gallery.Descrizione,
            foto: photoLinks
          }
        })

        setGalleries(processedGalleries)
        setLoading(false)
      } catch (error) {
        console.error('Errore nel caricamento gallery:', error)
        setLoading(false)
      }
    }
    fetchGalleries()
  }, [])

  if (loading) return <div className="py-20 text-center text-gray-300">Caricamento gallery...</div>

  if (galleries.length === 0) {
    return <div className="py-20 text-center text-gray-300">Nessuna gallery disponibile</div>
  }

  return (
    <>
      {/* Pulsante flottante Torna alla Home */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed bottom-6 left-6 z-40"
      >
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-talea-orange hover:bg-orange-600 text-white font-bebas font-black px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 uppercase tracking-wider text-sm"
          >
            ← Home
          </motion.button>
        </Link>
      </motion.div>

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-80px)] w-full bg-talea-black flex items-center justify-center px-6 overflow-hidden pt-12">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#E63604" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Gradient Blobs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-talea-orange/20 rounded-full blur-3xl pointer-events-none"
        />

        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-talea-orange/15 rounded-full blur-3xl pointer-events-none"
        />

        {/* Content */}
        <div className="max-w-6xl mx-auto text-center z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-bebas text-5xl md:text-7xl font-black text-talea-orange drop-shadow-lg mb-4"
            >
              GALLERIE
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-300 text-lg md:text-xl mb-6 max-w-2xl mx-auto"
            >
              Rivivi i momenti più emozionanti di Talea Basket
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-gray-400 text-base md:text-lg mb-12 max-w-2xl mx-auto"
            >
              Seleziona una gallery per scoprire le foto
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 w-full flex flex-col items-center justify-center"
        >
          <p className="text-gray-400 text-sm mb-2">Scorri verso il basso</p>
          <svg
            className="w-6 h-6 text-talea-orange"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </section>

      {/* Gallery Selection Section */}
      <section className="py-20 px-6 bg-talea-black">
        <div className="max-w-6xl mx-auto">
          {/* Pulsanti Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-6 justify-center mb-16"
          >
            {galleries.map((gallery, idx) => (
              <motion.button
                key={idx}
                onClick={() => setSelectedGallery(gallery)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-talea-orange hover:bg-orange-600 text-white font-bebas font-black px-12 py-6 rounded-lg transition-all duration-300 uppercase tracking-wider shadow-lg hover:shadow-xl flex flex-col items-center gap-2"
              >
                <span className="text-xl">{gallery.nome}</span>
                <span className="text-sm opacity-90">({gallery.foto.length} foto)</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Modale Flottante Gallery */}
          {selectedGallery && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedGallery(null)}
                className="fixed inset-0 bg-black/60 z-40"
              />

              {/* Modale Flottante - CENTRATA */}
              <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 50 }}
                  transition={{ duration: 0.3 }}
                  className="bg-talea-black rounded-xl shadow-2xl border border-talea-orange/50 w-full max-w-3xl max-h-[90vh] overflow-y-auto"
                >
                  {/* Header */}
                  <div className="bg-gradient-to-r from-talea-orange to-orange-600 p-6 flex items-center justify-between sticky top-0 z-10">
                    <div>
                      <h2 className="font-bebas text-2xl font-black text-white">
                        {selectedGallery.nome}
                      </h2>
                      <p className="text-white/90 text-xs mt-1">
                        {selectedGallery.foto.length} foto
                      </p>
                    </div>
                    
                    {/* Close Button */}
                    <motion.button
                      onClick={() => setSelectedGallery(null)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-white hover:text-orange-200 text-3xl w-12 h-12 flex items-center justify-center"
                    >
                      ✕
                    </motion.button>
                  </div>

                  {/* Grid Foto Responsive */}
                  <div className="p-8 bg-talea-black/50">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                      {selectedGallery.foto.map((link, idx) => {
                        console.log(`\n=== FOTO ${idx} ===`)
                        console.log(`RAW Link: ${link}`)
                        
                        // CORRETTO: Estrai l'ID dopo /file/d/
                        const idMatch = link.match(/\/file\/d\/([^/]+)/)
                        console.log(`Regex match: ${idMatch ? idMatch[1] : 'NESSUN MATCH'}`)
                        
                        const fileId = idMatch ? idMatch[1] : null
                        console.log(`File ID estratto: ${fileId}`)
                        
                        // URL thumbnail via Google CDN - QUALITÀ ALTA
                        const thumbnailUrl = fileId 
                          ? `https://lh3.googleusercontent.com/d/${fileId}=s400`
                          : null
                        
                        console.log(`Thumbnail URL: ${thumbnailUrl}`)
                        
                        return (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                            className="flex flex-col items-center gap-3"
                          >
                            {/* Foto RESPONSIVE: Mobile 120px, Tablet 160px, Desktop 200px */}
                            <div className="relative w-32 sm:w-40 md:w-52 h-32 sm:h-40 md:h-52 rounded-lg overflow-hidden bg-black/50 border border-talea-orange/30 hover:border-talea-orange transition-all">
                              {thumbnailUrl && (
                                <img
                                  src={thumbnailUrl}
                                  alt={`Foto ${idx + 1}`}
                                  className="w-full h-full object-cover"
                                  referrerPolicy="no-referrer"
                                  crossOrigin="anonymous"
                                  loading="lazy"
                                  onLoad={() => {
                                    console.log(`✅ Foto ${idx} caricata`)
                                  }}
                                  onError={(e) => {
                                    console.log(`❌ Fallito ${idx}: ${thumbnailUrl}`)
                                    e.target.style.display = 'none'
                                  }}
                                />
                              )}
                            </div>

                            {/* Pulsante Apri */}
                            <motion.a
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="bg-talea-orange hover:bg-orange-600 text-white font-bebas font-black px-3 py-1 rounded text-xs transition-all duration-300 uppercase tracking-wide"
                            >
                              Apri →
                            </motion.a>
                          </motion.div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="border-t border-talea-orange/30 p-6 flex justify-center">
                    <motion.button
                      onClick={() => setSelectedGallery(null)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-talea-orange hover:bg-orange-600 text-white font-bebas font-black px-8 py-3 rounded-lg transition-all duration-300 uppercase tracking-wider text-sm"
                    >
                      Chiudi Galleria
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  )
}
