import Footer from "@/components/navigation/Footer";
import Header from "@/components/navigation/Header";
import Providers from "@/utils/providers";
import { Abhaya_Libre } from "next/font/google";
import Image from "next/image";
import BackImage from "../../public/imagini/bg2.jpg";
import "./globals.css";
const abhsby = Abhaya_Libre({ weight: "400", subsets: ["latin"] });
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
        <main className={abhsby.className}>
          <Image
            alt="backimg"
            src={BackImage}
            className=" h-screen fixed"
          />
          <Providers>
            <Header />

            <main className="grid grid-cols-1 px-5 md:px-24">{children}</main>

            <Footer />
          </Providers>
          <div id="portal" />
        </main>
      </body>
    </html>
  );
}
