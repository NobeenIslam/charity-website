import { Projects } from "../components/blocks/Projects";
import { HomepageHero } from "../components/blocks/HomePageHero";
import { InfoPanel } from "../components/blocks/InfoPanel";
import React from "react";

export function renderBlocks(blocks: any[]) {
  if (!blocks) {
    return [];
  }

  return blocks.map((block: any) => {
    return renderSanityBlock(block);
  });
}

//Evverytime you create a block you need add it here so it can render properly
export function renderSanityBlock(block: any) {
  switch (block._type) {
    case "project":
      return <Projects key={block._key} {...block} />;
    case "homepageHero":
      return <HomepageHero key={block._key} {...block}></HomepageHero>;
    case "infoPanel":
      return <InfoPanel key={block._key} {...block}></InfoPanel>;
    default:
      return <div>Something has gone wrong with your block</div>;
  }
}
