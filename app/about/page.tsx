/* eslint-disable @next/next/no-img-element */
import React from "react";
import { getData } from "../services/fetchService";
import AutorMain from "../components/autores/AutorMain";
import Link from "next/link";
const landingUs = await getData("aboutUsMain");

export default function AboutPage() {
  return landingUs?.map((singlePost: any) => {
    const {
      id,
      title,
      media1,
      media2,
      media3,
      mediaText,
      mediaText2,
      mediaText3,
    } = singlePost.fields;
    return (
      <div key={id} className="ml-10 mt-10">
        <h1 className="font-bold text-4xl mb-5">{title}</h1>
        <div className="grid grid-cols-3 gap-10  max-lg:grid-cols-1">
          <div className="p-3 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 justify-center max-xl:w-fit">
            <div className="flex justify-center">
            <img
              src={"https://" + media1.fields.file.url}
              alt="asdf"
              width="280"
              height="128"
            />
            </div>
            <div className="flex justify-center">
            <button className="bg-yellow-500 rounded flex justify-center font-bold p-1 bold mt-2">
              <Link href="/about/donde"> {mediaText3}</Link>
              
            </button>
            </div>
          </div>
          <div className="p-3 bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700 justify-center max-xl:w-fit">
            <img
              src={"https://" + media2.fields.file.url}
              alt="asdf"
              width="350"
              height="180"
            />
            <div className="flex justify-center">
            <button className="bg-yellow-500 rounded w-40 flex justify-center font-bold p-1 bold mt-2">
              <Link href="/about/metodo">{mediaText}</Link>
              
            </button>
            </div>
          </div>
          <div className="p-3 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 justify-center max-xl:w-fit">
            <img
              src={"https://" + media3.fields.file.url}
              alt="asdf"
              width="350"
              height="180"
            />
            <div className="flex justify-center">
            <button className="bg-yellow-500 flex rounded flex justify-center w-40 font-bold p-1 bold mt-2">
              <Link href="/about/equipo">{mediaText2}</Link>
              
            </button>
            </div>
          </div>
        </div>
        <AutorMain />
      </div>
    );
  });
}
