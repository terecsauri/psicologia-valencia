/* eslint-disable @next/next/no-img-element */
import { createClient } from "contentful";
import Image from "next/image";
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
          textoPrioridad,
          imagenElegante,
          miraPrecios,
          textoSesion,
          madridPsicologos,
          fotoEleccion,
          textoEleccion,
          textoAyuda,
          fotoAgua,
          textoProceso,
          nuestroCentro,
          botonEspecialidades,
          mapa,
          textoCentro,
          texto900,
          fotoTorres,
          textoBlog,
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
            <div className="text-center">
              {documentToReactComponents(subtitulo2)}
            </div>
            <div className="bg-slate-50 h-20 flex flex-col items-center justify-center">
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
            <div className="text-center">
              {documentToReactComponents(serviciosTratamientos)}
            </div>
            <h2 className="text-center mt-18">{tituloMadridCentro}</h2>
            <div className="flex justify-evenly mb-6">
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
            <div className="mt-6 grid grid-cols-2">
              <video controls width={524} height={414}>
                {"https://" + videoMiPsicologo.fields.file.url}
              </video>
              <div>
                <h2>{tituloExperiencia}</h2>
                <div>{documentToReactComponents(textoSaludEmocional)}</div>
              </div>
            </div>
            <div>{documentToReactComponents(tratamientosPsicologos)}</div>
            <div>{documentToReactComponents(descripcionPilares)}</div>
            <img
              src={"https://" + enLosMedios.fields.file.url}
              alt="asdf"
              width="883"
              height="38"
            />
            <div>{documentToReactComponents(textoPrioridad)}</div>
            {landingCardIcon?.map((singleCardIcon: any) => {
              const { id, tituloIcono, descripcionIcono } =
                singleCardIcon.fields;
              return (
                <div key={id}>
                  <div>{tituloIcono}</div>
                  <div>{documentToReactComponents(descripcionIcono)}</div>
                </div>
              );
            })}
            <img
              src={"https://" + imagenElegante.fields.file.url}
              alt="asdf"
              width={537}
              height={718}
            />
            <div>{miraPrecios}</div>
            <div>{textoSesion}</div>
            <div>{madridPsicologos}</div>
            <div>
              <img
                src={"https://" + fotoEleccion.fields.file.url}
                alt="asdf"
                width="536"
                height="365"
              />
              <div>{documentToReactComponents(textoEleccion)}</div>
            </div>
            <div>
              <div>{documentToReactComponents(textoAyuda)}</div>
              <img
                src={"https://" + fotoAgua.fields.file.url}
                alt="asdf"
                width="536"
                height="365"
              />
            </div>
            <div>{textoProceso}</div>
            <div>
              <Link href={"/contacto"}>{reservar}</Link>
              <Link href={"tel:644921185"}>{numTelefono}</Link>
            </div>
            <div>{nuestroCentro}</div>
            <Link href={"/tratamientos"}>{botonEspecialidades}</Link>
            <div>
              <img
                src={
                  "https://images.ctfassets.net/06jdt9isp37n/4gyAHq4klFPmuNRlU6mylL/5955f2e1ee2d3e0612df9947ecb107f1/15081525278135.jpeg"
                }
                alt="asdf"
                width="524"
                height="393"
              />
              <div>{documentToReactComponents(textoCentro)}</div>
            </div>
            <div>
              <div>{documentToReactComponents(texto900)}</div>
              <img
                src={"https://" + fotoTorres.fields.file.url}
                alt="asdf"
                width="524"
                height="393"
              />
            </div>
            <div>{textoBlog}</div>
            <div>
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
            <div>{documentToReactComponents(psicoEmdr)}</div>
            <div>{faq}</div>
            <div>{documentToReactComponents(preguntasFrecuentes)}</div>
            <AutorRandom />
          </div>
        );
      })}
    </main>
  );
}
