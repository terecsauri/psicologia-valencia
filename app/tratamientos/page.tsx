import React from 'react'
import AutorRandom from '../components/AutorRandom'
import { getData } from '../services/fetchService';
import Image from 'next/image';
const landingTratamiento = await getData("tratamientosMain");
const landingTratamientoFoto = await getData("tratamientosFoto");


export default function Tratamientos() {
  return (
    <div>
{
          landingTratamiento?.map((singlePost: any) => {
            const { title, body, foto } =
                singlePost.fields;
            return (
                <div key={""} className="ml-10 mt-5">

                    <h1 className='font-bold mb-2 text-4xl' >{title}</h1>
                   <p className='mt-5 '>{body}</p>


                   <div className='flex space-x-10'>
                   {landingTratamientoFoto?.map((singleMember: any) => {
              const { foto, title } =
                singleMember.fields;
              return (
                <div 
                key={""} 
                className="p-3 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 justify-center"
                >
                  <Image
                    src={'https://' + foto.fields.file.url} alt="asdf" width={450} height={450}
                    
                  />
                  <h2 className='font-bold text-xl'>{title}</h2>
                </div>
              );
            })}
            </div>


                </div>



            )
        })
}
      <AutorRandom/>
    </div>
  )
}
