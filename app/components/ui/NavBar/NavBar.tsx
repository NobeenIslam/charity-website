"use client";

import { NavBar as NavBarType } from "@/app/lib/schemaTypes";
import React from "react";
import { Button } from "../Button";
import Image from "next/image";
import BurgerSvg from "@/public/icons/burger.svg";
import { useMediaQuery } from "@mui/material";
import { breakpoint } from "@/app/lib/breakpoints";

export interface NavBarProps extends NavBarType {}

const NavBar = ({ navItems, logo }: NavBarProps) => {
  //console.log(navItems, logo);
  const isMobile = useMediaQuery(`(max-width:${breakpoint.sm})`);

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
        <Image src={logo.url} width={50} height={50} alt="charity-logo" />
      </div>
      {isMobile ? (
        <div className="ml-auto mr-2">
          {isMobile && (
            <Button variant={"ghost"}>
              <BurgerSvg width={20} height={20} />
            </Button>
          )}
        </div>
      ) : (
        <div className="flex space-x-4">{navLinks}</div>
      )}
    </div>
  );
};

export { NavBar };
