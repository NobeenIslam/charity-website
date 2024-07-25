"use client";

import { NavBar as NavBarType } from '@/utilities/schemaTypes';
import React, { useEffect, useState } from "react";
import { Button } from '@/components/ui/Button';
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useMediaQuery } from "@mui/material";
import { breakpoint } from '@/utilities/breakpoints';
import { MobileNavMenu } from "./MobileNavMenu";
import { client } from '@/utilities/client';
import { useNextSanityImage } from "next-sanity-image";
import { CartIcon } from '@/components/ui/Cart/CartIcon';

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

  const iconColour = isScrolled ? "black" : "white";

  const HamburgerButton = () => (
    <button
      className={`p-2 rounded-full transition-colors duration-200 ${
        iconColour === "white" ? "hover:bg-white/20" : "hover:bg-gray-200"
      }`}
      onClick={handleClick}
      aria-label={isMobileNavOpen ? "Close menu" : "Open menu"}
    >
      {isMobileNavOpen ? (
        <X className="h-6 w-6" color={iconColour} />
      ) : (
        <Menu className="h-6 w-6" color={iconColour} />
      )}
    </button>
  );

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
        <div className="ml-auto mr-2 flex items-center space-x-2">
          <CartIcon color={iconColour} />
          <HamburgerButton />
          {isMobileNavOpen && (
            <MobileNavMenu navItems={navItems} onClose={handleClick} />
          )}
        </div>
      ) : (
        <div className="flex space-x-9 ml-auto items-center">
          {navLinks}
          <CartIcon color={iconColour} />
        </div>
      )}
    </div>
  );
};

export { NavBar };
