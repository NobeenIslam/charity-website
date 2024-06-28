import React from "react";
import { getProjectPages } from "../../queries";

export async function generateStaticParams() {
  const posts = await getProjectPages();

  console.log(posts)

  return posts.map((post) => ({
    slug: "hello",
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>;
}
