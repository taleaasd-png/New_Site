'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://instagram.com/taleabasket',
      icon: '/images/Logo_I.png',
      alt: 'Instagram'
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/taleabasket',
      icon: '/images/Logo_F.png',
      alt: 'Facebook'
    },
    {
      name: 'Twitch',
      url: 'https://twitch.tv/taleabasket',
      icon: '/images/Logo_T.png',
      alt: 'Twitch'
    },
  ]

  return (
    <footer className="bg-talea-black border-t border-talea-orange/20 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Colonna 1: Logo e Descrizione */}
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
              Basket femminile 100% dal 2019. Territorio, passione e dedizione in ogni allenamento e partita.
            </p>
          </motion.div>

          {/* Colonna 2: Link Rapidi */}
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
              <li><a href="/" className="text-gray-400 hover:text-talea-orange transition-colors">Home</a></li>
              <li><a href="#squadre" className="text-gray-400 hover:text-talea-orange transition-colors">Squadre</a></li>
              <li><a href="#gare" className="text-gray-400 hover:text-talea-orange transition-colors">Gare</a></li>
              <li><a href="#staff" className="text-gray-400 hover:text-talea-orange transition-colors">Staff</a></li>
            </ul>
          </motion.div>

          {/* Colonna 3: Contatti */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bebas text-lg font-black text-talea-orange mb-4">
              Contatti
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">
                <span className="font-semibold">Email:</span><br />
                info@taleabasket.it
              </li>
              <li className="text-gray-400">
                <span className="font-semibold">Città:</span><br />
                Ostia, Roma
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divisore */}
        <div className="h-px bg-talea-orange/20 my-8"></div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center gap-8 mb-8"
        >
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:scale-125 hover:brightness-125"
              title={social.name}
            >
              <div className="w-12 h-12 relative">
                <Image
                  src={social.icon}
                  alt={social.alt}
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
            </a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm"
        >
          <p>
            © {currentYear} Talea Basket Ostia. Tutti i diritti riservati.
          </p>
          <p className="mt-2 text-xs">
            Passione, dedizione, basket femminile 🏀
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
