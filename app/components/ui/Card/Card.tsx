"use client";

import React from "react";
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

export interface CardProps {
  title: string;
  cardBody: string;
  ctaText: string;
  cardImage: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
  link: string;
}

export const Card = ({
  title,
  cardBody,
  cardImage,
  link,
  ctaText,
}: CardProps) => {
  const imageProps = useNextSanityImage(client, cardImage);

  return (
    <Link href={link} passHref>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer border-gray-500">
        <div className="relative w-full">
          <Image
            {...imageProps}
            alt={title}
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-gray-700 mb-4">{cardBody}</p>
          </div>
          <div className="flex ">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
              {ctaText}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
