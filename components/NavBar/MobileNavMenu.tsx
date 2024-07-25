"use client";

import React from "react";
import { Button } from "../ui/Button"; // Assuming you have a Button component
import { NavItem } from "@/app/utilities/schemaTypes";

interface MobileNavMenuProps {
  navItems: NavItem[];
  onClose: () => void;
}

const MobileNavMenu = ({ navItems, onClose }: MobileNavMenuProps) => {
  return (
    <div className="fixed inset-0 z-40 flex flex-col items-center justify-start bg-black bg-opacity-50 mt-[56px]">
      <div className="bg-white w-full shadow-lg animate-dropdown ">
        <div className="flex flex-col">
          {navItems.map((navItem) => (
            <div
              key={navItem.title}
              className="text-center border-t border-b border-gray-200"
            >
              <Button href={navItem.link} variant={"link"} onClick={onClose}>
                {navItem.title}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { MobileNavMenu };
