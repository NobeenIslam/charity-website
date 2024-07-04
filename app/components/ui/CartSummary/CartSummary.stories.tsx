import { Meta, StoryObj } from "@storybook/react";

import { CartSummary } from "./CartSummary";
import React from "react";

const meta: Meta<typeof CartSummary> = {
  component: CartSummary,
  //TODO: Implement Mock context and add decorator to pass required value in
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
