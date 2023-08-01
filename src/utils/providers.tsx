"use client";

import { ThemeProvider } from "next-themes";

interface IProviders {
  children: JSX.Element | JSX.Element[];
}
const Providers = ({ children }: IProviders) => {
  return <ThemeProvider attribute="class"> {children} </ThemeProvider>;
};

export default Providers;
