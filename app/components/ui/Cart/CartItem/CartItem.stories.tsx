import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { cartItemMock } from "./CartItemMock";

import { CartItem } from "./CartItem";
const meta: Meta<typeof CartItem> = {
  component: CartItem,
  args: cartItemMock,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "400px", padding: "1rem" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CartItem>;

export const Default: Story = {};
