import React from "react";
import type { Metadata } from "next";
import "./styles/globals.css";
import { fontVariable } from "./styles";
import localFont from "next/font/local";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { CartProvider } from "@/app/components/context/CartContext";
import { CartBar, DonationBar } from "./components/ui/Cart/DonationBar";

import { getFooter, getNavBar } from "./queries/queryFunctions";

const font = localFont({
  variable: "--font-montserrat" satisfies typeof fontVariable,
  src: [
    {
      path: "../public/fonts/Montserrat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Montserrat-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Montserrat-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Montserrat-BoldItalic.ttf",
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
      <CartProvider>
        <body className={`${font.variable} font-sans`}>
          <NavBar {...navBar} />
          <main>{children}</main>
          <Footer {...footer} />
          <DonationBar />
          <CartBar />
        </body>
      </CartProvider>
    </html>
  );
}
