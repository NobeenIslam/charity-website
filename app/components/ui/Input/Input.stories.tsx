import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";
import React from "react";

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="max-w-sm ">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    type: "email",
    placeholder: "Email",
  },
};
