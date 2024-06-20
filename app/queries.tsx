import { Page, Project, NavBar } from "@/app/utilities/schemaTypes";
import { client } from "./utilities/client";
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

const projectsGridQuery = groq`*[_type == "project"]{
  _id,
  title,
  summary,
  cardImage,
  link
}`;

export async function getProjectsForGrid(): Promise<Project[]> {
  return client.fetch(projectsGridQuery);
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
  logo
}[0]
`;

export async function getNavBar(): Promise<NavBar> {
  return client.fetch(navBarQuery);
}
