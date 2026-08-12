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
        
        // Raggruppa per Nome, mantenendo tutti i ruoli e categorie
        const grouped = {}
        data.forEach(item => {
          if (!grouped[item.Nome]) {
            grouped[item.Nome] = {
              nome: item.Nome,
              rolesByCategory: [] // Array di {ruolo, categoria}
            }
          }
          grouped[item.Nome].rolesByCategory.push({
            ruolo: item.Ruolo,
            categoria: item.Categoria
          })
        })
        
        // Converti in array e ordina alfabeticamente per nome
        const staffArray = Object.values(grouped).sort((a, b) => 
          a.nome.localeCompare(b.nome)
        )
        
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
                <p className="text-white font-bebas text-2xl font-black mb-4">
                  {membro.nome}
                </p>
                
                <div className="pt-4 border-t border-white/20 space-y-3">
                  {membro.rolesByCategory.map((item, ridx) => (
                    <div key={ridx} className="text-white/90">
                      <p className="font-semibold text-sm">
                        🎓 {item.ruolo}
                      </p>
                      <p className="text-white/70 text-xs ml-5">
                        {item.categoria}
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
