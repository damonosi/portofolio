"use client";

import StoreProvider from "@/app/StoreProvider";
import { ThemeProvider } from "next-themes";
import { JSX } from "react";

interface IProviders {
  children: JSX.Element | JSX.Element[];
}
const Providers = ({ children }: IProviders) => {
  return (
    <ThemeProvider attribute="class">
      <StoreProvider>{children}</StoreProvider>{" "}
    </ThemeProvider>
  );
};

export default Providers;
