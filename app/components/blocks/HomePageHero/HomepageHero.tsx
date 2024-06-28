"use client";

import React from "react";
import { PortableText } from "../../../utilities/portableText";
import { HomepageHero as SanityHomepageHeroType } from "../../../utilities/schemaTypes";
import { Button } from "../../ui/Button";
import { client } from "../../../utilities/client";
import { useNextSanityImage } from "next-sanity-image";

export interface HomepageHeroProps extends SanityHomepageHeroType {}

export const HomepageHero = ({
  heading,
  description,
  backgroundImage,
  ctaButton,
  contentAlignment,
}: HomepageHeroProps) => {
  const backgroundImageProps = useNextSanityImage(client, backgroundImage, {});

  const alignmentClasses =
    contentAlignment === "center"
      ? "justify-center text-center"
      : "justify-left text-left";

  return (
    <div
      className={`gutter relative flex ${alignmentClasses} h-screen bg-cover bg-center `}
      style={{
        backgroundImage: `url(${backgroundImageProps.src})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div
        className={`relative z-10 ${alignmentClasses} text-white p-4 w-3/4 md:w-1/2 ml-4`}
      >
        <h1 className="text-6xl font-bold mb-4">{heading}</h1>
        <PortableText value={description} />
        <Button className="mt-4" aria-label={ctaButton?.buttonAccessibleLabel}>
          {ctaButton?.buttonText}
        </Button>
      </div>
    </div>
  );
};
