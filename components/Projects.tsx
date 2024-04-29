import { PortableText } from "@/app/lib/portableText";
import { Project } from "@/sanity/schemaTypes";

export interface ProjectProps extends Project {}

export const Projects = (props: ProjectProps) => {
  return (
    <div>
      <PortableText value={props?.body} />
    </div>
  );
};
