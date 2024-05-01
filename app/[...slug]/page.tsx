import { Projects } from "@/components/Projects";
import { getAllSlugs, getPageBySlug, getProjects } from "../queries";
import { renderBlocks } from "../lib/renderBlocks";

export async function generateStaticParams() {
  const slugsObjects: { slug: { current: string; _type: string } }[] =
    await getAllSlugs();

  const slugArray = slugsObjects.map((slugObject) => {
    console.log(slugObject);
    return { slug: slugObject.slug.current.split("/") };
  });


  return slugArray;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  console.log({ params });

  const pageData = await getPageBySlug(slug);
  return (
    <div>
      Hello
      {renderBlocks(pageData.blocks)}
    </div>
  );
}
