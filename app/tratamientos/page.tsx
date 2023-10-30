/* eslint-disable @next/next/no-img-element */
import React from 'react'
import AutorRandom from '../components/autores/AutorRandom'
import { getData } from '../services/fetchService';
import Link from 'next/link';
const landingTratamiento = await getData("tratamientosMain");



export default function Tratamientos() {
  return (
    <div>
      {
        landingTratamiento?.map((singlePost: any) => {
          const { title, body, media, media2, mediaText, mediaText2 } =
            singlePost.fields;
          return (
            <div key={""} className="ml-10 mt-5">

              <h1 className='font-bold mb-2' >{title}</h1>
              <p className='mt-5 mb-5'>{body}</p>
              <div className='grid grid-cols-2 gap-5 max-xl:block'>
                <div className="p-3 bg-white border border-gray-200 shadow  dark:bg-gray-800 dark:border-gray-700 justify-center" >
                  <Link href={"/tratamientos/adultos"}>
                    <img
                      src={'https://' + media.fields.file.url} alt="asdf" width="550" height="550"

                    />

                  </Link>
                  <h2 className='font-bold text-xl'>{mediaText}</h2>
                </div>
                <div className="p-3 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 justify-center" >
                  <Link href={"/tratamientos/ninos"}>
                    <img
                      src={'https://' + media2.fields.file.url} alt="asdf" width="550" height="550"
                    />
                  </Link>
                  <h2 className='font-bold text-xl'>{mediaText2}</h2>
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
