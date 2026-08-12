'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-talea-black flex items-center justify-center px-6 overflow-hidden">
      {/* Animated Grid Background */}
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

      {/* Basketball - Top Left - Blurred */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-40 -left-40 pointer-events-none"
        style={{
          fontSize: '400px',
          opacity: 0.25,
          filter: 'blur(1px)',
          lineHeight: '1',
        }}
      >
        🏀
      </motion.div>

      {/* Basketball - Bottom Right - Blurred */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute -bottom-40 -right-40 pointer-events-none"
        style={{
          fontSize: '400px',
          opacity: 0.25,
          filter: 'blur(1px)',
          lineHeight: '1',
        }}
      >
        🏀
      </motion.div>

      {/* Gradient Blob 1 - Breathing */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-40 -left-40 w-96 h-96 bg-talea-orange/20 rounded-full blur-3xl pointer-events-none"
      />

      {/* Gradient Blob 2 - Breathing */}
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
          {/* Logo */}
          <div className="mb-8">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-48 h-48 mx-auto"
            >
              <Image
                src="/images/logo.png"
                alt="Talea Basket"
                width={192}
                height={192}
                priority
                className="w-full h-full object-contain drop-shadow-2xl"
                style={{
                  filter: 'drop-shadow(2px 2px 0 white) drop-shadow(-2px 2px 0 white) drop-shadow(2px -2px 0 white) drop-shadow(-2px -2px 0 white) drop-shadow(0 2px 0 white) drop-shadow(0 -2px 0 white) drop-shadow(2px 0 0 white) drop-shadow(-2px 0 0 white)',
                }}
              />
            </motion.div>
          </div>

          {/* Title TALEA */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-bebas text-6xl md:text-8xl font-black text-talea-orange drop-shadow-lg"
          >
            TALEA
          </motion.h1>

          {/* Title BASKET */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-bebas text-6xl md:text-8xl font-black text-white drop-shadow-lg mb-6"
          >
            BASKET
          </motion.h1>

          {/* Subtitle 1 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-300 text-xl md:text-2xl mb-8 font-light"
          >
            🏀 100% Basket Femminile 🏀
          </motion.p>

          {/* Subtitle 2 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto"
          >
            Crescita umana e sportiva delle nostre ragazze
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col gap-4 items-center justify-center"
          >
            {/* Pulsante Macron Shop */}
            <a href="https://clubshop.macron.com/roma/pallacanestro-talea/merchandising" target="_blank" rel="noopener noreferrer" className="inline-block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 hover:bg-white/20 border-2 border-talea-orange text-talea-orange font-bebas text-lg px-10 py-4 rounded-lg transition-all duration-300 uppercase tracking-wider font-black drop-shadow-lg backdrop-blur-sm"
              >
                🛍️ Visita lo Shop Macron
              </motion.button>
            </a>

            {/* Pulsante Squadre */}
            <a href="#squadre" className="inline-block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-talea-orange hover:bg-orange-600 text-white font-bebas text-xl px-10 py-4 rounded-lg transition-all duration-300 uppercase tracking-wider font-black drop-shadow-lg"
              >
                Scopri le Squadre
              </motion.button>
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-16"
          >
            <p className="text-gray-400 text-sm mb-2">Scorri verso il basso</p>
            <svg
              className="w-6 h-6 mx-auto text-talea-orange"
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
        </motion.div>
      </div>
    </section>
  )
}
