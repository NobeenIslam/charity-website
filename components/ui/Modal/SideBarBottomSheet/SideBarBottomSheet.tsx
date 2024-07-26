"use client";

import { useMediaQuery } from "@mui/material";
import React from "react";
import { breakpoint } from '@/utilities/breakpoints';
import { SideBar } from '@/components/ui/Modal/SideBar';
import { BottomSheet } from '@/components/ui/Modal/BottomSheet';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  footer?: React.ReactNode;
  title?: string;
}

const SideBarBottomSheet = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
}: ModalProps) => {
  const isMobile = useMediaQuery(`(max-width:${breakpoint.sm})`);

  return (
    <>
      {isMobile ? (
        <BottomSheet
          isOpen={isOpen}
          onClose={onClose}
          title={title}
          footer={footer}
        >
          {children}
        </BottomSheet>
      ) : (
        <SideBar
          isOpen={isOpen}
          onClose={onClose}
          title={title}
          footer={footer}
        >
          {children}
        </SideBar>
      )}
    </>
  );
};

export { SideBarBottomSheet };
