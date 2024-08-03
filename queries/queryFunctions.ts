import {
  Page as SanityPageType,
  NavBar as SanityNavBarType,
  Footer as SanityFooterType,
} from "@/utilities/schemaTypes";
import {
  allSlugsQuery,
  footerQuery,
  homepageQuery,
  navBarQuery,
  notFoundPageQuery,
  pageBySlugQuery,
  projectBySlugQuery,
  projectCardsQuery,
  projectSlugsQuery,
  successPageQuery,
} from "./queryStrings";
import { client } from "@/utilities/client";
import {
  PageMessageType,
  ProjectCardType,
  ProjectPageType,
  ProjectSlugType,
  Slug,
} from "./queryTypes";

//Was having an issue to do with Next caching and data not being pulled from sanity properly
//www.sanity.io/answers/how-to-disable-cache-in-sanity-io-for-immediate-reflection-of-changes-made-in-the-studio-on-the-blog-
//https://nextjs.org/docs/app/building-your-application/caching#fetch

export function sanityFetch<T>(query: string, params = {}) {
  const cacheOptions =
    process.env.NODE_ENV === "development"
      ? { next: { revalidate: 60} }
      : { next: { revalidate: 3600 } };

  return client.fetch<T>(query, params, cacheOptions);
}

export async function getAllSlugs(): Promise<Slug[]> {
  return sanityFetch(allSlugsQuery);
}

export async function getHomePage(): Promise<SanityPageType> {
  return sanityFetch(homepageQuery);
}

export async function getPageBySlug(slug: string): Promise<SanityPageType> {
  return sanityFetch(pageBySlugQuery(slug));
}

export async function getNavBar(): Promise<SanityNavBarType> {
  return sanityFetch(navBarQuery);
}

export async function getFooter(): Promise<SanityFooterType> {
  return sanityFetch(footerQuery);
}

export async function getProjectCardsForGrid(): Promise<ProjectCardType[]> {
  return sanityFetch(projectCardsQuery);
}

export async function getProjectBySlug(slug: string): Promise<ProjectPageType> {
  return sanityFetch(projectBySlugQuery(slug));
}

export async function getProjectSlugs(): Promise<ProjectSlugType[]> {
  return sanityFetch(projectSlugsQuery);
}

export async function getNotFoundPageData(): Promise<PageMessageType> {
  return sanityFetch(notFoundPageQuery);
}

export async function getSuccessPageData(): Promise<PageMessageType> {
  return sanityFetch(successPageQuery);
}
