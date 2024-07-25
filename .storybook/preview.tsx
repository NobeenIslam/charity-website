import * as React from "react";
import type { Preview } from "@storybook/react";
import "../styles/globals.css";
import { fontVariable } from "../styles";
import localFont from "next/font/local";
import { CartContext } from "../app/components/context/CartContext";
import { mockContextValue } from "../app/components/context/StorybookCartContext";

//path in localFont here needs to match what is in staticdirs in main.ts
const font = localFont({
  variable: "--font-montserrat" satisfies typeof fontVariable,
  src: [
    {
      path: "../fonts/Montserrat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Montserrat-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/Montserrat-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Montserrat-BoldItalic.ttf",
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
    (Story) => {
      return (
        <CartContext.Provider value={mockContextValue}>
          <div className={`${font.variable} font-sans`}>
            <Story />
          </div>
        </CartContext.Provider>
      );
    },
  ],
};

export default preview;
