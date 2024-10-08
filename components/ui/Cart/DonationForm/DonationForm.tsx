"use client";

import React, { useState } from "react";
import { ImageType } from '@/utilities/constants';
import { RadioGroup } from '@/components/ui/RadioGroup/RadioGroup';
import { Label } from '@/components/ui/Label';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/components/context/CartContext';

interface DonationFormProps {
  projectId: string;
  title: string;
  summary: string;
  image: ImageType;
}

const DonationForm = ({
  projectId,
  title,
  summary,
  image,
}: DonationFormProps) => {
  const [amount, setAmount] = useState<number>(30);
  const [customAmount, setCustomAmount] = useState<string>("");
  const { addToCart, toggleCartView } = useCart();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const donationAmount = customAmount ? parseFloat(customAmount) : amount;
    addToCart({
      projectId,
      title,
      summary,
      image,
      amount: donationAmount,
      quantity: 1,
    });
    toggleCartView();
  };

  const handleAmountChange = (selectedAmount: number) => {
    setAmount(selectedAmount);
    setCustomAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <RadioGroup
        options={[30, 50, 100, 500, 1000, 2000, 5000, 10000, 30000]}
        selectedValue={amount}
        onChange={handleAmountChange}
      />
      <div>
        <Label htmlFor="custom-amount">Other amount</Label>
        <Input
          type="number"
          id="custom-amount"
          value={customAmount}
          onChange={(e) => {
            setCustomAmount(e.target.value);
            setAmount(0);
          }}
          placeholder="Enter custom amount"
          min="0"
        />
      </div>
      <Button type="submit" className="w-full">
        Add Donation
      </Button>
    </form>
  );
};

export { DonationForm };
