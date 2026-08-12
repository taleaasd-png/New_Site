'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-talea-black/95 backdrop-blur-md py-2 border-b border-talea-orange/20'
          : 'bg-talea-black py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo + Sponsor LEFT */}
        <div className="flex items-center gap-4 h-16">
          {/* Logo Talea - Drop shadow bianco come nella Hero */}
          <Link href="/">
            <motion.div
              animate={{
                width: isScrolled ? 40 : 60,
                height: isScrolled ? 40 : 60,
              }}
              transition={{ duration: 0.3 }}
              className="relative cursor-pointer flex-shrink-0 flex items-center justify-center"
              style={{
                filter: isScrolled 
                  ? 'drop-shadow(1px 1px 0 white) drop-shadow(-1px 1px 0 white)'
                  : 'drop-shadow(2px 2px 0 white) drop-shadow(-2px 2px 0 white) drop-shadow(2px -2px 0 white) drop-shadow(-2px -2px 0 white) drop-shadow(0 2px 0 white) drop-shadow(0 -2px 0 white) drop-shadow(2px 0 0 white) drop-shadow(-2px 0 0 white)'
              }}
            >
              <Image
                src="/images/logo.png"
                alt="Talea Basket"
                width={60}
                height={60}
                className="object-contain"
              />
            </motion.div>
          </Link>

          {/* Sponsor Origin */}
          <motion.div
            animate={{
              width: isScrolled ? 50 : 80,
              height: isScrolled ? 25 : 40,
            }}
            transition={{ duration: 0.3 }}
            className="relative flex-shrink-0 flex items-center"
            style={{
              filter: isScrolled 
                ? 'drop-shadow(1px 1px 0 white) drop-shadow(-1px 1px 0 white)'
                : 'drop-shadow(2px 2px 0 white) drop-shadow(-2px 2px 0 white) drop-shadow(2px -2px 0 white) drop-shadow(-2px -2px 0 white) drop-shadow(0 2px 0 white) drop-shadow(0 -2px 0 white) drop-shadow(2px 0 0 white) drop-shadow(-2px 0 0 white)'
            }}
          >
            <Image
              src="/images/origin-logo.svg"
              alt="Origin Sponsor"
              width={80}
              height={40}
              className="object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          </motion.div>

          {/* Sponsor Lame */}
          <motion.div
            animate={{
              width: isScrolled ? 50 : 80,
              height: isScrolled ? 25 : 40,
            }}
            transition={{ duration: 0.3 }}
            className="relative flex-shrink-0 flex items-center justify-center"
            style={{
              filter: isScrolled 
                ? 'drop-shadow(1px 1px 0 white) drop-shadow(-1px 1px 0 white)'
                : 'drop-shadow(2px 2px 0 white) drop-shadow(-2px 2px 0 white) drop-shadow(2px -2px 0 white) drop-shadow(-2px -2px 0 white) drop-shadow(0 2px 0 white) drop-shadow(0 -2px 0 white) drop-shadow(2px 0 0 white) drop-shadow(-2px 0 0 white)'
            }}
          >
            <Image
              src="/images/lame-logo.png"
              alt="Lame Sponsor"
              width={80}
              height={40}
              className="object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          </motion.div>
        </div>

        {/* Navigation */}
        <nav className={`flex items-center gap-6 ${isScrolled ? 'text-sm' : 'text-base'}`}>
          <Link href="/sponsor">
            <span className="text-gray-300 hover:text-talea-orange transition-colors cursor-pointer font-medium">
              Sponsor
            </span>
          </Link>
        </nav>
      </div>
    </motion.header>
  )
}
