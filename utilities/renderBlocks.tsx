import { HomepageHero } from '@/components/blocks/HomePageHero';
import { InfoPanel } from '@/components/blocks/InfoPanel';
import { EngagementBanner } from '@/components/blocks/EngagementBanner';
import { ProjectGrid } from '@/components/blocks/ProjectGrid';
import React from "react";
import { ProjectCardType } from '@/queries/queryTypes';

export function renderBlocks(
  blocks: any[],
  projectCardsData: ProjectCardType[]
) {
  if (!blocks) {
    return [];
  }

  return blocks.map((block: any) => {
    return renderSanityBlock(block, projectCardsData);
  });
}

//Evverytime you create a block you need add it here so it can render properly
export function renderSanityBlock(block: any, projectCardsData: any[]) {
  switch (block._type) {
    case "homepageHero":
      return <HomepageHero key={block._key} {...block}></HomepageHero>;
    case "infoPanel":
      return <InfoPanel key={block._key} {...block}></InfoPanel>;
    case "engagementBanner":
      return <EngagementBanner key={block._key} {...block}></EngagementBanner>;
    case "projectGrid":
      return (
        <ProjectGrid
          key={block._key}
          {...block}
          projectCardsData={projectCardsData}
        ></ProjectGrid>
      );
    default:
      return <div>Something has gone wrong with your block</div>;
  }
}
