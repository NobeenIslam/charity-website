import { Meta, StoryObj } from "@storybook/react";

import { BottomSheet } from "./BottomSheet";
import { useState } from "react";
import { Button } from "../../Button";
import React from "react";

const meta: Meta<typeof BottomSheet> = {
  component: BottomSheet,
};

export default meta;
type Story = StoryObj<typeof BottomSheet>;

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <Button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Click Me
        </Button>
        {isOpen && (
          <BottomSheet
            {...args}
            onClose={() => {
              setIsOpen(false);
            }}
          />
        )}
      </div>
    );
  },
  args: {
    isOpen: false,
    children: "Hello",
  },
};
