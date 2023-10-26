import React from 'react'
import Image from "next/image";
import { getData } from '../services/fetchService';
import AutorMain from '../components/autores/AutorMain';
const landingUs = await getData("aboutUsMain");

export default function AboutPage() {

  return (

    landingUs?.map((singlePost: any) => {
      const { id, title, media1, media2, media3, mediaText, mediaText2, mediaText3 } =
        singlePost.fields;
      return (
        <div key={id} className='ml-10 mt-10'>
          <h1 className='font-bold text-4xl mb-5'>{title}</h1>
          <div className='grid grid-cols-3 '>
            <div className='p-3 bg-white border border-gray-200 w-1/2 shadow dark:bg-gray-800 dark:border-gray-700 justify-center'>
            <Image
              src={'https://' + media1.fields.file.url} alt="asdf" width={350} height={180}
              />
              <button className='bg-yellow-500 rounded flex font-bold p-1 bold mt-2'>{mediaText3}</button>
              
            </div>
            <div  className='p-3 bg-white border border-gray-200 w-1/2 shadow dark:bg-gray-800 dark:border-gray-700 justify-center'>
            <Image
              src={'https://' + media2.fields.file.url} alt="asdf" width={350} height={180}
              />
              <button className='bg-yellow-500 rounded w-40 flex font-bold p-1 bold mt-2'>{mediaText}</button>           
            </div>
            <div  className='p-3 bg-white border border-gray-200 w-1/2 shadow dark:bg-gray-800 dark:border-gray-700 justify-center'>
            <Image
              src={'https://' + media3.fields.file.url} alt="asdf" width={350} height={180}
              />
              <button className='bg-yellow-500 flex rounded w-40 font-bold p-1 bold mt-2'>{mediaText2}</button>       
            </div>
          </div>
          <AutorMain />
        </div>


      )
    })
  )
}

