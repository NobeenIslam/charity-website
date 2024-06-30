import React from "react";
import { getProjectBySlug, getProjectSlugs } from "../../queries/queryFunctions";
import { HomepageHero } from "../../components/blocks/HomePageHero";
import { PortableText } from "../../utilities/portableText";

export async function generateStaticParams() {
  const postSlugs = await getProjectSlugs();


  return postSlugs.map((postSlug) => ({
    slug: postSlug.slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {

  const {slug} = params;

  const projectPost = await getProjectBySlug(slug);

  return <div>
    <HomepageHero heading={projectPost.title} backgroundImage={projectPost.card?.image} _type="homepageHero"/>
    <PortableText value={projectPost.page?.blogPost}/>
    
    </div>;
}
