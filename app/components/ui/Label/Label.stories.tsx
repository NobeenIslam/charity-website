import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "./Label";
import React from "react";
import { Input } from "../Input";

const meta: Meta<typeof Label> = {
  component: Label,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>
  ),
};
