import React from 'react'
import Image from "next/image";
import { getData } from '../services/fetchService';
const landingUs = await getData("aboutUsMain");
const landingTeam = await getData("aboutUsImages")

export default function AboutPage() {
  return (

    landingUs?.map((singlePost: any) => {
      const { id, title, photoUs, subtitle, cardTitle, cardText, cardButton, card } =
        singlePost.fields;
      return (
        <div key={id} className='ml-10 mt-10'>
          <h1 className='font-bold text-4xl'>{title}</h1>

       
            <div className='flex space-x-10'>
              {landingTeam?.map((singleMember: any) => {
                const { id, image, name } =
                  singleMember.fields;
                return (
                  <div key={id}
                  className="p-3 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 justify-center"
                  >
                    <Image
                      src={'https://' + image.fields.file.url} alt="asdf" width={350} height={180}
                    />
                    <button className='bg-yellow-500 flex p-1 bold'>{name}</button>


                  </div>
                );
              })}
         
          </div>
          <h1 className='font-bold text-2xl'>{subtitle}</h1>
          <div className=" w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  flex ">
            <Image
              src={'https://' + card.fields.file.url} alt="asdf" width={100} height={100}
              className='rounded-full h-14 w-14'
            />
            <div className='ml-5'>
              <h1 className='font-bold'>{cardTitle}</h1>
              <h1>{cardText}</h1>
              <button className='bg-indigo-500 text-white rounded-lg p-1'>{cardButton}</button>
            </div>
          </div>
        </div>


      )
    })
  )
}

