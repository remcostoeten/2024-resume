import type { Metadata } from "next";
import ResumeView from "@/views/resume-view";
import { cfg } from "@/lib/cfg";

export const metadata: Metadata = {
  title: "Remco Stoeten - Senior Software Engineer Resume & Portfolio",
  description: "Explore the professional resume and portfolio of Remco Stoeten. Specializing in full-stack development, software architecture, and modern web technologies.",
  openGraph: {
    title: "Remco Stoeten - Senior Software Engineer Resume & Portfolio",
    description: "Explore the professional resume and portfolio of Remco Stoeten.",
    type: "profile",
    url: cfg.BASE_URL,
    images: [
      {
        url: `${cfg.BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Remco Stoeten Resume",
      },
    ],
  },
};

export default function Home() {
  return <ResumeView />;
}
