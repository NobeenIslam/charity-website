import { getAllSlugs, getHomePage, getPageBySlug } from "../queries";
import { renderBlocks } from "../lib/renderBlocks";

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

  paths.push({ slug: [""] });

  return paths;
}

export default async function Page({ params }: { params: ParamsObject }) {
  const { slug } = params;

  //At homepage, slug is undefined
  const pageData = slug
    ? await getPageBySlug(slug.join("/"))
    : await getHomePage();

  return <div>{renderBlocks(pageData?.blocks)}</div>;
}
