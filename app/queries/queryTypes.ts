import { Project as SanityProjectType } from "../utilities/schemaTypes";

export type ProjectCardType = Pick<
  SanityProjectType,
  "card" | "title" | "_id" | "image"
>;

export type ProjectPageType = Pick<
  SanityProjectType,
  "page" | "title" | "_id" | "slug" | "card" | "image"
>;

export type ProjectSlugType = Pick<SanityProjectType, "slug">;
