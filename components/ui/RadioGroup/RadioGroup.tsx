"use client";

import React from "react";
import { Button } from '@/components/ui/Button';

export interface RadioGroupProps {
  options: number[];
  selectedValue: number;
  onChange: (value: number) => void;
}

//If there are 3 or fewer options, we set the number of columns to match the number of options.

const RadioGroup = ({ options, selectedValue, onChange }: RadioGroupProps) => {
  return (
    <div className={`grid ${options.length > 3 ? 'grid-cols-3' : 'grid-cols-' + options.length} gap-2`}>
      {options.map((value) => (
        <Button
          key={value}
          type="button"
          variant={selectedValue === value ? "default" : "outline"}
          onClick={() => onChange(value)}
          className="w-full"

        >
          £{value}
        </Button>
      ))}
    </div>
  );
};

export { RadioGroup };
