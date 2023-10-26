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
                  <div key={id} className="mb-6">
                    <img
                      src={"https://" + fotoEquipo.fields.file.url}
                      alt="asdf"
                      width="200"
                      height="200"
                      className="rounded-full"
                    />

                    <p className="mb-3.5">{nombreEquipo}</p>
                    <p>{cargo}</p>
                    <p>{colegiadoEquipo}</p>
                  </div>
                );
              })}
            </div>
            <div>{documentToReactComponents(subtitulo2)}</div>
            <div>{subtituloMejora}</div>
            <div>
              <Link href={"/contacto"}>{reservar}</Link>
              <Link href={"tel:644921185"}>{numTelefono}</Link>
            </div>
            <div>{documentToReactComponents(serviciosTratamientos)}</div>
            <div>{tituloMadridCentro}</div>
            {landingCard1?.map((singleCard: any) => {
              const { slug, fotoLanding, tituloLanding, subtituloLanding } =
                singleCard.fields;
              return (
                <div key={slug}>
                  <img
                    src={"https://" + fotoLanding.fields.file.url}
                    alt="asdf"
                    width="100"
                    height="100"
                  />
                  <div>{documentToReactComponents(tituloLanding)}</div>
                  <div>{subtituloLanding}</div>
                </div>
              );
            })}
            <div>
              <video controls>
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
              <Image
                src={"https://" + fotoEleccion.fields.file.url}
                alt="asdf"
                width={536}
                height={365}
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
