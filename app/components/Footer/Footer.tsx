"use client";

import { Footer as FooterType } from "../../utilities/schemaTypes";
import React from "react";
import { Button } from "../ui/Button";
import { client } from "@/app/utilities/client";
import { useNextSanityImage } from "next-sanity-image";

export interface FooterProps extends FooterType {}

const Footer = ({ mainText, footerLinks, socialLinks }: FooterProps) => {
  const links = footerLinks?.map((footerLink) => {
    return (
      <Button key={footerLink._key} href={footerLink.link}>
        {footerLink.title}|
      </Button>
    );
  });

  // const iconLinks = socialLinks?.map((socialLink) => {
  //   const imageProps = useNextSanityImage(client, logo, {});

  //   return (
  //     <Button key={socialLink._key} href={socialLink.link}>
  //       <Image></Image>
  //     </Button>
  //   );
  // });

  return (
    <div>
      <div>{mainText}</div>
      <div>{links}</div>
    </div>
  );
};

export { Footer };
