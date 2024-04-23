import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "p4piayq8", // you can find this in sanity.json
  dataset: "production", // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: "2024-04-23",
});

