import { Meta, StoryObj } from "@storybook/react";

import { DonationForm } from "./DonationForm";
import { imageForMocks } from "../../../utilities/constants";

const meta: Meta<typeof DonationForm> = {
  component: DonationForm,
  tags: ["autodocs"],
  args: {
    projectId:'123',
    title: 'Donation Form',
    summary: 'Project Summary',
    image: imageForMocks
  },
};

export default meta;
type Story = StoryObj<typeof DonationForm>;

export const Default: Story = {};
