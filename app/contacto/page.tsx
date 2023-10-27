/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { getData } from '../services/fetchService';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const landingFooter = await getData("contacto");

export default function contactos() {
  return (
    landingFooter?.map((singlePost: any) => {
      const { titulo, media, media2, button, button2, body, body2, body3, body4, body5 } =
          singlePost.fields;
      return (
          <div key={""} className="ml-10 mt-5">
              <h1 className='font-bold mb-2' >{titulo}</h1>
              <div className='flex justify-center'>
              <img
              src={'https://' + media.fields.file.url} alt="asdf" width="850" height="850"
              
              />
              </div>
              {documentToReactComponents(body)}
              <div className='flex justify-center'>
              <button className='bg-yellow-400 p-2 border-2 border-black rounded-3xl font-bold mt-5 mb-5'>
              {documentToReactComponents(button)}
              </button>
              </div>
              {documentToReactComponents(body2)}
              <div className='grid grid-cols-2 m-5'>
                <p></p>
                <div>
              {documentToReactComponents(body3)}
                </div>
              </div>
              <form className='flex flex-col mt-5'>
            <p className='font-bold'>Nombre</p>
            <label> <input type="text" name="name" className='border-2 border-gray w-1/2' /> </label>
            <p className='font-bold'>Correo Electrónico</p>
            <label> <input type="text" name="email" className='border-2 border-gray w-1/2'/> </label>
            <p className='font-bold'>Asunto</p>
            <label>  <input type="text" name="asunto" className='border-2 border-gray w-1/2'/> </label>
            <p className='font-bold '>Mensaje</p>
            <label> <textarea className='border-2 border-gray w-1/2'/></label>
            <input type="submit" value="Submit" className='border-2 border-black w-20'/>
          </form>
          <p className='mt-5'>
          {documentToReactComponents(body4)}
          </p>
          <div className='flex justify-center m-5'>
          <img
              src={'https://' + media2.fields.file.url} alt="asdf" width="450" height="480"
              />
          </div>
              {documentToReactComponents(body5)}
              <div className='flex justify-center'>
              <button className='bg-yellow-400 p-2 border-2 border-black rounded-3xl font-bold mt-10 mb-5'>
              {documentToReactComponents(button2)}
              </button>
              </div>
          </div>
      )
  })
  )
}
