import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Remco Stoeten",
  initials: "RS",
  location: "Lemmer, the Nethelrands, CET",
  locationLink: "https://www.google.com/maps/place/Lemmer",
  about:
    "Front-end engineer with a degree in graphic design. Aspiring to be more than a divjesschuiver.",
  summary:
"Started off my journey in e-commerce building custom Magento 2 webshops. After that, I moved to SaaS, in-house for multinationals and currently employed in SaaS exclusively for non-profit and government organizations. My current go-to stack is NextJS(react), TypeScript, GraphQL/REST/own api paired with any styling solution wether it's tailwind, modules or styled components and if needed a (cloud/BaaS) database provider like Firebase, convex or sqlite. ",
  avatarUrl: "https://media.licdn.com/dms/image/C5603AQFIlU2oV2JEgg/profile-displayphoto-shrink_800_800/0/1638502874619?e=1720051200&v=beta&t=WH6KGzVg415TN9BmBKooANDwtbdnBPU9UHKYBi-tjL0",
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
    'Tailwind CSS',
    'Magento 2',
    'KnockoutJS',
    'jQeury',
    'HTML',
    'CSS/SSS',
    'Magento 2',
    'Adobe Creative Suite',
    'Figma',
    'BaaS services (Firebase, Convex, etc.)',
  ],
  projects: [
{
    title: "MineSweeper",
    techStack: ["Typescript", "NextJS", "TailwindCSS"],
    description:
      "A replica of the online casino game Dare 2 Mine by Hacksaw Gaming. I implemented a currency system which syncs all the data (bet size, wins, losses, etc.)",
    logo: "", // Add logo here
    link: "", // Add source code link here
},
{
    title: "Whatsapp Status Scraper",
    techStack: ["Typescript", "NextJS", "TailwindCSS", "Python", "Selenium"],
    description:
      "An automated scraper for WhatsApp statuses. No, I don't condone stalking, but I love exploring new technologies. I've built a Python Selenium Chromedriver WhatsApp status scraper but wanted more...",
    logo: "", // Add logo here
    link: "", // Add source code link here
},
  ],
} as const;
