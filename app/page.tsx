import { createClient } from "contentful";
import Image from "next/image";

import { getData } from "./services/fetchService";
const landingEntries = await getData("landingPage");
const landingTeam = await getData("equipo");

export default async function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      {landingEntries?.map((singlePost: any) => {
        const { slug, ttulo, imagenUnica, descripcion, } =
          singlePost.fields;
        return (
          
          <div key={slug}>
            <h1>{ttulo}</h1>
            <Image src= {'https://' + imagenUnica.fields.file.url} alt="asdf" width={510} height={150}/>
            <p>{descripcion}</p>
            {landingTeam?.map((singleMember: any) => {
              const { id, fotoEquipo, nombreEquipo, cargo, colegiadoEquipo } =
                singleMember.fields;
              return (
                <div key={id}>
                  <Image
                    src={'https://' + fotoEquipo.fields.file.url} alt="asdf" width={100} height={100}
                  />

  
                  <h2>{nombreEquipo}</h2>
                  <h2>{cargo}</h2>
                  <h2>{colegiadoEquipo}</h2>

                </div>
              );
            })}
            <div>
              <p>rich text aquí</p>
            </div>
          </div>
        );
      })}
    </main>
  );
}
