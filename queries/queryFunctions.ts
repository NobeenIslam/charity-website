import {
  Page as SanityPageType,
  NavBar as SanityNavBarType,
  Footer as SanityFooterType,
} from "@/utilities/schemaTypes";
import {
  allSlugsQuery,
  footerQuery,
  homepageQuery,
  navBackgroundQuery,
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
  NavThemeObjectType,
  PageMessageType,
  ProjectCardType,
  ProjectPageType,
  ProjectSlugType,
} from "./queryTypes";

export async function getAllSlugs(): Promise<any> {
  return client.fetch(allSlugsQuery);
}

export async function getHomePage(): Promise<SanityPageType> {
  return client.fetch(homepageQuery);
}

export async function getPageBySlug(slug: string): Promise<SanityPageType> {
  return client.fetch(pageBySlugQuery(slug));
}

export async function getNavBar(): Promise<SanityNavBarType> {
  return client.fetch(navBarQuery);
}

export async function getFooter(): Promise<SanityFooterType> {
  return client.fetch(footerQuery);
}

export async function getProjectCardsForGrid(): Promise<ProjectCardType[]> {
  return client.fetch(projectCardsQuery);
}

export async function getProjectBySlug(slug: string): Promise<ProjectPageType> {
  return client.fetch(projectBySlugQuery(slug));
}

export async function getProjectSlugs(): Promise<ProjectSlugType[]> {
  return client.fetch(projectSlugsQuery);
}

export async function getNotFoundPageData(): Promise<PageMessageType> {
  return client.fetch(notFoundPageQuery);
}

export async function getSuccessPageData(): Promise<PageMessageType> {
  return client.fetch(successPageQuery);
}

export async function getNavBackgroundData(): Promise<NavThemeObjectType> {
  return client.fetch(navBackgroundQuery);
}
