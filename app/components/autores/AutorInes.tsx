import { getData } from '@/app/services/fetchService'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const landingAutor = await getData("autor2")

import React from 'react'

export default function AutorInes() {
  return (
    
    landingAutor?.map((singleMember: any) => {
        const { title, photo, name, body,footer} =
          singleMember.fields;
        return (
          <div key={""}>
            <h1 className='font-bold text-3xl mt-10'>{title}</h1>
          <div 
          
            className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex mt-5"
          >
           
            <Image
              src={'https://' + photo.fields.file.url} alt="asdf" width={50} height={50}
              className='mr-5 rounded-full h-14 w-14'
            />
            <div>
              <p className='font-bold underline text-blue-800'>{name}</p>
              {documentToReactComponents(body)}
              <button className='bg-indigo-500 text-white rounded-lg p-1 mt-2'>{footer}</button>
            </div>

          </div>

          </div>
        );
      })
  )
}

