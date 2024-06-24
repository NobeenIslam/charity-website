import React from "react";
import type { Metadata } from "next";
import "./styles/globals.css";
import { roboto as robotoVariable } from "./styles";
import localFont from "next/font/local";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

import { getFooter, getNavBar } from "./queries";

const roboto = localFont({
  variable: "--font-roboto" satisfies typeof robotoVariable,
  src: [
    {
      path: "../public/fonts/Roboto-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Roboto-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Roboto-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Roboto-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navBar = await getNavBar();
  const footer = await getFooter();

  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans`}>
        <NavBar {...navBar} />
        <main>{children}</main>
        <Footer {...footer} />
      </body>
    </html>
  );
}
