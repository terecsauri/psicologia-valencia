import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from "../app/components/Navbar"
import Whats from './components/Whats'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
default: 'Psicología Valencia',
template: '%s',
  },

  description: 'Psicólogo en Valencia. Más de 10 años de experiencia, más de 2000 pacientes confían en nuestros psicólogos.',
  keywords: ['psicólogo', 'terapia de pareja', 'psicólogo infantil', 'psicólogo barato', 'depresión', 'TDH'],
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
}
export default function RootLayout({children,}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={montserrat.className} style={{ position: "relative" }}>
        <Whats/>  
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
