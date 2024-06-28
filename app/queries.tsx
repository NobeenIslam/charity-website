import {
  Page as SanityPageType,
  Project as SanityProjectType,
  NavBar as SanityNavBarType,
  Footer as SanityFooterType,
} from "./utilities/schemaTypes";
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

export async function getPageBySlug(slug: string): Promise<SanityPageType> {
  return client.fetch(pageBySlugQuery(slug));
}

export type ProjectCardType = Pick<SanityProjectType, "card" | "title" | "_id">;

const projectCardsQuery = groq`*[_type == "project"]{
  _id,
  title,
  card
}`;

export async function getProjectCardsForGrid(): Promise<ProjectCardType[]> {
  return client.fetch(projectCardsQuery);
}

export type ProjectPageType = Pick<SanityProjectType, "page" | "title" | "_id">;

const projectPagesQuery = groq`*[_type == "project"]{
  _id,
  title,
  page
}`;

export async function getProjectPages(): Promise<ProjectPageType[]> {
  return client.fetch(projectPagesQuery);
}


const homepageQuery = groq`*[_type == "page" && title == "Home"]{
  _id,
  title,
  blocks
}[0]`;

export async function getHomePage(): Promise<SanityPageType> {
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

export async function getNavBar(): Promise<SanityNavBarType> {
  return client.fetch(navBarQuery);
}

const footerQuery = groq`*[_type == "footer"]{
  mainText,
  footerLinks[]{
    ...
  },
  socialLinks[]{
    ...
  }
}[0]
`;
export async function getFooter(): Promise<SanityFooterType> {
  return client.fetch(footerQuery);
}
