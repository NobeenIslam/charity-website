"use client";

import { PageMessageType } from "@/queries/queryTypes";
import React from "react";
import { Button } from "@/components/ui/Button";

export interface PageMessageProps extends PageMessageType {}

const PageMessage = ({
  title,
  titleColour,
  description,
  descriptionColour,
  ctaButton,
}: PageMessageProps) => {
  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-white">
      <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center max-w-7xl">
        <h1 className={`text-3xl font-bold mb-4 text-${titleColour}}`}>
          {title}
        </h1>
        <p className={`mb-6 text-${descriptionColour}`}>{description}</p>
        {ctaButton && (
          <Button
            href={ctaButton.buttonLink}
            variant="default"
            aria-label={ctaButton.buttonAccessibleLabel}
          >
            {ctaButton.buttonText}
          </Button>
        )}
      </div>
    </div>
  );
};

export { PageMessage };
