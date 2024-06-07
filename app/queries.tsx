import { Page, Project, NavBar } from "@/app/lib/schemaTypes";
import { client } from "./lib/client";
import { groq } from "next-sanity";

//Defined to exclude Home page which will have no slug
const allSlugsQuery = groq`*[_type == "page"  && defined(slug.current)]{slug}`;

export async function getAllSlugs(): Promise<any> {
  return client.fetch(allSlugsQuery);
}

const pageBySlugQuery = (slug: string) => {
  return groq`
    *[_type == "page" && slug.current == "${slug}" ]{
      title,
      "slug": slug.current,
      blocks[] {
        ...,
      }
    }[0]
  `;
};

export async function getPageBySlug(slug: string): Promise<Page> {
  return client.fetch(pageBySlugQuery(slug));
}

const projectsQuery = groq`*[_type == "project"]{
    ...
  }`;

export async function getProjects(): Promise<Project> {
  return client.fetch(projectsQuery);
}

const homepageQuery = groq`*[_type == "page" && title == "Home"]{
  _id,
  title,
  blocks
}[0]`;

export async function getHomePage(): Promise<Page> {
  return client.fetch(homepageQuery);
}

const navBarQuery = groq`*[_type == "navBar"]{
  title,
  navItems[]{
    title,
    link
  },
  logo{...,asset->}
}[0]
`;

export async function getNavBar(): Promise<NavBar> {
  return client.fetch(navBarQuery);
}
