import { client } from "./lib/client";
import { groq } from "next-sanity";

const projectsQuery = groq`*[_type == "project"]{
    ...
  }`;

export async function getProjects() {
  return client.fetch(projectsQuery);
}
