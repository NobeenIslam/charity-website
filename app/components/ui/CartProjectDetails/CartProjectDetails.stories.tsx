import { Meta, StoryObj } from "@storybook/react";

import { CartProjectDetails } from "./CartProjectDetails";
import { imageForMocks } from "../../../utilities/constants";
import React from "react";

const meta: Meta<typeof CartProjectDetails> = {
  component: CartProjectDetails,
  args: {
    heading: "Project",
    text: "In the wake of Israeli attacks on Gaza, the majority of the population relies on humanitarian aid to survive.",
    image: imageForMocks,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "600px", padding: "1rem" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CartProjectDetails>;

export const Default: Story = {};
