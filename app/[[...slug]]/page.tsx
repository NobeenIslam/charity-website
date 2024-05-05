import { getAllSlugs, getHomePage, getPageBySlug } from "../queries";
import { renderBlocks } from "../lib/renderBlocks";

export async function generateStaticParams() {
  const slugs: { slug: { current: string; _type: string } }[] =
    await getAllSlugs();

  const paths = slugs.map(({ slug }) => {
    return { slug: slug.current.split("/") };
  });

  return paths;
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const { slug } = params;

  //At homepage, slug is undefined
  const pageData = slug
    ? await getPageBySlug(slug.join("/"))
    : await getHomePage();

  return <div>{renderBlocks(pageData?.blocks)}</div>;
}
