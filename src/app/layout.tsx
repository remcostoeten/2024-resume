import { ReactNode } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import InProgressToast from "@/components/NoticeToast";
import LanguageSwitcher from "@/components/languageToggle";
import PosthogProvider from "@/core/PosthogProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <PosthogProvider>
      <html lang="en" className={inter.className}>
        <body>
          <>
            <LanguageSwitcher />
            {children}
            <InProgressToast />
            <Analytics />
            <SpeedInsights />
          </>
        </body>
      </html>
    </PosthogProvider>
  );
}
