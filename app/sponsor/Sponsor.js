'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Sponsor() {
  return (
    <>
      {/* Pulsante flottante Torna alla Home */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed bottom-6 right-6 z-40"
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
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-bebas text-5xl md:text-7xl font-black text-talea-orange drop-shadow-lg mb-4"
            >
              I NOSTRI SPONSOR
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-300 text-lg md:text-xl mb-6 max-w-2xl mx-auto"
            >
              Grazie ai nostri partner che credono in Talea Basket e supportano la crescita delle nostre ragazze
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-gray-400 text-base md:text-lg mb-12 max-w-2xl mx-auto"
            >
              Scopri i nostri sponsor ufficiali e visita i loro siti
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

      {/* Sponsor Cards */}
      <section className="py-20 px-6 bg-talea-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {/* Origin Sponsor */}
            <motion.a
              href="https://www.originsolutions.it"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -20, scale: 1.05 }}
              className="relative group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-talea-orange to-orange-600 rounded-2xl p-12 shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 h-full flex flex-col items-center justify-center min-h-96">
                {/* Logo Container */}
                <div className="relative w-48 h-48 mb-8">
                  <Image
                    src="/images/origin-logo.svg"
                    alt="Origin Solutions"
                    fill
                    className="object-contain drop-shadow-2xl"
                    style={{
                      filter: 'drop-shadow(2px 2px 0 white) drop-shadow(-2px 2px 0 white) drop-shadow(2px -2px 0 white) drop-shadow(-2px -2px 0 white) drop-shadow(0 2px 0 white) drop-shadow(0 -2px 0 white) drop-shadow(2px 0 0 white) drop-shadow(-2px 0 0 white)'
                    }}
                  />
                </div>

                {/* Text */}
                <h3 className="text-white font-bebas text-3xl font-black mb-3">
                  ORIGIN SOLUTIONS
                </h3>
                <p className="text-white/90 text-center mb-6">
                  Partner tecnologico e innovativo di Talea Basket
                </p>

                {/* CTA */}
                <div className="mt-auto">
                  <p className="text-white text-sm uppercase font-semibold tracking-wider">
                    Visita il sito →
                  </p>
                </div>
              </div>
            </motion.a>

            {/* Lame Sponsor */}
            <motion.a
              href="https://www.lamesrl.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -20, scale: 1.05 }}
              className="relative group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-talea-orange to-orange-600 rounded-2xl p-12 shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 h-full flex flex-col items-center justify-center min-h-96">
                {/* Logo Container */}
                <div className="relative w-48 h-48 mb-8">
                  <Image
                    src="/images/lame-logo.png"
                    alt="Lame SRL"
                    fill
                    className="object-contain drop-shadow-2xl"
                    style={{
                      filter: 'drop-shadow(2px 2px 0 white) drop-shadow(-2px 2px 0 white) drop-shadow(2px -2px 0 white) drop-shadow(-2px -2px 0 white) drop-shadow(0 2px 0 white) drop-shadow(0 -2px 0 white) drop-shadow(2px 0 0 white) drop-shadow(-2px 0 0 white)'
                    }}
                  />
                </div>

                {/* Text */}
                <h3 className="text-white font-bebas text-3xl font-black mb-3">
                  LAME
                </h3>
                <p className="text-white/90 text-center mb-6">
                  Supporter storico della crescita di Talea Basket
                </p>

                {/* CTA */}
                <div className="mt-auto">
                  <p className="text-white text-sm uppercase font-semibold tracking-wider">
                    Visita il sito →
                  </p>
                </div>
              </div>
            </motion.a>
          </div>

          {/* Diventa Sponsor CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-talea-orange to-orange-600 rounded-2xl p-12 text-center"
          >
            <h2 className="font-bebas text-4xl md:text-5xl font-black text-white mb-4">
              Vuoi diventare sponsor?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Supporta lo sviluppo del basket femminile a Ostia e partecipa alla crescita di Talea Basket
            </p>
            <a
              href="mailto:info@taleabasket.it?subject=Sponsorship%20Talea%20Basket"
              className="inline-block bg-talea-black hover:bg-gray-900 text-talea-orange font-bebas text-xl font-black px-10 py-4 rounded-lg transition-all duration-300 uppercase tracking-wider"
            >
              Contattaci per Partnership
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
