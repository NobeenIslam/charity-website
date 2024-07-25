"use client";

import { Footer as FooterType } from "../../utilities/schemaTypes";
import React from "react";
import { Button } from "../ui/Button";
import { client } from "../../utilities/client";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";

export interface FooterProps extends FooterType {}

const Footer = ({ mainText, footerLinks, socialLinks }: FooterProps) => {
  const links = footerLinks?.map((footerLink, index) => (
    <React.Fragment key={footerLink._key}>
      <Button
        href={footerLink.link}
        variant="link"
        className=" text-gray-400 hover:text-gray-800"
      >
        {footerLink.title}
      </Button>
      {index < footerLinks.length - 1 && (
        <span className="text-gray-400 mx-1">|</span>
      )}
    </React.Fragment>
  ));

  let iconLinks: React.JSX.Element[] = [];
  if (socialLinks) {
    iconLinks = socialLinks.map((socialLink) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const imageProps = useNextSanityImage(client, socialLink.icon, {});

      return (
        <Button
          key={socialLink._key}
          href={socialLink.link}
          variant="link"
          size="icon"
        >
          <Image {...imageProps} alt="social-link" className="rounded-full" />
        </Button>
      );
    });
  }

  return (
    <footer className="bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-gray-400 mb-4">{mainText}</div>
        <div className="mb-4">{links}</div>
        <div className="flex justify-center space-x-4">{iconLinks}</div>
      </div>
    </footer>
  );
};

export { Footer };
