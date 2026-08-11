'use client'

import { motion } from 'framer-motion'

const socials = [
  { name: 'Instagram', url: 'https://instagram.com/taleabasket', icon: '📷' },
  { name: 'Facebook', url: 'https://facebook.com/taleabasket', icon: '👍' },
  { name: 'Twitch', url: 'https://twitch.tv/taleabasket', icon: '🎮' },
]

export default function Footer() {
  return (
    <footer className="bg-talea-black border-t border-talea-orange/20 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bebas text-2xl font-black text-talea-orange mb-4">
              TALEA BASKET
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              100% dedicata al basket femminile. Crescita umana e sportiva delle nostre ragazze, dalla U14 alla Serie C.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bebas text-lg font-black text-talea-orange mb-4">
              Link Rapidi
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-talea-orange transition-colors">Le nostre squadre</a></li>
              <li><a href="#" className="text-gray-400 hover:text-talea-orange transition-colors">Calendario</a></li>
              <li><a href="#" className="text-gray-400 hover:text-talea-orange transition-colors">Iscrizioni</a></li>
              <li><a href="#" className="text-gray-400 hover:text-talea-orange transition-colors">Contatti</a></li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bebas text-lg font-black text-talea-orange mb-4">
              Seguici
            </h4>
            <div className="flex gap-4">
              {socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 bg-gradient-to-br from-talea-orange to-orange-600 rounded-full flex items-center justify-center text-xl hover:shadow-lg hover:shadow-talea-orange/50 transition-all"
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-talea-orange/20 pt-8 text-center"
        >
          <p className="text-gray-500 text-sm">
            © 2026 Talea Basket Ostia | Pallacanestro Femminile 100%
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
