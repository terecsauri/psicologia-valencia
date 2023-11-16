/* eslint-disable @next/next/no-img-element */
import React from "react";
import { getData } from "@/app/services/fetchService";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import AutorRandom from "@/app/components/autores/AutorRandom";

export const metadata = {
  title: 'Nuestro Método',
}

const landingMetodo = await getData("aboutUsMtodo");

export default function Metodo() {
  return landingMetodo?.map((singlePost: any) => {
    const { title, titulo2, body, body2, body3 , photo, metodo } = singlePost.fields;
    return (
      <div key={metodo} className="mt-5">
        <h1 className="font-bold text-5xl mb-5">{title}</h1>
        <div className="flex justify-center mb-5">
        <img
          src={"https://" + photo.fields.file.url}
          alt="asdf"
          width="600"
          height="600"
        />
        </div>
        <h2 className="mt-5 mb-5">{titulo2}</h2>
        {documentToReactComponents(body)}
        <div className="mt-5 mb-5">{documentToReactComponents(body2)}</div>
        <div className="mt-5 mb-5">{documentToReactComponents(body3)}</div>
        <AutorRandom />
      </div>
    );
  });
}
