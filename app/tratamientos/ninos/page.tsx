/* eslint-disable @next/next/no-img-element */
import AutorRandom from "@/app/components/autores/AutorRandom";
import React from "react";
import { getData } from "@/app/services/fetchService";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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
        } = singlePost.fields;
        return (
          <div key={""} className="ml-10 mt-5">
            <h1 className="font-bold mb-2 text-4xl">{titulo}</h1>
            <div className="flex justify-center m-5">
            <img
              src={"https://" + media.fields.file.url}
              alt="asdf"
              width="850"
              height="650"
            />
            </div>
            <h1 className="font-bold mb-2 text-green-700 text-3xl mb-5">
              {titulo2}
            </h1>
            {documentToReactComponents(body)}
            <h1 className="font-bold mb-2 text-green-700 text-3xl mt-5 mb-5">
              {titulo3}
            </h1>
            {documentToReactComponents(body2)}
            <h1 className="font-bold mb-2 text-green-700 text-3xl mt-5 mb-5">
              {titulo4}
            </h1>
            {documentToReactComponents(body3)}
            <h1 className="font-bold mb-2 text-green-700 text-3xl mt-5 mb-5">
              {titulo5}
            </h1>
            {documentToReactComponents(body4)}
            <h1 className="font-bold mb-2 text-green-700 text-3xl mt-5 mb-5">
              {titulo6}
            </h1>
            <div className="grid grid-cols-3 max-xl:block">
              <div className="p-3 bg-white border border-gray-200 shadow m-5 dark:bg-gray-800 dark:border-gray-700 justify-center max-xl:w-fit ">
                <img
                  src={"https://" + mediaGrid1.fields.file.url}
                  alt="asdf"
                  width="350"
                  height="180"
                />
                <p className="font-bold">{tituloGrid1}</p>
              </div>
              <div className="p-3 bg-white border border-gray-200 shadow m-5 dark:bg-gray-800 dark:border-gray-700 justify-center max-xl:w-fit">
                <img
                  src={"https://" + mediaGrid2.fields.file.url}
                  alt="asdf"
                  width="350"
                  height="180"
                />
                <p className="font-bold">{tituloGrid3}</p>
              </div>
              <div className="p-3 bg-white border border-gray-200 shadow m-5 dark:bg-gray-800 dark:border-gray-700 justify-center max-xl:w-fit">
                <img
                  src={"https://" + mediaGrid3.fields.file.url}
                  alt="asdf"
                  width="350"
                  height="180"
                />
                <p className="font-bold ">{tituloGrid2}</p>
              </div>
              <div className="p-3 bg-white mt-5 border border-gray-200 shadow m-5 dark:bg-gray-800 dark:border-gray-700 justify-center max-xl:w-fit">
                <img
                  src={"https://" + mediaGrid4.fields.file.url}
                  alt="asdf"
                  width="350"
                  height="180"
                />
                <p className="font-bold">{tituloGrid5}</p>
              </div>
              <div className="p-3 bg-white border border-gray-200 shadow m-5 dark:bg-gray-800 dark:border-gray-700 justify-center max-xl:w-fit">
                <img
                  src={"https://" + mediaGrid5.fields.file.url}
                  alt="asdf"
                  width="350"
                  height="180"
                />
                <p className="font-bold">{tituloGrid7}</p>
              </div>
              <div className="p-3 bg-white border border-gray-200 shadow m-5 dark:bg-gray-800 dark:border-gray-700 justify-center max-xl:w-fit">
                <img
                  src={"https://" + mediaGrid6.fields.file.url}
                  alt="asdf"
                  width={350}
                  height={180}
                />
                <p className="font-bold">{tituloGrid6}</p>
              </div>
              <div className="p-3 bg-white border border-gray-200 shadow m-5 dark:bg-gray-800 dark:border-gray-700 justify-center max-xl:w-fit">
                <img
                  src={"https://" + mediaGrid7.fields.file.url}
                  alt="asdf"
                  width="350"
                  height="180"
                />
                <p className="font-bold">{tituloGrid4}</p>
              </div>
            </div>
            <h1 className="font-bold mt-5 mb-2 text-green-700 text-3xl mt-5 mb-5">
              {titulo7}
            </h1>
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
            <h1 className="font-bold mt-5 mb-2 text-green-700 text-3xl mt-5 mb-5">
              {titulo8}
            </h1>
            {documentToReactComponents(body7)}
            <h1 className="font-bold mt-5 mb-2 text-green-700 text-3xl mt-5 mb-5">
              {titulo9}
            </h1>
            {body8}
            <div className="flex justify-center mt-5 mb-5">
            <img
              src={"https://" + media3.fields.file.url}
              alt="asdf"
              width="850"
              height="850"
            />
            </div>
            <h1 className="font-bold mt-5 mb-2 text-green-700 text-3xl mt-5 mb-5">
              {titulo10}
            </h1>
            {documentToReactComponents(body9)}
          </div>
        );
      })}

      <AutorRandom />
    </div>
  );
}
