/* eslint-disable @next/next/no-img-element */
import React from 'react'
import AutorRandom from '../components/autores/AutorRandom'
import { getData } from '../services/fetchService';
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

              <h1 className='font-bold mb-2 text-4xl' >{title}</h1>
              <p className='mt-5 '>{body}</p>
              <div className='grid grid-cols-2'>
                <div className="p-3 bg-white border border-gray-200 shadow w-1/2 dark:bg-gray-800 dark:border-gray-700 justify-center" >

                  <img
                    src={'https://' + media.fields.file.url} alt="asdf" width="450" height="450"

                  />
                  <h2 className='font-bold text-xl'>{mediaText}</h2>
                </div>
                <div className="p-3 bg-white border border-gray-200 shadow w-1/2 dark:bg-gray-800 dark:border-gray-700 justify-center" >

                  <img
                    src={'https://' + media2.fields.file.url} alt="asdf" width="450" height="450"

                  />
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
