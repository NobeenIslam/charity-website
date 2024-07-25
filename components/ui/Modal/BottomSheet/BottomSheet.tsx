"use client";
import React from "react";
import { Sheet } from "react-modal-sheet";
import { X } from "lucide-react";
import { Button } from "../../Button";
import { ModalProps } from "../SideBarBottomSheet";
import { fontVariable } from "../../../../../styles";

export const BottomSheet: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title = "Title",
  footer,
}) => {
  return (
    <Sheet isOpen={isOpen} onClose={onClose}>
      {/* There was previously an in-line style applying a font family to the sheet. But that was only for storybook. It actually works fine in the main app */}
      <Sheet.Container>
        <Sheet.Header>
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className={`text-xl font-bold`}>{title}</h2>
            <Button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
              variant={"ghost"}
            >
              <X size={24} />
            </Button>
          </div>
        </Sheet.Header>
        <Sheet.Content className={"p-4"}>{children}</Sheet.Content>
        {footer && (
          <Sheet.Content className={"border-t p-4"}>{footer}</Sheet.Content>
        )}
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
};
