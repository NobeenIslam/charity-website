import { Meta, StoryObj } from "@storybook/react";
import { pageMessageMock } from "./PageMessageMock";

import { PageMessage } from "./PageMessage";

const meta: Meta<typeof PageMessage> = {
  component: PageMessage,
  args: pageMessageMock,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PageMessage>;

export const Default: Story = {
  args: pageMessageMock,
};

export const CustomColors: Story = {
  args: {
    titleColour: "blue-200",
    descriptionColour: "green-200",
  },
};
