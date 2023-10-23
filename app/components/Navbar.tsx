import React from 'react'
import Link from 'next/link'
import '../globals.css'

export default function Navbar() {
  return (
    <nav >
    <div className=' max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2'>
    <Link href="/">Imagen Home</Link>
        <Link href="/about">SOBRE NOSOTROS</Link>
        <Link href="/tratamientos">TRATAMIENTOS</Link>
        <Link href="/tarifas">TARIFAS</Link>
        <Link href="/cursos">CURSOS</Link>
        <Link href="/blog">BLOG</Link>
        <Link href="/contacto">CONTACTO</Link>
    </div>
    </nav>
  )
}
