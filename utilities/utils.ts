import { Slug } from "@/queries/queryTypes";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isNavBarOnLightBackground(
  pathName: string,
  slugs: Slug[]
): boolean {
  // Remove leading slash
  const path = pathName.slice(1);

  // Home page
  if (path === "") {
    return false;
  }

  // Project pages
  if (path.startsWith("projects/")) {
    return false;
  }

  // Success page
  if (path === "success") {
    return true;
  }

  // Check if the path matches any existing slug
  const isExistingPage = slugs.some((slugObj) => slugObj.slug.current === path);
  if (isExistingPage) {
    return false; // Existing pages have dark background
  }

  // If no slug exists, page will 404
  return true;
}
