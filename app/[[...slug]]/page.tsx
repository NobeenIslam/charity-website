import { getAllSlugs, getHomePage, getPageBySlug } from "../queries";
import { renderBlocks } from "../lib/renderBlocks";

export const dynamicParams = false;

interface ParamsObject {
  slug?: string[]; // Make the `slug` optional
}
export async function generateStaticParams() {
  const slugs: { slug: { current: string; _type: string } }[] =
    await getAllSlugs();

  //console.log({ slugs });

  const paths: ParamsObject[] = slugs.map(({ slug }) => {
    return { slug: slug.current.split("/") };
  });

  paths.push({ slug: [""] });

  return paths;
}

export default async function Page({ params }: { params: ParamsObject }) {
  const { slug } = params;

  console.log({ slug });

  //At homepage, slug is undefined
  const pageData = slug
    ? await getPageBySlug(slug.join("/"))
    : await getHomePage();

  console.log(pageData);

  return <div>{renderBlocks(pageData?.blocks)}</div>;
}
