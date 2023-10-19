import { createClient } from "contentful";

const client = createClient({
  space: process.env.SPACE_ID || "",
  accessToken: process.env.ACCESS_TOKEN || ""
});


export const getLandingEntries = async () => {

  let response = await client.getEntries({ content_type: "landingPage" })

  return response.items
}

export const getTeam = async () => {

  let response = await client.getEntries({ content_type: "equipo" })

  return response.items
}