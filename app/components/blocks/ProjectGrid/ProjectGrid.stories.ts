import { Meta, StoryObj } from "@storybook/react";
import { projectGridMock } from "./ProjectGridMock";

import { ProjectGrid } from "./ProjectGrid";

const meta: Meta<typeof ProjectGrid> = {
  component: ProjectGrid,
  args: projectGridMock,
};

export default meta;
type Story = StoryObj<typeof ProjectGrid>;

export const Default: Story = {};
