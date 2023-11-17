/* eslint-disable @next/next/no-img-element */
import AutorMain from "@/app/components/autores/AutorMain";
import React from "react";
import { getData } from "@/app/services/fetchService";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import Form from "@/app/components/Form";
import Carrousel from "@/app/components/Carrousel";
import { slides } from "@/app/services/slider";

export const metadata = {
  title: 'Tratamiento Online',
}

const landingOnline = await getData("tratamientosOnline");
const landingText = await getData("tratamientosOnlineText3");
const landingTextSix = await getData("tratamientosOnlineText6");
const landingMedia = await getData("tratamientosOnlineMedia3");

export default function Online() {
  return (
    <div>
      {landingOnline?.map((singlePost: any) => {
        const {
          title,
          photo1,
          text1,
          text2,
          media2,
          bottonText,
          text4,
          text4bis,
          text5,
          button2,
          title2,
          text7,
          title3,
          title4,
          media4,
          text8,
          text9,
          media5,
          media6,
          title5,
          title6,
          pareja
        } = singlePost.fields;
        return (
          <div key={pareja} className="mt-5">
            <hr className="mb-10 mt-10"></hr>
            <h1 className="font-bold mb-6 text-6xl ">{title}</h1>
            <div className="flex justify-center">
              <img
                src={"https://" + photo1.fields.file.url}
                alt="asdf"
                width="600"
                height="600"
                className="mb-10"
              />
            </div>
            {documentToReactComponents(text1)}
            <hr className="h-1 m-auto border-0 bg-yellow-400 mt-5 mb-5 w-64"></hr>

            <div className="flex mt-5 mb-5 max-lg:block">
              <div className="w-1/3 mr-4 max-lg:w-fit">{documentToReactComponents(text2)}</div>
              <img
                src={"https://" + media2.fields.file.url}
                alt="asdf"
                width="650"
                height="650"
              />
            </div>
            <div className="flex justify-center">
              <button className="w-75 max-sm:w-64 bg-yellow-400 hover:bg-yellow-500 w-1/2 p-2 border-2 border-black rounded-2xl font-bold mt-5 mb-5  max-lg:w-fit">
                {bottonText}
              </button>
            </div>
            <div className="grid grid-cols-2 max-lg:block">
              {landingText?.map((singlePost: any) => {
                const { title, body, id } = singlePost.fields;
                return (
                  <div key={id} className="gap-5">
                    <div>
                      <h3 className="font-bold mb-2 mt-2">{title}</h3>
                      <hr className="h-0.5 border-0 bg-black mt-2 mb-2 w-44"></hr>
                      <article className="mr-3">{documentToReactComponents(body)}</article>
                     
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center">
              <button className="w-75 max-sm:w-64 bg-yellow-400 hover:bg-yellow-500 w-1/2 p-2 border-2 border-black rounded-2xl font-bold mt-5 mb-5  max-lg:w-fit">
                {bottonText}
              </button>
            </div>
            <div className="flex gap-5 my-10 max-lg:block ">
              <div className="w-1/2 max-lg:w-fit">
                {documentToReactComponents(text4)}
                <hr className="h-1 border-0 bg-yellow-400 mt-5 mb-5 w-full"></hr>
              </div>
              <div className="w-1/2 max-lg:w-fit">
                {documentToReactComponents(text4bis)}
                <hr className="h-1 border-0 bg-yellow-400 mt-5 mb-5 w-full"></hr>
              </div>
            </div>
            {documentToReactComponents(text5)}
            <div className="flex justify-center">
              <button className="w-75 max-sm:w-64   text-yellow-400 bg-black hover:bg-gray-800 w-1/3 p-2 rounded-2xl font-bold mt-10 mb-10  max-lg:w-fit">
                <Link href="/tarifas">{button2}</Link>

              </button>
            </div>

            <h3 className="flex justify-center font-bold  mb-2">{title2}</h3>
            <hr className="h-1 border-0 bg-yellow-400 mt-5 mb-5 w-1/2 mx-auto "></hr>

            <div className="flex mb-10 max-lg:flex-col gap-5 ">
              {landingTextSix?.map((singlePost: any) => {
                const { title, body, items } = singlePost.fields;
                return (
                  <div key={items}>
                      <h1 className="font-bold mb-2 mt-2 text-lg">{title}</h1>
                        <hr className="h-1 border-0 bg-black mt-5 mb-5 w-1/3"></hr>
                        {body}  
                  </div>
                );
              })}
            </div>
            <hr className="h-1 border-0 bg-yellow-400 mt-5 mb-5 w-1/2 mx-auto"></hr>
            {documentToReactComponents(text7)}

<Form></Form>

            <h2 className="font-bold text-2xl mb-5 text-center my-20">{title3}</h2>
<div className="flex justify-center">
            <Carrousel slides={slides} />
</div>
        
            <h2 className="font-bold  my-10 justify-center flex">{title4}</h2>
            <div className="flex justify-center">

              <img
                src={"https://" + media4.fields.file.url}
                alt="asdf"
                width="650"
                height="650"
                className="mb-5 flex"
              />
            </div>

            {documentToReactComponents(text8)}

            <div className="grid grid-cols-2 mb-10 mt-10 max-lg:block">
              <div>
                <img
                  src={"https://" + media5.fields.file.url}
                  alt="asdf"
                  width="450"
                  height="450"
                />
                <h2 className="font-bold text-lg mb-2">{title5}</h2>
              </div>
              <div>
                <img
                  src={"https://" + media6.fields.file.url}
                  alt="asdf"
                  width="450"
                  height="450"
                />
                <h2 className="font-bold text-lg mb-2">{title6}</h2>
              </div>
            </div>

            {documentToReactComponents(text9)}

          </div>
        );
      })}
      <AutorMain />
    </div>
  );
}
