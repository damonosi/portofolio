"use client";
import Footer from "@/components/navigation/Footer";
import Header from "@/components/navigation/Header";
import Providers from "@/utils/providers";
import { ABeeZee } from "next/font/google";
import "./globals.css";
const abazee = ABeeZee({ weight: "400", subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="dark"
    >
      <head />
      <body className="bg-white dark:bg-black  relative">
        <main className={abazee.className}>
          <Providers>
            <Header />

            <main className="grid grid-cols-1 px-5 md:px-24 bg-light dark:bg-dark transition-colors duration-1000 ">
              {children}
            </main>

            <Footer />
          </Providers>
          <div id="portal" />
        </main>
      </body>
    </html>
  );
}
