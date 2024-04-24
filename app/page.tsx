import Image from "next/image";
import NavBar from "./components/NavBar";
import { client } from "./lib/client";
import { getProjects } from "./queries";

export default async function Home() {
  const projects = await getProjects();

  console.log(projects, "hello");

  return <div>test</div>;
}
