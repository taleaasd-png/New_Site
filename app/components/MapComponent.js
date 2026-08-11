'use client'

import { useEffect, useState } from 'react'

export default function MapComponent({ latitude, longitude, address }) {
  const [mapUrl, setMapUrl] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Se abbiamo coordinate, usale direttamente
    if (latitude && longitude) {
      const lat = parseFloat(latitude)
      const lon = parseFloat(longitude)
      
      if (!isNaN(lat) && !isNaN(lon)) {
        const embedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${lon - 0.01},${lat - 0.01},${lon + 0.01},${lat + 0.01}&layer=mapnik&marker=${lat},${lon}`
        setMapUrl(embedUrl)
        setLoading(false)
        return
      }
    }

    // Fallback: se no coordinate, mostra Ostia
    const defaultLat = 41.7335
    const defaultLon = 12.2965
    const embedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${defaultLon - 0.05},${defaultLat - 0.05},${defaultLon + 0.05},${defaultLat + 0.05}&layer=mapnik&marker=${defaultLat},${defaultLon}`
    setMapUrl(embedUrl)
    setLoading(false)
  }, [latitude, longitude])

  if (loading) {
    return <div className="w-full h-96 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400">Caricamento mappa...</div>
  }

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden border border-talea-orange/30">
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src={mapUrl}
        style={{ border: 0 }}
      ></iframe>
    </div>
  )
}
