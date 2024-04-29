import { PortableText } from "next-sanity";
import { getPageBySlug, getProjects } from "../queries";
import { renderBlocks } from "../lib/renderBlocks";

export default async function About() {
  const pageData = await getPageBySlug("About"); // Must match slug in sanity
  return <div> {renderBlocks(pageData.blocks)}</div>;
}
