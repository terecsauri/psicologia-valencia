/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { getData } from '../services/fetchService';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import AutorMain from '../components/autores/AutorMain';
import Link from 'next/link';

export const metadata = {
  title: 'Cursos',
}

const landingCursos = await getData("cursos");

export default function Cursos() {

  return (
    landingCursos?.map((singlePost: any) => {
      const { titulo, titulo2, titulo3, media, mediaText, body, titleGrid, titleGrid2, titleGrid3, titleGrid4, titleGrid5, titleGrid6,
        bodyGrid, bodyGrid2, bodyGrid3, bodyGrid4, bodyGrid5, bodyGrid6, button, cursos } =
        singlePost.fields;
      return (
        <div key={cursos} className="mt-5">
          <h1 className='font-bold text-4xl mb-2' >{titulo}</h1>
          <div className='grid grid-cols-2 mb-10 bg-gradient-to-r from-green-600 max-lg:block '>
            
            <img
              src={'https://' + media.fields.file.url} alt="asdf" width="450" height="450"
              
            />
            <div className='font-bold my-5 py-5 text-3xl ml-5 max-lg:font-semibold '>
              {mediaText}
            </div>
          </div>

          {documentToReactComponents(body)}
          <h2 className='flex justify-center bg-yellow-400 text-3xl p-2 font-bold mt-5 mb-5'>{titulo2}</h2>

          <div className='grid grid-cols-3 bg-gradient-to-r from-green-600 max-lg:block'>
            <div className='border-solid border-2 border-black flex flex-col items-center gap-5 p-3' >
              

              <p className='font-bold text-xl mt-5'>{titleGrid}</p>
              {documentToReactComponents(bodyGrid)}
              <Link href="/tarifas" className='w-full text-center'>
              <button className='bg-yellow-400 hover:bg-yellow-500 text-xl rounded-2xl px-4 py-2 border-2 border-black font-bold mt-5 mb-5'>{button}</button>
              </Link>
            </div>
            <div className='border-solid border-2 border-black flex flex-col items-center gap-5 p-3'>
              
 
              <p className='font-bold text-xl mt-5'>{titleGrid2}</p>
              {documentToReactComponents(bodyGrid2)}
              <Link href="/tarifas" className='w-full text-center'>
              <button className='bg-yellow-400 hover:bg-yellow-500 text-xl rounded-2xl px-4 py-2 border-2 border-black font-bold mt-5 mb-5'>{button}</button>
              </Link>
            </div>
            <div className='border-solid border-2 border-black flex flex-col items-center gap-5 p-3 '>
              
 
              <p className='font-bold text-xl mt-5'>{titleGrid3}</p>
              {documentToReactComponents(bodyGrid3)}
              <Link href="/tarifas" className='w-full text-center'>
              <button className='bg-yellow-400 hover:bg-yellow-500 text-xl rounded-2xl px-4 py-2 border-2 border-black font-bold mt-5 mb-5'>{button}</button>
              </Link>
            </div>

          </div>
          <h2 className='flex justify-center bg-yellow-400 text-3xl p-2 font-bold mt-12 mb-5'>{titulo3}</h2>
          <div className='grid grid-cols-3 bg-gradient-to-r from-green-600 max-lg:block'>
            <div className='border-solid border-2 border-black flex flex-col items-center gap-5 p-3'>
              
              <p className='font-bold text-xl mt-5'>{titleGrid4}</p>
              {documentToReactComponents(bodyGrid4)}
              <Link href="/tarifas" className='w-full text-center'>
              <button className='bg-yellow-400 hover:bg-yellow-500 text-xl rounded-2xl px-4 py-2 border-2 border-black font-bold mt-5 mb-5'>{button}</button>
              </Link>
            </div>
            <div className='border-solid border-2 border-black flex flex-col items-center gap-5 p-3'>
              
              <p className='font-bold text-xl mt-5'>{titleGrid5}</p>
              {documentToReactComponents(bodyGrid5)}
              <Link href="/tarifas" className='w-full text-center'>
              <button className='bg-yellow-400 hover:bg-yellow-500 text-xl rounded-2xl px-4 py-2 border-2 border-black font-bold mt-5 mb-5'>{button}</button>
              </Link>
            </div>
            <div className='border-solid border-2 border-black flex flex-col items-center gap-5 p-3'>
              

              <p className='font-bold text-xl mt-5'>{titleGrid6}</p>
              {documentToReactComponents(bodyGrid6)}
              <Link href="/tarifas" className='w-full text-center'>
              <button className='bg-yellow-400 hover:bg-yellow-500 text-xl rounded-2xl px-4 py-2 border-2 border-black font-bold mt-5 mb-5'>{button}</button>
              </Link>
            </div>

          </div>
<AutorMain/>
        </div>
      )
    })

  )
}
