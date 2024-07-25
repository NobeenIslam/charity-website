"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "../../../utilities/client";
import Link from "next/link";

import type {
  SanityReference,
  SanityImageCrop,
  SanityImageHotspot,
  SanityImageAsset,
} from "sanity-codegen";
import { Button } from "../Button";

export type ctaType = {
  buttonText?: string;
  buttonAccessibleLabel?: string;
  buttonLink?: string;
};

export interface CardProps {
  title: string;
  body: string;
  cta?: ctaType;
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
  link?: string;
  onClick: (e: React.MouseEvent) => void;
}

export const Card = ({
  title,
  body,
  image,
  link,
  cta,
  onClick = () => {},
}: CardProps) => {
  const imageProps = image
    ? // eslint-disable-next-line react-hooks/rules-of-hooks
      useNextSanityImage(client, image)
    : { src: "" };

  return (
    <Link href={link ? link : ""} passHref>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer border-gray-500 flex flex-col h-full ">
        <div className="relative w-full">
          {image ? (
            <Image
              {...imageProps}
              alt={title}
              objectFit="cover"
              className="rounded-t-lg"
            />
          ) : (
            <Image
              src="/card-fallback.jpg"
              alt={"Fallback Image for Charity"}
              objectFit="cover"
              className="rounded-t-lg"
              width={300}
              height={150}
            />
          )}
        </div>
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-gray-700 mb-4">{body}</p>
          </div>
          <div className="flex ">
            {/* TODO implement onClickFunction and or link */}
            {cta && (
              <Button
                aria-label={cta.buttonAccessibleLabel}
                onClick={onClick} 
              >
                {cta.buttonText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};
