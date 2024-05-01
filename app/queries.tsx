import { Page, Project } from "@/sanity/schemaTypes";
import { client } from "./lib/client";
import { groq } from "next-sanity";

const getAllSlugsQuery = groq`*[_type == "page" ]{slug}`;

export async function getAllSlugs(): Promise<any> {
  return client.fetch(getAllSlugsQuery);
}

const createPageBySlugQuery = (slug: string) => {
  return groq`
    *[_type == "page" && slug.current == "${slug}"]{
      title,
      "slug": slug.current,
      blocks[] {
        ...,
      }
    }[0]
  `;
};

export async function getPageBySlug(slug: string): Promise<Page> {
  return client.fetch(createPageBySlugQuery(slug));
}

const projectsQuery = groq`*[_type == "project"]{
    ...
  }`;

export async function getProjects(): Promise<Project> {
  return client.fetch(projectsQuery);
}
