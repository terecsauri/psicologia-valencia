/* eslint-disable @next/next/no-img-element */
import React from "react";
import { getData } from "../services/fetchService";
import AutorMain from "../components/autores/AutorMain";
import Link from "next/link";
const landingUs = await getData("aboutUsMain");

export default function AboutPage() {
  return landingUs?.map((singlePost: any) => {
    const {
      index,
      title,
      media1,
      media2,
      media3,
      mediaText,
      mediaText2,
      mediaText3,
    } = singlePost.fields;
    return (
      <div key={index} className="mt-10">
        <h1 className="font-bold text-4xl mb-5">{title}</h1>
        <div className="grid grid-cols-3 gap-10  max-lg:flex max-lg:flex-col max-lg:items-center " >
          <div className="p-3 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 max-lg:w-fit">
            <div className="flex justify-center">
            <img
              src={"https://" + media1.fields.file.url}
              alt="asdf"
              width="350"
              height="128"
              className="h-44"
            />
            </div>
            <div className="flex justify-center">
            <button className="bg-yellow-400 hover:bg-yellow-500 rounded flex justify-center font-bold p-1 bold mt-2">
              <Link href="/about/donde"> {mediaText3}</Link>
              
            </button>
            </div>
          </div>
          <div className="p-3 bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700 max-lg:w-fit">
            <div className="flex justify-center">

            <img
              src={"https://" + media2.fields.file.url}
              alt="asdf"
              width="350"
              height="200"
              className="h-44"
              />
              </div>
            <div className="flex justify-center">
            <button className="bg-yellow-400 hover:bg-yellow-500 rounded w-40 flex justify-center font-bold p-1 bold mt-2">
              <Link href="/about/metodo">{mediaText}</Link>
              
            </button>
            </div>
          </div>
          <div className="p-3 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 justify-center ">
            <div className="flex justify-center">

            <img
              src={"https://" + media3.fields.file.url}
              alt="asdf"
              width="350"
              height="200"
              className="h-44"
              />
              </div>
            <div className="flex justify-center">
            <button className="bg-yellow-400 hover:bg-yellow-500 flex rounded flex justify-center w-40 font-bold p-1 bold mt-2">
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
