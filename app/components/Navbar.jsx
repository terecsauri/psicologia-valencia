import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
    <Link href="/">Imagen Home</Link>
        <Link href="/about">SOBRE NOSOTROS</Link>
        <Link href="/tratamientos">TRATAMIENTOS</Link>
        <Link href="/tarifas">TARIFAS</Link>
        <Link href="/cursos">CURSOS</Link>
        <Link href="/blog">BLOG</Link>
        <Link href="/contacto">CONTACTO</Link>
    </div>
  )
}
