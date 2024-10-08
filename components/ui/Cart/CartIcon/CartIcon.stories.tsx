import { Meta, StoryObj } from "@storybook/react";

import { CartIcon } from "./CartIcon";

const meta: Meta<typeof CartIcon> = {
  component: CartIcon,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CartIcon>;

export const Default: Story = {};
