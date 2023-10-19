/* page.tsx */
import Link from "next/link";
import { createClient } from "contentful";
import Image from "next/image";

const client = createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN,
});

const getLandingEntries = async () => {
  const entries = await client.getEntries({ content_type: "landingPage" });
  return entries;
};

const landingEntries = await getLandingEntries();

const getEquipoTodo = async () => {
  const entries = await client.getEntries({ content_type: "equipo" });
  return entries;
};

const landingEquipito = await getEquipoTodo();

const getEquipoNoTodo = async () => {
  const entries = await client.getEntries({ content_type: "equipoNo" });
  return entries;
};

const landingEquipitoNo = await getEquipoNoTodo();

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {landingEntries.items.map((singlePost) => {
        const { slug, ttulo, imagenUnica, descripcion, equipoTodo } =
          singlePost.fields;
        return (
          <div key={slug}>
            <h1>{ttulo}</h1>
            <Image src={imagenUnica} />
            <p>{descripcion}</p>
            {landingEquipito.items.map((singleMember) => {
              const { slug, fotoEquipo, nombreEquipo, cargo, colegiadoEquipo } =
                singleMember.fields;
              return (
                <div key={slug}>
                  <Image
                    src={fotoEquipo}
                    width={200}
                    height={200}
                    alt="foto de miembro"
                  />
                  <h2>{nombreEquipo}</h2>
                  <h2>{cargo}</h2>
                  <h2>{colegiadoEquipo}</h2>
                </div>
              );
            })}
            {landingEquipitoNo.items.map((singleMember) => {
              const { slug, fotoNo, nombreNo, colegiadoNo } =
                singleMember.fields;
              return (
                <div key={slug}>
                  <Image
                    src={fotoNo}
                    width={200}
                    height={200}
                    alt="foto de miembro"
                  />
                  <h2>{nombreNo}</h2>
                  <h2>{colegiadoNo}</h2>
                </div>
              );
            })}
          </div>
        );
      })}
    </main>
  );
}
