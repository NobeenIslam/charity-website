"use client";

import { Footer as FooterType } from "../../utilities/schemaTypes";
import React from "react";

export interface FooterProps extends FooterType {}

const Footer = ({}: FooterProps) => {
  return <div>Footer</div>;
};

export { Footer };
