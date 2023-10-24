import { getData } from '@/app/services/fetchService'
import Image from 'next/image'


const landingAutor = await getData("aboutUsMain")

import React from 'react'

export default function AutorMain() {
  return (
    
    landingAutor?.map((singleMember: any) => {
        const { cardTitle, card, cardButton, cardText, subtitle} =
          singleMember.fields;
        return (
          <div key={""}>
            <h1 className='font-bold text-2xl mt-10'>{subtitle}</h1>
          <div 
          
            className="w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex mt-5"
          >
           
            <Image
              src={'https://' + card.fields.file.url} alt="asdf" width={50} height={50}
              className='mr-5 rounded-full h-14 w-14'
            />
            <div>
              <h1 className='font-bold underline text-blue-800'>{cardTitle}</h1>
              {cardText}
              <button className='bg-indigo-500 text-white rounded-lg p-1 mt-2'>{cardButton}</button>
            </div>

          </div>

          </div>
        );
      })
  )
}

