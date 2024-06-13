"use client";

import React from "react";
import { PortableText } from "../../../lib/portableText";
import { HomepageHero as SanityHomepageHeroType } from "../../../lib/schemaTypes";
import { Button } from "../../ui/Button";
import { client } from "../../../lib/client";
import { useNextSanityImage } from "next-sanity-image";

export interface HomepageHeroProps extends SanityHomepageHeroType {}

export const HomepageHero = ({
  heading,
  description,
  backgroundImage,
  ctaButton,
}: HomepageHeroProps) => {
  const backgroundImageProps = useNextSanityImage(client, backgroundImage, {});

  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImageProps.src})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center text-white p-4">
        <h1 className="text-4xl font-bold mb-4">{heading}</h1>
        <PortableText value={description} />
        <Button className="mt-4" aria-label={ctaButton?.buttonAccessibleLabel}>
          {ctaButton?.buttonText}
        </Button>
      </div>
    </div>
  );
};
