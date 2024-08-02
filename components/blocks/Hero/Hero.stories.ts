import { Meta, StoryObj } from "@storybook/react";
import { homepageHeroMock } from "./HeroMock";

import { HomepageHero } from "./Hero";

const meta: Meta<typeof HomepageHero> = {
  component: HomepageHero,
  args: homepageHeroMock,
};

export default meta;
type Story = StoryObj<typeof HomepageHero>;

export const Default: Story = {};
