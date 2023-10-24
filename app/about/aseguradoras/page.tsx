import React from 'react'
import { getData } from '@/app/services/fetchService'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'
const landingAseguradoras = await getData("aboutUsAseguradoras")
const landingAutor = await getData("aboutUsMain")


export default function Aseguradoras() {
  return (
    landingAseguradoras?.map((singlePost: any) => {
      const { title, body, titleOne, mediaOne, textOne, titleTwo, mediaTwo, textTwo, titleThree, mediaThree, textThree } =
          singlePost.fields;
      return (
          <div key={""} className="ml-10 mt-5 mb-5">
              <hr className="mb-10 mt-10"></hr>
              <h1 className='font-bold mb-2' >{title}</h1>
              {documentToReactComponents(body)}
              <h1 className='font-bold mb-5 mt-5' >{titleOne}</h1>
              <div className='flex'>
              <Image
                  src={'https://' + mediaOne.fields.file.url} alt="asdf" width={150} height={150}
                  className='mr-5 '
                />
              {documentToReactComponents(textOne)}
              </div>
              <h1 className='font-bold mb-2 mt-5'  >{titleTwo}</h1>
              <div className='flex'>
              <Image
                  src={'https://' + mediaTwo.fields.file.url} alt="asdf" width={500} height={500}
                  className='mr-5 '
                />
              {documentToReactComponents(textTwo)}
              </div>
              <h1 className='font-bold mb-2 mt-5' >{titleThree}</h1>
              <div className='flex'>
              <Image
                  src={'https://' + mediaThree.fields.file.url} alt="asdf" width={150} height={150}
                  className='mr-5'
                />
              {documentToReactComponents(textThree)}
              </div>

              {landingAutor?.map((singleMember: any) => {
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
                  <h1 className='font-bold '>{cardTitle}</h1>
                  {cardText}
                  <button className='bg-indigo-500 text-white rounded-lg p-1 mt-2'>{cardButton}</button>
                </div>

              </div>

              </div>
            );
          })}
          </div>
      )
  })
  )
}
