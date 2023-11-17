/* eslint-disable @next/next/no-img-element */
import React from "react";
import AutorInes from "@/app/components/autores/AutorInes";
import { getData } from "@/app/services/fetchService";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const metadata = {
  title: 'Tratamiento Adultos',
}

const landingAdults = await getData("tratamientosAdultos");
const landingMedia = await getData("tratamientosAdultosMedia");

export default function Adultos() {
  return (
    <div>
      {landingAdults?.map((singlePost: any) => {
        const { title, body, body2, body3, body4 } = singlePost.fields;
        return (
          <div key={title.id} className="mt-5">
            <h1 className="font-bold mb-6">{title}</h1>
            {documentToReactComponents(body)}
            <article className="mt-5 mb-5">{documentToReactComponents(body2)}</article>
            

            <div className="grid grid-cols-3 mb-16 mt-16 gap-5 max-lg:flex max-lg:flex-col max-lg:items-center text-center">
              {landingMedia?.map((singlePost: any) => {
                const { title, media, adultos } = singlePost.fields;
                return (
                  <div
                    key={adultos}
                    className=" gap-5 m-5 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 justify-center max-lg:m-0 "
                  >
                    <img
                      src={"https://" + media.fields.file.url}
                      alt="asdf"
                      width="350"
                      height="180"
                      className="h-full"
                    />
                    <span className="font-bold">{title}</span>
                  </div>
                );
              })}
            </div>
            <article className="mt-5 mb-5"> {documentToReactComponents(body3)}</article>
            <article className="mt-5 mb-5"> {documentToReactComponents(body4)}</article>
          </div>
        );
      })}
      <AutorInes />
    </div>
  );
}
