import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import Nav from "./components/nav-global";
import Link from "next/link";

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
      <body className="selection:bg-indigo-300">
        <div className="fixed w-full h-20 top-0 bg-gradient-to-b from-sky-50"></div>
        <div className="flex mx-auto max-w-[550px] h-[360px] -mt-44 select-none">
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
        <footer className="bg-white rounded-lg shadow m-4 select-none">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center">
              © 2024
              <a href="#" className="hover:underline">
                Nodo Habana™
              </a>
              . All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
              <li>
                <Link
                  href="/#about-us"
                  className="hover:underline me-4 md:me-6"
                >
                  About
                </Link>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );
}
