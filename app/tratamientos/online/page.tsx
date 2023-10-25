import AutorMain from '@/app/components/autores/AutorMain'
import React from 'react'
import { getData } from '@/app/services/fetchService';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';

const landingOnline = await getData("tratamientosOnline");
const landingText = await getData("tratamientosOnlineText3");
const landingTextFour = await getData("tratamientosOnlineText4");
const landingTextSix = await getData("tratamientosOnlineText6");
const landingMedia = await getData("tratamientosOnlineMedia3");
const landingMediaCinco = await getData("tratamientosOnlineMedia5");




export default function Online() {
  return (
    <div>

      {landingOnline?.map((singlePost: any) => {
        const { title, photo1, text1, text2, media2, bottonText, text5, button2, title2, text7, title3, title4, media4, text8, text9 } =
          singlePost.fields;
        return (
          <div key={""} className="ml-10 mt-5">
            <hr className="mb-10 mt-10"></hr>
            <h1 className='font-bold mb-6 text-6xl ' >{title}</h1>
            <Image
              src={'https://' + photo1.fields.file.url} alt="asdf" width={600} height={600}
              className='mb-10'
            />

            {documentToReactComponents(text1)}
            <hr className='h-1 border-0 bg-yellow-400 mt-5 mb-5 w-64'></hr>
            <div className='flex'>
              <div className='w-1/3'>
                {documentToReactComponents(text2)}
              </div>
              <Image
                src={'https://' + media2.fields.file.url} alt="asdf" width={500} height={500}
              />

            </div>
            <button className='bg-yellow-400 w-1/3 p-2 border-2 border-black rounded-2xl font-bold mt-5 mb-5'>{bottonText}</button>
            <div className='grid grid-cols-2'>
              {landingText?.map((singlePost: any) => {
                const { title, body, id } =
                  singlePost.fields;
                return (
                  <div key={id} >
                    <div>
                      <h1 className='font-bold mb-2 mt-2' >{title}</h1>
                      <hr className='h-0.5 border-0 bg-black mt-2 mb-2 w-44'></hr>
                      <p className='w-1/2'>
                        {documentToReactComponents(body)}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
            <button className='bg-yellow-400 w-1/3 p-2 border-2 border-black rounded-2xl font-bold mt-5 mb-5'>{bottonText}</button>
            <div className='grid grid-cols-2 mb-10'>
              {landingTextFour?.map((singlePost: any) => {
                const { title, body } =
                  singlePost.fields;
                return (
                  <div key={""} >
                    <div>
                      <h1 className='font-bold mb-2 mt-2' >{title}</h1>
                      <p className='w-1/2'>
                        {documentToReactComponents(body)}
                        <hr className='h-1 border-0 bg-yellow-400 mt-5 mb-5 w-1/2'></hr>
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
            {documentToReactComponents(text5)}
            <button className='text-yellow-400 bg-black w-1/3 p-2 rounded-2xl font-bold mt-5 mb-5'>
              {button2}
            </button>
            <h2 className='font-bold text-2xl mb-2'>
              {title2}
            </h2>
            <hr className='h-1 border-0 bg-yellow-400 mt-5 mb-5 w-1/2'></hr>

            <div className='grid grid-cols-3 mb-10'>
              {landingTextSix?.map((singlePost: any) => {
                const { title, body, media } =
                  singlePost.fields;
                return (
                  <div key={""} >
                    <div>
                      <Image
                        src={'https://' + media.fields.file.url} alt="asdf" width={150} height={150}
                      />
                      <h1 className='font-bold mb-2 mt-2 text-xl' >{title}</h1>
                      <p className='w-1/2'>
                        <hr className='h-1 border-0 bg-black mt-5 mb-5 w-1/3'></hr>
                        {body}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
            <hr className='h-1 border-0 bg-yellow-400 mt-5 mb-5 w-1/2'></hr>
            {documentToReactComponents(text7)}

            <form className='flex flex-col mt-10'>
              <h3 className='font-bold'>Nombre</h3>
              <label> <input type="text" name="name" /> </label>
              <h3 className='font-bold'>Correo Electrónico</h3>
              <label> <input type="text" name="email" /> </label>
              <h3 className='font-bold'>Mensaje</h3>
              <label> <textarea /></label>
              <input type="submit" value="Submit" />
            </form>
            <h2 className='font-bold text-2xl mb-2'>
              {title3}
            </h2>


            <div className='grid grid-cols-3 mb-10'>
              {landingMedia?.map((singlePost: any) => {
                const { media } =
                  singlePost.fields;
                return (
                  <div key={""} className='mb-3'>
                    <Image
                      src={'https://' + media.fields.file.url} alt="asdf" width={350} height={350}
                    />
                  </div>
                )
              })}
            </div>
            <h2 className='font-bold text-2xl mb-2'>
              {title4}
            </h2>
            <Image
              src={'https://' + media4.fields.file.url} alt="asdf" width={550} height={550}
              className='mb-5'
            />

            {documentToReactComponents(text8)}

            <div className='grid grid-cols-2 mb-10'>
              {landingMediaCinco?.map((singlePost: any) => {
                const { media, title } =
                  singlePost.fields;
                return (
                  <div key={""} className='mb-3'>
                    <Image
                      src={'https://' + media.fields.file.url} alt="asdf" width={450} height={450}
                    />
                    <p className='font-bold text-xl mb-2'>
                      {title}
                    </p>
                  </div>
                )
              })}
            </div>
            {documentToReactComponents(text9)}
          </div>
        )
      }
      )}
      <AutorMain />
    </div>
  )
}
