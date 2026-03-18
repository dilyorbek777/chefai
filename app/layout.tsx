import type { Metadata } from "next";
import { Syne, Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";


const workSans = Work_Sans({
  variable: "--font-workSans",
  subsets: ["latin"],
});

const sansSyne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} ${sansSyne.variable}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
