"use client";

import React, { useState } from "react";
import { PortableText } from "../../../utilities/portableText";
import { ProjectGrid as SanityProjectGridType } from "../../../utilities/schemaTypes";
import { Card } from "../../ui/Card";
import { Button } from "../../ui/Button";
import { ProjectCardType } from "../../../queries/queryTypes";
import { useCart } from "../../context/CartContext";
import { imageForMocks } from "../../../utilities/constants";

export interface ProjectGridProps extends SanityProjectGridType {
  projectCardsData: ProjectCardType[];
}

export const ProjectGrid = ({
  heading,
  body,
  projectCardsData,
  showAllProjects,
}: ProjectGridProps) => {
  const { openDonationBar } = useCart(); // Use the openDonationBar function from context

  const howManyCardsAreInitiallyVisible = 3;
  const [visibleCount, setVisibleCount] = useState(
    howManyCardsAreInitiallyVisible
  );

  const showMoreProjects = () => {
    setVisibleCount(
      (howManyCardsAreCurrentlyVisible) =>
        howManyCardsAreCurrentlyVisible + howManyCardsAreInitiallyVisible
    );
  };

  const showLessProjects = () => {
    setVisibleCount((howManyCardsAreCurrentlyVisible) =>
      Math.max(
        howManyCardsAreCurrentlyVisible - howManyCardsAreInitiallyVisible,
        howManyCardsAreInitiallyVisible
      )
    );
  };

  const projectCards = showAllProjects
    ? projectCardsData.slice(0, visibleCount).map((projectCardData) => {
        const { _id, card, title, image } = projectCardData;

        const handleClickDonate = (e: React.MouseEvent) => {
          e.preventDefault(); // Prevent link of card triggering when clicking button

          openDonationBar(
            _id,
            title || "Title",
            card?.summary || "",
            image || imageForMocks
          ); // Open the donation bar with project details
        };
        return (
          <div key={_id} className="max-w-sm">
            <Card
              title={title || ""}
              body={card?.summary || ""}
              image={image}
              link={card?.link}
              cta={card?.ctaButton}
              onClick={handleClickDonate}
            />
          </div>
        );
      })
    : projectCardsData.map((projectCardData) => {
        const { _id, card, title, image } = projectCardData;

        const handleClickDonate = (e: React.MouseEvent) => {
          e.preventDefault(); // Prevent link of card triggering when clicking button
          openDonationBar(
            _id,
            title || "Title",
            card?.summary || "",
            image || imageForMocks
          ); // Open the donation bar with project details
        };

        return (
          <div key={_id} className="max-w-sm">
            <Card
              title={title || ""}
              body={card?.summary || ""}
              image={image}
              link={card?.link}
              cta={card?.ctaButton}
              onClick={handleClickDonate}
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
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {projectCards}
        </div>
      </div>
      <div className="flex justify-center mt-8 space-x-4">
        {showAllProjects && visibleCount < projectCardsData.length && (
          <div className="flex justify-center mt-8">
            <Button onClick={showMoreProjects} variant="secondary">
              Show More
            </Button>
          </div>
        )}
        {showAllProjects && visibleCount > howManyCardsAreInitiallyVisible && (
          <div className="flex justify-center mt-8">
            <Button onClick={showLessProjects} variant="secondary">
              Show Less
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
