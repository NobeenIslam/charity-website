"use client";
import React from "react";
import { Sheet } from "react-modal-sheet";
import { X } from "lucide-react";
import { Button } from "../../Button";
import { ModalProps } from "../SideBarBottomSheet";

export const BottomSheet: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title = "Title",
}) => {
  return (
    <Sheet isOpen={isOpen} onClose={onClose}>
      <Sheet.Container className="font-sans">
        <Sheet.Header>
          <div className="flex justify-between items-center p-4">
            <h2 className="text-xl font-bold">{title}</h2>
            <Button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
              variant={"ghost"}
            >
              <X size={24} />
            </Button>
          </div>
        </Sheet.Header>
        <Sheet.Content>{children}</Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
};
