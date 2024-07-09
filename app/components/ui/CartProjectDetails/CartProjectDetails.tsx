"use client";

import React from "react";
import { ImageType } from "../../../utilities/constants";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import { client } from "../../../utilities/client";

export interface CartProjectDetailsProps {
  heading: string;
  text: string;
  image: ImageType;
}

const CartProjectDetails = ({
  heading,
  text,
  image,
}: CartProjectDetailsProps) => {
  const imageProps = useNextSanityImage(client, image);

  return (
    <div className="flex items-center p-4 rounded-lg ">
      <div className="flex-grow pr-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{heading}</h2>
        <p className="text-sm text-gray-600">{text}</p>
      </div>
      <div className="w-24 h-16 relative flex-shrink-0">
        <Image
          {...imageProps}
          alt={heading}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          className="rounded"
        />
      </div>
    </div>
  );
};

export { CartProjectDetails };
