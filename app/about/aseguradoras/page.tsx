/* eslint-disable @next/next/no-img-element */
import React from "react";
import { getData } from "@/app/services/fetchService";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import AutorMain from "@/app/components/autores/AutorMain";

const landingAseguradoras = await getData("aboutUsAseguradoras");

export default function Aseguradoras() {
  return landingAseguradoras?.map((singlePost: any) => {
    const {
      title,
      body,
      body2, 
      body3, 
      body4, 
      body5,
      body6, 
      body7,
      titleOne,
      mediaOne,
      textOne,
      titleTwo,
      mediaTwo,
      textTwo,
      titleThree,
      mediaThree,
      textThree,
    } = singlePost.fields;
    return (
      <div key={""} className="ml-10 mt-5 mb-5">
        <h1 className="font-bold mb-2">{title}</h1>
        {documentToReactComponents(body)}
        <div className="mt-5">{documentToReactComponents(body2)}</div>
        <div className="mt-5">{documentToReactComponents(body3)}</div>
        <div className="mt-5">{documentToReactComponents(body4)}</div>
        <div className="mt-5">{documentToReactComponents(body5)}</div>
        <div className="mt-5">{documentToReactComponents(body6)}</div>
        <div className="mt-5">{documentToReactComponents(body7)}</div>
        <h3 className="font-bold mb-5 mt-5">{titleOne}</h3>
        <div className="grid grid-cols-2 max-xl:block">
          <img
            src={"https://" + mediaOne.fields.file.url}
            alt="asdf"
            width="500"
            height="450"
            className="mr-5 "
          />
          {documentToReactComponents(textOne)}
        </div>
        <h3 className="font-bold mb-2 mt-5">{titleTwo}</h3>
        <div className="flex max-xl:block">
          <img
            src={"https://" + mediaTwo.fields.file.url}
            alt="asdf"
            width="340"
            height="200"
            className="mr-5 "
            
          />
          {documentToReactComponents(textTwo)}
        </div>
        <h3 className="font-bold mb-2 mt-5">{titleThree}</h3>
        <div className="flex max-xl:block">
          <img
            src={"https://" + mediaThree.fields.file.url}
            alt="asdf"
            width="450"
            height="450"
            className="mr-5 w-1/2 "
            
            
          />
          {documentToReactComponents(textThree)}
        </div>

        <AutorMain />
      </div>
    );
  });
}
