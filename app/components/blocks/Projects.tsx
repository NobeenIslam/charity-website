"use client";

import React from "react";
import { PortableText } from "../../utilities/portableText";
import { Project } from "../../utilities/schemaTypes";
import { Button } from "../ui/Button";

export interface ProjectProps extends Project {}

export const Projects = (props: ProjectProps) => {
  return (
    <div>
      <PortableText value={props?.body} />
      <Button>Hello</Button>
    </div>
  );
};
