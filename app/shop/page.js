'use client'

import { motion } from 'framer-motion'

export default function Shop() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-talea-black to-gray-900 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-bebas text-6xl md:text-7xl font-black text-talea-orange mb-4">
              SHOP TALEA
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Scopri l'abbigliamento e i merchandising ufficiali Talea Basket. 
              Indossa i colori della tua squadra del cuore!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Shop Macron */}
      <section className="bg-talea-black py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-2xl border border-talea-orange/20"
          >
            {/* Iframe Macron */}
            <iframe
              src="https://clubshop.macron.com/roma/pallacanestro-talea/merchandising"
              width="100%"
              height="900"
              style={{
                border: 'none',
                borderRadius: '8px'
              }}
              title="Talea Basket - Macron Shop"
              allow="payment"
            />
          </motion.div>

          {/* Fallback message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 mb-4">
              Se l'iframe non si carica correttamente, clicca il pulsante qui sotto:
            </p>
            <a
              href="https://clubshop.macron.com/roma/pallacanestro-talea/merchandising"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-talea-orange hover:bg-orange-600 text-white font-bebas text-lg font-black px-8 py-3 rounded-lg transition-colors"
            >
              Apri lo Shop Macron →
            </a>
          </motion.div>
        </div>
      </section>

      {/* Info Footer */}
      <section className="bg-gray-900 py-12 px-6 border-t border-talea-orange/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div>
              <h3 className="text-talea-orange font-bebas text-2xl mb-2">🚚 Spedizione</h3>
              <p className="text-gray-400 text-sm">
                Consegna veloce in tutta Italia con Macron
              </p>
            </div>
            <div>
              <h3 className="text-talea-orange font-bebas text-2xl mb-2">🛡️ Qualità</h3>
              <p className="text-gray-400 text-sm">
                Abbigliamento ufficiale Macron certificato
              </p>
            </div>
            <div>
              <h3 className="text-talea-orange font-bebas text-2xl mb-2">💳 Sicuro</h3>
              <p className="text-gray-400 text-sm">
                Pagamenti sicuri e protetti con Macron
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
