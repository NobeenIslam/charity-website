"use client";

import React from "react";
import { Button } from "../../Button";
import { useCart } from "../../../context/CartContext";

const CartSummary = ({}) => {
  const { getTotalAmount } = useCart();

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
        onClick={() => {
          /* TODO: Implement checkout */
        }}
      >
        Donate
      </Button>
    </div>
  );
};

export { CartSummary };
