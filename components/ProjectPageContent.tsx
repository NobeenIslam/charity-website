"use client";

// This component was initially just in the page.tsx. But I think there was a problem with calling
// useNextImageFunction in a server component:
// https://stackoverflow.com/questions/72095900/typeerror-cannot-read-properties-of-null-reading-usememo

import React from "react";
import { PortableText } from "@/utilities/portableText";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "@/utilities/client";
import { ProjectPageType } from "@/queries/queryTypes";
import { ProjectHero } from "./ProejctHero";

export interface ProjectPageContentProps {
  projectPost: ProjectPageType;
}

const ProjectPageContent = ({ projectPost }: ProjectPageContentProps) => {
  const { postImages } = projectPost.page;

  const postImageProps =
    // eslint-disable-next-line react-hooks/rules-of-hooks
    postImages?.map((postImage) => useNextSanityImage(client, postImage)) || [];

  return (
    <div>
      {" "}
      <ProjectHero
        heading={projectPost.title}
        backgroundImage={projectPost.image}
        _type="hero"
        ctaButton={projectPost.card?.ctaButton}
        projectId={projectPost._id}
        projectSummary={projectPost.card?.summary || ''}
      />
      <div className="max-w-7xl my-8 mx-auto p-8 sm:p-10 lg:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectPost.page.primaryTextSection && (
            <div className="prose max-w-none">
              <PortableText value={projectPost.page.primaryTextSection} />
            </div>
          )}
          {postImageProps.length >= 1 && (
            <div>
              {" "}
              <Image
                {...postImageProps[0]}
                alt={"image"}
                objectFit="cover"
                className="my-8"
              />
            </div>
          )}
          {projectPost.page.secondaryTextSection && (
            <div className="prose max-w-none">
              <PortableText value={projectPost.page.secondaryTextSection} />
            </div>
          )}
          {postImageProps.length === 2 && (
            <div>
              <Image
                {...postImageProps[1]}
                alt={"image"}
                objectFit="cover"
                className=" my-8"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { ProjectPageContent };
