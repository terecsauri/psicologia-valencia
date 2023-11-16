/* eslint-disable @next/next/no-img-element */
import { getData } from '@/app/services/fetchService'
import Link from 'next/link';
import React from 'react'

const landingAutor = await getData("aboutUsMain")


export default function AutorMain() {
  return (
    
    landingAutor?.map((singleMember: any) => {
        const { cardTitle, card, cardButton, cardText, subtitle, autor} =
          singleMember.fields;
        return (
          <div key={autor} className='mb-5'>
            <p className='font-bold text-3xl mt-10'>{subtitle}</p>
          <div 
          
            className="p-6 bg-white border border-gray-200 rounded-lg flex mt-5 max-lg:w-fit max-lg:flex max-sm:flex-col max-sm:gap-4 max-sm:items-center"
          >
           
            <img
              src={'https://' + card.fields.file.url} alt="asdf" width="50" height="50"
              className='mr-5 rounded-full h-18 w-18'
            />
            <div>
              <p className='font-bold underline text-blue-800'>{cardTitle}</p>
              <p>{cardText}</p> 
              <Link href="/blog">
              <button className='bg-indigo-500 text-white rounded-lg p-1 mt-2 hover:bg-indigo-700'>{cardButton}</button>
              </Link>
            </div>

          </div>

          </div>
        );
      })
  )
}

