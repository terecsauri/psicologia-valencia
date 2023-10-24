import { createClient } from "contentful";

const client = createClient({
  space: process.env.SPACE_ID || "",
  accessToken: process.env.ACCESS_TOKEN || ""
});

export const getData = async (contentType: string) => {
  if(!contentType) return

  const response = await client.getEntries({ content_type: contentType })

  return response.items
}