import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { cfg } from "@/lib/cfg";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Remco Stoeten - Senior Software Engineer Resume",
  description: "Professional resume and portfolio of Remco Stoeten, showcasing expertise in full-stack development, software architecture, and modern web technologies.",
  
  openGraph: {
    title: "Remco Stoeten - Senior Software Engineer Resume",
    description: "Professional resume and portfolio of Remco Stoeten, showcasing expertise in full-stack development, software architecture, and modern web technologies.",
    type: "website",
    url: cfg.BASE_URL,
    siteName: "Remco Stoeten Resume",
    locale: "en_US",
    images: [
      {
        url: `${cfg.BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Remco Stoeten - Resume",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Remco Stoeten - Senior Software Engineer Resume",
    description: "Professional resume and portfolio of Remco Stoeten",
    images: [`${cfg.BASE_URL}/og-image.jpg`],
    creator: cfg.TWITTER_HANDLE,
  },

  keywords: [
    "Remco Stoeten",
    "resume",
    "software engineer",
    "developer",
    "full-stack",
    "portfolio",
    "TypeScript",
    "React",
    "Next.js",
    "web development",
    "software architecture",
  ],
  
  authors: [{ name: "Remco Stoeten" }],
  creator: "Remco Stoeten",
  
  alternates: {
    canonical: cfg.BASE_URL,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },

  metadataBase: new URL(cfg.BASE_URL),
  applicationName: "Remco Stoeten Resume",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Remco Stoeten - Resume",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  category: "Professional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.vercel.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning
      >
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
