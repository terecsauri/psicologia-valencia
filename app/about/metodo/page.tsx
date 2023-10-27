/* eslint-disable @next/next/no-img-element */
import React from "react";
import { getData } from "@/app/services/fetchService";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import AutorRandom from "@/app/components/autores/AutorRandom";

const landingMetodo = await getData("aboutUsMtodo");

export default function Metodo() {
  return landingMetodo?.map((singlePost: any) => {
    const { title, body, photo, author } = singlePost.fields;
    return (
      <div key={""} className="mt-5">
        <h1 className="font-bold text-5xl mb-5">{title}</h1>
        <div className="flex justify-center">
        <img
          src={"https://" + photo.fields.file.url}
          alt="asdf"
          width="600"
          height="600"
        />
        </div>
        {documentToReactComponents(body)}
        <AutorRandom />
      </div>
    );
  });
}
