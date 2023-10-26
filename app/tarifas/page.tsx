import React from 'react'
import { getData } from '../services/fetchService';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';

const landingTarifas = await getData("tarifas");

export default function Tarifas() {

  return (
    landingTarifas?.map((singlePost: any) => {
      const { titulo, titulo2, titulo3, media, media2, media3, media4, body, body2, body3, body4, body5, body6,
      button, titleGrid, titleGrid2, titleGrid3, titleGrid4,  titleGrid5, titleGrid6, titleGrid7, titleGrid8, titleGrid9,
    mediaGrid, mediaGrid2, mediaGrid3, mediaGrid4, mediaGrid5, mediaGrid6, mediaGrid7, mediaGrid8, mediaGrid9} =
          singlePost.fields;
      return (
          <div key={""} className="ml-10 mt-5">
              <p className='font-bold mb-2' >{titulo}</p>
              <Image
                src={'https://' + media.fields.file.url} alt="asdf" width={650} height={650} 
              />
              {documentToReactComponents(body)}
              <hr className='h-1 border-0 bg-black mt-5 mb-5'></hr>
              <div className='grid grid-cols-2'>
              <Image
                src={'https://' + media2.fields.file.url} alt="asdf" width={250} height={250} 
              />
              <div>
              {documentToReactComponents(body2)}
              </div>
              </div>
              <button className='bg-yellow-400 w-1/2 p-2 border-2 border-black rounded-2xl font-bold mt-5 mb-5'>{button}</button>
              
          </div>
      )
  })
  )
}
