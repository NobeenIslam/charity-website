import { Meta, StoryObj } from "@storybook/react";

import { DonationForm } from "./DonationForm";
import { imageForMocks } from '@/utilities/constants';
import React from "react";

const meta: Meta<typeof DonationForm> = {
  component: DonationForm,
  tags: ["autodocs"],
  args: {
    projectId: "123",
    title: "Donation Form",
    summary: "Project Summary",
    image: imageForMocks,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "400px", margin: "0 auto", padding: "1rem" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DonationForm>;

export const Default: Story = {};
