/* eslint-disable @next/next/no-img-element */
import React from 'react'
import AutorRandom from '../components/autores/AutorRandom'
import { getData } from '../services/fetchService';
import Link from 'next/link';

export const metadata = {
  title: 'Tratamiento',
}


const landingTratamiento = await getData("tratamientosMain");

export default function Tratamientos() {
  return (
    <div>
      {
        landingTratamiento?.map((singlePost: any) => {
          const { title, body, media, media2, mediaText, mediaText2, tratamiento} =
            singlePost.fields;
          return (
            <div key={tratamiento} className="mt-5">

              <h1 className='font-bold mb-2' >{title}</h1>
              <p className='mt-5 mb-5'>{body}</p>
              <div className='flex gap-5 max-lg:flex-col justify-center w-fit '>
                <div className="p-3 bg-white border border-gray-200 shadow  dark:bg-gray-800 dark:border-gray-700 justify-center items-center flex flex-col" >
                  <Link href={"/tratamientos/adultos"}>
                    <img
                      src={'https://' + media.fields.file.url} alt="asdf" width="550" height="550" className=''

                    />

                  </Link>
                  <h2 className='font-bold text-xl text-center'>{mediaText}</h2>
                </div>
                <div className="p-3 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 justify-center flex flex-col items-center" >
                  <Link href={"/tratamientos/ninos"}>
                    <img
                      src={'https://' + media2.fields.file.url} alt="asdf" width="550" height="550"
                    />
                  </Link>
                  <h2 className='font-bold text-xl text-center'>{mediaText2}</h2>
                </div>
              </div>
            </div>
          )
        })
      }
      <AutorRandom />
    </div>
  )
}
