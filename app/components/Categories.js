'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const categories = [
  { name: 'SERIE C', slug: 'serie-c', color: 'from-talea-orange to-yellow-500', icon: '🏆' },
  { name: 'U19', slug: 'u19', color: 'from-talea-orange to-orange-500', icon: '🏀' },
  { name: 'U17', slug: 'u17', color: 'from-orange-400 to-talea-orange', icon: '🏀' },
  { name: 'U15', slug: 'u15', color: 'from-talea-orange to-orange-600', icon: '🏀' },
  { name: 'U14', slug: 'u14', color: 'from-orange-500 to-talea-orange', icon: '🏀' },
  
]

export default function Categories() {
  return (
    <section className="py-20 px-6 bg-talea-black/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-bebas text-5xl md:text-6xl font-black text-talea-orange mb-4">
            LE NOSTRE SQUADRE
          </h2>
          <p className="text-gray-300 text-lg">
            Categorie dal minibasket alla Serie C
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {categories.map((cat, idx) => (
            <Link key={cat.slug} href={`/squadre/${cat.slug}`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group cursor-pointer"
              >
                <div className={`bg-gradient-to-br ${cat.color} rounded-lg p-8 h-full flex flex-col items-center justify-center gap-4 shadow-lg group-hover:shadow-2xl transition-all duration-300`}>
                  <span className="text-4xl">{cat.icon}</span>
                  <h3 className="font-bebas text-3xl font-black text-white drop-shadow-lg">
                    {cat.name}
                  </h3>
                  <p className="text-white text-sm opacity-90 text-center">
                    Scopri di più
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}