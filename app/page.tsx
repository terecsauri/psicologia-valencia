/* eslint-disable @next/next/no-img-element */
import { createClient } from "contentful";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

import { getData } from "./services/fetchService";
import AutorRandom from "./components/autores/AutorRandom";

const landingEntries = await getData("landingPage");
const landingTeam = await getData("equipo");
const landingCard1 = await getData("cardLanding");
const landingCardIcon = await getData("cardIconoLanding");

export default async function Home() {
  return (
    <div className="max-lg:block">
      {landingEntries?.map((singlePost: any) => {
        const {
          ttulo,
          descripcion2,
          subtitulo2,
          subtituloMejora,
          reservar,
          numTelefono,
          tituloMadridCentro,
          serviciosTratamientos,
          videoMiPsicologo,
          tituloExperiencia,
          textoSaludEmocional,
          tratamientosPsicologos,
          descripcionPilares,
          enLosMedios,
          pacientes,
          textoPsicosEspecialistas,
          textoPrioridad,
          imagenElegante,
          miraPrecios,
          tituloConsulta,
          textoSesion,
          madridPsicologos,
          fotoEleccion,
          textoEleccion,
          textoAyuda,
          fotoAgua,
          textoProceso,
          nuestroCentro,
          botonEspecialidades,
          textoCentro,
          mapa,
          texto900,
          fotoTorres,
          textoBlog,
          textoVideo,
          videoAnsiedad,
          psicoEmdr,
          faq,
          preguntasFrecuentes,
          id
        } = singlePost.fields;
        return (
          <div key={id} className="flex flex-col justify-center items-center max-lg:max-w-fit ">
            <div>
              <div className='mb-10 bg-gradient-to-r from-emerald-600 to-amber-500  max-lg:block w-screen '>
                <div className='font-bold gap-5 mt-5 text-3xl ml-5 max-lg:font-semibold h-max py-5 flex flex-col mx-5'>
                  <h1 className="xl:text-left justify-center">{ttulo}</h1>
                  <h2 className="text-white justify-center flex   titulo">Cuida tu mente a un precio que te puedas permitir</h2>
                </div>
              </div>
            </div>
            <div className="text-center">
              {documentToReactComponents(descripcion2)}
            </div>
            <div className="grid grid-cols-4 text-base gap-x-20 max-lg:grid-cols-2 max-md:grid-cols-1 justify-center max-lg:items-center">
              {landingTeam?.map((singleMember: any) => {
                const { id, fotoEquipo, nombreEquipo, cargo, colegiadoEquipo } =
                  singleMember.fields;
                return (
                  <div
                    key={id}
                    className="mb-6 flex flex-col justify-center items-center text-center w-62 mx-5"
                  >
                    <img
                      src={"https://" + fotoEquipo.fields.file.url}
                      alt="foto equipo"
                      width="100"
                      height="100"
                      className="rounded-full mb-4 mt-8 h-44 w-44"
                    />
                    <div className="flex flex-col">

                      <div className="mb-3.5 text-sm font-extrabold">
                        {nombreEquipo}
                      </div>
                      <p className="mb-6 text-lg">{cargo}</p>
                      <p className="text-lg">{colegiadoEquipo}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="text-center mt-18">
              {documentToReactComponents(subtitulo2)}
            </div>
            <div className="bg-slate-50 mt-24 h-20 flex flex-col items-center justify-center w-screen ">
              <div className="mt-5 mb-7 font-extrabold">{subtituloMejora}</div>
            </div>
            <div className="flex flex-row justify-center gap-x-2 mt-30 max-lg:block">
              <div className="w-75 h-13 bg-emerald-800 hover:bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-center">
                <Link href={"/contacto"}>{reservar}</Link>
              </div>
              <div className="w-75 h-13 bg-yellow-400  hover:bg-yellow-400 rounded-2xl flex items-center justify-center text-center font-bold max-lg:mt-5">
                <Link href={"tel:644921185"}>{numTelefono}</Link>
              </div>
            </div>
              <hr className="h-1 border-0 bg-yellow-400 mt-5 mb-5 w-64"></hr>
            <div className="text-center mt-16">
              {documentToReactComponents(serviciosTratamientos)}
            </div>
            <h2 className="text-center mt-18">{tituloMadridCentro}</h2>
            <div className="mt-4 mb-6 grid grid-cols-3 max-lg:flex max-lg:flex-col  ">
              {landingCard1?.map((singleCard: any) => {
                const { slug, tituloLanding, subtituloLanding } =
                  singleCard.fields;
                return (
                  <div 
                    key={slug}
                    className="gap-5 mr-5 max-lg:text-center  max-lg:items-center max-lg:flex max-lg:flex-col mb-5 "
                  >
  

                    <div>{documentToReactComponents(tituloLanding)}</div>
                    <div>{subtituloLanding}</div>
                    
                  </div>
                );
              })}
            </div>
            <div>
              <div>
                <h3 className="text-yellow-400 text-center">{tituloExperiencia}</h3>
                <div className=" mt-6">
                  {documentToReactComponents(textoSaludEmocional)}
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              {documentToReactComponents(tratamientosPsicologos)}
            </div>
            <div className="text-center">
              {documentToReactComponents(descripcionPilares)}
            </div>

            <div className="bg-slate-50 h-20 mt-18 mb-24 flex flex-col items-center justify-center">
              <div>{pacientes}</div>
              <div>{textoPsicosEspecialistas}</div>
            </div>
            <div className="grid grid-cols-4 gap-x-8 max-lg:block">
              {landingCardIcon?.map((singleCardIcon: any) => {
                const { id, tituloIcono, descripcionIcono } =
                  singleCardIcon.fields;
                return (
                  <div
                    key={id}
                    className="flex flex-col text-center max-lg:mt-5"
                  >
                    <h3>{tituloIcono}</h3>
                    <div className="leading-7">
                      {documentToReactComponents(descripcionIcono)}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className=" mt-10 gap-x-9 items-center max-xl:block">
                <h2 className="text-yellow-400 mt-10 flex mb-10 justify-center">{tituloConsulta}</h2>
              <div className="flex gap-5 max-xl:block">
                <span className="mt-5 max-lg:mb-5">
                  {documentToReactComponents(textoPrioridad)}
                </span>
              <img
                src={"https://" + imagenElegante.fields.file.url}
                alt="asdf"
                width={537}
                height={318}
                className="float-right h-min"
              />
              </div>
            </div>
            <div className="my-14 flex items-center justify-center">
              <div className="w-96 h-13 border-2 border-black bg-yellow-400 rounded-2xl flex items-center justify-center text-center font-bold">
                <Link href={"/tarifas"}>{miraPrecios}</Link>
              </div>
            </div>
            <div className="bg-slate-50 h-20 mt-18 mb-24 flex flex-col items-center justify-center font-bold">
              <div>{textoSesion}</div>
            </div>
            <h3 className="text-yellow-400 text-center my-14">
              {madridPsicologos}
            </h3>
            <div className="grid grid-cols-2  mb-12 max-lg:block">
              <img
                src={"https://" + fotoEleccion.fields.file.url}
                alt="asdf"
                width="536"
                height="365"
                className="max-lg:mb-5"
              />
              <div className="mx-11">
                {documentToReactComponents(textoEleccion)}
              </div>
            </div>
            <div className="grid grid-cols-2 items-center mb-12 max-lg:block">
              <div className="mx-11">
                {documentToReactComponents(textoAyuda)}
              </div>
              <img
                src={"https://" + fotoAgua.fields.file.url}
                alt="asdf"
                width="536"
                height="365"
                className="max-lg:mt-5"
              />
            </div>
            <div className="bg-slate-50 h-20 mt-18 mb-24 flex flex-col items-center justify-center">
              <div>{textoProceso}</div>
            </div>
            <div className="flex flex-row justify-center gap-x-2 mt-10 max-lg:block ">
              <div className="w-75 h-13 bg-emerald-800 hover:bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-center max-lg:mb-5">
                <Link href={"/contacto"}>{reservar}</Link>
              </div>
              <div className="w-75 h-13 bg-yellow-400 hover:bg-yellow-500 rounded-2xl flex items-center justify-center text-center font-bold">
                <Link href={"tel:644921185"}>{numTelefono}</Link>
              </div>
            </div>
            <div className=" flex flex-col items-center justify-center w-full ">
                    <hr className="h-1 border-0 bg-yellow-600 mt-5 mb-5 w-full"></hr>
              <h3 className="text-yellow-600 mt-20">{nuestroCentro}</h3>
              <div className="w-96 h-13 mt-5 mb-5 bg-emerald-800 hover:bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-center">
                <Link href={"/tratamientos"}>{botonEspecialidades}</Link>
              </div>
                    <hr className="h-1 border-0 bg-yellow-600 mt-5 mb-5 w-full"></hr>
                    <h3 className="text-yellow-600 mt-20">Psicólogos recomendados en Valencia</h3>
                    <hr className="h-1 border-0 bg-yellow-600 mt-5 mb-5 w-full"></hr>
            </div>
            <div className="grid grid-cols-2 gap-x-8 mt-30 max-lg:flex max-lg:flex-col items-center">
              <img
                src={"https://" + mapa.fields.file.url}
                alt="asdf"
                width="524"
                height="393"
                className="max-lg:mb-5 "
              />
              <div className="flex flex-col items-center">{documentToReactComponents(textoCentro)}</div>
            </div>
            <div className="grid grid-cols-2  items-center gap-x-8 mt-30 max-lg:flex max-lg:flex-col">
              <div>{documentToReactComponents(texto900)}</div>
              <img
                src={"https://" + fotoTorres.fields.file.url}
                alt="asdf"
                width="624"
                height="493"
                className="mt-5 mb-5"
                />
            </div>
            <button className="font-bold border border-2 rounded-full p-1 px-4 mt-10"><Link href="/blog">{textoBlog}</Link></button>

            <div className="mt-12">{documentToReactComponents(psicoEmdr)}</div>
            <div className="font-bold italic mt-7 text-center">{faq}</div>
            <div className="faq">
              {documentToReactComponents(preguntasFrecuentes)}
            </div>
            <div className="mb-18">
              <AutorRandom />
            </div>
          </div>
        );
      })}
    </div>
  );
}
