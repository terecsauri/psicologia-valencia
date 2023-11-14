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
  description: 'Psicólogo en Valencia. Más de 10 años de experiencia con clientes felices. Cumplimos con el tiempo y el presupuesto',
  keywords: ['Reformas', 'Valencia', 'Reformas Áticos', 'Reformas baños', 'Reformas cocinas', 'Reformas Edificios',  
  'Reformas Fachadas', 'Reformas Locales', 'Reformas Oficinas', 'Reformas Terrazas',],
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className} style={{ position: "relative" }}>
        <Whats/>  
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
