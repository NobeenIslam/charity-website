import { Meta, StoryObj } from "@storybook/react";

import { SideBarBottomSheet } from "./SideBarBottomSheet";
import { useState } from "react";
import { Button } from "../../Button";
import React from "react";

const meta: Meta<typeof SideBarBottomSheet> = {
  component: SideBarBottomSheet,
};

export default meta;
type Story = StoryObj<typeof SideBarBottomSheet>;

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
          Open SideBarBottomSheet
        </Button>
        <SideBarBottomSheet
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
    title: "SideBarBottomSheet Title",
  },
};
