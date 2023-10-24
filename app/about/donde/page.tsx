import React from 'react'
import { getData } from '@/app/services/fetchService'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'
const landingWhere = await getData("aboutUsWhere")
const landingAutor = await getData("autorUno")


export default function DondeEstamos() {
  return (
    landingWhere?.map((singlePost: any) => {
      const { title, photo, adress, photoMaps, body, sofa, contacto, author } =
        singlePost.fields;
      return (
        <div key={""} className="ml-10 mt-5">
          <h1 className='font-bold text-2xl mb-2' >{title}</h1>
          <Image
            src={'https://' + photo.fields.file.url} alt="asdf" width={600} height={600}

          />
          <h2 className='mt-5 mb-5'>{adress}</h2>
          <Image
            src={'https://' + photoMaps.fields.file.url} alt="asdf" width={300} height={300}
            className='mb-5'

          />
          <h2 className='leading-8'>
            {documentToReactComponents(body)}

          </h2>
          <p className='mt-5 mb-5'>{adress}</p>
          <Image
            src={'https://' + sofa.fields.file.url} alt="asdf" width={500} height={500}
            className='mb-5'

          />
          <h2 className='leading-8'>

            {documentToReactComponents(contacto)}
          </h2>

          <form className='flex flex-col '>
            <h3 className='font-bold'>Nombre</h3>
            <label> <input type="text" name="name" /> </label>
            <h3 className='font-bold'>Correo Electrónico</h3>
            <label> <input type="text" name="email" /> </label>
            <h3 className='font-bold'>Asunto</h3>
            <label>  <input type="text" name="asunto" /> </label>
            <h3 className='font-bold'>Mensaje</h3>
            <label> <textarea /></label>
            <input type="submit" value="Submit" />
          </form>
          <h1 className='font-bold text-2xl mt-10'>{author}</h1>

          {landingAutor?.map((singleMember: any) => {
            const { photo, title, text } =
              singleMember.fields;
            return (
              <div key={""}
                className="w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  flex"
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
