import { Meta, StoryObj } from "@storybook/react";
import { engagementBannerMock } from "./EngagementBannerMock";

import { EngagementBanner } from "./EngagementBanner";

const meta: Meta<typeof EngagementBanner> = {
  component: EngagementBanner,
  args: engagementBannerMock,
};

export default meta;
type Story = StoryObj<typeof EngagementBanner>;

export const Default: Story = {};
