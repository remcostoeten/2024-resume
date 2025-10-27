import type { Metadata } from "next";
import ResumeView from "@/views/resume-view";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://remcos.cv";

export const metadata: Metadata = {
  title: "Remco Stoeten - Senior Software Engineer Resume & Portfolio",
  description: "Explore the professional resume and portfolio of Remco Stoeten. Specializing in full-stack development, software architecture, and modern web technologies.",
  openGraph: {
    title: "Remco Stoeten - Senior Software Engineer Resume & Portfolio",
    description: "Explore the professional resume and portfolio of Remco Stoeten.",
    type: "profile",
    url: baseUrl,
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
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
