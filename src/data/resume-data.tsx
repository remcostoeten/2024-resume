import { GitHubIcon, LinkedInIcon } from "@/components/icons";
type TechStack =
  | "Node"
  | "JavaScript"
  | "TypeScript"
  | "Shadcn"
  | "Tailwind"
  | "NextJS"
  | "Python"
  | "Convex"
  | "Firebase";

export const RESUME_DATA = {
  name: "Remco Stoeten",
  initials: "RS",
  location: "Lemmer, the Nethelrands, CET",
  locationLink: "https://www.google.com/maps/place/Lemmer",
  about:
    "Front-end engineer with a degree in graphic design. Aspiring to be more than a divjesschuiver.",
  summary:
    "Started off my journey in e-commerce building custom Magento 2 webshops. After that, I moved to SaaS, in-house for multinationals and currently employed in SaaS exclusively for non-profit and government organizations. My current go-to stack is Next.js (React), TypeScript, GraphQL/REST/own API paired with any styling solution whether it's Tailwind, modules, or styled components, and if needed a (cloud/BaaS) database provider like Firebase, Convex, or SQLite.",
  avatarUrl:
    "https://media.licdn.com/dms/image/C5603AQFIlU2oV2JEgg/profile-displayphoto-shrink_800_800/0/1638502874619?e=1720051200&v=beta&t=WH6KGzVg415TN9BmBKooANDwtbdnBPU9UHKYBi-tjL0",
  personalWebsiteUrl: "https://remcostoeten.com",
  contact: {
    email: "remcostoeten@hotmail.com",
    tel: "+31 6 36 59 07 07",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/remcostoeten",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/remco-stoeten/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "ROC Friese poort Sneek",
      degree: "Graphic design",
      start: "2013",
      end: "2017",
    },
  ],
  work: [
    {
      company: "Pleio - online samenwerken",
      link: "http://pleio.nl",
      badges: ["Remote"],
      title: "Frontend Developer",
      logo: "", // Add logo here
      start: "2023",
      end: "present",
      description:
        "SaaS provider exclusively for non-profit organizations and governments. Primarily working on the Pleio-platform (Intranet site builder in React, GraphQL). Also various tax and politic-heavy applications. Everything fully WCAG compliant and open source.",
    },
    {
      company: "Distil BV",
      link: "https://distil.nl",
      badges: ["Remote"],
      title: "Developer",
      logo: "", // Add logo here
      start: "2022",
      end: "2023",
      description:
        "Sole dedicated front-end responsible for migrating legacy code to a new design using .cshtml (Razor) templates, BEM SCSS structure, and vanilla + KnockoutJS JavaScript. Took initial steps into the world of React while assisting in the rewrite of a legacy SaaS application in React + .NET.",
    },
    {
      company: "Tickles Digital Agency B.V.",
      link: "https://tickles.nl",
      badges: [],
      title: "Front-end Developer",
      logo: "", // Add logo here
      start: "2017",
      end: "2022",
      description:
        "Joined as a Front-end developer after an internship during media design studies. Developed from a complete beginner to a self-sufficient Front-end developer capable of translating UX designs into responsive code.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "GraphQL",
    "Styled Components",
    "Tailwind CSS",
    "Magento 2",
    "KnockoutJS",
    "jQeury",
    "HTML",
    "CSS/SSS",
    
"REST",
    "Adobe Creative Suite",
    "Figma",
    "BaaS services (Firebase, Convex, etc.)",
  ],
  projects: [
    {
      title: "MineSweeper",
      techStack: ["TypeScript", "NextJS", "BaaS", "Convex","Tailwind"] as TechStack[],
      description:
        "A replica of the online casino game Dare 2 Mine by Hacksaw Gaming. I implemented a currency system which syncs all the data (bet size, wins, losses, etc.)",
      logo: "",
      href: "https://github.com/remcostoeten/minesweeper",
    },
    {
      title: "Whatsapp Status Scraper",
      techStack: ["TypeScript", "NextJS", "TailwindCSS", "Chromedriver", "Selenium"],
      description:
        "An automated scraper for WhatsApp statuses. No, I don't condone stalking, but I love exploring new technologies. I've built a Python Selenium Chromedriver WhatsApp status scraper but wanted more UI so I built a entire real tike table with all scraped metrics",
logo: "",
      href: "",
    },
    {
      title: "snippets.remcostoeten.com",
      techStack: ["NextJS", "TypeScript", "Blog","Markdown"],
      description:
        "This is an app containing various snippets, guides, and productivity scripts I use personally or for my job. The site is maintained via Markdown.mdx and powered by Nextra, which is a static site generator built with NextJS and TypeScript.",
      href: "https://github.com/remcostoeten/snippets.remcostoeten",
      tags: ["NextJS", "TypeScript"],
    },
    {
      title: "UI portfolio",
      techStack: ["NextJS", "Three.js","TypeScript", "Framer Motion"],
      description: "Minimal cv ui design with threejs",
      href: "https://github.com/remcostoeten/minimal-cv",
      tag: "nextjs",
    },
    {
      title: "Another cool UI design",
      techStack: ["NextJS", "TypeScript", "Framer Motion", "UI"],
      description: "Another cool UI design I've built",
      href: "https://github.com/remcostoeten/minimalistic-portfolio",
      tag: "nextjs",
    },
    {
      title: "GraphQL GitHub API portfolio",
      techStack: ["NextJS", "TypeScript", "Apollo","Framer motion", "GraphQL"],
      description: "...graphql github api portfolio",
      href: "https://github.com/remcostoeten/remcostoeten-landing",
      tag: "graphql",
    },
    {
      title: "Visualize Component Debugger (npm package)",
      techStack: ["React", "npm"],
      description:
        "Visualize react components to improve debugging and development experience.",
      href: "https://github.com/remcostoeten/Visualize-react-components-debugger",
      tag: "react",
    },
    {
      title: "Personal Platform",
      techStack: ["React"],
      description: "just some nextjs practice ",
      href: "https://github.com/remcostoeten/personal-platform/tree/master/app/dashboard",
      tag: "react",
    },
    {
      title: "URL Extractor",
      techStack: ["NextJS", "TypeScript", "Regex"],
      description:
        "Just a tool I built because I got tired of other tools having slow Cloudflare protection. A working version is available at https://vsc.remcostoeten.com/url, but the UI is not up to par, hence I'm reworking it here.",
      href: "https://github.com/remcostoeten/url-extractor",
      label: "wip",
    },
    {
      title: "WhatsApp Online Status Tracker",
      techStack: ["Flask", "Python"],
      description: "Track online status WhatsApp user in Flask.",
      href: "https://github.com/remcostoeten/whatsapp-online-status-tracker",
      tag: "python",
    },
    {
      title: "SVG to React Component Generator Scripts",
      techStack: ["JavaScript"],
      description:
        "A utility script to convert SVG files into React components. It reads SVGs from a directory, extracts content and attributes, and generates corresponding React components. Handles SVGs without specified dimensions by defaulting to 24x24. Components are named based on the SVG title or given a generic name.",
      href: "https://github.com/remcostoeten/svg-to-react-component-tag-generator",
      tag: "js",
    },
    {
      title: "shadcn-ui-lazymans-auto-importer",
      techStack: ["JavaScript"],
      description:
        "Download shaddcn/ui components with ease and generate a ui-imports.ts file, which auto-imports and exports the downloaded components, allowing for only one import per component instead of dozens of separate shaddcn imports.",
      href: "https://github.com/remcostoeten/shadcn-ui-lazymans-auto-importer",
    },
    {
      title: "HTML to JSX Converter",
      techStack: ["NextJS", "TailwindCSS", "TypeScript", "Shadcn/ui", "Regex"],
      description: "",
      href: "https://github.com/remcostoeten/Html-To-React-JSX-TSX",
      tag: "nextjs",
    },
    {
      title: "Visual Studio Code Landing in React",
      techStack: [
        "NextJS",
        "TailwindCSS",
        "Shadcn/ui",
        "Radix-ui",
        "Clerk",
        "Firebase",
        "Planetscale",
        "Prisma",
      ],
      description:
        "A portfolio site in the style of an IDE, in this case Visual Studio Code. Built with NextJS, TailwindCSS, Shadcn/ui, radix-ui, Clerk authentication, Firebase database for old features and new features are built on Planetscale which is MySQL and Prisma as ORM.",
      href: "vsc.remcostoeten.com",
    },
  ],
} as const;
