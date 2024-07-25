"use client";

import React from "react";
import { PortableText } from "../../../../utilities/portableText";
import { EngagementBanner as SanityEngagementBannerType } from "../../../../utilities/schemaTypes";

export interface EngagementBannerProps extends SanityEngagementBannerType {}

export const EngagementBanner = ({ heading, body }: EngagementBannerProps) => {
  return (
    <div className="gutter bg-gray-900 text-center text-white">
      <h1 className="text-4xl font-bold mb-4">{heading}</h1>
      <div className="text-lg">
        <PortableText value={body} />
      </div>
    </div>
  );
};
