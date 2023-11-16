
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { getData } from "@/app/services/fetchService";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import AutorRandom from "@/app/components/autores/AutorRandom";
import Form from "@/app/components/Form";

const landingWhere = await getData("aboutUsWhere");
export const metadata = {
  title: 'Dónde estamos',
}
export default function DondeEstamos() {
  

  return landingWhere?.map((singlePost: any) => {
    const { title, photo, adress, photoMaps, body, body2, sofa, contacto, donde } =
      singlePost.fields;
    return (
      <div key={donde} className="mt-5">
        <h1 className="font-bold mb-2">{title}</h1>
        <div className="flex justify-center mb-5">
        <img
          src={"https://" + photo.fields.file.url}
          alt="asdf"
          width="600"
          height="600"
        />
        </div>
        <p className="mt-5 mb-5">{adress}</p>
        
        <div className="flex justify-center">
        <img
          src={"https://" + photoMaps.fields.file.url}
          alt="asdf"
          width="900"
          height="900"
          className="mb-5"
          />
          </div>

        <div className="leading-8 mt-10">{documentToReactComponents(body)}</div>
        <div className="leading-8 mt-10">{documentToReactComponents(body2)}</div>
        <div className="mt-5 mb-5">{adress}</div>
        <div className="flex justify-center">
        <img
          src={"https://" + sofa.fields.file.url}
          alt="asdf"
          width="700"
          height="700"
          className="mb-5"
          />
          </div>
        <div className="leading-8 text-center">{documentToReactComponents(contacto)}</div>

      <Form></Form>
        <AutorRandom />
      </div>
    );
  });
}
