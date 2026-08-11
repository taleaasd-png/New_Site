'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function StaffComponent({ categoria }) {
  const [staff, setStaff] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchStaff() {
      try {
        const response = await fetch('https://sheetdb.io/api/v1/m2q6s6csmvhb9?sheet=STAFF')
        const data = await response.json()
        
        // Filtra per categoria
        const filtered = data.filter(s => s.Categoria === categoria)
        
        // Raggruppa per Nome
        const grouped = {}
        filtered.forEach(item => {
          if (!grouped[item.Nome]) {
            grouped[item.Nome] = []
          }
          grouped[item.Nome].push(item.Ruolo)
        })
        
        // Converti in array
        const staffArray = Object.entries(grouped).map(([nome, ruoli]) => ({
          Nome: nome,
          Ruoli: ruoli
        }))
        
        setStaff(staffArray)
        setLoading(false)
      } catch (error) {
        console.error('Errore nel caricamento staff:', error)
        setLoading(false)
      }
    }
    fetchStaff()
  }, [categoria])

  if (loading) {
    return <div className="py-10 text-center text-gray-300">Caricamento staff...</div>
  }

  if (staff.length === 0) {
    return null
  }

  return (
    <div className="w-full">
      <h3 className="font-bebas text-2xl font-black text-talea-orange mb-6">
        Staff Tecnico
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {staff.map((membro, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-talea-orange to-orange-500 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div>
              <p className="text-white font-bebas text-lg font-black">
                {membro.Nome}
              </p>
              
              <div className="mt-4 pt-4 border-t border-white/20 space-y-2">
                {membro.Ruoli.map((ruolo, ridx) => (
                  <p key={ridx} className="text-white/90 text-sm">
                    🎓 {ruolo}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
