"use client";

// This component was initially just in the page.tsx. But I think there was a problem with calling
// useNextImageFunction in a server component:
// https://stackoverflow.com/questions/72095900/typeerror-cannot-read-properties-of-null-reading-usememo

import React from "react";
import { HomepageHero } from "../../components/blocks/HomePageHero";
import { PortableText } from "../../utilities/portableText";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "../../utilities/client";
import { ProjectPageType } from "../../queries/queryTypes";

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
      <HomepageHero
        heading={projectPost.title}
        backgroundImage={projectPost.image}
        _type="homepageHero"
      />
      {projectPost.page.primaryTextSection && (
        <PortableText value={projectPost.page.primaryTextSection} />
      )}
      {postImageProps.length >= 1 && (
        <Image
          {...postImageProps[0]}
          alt={"image"}
          objectFit="cover"
          className="rounded-t-lg"
        />
      )}
      {projectPost.page.secondaryTextSection && (
        <PortableText value={projectPost.page.secondaryTextSection} />
      )}
      {postImageProps.length === 2 && (
        <Image
          {...postImageProps[1]}
          alt={"image"}
          objectFit="cover"
          className="rounded-t-lg"
        />
      )}
    </div>
  );
};

export { ProjectPageContent };
