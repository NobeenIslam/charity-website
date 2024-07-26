"use client";

import { NavBar as NavBarType } from "@/utilities/schemaTypes";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useMediaQuery } from "@mui/material";
import { breakpoint } from "@/utilities/breakpoints";

import { NavItem } from "@/utilities/schemaTypes";
import { useRouter } from "next/navigation";
import { client } from "@/utilities/client";
import { useNextSanityImage } from "next-sanity-image";
import { CartIcon } from "@/components/ui/Cart/CartIcon";

export interface NavBarProps extends NavBarType {}

interface MobileNavMenuProps {
  navItems: NavItem[];
  toggleMobileNav: () => void;
  isOpen: boolean;
}

const MobileNavMenu = ({
  navItems,
  toggleMobileNav,
  isOpen,
}: MobileNavMenuProps) => {
  const router = useRouter();

  const handleClick = (link: string) => {
    router.push(link);
    toggleMobileNav();
  };
  return (
    <div
      className={`fixed left-0 right-0 top-navbar z-40 bg-gray-100 shadow-lg overflow-hidden border-t border-gray-200
        ${isOpen ? "animate-shutter-down" : "h-0"}
      `}
    >
      <div className="flex flex-col">
        {navItems.map((navItem) => (
          <div
            key={navItem.title}
            className="py-2 border-b border-gray-200 last:border-b-0"
          >
            <Button
              variant={"link"}
              className={
                "text-black text-lg font-semibold hover:text-gray-600 transition-colors w-full text-left"
              }
              onClick={() => handleClick(navItem.link)}
            >
              {navItem.title}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

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

  const toggleMobileNav = () => {
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

  //IsMobile declared here too as otherwise mobile nav could be clicked open and then browser window changes and navbar still stays in the wrong colour

  const iconColour =
    isScrolled || (isMobile && isMobileNavOpen) ? "black" : "white";

  const navBarColour =
    isScrolled || (isMobile && isMobileNavOpen)
      ? "bg-gray-100 "
      : "bg-transparent";

  const HamburgerButton = () => (
    <button
      className={`p-2 rounded-full transition-colors duration-200 ${
        iconColour === "white" ? "hover:bg-white/20" : "hover:bg-gray-200"
      }`}
      onClick={toggleMobileNav}
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
    <div>
      <div
        className={`gutter-x py-4 fixed top-0 left-0 right-0 z-30 flex items-center ${navBarColour} h-navbar`}
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
          </div>
        ) : (
          <div className="flex space-x-9 ml-auto items-center">
            {navLinks}
            <CartIcon color={iconColour} />
          </div>
        )}
      </div>
      {isMobile && isMobileNavOpen && (
        <MobileNavMenu
          navItems={navItems}
          toggleMobileNav={toggleMobileNav}
          isOpen={isMobileNavOpen}
        />
      )}
    </div>
  );
};

export { NavBar };
