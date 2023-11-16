
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { getData } from '../services/fetchService';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import AutorRandom from '@/app/components/autores/AutorRandom'
import Link from 'next/link';

const landingTarifas = await getData("tarifas");
export const metadata = {
  title: 'Tarifas',
}

export default function Tarifas() {
  
 

  return (
    landingTarifas?.map((singlePost: any) => {
      const { titulo, titulo2, titulo3, titulo4, media, media2, media3, media4, body, body2, body3, body4, body5, body6, body7, body8, body9,
        button, button2, titleGrid, titleGrid2, titleGrid3, titleGrid4, titleGrid5, titleGrid6, titleGrid7, titleGrid8, titleGrid9,
        mediaGrid, mediaGrid2, mediaGrid3, mediaGrid4, mediaGrid5, mediaGrid6, mediaGrid7, mediaGrid8, tarifas } =
        singlePost.fields;
      return (
        <div key={tarifas} className="mt-5">
          <h1 className='mb-2 max-lg:text-3xl' >{titulo}</h1>
          <div className='flex justify-center mb-5'>
          <img
            src={'https://' + media.fields.file.url} alt="asdf" width="450" height="450"
          />
          </div>
          {documentToReactComponents(body)}
          <hr className='h-1 border-0 bg-black mt-5 mb-5'></hr>
          <div className='flex max-2xl:flex-col'>
            
            <img
              src={'https://' + media2.fields.file.url} alt="asdf" width="550" height="550" className=' h-fit'
            />
            
            <div className=''>
              {documentToReactComponents(body2)}
            </div>
          </div>
          <div className='flex justify-center'>
          <button className='bg-yellow-400 hover:bg-yellow-500 w-1/2 p-2 border-2 rounded-2xl font-bold mt-5 mb-5  max-lg:w-fit'>{button}</button>
          </div>
          <hr className='h-1 border-0 bg-black mt-5 mb-5'></hr>
          <div className='flex justify-center m-5'>
         
          </div>
          {documentToReactComponents(body3)}
          <div className='flex justify-center m-5'>

          </div>
          <h2 className='text-xl flex justify-center'>{titulo2}</h2>
          <hr className='h-1 border-0 bg-black mt-5 mb-5'></hr>
          <h2>{titulo3}</h2>
          {documentToReactComponents(body4)}
          <div className='flex justify-center'>
          <button className='bg-yellow-400 hover:bg-yellow-500 w-1/2 p-2 border-2 border-black rounded-2xl font-bold mt-5 mb-5  max-lg:w-fit'>
           <Link href="/tratamientos ">{button2}</Link>
            
            </button>
          </div>
          <hr className='h-1 border-0 bg-black mt-5 mb-5'></hr>
          {documentToReactComponents(body5)}
          <p className='mt-5 mb-5'>{documentToReactComponents(body6)}</p>
          <p className='mt-5 mb-5'>{documentToReactComponents(body7)}</p>
          <p className='mt-5 mb-5'>{documentToReactComponents(body8)}</p>
          <h3>{titulo4}</h3>
<div className='grid grid-cols-3 my-10 gap-10 max-lg:grid-cols-2 max-md:flex max-md flex-col max-lg:flex-col max-lg:items-center h-full'>
  <div className='mb-5'>
  <img 
            src={'https://' + mediaGrid.fields.file.url} alt="asdf" width="350" height="350" className='h-full'
          />
          <p className='font-bold text-sm'>{titleGrid}</p>
          
  </div>
  <div className=' mb-5'>
    <Link href="/">
  <img
            src={'https://' + mediaGrid2.fields.file.url} alt="asdf" width="350" height="350" className='h-full'
            />
          <p className='font-bold text-sm'>{titleGrid2}</p>
            </Link>
          
  </div>
  <div className=' mb-5'>
  <img
            src={'https://' + mediaGrid3.fields.file.url} alt="asdf" width="350" height="350" className='h-full'
          />
          <p className='font-bold text-sm'>{titleGrid3}</p>       
  </div>
  <div className=' mb-5'>
  <img
            src={'https://' + mediaGrid4.fields.file.url} alt="asdf" width="350" height="350" className='h-full'
          />
          <p className='font-bold text-sm'>{titleGrid4}</p>
  </div>
  <div className=' mb-5'>
  <img
            src={'https://' + mediaGrid5.fields.file.url} alt="asdf" width="350" height="350" className='h-full'
          />
          <p className='font-bold text-sm'>{titleGrid5}</p>
  </div>
  <div className=' mb-5'>
  <img
            src={'https://' + mediaGrid6.fields.file.url} alt="asdf" width="350" height="350" className='h-full'
          />
          <p className='font-bold text-sm'>{titleGrid6}</p>
  </div>
  <div className=' mb-5'>
  <img
            src={'https://' + mediaGrid7.fields.file.url} alt="asdf" width="350" height="350" className='h-full'
          />
          <p className='font-bold text-sm'>{titleGrid7}</p>
  </div>
  <div className=' mb-5'>
  <img
            src={'https://' + mediaGrid8.fields.file.url} alt="asdf" width="350" height="350" className='h-full'
          />
          <p className='font-bold text-sm'>{titleGrid8}</p>
  </div>

</div>
<p className='mt-5'>{documentToReactComponents(body6)}</p>
<AutorRandom/>
        </div>
      )
    })
  )
}

