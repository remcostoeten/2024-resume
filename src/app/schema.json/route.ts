import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://remcos.cv";

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${baseUrl}/#person`,
        name: "Remco Stoeten",
        url: baseUrl,
        sameAs: [
          "https://twitter.com/remcostoeten",
          "https://linkedin.com/in/remcostoeten",
          "https://github.com/remcostoeten",
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
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "Remco Stoeten Resume",
        description:
          "Professional resume and portfolio of Remco Stoeten, showcasing expertise in full-stack development, software architecture, and modern web technologies.",
        creator: {
          "@id": `${baseUrl}/#person`,
        },
        inLanguage: "en-US",
        isPartOf: {
          "@id": `${baseUrl}/#organization`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${baseUrl}/#webpage`,
        url: baseUrl,
        name: "Home",
        description:
          "Professional resume and portfolio of Remco Stoeten",
        isPartOf: {
          "@id": `${baseUrl}/#website`,
        },
        datePublished: "2024-01-01",
        dateModified: new Date().toISOString().split("T")[0],
        inLanguage: "en-US",
      },
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: "Remco Stoeten",
        url: baseUrl,
        logo: `${baseUrl}/favicon.ico`,
        sameAs: [
          "https://twitter.com/remcostoeten",
          "https://linkedin.com/in/remcostoeten",
          "https://github.com/remcostoeten",
        ],
      },
    ],
  };

  return NextResponse.json(schema);
}
