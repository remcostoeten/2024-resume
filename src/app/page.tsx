"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Section } from "@/components/ui/section";
import { GithubIcon, GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import ThemeToggle from "@/components/ThemeToggle";
import ProjectsTabsComponent from "@/components/project-tabs";
import Link from "next/link";
import { LinkedInIcon } from "@/components/icons";
import { ProjectSection } from "@/components/project-section";
import { useState } from "react";

function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const shortText = "Initially starte of with an intership at a  agency building custom Magento 2 shops for various B2B and B..";
  const fullText = "Initially starte of with an intership at a...  agency building custom Magento 2 shops for various B2B and B..2C shops, learning the craft of pixel perfect after 5,5 years of full-time employment. After that, I've exclusively worked mostly for SaaS and high traffic applications. Varying from European market leaders in construction tooling and infrastructure, to exclusively operating for non-profit and government. Building FSV, a portal for seeing your procedure if you got caught with heavy tax fraud, and their intranet builder for anyone non-profit. And their multi-SaaS platform which was used by hundreds of thousands of government employees, an intranet builder. Fast forward to my current position at Exact Online, construction department. Building a SaaS platform for construction companies where most MKBs (businesses: any) in the Netherlands make use of. Varying from planning, invoicing, payroll, and more.";

  return (
    <Section>
      <h2 className="text-xl font-bold">Some history</h2>
      <div className="flex flex-col gap-2">
        <div className="font-mono text-sm text-pretty">
          <div className="flex border-b items-center gap-2"><span className="font-semibold text-primary">TLDR: </span><small className="text-[10px] text-muted-foreground">(but still quite long 🤓) </small> </div>
          <span className="text-muted-foreground">
            (front-end) engineer with a college degree in Graphic Design, Loads of experience in e-commerce (Magento 1 & 2) and SaaS platforms (Primarily React, NextJS,J&TSX).
            Prefer writing in modern web stack (Next.js, TypeScript, TailwindCSS- atlast, for hobby projects)- Obsesed with DX experience, automating tasks and creating intuitive CLI tools or scripts to enhance DX and productivity- and just as important, having fun.

            Experienced in various team environments from agile/scrum to fully remote.
            Currently focused on government/non-profit sector while expanding into full-stack development and DevOps.
          </span>
        </div>
        <hr/>
        <h3 className="text-md font-bold">For those who really want to know the entire path </h3>
        <p className="font-mono text-sm text-pretty text-muted-foreground">
          {isExpanded ? fullText : shortText}
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-2 text-primary hover:text-primary/80 underline decoration-dashed underline-offset-4"
          >
            {isExpanded ? "Show less" : "... Read more"}
          </button>
        </p>
        <hr/>
        <p className="text-sm italic text-pretty text-muted-foreground mt-2 text-md">
          Althrough I am a front-end focused engineer, I have a strong all-round technology interest and am quite involved in the dev space. I've built some things in frameworks like Svelte, Qwik, Solid. But also recently tried some Golang, moved away from document databases and started using Postgres/SQ(lite), dockerizing and automating tasks with scripts. Aiming to, someday, become an engineer that does not think in syntax, but rather in the problem domain and can solve problems with the right tool for the job.
          <small className="blocktext-[8px]">...If only we had more hours in a day...</small>
          </p>
        <a 
          href="https://remcostoeten.com" 
          target="_blank" 
          className="font-mono text-sm text-primary hover:text-primary/80 underline decoration-dashed underline-offset-4"
        >
          remcostoeten.com
        </a>
      </div>
    </Section>
  );
}

function SkillsSection() {
  const [showAll, setShowAll] = useState(false);
  const initialSkillCount = 15;
  
  const allSkills = [
    // Core Skills (Most Important)
    "TypeScript ❤️",
    "React",
    "NextJS ❤️",
    "Tailwind CSS ❤️",
    "Node",
    "JavaScript",
    "GraphQL",
    "REST",
    "HTML (BEM, WCAG)",
    "CSS/SCSS ❤️/LESS/Modules",
    "Styled Components",
    "Framer Motion",
    "PostgreSQL",
    "Prisma",
    "Docker",
    // Additional Skills
    "Shell",
    "Bash scripting",
    "DX junkie",
    "Vue2",
    "Svelte",
    "SQLite",
    "Postgres",
    "Drizzle ORM",
    "Turso",
    "Convex",
    "Firebase",
    "PlanetScale",
    "Git/GitHub/GitLab",
    "CI/CD",
    "Vercel",
    "Netlify",
    "AWS (Basic)",
    "JWT",
    "Next-Auth",
    "Clerk",
    "OAuth",
    "Jest",
    "Cypress",
    "ESLint",
    "Prettier",
    "Markdown(X)",
    "Multiple document frameworks",
    "Technical Writing",
    "JSDoc",
    "Magento 1&2",
    "KnockoutJS",
    "jQuery",
    "Adobe Creative Suite",
    "Figma",
    "UI/UX Principles",
    "Responsive Design",
    "Design Systems",
    "SOLID Principles",
    "Clean Code",
    "Agile/Scrum",
    "Kanban",
    "Code Review",
    "Chrome Extensions",
    "Browser Automation",
    "Selenium",
    "Custom CLI Tools",
    "Productivity Scripts"
  ];

  const visibleSkills = showAll ? allSkills : allSkills.slice(0, initialSkillCount);

  return (
    <Section>
      <h2 className="text-xl font-bold">Skills</h2>
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-1">
          {visibleSkills.map((skill, index) => (
            <Badge key={index} variant="secondary" className="transition-all">
              {skill}
            </Badge>
          ))}
        </div>
        {allSkills.length > initialSkillCount && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-sm text-muted-foreground hover:text-primary transition-colors self-start underline decoration-dashed underline-offset-4"
          >
            {showAll ? "Show Less" : `Show ${allSkills.length - initialSkillCount} More Skills...`}
          </button>
        )}
      </div>
    </Section>
  );
}

export default function Page() {
  return (
    <main className="container relative p-4 mx-auto overflow-auto scroll-my-12 md:p-16 print:p-12 ">
      <section className="w-full max-w-2xl mx-auto space-y-8 print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <div className="flex items-center gap-4">
              <Avatar className="w-20 h-20">
                <AvatarImage
                  src="https://media.licdn.com/dms/image/v2/C5603AQFIlU2oV2JEgg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1638502874619?e=1741824000&v=beta&t=Y3l-oyvbhSfnGtUNUu9KCiW9XlcCBFTtshMe8sIxdo4"
                  alt={RESUME_DATA.name}
                  className="object-cover"
                />
                <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
                <p className="max-w-md font-mono text-sm text-pretty text-muted-foreground">
                  {RESUME_DATA.about}
                </p>
              </div>
            </div>
            <p className="items-center max-w-md font-mono text-xs text-pretty text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {RESUME_DATA.location}
              </a>
            </p>
            <div className="flex pt-1 font-mono text-sm gap-x-2 text-muted-foreground print:hidden">
              {RESUME_DATA.contact.email && (
                <Button className="size-8" variant="social" size="icon" asChild>
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <MailIcon className="w-4 size-4" />
                  </a>
                </Button>
              )}
              {RESUME_DATA.contact.tel && (
                <Button className="size-8" variant="social" size="icon" asChild>
                  <a href={`tel:${RESUME_DATA.contact.tel}`}>
                    <PhoneIcon className="size-4" />
                  </a>
                </Button>
              )}
              <Button className="size-8" variant="social" size="icon" asChild>
                <Link
                  href="https://www.linkedin.com/in/remco-stoeten/"
                  target="_blank"
                >
                  <LinkedInIcon width={20} />
                </Link>
              </Button>
              <Button className="size-8" variant="social" size="icon" asChild>
                <Link href="https://github.com/remcostoeten" target="_blank">
                  <GithubIcon width={20} />
                </Link>
              </Button>
            </div>
            <div className="flex-col hidden font-mono text-sm gap-x-1 text-muted-foreground print:flex">
              {RESUME_DATA.contact.email && (
                <Button variant="social">
                  {" "}
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <span className="underline">
                      {RESUME_DATA.contact.email}
                    </span>
                  </a>
                </Button>
              )}
              {RESUME_DATA.contact.tel && (
                <Button variant="social">
                  <a href={`tel:${RESUME_DATA.contact.tel}`}>
                    <span className="underline">{RESUME_DATA.contact.tel}</span>
                  </a>
                </Button>
              )}
            </div>
          </div>
          </div>
        <AboutSection />
        <hr/>
        <Section>
          <h2 className="text-xl font-bold">Work Experience</h2>
          {RESUME_DATA.work.map((work, index) => {
            return (
              <>
                <Card key={work.company}>
                  <CardHeader>
                    <div className="flex items-center justify-between text-base gap-x-2">
                      <h3 className="inline-flex items-center justify-center font-semibold leading-none gap-x-1">
                        <a className="hover:underline" href={work.link}>
                          {work.company}
                        </a>
                        <span className="inline-flex gap-x-1">
                          {work.badges.map((badge) => (
                            <Badge
                              variant="secondary"
                              className="text-xs align-middle"
                              key={badge}
                            >
                              {badge}
                            </Badge>
                          ))}
                        </span>
                      </h3>
                      <div className="text-sm text-gray-500 tabular-nums">
                        {work.start} - {work.end ?? "Present"}
                      </div>
                    </div>
                    <h4 className="font-mono text-sm leading-none">
                      {work.title}
                    </h4>
                  </CardHeader>
                  <CardContent className="mt-2 text-xs">
                    {work.description}
                  </CardContent>
                </Card>
                {index < RESUME_DATA.work.length - 1 && (
                  <div className="my-3 w-full h-[1px] bg-border opacity-25" />
                )}
              </>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Education</h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between text-base gap-x-2">
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="text-sm text-gray-500 tabular-nums">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2">{education.degree}</CardContent>
              </Card>
            );
          })}
        </Section>
        <hr/>
        <SkillsSection />
        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-xl font-bold">Projects</h2>
          <p className="sub-text">
            Switch between my hobby projects and projects I&apos;ve made or
            contributed to at work. There are a lot of private/client projects
            which I can&apos;t share for obvious reasons. Small selection, I have tens, if not hundreds of projects locally close to MVP or abandoned.
          </p>
          <div className="mt-4">
            <ProjectSection projects={RESUME_DATA.projects} />
          </div>
        </Section>
      </section>
      <div className="!no-print absolute right-0 top-0">
        <ThemeToggle />
      </div>
      <div className="relative">
        <CommandMenu
          links={[
            {
              url: RESUME_DATA.personalWebsiteUrl,
              title: "Personal Website",
            },
            ...RESUME_DATA.contact.social.map((socialMediaLink, index) => ({
              url: socialMediaLink.url,
              title: socialMediaLink.name,
              key: index,
            })),
          ]}
        />
      </div>
    </main>
  );
}
