import { Meta, StoryObj } from "@storybook/react";
import { homepageHeroMock } from "./HomepageHeroMock";

import { HomepageHero } from "./HomepageHero";

const meta: Meta<typeof HomepageHero> = {
  component: HomepageHero,
  args: homepageHeroMock,
};

export default meta;
type Story = StoryObj<typeof HomepageHero>;

export const Default: Story = {};
