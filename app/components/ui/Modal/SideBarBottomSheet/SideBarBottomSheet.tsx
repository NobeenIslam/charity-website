"use client";

import { useMediaQuery } from "@mui/material";
import React from "react";
import { breakpoint } from "../../../../utilities/breakpoints";
import { SideBar } from "../SideBar";
import { BottomSheet } from "../BottomSheet";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const SideBarBottomSheet = ({
  isOpen,
  onClose,
  title,
  children,
}: ModalProps) => {
  const isMobile = useMediaQuery(`(max-width:${breakpoint.sm})`);

  return (
    <>
      {isMobile ? (
        <BottomSheet isOpen={isOpen} onClose={onClose} title={title}>
          {children}
        </BottomSheet>
      ) : (
        <SideBar isOpen={isOpen} onClose={onClose} title={title}>
          {children}
        </SideBar>
      )}
    </>
  );
};

export { SideBarBottomSheet };
