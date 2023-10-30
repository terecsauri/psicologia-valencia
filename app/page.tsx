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
    <main className="flex min-h-screen flex-col items-center justify-between">
      {landingEntries?.map((singlePost: any) => {
        const {
          slug,
          ttulo,
          imagenUnica,
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
        } = singlePost.fields;
        return (
          <div key={slug}>
            <h1>{ttulo}</h1>
            <div className="flex justify-center">
              <img
                src={"https://" + imagenUnica.fields.file.url}
                alt="asdf"
                width="900"
                height="271"
              />
            </div>
            <div className="text-center">
              {documentToReactComponents(descripcion2)}
            </div>
            <div className="grid grid-cols-4 text-base gap-x-20">
              {landingTeam?.map((singleMember: any) => {
                const { id, fotoEquipo, nombreEquipo, cargo, colegiadoEquipo } =
                  singleMember.fields;
                return (
                  <div
                    key={id}
                    className="mb-6 flex flex-col justify-center items-center text-center w-62"
                  >
                    <img
                      src={"https://" + fotoEquipo.fields.file.url}
                      alt="asdf"
                      width="200"
                      height="200"
                      className="rounded-full mb-4 mt-8"
                    />

                    <p className="mb-3.5 text-sm font-extrabold">
                      {nombreEquipo}
                    </p>
                    <p className="mb-6 text-lg">{cargo}</p>
                    <p className="text-lg">{colegiadoEquipo}</p>
                  </div>
                );
              })}
            </div>
            <div className="text-center mt-18">
              {documentToReactComponents(subtitulo2)}
            </div>
            <div className="bg-slate-50 mt-24 h-20 flex flex-col items-center justify-center">
              <div className="mt-5 mb-7 font-extrabold">{subtituloMejora}</div>
            </div>
            <div className="flex flex-row justify-center gap-x-2 mt-30">
              <div className="w-75 h-13 bg-emerald-800 text-white rounded-2xl flex items-center justify-center text-center">
                <Link href={"/contacto"}>{reservar}</Link>
              </div>
              <div className="w-75 h-13 bg-yellow-400 rounded-2xl flex items-center justify-center text-center font-bold">
                <Link href={"tel:644921185"}>{numTelefono}</Link>
              </div>
            </div>
            <div className="text-center mt-16">
              {documentToReactComponents(serviciosTratamientos)}
            </div>
            <h2 className="text-center mt-18">{tituloMadridCentro}</h2>
            <div className="flex justify-evenly mt-4 mb-6">
              {landingCard1?.map((singleCard: any) => {
                const { slug, fotoLanding, tituloLanding, subtituloLanding } =
                  singleCard.fields;
                return (
                  <div
                    key={slug}
                    className="w-85 flex flex-col justify-center items-center"
                  >
                    <img
                      src={"https://" + fotoLanding.fields.file.url}
                      alt="asdf"
                      width="152"
                      height="152"
                    />
                    <div>{documentToReactComponents(tituloLanding)}</div>
                    <div>{subtituloLanding}</div>
                  </div>
                );
              })}
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8">
              <video controls width={524} height={414}>
                {"https://" + videoMiPsicologo.fields.file.url}
              </video>
              <div>
                <h3 className="text-yellow-400">{tituloExperiencia}</h3>
                <div className="text-sm mt-6">
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
            <div className="flex justify-center mb-2 mt-18">
              <img
                src={"https://" + enLosMedios.fields.file.url}
                alt="asdf"
                width="883"
                height="38"
              />
            </div>
            <div className="bg-slate-50 h-20 mt-18 mb-24 flex flex-col items-center justify-center">
              <div>{pacientes}</div>
              <div>{textoPsicosEspecialistas}</div>
            </div>
            <div className="grid grid-cols-4 gap-x-8">
              {landingCardIcon?.map((singleCardIcon: any) => {
                const { id, tituloIcono, descripcionIcono } =
                  singleCardIcon.fields;
                return (
                  <div
                    key={id}
                    className="flex flex-col items-center text-center"
                  >
                    <h3>{tituloIcono}</h3>
                    <div className="leading-7">
                      {documentToReactComponents(descripcionIcono)}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="grid grid-cols-2 mt-36 gap-x-9 items-center">
              <div>
                <h2 className="text-yellow-400">{tituloConsulta}</h2>
                <div className="mt-5">
                  {documentToReactComponents(textoPrioridad)}
                </div>
              </div>
              <img
                src={"https://" + imagenElegante.fields.file.url}
                alt="asdf"
                width={537}
                height={718}
              />
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
            <div className="grid grid-cols-2 items-center mb-12">
              <img
                src={"https://" + fotoEleccion.fields.file.url}
                alt="asdf"
                width="536"
                height="365"
              />
              <div className="mx-11">
                {documentToReactComponents(textoEleccion)}
              </div>
            </div>
            <div className="grid grid-cols-2 items-center mb-12">
              <div className="mx-11">
                {documentToReactComponents(textoAyuda)}
              </div>
              <img
                src={"https://" + fotoAgua.fields.file.url}
                alt="asdf"
                width="536"
                height="365"
              />
            </div>
            <div className="bg-slate-50 h-20 mt-18 mb-24 flex flex-col items-center justify-center">
              <div>{textoProceso}</div>
            </div>
            <div className="flex flex-row justify-center gap-x-2 mt-30">
              <div className="w-75 h-13 bg-emerald-800 text-white rounded-2xl flex items-center justify-center text-center">
                <Link href={"/contacto"}>{reservar}</Link>
              </div>
              <div className="w-75 h-13 bg-yellow-400 rounded-2xl flex items-center justify-center text-center font-bold">
                <Link href={"tel:644921185"}>{numTelefono}</Link>
              </div>
            </div>
            <div className="h-70 flex flex-col items-center justify-center">
              <h3 className="text-yellow-400">{nuestroCentro}</h3>
              <div className="w-96 h-13 mt-5 bg-emerald-800 text-white rounded-2xl flex items-center justify-center text-center">
                <Link href={"/tratamientos"}>{botonEspecialidades}</Link>
              </div>
            </div>
            <div className="flex flex-row justify-center gap-x-8 mt-30">
              <img
                src={"https://" + mapa.fields.file.url}
                alt="asdf"
                width="524"
                height="393"
              />
              <div>{documentToReactComponents(textoCentro)}</div>
            </div>
            <div className="flex flex-row justify-center gap-x-8 mt-30">
              <div>{documentToReactComponents(texto900)}</div>
              <img
                src={"https://" + fotoTorres.fields.file.url}
                alt="asdf"
                width="524"
                height="393"
              />
            </div>
            <div className="text-center font-bold">{textoBlog}</div>
            <h2 className="text-emerald-800 mt-12 text-center">{textoVideo}</h2>
            <div className="mt-16 ml-16">
              <Link
                href={
                  "https://www.youtube.com/watch?v=ihW_zHCskzs&feature=youtu.be"
                }
              >
                <img
                  src={"https://" + videoAnsiedad.fields.file.url}
                  alt="asdf"
                  width="400"
                  height="300"
                />
              </Link>
            </div>
            <div className="mt-12">{documentToReactComponents(psicoEmdr)}</div>
            <div className="font-bold italic mt-7 text-center">{faq}</div>
            <div className="faq">{documentToReactComponents(preguntasFrecuentes)}</div>
            <div className="mb-18">
              <AutorRandom />
            </div>
          </div>
        );
      })}
    </main>
  );
}
