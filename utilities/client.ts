import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NODE_ENV === 'development' ? 'development' : 'production'; //development and production are the actual names of the datasets
const apiVersion = "2023-03-04";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});
