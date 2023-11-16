/* eslint-disable @next/next/no-img-element */
import React from "react";
import { getData } from "@/app/services/fetchService";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import AutorMain from "@/app/components/autores/AutorMain";
import Link from "next/link";

export const metadata = {
  title: 'Equipo',
}

const landingTeam = await getData("aboutUsEquipo");
const landingAutor = await getData("autorUno");

export default function Equipo() {
  return landingTeam?.map((singlePost: any) => {
    const { title, body, bodyMid, bodyBot, photo, button, equipo } = singlePost.fields;
    return (
      <div key={equipo} className="mt-5">
        <h1 className="font-bold mb-2">{title}</h1>

        <div className="flex justify-center relative z-0">
        <img
          src={"https://" + photo.fields.file.url}
          alt="equipo"
          width="1600"
          height="500"
          className="mb-5 blur-sm"
        />
        <div className="absolute mt-20 max-sm:top-0 max-sm:mt-2 z-10 text-white text-center flex flex-col ">
<h3 className="font-bold titulo">Así somos</h3>
<p className="titulo max-sm:text-sm">Conoce nuestro equipo, como somos y como lo hacemos</p>
        </div>
        </div>
        <p className="my-12">
        {documentToReactComponents(body)}
        </p>
        <div className="flex justify-center">
        <button className="bg-yellow-400 hover:bg-yellow-500 p-2 border-2 border-black rounded-full font-bold mb-10">
          <Link href="/tarifas">{button}</Link>
        </button>
        </div>
        {documentToReactComponents(bodyMid)}
        <hr className="h-1 border-0 bg-yellow-400 my-10"></hr>
        {documentToReactComponents(bodyBot)}
        <hr className="h-1  border-0 bg-yellow-400 mt-5 mb-5"></hr>
        <AutorMain />
      </div>
    );
  });
}
