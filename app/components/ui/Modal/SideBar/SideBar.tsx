import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "../../Button";
import { ModalProps } from "../SideBarBottomSheet";

export const SideBar: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title = "Sidebar",
  footer,
}) => {
  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden transition-all duration-300 ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 ease-in-out ${
          isOpen
            ? "bg-opacity-50 animate-fade-in"
            : "bg-opacity-0 animate-fade-out"
        }`}
        onClick={onClose}
      />
      <div
        className={`absolute top-0 right-0 w-[30rem] h-full bg-white shadow-lg ${
          isOpen ? "animate-slide-in-right" : "animate-slide-out-right"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">{title}</h2>
          <Button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            variant={"ghost"}
          >
            <X size={24} />
          </Button>
        </div>
        <div className="p-4 overflow-y-auto min-h-[100rem]">{children}</div>
        {footer && <div className="border-t p-4">{footer}</div>}
      </div>
    </div>
  );
};
