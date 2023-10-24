import React from 'react'
import { getData } from '@/app/services/fetchService';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image';

const landingMetodo = await getData("aboutUsMtodo")
const landingAutor = await getData("autorUno")

export default function Metodo() {
  return (
    landingMetodo?.map((singlePost: any) => {
      const { title, body, photo, author } =
          singlePost.fields;
      return (
          <div key={""} className="ml-10 mt-5">
              <h1 className='font-bold mb-4' >{title}</h1>
              <Image
                      src={'https://' + photo.fields.file.url} alt="asdf" width={450} height={450}
                    />
              {documentToReactComponents(body)}
              <p className='font-bold text-2xl mt-10'>

{author }
              </p>
          {landingAutor?.map((singleMember: any) => {
            const { photo, title, text } =
              singleMember.fields;
            return (
              <div key={""}
                className="w-1/3 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex"
              >
                <Image
                  src={'https://' + photo.fields.file.url} alt="asdf" width={50} height={50}
                  className='mr-5 rounded-full h-14 w-14'
                />
                <div>
                  <h1 className='font-bold '>{title}</h1>
                  
                  <button className='bg-yellow-500 flex p-1 bold'>{text}</button>
                </div>

              </div>
            );
          })}
          </div>
          
      )
      
  })

  )
}
