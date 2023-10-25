import AutorMain from '@/app/components/autores/AutorMain'
import React from 'react'
import { getData } from '@/app/services/fetchService';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';

const landingPareja = await getData("tratamientosPareja");

export default function Pareja() {
  return (
    <div>
{
          landingPareja?.map((singlePost: any) => {
            const { title, title2, title3, title4, body, body2bis, body3, body4, body5, media, media2, button} =
                singlePost.fields;
            return (
                <div key={""} className="ml-10 mt-5">
                    <p className='font-bold text-4xl mb-2' >{title}</p>
                    <Image
              src={'https://' + media.fields.file.url} alt="asdf" width={650} height={450}
            />
                    <p className='font-bold text-xl mt-2 mb-2' >{title2}</p>
                    {body}
                    <div>
                    <button className='bg-yellow-400 w-1/3 p-2 border-2 border-black rounded-2xl font-bold mt-5 mb-5'>{button}</button>
                    </div>
                    <p className='mb-2'> {documentToReactComponents(body2bis)} </p>           
                    <h1 className='font-bold text-2xl mt-2 mb-2' >{title3}</h1>
                    <p className='mb-2'>{documentToReactComponents(body3)}</p>
                    
                    <h1 className='font-bold text-2xl mt-2 mb-2' >{title4}</h1>
                    <div className='flex'>
                    <Image
              src={'https://' + media2.fields.file.url} alt="asdf" width={250} height={250}
              className='mr-10 mt-2 mb-2'
              />
            {body4}
                    </div>
              {documentToReactComponents(body5)}
                </div>
            )
        })
}


      <AutorMain/>
    </div>
  )
}
