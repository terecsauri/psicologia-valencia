import React from 'react'
import { getData } from '@/app/services/fetchService'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'

const landingTeam = await getData("aboutUsEquipo")
const landingAutor = await getData("autorUno")

export default function Equipo() {
  return (
    landingTeam?.map((singlePost: any) => {
      const { title,body, bodyMid, bodyBot, photo, button} =
          singlePost.fields;
      return (
          <div key={""} className="ml-10 mt-5">
              <hr className="mb-10 mt-10"></hr>
              <h1 className='font-bold mb-2' >{title}</h1>
              <Image
                  src={'https://' + photo.fields.file.url} alt="asdf" width={1250} height={550}
                  
                />
              {documentToReactComponents(body)}
              <button className='bg-yellow-400 w-1/3 rounded-xl font-bold mt-5 mb-5'>{button}</button>
              {documentToReactComponents(bodyMid)}
<hr className='h-1 border-0 bg-yellow-400 mt-5 mb-5'></hr>
              {documentToReactComponents(bodyBot)}
<hr className='h-1  border-0 bg-yellow-400 mt-5 mb-5'></hr>
          </div>
      )
  })
  )
}
