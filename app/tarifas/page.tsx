/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { getData } from '../services/fetchService';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import AutorRandom from '@/app/components/autores/AutorRandom'

const landingTarifas = await getData("tarifas");

export default function Tarifas() {

  return (
    landingTarifas?.map((singlePost: any) => {
      const { titulo, titulo2, titulo3, media, media2, media3, media4, body, body2, body3, body4, body5, body6,
        button, button2, titleGrid, titleGrid2, titleGrid3, titleGrid4, titleGrid5, titleGrid6, titleGrid7, titleGrid8, titleGrid9,
        mediaGrid, mediaGrid2, mediaGrid3, mediaGrid4, mediaGrid5, mediaGrid6, mediaGrid7, mediaGrid8, mediaGrid9 } =
        singlePost.fields;
      return (
        <div key={""} className="ml-10 mt-5">
          <h1 className='mb-2' >{titulo}</h1>
          <div className='flex justify-center mb-5'>
          <img
            src={'https://' + media.fields.file.url} alt="asdf" width="750" height="750"
          />
          </div>
          {documentToReactComponents(body)}
          <hr className='h-1 border-0 bg-black mt-5 mb-5'></hr>
          <div className='grid grid-cols-2'>
            
            <img
              src={'https://' + media2.fields.file.url} alt="asdf" width="250" height="250"
            />
            
            <div>
              {documentToReactComponents(body2)}
            </div>
          </div>
          <div className='flex justify-center'>
          <button className='bg-yellow-400 w-1/2 p-2 border-2 rounded-2xl font-bold mt-5 mb-5'>{button}</button>
          </div>
          <hr className='h-1 border-0 bg-black mt-5 mb-5'></hr>
          <div className='flex justify-center m-5'>
          <img
            src={'https://' + media3.fields.file.url} alt="asdf" width="850" height="850"
            className='m-5'
          />
          </div>
          {documentToReactComponents(body3)}
          <div className='flex justify-center m-5'>
          <img
            src={'https://' + media4.fields.file.url} alt="asdf" width="650" height="650"
          />
          </div>
          <p className='text-xl flex justify-center'>{titulo2}</p>
          <hr className='h-1 border-0 bg-black mt-5 mb-5'></hr>
          <h2>{titulo3}</h2>
          {documentToReactComponents(body4)}
          <div className='flex justify-center'>
          <button className='bg-yellow-400 w-1/2 p-2 border-2 border-black rounded-2xl font-bold mt-5 mb-5 '>{button2}</button>
          </div>
          <hr className='h-1 border-0 bg-black mt-5 mb-5'></hr>
          {documentToReactComponents(body5)}
<div className='grid grid-cols-3 mt-10'>
  <div className='p-2'>
  <img 
            src={'https://' + mediaGrid.fields.file.url} alt="asdf" width="350" height="180"
          />
          <p className='font-bold pl-1'>{titleGrid}</p>
          
  </div>
  <div>
  <img
            src={'https://' + mediaGrid2.fields.file.url} alt="asdf" width="350" height="180"
          />
          <p className='font-bold pl-1'>{titleGrid2}</p>
          
  </div>
  <div>
  <img
            src={'https://' + mediaGrid3.fields.file.url} alt="asdf" width="350" height="350"
          />
          <p className='font-bold pl-1'>{titleGrid3}</p>       
  </div>
  <div>
  <img
            src={'https://' + mediaGrid4.fields.file.url} alt="asdf" width="350" height="350"
          />
          <p className='font-bold pl-1'>{titleGrid4}</p>
  </div>
  <div>
  <img
            src={'https://' + mediaGrid5.fields.file.url} alt="asdf" width="350" height="350"
          />
          <p className='font-bold pl-1'>{titleGrid5}</p>
  </div>
  <div>
  <img
            src={'https://' + mediaGrid6.fields.file.url} alt="asdf" width="350" height="350"
          />
          <p className='font-bold pl-1'>{titleGrid6}</p>
  </div>
  <div>
  <img
            src={'https://' + mediaGrid7.fields.file.url} alt="asdf" width="350" height="350"
          />
          <p className='font-bold pl-1'>{titleGrid7}</p>
  </div>
  <div>
  <img
            src={'https://' + mediaGrid8.fields.file.url} alt="asdf" width="350" height="350"
          />
          <p className='font-bold pl-1'>{titleGrid8}</p>
  </div>
  <div>
  <img
            src={'https://' + mediaGrid9.fields.file.url} alt="asdf" width="350" height="350" 
          />
          <p className='font-bold pl-1'>{titleGrid9}</p>
  </div>
</div>
<p className='mt-5'>{documentToReactComponents(body6)}</p>
<AutorRandom/>
        </div>
      )
    })
  )
}

