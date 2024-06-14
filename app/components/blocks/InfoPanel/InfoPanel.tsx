"use client";

import React from "react";
import { PortableText } from "../../../lib/portableText";
import { InfoPanel as SanityInfoPanelType } from "../../../lib/schemaTypes";
import { client } from "../../../lib/client";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";

export interface InfoPanelProps extends SanityInfoPanelType {}

export const InfoPanel = ({
  heading,
  image,
  backgroundColour,
  body,
}: InfoPanelProps) => {
  const imageProps = useNextSanityImage(client, image, {});

  return (
    <div className={`gutter ${backgroundColour} flex flex-col md:flex-row items-center md:items-start`}>
    <div className="flex-shrink-0 w-full md:w-1/3 mb-8 md:mb-0">
      <Image
        src={imageProps.src}
        alt="charity-image"
        className="rounded-lg shadow-lg"
        layout="responsive"
        width={800}
        height={600}
      />
    </div>
    <div className="w-full md:w-2/3 md:ml-8 text-center md:text-left">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">{heading}</h2>
      <div className="text-gray-700">
        <PortableText value={body} />
      </div>
    </div>
  </div>
  );
};
