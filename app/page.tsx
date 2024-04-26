import { getProjects } from "./queries";

export default async function Home() {
  const projects = await getProjects();
  return <div>{JSON.stringify(projects)}</div>;
}
