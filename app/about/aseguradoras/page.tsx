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
        <h3 className="font-bold mb-5 mt-5">{titleOne}</h3>
        <div className="grid grid-cols-2">
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
        <div className="grid grid-cols-2">
          <img
            src={"https://" + mediaTwo.fields.file.url}
            alt="asdf"
            width="600"
            height="600"
            className="mr-5 "
          />
          {documentToReactComponents(textTwo)}
        </div>
        <h3 className="font-bold mb-2 mt-5">{titleThree}</h3>
        <div className="grid grid-cols-2">
          <img
            src={"https://" + mediaThree.fields.file.url}
            alt="asdf"
            width="450"
            height="450"
            className="mr-5 "
            
          />
          {documentToReactComponents(textThree)}
        </div>

        <AutorMain />
      </div>
    );
  });
}
