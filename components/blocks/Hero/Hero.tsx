"use client";

import React, { useState } from "react";
import { PortableText } from "@/utilities/portableText";
import { Hero as SanityHeroType } from "@/utilities/schemaTypes";
import { Button } from "@/components/ui/Button";
import { client } from "@/utilities/client";
import { useNextSanityImage } from "next-sanity-image";
import { ClipLoader } from "react-spinners"; 

export interface HeroProps extends SanityHeroType {}

export const Hero = ({
  heading,
  description,
  backgroundImage,
  ctaButton,
  contentAlignment,
}: HeroProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const backgroundImageUrl = backgroundImage
    ? // eslint-disable-next-line react-hooks/rules-of-hooks
      useNextSanityImage(client, backgroundImage, {}).src
    : "/card-fallback.jpg";

  const alignmentClasses =
    contentAlignment === "center"
      ? "justify-center text-center"
      : "justify-left text-left";

  const handleDonateClick = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/checkout-all-causes", {
        method: "POST",
      });
      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      console.error("Error initiating checkout:", error);
    } 
  };

  return (
    <div
      className={`gutter relative flex items-center ${alignmentClasses} h-screen bg-cover bg-center `}
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div
        className={`relative z-10 ${alignmentClasses} text-white p-4 w-3/4 md:w-1/2 ml-4`}
      >
        <h1 className="text-6xl font-bold mb-4">{heading}</h1>
        <PortableText value={description} />
        {ctaButton && (
          <Button
            className="mt-4"
            aria-label={ctaButton.buttonAccessibleLabel}
            onClick={handleDonateClick}
            disabled={isLoading}
          >
            {isLoading ? (
              <ClipLoader
                color={"#ffffff"}
                loading={true}
                size={20}
                aria-label="Loading Spinner"
              />
            ) : (
              ctaButton.buttonText
            )}
          </Button>
        )}
      </div>
    </div>
  );
};
