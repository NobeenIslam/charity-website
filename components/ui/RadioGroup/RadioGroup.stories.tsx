import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { RadioGroup } from "./RadioGroup";
import React from "react";

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  tags: ["autodocs"],
  argTypes: {
    options: { control: "object" },
    selectedValue: { control: "number" },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "600px", padding: "1rem" }}>
        <Story />
      </div>
    ),
  ],
};

const RadioGroupWrapper = (args: any) => {
  const [selectedValue, setSelectedValue] = useState(args.selectedValue);
  return (
    <RadioGroup
      {...args}
      selectedValue={selectedValue}
      onChange={(value) => {
        setSelectedValue(value);
      }}
    />
  );
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: (args) => <RadioGroupWrapper {...args} />,
  args: {
    options: [10, 20, 50],
    selectedValue: 20,
  },
};

export const SixOptions: Story = {
  render: (args) => <RadioGroupWrapper {...args} />,
  args: {
    options: [10, 20, 50,100,500,1000],
    selectedValue: 20,
  },
};

export const NineOptions: Story = {
  render: (args) => <RadioGroupWrapper {...args} />,
  args: {
    options: [10, 20, 50,100,500,1000,2000,5000,10000],
    selectedValue: 20,
  },
};