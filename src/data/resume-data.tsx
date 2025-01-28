import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { AnimatedText } from "@/components/animated-text";
import { use } from "react";
import { position } from "html2canvas/dist/types/css/property-descriptors/position";
import { platform } from "os";

type TechStack =
  | "Node"
  | "JavaScript"
  | "TypeScript"
  | "Shadcn"
  | "Tailwind"
  | "NextJS"
  | "Python"
  | "Convex"
  | "Firebase"
  | "CLI"
  | "SQLite"
  | "Bash"
  | "Shell"
  | "PostgreSQL"
  | "JWT"
  | "Jose"
  | "Prisma"
  | "Drizzle ORM"
  | "Sessions"
  | "Zod"
  | "JSON"
  | "Framer Motion";

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

type WorkExperience = {
  company: string;
  link: string;
  badges: string[];
  title: string;
  logo: string;
  start: string;
  end: string;
  description: string;
};

type Education = {
  school: string;
  degree: string;
  start: string;
  end: string;
};

type SocialLink = {
  name: string;
  url: string;
  icon: React.FC<IconProps>;
};

type Contact = {
  email: string;
  tel: string;
  social: SocialLink[];
};

type ResumeData = {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about: React.ReactNode;
  summary: string;
  summarytwo: string;
  avatarUrl: string;
  personalWebsiteUrl: string;
  contact: Contact;
  education: Education[];
  work: WorkExperience[];
  skills: string[];
  extrainfo: string;
  projects: Project[];
};

export const RESUME_DATA: ResumeData = {
  name: "Remco Stoeten",
  initials: "RS",
  location: "Lemmer, the Netherlands, CET",
  locationLink: "https://www.google.com/maps/place/Lemmer",
  about: (
    <div className="w-full !text-xs min-h-[100px]">
      Front-end engineer with a degree in graphic design. Aspiring to be more than <AnimatedText />
    </div>
  ),
  
  
  summary:
    "With a degree in graphic design, I landed my first internship at a digital agency. I learned the craft of integrating pixel-perfect design in the first months of being an intern, followed by 5~ years of full-time employment. After that, I've exclusively worked mostly for SaaS and high traffic applications. Varying from European market leaders in construction tooling and infrastructure, to exclusively operating for non-profit and government.\n\n\n\nBuilding FSV, a portal for seeing your procedure if you got caught with heavy tax fraud, and their intranet builder for anyone non-profit. And their multi-SaaS platform which was used by hundreds of thousands of government employees, an intranet builder. Fast forward to my current position at Exact Online, construction department. Building a SaaS platform for construction companies where most MKBs (businesses: any) in the Netherlands make use of. Varying from planning, invoicing, payroll, and more.",
    
  summarytwo:
    "Although my current focus is front-end focused, I have a strong all-round technology interest and am quite involved in the space. I love exploring newer tools (e.g. Svelte, Solid, Qwik) but also have an interest in learning more complex languages like Rust, Zig, OCaml and on the short-term Go. I've done a little Python (scrapers, text-mutate-tools) and some Lua (game engine scripting, NeoVim configuration) and quite some Bash.",
    
    
    
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
      school: "ROC Friese Poort Sneek",
      degree: "Graphic Design",
      start: "2013",
      end: "2017",
    },
  ],
  work: [
    {
      company: "Exact Online",
      link: "https://exact.com",
      badges: ["Hybrid"],
      title: "Software Engineer",
      logo: "", // Add logo here
      start: "2024",
      end: "present",
      description:
        "Working on Exact Online's software, primarily the construction application. Building and maintaining features for financial management, invoicing, and business operations using modern web technologies. Serving close to all MKB (small businesses) in the Netherlands.\n\nFast forward to my current position at Exact Online, construction department. Building a SaaS platform for construction companies where most MKBs (small businesses) in the Netherlands make use of. Varying from planning, invoicing, payroll, and more.",
    },
    {
      company: "Pleio - Online Samenwerken",
      link: "http://pleio.nl",
      badges: ["Remote"],
      title: "Frontend Developer",
      logo: "", // Add logo here
      start: "2023",
      end: "2024",
      description:
        "SaaS provider exclusively for non-profit organizations and governments. Primarily working on the Pleio-platform (Intranet site builder in React, GraphQL) and various tax and politic-heavy applications (all open source). Everything fully WCAG compliant and open source.",
    },
    {
      company: "Lasaulec / Distil BV",
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
    "When I was first starting out, we still deployed our work through manually drag and dropping over FTP so I know my way around the terminal, SSH/shells, proper version control, all the PM platforms (e.g. Bitbucket, Jira, Gitlab, etc.). Worked in Scrum setting with an `agile` focused mindset. But also worked 100% autonomous without any project managers, or as of recent Kanban style with one meeting per week. Kanban seems to be the sweet spot in efficiency.  ",
  skills: [
    // Core Skills (Most Important)
    "TypeScript ❤️",
    "React + NextJS ❤️",
    "Tailwind CSS ❤️",
    "Node",
    "JavaScript",
    "GraphQL",
    "REST",
    "HTML (BEM, WCAG)",
    "CSS/SCSS ❤️/LESS/Modules/Styled Components",
    "DX junkie",
    "PostgreSQL",
    "ORM's (Prisma/Drizzle)",
    "Docker",
    // Additional Skills
    "Shell",
    "Bash scripting",
    "Framer Motion",
    "Vue2",
    "Svelte",
  ],
  projects: [
    {
      title: "Exact Online Bouw",
      techStack: ["Vue2 (for now- Will migrate to Angular, Next soon)", "TypeScript", "OOP-style", "Microservices", "Stencil.js (webcomponents)"],
      work: true,
      description: "Market-leading SaaS platform for construction companies, providing project management and financial tools. Used by 70% of Dutch construction companies for site operations and financial tracking.",
      href: "https://www.exact.com/nl/producten/bouw",
    },
    {
      title: "Pleio Platform",
      techStack: ["React", "Styled-Components", "GraphQL"],
      work: true,
      description: "Open-source intranet platform for government organizations featuring real-time messaging, video calls, and team collaboration tools. Built with React and GraphQL, emphasizing security and WCAG compliance.",
      href: "https://gitlab.com/pleio/frontend",
    },
    {
      title: "FSV Portaal",
      techStack: ["Django", "WCAG", "JavaScript", "SCSS"],
      work: true,
      description: "Government portal for citizens to check tax authority fraud detection system status. Features secure data access, information requests, and case tracking, built with Django and strict privacy measures.",
      href: "https://fsvportaal.nl",
    },
    {
      title: "PDF Checker",
      techStack: ["Vue2", "WCAG"],
      work: true,
      description: "Accessibility validation tool for PDF documents, built with Vue2. Implements WCAG guidelines to ensure document compliance and provide detailed accessibility reports.",
      href: "https://gitlab.com/pleio/pdfchecker",
    },
    {
      title: "Roll Your Own Auth - NextJS",
      description: "Custom authentication system showcasing user management and admin roles. Implements JWT handling, secure sessions, and role-based access without external auth providers.",
      techStack: ["NextJS", "TypeScript", "PostgreSQL", "SQLite", "JWT", "Jose", "Prisma", "Drizzle ORM", "Sessions"],
      href: "https://github.com/remcostoeten/nextjs-15-roll-your-own-authentication",
    },
    {
      title: "Findr - Python CLI",
      description: "Command-line interface tool that simplifies system-wide file searching. Provides an intuitive wrapper around grep and find commands with enhanced user experience.",
      techStack: ["Python", "CLI"],
      href: "https://github.com/remcostoeten/findr",
    },
    {
      title: "Interactive File Tree Renderer",
      description: "Visual file tree component for documentation sites, featuring interactive navigation and modern animations. Built with React and Framer Motion for smooth interactions.",
      techStack: ["NextJS", "TypeScript", "React", "Framer Motion", "TailwindCSS"],
      href: "https://github.com/remcostoeten/Beautiful-interactive-file-tree",
    },
    {
      title: "Advanced Code Block Renderer",
      description: "Feature-rich code display component with syntax highlighting, search, and keyboard shortcuts. Integrates Monaco Editor for enhanced code visualization.",
      techStack: ["NextJS", "TypeScript", "React", "Shiki", "Monaco Editor", "Framer Motion", "TailwindCSS"],
      href: "https://github.com/remcostoeten/react-next-beautiful-code-block-syntax-highlight-search-kbd",
    },
    {
      title: "NextJS Topbar Loader",
      description: "Zero-dependency page transition loader for NextJS applications. Provides smooth loading indicators with customizable styles and behaviors.",
      techStack: ["NextJS", "TypeScript"],
      href: "https://github.com/remcostoeten/nextjs-topbar-loader-page-transition-no-libraries",
    },
    {
      title: "Turso DB CLI Tool",
      description: "Command-line utility for rapid SQLite database setup via Turso.tech. Automates environment variable retrieval and database configuration processes.",
      techStack: ["TypeScript", "SQLite", "CLI", "Python", "Bash", "Shell"],
      href: "https://github.com/remcostoeten/Turso-db-creator-auto-retrieve-env-credentials",
    },
    {
      title: "Local Speech-to-Text",
      description: "Command-line tool for local speech recognition with clipboard integration. Processes audio input and converts to text without external API dependencies.",
      techStack: ["Python", "CLI"],
      href: "https://github.com/remcostoeten/speach-to-text-clipboard-locally",
    },
    {
      title: "Emoji Feedback Component",
      description: "Site survey component with flexible storage options and rate limiting. Features Zod validation, smooth animations, and multiple backend integration options.",
      techStack: ["React", "TypeScript", "PostgreSQL", "Drizzle ORM", "Zod", "JSON", "Framer Motion"],
      href: "https://github.com/remcostoeten/Emoji-feedback-form",
    },
    {
      title: "My Personal All-in-One Platform",
      description: "Unified platform combining multiple tools and utilities in a single dashboard. Features authentication, database integration, and various productivity tools.",
      techStack: ["NextJS", "TypeScript", "SQLite (Turso in the ☁️", "Tailwind", "Clerk auth", "list goes on..."],
      href: "https://github.com/remcostoeten/remcostoeten-all-in-one-dashboard",
      live: "https://panel.remcostoeten.com",
    },
    {
      title: "Custom Commitizen Adapter",
      techStack: ["Node", "JavaScript"],
      description: "Global NPM package for enforcing consistent commit message structure. Provides customizable templates and validation rules for Git commits.",
      href: "https://www.npmjs.com/package/cleaner-commitizen-adapter",
    },
    {
      title: "MineSweeper",
      techStack: ["TypeScript", "NextJS", "BaaS", "Convex", "Tailwind"],
      description: "Online casino game replica with real-time currency system. Implements bet tracking, win/loss calculations, and synchronized game state.",
      href: "https://github.com/remcostoeten/minesweeper",
    },
    {
      title: "WhatsApp Status Scraper",
      techStack: ["TypeScript", "NextJS", "TailwindCSS", "ChromeDriver", "Selenium"],
      description: "Automated WhatsApp status tracker using Selenium and ChromeDriver. Features real-time metrics display and comprehensive data collection dashboard.",
      href: "https://github.com/remcostoeten/personal-platform/blob/master/pages/api/status/index.ts",
    },
    {
      title: "snippets.remcostoeten.com",
      techStack: ["NextJS", "TypeScript", "Blog", "Markdown"],
      description: "Documentation site for code snippets and productivity scripts. Built with Nextra and MDX for maintainable technical content management.",
      href: "https://github.com/remcostoeten/snippets.remcostoeten",
    },
    {
      title: "UI Portfolio",
      techStack: ["NextJS", "Three.js", "TypeScript", "Framer Motion"],
      description: "Minimalist CV design incorporating Three.js animations. Features smooth transitions and interactive 3D elements for enhanced user experience.",
      href: "https://github.com/remcostoeten/minimal-cv",
    },
    {
      title: "Another Cool UI Design",
      techStack: ["NextJS", "TypeScript", "Framer Motion", "UI"],
      description: "Modern portfolio design with emphasis on animation and interaction. Implements Framer Motion for smooth transitions and engaging user experience.",
      href: "https://github.com/remcostoeten/minimalistic-portfolio",
    },
    {
      title: "GraphQL GitHub API Portfolio",
      techStack: ["NextJS", "TypeScript", "Apollo", "Framer Motion", "GraphQL"],
      description: "Portfolio site integrating GitHub's GraphQL API. Features dynamic project fetching and sleek animations for data presentation.",
      href: "https://github.com/remcostoeten/remcostoeten-landing",
    },
    {
      title: "Visualize Component Debugger",
      techStack: ["React", "NPM"],
      description: "NPM package for React component visualization and debugging. Provides interactive tools for component inspection and development workflow enhancement.",
      href: "https://github.com/remcostoeten/Visualize-react-components-debugger",
    },
    {
      title: "Personal Platform",
      techStack: ["NextJS", "TypeScript", "API Routes", "Tailwind", "Framer Motion", "GraphQL"],
      description: "Comprehensive personal intranet system with finance, storage, and calendar features. Implements various API integrations and data management solutions.",
      href: "https://github.com/remcostoeten/personal-platform/tree/master/app/dashboard",
    },
    {
      title: "URL Extractor",
      techStack: ["NextJS", "TypeScript", "Regex"],
      description: "Fast URL extraction tool without Cloudflare protection delays. Implements efficient regex patterns for quick URL parsing and validation.",
      href: "https://github.com/remcostoeten/url-extractor",
    },
    {
      title: "WhatsApp Online Status Tracker",
      techStack: ["Flask", "Python", "Selenium", "ChromeDriver"],
      description: "Automated tool for tracking WhatsApp online status using Selenium. Features ChromeDriver integration and real-time status monitoring capabilities.",
      href: "https://github.com/remcostoeten/whatsapp-online-status-tracker",
    },
    {
      title: "SVG to React Component Generator",
      techStack: ["JavaScript", "Script"],
      description: "Utility script for converting SVG files to React components. Handles dimension defaults and naming conventions for streamlined component generation.",
      href: "https://github.com/remcostoeten/svg-to-react-component-tag-generator",
    },
    {
      title: "shadcn-ui-lazymans-auto-importer",
      techStack: ["JavaScript"],
      description: "Automation script for managing shadcn/ui component imports. Simplifies component management and maintains clean import structure in large projects.",
      href: "https://github.com/remcostoeten/shadcn-ui-lazymans-auto-importer",
    },
    {
      title: "HTML to React Converter",
      description: "Custom converter tool for transforming HTML to JSX/TSX with component generation. Features type inference and prop handling for React components.",
      href: "https://portfolio.remcostoeten.com/html-to-jsx",
      techStack: ["NextJS", "TypeScript", "Regex", "Headaches"],
    },
    {
      title: "Visual Studio Code Landing",
      techStack: ["NextJS", "TailwindCSS", "Shadcn/UI", "Radix-UI", "Clerk", "Firebase", "Planetscale", "Prisma"],
      description: "Portfolio site styled as VS Code IDE with full authentication and database integration. Features multiple database systems and comprehensive UI components.",
      href: "vsc.remcostoeten.com",
    },
    {
      title: "Vedder & Vedder",
      techStack: ["Magento 2", "PHP", "SCSS", "jQuery", "KnockoutJS"],
      work: true,
      description: "B2C jewelry webshop with custom product configurators. Implements real-time preview functionality and personalized product customization features.",
      href: "https://veddervedder.com",
    },
    {
      title: "Waterontharder.com",
      techStack: ["Magento 2", "PHP", "SCSS", "jQuery", "KnockoutJS"],
      work: true,
      description: "B2B/B2C water softening solutions platform. Features custom product filters and interactive water hardness calculation tools.",
      href: "https://waterontharder.com",
    },
    {
      title: "Quality Horse Products",
      techStack: ["Magento 2", "PHP", "SCSS", "jQuery", "KnockoutJS"],
      work: true,
      description: "B2B platform for premium horse equipment with complex ordering features. Implements customer-specific pricing and bulk ordering capabilities.",
      href: "https://qhp.nl",
    },
    {
      title: "Alcomex Springs",
      techStack: ["Magento 2", "PHP", "SCSS", "jQuery", "KnockoutJS"],
      work: true,
      description: "B2B industrial springs webshop with technical calculators. Features custom product configurators for specialized industrial components.",
      href: "https://alcomex.com",
    },
  ],
} as ResumeData;
