import './globals.css'

export const metadata = {
  title: 'Talea Basket Ostia - Pallacanestro Femminile',
  description: 'Talea Basket: Basketball femminile 100% dedicato alla crescita umana e sportiva. U14, U15, U17, U19, Serie C.',
  keywords: 'basket, pallacanestro, femminile, ostia, roma, talea',
}

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@300;400;600;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-montserrat bg-talea-black text-white antialiased">
        {children}
      </body>
    </html>
  )
}
