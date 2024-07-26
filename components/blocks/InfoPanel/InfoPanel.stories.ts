import { Meta, StoryObj } from "@storybook/react";
import { infoPanelMock } from "./InfoPanelMock";

import { InfoPanel } from "./InfoPanel";

const meta: Meta<typeof InfoPanel> = {
  component: InfoPanel,
  args: infoPanelMock,
};

export default meta;
type Story = StoryObj<typeof InfoPanel>;

export const Default: Story = {
};
