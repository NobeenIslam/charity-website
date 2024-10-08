"use client";

import React from "react";
import { Button } from '@/components/ui/Button';
import { Minus, Plus, X } from "lucide-react";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import { client } from '@/utilities/client';
import {
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  SanityReference,
} from "sanity-codegen";
import { useCart } from '@/components/context/CartContext';

export interface CartItemProps {
  projectId: string;
  title: string;
  summary: string;
  image: {
    _type: string;
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
  amount: number;
  quantity: number;
}
const CartItem = ({
  projectId,
  title,
  summary,
  image,
  amount,
  quantity,
}: CartItemProps) => {
  const imageProps = useNextSanityImage(client, image);

  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center space-x-4 py-4 border-b">
      <div className="w-24 h-16 relative">
        <Image
          {...imageProps}
          alt={title}
          // Seems the image I'm using already have a width hard-coded in em. Next Image tag doesn't like using fill at the same time if width is specified. So in-line styles was the way
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          className="rounded"
        />
      </div>
      <div className="flex-grow">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{summary}</p>
        <p className="font-bold">£{amount.toFixed(2)}</p>
      </div>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => updateQuantity(projectId, Math.max(1, quantity - 1))}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span>{quantity}</span>
        <Button
          variant="outline"
          size="icon"
          onClick={() => updateQuantity(projectId, quantity + 1)}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => removeFromCart(projectId)}
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
};

export { CartItem };
