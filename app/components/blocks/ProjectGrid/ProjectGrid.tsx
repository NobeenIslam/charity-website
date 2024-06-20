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
    <div className="gutter py-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900">{heading}</h2>
        <div className="mt-4 text-gray-600">
          <PortableText value={body} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
        {projectCards}
      </div>
    </div>
  );
};
