import { NavThemeObjectType } from "@/queries/queryTypes";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getNavThemeInfo(
  pathName: string,
  dataForNavTheme: NavThemeObjectType
) {
  // Deal with if path is home
  if (pathName === "/") {
    return false;
  }

  //All projects will have hero, so they will be on a background image
  if (pathName.startsWith("/projects/")) {
    return false;
  }

  // Pathname from usePathname comes with  / attached
  let slug = pathName.slice(1);

  // Deal with other types of pages. If slug doesn't exist at all will return null which is the 404 case
  function findPageBySlug(slug: string) {
    const regularPage = dataForNavTheme.pages.find(
      (page) => page.slug === slug
    );
    if (regularPage) return regularPage;

    const messagePage = dataForNavTheme.pageMessages.find(
      (page) => page.slug === slug
    );
    if (messagePage) return messagePage;

    const projectPage = dataForNavTheme.projects.find(
      (project) => project.slug === slug
    );
    if (projectPage) return projectPage;

    return null;
  }

  const currentPageNavThemeInfo = findPageBySlug(slug);

  // Default to true for 404 pages or any unmatched slug
  return currentPageNavThemeInfo?.isNavOnLightBackground ?? true;
}
