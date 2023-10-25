import React from 'react'
import AutorInes from '@/app/components/autores/AutorInes'
import { getData } from '@/app/services/fetchService'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'

const landingAdults = await getData("tratamientosAdultos")
const landingMedia = await getData("tratamientosAdultosMedia")

export default function Adultos() {

  return (
    <div>
      {landingAdults?.map((singlePost: any) => {
        const { title, body, body2 } =
          singlePost.fields;
        return (
          <div key={""} className="ml-10 mt-5">

            <h1 className='font-bold mb-6 text-4xl' >{title}</h1>
            {documentToReactComponents(body)}

            <div className='grid grid-cols-3 mb-10'>
              {landingMedia?.map((singlePost: any) => {
                const { title, media, id } =
                  singlePost.fields;
                return (
                  <div key={id} className="ml-10 mt-5 p-3 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 justify-center w-1/2">
                    <Image
                      src={'https://' + media.fields.file.url} alt="asdf" width={350} height={180}
                    />
                    <h1 className='font-bold mb-2' >{title}</h1>
                  </div>
                )
              })
              }
            </div>

            {documentToReactComponents(body2)}

          </div>
        )
      })
      }
      <AutorInes />
    </div>
  )
}
