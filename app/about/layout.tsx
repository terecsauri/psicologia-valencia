
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Footer from '../components/Footer'


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {



  return (

    <div className={inter.className}>
      
      {children}
      <Footer />
    </div>

  )
}
