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
export const getFooter = async () => {

  let response = await client.getEntries({ content_type: "footer" })  
  return response.items
}
export const getAboutUs = async () => {

  let response = await client.getEntries({ content_type: "aboutUsMain" })
  
  return response.items
}
export const getAboutUsImages = async () => {

  let response = await client.getEntries({ content_type: "aboutUsImages" })
  
  return response.items
}
