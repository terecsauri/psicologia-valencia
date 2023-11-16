/* eslint-disable @next/next/no-img-element */
import AutorRandom from "@/app/components/autores/AutorRandom";
import React from "react";
import { getData } from "@/app/services/fetchService";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const metadata = {
  title: 'Tratamiento Infantil',
}
const landingNinos = await getData("tratamientosNios");

export default function Niños() {
  return (
    <div>
      {landingNinos?.map((singlePost: any) => {
        const {
          titulo,
          titulo2,
          titulo3,
          titulo4,
          titulo5,
          titulo6,
          titulo7,
          titulo8,
          titulo9,
          titulo10,
          body,
          body2,
          body3,
          body4,
          body5,
          body6,
          body7,
          body8,
          body9,
          media,
          media2,
          media3,
          tituloGrid1,
          tituloGrid2,
          tituloGrid3,
          tituloGrid4,
          tituloGrid5,
          tituloGrid6,
          tituloGrid7,
          mediaGrid1,
          mediaGrid2,
          mediaGrid3,
          mediaGrid4,
          mediaGrid5,
          mediaGrid6,
          mediaGrid7,
          ninos
        } = singlePost.fields;
        return (
          <div key={ninos} className="mt-5">
            <h1 className="font-bold mb-2 ">{titulo}</h1>
            <div className="flex justify-center m-5">
            <img
              src={"https://" + media.fields.file.url}
              alt="asdf"
              width="650"
              height="650"
            />
            </div>
            <h2 className="font-bold mb-2 text-green-700 text-3xl mb-5">
              {titulo2}
            </h2>
            {documentToReactComponents(body)}
            <h2 className="font-bold mb-2 text-green-700 text-3xl mt-5 mb-5">
              {titulo3}
            </h2>
            {documentToReactComponents(body2)}
            <h2 className="font-bold mb-2 text-green-700 text-3xl mt-5 mb-5">
              {titulo4}
            </h2>
            {documentToReactComponents(body3)}
            <h2 className="font-bold mb-2 text-green-700 text-3xl mt-5 mb-5">
              {titulo5}
            </h2>
            {documentToReactComponents(body4)}
            <h2 className="font-bold mb-2 text-green-700 text-3xl mt-5 mb-5">
              {titulo6}
            </h2>
            <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1  text-center">
              <div className="p-3 bg-white border border-gray-200 shadow m-5 dark:bg-gray-800 dark:border-gray-700 justify-center max-lg:w-fit ">
                <img
                  src={"https://" + mediaGrid1.fields.file.url}
                  alt="asdf"
                  width="350"
                  height="180"
                />
                <p className="font-bold">{tituloGrid1}</p>
              </div>
              <div className="p-3 bg-white border border-gray-200 shadow m-5 dark:bg-gray-800 dark:border-gray-700 justify-center max-lg:w-fit">
                <img
                  src={"https://" + mediaGrid2.fields.file.url}
                  alt="asdf"
                  width="350"
                  height="180"
                />
                <p className="font-bold">{tituloGrid3}</p>
              </div>
              <div className="p-3 bg-white border border-gray-200 shadow m-5 dark:bg-gray-800 dark:border-gray-700 justify-center max-lg:w-fit">
                <img
                  src={"https://" + mediaGrid3.fields.file.url}
                  alt="asdf"
                  width="350"
                  height="180"
                />
                <p className="font-bold ">{tituloGrid2}</p>
              </div>
              <div className="p-3 bg-white mt-5 border border-gray-200 shadow m-5 dark:bg-gray-800 dark:border-gray-700 justify-center max-lg:w-fit">
                <img
                  src={"https://" + mediaGrid4.fields.file.url}
                  alt="asdf"
                  width="350"
                  height="180"
                />
                <p className="font-bold">{tituloGrid5}</p>
              </div>
              <div className="p-3 bg-white border border-gray-200 shadow m-5 dark:bg-gray-800 dark:border-gray-700 justify-center max-lg:w-fit">
                <img
                  src={"https://" + mediaGrid5.fields.file.url}
                  alt="asdf"
                  width="350"
                  height="180"
                />
                <p className="font-bold">{tituloGrid7}</p>
              </div>
              <div className="p-3 bg-white border border-gray-200 shadow m-5 dark:bg-gray-800 dark:border-gray-700 justify-center max-lg:w-fit">
                <img
                  src={"https://" + mediaGrid6.fields.file.url}
                  alt="asdf"
                  width={350}
                  height={180}
                />
                <p className="font-bold">{tituloGrid6}</p>
              </div>
              <div className="p-3 bg-white border border-gray-200 shadow m-5 dark:bg-gray-800 dark:border-gray-700 justify-center max-lg:w-fit">
                <img
                  src={"https://" + mediaGrid7.fields.file.url}
                  alt="asdf"
                  width="350"
                  height="180"
                />
                <p className="font-bold">{tituloGrid4}</p>
              </div>
            </div>
            <h2 className="font-bold mt-5 mb-2 text-green-700 text-3xl mt-5 mb-5">
              {titulo7}
            </h2>
            {body5}
            <div className="flex justify-center mt-5 mb-5"> 
            <img
              src={"https://" + media2.fields.file.url}
              alt="asdf"
              width="350"
              height="180"
            />
            </div>
            {body6}
            <h2 className="font-bold mt-5 mb-2 text-green-700 text-3xl mt-5 mb-5">
              {titulo8}
            </h2>
            {documentToReactComponents(body7)}
            <h2 className="font-bold mt-5 mb-2 text-green-700 text-3xl mt-5 mb-5">
              {titulo9}
            </h2>
            {body8}
            <div className="flex justify-center mt-5 mb-5">
            <img
              src={"https://" + media3.fields.file.url}
              alt="asdf"
              width="650"
              height="650"
            />
            </div>
            <h2 className="font-bold mt-5 mb-2 text-green-700 text-3xl mt-5 mb-5">
              {titulo10}
            </h2>
            {documentToReactComponents(body9)}
          </div>
        );
      })}

      <AutorRandom />
    </div>
  );
}
