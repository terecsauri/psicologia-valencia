import { createClient } from "contentful";
import Image from "next/image";
import { getLandingEntries } from "./services/fetchService";
import { getTeam } from "./services/fetchService";

const landingEntries = await getLandingEntries();
const landingTeam = await getTeam();
export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {landingEntries.items.map((singlePost) => {
        const { slug, ttulo, imagenUnica, descripcion } =
          singlePost.fields;
        return (
          <div key={slug}>
            <h1>{ttulo}</h1>
            <Image src={imagenUnica} />
            <p>{descripcion}</p>
            {landingTeam.items.map((singleMember) => {
              const { slug, fotoEquipo, nombreEquipo, cargo, colegiadoEquipo } =
                singleMember.fields;
                return (
                  <div key={slug}>
                    <Image
                      src={fotoEquipo}
                      width={200}
                      height={200}
                      alt="foto de patata"
                    />
                    <h2>{nombreEquipo}</h2>
                    <h2>{cargo}</h2>
                    <h2>{colegiadoEquipo}</h2>
                  </div>
                );
              })}
            </div>
          );
        })}
      </main>
    );
  }