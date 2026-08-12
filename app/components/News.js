'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function News() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [showAllNews, setShowAllNews] = useState(false)
  const [selectedNews, setSelectedNews] = useState(null)

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch('https://sheetdb.io/api/v1/m2q6s6csmvhb9?sheet=NEWS')
        const data = await response.json()
        
        // Ordina per data (più recente prima)
        const sorted = data.sort((a, b) => {
          const dateA = new Date(a.Data.split('/').reverse().join('-'))
          const dateB = new Date(b.Data.split('/').reverse().join('-'))
          return dateB - dateA
        })
        
        setNews(sorted)
        setLoading(false)
      } catch (error) {
        console.error('Errore nel caricamento news:', error)
        setLoading(false)
      }
    }
    fetchNews()
  }, [])

  if (loading) return <div className="py-20 text-center text-gray-300">Caricamento news...</div>

  // Mostra solo 3 news nella sezione principale
  const displayedNews = news.slice(0, 3)

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
            <p className="text-gray-300 text-lg">
              Rimani aggiornato sulle novità di Talea Basket
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {displayedNews.map((article, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedNews(article)}
                className="bg-gradient-to-br from-talea-orange to-orange-500 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-full flex flex-col justify-between"
              >
                <div>
                  <p className="text-white/90 text-sm font-semibold mb-3">{article.Data}</p>
                  <h3 className="text-white font-bebas text-2xl font-black mb-3">
                    {article.Titolo}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    {article.Descrizione.substring(0, 100)}...
                  </p>
                </div>
                <p className="text-white text-xs uppercase font-semibold">
                  Leggi di più →
                </p>
              </motion.div>
            ))}
          </div>

          {/* Pulsante Vedi di più */}
          {news.length > 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <button
                onClick={() => setShowAllNews(true)}
                className="bg-talea-orange hover:bg-orange-600 text-white font-bebas text-lg font-black px-8 py-3 rounded-lg transition-colors"
              >
                Vedi Tutte le Notizie
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Modal Tutte le News */}
      {showAllNews && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-talea-black rounded-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto"
          >
            <div className="bg-gradient-to-r from-talea-orange to-orange-600 p-6 flex justify-between items-center sticky top-0 z-10">
              <h3 className="font-bebas text-3xl font-black text-white">
                TUTTE LE NOTIZIE
              </h3>
              <button
                onClick={() => setShowAllNews(false)}
                className="text-white text-3xl hover:text-gray-300 transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {news.map((article, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => {
                    setSelectedNews(article)
                    setShowAllNews(false)
                  }}
                  className="bg-gradient-to-br from-talea-orange to-orange-500 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <p className="text-white/90 text-xs font-semibold mb-2">{article.Data}</p>
                  <h4 className="text-white font-bebas font-black text-lg mb-2">
                    {article.Titolo}
                  </h4>
                  <p className="text-white/80 text-xs">
                    {article.Descrizione.substring(0, 80)}...
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      )}

      {/* Modal Dettagli News */}
      {selectedNews && (
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
                  {selectedNews.Titolo}
                </h3>
                <p className="text-white/90 text-sm mt-1">{selectedNews.Data}</p>
              </div>
              <button
                onClick={() => setSelectedNews(null)}
                className="text-white text-3xl hover:text-gray-300 transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="p-6">
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                {selectedNews.Descrizione}
              </p>

              {/* Pulsante Approfondisci se Link esiste */}
              {selectedNews.Link && (
                <a
                  href={selectedNews.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-talea-orange hover:bg-orange-600 text-white font-bebas text-lg font-black px-8 py-3 rounded-lg transition-colors uppercase tracking-wider"
                >
                  Approfondisci →
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}
