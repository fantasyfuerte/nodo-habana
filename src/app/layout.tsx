import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import Nav from "./components/nav-global";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  title: "Nodo Habana",
  description: "Proyecto de desarrollo local",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="selection:bg-indigo-200 selection:text-indigo-950">
        <div className="fixed w-full h-20 top-0 bg-gradient-to-b from-sky-50"></div>
        <div className="flex mx-auto max-w-[550px] h-[360px] -mt-40 select-none">
          <Image
            src="/logo.jpg"
            width={550}
            height={200}
            alt="logo image"
            className="object-cover object-top"
          />
        </div>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
