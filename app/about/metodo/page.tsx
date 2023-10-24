import React from 'react'
import { getData } from '@/app/services/fetchService';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image';
import AutorRandom from '@/app/components/autores/AutorRandom';

const landingMetodo = await getData("aboutUsMtodo")

export default function Metodo() {
  return (
    landingMetodo?.map((singlePost: any) => {
      const { title, body, photo, author } =
          singlePost.fields;
      return (
          <div key={""} className="ml-10 mt-5">
              <h1 className='font-bold mb-4' >{title}</h1>
              <Image
                      src={'https://' + photo.fields.file.url} alt="asdf" width={450} height={450}
                    />
              {documentToReactComponents(body)}
<AutorRandom/>
          </div>
          
      )
      
  })

  )
}
