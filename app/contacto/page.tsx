/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { getData } from '../services/fetchService';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Form from '../components/Form';

const landingFooter = await getData("contacto");

export default function contactos() {
  return (
    landingFooter?.map((singlePost: any) => {
      const { titulo, titulo2, media, media2, button, button2, body, body2, body3, body4, body5, contacto } =
        singlePost.fields;
      return (
        <div key={contacto} className="">
          <h1 className='font-bold mb-2' >{titulo}</h1>
          <div className='flex justify-center mb-5'>
            <img
              src={'https://' + media.fields.file.url} alt="asdf" width="650" height="650"

            />
          </div>
          {documentToReactComponents(body)}
          <div className='flex justify-center'>
            <button className='bg-yellow-400 hover:bg-yellow-500 p-2 border-2 border-black rounded-3xl font-bold mt-5 mb-5'>
              {documentToReactComponents(button)}
            </button>
          </div>
          {documentToReactComponents(body2)}
          <div className='my-5'>

            <div>
              {documentToReactComponents(body3)}
            </div>
          </div>
          <h3 className='text-center'>Contacto</h3>
          <Form></Form>
          <div className='mt-5 mb-5'>
            {documentToReactComponents(body4)}
          </div>
          <h3 >{titulo2}</h3>
          <div className='flex justify-center m-5'>
            <img
              src={'https://' + media2.fields.file.url} alt="asdf" width="450" height="480"
            />
          </div>
          {documentToReactComponents(body5)}
          <div className='flex justify-center'>
            <button className='bg-yellow-400 hover:bg-yellow-500 p-2 border-2 border-black rounded-3xl font-bold mt-10 mb-5'>
              {documentToReactComponents(button2)}
            </button>
          </div>
        </div>
      )
    })
  )
}
