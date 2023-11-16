"Use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

export default function Burguer() {

    const [openMenu, setOpenMenu] = useState(true)

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <div>
    
<nav className='fixed flex z-10 left-5 top-5'>

        {!openMenu ? 
        <div className='bg-white border w-fit px-3 z-100 top-1 left-1 pl-5 rounded-xl xl:2xl:hidden lg:hidden'>
   
    <nav className='bg-white rounded-xl'>
      <ul className='  flex-col text-left'>   


      <button onClick={toggleMenu} className=' bg-white  mt-1 ' >
      <p className='text-red-400'>X</p>
      </button>

      

          
        <li><Link href="/">Home</Link></li>
        <ul className=' group  dropdown  z-10'>
          <li><Link href="/about">Sobre Nosotros</Link></li>
          <div className='group-hover:block dropdown-menu absolute ml-40 top-0 hidden h-auto z-100 '>
          <ul className='bg-white   w-max rounded p-3 absolute border border-2 z-10'>
            <li className='hover:bg-gray-100 '><Link href="/about//donde">Donde Estamos</Link></li>
            <li className='hover:bg-gray-100 '><Link href="/about/equipo">Equipo</Link></li>
            <li className='hover:bg-gray-100 '><Link href="/about/metodo">Método de Trabajo</Link></li>
            <li className='hover:bg-gray-100 '><Link href="/about/aseguradoras">Aseguradoras con las que trabajamos</Link></li>
  

          </ul>
          </div>
        </ul>
        <ul className=' group  dropdown  z-10'>
          <li><Link href="/tratamientos">Tratamientos</Link></li>
          <div className='group-hover:block dropdown-menu ml-40 absolute hidden h-auto top-0 z-100 '>
          <ul className='bg-white  w-max rounded p-3 absolute z-10 border rounded'>
            <li className='hover:bg-gray-100 '><Link href="/tratamientos/online">Terapia Online</Link></li>
            <li className='hover:bg-gray-100 '><Link href="/tratamientos/adultos">Terapia Adultos</Link></li>
            <li className='hover:bg-gray-100 '><Link href="/tratamientos/ninos">Terapia Niños</Link></li>
            <li className='hover:bg-gray-100 '><Link href="/tratamientos/pareja">Terapia Pareja</Link></li>

          </ul>
          </div>
        </ul>
        <li><Link href="/tarifas">Tarifas</Link></li>
        <li><Link href="/cursos">Cursos</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/contacto">Contacto</Link></li>
    
      </ul>

    </nav>
 </div>
  : 
  <button onClick={toggleMenu} className='m-auto bg-white  justify-center flex text-center text-white mt-2 ml-1 p-1  top-0 left-0 z-10 rounded-full border border-2 xl:2xl:hidden lg:hidden' >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 p-1 text-black">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>

  </button>
    }
    </nav>
    </div>

    )
}
