/* eslint-disable @next/next/no-img-element */
import { getData } from '@/app/services/fetchService'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Link from 'next/link'

const landingAutor = await getData("autor2")

import React from 'react'

export default function AutorInes() {
  return (
    
    landingAutor?.map((singleMember: any) => {
        const { title, photo, name, body,footer, id} =
          singleMember.fields;
        return (
          <div key={id} className='mb-5'>
            <h1 className='font-bold text-3xl mt-10'>{title}</h1>
          <div 
          
            className="p-6 bg-white border border-gray-200 rounded-lg flex mt-5 max-lg:w-fit max-lg:flex max-sm:flex-col  max-sm:gap-4 max-sm:items-center"
          >
            <div className="p-6 bg-white border border-gray-200 rounded-lg flex mt-5 max-lg:w-fit max-lg:flex max-sm:flex-col max-sm:gap-4 max-sm:items-center">
            <img
              src={'https://' + photo.fields.file.url} alt="asdf" width="100" height="100"
              className='mr-5 rounded-full h-20'
            />
            <div>

              <p className='font-bold underline text-blue-800'>{name}</p>
              {documentToReactComponents(body)}
              <Link href="/blog">
              <button className='bg-indigo-500 text-white rounded-lg p-1 mt-2 hover:bg-indigo-700'>{footer}</button>
              </Link>
            </div>
            </div>

          </div>

          </div>
        );
      })
  )
}

