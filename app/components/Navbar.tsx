"use client"
import React from 'react'
import Link from 'next/link'
import '../globals.css'
import { useState } from 'react'

export default function Navbar() {

  const [hover, setHover] = useState(false)
  const [hoverDos, setHoverDos] = useState(false)

  return (

    <nav  >
      <div className='flex justify-between mx-auto p-2'>
        <Link href="/">HOME</Link>
        <div>
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}

          >
            {hover ?
              <div className='bg-white'>
                <Link href="/about">SOBRE NOSOTROS</Link>
                <ul className='absolute bg-white border-solid border-2 rounded-xl'>
                  <li className=" py-1 hover:underline">
                    <Link href="/about/donde" className=" py-2 px-4" >Donde Estamos</Link>
                  </li>
                  <li className=" py-1 hover:underline">
                    <Link href="/about/equipo" className=" py-2 px-4">Equipo</Link>
                  </li>
                  <li className=" py-1 hover:underline">
                    <Link href="/about/metodo" className=" py-2 px-4">Método</Link>
                  </li>
                  <li className=" py-1 hover:underline">
                    <Link href="/about/aseguradoras" className=" py-2 px-4" >Aseguradoras</Link>
                  </li>
                </ul>
              </div>
              :
              <div>
              <Link href="/about">SOBRE NOSOTROS</Link>
              <ul className='hidden'>
                  <li className=" py-1 hover:underline">
                    <Link href="/about/donde" className=" py-2 px-4" >Donde Estamos</Link>
                  </li>
                  <li className=" py-1 hover:underline">
                    <Link href="/about/equipo" className=" py-2 px-4">Equipo</Link>
                  </li>
                  <li className=" py-1 hover:underline">
                    <Link href="/about/metodo" className=" py-2 px-4">Método</Link>
                  </li>
                  <li className=" py-1 hover:underline">
                    <Link href="/about/aseguradoras" className=" py-2 px-4" >Aseguradoras</Link>
                  </li>
                </ul>
              </div>
            }
          </div>
        </div>
        <div
          onMouseEnter={() => setHoverDos(true)}
          onMouseLeave={() => setHoverDos(false)}
        >
          {hoverDos ?
            <div>
              <Link href="/tratamientos">TRATAMIENTOS</Link>
              <ul className='absolute bg-white border-solid border-2 rounded-xl'>

                <li className=" py-1 hover:underline">
                  <Link href="/tratamientos/online" className=" py-2 px-4 " >Terapia Online</Link>
                </li>
                <li className=" py-1 hover:underline">
                  <Link href="/tratamientos/adultos" className=" py-2 px-4 " >Terapia Adultos</Link>
                </li>
                <li className=" py-1 hover:underline">
                  <Link href="/tratamientos/ninos" className=" py-2 px-4 " >Terapia Niños</Link>
                </li>
                <li className=" py-1 hover:underline">
                  <Link href="/tratamientos/pareja" className=" py-2 px-4 " >Terapia Pareja</Link>
                </li>
              </ul>

            </div>
            :
            <div>
            <Link href="/tratamientos">TRATAMIENTOS</Link>
            <ul className='hidden'>

                <li className=" py-1 hover:underline">
                  <Link href="/tratamientos/online" className=" py-2 px-4 " >Terapia Online</Link>
                </li>
                <li className=" py-1 hover:underline">
                  <Link href="/tratamientos/adultos" className=" py-2 px-4 " >Terapia Adultos</Link>
                </li>
                <li className=" py-1 hover:underline">
                  <Link href="/tratamientos/ninos" className=" py-2 px-4 " >Terapia Niños</Link>
                </li>
                <li className=" py-1 hover:underline">
                  <Link href="/tratamientos/pareja" className=" py-2 px-4 " >Terapia Pareja</Link>
                </li>
              </ul>
            </div>
          }
        </div>

        <Link href="/tarifas">TARIFAS</Link>
        <Link href="/cursos">CURSOS</Link>
        <Link href="/blog">BLOG</Link>
        <Link href="/contacto">CONTACTO</Link>
      </div>
      <hr></hr>
    </nav>
  )
}
