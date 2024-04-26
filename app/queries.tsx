import { Project } from "@/sanity/schemaTypes";
import { client } from "./lib/client";
import { groq } from "next-sanity";

const projectsQuery = groq`*[_type == "project"]{
    ...
  }`;

export async function getProjects(): Promise<Project> {
  return client.fetch(projectsQuery);
}
