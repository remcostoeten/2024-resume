import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Security headers
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // SEO headers
          {
            key: "Link",
            value: '</schema.json>; rel="alternate"; type="application/ld+json"',
          },
        ],
      },
      // Cache public assets for performance
      {
        source: "/public/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Resume PDF cache
      {
        source: "/remco-stoeten.pdf",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800",
          },
          {
            key: "Content-Disposition",
            value: "inline; filename=remco-stoeten.pdf",
          },
          // Accessibility headers
          {
            key: "Content-Description",
            value: "Resume of Remco Stoeten - Front-end Developer",
          },
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/resume",
        destination: "/",
        permanent: true,
      },
      {
        source: "/cv",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
