import { Projects } from "@/components/Projects";
import { getPageBySlug, getProjects } from "./queries";
import { renderBlocks } from "./lib/renderBlocks";

export default async function Home() {
  const pageData = await getPageBySlug("Home");
  console.log(pageData);
  return (
    <div>
      Hello
      {renderBlocks(pageData.blocks)}
    </div>
  );
}
