'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function News() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedNews, setSelectedNews] = useState(null)

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch('https://sheetdb.io/api/v1/m2q6s6csmvhb9?sheet=NEWS')
        const data = await response.json()
        setNews(data.slice(0, 3))
        setLoading(false)
      } catch (error) {
        console.error('Errore nel caricamento news:', error)
        setLoading(false)
      }
    }
    fetchNews()
  }, [])

  const colorMap = {
    'Partnership': 'from-talea-orange to-orange-500',
    'Risultati': 'from-orange-400 to-talea-orange',
    'Iscrizioni': 'from-talea-orange to-yellow-500',
  }

  if (loading) return <div className="py-20 text-center text-gray-300">Caricamento...</div>

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
              ULTIME NOTIZIE
            </h2>
          </motion.div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedNews(item)}
                className="group cursor-pointer"
              >
                <div className={`bg-gradient-to-br ${colorMap[item.Categoria] || 'from-talea-orange to-orange-500'} rounded-lg p-6 h-full flex flex-col justify-between shadow-lg group-hover:shadow-2xl transition-all duration-300`}>
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs font-bold text-white/90 uppercase tracking-wider">
                        {item.Data}
                      </span>
                      <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full font-semibold">
                        {item.Categoria}
                      </span>
                    </div>
                    <h3 className="font-bebas text-2xl font-black text-white mb-3 group-hover:text-white transition-colors">
                      {item.Titolo}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed line-clamp-3">
                      {item.Descrizione}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/20">
                    <span className="text-white font-semibold text-sm group-hover:translate-x-1 transition-transform inline-block">
                      Leggi di più →
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Modale News */}
      {selectedNews && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-talea-black rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto"
          >
            {/* Header */}
            <div className={`bg-gradient-to-r ${colorMap[selectedNews.Categoria] || 'from-talea-orange to-orange-500'} p-6 flex justify-between items-start sticky top-0 z-10`}>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    {selectedNews.Categoria}
                  </span>
                  <span className="text-white/90 text-xs font-semibold">{selectedNews.Data}</span>
                </div>
                <h2 className="font-bebas text-3xl font-black text-white">
                  {selectedNews.Titolo}
                </h2>
              </div>
              <button
                onClick={() => setSelectedNews(null)}
                className="text-white text-3xl hover:text-gray-300 transition-colors ml-4 flex-shrink-0"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="p-8">
              <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-wrap">
                {selectedNews.Descrizione}
              </p>

              {/* Meta Info */}
              <div className="mt-8 pt-6 border-t border-talea-orange/20">
                <p className="text-gray-400 text-sm">
                  📅 Pubblicato il {selectedNews.Data}
                </p>
                <p className="text-talea-orange text-sm font-semibold mt-2">
                  Categoria: {selectedNews.Categoria}
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedNews(null)}
                className="mt-6 bg-talea-orange hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors w-full"
              >
                Chiudi
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}
