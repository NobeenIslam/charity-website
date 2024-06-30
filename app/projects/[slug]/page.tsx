import React from "react";
import {
  getProjectBySlug,
  getProjectSlugs,
} from "../../queries/queryFunctions";
import { HomepageHero } from "../../components/blocks/HomePageHero";
import { PortableText } from "../../utilities/portableText";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "../../utilities/client";

export async function generateStaticParams() {
  const postSlugs = await getProjectSlugs();

  return postSlugs.map((postSlug) => ({
    slug: postSlug.slug,
  }));
}


export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const projectPost = await getProjectBySlug(slug);

  const { postImages } = projectPost.page;

  const postImageProps =
    postImages?.map((postImage) => useNextSanityImage(client, postImage)) || [];

  return (
    <div>
      <HomepageHero
        heading={projectPost.title}
        backgroundImage={projectPost.card?.image}
        _type="homepageHero"
      />
      {projectPost.page?.primaryTextSection && (
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
      {projectPost.page?.secondaryTextSection && (
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
}
