import { Meta, StoryObj } from "@storybook/react";
import { cardMock } from "./CardMock";

import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  component: Card,
  args: cardMock,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {};
