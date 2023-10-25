import Image from 'next/image';
import React from 'react'
import { getData } from '../../services/fetchService';


const landingAutor = await getData("autorUno")

export default function AutorRandom() {
  return (
   
    landingAutor?.map((singleMember: any) => {
        const { photo, title, text, text2 } =
          singleMember.fields;
        return (
          <div key={""}>
                <p className='font-bold text-3xl mt-10 ' >{title}</p>
            <div className="w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  flex">
            <Image
              src={'https://' + photo.fields.file.url} alt="asdf" width={70} height={70}
              className='mr-5 rounded-full mr-5 h-14 w-14'
            />
            <div>
              <h1 className='font-bold underline text-blue-800'>{text}</h1>
              
              <button className='bg-indigo-500 text-white rounded-lg p-1 mt-2'>{text2}</button>
            </div>
            </div>

          </div>
        );
      })
  )
}
