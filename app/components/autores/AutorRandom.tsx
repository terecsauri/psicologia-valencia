/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { getData } from '../../services/fetchService';


const landingAutor = await getData("autorUno")

export default function AutorRandom() {
  return (
   
    landingAutor?.map((singleMember: any) => {
        const { photo, title, text, text2, id  } =
          singleMember.fields;
        return (
          <div key={id} className='mb-5' >
                <p className='font-bold text-3xl mt-10' >{title}</p>
            <div className=" p-6 bg-white border border-gray-200 rounded-lg flex max-sm:flex max-sm:flex-col max-sm:gap-4 max-sm:items-center">
            <img
              src={'https://' + photo.fields.file.url} alt="asdf" width="70" height="70"
              className='mr-5 rounded-full mr-5 h-14 w-14'
            />
            <div>
              <p className='font-bold underline text-blue-800'>{text}</p>
              
              <button className='bg-indigo-500 text-white rounded-lg p-1 mt-2 hover:bg-indigo-700'>{text2}</button>
            </div>
            </div>

          </div>
        );
      })
  )
}
