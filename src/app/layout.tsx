import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import React from "react";
import InProgressToast from "@/components/NoticeToast";

export const metadata: Metadata = {
  title: "Remco Stoeten - Front-end Developer Resume",
  description:
    "Front-end engineer with a graphic design degree, or as we say in the Netherlands, a divjesschuiver. Aspiring to becoming an all-round engineer with knowledge of back-end, dev-ops. If it's tech, I am interested.",
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
          <InProgressToast />
          <Analytics />
          <SpeedInsights />
        </>
      </body>
    </html>
  );
}
