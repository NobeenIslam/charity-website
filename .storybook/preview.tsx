import * as React from "react";
import type { Preview } from "@storybook/react";
import "../app/styles/globals.css";
import { roboto as robotoVariable } from "../app/styles";
import localFont from "next/font/local";

//path in localFont here needs to match what is in staticdirs in main.ts
const roboto = localFont({
  variable: "--font-roboto" satisfies typeof robotoVariable,
  src: [
    {
      path: "../fonts/Roboto-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Roboto-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/Roboto-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Roboto-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={`${roboto.variable} font-sans`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
