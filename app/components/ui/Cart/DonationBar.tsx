"use client";

import React, { useState } from "react";
import { imageForMocks, ImageType } from "../../../utilities/constants";
import { SideBarBottomSheet } from "../Modal/SideBarBottomSheet";
import { CartProjectDetails } from "./CartProjectDetails";
import { DonationForm } from "./DonationForm";
import { CartItem } from "./CartItem";
import { CartSummary } from "./CartSummary";
import { useCart } from "../../context/CartContext";
import { Button } from "../Button";
import { ArrowLeft, ArrowRight } from "lucide-react";

type ProjectDataForCartType = {
  id: string;
  title: string;
  summary: string;
  image: ImageType;
};

interface DonationViewProps {
  projectDataForCart: ProjectDataForCartType;
}

const CartView: React.FC = ({}) => {
  const { cart } = useCart();

  return (
    <div>
      {cart.map((item) => (
        <CartItem key={item.projectId} {...item} />
      ))}
    </div>
  );
};

const DonationView: React.FC<DonationViewProps> = ({ projectDataForCart }) => {
  const { id, title, image, summary } = projectDataForCart;

  return (
    <div className="space-y-8">
      <CartProjectDetails heading={title} text={summary} image={image} />
      <DonationForm
        projectId={id}
        title={title}
        summary={summary}
        image={image}
      />
    </div>
  );
};

export const DonationBar = ({}) => {
  const {
    isDonationBarOpen,
    closeDonationBar,
    isCartViewOpen,
    toggleCartView,
    currentProject,
  } = useCart();

  const { id, title, image, summary } = currentProject
    ? currentProject
    : { id: "", title: "", image: null, summary: "" };

  const footerButtons = (
    <div
      className={`absolute bottom-0 left-0 right-0 p-4 border-t bg-white flex flex-col items-center space-y-5`}
    >
      {isCartViewOpen && (
        <div className="w-full">
          <CartSummary />
        </div>
      )}
      <div className="flex justify-between item-center w-full">
        <Button
          variant="outline"
          onClick={toggleCartView}
          disabled={!isCartViewOpen}
          className="flex items-center"
        >
          <ArrowLeft className="mr-2" /> Donation
        </Button>
        <Button
          variant="outline"
          onClick={toggleCartView}
          disabled={isCartViewOpen}
          className="flex items-center"
        >
          Cart <ArrowRight className="ml-2" />
        </Button>
      </div>
    </div>
  );

  return (
    <SideBarBottomSheet
      isOpen={isDonationBarOpen}
      onClose={closeDonationBar}
      title={"Donations"}
      footer={footerButtons}
    >
      <div className="flex flex-col h-full relative">
        <div className="flex-grow overflow-y-auto pb-16">
          {isCartViewOpen ? (
            <CartView />
          ) : (
            <DonationView
              projectDataForCart={{
                id,
                title,
                summary,
                image: image || imageForMocks,
              }}
            />
          )}
        </div>
      </div>
    </SideBarBottomSheet>
  );
};
