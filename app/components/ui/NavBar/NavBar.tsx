"use client";

import { NavBar as NavBarType } from "../../../lib/schemaTypes";
import React, { useState } from "react";
import { Button } from "../Button";
import Image from "next/image";
import BurgerSvg from "@/public/icons/burger.svg";
import CrossSvg from "@/public/icons/cross.svg";
import { useMediaQuery } from "@mui/material";
import { breakpoint } from "@/app/lib/breakpoints";
import { MobileNavMenu } from "./MobileNavMenu";
import { client } from "@/app/lib/client";
import { useNextSanityImage } from "next-sanity-image";

export interface NavBarProps extends NavBarType {}

const NavBar = ({ navItems = [], logo }: NavBarProps) => {
  const isMobile = useMediaQuery(`(max-width:${breakpoint.sm})`);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleClick = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const imageProps = useNextSanityImage(client, logo, {});

  const navLinks = navItems?.map((navItem) => {
    return (
      <Button key={navItem.title} href={navItem.link} variant={"link"}>
        {navItem.title}
      </Button>
    );
  });
  return (
    <div className="sticky top-0 z-50 flex items-center p-1 bg-white border-b border-gray-200">
      <div className="flex-shrink-0">
        {logo && (
          <Image {...imageProps} width={50} height={50} alt="charity-logo" />
        )}
      </div>
      {isMobile ? (
        <div className="ml-auto mr-2">
          {isMobile && (
            <Button variant={"ghost"} onClick={handleClick}>
              {isMobileNavOpen ? (
                <CrossSvg width={15} height={15} />
              ) : (
                <BurgerSvg width={20} height={20} />
              )}
            </Button>
          )}
          {isMobile && isMobileNavOpen && (
            <MobileNavMenu navItems={navItems} onClose={handleClick} />
          )}
        </div>
      ) : (
        <div className="flex space-x-4">{navLinks}</div>
      )}
    </div>
  );
};

export { NavBar };
