import React, { createContext, useContext, useState, ReactNode } from "react";
import { ImageType } from "../../utilities/constants";

export interface CartItem {
  projectId: string;
  title: string;
  summary: string;
  image: ImageType;
  amount: number;
  quantity: number;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (projectId: string) => void;
  updateQuantity: (projectId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalAmount: () => number;
  getTotalItems: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.projectId === item.projectId
      );
      if (existingItem) {
        return prevCart.map(
          (cartItem) =>
            cartItem.projectId === item.projectId
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          //Iterates over cartItems and returns the same item until it reaches the one where ID matches and updates the quantity
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (projectId: string) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.projectId !== projectId)
    );
  };

  const updateQuantity = (projectId: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.projectId === projectId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + item.amount * item.quantity, 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalAmount,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
