import { Meta, StoryObj } from "@storybook/react";
import { cardMock } from "./CardMock";
import React from "react";

import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  component: Card,
  args: cardMock,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "400px", margin: "0 auto", padding: "1rem" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {};
