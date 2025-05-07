"use client";
import Footer from "@/components/navigation/Footer";
import Header from "@/components/navigation/Header";
import Providers from "@/utils/providers";
import { Spring } from "framer-motion";
import { Alatsi } from "next/font/google";
import "./globals.css";
const abazee = Alatsi({ weight: "400", subsets: ["latin"] });
// Alatsi
// Inconsolata
//
//
//
//
//
//
//
//
//
//
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const transitionSpringPhysics: Spring = {
    type: "spring",
    mass: 0.2,
    stiffness: 80,
    damping: 10,
  };
  const transitionColor = "deepskyblue";
  return (
    <html
      lang="en"
      className="dark"
    >
      <head />
      <body className="bg-white dark:bg-black  relative">
        <div className={abazee.className}>
          <Providers>
            <Header />

            <main className="grid grid-cols-1 px-5 md:px-24 bg-light dark:bg-dark transition-colors duration-1000 ">
              {children}
            </main>

            <Footer />
          </Providers>
          <div id="portal" />
        </div>
      </body>
    </html>
  );
}
