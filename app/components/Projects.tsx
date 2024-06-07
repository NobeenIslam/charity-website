"use client";

import { PortableText } from "@/app/lib/portableText";
import { Project } from "@/app/lib/schemaTypes";
import { Button } from "./ui/Button";

export interface ProjectProps extends Project {}

export const Projects = (props: ProjectProps) => {
  return (
    <div>
      <PortableText value={props?.body} />
      <Button>Hello</Button>
    </div>
  );
};
