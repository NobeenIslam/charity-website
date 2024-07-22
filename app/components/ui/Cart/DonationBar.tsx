"use client"

import React, { useState } from "react";
import { imageForMocks, ImageType } from "../../../utilities/constants";
import { SideBarBottomSheet } from "../Modal/SideBarBottomSheet";
import { CartProjectDetails } from "./CartProjectDetails";
import { DonationForm } from "./DonationForm";
import { CartItem } from "./CartItem";
import { CartSummary } from "./CartSummary";
import { useCart } from "../../context/CartContext";
import { Button } from "../Button";

type ProjectDataForCartType = {
  id: string;
  title: string;
  summary: string;
  image: ImageType;
};

interface CartViewProps {
  onBackToDonationClick: () => void;
}

interface DonationViewProps {
  projectDatForCart: ProjectDataForCartType;
  onViewCartClick: () => void;
}

const CartView: React.FC<CartViewProps> = ({ onBackToDonationClick }) => {
  const { cart } = useCart();

  return (
    <div>
      {cart.map((item) => (
        <CartItem key={item.projectId} {...item} />
      ))}
      <CartSummary />
      <Button variant={"ghost"} onClick={onBackToDonationClick}>
        Back to Donation
      </Button>
    </div>
  );
};

const DonationView: React.FC<DonationViewProps> = ({
  projectDatForCart,
  onViewCartClick,
}) => {
  const { id, title, image, summary } = projectDatForCart;

  return (
    <div>
      <CartProjectDetails heading={title} text={summary} image={image} />
      <DonationForm
        projectId={id}
        title={title}
        summary={summary}
        image={image}
      />
      <Button variant={"ghost"} onClick={onViewCartClick}>
        View Cart
      </Button>
    </div>
  );
};

export const DonationBar = ({}) => {
  const { isDonationBarOpen, closeDonationBar, currentProject } = useCart();

  const { id, title, image, summary } = currentProject
    ? currentProject
    : { id: "", title: "", image: null, summary: "" };

  const [showDonationView, setShowDonationView] = useState(true);

  const toggleView = () => setShowDonationView(!showDonationView);

  return (
    <SideBarBottomSheet isOpen={isDonationBarOpen} onClose={closeDonationBar}>
      {showDonationView ? (
        <DonationView
          projectDatForCart={{
            id,
            title,
            summary,
            image: image || imageForMocks,
          }}
          onViewCartClick={toggleView}
        />
      ) : (
        <CartView onBackToDonationClick={toggleView} />
      )}
    </SideBarBottomSheet>
  );
};
