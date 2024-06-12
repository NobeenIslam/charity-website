import { Projects } from "../components/Projects";
import { HomepageHero } from "../components/HomePageHero"
import React from "react";

export function renderBlocks(blocks: any[]) {
  if (!blocks) {
    return [];
  }

  return blocks.map((block: any) => {
    return renderSanityBlock(block);
  });
}

export function renderSanityBlock(block: any) {
  switch (block._type) {
    case "project":
      return <Projects key={block._key} {...block} />
    case "homepageHero":
      return <HomepageHero key={block._key} {...block} ></HomepageHero>
    default:
      return <div>Something has gone wrong with your block</div>
  }
}
