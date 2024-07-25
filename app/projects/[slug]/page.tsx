import React from "react";
import {
  getProjectBySlug,
  getProjectSlugs,
} from '@/queries/queryFunctions';
import { ProjectPageContent } from '@/components/ProjectPageContent';

export const dynamicParams = false;
//Dynamic segments not included in generateStaticParams will return a 404.

export async function generateStaticParams() {
  const postSlugs = await getProjectSlugs();

  return postSlugs.map((postSlug) => ({
    slug: postSlug.slug?.current,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const projectPost = await getProjectBySlug(slug);

  return <ProjectPageContent projectPost={projectPost} />;
}
