import { Projects } from "@/app/components/Projects";

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
      return <Projects key={block._key} {...block} />;
  }
}
