import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET; //Has been set to production on vercel
const apiVersion = "2023-03-04";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});
