import { Metadata } from "next";

type TMetadataConfig = {
  siteName: string;
  siteUrl: string;
  defaultTitle: string;
  defaultDescription: string;
  defaultKeywords: string[];
  author: {
    name: string;
    email?: string;
    url?: string;
  };
  social: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
  openGraph: {
    type: string;
    locale: string;
    siteName: string;
  };
};

export const metadataConfig: TMetadataConfig = {
  siteName: "Resume Editor",
  siteUrl: "https://resumeeditor.com",
  defaultTitle: "Resume Editor - Create Professional Resumes",
  defaultDescription: "Create, edit, and customize professional resumes with our intuitive resume editor. Build your perfect resume with ease.",
  defaultKeywords: ["resume", "editor", "cv", "professional", "career", "job application", "resume builder"],
  author: {
    name: "Resume Editor",
    email: "contact@resumeeditor.com",
    url: "https://resumeeditor.com",
  },
  social: {
    twitter: "@resumeeditor",
    github: "https://github.com/resumeeditor",
    linkedin: "https://linkedin.com/company/resumeeditor",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Resume Editor",
  },
};

type TGenerateMetadataOptions = {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
  canonical?: string;
};

export function generateMetadata(options: TGenerateMetadataOptions = {}): Metadata {
  const {
    title = metadataConfig.defaultTitle,
    description = metadataConfig.defaultDescription,
    keywords = metadataConfig.defaultKeywords,
    image,
    noIndex = false,
    canonical,
  } = options;

  const fullTitle = title === metadataConfig.defaultTitle 
    ? title 
    : `${title} | ${metadataConfig.siteName}`;

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords,
    authors: [{ 
      name: metadataConfig.author.name,
      url: metadataConfig.author.url,
    }],
    creator: metadataConfig.author.name,
    publisher: metadataConfig.siteName,
    viewport: "width=device-width, initial-scale=1",
    robots: noIndex ? "noindex, nofollow" : "index, follow",
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title: fullTitle,
      description,
      type: metadataConfig.openGraph.type as "website",
      locale: metadataConfig.openGraph.locale,
      siteName: metadataConfig.openGraph.siteName,
      url: canonical || metadataConfig.siteUrl,
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      site: metadataConfig.social.twitter,
      creator: metadataConfig.social.twitter,
      title: fullTitle,
      description,
      images: image ? [image] : undefined,
    },
  };

  return metadata;
}

export function generatePageMetadata(
  pageTitle: string,
  pageDescription: string,
  options: Omit<TGenerateMetadataOptions, 'title' | 'description'> = {}
): Metadata {
  return generateMetadata({
    title: pageTitle,
    description: pageDescription,
    ...options,
  });
}
