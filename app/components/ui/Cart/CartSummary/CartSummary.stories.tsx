import { Meta, StoryObj } from "@storybook/react";

import { CartSummary } from "./CartSummary";
import React from "react";

const meta: Meta<typeof CartSummary> = {
  component: CartSummary,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "600px", padding: "1rem" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CartSummary>;

export const Default: Story = {};
