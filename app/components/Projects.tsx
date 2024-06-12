"use client";

import React from "react";
import { PortableText } from "../lib/portableText";
import { Project } from "../lib/schemaTypes";
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
