import React from "react";
import { getSuccessPageData } from "@/queries/queryFunctions";
import { PageMessage } from "@/components/blocks/PageMessage/PageMessage";

export default async function NotFound() {
  const pageData = await getSuccessPageData();

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
