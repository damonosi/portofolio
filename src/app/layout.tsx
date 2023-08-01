import Footer from "@/components/navigation/Footer";
import Header from "@/components/navigation/Header";
import Providers from "@/utils/providers";
import "./globals.css";

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
      <body className="bg-white dark:bg-black">
        <Providers>
          <Header />

          <main className="grid grid-cols-1 px-24">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
