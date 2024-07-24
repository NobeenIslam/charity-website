"use client";

import { NavBar as NavBarType } from "../../utilities/schemaTypes";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/Button";
import Image from "next/image";
import BurgerSvg from "@/public/icons/burger.svg";
import CrossSvg from "@/public/icons/cross.svg";
import { useMediaQuery } from "@mui/material";
import { breakpoint } from "@/app/utilities/breakpoints";
import { MobileNavMenu } from "./MobileNavMenu";
import { client } from "@/app/utilities/client";
import { useNextSanityImage } from "next-sanity-image";
import { CartIcon } from "../ui/Cart/CartIcon";

export interface NavBarProps extends NavBarType {}

const NavBar = ({ navItems = [], logo }: NavBarProps) => {
  const isMobile = useMediaQuery(`(max-width:${breakpoint.sm})`);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const imageProps = useNextSanityImage(client, logo, {});

  const navLinks = navItems?.map((navItem) => {
    return (
      <Button
        key={navItem.title}
        href={navItem.link}
        variant={"link"}
        className={`text-lg ${isScrolled ? "text-black" : "text-white"}`}
      >
        {navItem.title}
      </Button>
    );
  });
  return (
    <div
      className={`gutter-x py-4 fixed top-0 left-0 right-0 z-50 flex items-center ${
        isScrolled ? "bg-gray-100 " : "bg-transparent"
      }  transition-colors duration-300`}
    >
      <div className="flex-shrink-0">
        {logo && (
          <Image {...imageProps} width={75} height={75} alt="charity-logo" />
        )}
      </div>
      {isMobile ? (
        <div className="ml-auto mr-2 flex items-center">
          <CartIcon color={`${isScrolled ? "white" : "black"}`} />
          <Button variant={"ghost"} onClick={handleClick}>
            {isMobileNavOpen ? (
              <CrossSvg width={15} height={15} />
            ) : (
              <BurgerSvg width={20} height={20} />
            )}
          </Button>
          {isMobileNavOpen && (
            <MobileNavMenu navItems={navItems} onClose={handleClick} />
          )}
        </div>
      ) : (
        <div className="flex space-x-9 ml-auto items-center">
          {navLinks}
          <CartIcon color={`${isScrolled ? "black" : "white"}`} />
        </div>
      )}
    </div>
  );
};

export { NavBar };
