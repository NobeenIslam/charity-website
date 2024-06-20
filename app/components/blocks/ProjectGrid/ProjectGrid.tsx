"use client";

import React from "react";
import { PortableText } from "../../../utilities/portableText";
import { ProjectGrid as SanityProjectGridType } from "../../../utilities/schemaTypes";
import { Project as SanityProjectType } from "../../../utilities/schemaTypes";
import { Card } from "@/app/components/ui/Card";

export interface ProjectGridProps extends SanityProjectGridType {
  projectCardsData: SanityProjectType[];
}

export const ProjectGrid = ({
  heading,
  body,
  projectCardsData,
}: ProjectGridProps) => {
  const projectCards = projectCardsData.map((projectCardData) => {
    const { _id, summary, cardImage, title, link, ctaButton } = projectCardData;
    return (
      <div key={_id} className="max-w-sm">
        <Card
          title={title || ""}
          cardBody={summary || ""}
          cardImage={cardImage}
          link={link}
          cta={ctaButton}
        />
      </div>
    );
  });

  return (
    <div>
      <h2>{heading}</h2>
      <PortableText value={body} />
      <div className="grid">{projectCards}</div>
    </div>
  );
};
