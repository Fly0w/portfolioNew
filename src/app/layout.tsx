import type { Metadata } from "next";
import {
  Satisfy,
  Cormorant_Garamond,
  Assistant,
  Noto_Sans_JP,
  Tilt_Warp,
} from "next/font/google";
import "./globals.css";

import Nav from "./Nav";
import Footer from "./Footer";

// Fonts import
const satisfy = Satisfy({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-satisfy",
  display: "swap",
});
const cormo = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
  variable: "--font-cormo",
  display: "swap",
});
const assistant = Assistant({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
  variable: "--font-assistant",
  display: "swap",
});
const jap = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
  variable: "--font-jap",
  display: "swap",
});

const titan = Tilt_Warp({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-titan",
  display: "swap",
});
//

export const metadata: Metadata = {
  title: "Florian's Portfolio",
  description: "Thank you for visiting my portfolio !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satisfy.variable} ${cormo.variable} ${assistant.variable} ${jap.variable} ${titan.variable} bg-slate-50 w-screen min-h-screen relative`}
      >
        <Nav />

        {children}
        <Footer />
      </body>
    </html>
  );
}
