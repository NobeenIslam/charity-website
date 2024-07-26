import { Meta, StoryObj } from "@storybook/react";
import { navBarMock } from "./NavBarMock";

import { NavBar } from "./NavBar";
import React from "react";

const meta: Meta<typeof NavBar> = {
  component: NavBar,
  args: navBarMock,
  decorators: [
    (Story) => (
      <div style={{ height: '150vh', overflow: 'auto', backgroundColor:'black' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Default: Story = {};
