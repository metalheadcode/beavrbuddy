import "./globals.css";

import type { Metadata, Viewport } from "next";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#5456D1",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "BeavrBuddy",
  description:
    "BeavrBuddy swiftly connects clients with reputable contractors tailored to their project requirements and budget. With an in-house inspector ensuring high-quality workmanship, we prioritize trust and satisfaction. Our transparent tendering process guarantees competitive bids from top-tier contractors, while live updates via inspector cams offer real-time project oversight, combating issues like sudden disappearances, unreachability, missed deadlines, and abandoned work.",
  robots: "index, follow",
  authors: [
    {
      name: "metalheadcoder",
      url: "https://ahmadhazim.com",
    },
  ],
  openGraph: {},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
