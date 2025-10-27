import { NextResponse } from "next/server";
import { cfg } from "@/lib/cfg";

export async function GET() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${cfg.BASE_URL}/#person`,
        name: "Remco Stoeten",
        url: cfg.BASE_URL,
        sameAs: [
          cfg.TWITTER_URL,
          cfg.LINKEDIN_URL,
          cfg.GITHUB_URL,
        ],
        jobTitle: "Senior Software Engineer",
        worksFor: {
          "@type": "Organization",
          name: "Independent Contractor",
        },
        knowsAbout: [
          "Full-Stack Development",
          "TypeScript",
          "React",
          "Next.js",
          "Node.js",
          "Software Architecture",
          "Web Development",
          "GraphQL",
          "REST APIs",
          "Cloud Development",
        ],
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${cfg.BASE_URL}/#website`,
        url: cfg.BASE_URL,
        name: "Remco Stoeten Resume",
        description:
          "Professional resume and portfolio of Remco Stoeten, showcasing expertise in full-stack development, software architecture, and modern web technologies.",
        creator: {
          "@id": `${cfg.BASE_URL}/#person`,
        },
        inLanguage: "en-US",
        isPartOf: {
          "@id": `${cfg.BASE_URL}/#organization`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${cfg.BASE_URL}/#webpage`,
        url: cfg.BASE_URL,
        name: "Home",
        description:
          "Professional resume and portfolio of Remco Stoeten",
        isPartOf: {
          "@id": `${cfg.BASE_URL}/#website`,
        },
        datePublished: "2024-01-01",
        dateModified: new Date().toISOString().split("T")[0],
        inLanguage: "en-US",
      },
      {
        "@type": "Organization",
        "@id": `${cfg.BASE_URL}/#organization`,
        name: "Remco Stoeten",
        url: cfg.BASE_URL,
        logo: `${cfg.BASE_URL}/favicon.ico`,
        sameAs: [
          cfg.TWITTER_URL,
          cfg.LINKEDIN_URL,
          cfg.GITHUB_URL,
        ],
      },
    ],
  };

  return NextResponse.json(schema);
}
