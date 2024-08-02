"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/components/context/CartContext";
import { ClipLoader } from "react-spinners";

const CartSummary = ({}) => {
  const [isLoading, setIsLoading] = useState(false);

  const { getTotalAmount, initiateCheckout, cart } = useCart();

  const handleCheckout = async () => {
    setIsLoading(true);
    await initiateCheckout();
  };

  const isDisabled = cart.length === 0;

  const total = getTotalAmount();
  return (
    <div className="bg-purple-900 p-4 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <span className="font-semibold text-gray-100">Donation Total:</span>
        <span className="font-bold text-xl text-gray-100">£{total}</span>
      </div>
      <Button
        className="w-full font-bold"
        variant={"destructive"}
        onClick={handleCheckout}
        disabled={isDisabled}
      >
        {isLoading ? (
          <ClipLoader
            color={"#ffffff"}
            loading={true}
            size={20}
            aria-label="Loading Spinner"
          />
        ) : (
          "Donate"
        )}
      </Button>
    </div>
  );
};

export { CartSummary };
