import {
  getAllSlugs,
  getHomePage,
  getPageBySlug,
  getProjectCardsForGrid,
  ProjectCardType,
} from "../queries";
import { renderBlocks } from "../utilities/renderBlocks";
import { Project } from "@/app/utilities/schemaTypes";

export const dynamicParams = false;

interface ParamsObject {
  slug?: string[]; // Make the `slug` optional
}
export async function generateStaticParams() {
  const slugs: { slug: { current: string; _type: string } }[] =
    await getAllSlugs();

  const paths: ParamsObject[] = slugs.map(({ slug }) => {
    return { slug: slug.current.split("/") };
  });

  //For homepage route
  paths.push({ slug: [""] });

  return paths;
}

export default async function Page({ params }: { params: ParamsObject }) {
  const { slug } = params;

  //At homepage, slug is undefined
  const pageData = slug
    ? await getPageBySlug(slug.join("/"))
    : await getHomePage();

  let projectCardsData: ProjectCardType[] = [];
  if (pageData.blocks.find((block) => block._type === "projectGrid")) {
    projectCardsData = await getProjectCardsForGrid();
  }

  return <div>{renderBlocks(pageData?.blocks, projectCardsData)}</div>;
}
