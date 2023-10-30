/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { getData } from '../services/fetchService';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import AutorMain from '../components/autores/AutorMain';

const landingCursos = await getData("cursos");

export default function Cursos() {

  return (
    landingCursos?.map((singlePost: any) => {
      const { titulo, titulo2, titulo3, media, mediaText, body, titleGrid, titleGrid2, titleGrid3, titleGrid4, titleGrid5, titleGrid6,
        mediaGrid, mediaGrid2, mediaGrid3, mediaGrid4, mediaGrid5, mediaGrid6, bodyGrid, bodyGrid2, bodyGrid3, bodyGrid4, bodyGrid5,
        bodyGrid6, button } =
        singlePost.fields;
      return (
        <div key={""} className="ml-10 mt-5">
          <p className='font-bold text-4xl mb-2' >{titulo}</p>
          <div className='grid grid-cols-2 mb-10 bg-gradient-to-r from-green-600 max-lg:block '>
            
            <img
              src={'https://' + media.fields.file.url} alt="asdf" width="450" height="450"
              
            />
            <div className='font-bold mt-5 text-3xl ml-5 max-lg:font-semibold'>
              {mediaText}
            </div>
          </div>

          {documentToReactComponents(body)}
          <h2 className='flex justify-center bg-yellow-400 text-3xl p-2 font-bold mt-5 mb-5'>{titulo2}</h2>

          <div className='grid grid-cols-3 bg-gradient-to-r from-green-600 max-lg:block'>
            <div className='border-solid border-2 border-black flex flex-col items-center gap-5 p-3'>
              
              <img
                src={'https://' + mediaGrid.fields.file.url} alt="asdf" width="150" height="150"
                className='rounded-full'
              />
              <p className='font-bold text-xl'>{titleGrid}</p>
              {documentToReactComponents(bodyGrid)}
              <button className='bg-yellow-400 text-xl rounded-2xl w-1/2 p-2 border-2 border-black font-bold mt-5 mb-5'>{button}</button>
            </div>
            <div className='border-solid border-2 border-black flex flex-col items-center gap-5 p-3'>
              
              <img
                src={'https://' + mediaGrid2.fields.file.url} alt="asdf" width="150" height="150"
                className='rounded-full'
              />
              <p className='font-bold text-xl'>{titleGrid2}</p>
              {documentToReactComponents(bodyGrid2)}
              <button className='bg-yellow-400 text-xl rounded-2xl w-1/2 p-2 border-2 border-black font-bold mt-5 mb-5'>{button}</button>
            </div>
            <div className='border-solid border-2 border-black flex flex-col items-center gap-5 p-3 '>
              
              <img
                src={'https://' + mediaGrid3.fields.file.url} alt="asdf" width="150" height="150"
                className='rounded-full'
              />
              <p className='font-bold text-xl'>{titleGrid3}</p>
              {documentToReactComponents(bodyGrid3)}
              <button className='bg-yellow-400 text-xl rounded-2xl w-1/2 p-2 border-2 border-black font-bold mt-5 mb-5'>{button}</button>
            </div>

          </div>
          <h2 className='flex justify-center bg-yellow-400 text-3xl p-2 font-bold mt-12 mb-5'>{titulo3}</h2>
          <div className='grid grid-cols-3 bg-gradient-to-r from-green-600 max-lg:block'>
            <div className='border-solid border-2 border-black flex flex-col items-center gap-5 p-3'>
              
              <img
                src={'https://' + mediaGrid4.fields.file.url} alt="asdf" width="150" height="150"
                className='rounded-full'
              />
              <p className='font-bold text-xl'>{titleGrid4}</p>
              {documentToReactComponents(bodyGrid4)}
              <button className='bg-yellow-400 text-xl rounded-2xl w-1/2 p-2 border-2 border-black font-bold mt-5 mb-5'>{button}</button>
            </div>
            <div className='border-solid border-2 border-black flex flex-col items-center gap-5 p-3'>
              
              <img
                src={'https://' + mediaGrid5.fields.file.url} alt="asdf" width="150" height="150"
                className='rounded-full'
              />
              <p className='font-bold text-xl'>{titleGrid5}</p>
              {documentToReactComponents(bodyGrid5)}
              <button className='bg-yellow-400 text-xl rounded-2xl w-1/2 p-2 border-2 border-black font-bold mt-5 mb-5'>{button}</button>
            </div>
            <div className='border-solid border-2 border-black flex flex-col items-center gap-5 p-3'>
              
              <img
                src={'https://' + mediaGrid6.fields.file.url} alt="asdf" width="150" height="150"
                className='rounded-full'
              />
              <p className='font-bold text-xl'>{titleGrid6}</p>
              {documentToReactComponents(bodyGrid6)}
              <button className='bg-yellow-400 text-xl rounded-2xl w-1/2 p-2 border-2 border-black font-bold mt-5 mb-5'>{button}</button>
            </div>

          </div>
<AutorMain/>
        </div>
      )
    })

  )
}
