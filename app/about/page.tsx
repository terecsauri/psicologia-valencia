import React from 'react'
import Image from "next/image";
import { getData } from '../services/fetchService';
import AutorMain from '../components/AutorMain';
const landingUs = await getData("aboutUsMain");
const landingTeam = await getData("aboutUsImages")

export default function AboutPage() {
  return (

    landingUs?.map((singlePost: any) => {
      const { id, title} =
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
         <AutorMain/>
        </div>


      )
    })
  )
}

