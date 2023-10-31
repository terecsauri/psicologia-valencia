"use client"
import React from 'react'
import Link from 'next/link'
import '../globals.css'
import { useState } from 'react'
import Burguer from './Burguer'

export default function Navbar() {

  const [hover, setHover] = useState(false)
  const [hoverDos, setHoverDos] = useState(false)

  return (
<div>


    <nav className='max-lg:hidden'>
      <ul className='justify-between p-2 md:flex'>
        <li className='md:my-0'><Link href="/">HOME</Link></li>
        <div>
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}

          >
            {hover ?
              <div className='bg-white relative'>
                <li className='md:my-0'><Link href="/about">SOBRE NOSOTROS</Link></li>
                <ul className='absolute bg-white border-solid border-2 rounded-xl z-10 '>
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
                <li className='md:my-0'> <Link href="/about">SOBRE NOSOTROS</Link></li>
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
              <li className='md:my-0'><Link href="/tratamientos">TRATAMIENTOS</Link></li>
              <ul className='absolute bg-white border-solid border-2 rounded-xl z-10 '>

                <li className=" py-1 hover:underline md:my-0">
                  <Link href="/tratamientos/online" className=" py-2 px-4 " >Terapia Online</Link>
                </li>
                <li className=" py-1 hover:underline md:my-0">
                  <Link href="/tratamientos/adultos" className=" py-2 px-4 " >Terapia Adultos</Link>
                </li>
                <li className=" py-1 hover:underline md:my-0">
                  <Link href="/tratamientos/ninos" className=" py-2 px-4 " >Terapia Niños</Link>
                </li>
                <li className=" py-1 hover:underline md:my-0">
                  <Link href="/tratamientos/pareja" className=" py-2 px-4 " >Terapia Pareja</Link>
                </li>
              </ul>

            </div>
            :
            <div>
              <li className='md:my-0'><Link href="/tratamientos">TRATAMIENTOS</Link></li>
            </div>
          }
        </div>
        <li className='md:my-0'><Link href="/tarifas">TARIFAS</Link></li>
        <li className='md:my-0'><Link href="/cursos">CURSOS</Link></li>
        <li className='md:my-0'> <Link href="/blog">BLOG</Link></li>
        <li className='md:my-0'><Link href="/contacto">CONTACTO</Link></li>




      </ul>
      <hr></hr>
    </nav>
    <nav className='xl:2xl:hidden lg:hidden flex gap-5 h-16 w-16 rounded-full bg-black'>
<Burguer></Burguer >      
    </nav>
    
    </div>
  )
}
