'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Staff() {
  const [staff, setStaff] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchStaff() {
      try {
        const response = await fetch('https://sheetdb.io/api/v1/m2q6s6csmvhb9?sheet=STAFF')
        const data = await response.json()
        
        // Raggruppa per Nome (ignora categoria)
        const grouped = {}
        data.forEach(item => {
          if (!grouped[item.Nome]) {
            grouped[item.Nome] = {
              ruoli: [],
              categorie: []
            }
          }
          grouped[item.Nome].ruoli.push(item.Ruolo)
          grouped[item.Nome].categorie.push(item.Categoria)
        })
        
        // Rimuovi duplicati e converti in array
        const staffArray = Object.entries(grouped).map(([nome, info]) => ({
          Nome: nome,
          Ruoli: [...new Set(info.ruoli)], // Rimuovi ruoli duplicati
          Categorie: [...new Set(info.categorie)] // Rimuovi categorie duplicate
        }))
        
        setStaff(staffArray)
        setLoading(false)
      } catch (error) {
        console.error('Errore nel caricamento staff:', error)
        setLoading(false)
      }
    }
    fetchStaff()
  }, [])

  if (loading) return <div className="py-20 text-center text-gray-300">Caricamento staff...</div>

  return (
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
            STAFF TECNICO
          </h2>
          <p className="text-gray-300 text-lg">
            I professionisti che guidano le nostre squadre
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {staff.map((membro, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-talea-orange to-orange-500 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div>
                <p className="text-white font-bebas text-2xl font-black mb-1">
                  {membro.Nome}
                </p>
                
                <div className="pt-4 border-t border-white/20 space-y-3 mt-4">
                  {membro.Ruoli.map((ruolo, ridx) => (
                    <div key={ridx} className="text-white/90 text-sm">
                      <p className="font-semibold">🎓 {ruolo}</p>
                      <p className="text-white/70 text-xs ml-5 mt-1">
                        {membro.Categorie.filter((_, cidx) => 
                          membro.Ruoli.filter((_, cridx) => cridx === ridx).length > 0
                        ).join(', ') || membro.Categorie.join(', ')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
