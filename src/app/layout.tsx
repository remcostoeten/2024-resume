import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Remco Stoten - Software Developer Resume",
  description:
    "A comprehensive resume showcasing Remco Stoten's skills and experiences as a software developer.",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <>
          {children}
          <Analytics /> <SpeedInsights />
        </>
      </body>
    </html>
  );
}
