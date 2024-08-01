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

// This cache no store thing allows for my sanity changes to be reflected immediately. Was a next caching problem
//www.sanity.io/answers/how-to-disable-cache-in-sanity-io-for-immediate-reflection-of-changes-made-in-the-studio-on-the-blog-

export async function getAllSlugs(): Promise<Slug[]> {
  return client.fetch(allSlugsQuery, {}, { cache: "no-store" });
}

export async function getHomePage(): Promise<SanityPageType> {
  return client.fetch(homepageQuery, {}, { cache: "no-store" });
}

export async function getPageBySlug(slug: string): Promise<SanityPageType> {
  return client.fetch(pageBySlugQuery(slug), {}, { cache: "no-store" });
}

export async function getNavBar(): Promise<SanityNavBarType> {
  return client.fetch(navBarQuery, {}, { cache: "no-store" });
}

export async function getFooter(): Promise<SanityFooterType> {
  return client.fetch(footerQuery, {}, { cache: "no-store" });
}

export async function getProjectCardsForGrid(): Promise<ProjectCardType[]> {
  return client.fetch(projectCardsQuery, {}, { cache: "no-store" });
}

export async function getProjectBySlug(slug: string): Promise<ProjectPageType> {
  return client.fetch(projectBySlugQuery(slug), {}, { cache: "no-store" });
}

export async function getProjectSlugs(): Promise<ProjectSlugType[]> {
  return client.fetch(projectSlugsQuery, {}, { cache: "no-store" });
}

export async function getNotFoundPageData(): Promise<PageMessageType> {
  return client.fetch(notFoundPageQuery, {}, { cache: "no-store" });
}

export async function getSuccessPageData(): Promise<PageMessageType> {
  return client.fetch(successPageQuery, {}, { cache: "no-store" });
}
