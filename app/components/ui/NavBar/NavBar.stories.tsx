import { Meta, StoryObj } from "@storybook/react";
import { navBarMock } from "./NavBarMock";

import { NavBar } from "./NavBar";

const meta: Meta<typeof NavBar> = {
  component: NavBar,
  args: navBarMock,
};

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Default: Story = {};
