import Image from "next/image";
import { Button } from "@/components/ui/Button";
import React from "react";
import { getNotFoundPageData } from "@/queries/queryFunctions";
import { PageMessage } from "@/components/blocks/PageMessage/PageMessage";

export default async function NotFound() {
  const pageData = await getNotFoundPageData();

  return (
    <PageMessage
      title={pageData.title}
      titleColour={pageData.titleColour}
      description={pageData.description}
      descriptionColour={pageData.descriptionColour}
      ctaButton={pageData.ctaButton}
    />
  );
}
