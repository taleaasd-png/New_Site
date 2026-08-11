'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const photos = [
  '1G0A4756.jpg',
  '1G0A4773.jpg',
  '1G0A4816.jpg',
  '1G0A4883.jpg',
  '1G0A4894.jpg',
  '1G0A4995.jpg',
  '1G0A5000.jpg',
  '1G0A5012.jpg',
  '1G0A5052.jpg',
  '1G0A7386.jpg',
  '1G0A7398.jpg',
  '1G0A7402.jpg',
  '1G0A7416.jpg',
  '1G0A7469.jpg',
  '1G0A7492.jpg',
  '1G0A7496.jpg',
  '1G0A7547.jpg',
  '1G0A7554.jpg',
  '1G0A7571.jpg',
  '1G0A7884.jpg',
]

export default function PhotoGallery() {
  const [showAll, setShowAll] = useState(false)
  const displayedPhotos = showAll ? photos : photos.slice(0, 9)

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
            LE NOSTRE RAGAZZE
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Energia, passione e dedizione in ogni allenamento e partita
          </p>
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedPhotos.map((photo, idx) => (
            <motion.div
              key={photo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg group cursor-pointer"
            >
              <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                <Image
                  src={`/images/${photo}`}
                  alt={`Talea Basket - Photo ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-talea-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-talea-orange font-bebas text-lg">Talea Basket</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scopri di Più Button */}
        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={() => setShowAll(true)}
              className="bg-gradient-to-r from-talea-orange to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bebas text-xl px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-talea-orange/50 uppercase tracking-wider"
            >
              Scopri di Più
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}