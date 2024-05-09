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

type IconProps = {
  size?: number;
  color?: string;
};

type Project = {
  title?: string;
  techStack?: TechStack[];
  description?: string;
  logo?: string;
  href?: string;
  work?: boolean;
};

export const RESUME_DATA = {
  name: "Remco Stoeten",
  initials: "RS",
  location: "Lemmer, the Nethelrands, CET",
  locationLink: "https://www.google.com/maps/place/Lemmer",
  about:
    "Front-end engineer with a degree in graphic design. Aspiring to be more than a divjesschuiver.",
  summary:
    "Started off my journey in e-commerce building custom Magento 2 webshops. After that, I moved to SaaS, in-house for multinationals and currently employed in SaaS exclusively for non-profit and government organizations. My current go-to stack is Next.js (React), TypeScript, GraphQL/REST/own API paired with any styling solution whether it's Tailwind, modules, or styled components, and if needed a (cloud/BaaS) database provider like Firebase, Convex, or SQLite.",
  summarytwo:
    " Although my current focus is front-end focused, I have strong all-round technology interest and am quite involved in the space. I love exploring newer tools (e.g. Svelte, Solid, Qwik) but also have an interest in learning more complex languages like Rust, Zig, OCaml and on the short-term Go. I've done a little Python (scrapers, text-mutate-tools) and some Lua (game engine scripting, NeoVim configuration) and quite some Bash.",
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
  extrainfo:
    "When I was first comming up we still deployed our work through manually drag and dropping over FTP so I know my way around the terminal,SSH/shells, proper version control, all the PM platforms (e.g. bitbucket, jira, gitlab, etc.). Worked in Scrum setting with a `agile` focused mindset. But also worked 100% autonomous without any project managers, or as of recent Kanban style with one meeting per week.  ",
  skills: [
    "JavaScript",
    "TypeScript ❤️",
    "React",
    "NextJS ❤️",
    "GraphQL",
    "Styled Components",
    "Tailwind CSS ❤️",
    "Magento 2 🤢",
    "KnockoutJS",
    "Framer motion",
    "jQuery",
    "HTML (BEM, WCAG)",
    "CSS/SCSS/LESS/Modules",
    "REST",
    "Adobe Creative Suite",
    "Figma",
    "Convex",
    "Firebase",
    "SQLite",
    "Postgres",
    "Docker",
  ],
  projects: [
    {
      title: "MineSweeper",
      techStack: ["TypeScript", "NextJS", "BaaS", "Convex", "Tailwind"],
      description:
        "A replica of the online casino game Dare 2 Mine by Hacksaw Gaming. I implemented a currency system which syncs all the data (bet size, wins, losses, etc.)",
      logo: "",
      href: "https://github.com/remcostoeten/minesweeper",
    },
    {
      title: "Whatsapp Status Scraper",
      techStack: [
        "TypeScript",
        "NextJS",
        "TailwindCSS",
        "ChromeDriver",
        "Selenium",
      ],
      description:
        "An automated scraper for WhatsApp statuses via NextJS api routes. No, I don't condone stalking, but I love exploring new technologies. I've built a Python Selenium Chromedriver WhatsApp status scraper but wanted more UI so I built a entire real tike table with all scraped metrics",
      logo: "",
      href: "https://github.com/remcostoeten/personal-platform/blob/master/pages/api/status/index.ts",
    },
    {
      title: "snippets.remcostoeten.com",
      techStack: ["NextJS", "TypeScript", "Blog", "Markdown"],
      description:
        "This is an app containing various snippets, guides, and productivity scripts I use personally or for my job. The site is maintained via Markdown.mdx and powered by Nextra, which is a static site generator built with NextJS and TypeScript.",
      href: "https://github.com/remcostoeten/snippets.remcostoeten",
      tags: ["NextJS", "TypeScript"],
    },
    {
      title: "UI portfolio",
      techStack: ["NextJS", "Three.js", "TypeScript", "Framer Motion"],
      description: "Minimal cv ui design with threejs",
      href: "https://github.com/remcostoeten/minimal-cv",
      tag: "nextjs",
    },
    {
      title: "Another cool UI design",
      techStack: ["NextJS", "TypeScript", "Framer Motion", "UI"],
      description:
        "Another cool UI design I've built. Itteration number thousand.",
      href: "https://github.com/remcostoeten/minimalistic-portfolio",
      tag: "nextjs",
    },
    {
      title: "GraphQL GitHub API portfolio",
      techStack: ["NextJS", "TypeScript", "Apollo", "Framer Motion", "GraphQL"],
      description: "...graphql github api portfolio, sleak design.",
      href: "https://github.com/remcostoeten/remcostoeten-landing",
    },
    {
      title: "Visualize Component Debugger (NPM package)",
      techStack: ["React", "NPM"],
      description:
        "A npm package that helps you visualize react components to improve debugging and development experience.",
      href: "https://github.com/remcostoeten/Visualize-react-components-debugger",
      tag: "react",
    },
    {
      title: "Personal Platform",
      techStack: [
        "NextJS",
        "TypeScript",
        "API Routes",
        "Tailwind",
        "Framer Motion",
        "GraphQL",
      ],
      description:
        "A personal intraneti'm bulding for all kind of purposes. Finance, storage, calendar. New repo is private  ",
      href: "https://github.com/remcostoeten/personal-platform/tree/master/app/dashboard",
      tag: "react",
    },
    {
      title: "URL Extractor",
      techStack: ["NextJS", "TypeScript", "Regex"],
      description:
        "Just a tool I built because I got tired of other tools having slow Cloudflare protection. A working version is available at https://vsc.remcostoeten.com/url, but the UI is not up to par, hence I'm reworking it here.",
      href: "https://github.com/remcostoeten/url-extractor",
    },
    {
      title: "WhatsApp Online Status Tracker",
      techStack: ["Flask", "Python", "Selenium", "ChromeDriver"],
      description:
        "A tool that launches a chromedriver instance and scrapes the online status of a given WhatsApp user. Not because I condone stalking, but seemed like a cool project to learn scraping.",
      href: "https://github.com/remcostoeten/whatsapp-online-status-tracker",
      tag: "python",
    },
    {
      title: "SVG to React Component Generator Scripts",
      techStack: ["JavaScript", "Script"],
      description:
        "A utility script to convert SVG files into React components. It reads SVGs from a directory, extracts content and attributes, and generates corresponding React components. Handles SVGs without specified dimensions by defaulting to 24x24. Components are named based on the SVG title or given a generic name.",
      href: "https://github.com/remcostoeten/svg-to-react-component-tag-generator",
    },
    {
      title: "shadcn-ui-lazymans-auto-importer",
      techStack: ["JavaScript"],
      description:
        "a scrirpt I build to cleanup ShadN/ui imports because in big projects it can get a mess. And maybe because I kept forgetting the standalone download command for components.",
      href: "https://github.com/remcostoeten/shadcn-ui-lazymans-auto-importer",
    },
    {
      title: "HTML to React(JSX/TSX)) Converter",
      description:
        "I used to convert quite some codepens to react and got tired of online tools their cloudflare protection so I build my own converter. It converts HTML too JSX or TSX including easy creation of functional components with props and types. Not perfect, but does the job. ",
      href: "https://portfolio.remcostoeten.com/html-to-jsx",
      techStack: ["NextJS", "TypeScript", "Regex", "Headaches"],
    },
    {
      title: "Visual Studio Code Landing in React",
      techStack: [
        "NextJS",
        "TailwindCSS",
        "Shadcn/UI",
        "Radix-UI",
        "Clerk",
        "Firebase",
        "Planetscale",
        "Prisma",
      ],
      description:
        "A portfolio site in the style of an IDE, in this case Visual Studio Code. Built with NextJS, TailwindCSS, Shadcn/ui, radix-ui, Clerk authentication, Firebase database for old features and new features are built on Planetscale which is MySQL and Prisma as ORM.",
      href: "vsc.remcostoeten.com",
    },
    {
      title: "Pleio platform",
      techStack: ["React", "Styled-Components", "GraphQL"],
      work: true,
      description:
        "A SaaS, intranet builder for non profit and goverment only.  ",
      href: "https://gitlab.com/pleio/frontend",
    },
    {
      title: "FSV Portaal",
      techStack: ["Django", "wcag", "JavaScript", "SCSS"],
      work: true,
      description: "Django backend with vanilla JavaScript + SCSS frontend.",
      href: "https://fsvportaal.nl",
    },
    {
      title: "PDF Checker",
      techStack: ["Vue2", "wcag"],
      work: true,
      description: "Check accessibility of PDF's in Vue(2).",
      href: "https://gitlab.com/pleio/pdfchecker",
    },
    {
      title: "Vedder & Vedder",
      techStack: ["Magento 2", 'PHP, "scss", "jquery', "XML", "KnockoutJS"],
      work: true,
      description: "B2C webshop for jewelry.",
      href: "https://veddervedder.nl",
    },
    {
      title: "Alcomex",
      techStack: ["Magento 2", 'PHP, "scss", "jquery', "XML", "KnockoutJS"],
      work: true,
      description: "B2B webshop for technical parts.",
      href: "https://webshop.alcomex.nl",
    },
    {
      title: "Quality Horse Products",
      techStack: ["Magento 2", 'PHP, "scss", "jquery', "XML", "KnockoutJS"],
      work: true,
      description: "B2B webshop for horse products.",
      href: "https://qhp.nl",
    },
  ],
} as {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about: string;
  summary: string;
  avatarUrl: string;
  personalWebsiteUrl: string;
  contact: {
    email: string;
    tel: string;
    social: {
      name: string;
      url: string;
      icon: React.FC<IconProps>;
    }[];
  };
  education: {
    school: string;
    degree: string;
    start: string;
    end: string;
  }[];
  work: {
    company: string;
    link: string;
    badges: string[];
    title: string;
    logo: string;
    start: string;
    end: string;
    description: string;
  }[];
  skills: string[];
  projects: Project[];
};
