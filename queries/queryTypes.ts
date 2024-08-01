import { Project as SanityProjectType } from "@/utilities/schemaTypes";
import { PageMessage as SanityPageMessageType } from "@/utilities/schemaTypes";

export type Slug = {
  slug: {
    current: string;
  };
  _type: "slug";
};

export type ProjectCardType = Pick<
  SanityProjectType,
  "card" | "title" | "_id" | "image"
>;

export type ProjectPageType = Pick<
  SanityProjectType,
  "page" | "title" | "_id" | "slug" | "card" | "image"
>;

export type ProjectSlugType = Pick<SanityProjectType, "slug">;

export type PageMessageType = Pick<
  SanityPageMessageType,
  "title" | "titleColour" | "description" | "descriptionColour" | "ctaButton"
>;
