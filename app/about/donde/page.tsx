/* eslint-disable @next/next/no-img-element */
import React from "react";
import { getData } from "@/app/services/fetchService";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import AutorRandom from "@/app/components/autores/AutorRandom";

const landingWhere = await getData("aboutUsWhere");

export default function DondeEstamos() {
  return landingWhere?.map((singlePost: any) => {
    const { title, photo, adress, photoMaps, body, sofa, contacto, author } =
      singlePost.fields;
    return (
      <div key={""} className="ml-10 mt-5">
        <h1 className="font-bold text-2xl mb-2">{title}</h1>
        <img
          src={"https://" + photo.fields.file.url}
          alt="asdf"
          width="600"
          height="600"
        />
        <p className="mt-5 mb-5">{adress}</p>
        <img
          src={"https://" + photoMaps.fields.file.url}
          alt="asdf"
          width="300"
          height="300"
          className="mb-5"
        />
        <p className="leading-8">{documentToReactComponents(body)}</p>
        <p className="mt-5 mb-5">{adress}</p>
        <img
          src={"https://" + sofa.fields.file.url}
          alt="asdf"
          width="500"
          height="500"
          className="mb-5"
        />
        <p className="leading-8">{documentToReactComponents(contacto)}</p>

        <form className="flex flex-col ">
          <p className="font-bold">Nombre</p>
          <label>
            {" "}
            <input type="text" name="name" />{" "}
          </label>
          <p className="font-bold">Correo Electrónico</p>
          <label>
            {" "}
            <input type="text" name="email" />{" "}
          </label>
          <p className="font-bold">Asunto</p>
          <label>
            {" "}
            <input type="text" name="asunto" />{" "}
          </label>
          <p className="font-bold">Mensaje</p>
          <label>
            {" "}
            <textarea />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <AutorRandom />
      </div>
    );
  });
}
