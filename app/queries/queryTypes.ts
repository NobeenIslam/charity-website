import {
    Project as SanityProjectType,
  } from "../utilities/schemaTypes";

export type ProjectCardType = Pick<SanityProjectType, "card" | "title" | "_id">;

export type ProjectPageType = Pick<SanityProjectType, "page" | "title" | "_id" | "slug">;

export type ProjectSlugType = Pick<SanityProjectType, "slug">;
