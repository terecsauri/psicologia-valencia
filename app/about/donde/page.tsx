/* eslint-disable @next/next/no-img-element */
import React from "react";
import { getData } from "@/app/services/fetchService";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import AutorRandom from "@/app/components/autores/AutorRandom";

const landingWhere = await getData("aboutUsWhere");

export default function DondeEstamos() {
  return landingWhere?.map((singlePost: any) => {
    const { title, photo, adress, photoMaps, body, body2, sofa, contacto } =
      singlePost.fields;
    return (
      <div key={""} className="mt-5">
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
        
        <img
          src={"https://" + photoMaps.fields.file.url}
          alt="asdf"
          width="900"
          height="900"
          className="mb-5"
        />

        <div className="leading-8 mt-10">{documentToReactComponents(body)}</div>
        <div className="leading-8 mt-10">{documentToReactComponents(body2)}</div>
        <div className="mt-5 mb-5">{adress}</div>
        <img
          src={"https://" + sofa.fields.file.url}
          alt="asdf"
          width="700"
          height="700"
          className="mb-5"
        />
        <div className="leading-8">{documentToReactComponents(contacto)}</div>

        <form className="flex flex-col mt-5">
          <p className="font-bold">Nombre (requerido)</p>
          <label>
            {" "}
            <input type="text" name="name" className="border-2 border-gray w-1/2" />{" "}
          </label>
          <p className="font-bold">Correo Electrónico (requerido)</p>
          <label>
            {" "}
            <input type="text" name="email" className="border-2 border-gray w-1/2"/>{" "}
          </label>
          <p className="font-bold">Asunto</p>
          <label>
            {" "}
            <input type="text" name="asunto" className="border-2 border-gray w-1/2"/>{" "}
          </label>
          <p className="font-bold">Mensaje</p>
          <label >
            {" "}
            <textarea className="border-2 border-gray w-1/2"/>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <AutorRandom />
      </div>
    );
  });
}
