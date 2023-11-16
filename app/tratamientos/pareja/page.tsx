/* eslint-disable @next/next/no-img-element */
import AutorMain from "@/app/components/autores/AutorMain";
import React from "react";
import { getData } from "@/app/services/fetchService";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";

const landingPareja = await getData("tratamientosPareja");

export default function Pareja() {
  return (
    <div>
      {landingPareja?.map((singlePost: any) => {
        const {
          title,
          title2,
          title3,
          title4,
          body,
          body2bis,
          body3,
          body4,
          body5,
          body6, 
          body7,
          media,
          media2,
          button,
        } = singlePost.fields;
        return (
          <div key={""} className="mt-10">
            <h1 className="font-bold mb-2">{title}</h1>
            <div className="flex justify-center my-5">
            <img
              src={"https://" + media.fields.file.url}
              alt="asdf"
              width="600"
              height="650"
            />
            </div>
            <h2 className="font-bold mt-2 mb-2">{title2}</h2>
            {body}
            <div className="flex justify-center mt-10 mb-10">
              <button className="bg-yellow-400 hover:bg-yellow-500 w-1/2 p-2 font-bold rounded-2xl font-bold  max-lg:w-fit">
                <Link href="/tarifas"> {button}</Link>
               
              </button>
            </div>
            <p className="mb-2"> {documentToReactComponents(body2bis)} </p>
            <h2 className="font-bold mt-5 mb-5">{title3}</h2>
            <p className="mb-2">{documentToReactComponents(body3)}</p>

            <h2 className="font-bold mt-5 mb-5">{title4}</h2>
            <div className="max-lg:block">
              <img
                src={"https://" + media2.fields.file.url}
                alt="asdf"
                width="250"
                height="250"
                className="mr-10 mt-2 mb-2 float-left m-auto max-sm:float-none max-sm:m-1" 
                
              />
              {body4}
            </div>
            <div className="mt-5 mb-5">
            {documentToReactComponents(body5)}
            <div className="mt-5 mb-5">{documentToReactComponents(body6)}</div>
            <div className="mt-5 mb-5">{documentToReactComponents(body7)}</div>
            
            
            <div className="flex justify-center mb-5 mt-5">
            <button className="bg-blue-600 hover:bg-blue-700 rounded-xl text-white p-2 hover:bg-blue-800">601 406 025</button>
            </div>
            <div className="flex justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 rounded-xl text-white p-2 hover:bg-blue-800"><p className="underline">Pedir Cita</p></button>
            </div>
            </div>
          </div>
        );
      })}

      <AutorMain />
    </div>
  );
}
