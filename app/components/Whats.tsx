/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react'
import { useState } from 'react';


export default function Whats() {

    const [openMenu, setOpenMenu] = useState(true)

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (


        <div className="ml-10 mt-5 fixed left-[5px] bottom-[35px]">
            <button onClick={toggleMenu}>
                {
                    openMenu ?
                        <div className='bg-green-400 rounded-full w-16 h-16'>
                            <img
                                src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png"}
                                alt="asdf"
                                width="40"
                                height="40"
                                className="m-auto py-3"
                            />
                        </div>
                        :
                        <div>
                            <div className='bg-green-400 flex gap-2 w-64 p-2 rounded-t-lg'>

                                <img
                                    src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png"}
                                    alt="asdf"
                                    width="40"
                                    height="40"
                                    className="m-auto py-3"
                                />
                                <div>
                                    <p className='font-bold text-white '>Hola!</p>
                                    <p className='text-white text-sm'>Hola !!
                                        ¿Necesitas ayuda? Escríbenos para pedir una cita.</p>

                                </div>

                            </div>
                            <div className='w-64 p-2 border rounded-b-lg'>
                                <p className='text-green-400 text-xs'>Online</p>
                                <p className='font-bolder underline'>Mi psicólogo Valencia</p>
                                <p className='text-sm underline'>Escribeme si me ves conectado</p>
                            </div>
                            <div className='bg-green-400 rounded-full w-16 h-16 mt-5'>
                                <img
                                    src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png"}
                                    alt="asdf"
                                    width="40"
                                    height="40"
                                    className="m-auto py-3"
                                />
                            </div>
                        </div>

                }
            </button>

        </div>
    )
}
