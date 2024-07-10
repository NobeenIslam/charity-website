import React, { useContext, useState } from "react";
import { CartContextType, CartItem } from "./CartContext";
import { imageForMocks } from "../../utilities/constants";

//Storybook error when using context as the stories don't have access to the provider. This fixes.

export const mockCart: CartItem[] = [
  {
    projectId: "1",
    title: "Project 1",
    amount: 100,
    quantity: 1,
    image: imageForMocks,
    summary: "Summary",
  },
  {
    projectId: "2",
    title: "Project 2",
    amount: 200,
    quantity: 1,
    image: imageForMocks,
    summary: "Summary",
  },
];

export const mockContextValue: CartContextType = {
  cart: mockCart,
  addToCart: () => {
    console.log("Adding to Cart");
  },
  removeFromCart: () => {
    console.log("Removing from Cart");
  },
  updateQuantity: () => {
    console.log("Updating Quantity");
  },
  clearCart: () => {
    console.log("Clearing Cart");
  },
  getTotalAmount: () => 100,
  getTotalItems: () => 1,
};
