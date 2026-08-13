'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    async function fetchGalleryPhotos() {
      try {
        const response = await fetch('https://sheetdb.io/api/v1/m2q6s6csmvhb9?sheet=GALLERY')
        const data = await response.json()
        
        const allPhotos = []
        data.forEach((gallery) => {
          if (gallery['Slideshow Homepage'] === 'SI' || gallery['Slideshow Homepage'] === 'si') {
            const photoLinks = Object.values(gallery)
              .filter(value => 
                value && 
                typeof value === 'string' && 
                value.includes('drive.google.com') &&
                value.includes('/file/')
              )
              .map(link => {
                // 1. Rimuovi virgolette esterne
                let cleaned = link.trim().replace(/^"(.*)"$/, '$1')
                
                // 2. Estrai l'ID dal link - /file/d/ID/
                const idMatch = cleaned.match(/\/file\/d\/([^/]+)/)
                if (idMatch && idMatch[1]) {
                  // 3. Converti in Google CDN con qualità alta (s800 per slideshow grande)
                  return `https://lh3.googleusercontent.com/d/${idMatch[1]}=s800`
                }
                return cleaned
              })
            
            allPhotos.push(...photoLinks)
          }
        })
        
        setImages(allPhotos)
        setLoading(false)
      } catch (error) {
        console.error('Errore:', error)
        setImages([])
        setLoading(false)
      }
    }
    
    fetchGalleryPhotos()
  }, [])

  useEffect(() => {
    if (!autoplay || images.length === 0) return
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [autoplay, images.length])

  const goToPrevious = () => {
    setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1)
    setAutoplay(false)
  }

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % images.length)
    setAutoplay(false)
  }

  if (loading) return <div className="py-20 text-center text-gray-300">Caricamento...</div>
  const hasImages = images.length > 0

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <a href="/gallery">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-talea-orange hover:bg-orange-600 text-white font-bebas text-lg font-black px-10 py-4 rounded-lg transition-all duration-300 uppercase tracking-wider shadow-lg hover:shadow-xl"
            >
              Scopri Tutte le Gallery
            </motion.button>
          </a>
        </motion.div>

        {hasImages ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-2xl mx-auto"
            style={{ width: '800px', height: '1000px', maxWidth: '100%' }}
          >
            <div className="relative w-full h-full bg-black flex items-center justify-center overflow-hidden">
              <img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Gallery ${currentIndex + 1}`}
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
                crossOrigin="anonymous"
                loading="lazy"
              />
              
              {/* Contatore in alto a destra */}
              <div className="absolute top-4 right-4 bg-talea-black/80 text-talea-orange font-bebas font-black px-4 py-2 rounded-lg text-sm">
                {currentIndex + 1}/{images.length}
              </div>

              {/* Pulsante Indietro - Sinistra */}
              <motion.button
                onClick={goToPrevious}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-talea-orange hover:bg-orange-600 text-white px-4 py-3 rounded-lg transition-all duration-300 z-10"
              >
                ← Indietro
              </motion.button>

              {/* Pulsante Avanti - Destra */}
              <motion.button
                onClick={goToNext}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-talea-orange hover:bg-orange-600 text-white px-4 py-3 rounded-lg transition-all duration-300 z-10"
              >
                Avanti →
              </motion.button>
            </div>

            <div className="bg-talea-black/90 px-6 py-6 flex items-center justify-between">
              <motion.button
                onClick={() => setAutoplay(!autoplay)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-talea-orange hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-bebas font-black"
              >
                {autoplay ? '⏸ Pausa' : '▶ Play'}
              </motion.button>

              <div className="flex-1 mx-6 h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-talea-orange"
                  initial={{ width: '0%' }}
                  animate={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <div className="flex gap-2">
                <motion.button
                  onClick={goToPrevious}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-talea-orange hover:bg-orange-600 text-white p-2 rounded-lg transition-colors text-sm"
                >
                  ←
                </motion.button>
                <motion.button
                  onClick={goToNext}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-talea-orange hover:bg-orange-600 text-white p-2 rounded-lg transition-colors text-sm"
                >
                  →
                </motion.button>
              </div>
            </div>

            <div className="bg-talea-black px-6 py-4 flex flex-wrap gap-2 justify-center">
              {images.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => {
                    setCurrentIndex(idx)
                    setAutoplay(false)
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentIndex ? 'bg-talea-orange w-6' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-2xl bg-black max-w-xs mx-auto"
          >
            <div className="relative w-full aspect-square bg-talea-black flex items-center justify-center overflow-hidden">
              <img
                src="/images/logo.png"
                alt="Talea Basket Logo"
                className="w-40 h-40 object-contain drop-shadow-2xl"
                style={{
                  filter: 'drop-shadow(2px 2px 0 white) drop-shadow(-2px 2px 0 white) drop-shadow(2px -2px 0 white) drop-shadow(-2px -2px 0 white) drop-shadow(0 2px 0 white) drop-shadow(0 -2px 0 white) drop-shadow(2px 0 0 white) drop-shadow(-2px 0 0 white)',
                }}
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
