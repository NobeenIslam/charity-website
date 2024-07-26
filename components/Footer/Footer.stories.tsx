import { Meta, StoryObj } from "@storybook/react";
import { footerMock } from "./FooterMock";

import { Footer } from "./Footer";

const meta: Meta<typeof Footer> = {
  component: Footer,
  args: footerMock,
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {};
