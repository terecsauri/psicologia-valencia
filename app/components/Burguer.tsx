"Use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

export default function Burguer() {

    const [openMenu, setOpenMenu] = useState(true)

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }

    const [hover, setHover] = useState(false)
    const [hoverDos, setHoverDos] = useState(false)


    return (

        <button onClick={toggleMenu} >

            {
                openMenu ?
                    <div>
                        <p className='text-white text-sm pl-2'>MENU</p>

                    </div>

                    :
                    <div >
                        <p className='text-white pl-6'>X</p>
                        <div className='absolute p-2 mt-10 bg-white z-100'>
                            <ul className='justify-between p-2'>
                                <li ><Link href="/">HOME</Link></li>
                                <div>
                                    <div
                                        onMouseEnter={() => setHover(true)}
                                        onMouseLeave={() => setHover(false)}

                                    >
                                        {hover ?
                                            <div className='bg-white relative'>
                                                <li className='md:my-0'><Link href="/about">SOBRE NOSOTROS</Link></li>
                                                <ul className='absolute bg-white border-solid border-2 rounded-xl z-10 ml-40 w-48'>
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
                                            <ul className='absolute bg-white border-solid border-2 rounded-xl z-10 ml-40 w-48 mt-36'>

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
                        </div>
                    </div>

            }
        </button>
    )
}
