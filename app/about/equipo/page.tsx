import React from 'react'
import { getData } from '@/app/services/fetchService'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'
import AutorMain from '@/app/components/autores/AutorMain'

const landingTeam = await getData("aboutUsEquipo")
const landingAutor = await getData("autorUno")

export default function Equipo() {
  return (
    landingTeam?.map((singlePost: any) => {
      const { title,body, bodyMid, bodyBot, photo, button} =
          singlePost.fields;
      return (
          <div key={""} className="ml-10 mt-5">
              
              <h1 className='font-bold mb-2' >{title}</h1>
              <Image
                  src={'https://' + photo.fields.file.url} alt="asdf" width={1250} height={550}
                  
                />
              {documentToReactComponents(body)}
              <button className='bg-yellow-400 p-2 border-2 border-black rounded-2xl font-bold mt-5 mb-5'>{button}</button>
              {documentToReactComponents(bodyMid)}
<hr className='h-1 border-0 bg-yellow-400 mt-5 mb-5'></hr>
              {documentToReactComponents(bodyBot)}
<hr className='h-1  border-0 bg-yellow-400 mt-5 mb-5'></hr>
<AutorMain/>
          </div>
      )
  })
  )
}
