import { Meta, StoryObj } from "@storybook/react";

import { SideBar } from "./SideBar";
import { useState } from "react";
import { Button } from "../../Button";
import React from "react";

const meta: Meta<typeof SideBar> = {
  component: SideBar,
};

export default meta;
type Story = StoryObj<typeof SideBar>;

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    console.log({ isOpen });

    return (
      <div>
        <Button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Open Sidebar
        </Button>
        <SideBar
          {...args}
          isOpen={isOpen}
          onClose={() => {
            console.log("Clicked");
            setIsOpen(false);
          }}
        />
      </div>
    );
  },
  args: {
    children: "Hello",
    title: "Sidebar Title",
  },
};
