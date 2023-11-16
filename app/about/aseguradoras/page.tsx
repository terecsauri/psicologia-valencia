/* eslint-disable @next/next/no-img-element */
import React from "react";
import { getData } from "@/app/services/fetchService";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import AutorMain from "@/app/components/autores/AutorMain";

const landingAseguradoras = await getData("aboutUsAseguradoras");

export const metadata = {
  title: 'Aseguradoras',
}
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
      titleFour,
      titleOne,

      textOne,
      titleTwo,

      textTwo,
      titleThree,

      textThree,
      aseguradoras
    } = singlePost.fields;
    return (
      <div key={aseguradoras} className="mt-5 mb-5">
        <h1 className="font-bold mb-2">{title}</h1>
        {documentToReactComponents(body)}
        <div className="mt-5">{documentToReactComponents(body2)}</div>
        <div className="mt-5">{documentToReactComponents(body3)}</div>
        <div className="mt-5">{documentToReactComponents(body4)}</div>
        <div className="mt-5">{documentToReactComponents(body5)}</div>
        <h4 className="font-bold mb-2 mt-5">{titleFour}</h4>
        <div className="mt-5">{documentToReactComponents(body6)}</div>
        <div className="mt-5">{documentToReactComponents(body7)}</div>
        <h4 className="font-bold mb-5 mt-5">{titleOne}</h4>
        <div className="gap-5">
          {documentToReactComponents(textOne)}
        </div>
        <h4 className="font-bold mb-2 mt-5">{titleTwo}</h4>
        <div className="gap-5">
          {documentToReactComponents(textTwo)}
        </div>
        <h4 className="font-bold mb-2 mt-5">{titleThree}</h4>
        <div className="gap-5">
          {documentToReactComponents(textThree)}
        </div>
        <AutorMain />
      </div>
    );
  });
}
