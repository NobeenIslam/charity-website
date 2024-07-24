"use client";

import React from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "../../Button";
import { useCart } from "../../../context/CartContext";

export interface CartIconProps {
  color: string;
}

const CartIcon = ({ color }: CartIconProps) => {
  const { getTotalItems, openCartBar } = useCart();
  const itemCount = getTotalItems();

  //DIdn;t use Button component here, because I needed specific hover styles to match the SVG changing colour

  return (
    <button
      className={`relative p-2 rounded-full transition-colors duration-200 ${
        color === "white" ? "hover:bg-white/20" : "hover:bg-gray-200"
      }`}
      onClick={openCartBar}
      aria-label={`Shopping cart with ${itemCount} items`}
    >
      <ShoppingCart className="h-6 w-6" color={color} />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </button>
  );
};

export { CartIcon };
