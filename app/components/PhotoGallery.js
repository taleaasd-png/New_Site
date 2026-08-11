'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  
  const images = [
    '1G0A4756.jpg',
    '1G0A4894.jpg',	
    '1G0A5052.jpg',
    '1G0A7416.jpg',
    '1G0A7547.jpg',
    '1G0A8052.jpg',
    '1G0A4773.jpg',
    '1G0A4995.jpg',
    '1G0A7386.jpg',
    '1G0A7469.jpg',
    '1G0A7554.jpg',
    '1G0A8056.jpg',
    '1G0A4816.jpg',
    '1G0A5000.jpg',
    '1G0A7398.jpg',
    '1G0A7492.jpg',
    '1G0A7571.jpg',
    '1G0A4883.jpg',
    '1G0A5012.jpg',
    '1G0A7402.jpg',
    '1G0A7496.jpg',
    '1G0A7884.jpg',
  ]

  // Slideshow auto
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length)
    }, 5000) // Cambia foto ogni 5 secondi

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

  return (
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
            LA NOSTRA STORIA
          </h2>
          <p className="text-gray-300 text-lg">
            Momenti indimenticabili delle nostre ragazze
          </p>
        </motion.div>

        {/* SLIDESHOW PRINCIPALE - Box Verticale Grande */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full max-w-2xl mx-auto mb-12"
        >
          {/* Box Foto */}
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl bg-gray-900">
            {/* Foto corrente */}
            <img
              src={`/images/${images[currentIndex]}`}
              alt={`Foto ${currentIndex + 1}`}
              className="w-full h-full object-cover object-top"
            />

            {/* Overlay scuro in basso */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent"></div>

            {/* Pulsante Play/Pause */}
            <button
              onClick={() => setAutoplay(!autoplay)}
              className="absolute top-4 right-4 bg-talea-orange/80 hover:bg-talea-orange text-white text-xl px-4 py-2 rounded-lg transition-all"
              title={autoplay ? 'Pausa' : 'Riproduci'}
            >
              {autoplay ? '⏸' : '▶'}
            </button>

            {/* Contatore foto */}
            <div className="absolute bottom-6 left-6 text-white font-bebas text-lg font-black">
              {currentIndex + 1} / {images.length}
            </div>

            {/* Progress bar */}
            <div className="absolute bottom-2 left-6 right-6 h-1 bg-gray-600 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: autoplay ? '100%' : '0%' }}
                transition={{ duration: 5, ease: 'linear' }}
                className="h-full bg-talea-orange"
              />
            </div>
          </div>

          {/* Frecce Navigazione */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 text-white text-5xl hover:text-talea-orange transition-colors z-10"
          >
            ‹
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 text-white text-5xl hover:text-talea-orange transition-colors z-10"
          >
            ›
          </button>

          {/* Indicatori Dot */}
          <div className="flex justify-center gap-2 mt-8">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx)
                  setAutoplay(false)
                }}
                className={`h-3 rounded-full transition-all ${
                  idx === currentIndex
                    ? 'bg-talea-orange w-8'
                    : 'bg-gray-600 w-3 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Pulsante Scopri di più */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="bg-talea-orange hover:bg-orange-600 text-white font-bebas text-lg font-black px-8 py-3 rounded-lg transition-colors">
            Scopri di più →
          </button>
        </motion.div>
      </div>
    </section>
  )
}
